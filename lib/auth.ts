import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { getProfile } from "./supabase"

export type UserRole = "user" | "admin"

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  avatar?: string
  isActive: boolean
  createdAt: string
  lastLogin?: string
  hasCompletedKYC?: boolean
}

export async function getServerUser(): Promise<User | null> {
  const supabase = createServerComponentClient({ cookies })

  try {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) return null

    const profile = await getProfile(user.id)

    if (!profile) return null

    return {
      id: profile.id,
      name: profile.full_name,
      email: profile.email,
      role: profile.role as UserRole,
      avatar: profile.avatar_url,
      isActive: profile.is_active ?? false,
      createdAt: profile.created_at,
      lastLogin: profile.last_login || undefined,
      hasCompletedKYC: profile.has_completed_kyc,
    }
  } catch (error) {
    console.error("Error getting server user:", error)
    return null
  }
}

export async function requireAuth(role?: UserRole) {
  const user = await getServerUser()

  if (!user) {
    return { authenticated: false, user: null, authorized: false }
  }

  if (!user.isActive) {
    return { authenticated: false, user: null, authorized: false }
  }

  if (role && user.role !== role) {
    return { authenticated: true, user, authorized: false }
  }

  return { authenticated: true, user, authorized: true }
}

export function hasAdminPrivileges(user: User | null): boolean {
  return user?.role === "admin" && user?.isActive === true
}

export function canAccessAdminRoute(user: User | null, route: string): boolean {
  if (!hasAdminPrivileges(user)) return false

  const adminRoutes = [
    "/admin/dashboard",
    "/admin/users",
    "/admin/investments",
    "/admin/transactions",
    "/admin/analytics",
    "/admin/settings",
  ]

  return adminRoutes.includes(route)
}
