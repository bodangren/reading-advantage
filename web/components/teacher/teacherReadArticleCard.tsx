// import React from "react";
// import {
//   Card,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import Image from "next/image";
// import ArticleContent from "../article-content";
// import { Badge } from "../ui/badge";
// import { getScopedI18n } from "@/locales/server";
// import { ArticleFooter } from "../article-footer";
// import RatingPopup from "../rating-popup";
// import { Button } from "../ui/button";
// import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
// import {Link }from "react-router-dom";
// import AssignDialog from "./assign-dialog";
// import { Article } from "@/components/models/article-model";

// type Props = {
//   article: Article;
//   articleId: string;
//   userId: string;
// };

// export default async function TeahcerReadArticleCard({
//   article,
//   articleId,
//   userId,
// }: Props) {
//   const t = await getScopedI18n("components.articleCard");
//   return (
//       <div className="mt-4 md:basis-3/5">
//         <Card>
//           <CardHeader>
//             <CardTitle className="font-bold text-3xl md:text-3xl">
//               {article.title}
//             </CardTitle>
//             <div className="flex flex-wrap gap-3">
//               <Badge>
//                 {t("raLevel", {
//                   raLevel: article.ra_level,
//                 })}
//               </Badge>
//               <Badge>
//                 {t("cefrLevel", {
//                   cefrLevel: article.cefr_level,
//                 })}
//               </Badge>
//             </div>
//             <CardDescription>Description of the article</CardDescription>
//             <div className="flex justify-center">
//               <Image
//                 src={`https://storage.googleapis.com/artifacts.reading-advantage.appspot.com/images/${articleId}.png`}
//                 alt="Malcolm X"
//                 width={640}
//                 height={640}
//               />
//             </div>
//             <ArticleContent
//               article={article}
//               articleId={articleId}
//               userId={userId}
//             />
//           </CardHeader>
//           <ArticleFooter />
//         </Card>
//         <RatingPopup
//           userId={userId}
//           averageRating={article.average_rating}
//           articleId={articleId}
//         />
//       </div>
//   );
// }