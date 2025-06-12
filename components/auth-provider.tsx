"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { supabase } from "@/lib/supabaseClient"

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
  register: (userData: { name: string; email: string; password: string }) => Promise<{ success: boolean; error?: string }>
  logout: () => void
  isLoading: boolean
  isAuthenticated: boolean
  isAdmin: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getUserDetails = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (user) {
        const role = user.user_metadata?.role || "user"
        const name = user.user_metadata?.name || ""

        setUser({
          id: user.id,
          name,
          email: user.email || "",
          role,
          isActive: true,
          avatar: "",
          createdAt: user.created_at,
        })
      }
    }

    getUserDetails()
  }, [])

  const register = async (userData: { name: string; email: string; password: string }) => {
    setIsLoading(true)
    try {
      const { data, error } = await supabase.auth.signUp({
        email: userData.email,
        password: userData.password,
        options: {
          data: {
            name: userData.name,
            role: "user",
          },
        },
      })

      if (error) {
        return { success: false, error: error.message }
      }

      setIsLoading(false)
      return { success: true }
    } catch (err) {
      setIsLoading(false)
      return { success: false, error: "Registration failed" }
    }
  }

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error || !data.session) {
        setIsLoading(false)
        return { success: false, error: error?.message || "Invalid login" }
      }

      const user = data.user
      setUser({
        id: user.id,
        name: user.user_metadata.name || "",
        email: user.email || "",
        role: user.user_metadata.role || "user",
        avatar: "",
        isActive: true,
        createdAt: user.created_at,
      })

      setIsLoading(false)
      return { success: true }
    } catch (err) {
      setIsLoading(false)
      return { success: false, error: "Login failed" }
    }
  }

  const logout = async () => {
    await supabase.auth.signOut()
    setUser(null)
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
