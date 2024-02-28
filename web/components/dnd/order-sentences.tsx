/* eslint-disable react-hooks/exhaustive-deps */
// "use client";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { DragDropContext } from "@hello-pangea/dnd";
import type { DropResult } from "@hello-pangea/dnd";
import { useScopedI18n } from "@/locales/client";
import { Header } from "../header";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";
import { Skeleton } from "../ui/skeleton";
import { splitToText } from "@/lib/utils";
import { Article, Quote, Sentence } from "./types";
import QuoteList from "./quote-list";

type Props = {
  userId: string;
};

export default function OrderSentences({ userId }: Props) {
  const t = useScopedI18n("pages.student.practicePage");
  const [articleBeforeRandom, setArticleBeforeRandom] = useState<any[]>([]);
  const [articleRandom, setArticleRandom] = useState<any[]>([]);
  const [listArticle, setListArticle] = useState<any>([
    {
      title: "The Brave Little Mouse",
      result: [
        {
          id: 1,
          text: "Milo was small but had a big heart.",
          title: "The Brave Little Mouse",
        },
        {
          id: 2,
          text: "He loved his family very much.",
          title: "The Brave Little Mouse",
        },
        {
          id: 3,
          text: "One day, a group of mean cats came to the burrow.",
          title: "The Brave Little Mouse",
        },
        {
          id: 5,
          text: "He thought of a plan.",
          title: "The Brave Little Mouse",
        },
        {
          id: 6,
          text: "Milo sneaked out of the burrow and found a big bowl of milk.",
          title: "The Brave Little Mouse",
        },
      ],
    },
  ]);

  // ฟังก์ชันเพื่อค้นหา text ก่อน, ณ ลำดับนั้น, และหลังลำดับ
  const findTextsByIndexes = (objects: Article[], targetIndexes: number[]) => {
    return targetIndexes.map((index: number) => {
      const before =
        index - 1 >= 0
          ? { index: index - 1, text: objects[index - 1]?.text }
          : null;
      const current = { index: index, text: objects[index]?.text };
      const after =
        index + 1 < objects.length
          ? { index: index + 1, text: objects[index + 1]?.text }
          : null;
      return { before, current, after };
    });
  };

  // สร้างฟังก์ชันเพื่อจัดการข้อมูล
  const processDynamicData = (data: any, title: string) => {
    // ใช้ Map เพื่อจัดการการซ้ำของข้อมูล
    const uniqueTexts = new Map();

    // วนลูปเพื่อดึงข้อมูลจากแต่ละส่วน
    data.forEach((group: any) => {
      // ดึงข้อมูล before, current, after และเพิ่มลงใน Map
      [group?.before, group?.current, group?.after].forEach((item) => {
        if (item !== null) {
          uniqueTexts.set(item?.index, item?.text);
        }
      });
    });

    // แปลง Map เป็น Array และเรียงลำดับตาม index
    return Array.from(uniqueTexts.keys())
      .sort((a, b) => a - b)
      .map((index) => ({
        id: index,
        text: uniqueTexts.get(index),
        title,
      }));
  };

  const shuffleArray = (data: any) => {
    const raeData = JSON.parse(JSON.stringify(data));

    // Loop through each section in the data
    raeData.forEach((section: any) => {
      // Check if the result array has at least two items to swap
      for (let i = section.result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [section.result[i], section.result[j]] = [
          section.result[j],
          section.result[i],
        ];
      }
    });
    return raeData;
  };

  const getArticle = async (articleId: string, sn: number[]) => {
    const res = await axios.get(`/api/articles/${articleId}`);
    const textList = await splitToText(res.data.article);
    const resultsFindTexts = await findTextsByIndexes(textList, sn);
    const resultsProcess = await processDynamicData(
      resultsFindTexts,
      res.data.article.title
    );

    if (resultsProcess.length > 5) {
      return {
        title: res.data.article.title,
        result: resultsProcess.slice(0, 5),
      };
    } else {
      return { title: res.data.article.title, result: resultsProcess };
    }
  };

  const getUserSentenceSaved = async () => {
    try {
      const res = await axios.get(`/api/users/${userId}/sentences`);
      // step 1: get the article id and get sn
      const objectSentence: Sentence[] = res.data.sentences;

      // step 2 : create map articleId และ Array ของ sn
      const articleIdToSnMap: { [key: string]: number[] } =
        objectSentence.reduce((acc: { [key: string]: number[] }, article) => {
          if (!acc[article.articleId]) {
            acc[article.articleId] = [article.sn];
          } else {
            acc[article.articleId].push(article.sn);
          }
          return acc;
        }, {});

      // step 3 : เรียงลำดับค่า sn สำหรับแต่ละ articleId
      for (const articleId in articleIdToSnMap) {
        articleIdToSnMap[articleId].sort((a, b) => a - b);
      }

      // step 4 : get sentence from articleId and sn
      const newTodos = [...articleBeforeRandom];
      for (const articleId in articleIdToSnMap) {
        let resultList = await getArticle(
          articleId,
          articleIdToSnMap[articleId]
        );
        newTodos.push(resultList);
      }
      setArticleBeforeRandom(newTodos);
      setArticleRandom(shuffleArray(newTodos));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserSentenceSaved();
  }, []);

  // Drag and Drop
  const onDragStart = () => {
    // Add a little vibration if the browser supports it.
    // Add's a nice little physical feedback
    console.log("onDragStart");
    if (window.navigator.vibrate) {
      window.navigator.vibrate(100);
    }
  };

  const onDragEnd = (result: DropResult) => {
    console.log("===== onDragEnd ======");
    console.log("===== result ====== : ", result);
    console.log("===== listArticle ====== : ", listArticle);

    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    // ตรวจสอบก่อนว่า listArticle มีค่า และ listArticle.result ไม่เป็น undefined
    const items = listArticle[0]?.result ? Array.from(listArticle[0].result) : [];

    // ต่อไปนี้คือการใช้งาน splice โดยตรวจสอบก่อนว่า items ไม่เป็น undefined
    if (items.length > 0) {
      const [removed] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, removed);
    
     console.log("removed : ", removed);
     console.log("items : ", items);
     console.log("=================");
     setListArticle((prevState : any) => ([{
       ...prevState,
       result: items,
     }]));
    } else {
      console.log("No items to remove");
    }
  };

  return (
    <>
      <Header
        heading={t("OrderSentences")}
        text={t("OrderSentencesDescription")}
      />
      <div className="mt-5">
        {articleRandom.length === 0 ? (
          <div className="grid w-full gap-10">
            <div className="mx-auto w-[800px] space-y-6">
              <Skeleton className="h-[200px] w-full" />
              <Skeleton className="h-[20px] w-2/3" />
              <Skeleton className="h-[20px] w-full" />
              <Skeleton className="h-[20px] w-full" />
            </div>
          </div>
        ) : (
          <>
            <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
              <div className="bg-[#2684FFß] flex max-w-screen-lg">
                <div className="flex flex-col h-screen w-screen overflow-auto  bg-[#DEEBFF] dark:text-white dark:bg-[#1E293B]">
                  <h4 className="py-4 pl-5">{listArticle[0]?.title}</h4>
                  <QuoteList
                    listId={"list"}
                    listType={"0"}
                    quotes={listArticle[0].result}
                  />
                </div>
              </div>
            </DragDropContext>           
          </>
        )}
      </div>
    </>
  );
}
