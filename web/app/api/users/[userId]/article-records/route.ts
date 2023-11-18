// user/[userId/articles-records
// this route is used to update user level and update user-article-record
import db from "@/configs/firestore-config";
import { authOptions } from "@/lib/auth";
import { ArticleRecord } from "@/types";
import { RecordStatus } from "@/types/constants";
import { getServerSession } from "next-auth";
import * as z from "zod"

// get user-article-record
export async function GET(req: Request, res: Response) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return new Response(JSON.stringify({
                message: 'Unauthorized',
            }), { status: 403 })
        }
        const userId = session.user.id;

        // get all user-article-records of user
        const userArticleRecords = db.collection('user-article-records')
            .where('userId', '==', userId)
            .orderBy('createdAt', 'desc')

        const articlesSnapshot = await userArticleRecords.get();
        const articles = articlesSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        //update the score for each article
        //if correct, add 1 to score
        //[
        // {
        //     id: '107971409656362948566-eaZfMMF3sKNBte3PQAJR',
        //     createdAt: Timestamp { _seconds: 1697136072, _nanoseconds: 386000000 },
        //     articleId: 'eaZfMMF3sKNBte3PQAJR',
        //     userId: '107971409656362948566',
        //     title: 'The Brave Knight',
        //     rating: 5,
        //     timeRecorded: 10,
        //     questions: [ [Object], [Object], [Object], [Object] ],
        //     short_answer: { answer: 'Test', timeLogged: 10 },
        //     userLevel: 52,
        //     updatedLevel: 54,
        //     status: 'completed',
        //     updatedAt: Timestamp { _seconds: 1697138715, _nanoseconds: 409000000 }
        //   },
        //   {
        //     id: '107971409656362948566-0RUGE54HL78QmhLQE8X4',
        //     createdAt: Timestamp { _seconds: 1697135444, _nanoseconds: 619000000 },
        //     articleId: '0RUGE54HL78QmhLQE8X4',
        //     userId: '107971409656362948566',
        //     timeRecorded: 8,
        //     questions: [ [Object], [Object], [Object], [Object] ],
        //     title: 'African Mythology: Anansi the Trickster and His Tales',
        //     status: 'uncompletedShortAnswer',
        //     updatedAt: Timestamp { _seconds: 1697135452, _nanoseconds: 763000000 }
        //   },
        //   {
        //     id: '107971409656362948566-kVMK2LcKTbHf3DMaiXFq',
        //     createdAt: Timestamp { _seconds: 1697133218, _nanoseconds: 942000000 },
        //     articleId: 'kVMK2LcKTbHf3DMaiXFq',
        //     userId: '107971409656362948566',
        //     title: 'Toco Toucan: The Colorful Bird of the Rainforest',
        //     timeRecorded: 6,
        //     questions: [ [Object], [Object], [Object], [Object] ],
        //     short_answer: { answer: 'IDK', timeLogged: 6 },
        //     userLevel: 48,
        //     updatedLevel: 50,
        //     rating: 5,
        //     status: 'completed',
        //     updatedAt: Timestamp { _seconds: 1697135798, _nanoseconds: 819000000 }
        //   }
        // ]
        // const articlesWithScore = articles.map((article: any) => {
        //     let score = 0;
        //     article.questions.forEach((question: any) => {
        //         if (question.isCorrect) {
        //             score += 1;
        //         }
        //     });
        //     return {
        //         ...article,
        //         score,
        //     }
        // });
        // console.log('articlesWithScore', articlesWithScore);
        console.log('articles', articles);
        return new Response(JSON.stringify({
            message: 'success',
            // articles: articlesWithScore,
            articles: articles,
        }), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify({
            message: error,
        }), { status: 500 })
    }
};

const userArticleRecordSchema = z.object({
    articleId: z.string(),
    rating: z.number(),
})
// update user level
export async function PATCH(req: Request, res: Response) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return new Response(JSON.stringify({
                message: 'Unauthorized',
            }), { status: 403 })
        }

        const json = await req.json();
        const body = userArticleRecordSchema.parse(json);
        const articleId = body.articleId;
        const rating = body.rating;

        const userId = session.user.id;
        const userLevel = session.user.level;

        // update user level
        const userRef = db.collection('users')
            .doc(userId)
            .update({
                level: userLevel + (rating - 3),
            });
        console.log('new level', userLevel + (rating - 3));

        const article = await db.collection('articles').doc(articleId).get();

        const averageRating = article.data()?.averageRating || 0;
        const totalRating = article.data()?.totalRatings || 0;
        const newAverageRating = (averageRating * totalRating + rating) / (totalRating + 1);
        const newTotalRatings = totalRating + 1;
        // update article
        const articleRef = db.collection('articles')
            .doc(articleId)
            .update({
                averageRating: newAverageRating,
                totalRatings: newTotalRatings,
            });

        // update user level
        const userArticleRecord = db.collection('user-article-records').doc(`${userId}-${articleId}`);
        const userArticleRecordSnapshot = await userArticleRecord.get();
        const userArticleRecordData = userArticleRecordSnapshot.data();

        let percentageCorrect = 0;
        console.log('userArticleRecordData?.questions', userArticleRecordData?.questions);
        userArticleRecordData?.questions.forEach((question: any) => {
            if (question.isCorrect) {
                percentageCorrect += 1;
            }
        });
        percentageCorrect = percentageCorrect / userArticleRecordData?.questions.length;
        console.log('percentageCorrect', percentageCorrect);

        let newLevel = 0;
        if (percentageCorrect >= 0.9) {
            newLevel = article.data()?.raLevel + 1;
            console.log('newLevel + 1', newLevel);
        } else if (percentageCorrect >= 0.7) {
            newLevel = article.data()?.raLevel;
            console.log('newLevel + 0', newLevel);
        } else if (percentageCorrect >= 0.4) {
            newLevel = article.data()?.raLevel - 1;
            console.log('newLevel - 1', newLevel);
        } else {
            newLevel = article.data()?.raLevel - 2;
            console.log('newLevel - 2', newLevel);
        }
        console.log('article.data()?.raLevel', article.data()?.raLevel);
        console.log('userLevel', userLevel);
        console.log('newLevel', newLevel);
        // update user-article-record
        const userArticleRecordRef = db.collection('user-article-records')
            .doc(`${userId}-${articleId}`)
            .update({
                rating: rating,
                status: RecordStatus.COMPLETED,
                userLevel: userLevel,
                updatedLevel: newLevel,
                updatedAt: new Date(),
            });
        return new Response(JSON.stringify({
            message: 'success',
            level: newLevel,
        }), { status: 200 })
    } catch (error) {
        console.log('error', error);
        return new Response(JSON.stringify({
            message: error,
        }), { status: 500 })
    }
};