import { UserActivityChart } from "@/components/dashboard/user-activity-chart";
import { UserXpOverAllChart } from "@/components/dashboard/user-xpoverall-chart";
import { Header } from "@/components/header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getCurrentUser } from "@/lib/session";
import { headers } from "next/headers";
import React, { use } from "react";
import { getScopedI18n } from "@/locales/server";
import { fetchData } from "@/utils/fetch-data";
import { redirect } from "next/navigation";
import UserActivityHeatMap from "@/components/dashboard/user-activity-heatmap";

// async function getStudentProgress(studentId: string) {
//     const res = await fetch (
//         `${process.env.NEXT_PUBLIC_BASE_URL}/api/students/${studentId}/progress-article-record`,
//         {
//         method: "GET",
//         headers: headers(),
//         }
//     );

//     return res.json();
//     }

async function getUserArticleRecords(userId: string) {
  return fetchData(`/api/v1/users/${userId}/activitylog`);
}

// async function getGeneralDescription(userLevel: number) {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_URL}/api/master-data/level-mean/${userLevel}`,
//     {
//       method: "GET",
//       headers: headers(),
//     }
//   );
//   return res.json();
// }

async function getAllStudentData() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/classroom/students`,
      {
        method: "GET",
        headers: headers(),
      }
    );

    return res.json();
  } catch (error) {
    console.error("Failed to parse JSON", error);
  }
}

export default async function ProgressPage({
  params,
}: {
  params: { studentId: string };
}) {
  const user = await getCurrentUser();
  if (!user) return redirect("/auth/signin");
  const resStudentProgress = await getUserArticleRecords(params.studentId);
  const t = await getScopedI18n("pages.teacher.studentProgressPage");

  const allStudent = await getAllStudentData();

  let nameOfStudent = "";
  let studentLevel: number = 0;

  allStudent.students.forEach(
    (student: { id: string; name: string; level: number }) => {
      if (student.id === params.studentId) {
        nameOfStudent = student.name;
        studentLevel = student.level;
      }
    }
  );

  return (
    <>
      {resStudentProgress.results ? (
        <div>
          <Header heading={t("progressOf", { nameOfStudent: nameOfStudent })} />
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 mt-4 mb-10 w-full">
              <UserActivityChart data={resStudentProgress.results} />
            </div>
            <div className="lg:w-1/3 mt-4">
              <UserActivityHeatMap data={resStudentProgress.results} />
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center">{t("noUserProgress")}</p>
      )}
    </>
  );
}
