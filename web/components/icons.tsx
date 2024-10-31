import {
  Pencil,
  ChevronLeftIcon,
  ShieldX,
  Flower,
  Flame,
  Lightbulb,
  Newspaper,
  Pause,
  Play,
  Album,
  Waves,
  Flag,
  Globe2,
  History,
  X,
  LucideIcon,
  LucideProps,
  SunMedium,
  Moon,
  Laptop,
  ChevronLeft,
  Loader2,
  User,
  Book,
  LayoutDashboard,
  CheckCircle2,
  MinusCircle,
  XCircle,
  Star,
  AlertCircle,
  School,
  Users,
  BarChartBig,
  Plus,
  RefreshCw,
  ArchiveRestore,
  Trash2,
  UserPlus,
  ClipboardList,
  BookOpenCheck,
  ScrollText,
  MonitorCog,
} from "lucide-react";

export type Icon = LucideIcon;
export const Icons = {
  close: X,
  sun: SunMedium,
  moon: Moon,
  left: ChevronLeft,
  spinner: Loader2,
  system: Laptop,
  user: User,
  book: Book,
  dashboard: LayoutDashboard,
  record: History,
  unChecked: MinusCircle,
  correctChecked: CheckCircle2,
  incorrectChecked: XCircle,
  star: Star,
  globe: Globe2,
  th: Flag,
  en: Waves,
  cn: Flame,
  tw: Flower,
  flashcard: Album,
  play: Play,
  pause: Pause,
  article: Newspaper,
  suggestion: Lightbulb,
  AlertCircle: AlertCircle,
  unVerified: ShieldX,
  back: ChevronLeftIcon,
  edit: Pencil,
  class: School,
  student: Users,
  roster: ClipboardList,
  report: BarChartBig,
  add: Plus,
  refresh: RefreshCw,
  archive: ArchiveRestore,
  delete: Trash2,
  addUser: UserPlus,
  assignments: BookOpenCheck,
  scrollText: ScrollText,
  MonitorCog: MonitorCog,
  logo: ({ ...props }: LucideProps) => (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="18.000000pt"
      height="18.000000pt"
      viewBox="0 0 180.000000 180.000000"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <g
        transform="translate(0.000000,180.000000) scale(0.100000,-0.100000)"
        fill="#3b82f6"
        stroke="none"
      >
        <path
          d="M698 1304 l-168 -95 0 -91 c0 -82 2 -89 18 -83 110 45 278 105 295
105 l22 -1 -21 -12 c-12 -7 -19 -18 -17 -24 3 -7 -2 -13 -11 -13 -27 0 -249
-77 -319 -110 -64 -31 -84 -50 -52 -50 8 0 15 -4 15 -10 0 -16 34 -12 86 11
44 18 109 39 237 73 26 7 50 10 53 5 2 -4 -15 -13 -38 -19 -99 -26 -293 -92
-304 -103 -4 -4 6 -11 21 -17 25 -10 27 -14 22 -50 -3 -23 -1 -40 5 -40 5 0
-5 -12 -22 -26 -17 -15 -29 -28 -27 -30 2 -3 49 14 103 37 54 23 136 55 182
71 45 16 80 33 77 38 -3 4 9 10 26 12 22 4 33 0 40 -14 9 -16 4 -21 -36 -39
-25 -11 -70 -24 -99 -29 -76 -12 -237 -69 -263 -93 -49 -44 2 -38 133 17 51
21 133 44 247 70 20 5 27 3 27 -9 0 -18 8 -15 -140 -49 -123 -28 -203 -51
-260 -74 -33 -13 -33 -15 -15 -28 10 -8 15 -14 9 -14 -5 0 -43 -10 -84 -21
-41 -11 -135 -36 -209 -55 -74 -19 -147 -42 -163 -51 -78 -47 -78 -260 -1
-345 19 -21 88 -23 198 -7 343 50 667 68 890 50 77 -6 221 -14 320 -17 148 -6
182 -4 191 7 15 19 38 108 31 116 -6 6 -329 24 -684 38 l-173 7 0 25 c0 23 3
24 43 19 23 -3 132 -10 242 -16 110 -6 258 -15 329 -20 161 -12 249 -12 221 0
-11 5 -150 18 -310 30 -159 11 -337 25 -394 30 -58 6 -113 10 -123 10 -14 0
-19 6 -16 23 4 26 -27 26 298 -4 124 -11 272 -24 330 -29 58 -5 132 -12 165
-16 41 -4 56 -2 46 4 -8 6 -42 13 -75 17 -34 3 -83 10 -111 15 -27 6 -95 14
-150 19 -181 18 -496 59 -504 66 -22 22 43 20 269 -11 631 -86 580 -80 580
-65 0 11 -34 16 -550 86 -280 38 -285 39 -288 58 -3 14 4 17 40 17 25 0 69 -4
99 -10 30 -5 122 -19 204 -31 317 -43 449 -59 454 -53 3 3 8 65 9 137 4 131 3
133 -27 190 -28 54 -30 61 -20 112 5 31 7 60 4 65 -3 6 -21 10 -38 10 -30 1
-31 2 -13 15 25 19 20 20 -134 35 -218 20 -384 40 -415 49 -16 5 -42 12 -57
15 -16 4 -28 13 -28 22 0 12 6 15 25 10 27 -7 254 -40 343 -51 28 -3 52 -2 52
2 0 8 -198 51 -343 74 -37 6 -66 14 -63 16 11 11 266 -20 401 -48 137 -29 238
-39 252 -26 3 4 4 9 2 11 -2 2 -139 25 -305 50 -368 56 -364 55 -364 72 0 18
21 18 153 -6 395 -68 466 -81 500 -89 32 -8 39 -6 48 10 5 11 9 43 7 72 l-3
52 -45 6 c-25 4 -83 12 -130 18 -47 6 -179 25 -295 41 -115 17 -228 30 -250
30 -32 0 -73 -19 -207 -96z m207 -244 c-22 -4 -76 -17 -119 -29 -112 -30 -127
-25 -26 8 50 17 106 29 135 29 l50 -1 -40 -7z m219 -190 c155 -24 385 -54 418
-54 32 0 38 -5 53 -34 9 -19 14 -36 12 -38 -2 -2 -98 5 -213 16 -115 10 -248
22 -296 26 l-88 6 0 32 c0 18 -5 37 -12 44 -15 15 39 16 126 2z m-514 -67 c-8
-3 -24 -10 -35 -15 -20 -9 -20 -9 -1 6 11 9 27 16 35 15 14 0 14 -1 1 -6z
m285 -91 c-11 -10 -108 -32 -133 -31 -9 0 12 9 48 19 74 20 98 24 85 12z
m-255 -62 c-41 -11 -82 -19 -90 -19 -24 1 112 37 140 37 14 0 -9 -8 -50 -18z
m115 -82 c-16 -52 -17 -185 -2 -236 l15 -51 -45 -7 c-24 -3 -47 -4 -50 0 -4 3
8 6 25 6 37 0 38 4 16 56 -18 44 -15 165 6 204 6 12 10 24 7 26 -3 3 -51 -6
-108 -19 -57 -14 -176 -42 -264 -62 -88 -20 -176 -41 -195 -46 -44 -11 -63
-55 -62 -141 1 -67 13 -95 44 -101 17 -3 15 -5 -9 -6 -29 -1 -32 3 -47 46 -27
78 -14 197 23 207 14 4 302 69 546 123 39 8 75 16 80 18 23 8 27 4 20 -17z
m-107 -305 c-10 -2 -26 -2 -35 0 -10 3 -2 5 17 5 19 0 27 -2 18 -5z m-75 -10
c-7 -2 -21 -2 -30 0 -10 3 -4 5 12 5 17 0 24 -2 18 -5z m-60 -10 c-7 -2 -21
-2 -30 0 -10 3 -4 5 12 5 17 0 24 -2 18 -5z m-75 -10 c-10 -2 -26 -2 -35 0
-10 3 -2 5 17 5 19 0 27 -2 18 -5z m-75 -10 c-7 -2 -19 -2 -25 0 -7 3 -2 5 12
5 14 0 19 -2 13 -5z m-65 -10 c-10 -2 -28 -2 -40 0 -13 2 -5 4 17 4 22 1 32
-1 23 -4z m-81 -9 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z"
        />
        <path
          d="M630 141 c-11 -8 43 -11 190 -11 217 0 712 -16 793 -25 37 -4 47 -3
47 9 0 7 -7 17 -16 20 -31 12 -998 18 -1014 7z"
        />
        <path d="M1193 83 c15 -2 39 -2 55 0 15 2 2 4 -28 4 -30 0 -43 -2 -27 -4z" />
        <path
          d="M1340 81 c0 -11 160 -20 209 -11 28 5 15 8 -58 13 -123 9 -151 9
-151 -2z"
        />
      </g>
    </svg>
  ),
  gitHub: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  ),
  google: ({ ...props }: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
      <defs>
        <path
          id="a"
          d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
        />
      </defs>
      <clipPath id="b">
        <use href="#a" overflow="visible" />
      </clipPath>
      <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
      <path
        clipPath="url(#b)"
        fill="#EA4335"
        d="M0 11l17 13 7-6.1L48 14V0H0z"
      />
      <path
        clipPath="url(#b)"
        fill="#34A853"
        d="M0 37l30-23 7.9 1L48 0v48H0z"
      />
      <path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
    </svg>
  ),
};
