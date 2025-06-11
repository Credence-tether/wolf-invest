import { cookies } from "next/headers"
import type { AdminRole } from "./permissions"

export type UserRole = "user" | "admin"

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  adminRole?: AdminRole // Add this line
  avatar?: string
  isActive: boolean
  createdAt: string
  lastLogin?: string
  hasCompletedKYC?: boolean
}

// Default admin account that can be changed later
const DEFAULT_ADMIN = {
  id: "admin-default",
  name: "System Administrator",
  email: "admin@wolv-invest.com",
  role: "admin" as UserRole,
  adminRole: "super_admin" as AdminRole, // Add this line
  avatar: "/placeholder.svg?height=40&width=40",
  isActive: true,
  createdAt: "2024-01-01",
  lastLogin: new Date().toISOString(),
  hasCompletedKYC: true,
}

// Mock users database
export const MOCK_USERS: User[] = [DEFAULT_ADMIN]

// Simple credential store - in production this would be hashed
export const MOCK_CREDENTIALS: Record<string, { password: string; userId: string }> = {
  "admin@wolv-invest.com": { password: "WolvAdmin2024!", userId: "admin-default" },
}

export async function authenticateUser(email: string, password: string): Promise<User | null> {
  // Check if credentials exist
  const credentials = MOCK_CREDENTIALS[email]

  if (!credentials || credentials.password !== password) {
    return null
  }

  const user = MOCK_USERS.find((u) => u.id === credentials.userId)
  if (!user || !user.isActive) {
    return null
  }

  // Update last login
  user.lastLogin = new Date().toISOString()

  return user
}

export async function registerUser(userData: {
  name: string
  email: string
  password: string
}): Promise<{ success: boolean; user?: User; error?: string }> {
  // Check if user already exists
  const existingCredentials = MOCK_CREDENTIALS[userData.email]
  if (existingCredentials) {
    return { success: false, error: "User already exists" }
  }

  // Create new user
  const newUser: User = {
    id: `user-${Date.now()}`,
    name: userData.name,
    email: userData.email,
    role: "user",
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${userData.email}`,
    isActive: true,
    createdAt: new Date().toISOString(),
    hasCompletedKYC: false,
  }

  // Add to mock database
  MOCK_USERS.push(newUser)
  MOCK_CREDENTIALS[userData.email] = {
    password: userData.password,
    userId: newUser.id,
  }

  return { success: true, user: newUser }
}

export async function getUser(): Promise<User | null> {
  const cookieStore = cookies()
  const userId = cookieStore.get("userId")?.value

  if (!userId) return null

  return MOCK_USERS.find((user) => user.id === userId) || null
}

export async function requireAuth(role?: UserRole) {
  const user = await getUser()

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

  // Define admin route permissions
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
