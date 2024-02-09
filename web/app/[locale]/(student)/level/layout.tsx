import { MainNav } from "@/components/main-navbar"
import { getCurrentUser } from "@/lib/session"
import { redirect } from "next/navigation"
import { studentPageConfig } from "@/configs/student-page-config"
import { UserAccountNav } from "@/components/user-account-nav"
import PregressBar from "@/components/progress-bar-xp"
import { ScoreContext } from "@/contexts/score-context"
import ProgressBar from "@/components/progress-bar-xp"

interface LevelLayoutProps {
    children?: React.ReactNode
}

export default async function StudentHomeLayout({
    children,
}: LevelLayoutProps) {
    const user = await getCurrentUser()

    if (!user) {
        return redirect('/auth/signin')
    }

    return (
        <div className="flex min-h-screen flex-col space-y-6">
            <header className="sticky top-0 z-40 border-b bg-background">
                <div className="container flex h-16 items-center justify-between py-4">
                    <MainNav items={studentPageConfig.mainNav} />
<ProgressBar progress={0} />
                    <UserAccountNav
                        user={{
                            name: user.name || "",
                            image: user.image || "",
                            email: user.email || "",
                            level: user.level || 0,
                            verified: user.verified || false,
                        }}
                    />
                </div>
            </header>
            <div className="container grid flex-1 gap-12">
                <main className="flex w-full flex-1 flex-col overflow-hidden">
                    {children}
                </main>
            </div>
        </div>
    )
}

// export async function getServerSideProps(context) {
//     // Fetch user and score data here
//     const user = await getCurrentUser(context.req, context.res);
//     const score = await getScoreFromSomewhere(context.req, context.res);
  
//     if (!user) {
//       return redirect('/auth/signin')
//     }
  
//     // Pass user and score data to the page via props
//     return { props: { user, score } };
//   }