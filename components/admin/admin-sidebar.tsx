"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import {
  BarChart3,
  CreditCard,
  LayoutDashboard,
  LogOut,
  Settings,
  Users,
  LineChart,
  ChevronLeft,
  ChevronRight,
  Shield,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/components/auth-provider"
import type { User } from "@/lib/auth"
import { RoleBadge } from "./role-badge"
import { canAccessRoute } from "@/lib/permissions"

interface AdminSidebarProps {
  user: User
}

export function AdminSidebar({ user }: AdminSidebarProps) {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const { logout } = useAuth()

  const adminNavItems = [
    {
      title: "Dashboard",
      href: "/admin/dashboard",
      icon: LayoutDashboard,
      permission: "analytics.view" as const,
    },
    {
      title: "Users",
      href: "/admin/users",
      icon: Users,
      permission: "users.view" as const,
    },
    {
      title: "Investments",
      href: "/admin/investments",
      icon: BarChart3,
      permission: "investments.view" as const,
    },
    {
      title: "Transactions",
      href: "/admin/transactions",
      icon: CreditCard,
      permission: "transactions.view" as const,
    },
    {
      title: "Analytics",
      href: "/admin/analytics",
      icon: LineChart,
      permission: "analytics.view" as const,
    },
    {
      title: "Settings",
      href: "/admin/settings",
      icon: Settings,
      permission: "settings.view" as const,
    },
  ]

  const handleLogout = () => {
    logout()
    window.location.href = "/"
  }

  return (
    <div
      className={cn(
        "flex flex-col border-r bg-white dark:bg-gray-800 transition-all duration-300",
        isCollapsed ? "w-16" : "w-64",
      )}
    >
      {/* Header */}
      <div className="flex h-16 items-center border-b px-4">
        {!isCollapsed ? (
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/wolv-invest-logo.png" alt="WOLV-INVEST" width={32} height={32} className="h-8 w-auto" />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-blue-600">WOLV-INVEST</span>
              <span className="text-xs text-gray-500">Admin Panel</span>
            </div>
          </Link>
        ) : (
          <Image
            src="/images/wolv-invest-logo.png"
            alt="WOLV-INVEST"
            width={32}
            height={32}
            className="h-8 w-auto mx-auto"
          />
        )}
        <Button variant="ghost" size="icon" className="ml-auto" onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-2">
          {adminNavItems.map((item, index) => {
            const userRole = (user as any).adminRole || "admin"
            const hasAccess = canAccessRoute(userRole, item.href)

            if (!hasAccess) return null

            return (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                  pathname === item.href && "bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-50",
                  isCollapsed && "justify-center",
                )}
              >
                <item.icon className="h-4 w-4" />
                {!isCollapsed && <span>{item.title}</span>}
              </Link>
            )
          })}
        </nav>
      </div>

      {/* User Profile */}
      <div className="mt-auto border-t p-2">
        <div className={cn("flex items-center gap-3 rounded-lg px-3 py-2", isCollapsed && "justify-center")}>
          {!isCollapsed && (
            <>
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold uppercase text-blue-900 dark:bg-blue-900 dark:text-blue-50">
                {user.name.charAt(0)}
              </div>
              <div className="flex flex-col flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <span className="text-sm font-medium truncate">{user.name}</span>
                  <Shield className="h-3 w-3 text-blue-600" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500 dark:text-gray-400 truncate">{user.email}</span>
                  <RoleBadge role={(user as any).adminRole || "admin"} showIcon={false} variant="outline" />
                </div>
              </div>
            </>
          )}
          <Button
            variant="ghost"
            size="icon"
            className={cn("flex-shrink-0", isCollapsed && "mx-auto")}
            onClick={handleLogout}
            title="Logout"
          >
            <LogOut className="h-4 w-4" />
            <span className="sr-only">Log out</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
