"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { supabase, createProfile, getProfile, updateLastLogin } from "@/lib/supabase"

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
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (user) {
        const profile = await getProfile(user.id)
        if (profile) {
          setUser({
            id: user.id,
            name: profile.full_name,
            email: profile.email,
            role: profile.role,
            isActive: profile.is_active,
            avatar: profile.avatar_url,
            createdAt: profile.created_at,
            lastLogin: profile.last_login,
          })
        }
      }
    }

    fetchUser()
  }, [])

  const register = async ({ name, email, password }: { name: string; email: string; password: string }) => {
    setIsLoading(true)
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      })

      if (error || !data.user) {
        setIsLoading(false)
        return { success: false, error: error?.message || "Registration failed" }
      }

      await createProfile(data.user.id, email, name)
      setIsLoading(false)
      return { success: true }
    } catch (error) {
      setIsLoading(false)
      return { success: false, error: "Registration error" }
    }
  }

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password })

      if (error || !data.user) {
        setIsLoading(false)
        return { success: false, error: error?.message || "Login failed" }
      }

      const profile = await getProfile(data.user.id)
      if (!profile) {
        setIsLoading(false)
        return { success: false, error: "User profile not found" }
      }

      await updateLastLogin(data.user.id)

      setUser({
        id: data.user.id,
        name: profile.full_name,
        email: profile.email,
        role: profile.role,
        isActive: profile.is_active,
        avatar: profile.avatar_url,
        createdAt: profile.created_at,
        lastLogin: profile.last_login,
      })

      setIsLoading(false)
      return { success: true }
    } catch (err) {
      setIsLoading(false)
      return { success: false, error: "Login error" }
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
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
    }
