import { NextRequest, NextResponse } from "next/server";
import { sendDiscordWebhook } from "../utils/send-discord-webhook";
import { ArticleCefrLevel, ArticleType } from "../models/enum";
import { randomSelectGenre } from "../generators/random-select-genre";
import { generateTopic } from "../generators/topic-generator";
import { generateArticle } from "../generators/article-generator";
import { evaluateRating } from "../generators/evaluate-rating-generator";
import { generateMCQuestion } from "../generators/mc-question-generator";
import { generateSAQuestion } from "../generators/sa-question-generator";
import { generateLAQuestion } from "../generators/la-question-generator";
import { calculateLevel } from "@/lib/calculateLevel";
import db from "@/configs/firestore-config";
import { generateAudio } from "../generators/audio-generator";
import { generateImage } from "../generators/image-generator";

async function generateByGenre(
    type: ArticleType,
    amountPerGenre: number
): Promise<unknown[]> {
    console.log("Selecting random genre...");
    const randomGenre = await randomSelectGenre({ type });

    console.log("Generating topic...");
    const generatedTopic = await generateTopic({
        type: type,
        genre: randomGenre.genre,
        subgenre: randomGenre.subgenre,
        amountPerGenre: amountPerGenre,
    });

    // Process each topic and wait for all tasks to complete
    const queue = generatedTopic.topics.flatMap((topic) => [
        processQueue(
            type,
            randomGenre.genre,
            randomGenre.subgenre,
            topic,
            ArticleCefrLevel.A1
        ),
        processQueue(
            type,
            randomGenre.genre,
            randomGenre.subgenre,
            topic,
            ArticleCefrLevel.A2
        ),
        processQueue(
            type,
            randomGenre.genre,
            randomGenre.subgenre,
            topic,
            ArticleCefrLevel.B1
        ),
        processQueue(
            type,
            randomGenre.genre,
            randomGenre.subgenre,
            topic,
            ArticleCefrLevel.B2
        ),
        processQueue(
            type,
            randomGenre.genre,
            randomGenre.subgenre,
            topic,
            ArticleCefrLevel.C1
        ),
        processQueue(
            type,
            randomGenre.genre,
            randomGenre.subgenre,
            topic,
            ArticleCefrLevel.C2
        ),
    ]);

    return Promise.all(queue);
}

async function evaluateArticle(
    type: ArticleType,
    genre: string,
    subgenre: string,
    topic: string,
    cefrLevel: ArticleCefrLevel,
    maxAttempts: number = 2
) {
    let attempts = 0;
    let generatedArticle;

    while (attempts < maxAttempts) {
        console.log("Generating article...");
        generatedArticle = await generateArticle({
            type,
            genre,
            subgenre,
            topic,
            cefrLevel,
        });

        console.log("Evaluating rating...");
        const evaluatedRating = await evaluateRating({
            type,
            genre,
            subgenre,
            topic,
            cefrLevel,
            title: generatedArticle.title,
            summary: generatedArticle.summary,
            passage: generatedArticle.passage,
        });
        console.log(`Rating: ${evaluatedRating.rating}`);

        if (evaluatedRating.rating > 2) {
            return { article: generatedArticle, rating: evaluatedRating.rating };
        }

        attempts++;
        console.log(`Failed to evaluate rating: ${evaluatedRating.rating}`);
        console.log(`Regenerating article... Attempt (${attempts}/${maxAttempts})`);
    }

    throw new Error("Failed to generate article: max attempts reached");
}

async function processQueue(
    type: ArticleType,
    genre: string,
    subgenre: string,
    topic: string,
    cefrLevel: ArticleCefrLevel
): Promise<void> {
    const { article: generatedArticle, rating } = await evaluateArticle(
        type,
        genre,
        subgenre,
        topic,
        cefrLevel
    );

    console.log("Generating questions...");
    const mcq = await generateMCQuestion({
        type,
        cefrlevel: cefrLevel,
        passage: generatedArticle.passage,
        title: generatedArticle.title,
        summary: generatedArticle.summary,
        imageDesc: generatedArticle.imageDesc,
    });
    const saq = await generateSAQuestion({
        type,
        cefrlevel: cefrLevel,
        passage: generatedArticle.passage,
        title: generatedArticle.title,
        summary: generatedArticle.summary,
        imageDesc: generatedArticle.imageDesc,
    });
    const laq = await generateLAQuestion({
        type,
        cefrlevel: cefrLevel,
        passage: generatedArticle.passage,
        title: generatedArticle.title,
        summary: generatedArticle.summary,
        imageDesc: generatedArticle.imageDesc,
    });

    const { cefrLevel: calculatedCefrLevel, raLevel } = calculateLevel(
        generatedArticle.passage
    );

    const articleDoc = await db.collection("new-articles").add({
        average_rating: rating,
        cefr_level: calculatedCefrLevel,
        created_at: new Date().toISOString(),
        genre,
        image_description: generatedArticle.imageDesc,
        passage: generatedArticle.passage,
        ra_level: raLevel,
        read_count: 0,
        subgenre,
        summary: generatedArticle.summary,
        title: generatedArticle.title,
        type,
    });

    await Promise.all([
        ...mcq.questions.map((question) =>
            db
                .collection("new-articles")
                .doc(articleDoc.id)
                .collection("mc-questions")
                .add(question)
        ),
        ...saq.questions.map((question) =>
            db
                .collection("new-articles")
                .doc(articleDoc.id)
                .collection("sa-questions")
                .add(question)
        ),
        db
            .collection("new-articles")
            .doc(articleDoc.id)
            .collection("la-questions")
            .add(laq),
        generateAudio({
            passage: generatedArticle.passage,
            articleId: articleDoc.id,
        }),
        generateImage({
            imageDesc: generatedArticle.imageDesc,
            articleId: articleDoc.id,
        }),
    ]);
}

// Generate article queue
export async function generateArticleQueue(
    req: NextRequest,
    params: unknown,
    next: () => void
) {
    try {
        const { amountPerGenre } = await req.json();
        if (!amountPerGenre) {
            return NextResponse.json(
                { message: "Could not generate queue: amountPerGenre is required" },
                { status: 400 }
            );
        }

        const timeTaken = Date.now();
        const userAgent = req.headers.get("user-agent") || "";
        const reqUrl = req.url;
        const amount = parseInt(amountPerGenre);

        await sendDiscordWebhook({
            title: "Queue Generated",
            embeds: [
                {
                    description: {
                        "amount per genre": amountPerGenre,
                        total: `${amount * 6 * 2}`,
                    },
                    color: 0x0099ff,
                },
            ],
            reqUrl,
            userAgent,
        });

        const fictionQueue = await generateByGenre(ArticleType.FICTION, amount);
        const nonFictionQueue = await generateByGenre(
            ArticleType.NONFICTION,
            amount
        );

        const combinedQueue = [...fictionQueue, ...nonFictionQueue];

        const failedResults = combinedQueue.filter(
            (result) => typeof result === "string"
        );
        const failedCount = failedResults.length;

        const timeTakenMinutes = (Date.now() - timeTaken) / 1000 / 60;

        await sendDiscordWebhook({
            title: "Queue Generation Complete",
            embeds: [
                {
                    description: {
                        "amount per genre": amountPerGenre,
                        total: `${amount * 6 * 2}`,
                        "failed count": `${failedCount}`,
                        "time taken": `${timeTakenMinutes.toFixed(2)} minutes`,
                    },
                    color: 0x0099ff,
                },
            ],
            reqUrl,
            userAgent,
        });

        return NextResponse.json({
            message: "Queue generation complete",
            total: amount * 6 * 2,
            failedCount,
            timeTaken: timeTakenMinutes,
            results: combinedQueue,
        });
    } catch (error) {
        await sendDiscordWebhook({
            title: "Queue Generation Failed",
            embeds: [
                {
                    description: {
                        error: `${error}`,
                    },
                    color: 0xff0000,
                },
            ],
            reqUrl: "unknown",
            userAgent: "unknown",
        });
        return NextResponse.json({ message: error }, { status: 500 });
    }
}
