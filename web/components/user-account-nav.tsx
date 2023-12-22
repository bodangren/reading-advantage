"use client"

import Link from "next/link"
import { User } from "next-auth"
import { signOut } from "next-auth/react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { UserAvatar } from "@/components/user-avatar"
import { useScopedI18n } from "@/locales/client"

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
    user: Pick<User, "name" | "image" | "email"> & { level: number }
}

export function UserAccountNav({ user }: UserAccountNavProps) {
    const t = useScopedI18n("components.userAccountNav")
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <UserAvatar
                    user={{ name: user.name || null, image: user.image || null }}
                    className="h-8 w-8 border-2 border-[#E5E7EB] rounded-full cursor-pointer"
                />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                        {user.name && <p className="font-medium">{user.name}</p>}
                        {user.email && (
                            <p className="w-[200px] truncate text-sm text-muted-foreground">
                                {user.email}
                            </p>
                        )}
                        {user.level && (
                            <p className="w-[200px] truncate text-sm text-muted-foreground">
                                {t('level', { level: <b>{user.level}</b> })}
                            </p>
                        )}
                    </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild disabled>
                    <Link href="/student/settings">{t('settings')}</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    className="cursor-pointer"
                    onSelect={(event) => {
                        event.preventDefault()
                        signOut({
                            callbackUrl: `${window.location.origin}/auth/signin`,
                        })
                    }}
                >
                    {t('signOut')}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}