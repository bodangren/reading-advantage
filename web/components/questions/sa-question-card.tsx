"use client";
import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import TextareaAutosize from "react-textarea-autosize";
import QuestionHeader from "./question-header";
import { QuizContext, QuizContextProvider } from "@/contexts/quiz-context";
import { Skeleton } from "../ui/skeleton";
import { Badge } from "../ui/badge";
import { useScopedI18n } from "@/locales/client";
import { Button } from "../ui/button";
import { ShortAnswerQuestion } from "../models/questions-model";
import { Icons } from "../icons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import Rating from "@mui/material/Rating";
import { toast } from "../ui/use-toast";
import { useQuestionStore } from "@/store/question-store";
import { UserX } from "lucide-react";
import { levelCalculation } from "@/lib/utils";

type Props = {
  userId: string;
  userLevel: number;
  articleId: string;
  userXP: number;
};

export type QuestionResponse = {
  result: ShortAnswerQuestion;
  suggested_answer: string;
  state: QuestionState;
  answer: string;
};

type AnswerResponse = {
  state: QuestionState;
  answer: string;
  suggested_answer: string;
};

enum QuestionState {
  LOADING = 0,
  INCOMPLETE = 1,
  COMPLETED = 2,
  ERROR = 3,
}

export default function SAQuestionCard({
  userId,
  articleId,
  userLevel,
  userXP,
}: Props) {
  const [state, setState] = useState(QuestionState.LOADING);
  const [data, setData] = useState<QuestionResponse>({
    result: {
      id: "",
      question: "",
    },
    suggested_answer: "",
    answer: "",
    state: QuestionState.LOADING,
  });

  useEffect(() => {
    fetch(`/api/v1/articles/${articleId}/questions/sa`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setData(data);
        setState(data.state);
        useQuestionStore.setState({ saQuestion: data });
      })
      .catch((error) => {
        console.error("error: ", error);
        setState(QuestionState.ERROR);
      });
  }, [state, articleId]);

  const handleCompleted = () => {
    setState(QuestionState.LOADING);
  };

  switch (state) {
    case QuestionState.LOADING:
      return <QuestionCardLoading />;
    case QuestionState.INCOMPLETE:
      return (
        <QuestionCardIncomplete
          userId={userId}
          resp={data}
          userLevel={userLevel}
          articleId={articleId}
          userXP={userXP}
          handleCompleted={handleCompleted}
        />
      );
    case QuestionState.COMPLETED:
      return <QuestionCardComplete resp={data} />;
    default:
      return <QuestionCardError data={data} />;
  }
}

function QuestionCardError(data: any) {
  console.log(data);
  return (
    <Card className="mt-3">
      <CardHeader>
        <CardTitle className="font-bold text-3xl md:text-3xl text-muted-foreground">
          Short Answer Question
        </CardTitle>
        <CardDescription className="text-red-500 dark:text-red-400">
          There was an error getting the question. {data.error}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

function QuestionCardComplete({ resp }: { resp: QuestionResponse }) {
  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle className="font-bold text-3xl md:text-3xl text-muted-foreground">
          Short Answer Question
        </CardTitle>
        <CardDescription>
          You already completed the short answer question.
          <p className="font-bold text-lg mt-4">Question</p>
          <p>{resp.result.question}</p>
          <p className="font-bold text-lg mt-4">Suggested Answer</p>
          <p>{resp.suggested_answer}</p>
          <p className="font-bold text-lg mt-4">Your Answer</p>
          <p className="text-green-500 dark:text-green-400 inline font-bold mt-2">
            {resp.answer}
          </p>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

function QuestionCardLoading() {
  return (
    <Card className="mt-3">
      <CardHeader>
        <CardTitle className="font-bold text-3xl md:text-3xl text-muted-foreground">
          Short Answer Question
        </CardTitle>
        <CardDescription>Getting the short answer question...</CardDescription>
        <Skeleton className={"h-10 w-full mt-2"} />
        <Skeleton className={"h-40 w-full mt-2"} />
        <Skeleton className={"h-8 w-full mt-2"} />
        <Skeleton className={"h-20 w-full mt-2"} />
      </CardHeader>
    </Card>
  );
}

function QuestionCardIncomplete({
  userId,
  resp,
  articleId,
  userLevel,
  userXP,
  handleCompleted,
}: {
  userId: string;
  resp: QuestionResponse;
  articleId: string;
  userLevel: number;
  userXP: number;
  handleCompleted: () => void;
}) {
  return (
    <Card className="mt-3">
      <QuestionHeader
        heading="Short Answer Question"
        description="Write a few sentences."
        buttonLabel="Start Writing"
        userId={userId}
        articleId={articleId}
        userLevel={userLevel}
        disabled={false}
        userXP={userXP}
      >
        <QuizContextProvider>
          <SAQuestion
            resp={resp}
            articleId={articleId}
            handleCompleted={handleCompleted}
            userId={userId}
            userXP={userXP}
            userLevel={userLevel}
          />
        </QuizContextProvider>
      </QuestionHeader>
    </Card>
  );
}

function SAQuestion({
  resp,
  articleId,
  userId,
  userXP,
  handleCompleted,
  userLevel,
}: {
  resp: QuestionResponse;
  articleId: string;
  userId: string;
  userXP: number;
  handleCompleted: () => void;
  userLevel: number;
}) {
  const shortAnswerSchema = z.object({
    answer: z
      .string()
      .min(1, {
        message: "Answer is required",
      })
      .max(1000, {
        message: "Answer must be less than 1000 characters",
      }),
  });

  type FormData = z.infer<typeof shortAnswerSchema>;

  const t = useScopedI18n("components.mcq");
  const tf = useScopedI18n("components.rate");
  const { timer, setPaused } = useContext(QuizContext);
  const [isCompleted, setIsCompleted] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [rating, setRating] = React.useState<number>(3);
  const [data, setData] = useState<AnswerResponse>({
    state: QuestionState.LOADING,
    answer: "",
    suggested_answer: "",
  });
  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(shortAnswerSchema),
  });

  async function onSubmitted(data: FormData) {
    setIsLoading(true);
    setPaused(true);
    fetch(`/api/v1/articles/${articleId}/questions/sa/${resp.result.id}`, {
      method: "POST",
      body: JSON.stringify({
        answer: data.answer,
        timeRecorded: timer,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  async function onRating() {
    setIsLoading(true);
    fetch(`/api/v1/articles/${articleId}/questions/sa/${resp.result.id}/rate`, {
      method: "POST",
      body: JSON.stringify({
        rating,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          toast({
            title: tf("toast.success"),
            imgSrc: true,
            description: `Congratulations, you earned ${rating}XP.`,
          });
        }
        handleCompleted();
      })
      .finally(() => {
        setIsLoading(false);
      });
    await fetch(`/api/v1/users/${userId}/activitylog`, {
      method: "POST",
      body: JSON.stringify({
        articleId: articleId || "STSTEM",
        activityType: "sa_question",
        activityStatus: "completed",
        timeTaken: timer,
        xpEarned: rating,
        initialXp: userXP,
        finalXp: userXP + rating,
        initialLevel: userLevel,
        finalLevel: levelCalculation(userXP + rating).raLevel,
        details: data,
      }),
    });
  }
  return (
    <CardContent>
      <form onSubmit={handleSubmit(onSubmitted)}>
        <div className="flex gap-2 items-end mt-6">
          <Badge className="flex-1" variant="destructive">
            {t("elapsedTime", {
              time: timer,
            })}
          </Badge>
        </div>
        <CardTitle className="flex font-bold text-3xl md:text-3xl mt-3">
          Short Answer Question
        </CardTitle>
        <CardDescription className="text-2xl md:text-2xl mt-3">
          {resp.result.question}
        </CardDescription>
        <TextareaAutosize
          autoFocus
          disabled={isCompleted}
          id="short-answer"
          placeholder="Type your answer here..."
          className="w-full my-3 p-3 rounded-sm resize-none appearance-none overflow-hidden bg-gray-100 dark:bg-gray-900 focus:outline-none"
          {...register("answer")}
        />
        <Dialog>
          <DialogTrigger asChild>
            <Button
              type="submit"
              size="sm"
              variant="outline"
              disabled={isLoading}
            >
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Save Answer
            </Button>
          </DialogTrigger>
          {!isLoading && (
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader className="text-left">
                <DialogTitle className="font-bold text-2xl">
                  Let&apos;s Rate Your Answer
                </DialogTitle>
                <DialogDescription>
                  <p className="font-bold text-lg mt-4">Question</p>
                  <p>{resp.result.question}</p>
                  <p className="font-bold text-lg mt-4">Suggested Answer</p>
                  <p>{data.suggested_answer}</p>
                  <p className="font-bold text-lg mt-4">Your Answer</p>
                  <p className="text-green-500 dark:text-green-400 inline font-bold mt-2">
                    {data.answer}
                  </p>
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center justify-center">
                <Rating
                  sx={{
                    // change unselected color
                    "& .MuiRating-iconEmpty": {
                      color: "#f6a904",
                    },
                  }}
                  name="simple-controlled"
                  value={rating}
                  onChange={(event, newValue) => {
                    setRating(newValue ? newValue : 0);
                  }}
                  size="large"
                />
              </div>
              <DialogFooter>
                <Button
                  disabled={isLoading}
                  onClick={() => {
                    setIsCompleted(true);
                    onRating();
                  }}
                >
                  Rate Answer
                </Button>
              </DialogFooter>
            </DialogContent>
          )}
        </Dialog>
      </form>
    </CardContent>
  );
}
