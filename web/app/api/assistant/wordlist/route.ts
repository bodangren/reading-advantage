import OpenAI from "openai";
import db from "@/configs/firestore-config";
import storage from "@/utils/storage";
import { generateAudioWord } from "@/server/utils/generators/audio-words-generator";
import { AUDIO_WORDS_URL } from "@/server/constants";

export async function POST(req: Request, res: Response) {
  try {
    const param = await req.json();

    // First need to find the word list of the article in db
    const wordListRef = db.collection(`word-list`).doc(param?.articleId);
    const wordListSnapshot = await wordListRef.get();

    if (wordListSnapshot?.exists) {
      const dataList = wordListSnapshot.data();
      return new Response(
        JSON.stringify({
          messages: "success",
          word_list: dataList?.word_list,
          timepoints: dataList?.timepoints,
        }),
        { status: 200 }
      );
    } else {
      const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
      });

      const prompt_user = `Extract the ten most difficult vocabulary words, phrases, or idioms from the following passage: ${param.article.passage}`;

      const schema = {
        type: "object",
        properties: {
          word_list: {
            type: "array",
            items: {
              type: "object",
              properties: {
                vocabulary: {
                  type: "string",
                  description: "A difficult vocabulary word, phrase, or idiom.",
                },
                definition: {
                  type: "object",
                  properties: {
                    en: {
                      type: "string",
                      description:
                        "The English definition of the vocabulary in simple language.",
                    },
                    th: {
                      type: "string",
                      description: "The Thai translation of the vocabulary.",
                    },
                    cn: {
                      type: "string",
                      description:
                        "The Simplified Chinese translation of the vocabulary.",
                    },
                    tw: {
                      type: "string",
                      description:
                        "The Traditional Chinese translation of the vocabulary.",
                    },
                    vi: {
                      type: "string",
                      description:
                        "The Vietnamese translation of the vocabulary.",
                    },
                  },
                },
              },
            },
          },
        },
        required: ["word_list"],
      };

      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are an article database assisstant.",
          },
          { role: "user", content: `${prompt_user}` },
        ],
        functions: [
          {
            name: "extract_difficult_vocabulary",
            description:
              "Extracts the ten most difficult vocabulary words, phrases, or idioms from a given passage and provides their definitions or translations in multiple languages.",
            parameters: schema,
          },
        ],
        function_call: {
          name: "extract_difficult_vocabulary",
        },
        temperature: 0.7,
      });

      // Save to db
      const resultWordList = JSON.parse(
        response.choices[0].message.function_call?.arguments as string
      )?.word_list;

      const passage = resultWordList.map((item: any) => item?.vocabulary);

      const fileExtension = ".mp3";

      // const fileExists = await storage
      //   .bucket("artifacts.reading-advantage.appspot.com")
      //   .file(`${AUDIO_WORDS_URL}/${param?.articleId}${fileExtension}`)
      //   .exists();

      await wordListRef.set({
        word_list: resultWordList,
        articleId: param.articleId,
      });

      // if (!fileExists[0]) {
      await generateAudioWord({
        passage: passage,
        articleId: param?.articleId,
      });
      // }

      const dataList = await wordListSnapshot.data();

      console.log("dataList : ", dataList);

      return new Response(
        JSON.stringify({
          messages: "success",
          word_list: resultWordList,
          // timepoints: allTimePoints,
        }),
        { status: 200 }
      );
    }
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: `failed to generate audio: ${
          error as unknown
        } \n\n axios error: ${JSON.stringify((error as any).response.data)}`,
      }),
      { status: 500 }
    );
  }

  /*
  try {
    const param = await req.json();

    // First need to find the word list of the article in db
    const articleRef = db.collection(`word-list`).doc(param?.articleId);
    const articleSnapshot = await articleRef.get();
    const article = articleSnapshot.data();

    if (articleSnapshot?.exists) {
      return new Response(
        JSON.stringify({
          messages: "success",
          word_list: article?.word_list,
          timepoints: article?.timepoints,
        }),
        { status: 200 }
      );
    } else {
      const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
      });

      const prompt_user = `Extract the ten most difficult vocabulary words, phrases, or idioms from the following passage: ${param.article.passage}`;

      const schema = {
        type: "object",
        properties: {
          word_list: {
            type: "array",
            items: {
              type: "object",
              properties: {
                vocabulary: {
                  type: "string",
                  description: "A difficult vocabulary word, phrase, or idiom.",
                },
                definition: {
                  type: "object",
                  properties: {
                    en: {
                      type: "string",
                      description:
                        "The English definition of the vocabulary in simple language.",
                    },
                    th: {
                      type: "string",
                      description: "The Thai translation of the vocabulary.",
                    },
                    cn: {
                      type: "string",
                      description:
                        "The Simplified Chinese translation of the vocabulary.",
                    },
                    tw: {
                      type: "string",
                      description:
                        "The Traditional Chinese translation of the vocabulary.",
                    },
                    vi: {
                      type: "string",
                      description:
                        "The Vietnamese translation of the vocabulary.",
                    },
                  },
                },
              },
            },
          },
        },
        required: ["word_list"],
      };

      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are an article database assisstant.",
          },
          { role: "user", content: `${prompt_user}` },
        ],
        functions: [
          {
            name: "extract_difficult_vocabulary",
            description:
              "Extracts the ten most difficult vocabulary words, phrases, or idioms from a given passage and provides their definitions or translations in multiple languages.",
            parameters: schema,
          },
        ],
        function_call: {
          name: "extract_difficult_vocabulary",
        },
        temperature: 0.7,
      });

      // Save to db
      const resultWordList = JSON.parse(
        response.choices[0].message.function_call?.arguments as string
      )?.word_list;

      await articleRef.set({
        word_list: resultWordList,
        articleId: param.articleId,
      });

      // gen file audio
      const passage = resultWordList.map((item: any) => item.vocabulary);

      try {
        // validate audio words
        const fileExtention = ".mp3";
        const fileExists = await storage
          .bucket("artifacts.reading-advantage.appspot.com")
          .file(`${AUDIO_WORDS_URL}/${param?.articleId}${fileExtention}`)
          .exists();
        if (!fileExists[0]) {
          await generateAudioWord({
            passage: passage,
            articleId: param?.articleId,
          });
        }
      } catch (error) {
        throw new Error(`failed to generate audio: ${error}`);
      }

      return new Response(
        JSON.stringify({
          messages: "success",
          word_list: resultWordList,
        }),
        { status: 200 }
      );
    }
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Internal server error",
      }),
      { status: 500 }
    );
  }
 */
}
