"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

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
}

type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  register: (userData: { name: string; email: string; password: string }) => Promise<{
    success: boolean
    error?: string
  }>
  logout: () => void
  isLoading: boolean
  isAuthenticated: boolean
  isAdmin: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Mock users and credentials
const MOCK_USERS: User[] = [
  {
    id: "admin-default",
    name: "System Administrator",
    email: "admin@wolv-invest.com",
    role: "admin",
    avatar: "/placeholder.svg?height=40&width=40",
    isActive: true,
    createdAt: "2024-01-01",
    lastLogin: new Date().toISOString(),
  },
]

const MOCK_CREDENTIALS: Record<string, { password: string; userId: string }> = {
  "admin@wolv-invest.com": { password: "WolvAdmin2024!", userId: "admin-default" },
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check for stored user session only after mounting
    try {
      if (typeof window !== "undefined") {
        const storedUser = localStorage.getItem("wolv-user")
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser)
          setUser(parsedUser)
        }
      }
    } catch (error) {
      console.error("Error parsing stored user:", error)
      if (typeof window !== "undefined") {
        localStorage.removeItem("wolv-user")
      }
    }
  }, [])

  const authenticateUser = async (email: string, password: string): Promise<User | null> => {
    const credentials = MOCK_CREDENTIALS[email]
    if (!credentials || credentials.password !== password) {
      return null
    }

    const foundUser = MOCK_USERS.find((u) => u.id === credentials.userId)
    if (!foundUser || !foundUser.isActive) {
      return null
    }

    // Update last login
    foundUser.lastLogin = new Date().toISOString()
    return foundUser
  }

  const registerUser = async (userData: {
    name: string
    email: string
    password: string
  }): Promise<{ success: boolean; user?: User; error?: string }> => {
    // Check if user already exists
    if (MOCK_CREDENTIALS[userData.email]) {
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
    }

    // Add to mock database
    MOCK_USERS.push(newUser)
    MOCK_CREDENTIALS[userData.email] = {
      password: userData.password,
      userId: newUser.id,
    }

    return { success: true, user: newUser }
  }

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true)

    try {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const authenticatedUser = await authenticateUser(email, password)

      if (!authenticatedUser) {
        setIsLoading(false)
        return { success: false, error: "Invalid email or password" }
      }

      if (!authenticatedUser.isActive) {
        setIsLoading(false)
        return { success: false, error: "Account is deactivated. Please contact support." }
      }

      setUser(authenticatedUser)

      if (mounted && typeof window !== "undefined") {
        localStorage.setItem("wolv-user", JSON.stringify(authenticatedUser))
        document.cookie = `userId=${authenticatedUser.id}; path=/; max-age=86400; secure; samesite=strict`
      }

      setIsLoading(false)
      return { success: true }
    } catch (error) {
      setIsLoading(false)
      return { success: false, error: "An error occurred during login" }
    }
  }

  const register = async (userData: { name: string; email: string; password: string }): Promise<{
    success: boolean
    error?: string
  }> => {
    setIsLoading(true)

    try {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      const result = await registerUser(userData)

      if (!result.success) {
        setIsLoading(false)
        return { success: false, error: result.error }
      }

      setIsLoading(false)
      return { success: true }
    } catch (error) {
      setIsLoading(false)
      return { success: false, error: "An error occurred during registration" }
    }
  }

  const logout = () => {
    setUser(null)
    if (mounted && typeof window !== "undefined") {
      localStorage.removeItem("wolv-user")
      document.cookie = "userId=; path=/; max-age=0"
    }
  }

  const isAuthenticated = !!user
  const isAdmin = user?.role === "admin" && user?.isActive === true

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isLoading,
        isAuthenticated,
        isAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
