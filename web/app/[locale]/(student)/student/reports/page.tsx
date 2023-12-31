import { UserActivityChart } from '@/components/dashboard/user-artivity-chart'
import { UserLevelChart } from '@/components/dashboard/user-level-chart'
import { Header } from '@/components/header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { getCurrentUser } from '@/lib/session'
import axios from 'axios'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {}

async function getUserArticleRecords(userId: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${userId}/article-records`, {
    method: 'GET',
    headers: headers(),
    next: { revalidate: 0 }
  });
  return res.json();
}

async function getGeneralDescription(userLevel: number) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/master-data/level-mean/${userLevel}`,
    {
      method: "GET",
      headers: headers(),
    }
  );
  return res.json();
}
export default async function ReportsPage({ }: Props) {
  const user = await getCurrentUser();
  if (!user) return redirect('/auth/signin');
  if (user.level === 0) return redirect('/level');
  console.log("ReportsPage user : ", user )
  const res = await getUserArticleRecords(user.id);
  const resGeneralDescription = await getGeneralDescription(user.level);
  console.log("ReportsPage res : ", res )

  return (
    <>
      <Header heading="Reports" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-4 mb-10">
        <Card className="md:col-span-4">
          <CardHeader>
            <CardTitle>Activity</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <UserActivityChart data={res.articles} />
          </CardContent>
        </Card>
        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Level</CardTitle>
            <CardDescription>
              Your current level is {user.level}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <UserLevelChart
              data={res.articles}
              resGeneralDescription={resGeneralDescription}
            />
          </CardContent>
        </Card>
      </div>
    </>
  );
}

