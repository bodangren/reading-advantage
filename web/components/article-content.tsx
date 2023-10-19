'use client'
import React from 'react'
import Tokenizer from "sentence-tokenizer";
import { cn } from '@/lib/utils';
import axios, { AxiosError } from "axios";
import { toast } from './ui/use-toast';

import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { Badge } from './ui/badge';
import { Icons } from './icons';
import { useScopedI18n } from '@/locales/client';
import { ArticleType } from '@/types';
import { Button } from './ui/button';
import { set } from 'lodash';
import { Separator } from './ui/separator';
import { Dialog } from '@mui/material';
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { DialogPortal } from '@radix-ui/react-dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './ui/alert-dialog';

async function getTranslate(sentences: string[], articleId: string) {
    try {
        const res = await axios.post(`/api/articles/${articleId}/translate`, {
            sentences,
            language: 'th'
        });
        return res.data;
    } catch (error) {
        console.log(error);
        toast({
            title: "Something went wrong.",
            description: error as string,
            variant: "destructive",
        });
    }

}

interface ITextAudio {
    text: string;
    begin?: number;
}

type Props = {
    article: ArticleType,
    className?: string,
    articleId: string,
    userId: string,
}
export default function ArticleContent({
    article,
    articleId,
    userId,
    className,
}: Props) {
    const t = useScopedI18n('components.articleContent');
    //const [rating, setRating] = React.useState<number>(-1);
    const [text, setText] = React.useState<ITextAudio[]>([]);
    const [highlightedWordIndex, setHighlightedWordIndex] = React.useState(-1);
    const [isplaying, setIsPlaying] = React.useState(false);
    const audioRef = React.useRef<HTMLAudioElement | null>(null);
    const textContainer = React.useRef<HTMLParagraphElement | null>(null);
    const [isSplit, setIsSplit] = React.useState(false);
    const [selectedSentence, setSelectedSentence] = React.useState<Number>(-1);
    const [loading, setLoading] = React.useState(false);
    const [translate, setTranslate] = React.useState<string[]>([]);
    const [isTranslate, setIsTranslate] = React.useState(false);

    React.useEffect(() => {
        if (!isSplit) {
            splitToText(article);
            setIsSplit(true);
        }
    }, [article, isSplit]);

    const handleHighlight = (audioCurrentTime: number) => {
        const lastIndex = text.length - 1;

        if (audioCurrentTime >= text[lastIndex].begin!) {
            setHighlightedWordIndex(lastIndex);
        } else {
            const index = text.findIndex((word) => word.begin! >= audioCurrentTime);
            setHighlightedWordIndex(index - 1);
        }

        if (textContainer.current && highlightedWordIndex !== -1) {
            const highlightedWordElement = textContainer.current.children[
                highlightedWordIndex
            ] as HTMLElement;
            if (highlightedWordElement) {
                highlightedWordElement.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });
            }
        }
    };

    const handlePause = () => {
        setIsPlaying(!isplaying);
        if (audioRef.current === null) return;
        if (isplaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
    };

    const splitToText = (article: ArticleType) => {
        const tokenizer = new Tokenizer("Chuck");
        tokenizer.setEntry(article.content);
        const result = tokenizer.getSentences();

        // Clear the existing content in the 'text' array
        setText([]);

        for (let i = 0; i < article.timepoints.length; i++) {
            setText((prev) => [
                ...prev,
                { text: result[i], begin: article.timepoints[i].timeSeconds },
            ]);
        }
    };

    const handleSkipToSentence = (time: number) => {
        if (audioRef.current) {
            audioRef.current.currentTime = time;
        }
    };

    const saveToFlashcard = async () => {
        //translate before save
        if (!isTranslate) {
            await handleTranslateSentence();
        } else {
            try {
                let endTimepoint = 0;
                if (selectedSentence !== text.length - 1) {
                    endTimepoint = text[selectedSentence as number + 1].begin as number;
                } else {
                    endTimepoint = audioRef.current?.duration as number;
                }
                console.log('translate', translate[selectedSentence as number]);
                const res = await axios.post(`/api/users/${userId}/sentences`, {
                    sentence: text[selectedSentence as number].text,
                    sn: selectedSentence,
                    articleId: articleId,
                    translation: {
                        th: translate[selectedSentence as number],
                    },
                    timepoint: text[selectedSentence as number].begin,
                    endTimepoint: endTimepoint,
                });
                console.log('res', res);
                toast({
                    title: "Success",
                    description: `You have saved "${text[selectedSentence as number].text}" to flashcard`,
                });

            } catch (error) {
                if (axios.isAxiosError(error)) {
                    if (error.response?.data.message === 'Sentence already saved') {
                        toast({
                            title: 'Sentence already saved',
                            description: 'You have already saved this sentence.',
                            variant: "destructive",
                        })
                    }
                } else {
                    toast({
                        title: "Something went wrong.",
                        description: "Your sentence was not saved. Please try again.",
                        variant: "destructive",
                    });
                }
            }
        }

    }

    async function handleTranslateSentence() {
        setLoading(true);
        try {
            const sentences = text.map((sentence) => sentence.text);
            const res = await getTranslate(sentences, articleId);
            console.log(res);
            setTranslate(res.translation);
            setIsTranslate(true);
            toast({
                title: "Success",
                description: "Your sentence was translated.",
            });
        } catch (error) {
            console.log(error);
            setIsTranslate(false);
            toast({
                title: "Something went wrong.",
                description: "Your sentence was not translated. Please try again.",
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    }
    const [isTranslateClicked, setIsTranslateClicked] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(-1);
    const handleTranslate = async () => {
        //if not translate, translate
        if (!isTranslate) {
            await handleTranslateSentence();
            setIsTranslateClicked(!isTranslateClicked);
        } else {
            //if translate, set isTranslate to false
            setIsTranslateClicked(!isTranslateClicked);
        }
    }
    return (
        <>
            <div className='flex flex-wrap gap-3 items-center'>
                <div className='inline-flex gap-2'>
                    <p>{t('voiceAssistant')}</p>
                    <Button
                        size='sm'
                        variant='secondary'
                        onClick={handlePause}
                    >
                        {
                            isplaying ? (
                                <Icons.pause className='mr-1' size={12} />
                            ) : (
                                <Icons.play className='mr-1' size={12} />
                            )
                        }
                        {isplaying ? t('soundButton.pause') : t('soundButton.play')}
                    </Button>
                </div>
                {
                    !isTranslate && (
                        <div className='inline-flex gap-2'>
                            <p>Translate</p>
                            <Button
                                size='sm'
                                variant='secondary'
                                onClick={handleTranslateSentence}
                                disabled={loading}
                            >
                                {loading ? 'Loading' : 'Translate to Thai'}
                            </Button>
                        </div>
                    )
                }
            </div>
            {isTranslate && (
                <div className='h-32 md:h-24 flex flex-col justify-between items-center'>
                    <Separator />
                    {!isplaying && highlightedWordIndex === -1 ? (
                        <p className='text-center text-green-500'>Your translate sentence will be here</p>
                    ) : (
                        <p className='text-center text-green-500'>{translate[highlightedWordIndex]}</p>
                    )}
                    <Separator />
                </div>
            )}
            <ContextMenu >
                <ContextMenuTrigger>
                    {text.map((sentence, index) => (
                        <p
                            key={index}
                            className={cn(
                                "inline text-muted-foreground hover:bg-blue-200 dark:hover:bg-blue-600 select-none cursor-pointer",
                                highlightedWordIndex === index ? "bg-yellow-50" : "bg-transparent",
                            )}
                            onMouseEnter={() => {
                                setSelectedSentence(index);
                                setSelectedIndex(index);
                            }}
                            onClick={() => handleSkipToSentence(sentence.begin ?? 0)}
                        >
                            {sentence.text}{" "}
                        </p>
                    ))}
                </ContextMenuTrigger>
                <ContextMenuContent className="w-64">
                    {
                        loading ? (
                            <ContextMenuItem inset disabled>
                                Loading
                            </ContextMenuItem>
                        ) : (
                            <>
                                <ContextMenuItem inset
                                    onClick={() => {
                                        saveToFlashcard();
                                    }}
                                    disabled={loading}
                                >
                                    Save to flashcard
                                </ContextMenuItem>
                                <ContextMenuItem inset
                                    onClick={() => {
                                        handleTranslate();
                                    }}
                                    disabled={loading}
                                >
                                    Translate
                                </ContextMenuItem>
                            </>
                        )
                    }
                </ContextMenuContent>
            </ContextMenu>
            <AlertDialog
                open={isTranslateClicked}
            >
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            Translate
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            <p>
                                {selectedSentence !== -1 ? text[selectedSentence as number].text : ''}
                            </p>
                            <p className='text-green-500 mt-3'>
                                {translate[selectedIndex]}
                            </p>
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction
                            onClick={() => setIsTranslateClicked(false)}
                        >
                            Cancel
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
            <audio
                ref={audioRef}
                onTimeUpdate={() => handleHighlight(
                    audioRef.current ? audioRef.current.currentTime : 0
                )}
            >
                <source
                    src={`https://storage.googleapis.com/artifacts.reading-advantage.appspot.com/audios/${articleId}.mp3`}
                />
            </audio>
        </>

    )
}