import { ArticleRecordsTable } from '@/components/article-records-table'
import { Header } from '@/components/header'
import { ReminderRereadTable } from '@/components/reminder-reread-table'
import { getCurrentUser } from '@/lib/session'
import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import React from 'react'
import axios from 'axios'

type Props = {}

export const metadata = {
    title: "Student Home Page",
}

async function getUserArticleRecords(userId: string) {
    // fetch user article records
    const res = await axios.get(
        `/api/users/${userId}/article-records`,
    );
    return res.data;
}
export default async function StudentHomePage({ }: Props) {
    // const t = useTranslations('pages.student.article-records')
    const user = await getCurrentUser();
    if (!user) {
        return redirect('/login');
    }
    if (user.level === 0) {
        return redirect('/student/level');
    }
    const res = await getUserArticleRecords(user.id);
    // articles that have been read
    // put the articles that have rating lower than 3 in the reminder table
    const reminderArticles = res.articles.filter((article: any) => article.rating < 3);
    // put the articles that have rating higher than 3 in the article records table
    const articleRecords = res.articles.filter((article: any) => article.rating >= 3);
    return (
        <>
            {
                reminderArticles.length !== 0 && (
                    <>
                        <Header
                            // heading={t('heading-reminder-reread')}
                            // text={t('text-reminder-reread')}
                            heading='Reminder to reread'
                            text='test'
                            variant='warning'
                        />
                        <ReminderRereadTable
                            articles={reminderArticles}
                        />
                    </>
                )
            }
            <Header
                // heading={t('heading')}
                // text={t('text')}
                heading='Article records'
                text='test'
            />
            <ArticleRecordsTable
                articles={articleRecords}
            />
        </>

    )
}