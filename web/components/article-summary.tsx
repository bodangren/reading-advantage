"use client";
import React from "react";
import axios from "axios";
import { useCurrentLocale } from "@/locales/client";
import { Article } from "./models/article-model";

type Props = {
  article: Article;
  articleId: string;
};

async function getTranslate(
  sentences: string[],
  articleId: string,
  language: string
) {
  const res = await axios.post(
    `/api/articles/${articleId}/translate/google/summary`,
    {
      sentences,
      language,
    }
  );
  return res.data;
}

export function ArticleSummary({ article, articleId }: Props) {
  const [summarySentence, setSummarySentence] = React.useState<string[]>([]);
  const locale = useCurrentLocale();

  React.useEffect(() => {
    handleTranslateSummary();
  }, [article, locale]);

  async function handleTranslateSummary() {
    if (!locale || locale === "en") {
      return;
    }
    type ExtendedLocale = "th" | "cn" | "tw" | "vi" | "zh-CN" | "zh-TW";
    let localeTarget: ExtendedLocale = locale as ExtendedLocale;
    switch (locale) {
      case "cn":
        localeTarget = "zh-CN";
        break;
      case "tw":
        localeTarget = "zh-TW";
        break;
    }
    const res = await getTranslate([article.summary], articleId, localeTarget);

    setSummarySentence(res.translation);
  }

  return <>{locale == "en" ? article.summary : summarySentence}</>;
}
