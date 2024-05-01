import { TeacherPageConfig } from "@/types";

export const teacherPageConfig: TeacherPageConfig = {
    mainNav: [
        {
            title: "home",
            href: "/",
        },
        {
            title: "about",
            href: "/about",
        },
        {
            title: "contact",
            href: "/contact",
        },
        {
            title: "authors",
            href: "/authors"
        }
    ],
    teacherSidebarNav: [
        {
            title: "myClasses",
            href: '/teacher/my-classes',
            icon: "class",
        },
        {
            title: "myStudents",
            href: '/teacher/my-students',
            icon: "student",
        },
        {
            title: "reports",
            href: '/teacher/reports',
            icon: "report",
        }
    ],
};
