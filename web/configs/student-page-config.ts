import { StudentPageConfig } from "@/types";

export const studentPageConfig: StudentPageConfig = {
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
      href: "/authors",
    },
  ],
  sidebarNav: [
    {
      title: "read",
      href: "/student/read",
      icon: "book",
    },
    // {
    //   title: "sentences",
    //   href: "/student/sentences",
    //   icon: "flashcard",
    // },
    // {
    //   title: "vocabulary",
    //   href: "/student/vocabulary",
    //   icon: "book",
    // },
    // {
    //   title: "reports",
    //   href: "/student/reports",
    //   icon: "dashboard",
    // },
    // {
    //   title: "history",
    //   href: "/student/history",
    //   icon: "record",
    // },
  ],
};
