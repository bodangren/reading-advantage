/* eslint-disable react-hooks/exhaustive-deps */
// "use client";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useScopedI18n } from "@/locales/client";
import { v4 as uuidv4 } from "uuid";
import { Button } from "./ui/button";
import { Header } from "./header";
import { toast } from "./ui/use-toast";
import { splitToText } from "@/lib/utils";
import { DragDropContext } from "@hello-pangea/dnd";
import type { DropResult, DraggableId, DraggableLocation } from "@hello-pangea/dnd";

type Props = {
  userId: string;
};

type Sentence = {
  articleId: string;
  createdAt: { _seconds: number; _nanoseconds: number };
  endTimepoint: number;
  sentence: string;
  sn: number;
  timepoint: number;
  translation: { th: string };
  userId: string;
  id: string;
};

type Article = {
  text?: string;
  begin: number;
};

type Id = string;

export interface Quote {
  id: Id;
  content: string;
}

export interface Dragging {
  id: DraggableId;
  location: DraggableLocation;
}

export interface QuoteMap {
  [key: string]: Quote[];
}

export interface Task {
  id: Id;
  content: string;
}


export default function OrderSentences({ userId }: Props) {
  const t = useScopedI18n("pages.student.practicePage");
  const [articleBeforeRandom, setArticleBeforeRandom] = useState<any[]>([]);
  const [articleRandom, setArticleRandom] = useState<any[]>([]);
  const [article, setArticle] = useState<Article[]>([]);

  // ฟังก์ชันเพื่อค้นหา text ก่อน, ณ ลำดับนั้น, และหลังลำดับ
  const findTextsByIndexes = (objects: Article[], targetIndexes: number[]) => {
    return targetIndexes.map((index: number) => {
      const before =
        index - 1 >= 0
          ? { index: index - 1, text: objects[index - 1]?.text }
          : null; //index - 1 >= 0 ? objects[index - 1]?.text : "ไม่มีข้อมูล";
      const current = { index: index, text: objects[index]?.text };
      const after =
        index + 1 < objects.length
          ? { index: index + 1, text: objects[index + 1]?.text }
          : null;
      return { before, current, after };
    });
  };

  // สร้างฟังก์ชันเพื่อจัดการข้อมูล
  const processDynamicData = (data: any) => {
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
        index,
        text: uniqueTexts.get(index),
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
    const resultsProcess = await processDynamicData(resultsFindTexts);
    return { title: res.data.article.title, result: resultsProcess };
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

  const onDragEnd = (result:any) => {
    /*
    const { source, destination } = result;

    // If dropped outside the list
    if (!destination) {
      return;
    }

    // Only proceed if dropped in the same list
    if (source.droppableId === destination.droppableId) {
      const sectionIndex = parseInt(
        source.droppableId.replace("droppable-", ""),
        10
      );
      const reorderedItems = reorder(
        articleRandom[sectionIndex].result,
        source.index,
        destination.index
      );

      const newData = [...articleRandom];
      newData[sectionIndex].result = reorderedItems;
      setArticleRandom(newData);
    }
    */
  };

  // Reordering the result list
  const reorder = (list: any, startIndex:number, endIndex:number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  useEffect(() => {
    getUserSentenceSaved();
  }, []);

  console.log("articleBeforeRandom : ", articleBeforeRandom);
  console.log("articleRandom : ", articleRandom);
  
  // https://github.com/hello-pangea/dnd/blob/main/stories/src/vertical-grouped/quote-app.tsx
  // https://github.com/hello-pangea/dnd/blob/main/stories/src/reorder.ts
  // https://dnd.hellopangea.com/?path=/story/examples-complex-vertical-list--grouped

  return (
    <>
      <Header
        heading={t("OrderSentences")}
        text={t("OrderSentencesDescription")}
      />
      <div className="mt-5">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="bg-stone-300 flex"> {/*Root */}
            <div className="flex h-screen overflow-auto flex-col"></div> {/*Column */}
          </div>
        </DragDropContext>

        {/* 
        <DragDropContext onDragEnd={onDragEnd}>
          {articleRandom.map((section, sectionIndex) => (
            <div key={section.title}>
              <h2 className="my-5">{section.title}</h2>
              <Droppable droppableId={`droppable-${sectionIndex}`}>
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    {section.result.map((item: any, index: number) => (
                      <Draggable
                        key={item.index}
                        draggableId={`item-${item.index}`}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              userSelect: "none",
                              padding: 16,
                              margin: "0 0 8px 0",
                              minHeight: "50px",
                              backgroundColor: "#fff",
                              color: "#333",
                              border: "1px solid #210eef",
                              ...provided.draggableProps.style,
                            }}
                          >
                            {item.text}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </DragDropContext>     
         */}
      </div>
    </>
  );
}
