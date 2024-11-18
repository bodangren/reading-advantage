import React from "react";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";
import ClassRoster from "@/components/teacher/class-roster";
import { headers } from "next/headers";

export default async function RosterPage(params: {
  params: { classroomId: string };
}) {
  const user = await getCurrentUser();
  if (!user) {
    return redirect("/auth/signin");
  }

  const ClassesData = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/classroom`,
      { method: "GET", headers: headers() }
    );
    if (!res.ok) throw new Error("Failed to fetch ClassesData list");
    const fetchdata = await res.json();

    if (user.role === "system") {
      return fetchdata.data;
    }
    return fetchdata.data.filter(
      (classroom: { teacherId: string }) => classroom.teacherId === user.id
    );
  };

  const classData = await ClassesData();

  return (
    <div>
      <ClassRoster classes={classData} />
    </div>
  );
}
