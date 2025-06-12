"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { supabase, getProfile, updateLastLogin } from "@/lib/supabase"
import type { User as SupabaseUser } from "@supabase/supabase-js"

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

type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  register: (userData: { name: string; email: string; password: string }) => Promise<{
    success: boolean
    error?: string
  }>
  logout: () => Promise<void>
  isLoading: boolean
  isAuthenticated: boolean
  isAdmin: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Get initial session
    const getInitialSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      if (session?.user) {
        await loadUserProfile(session.user)
      }

      setIsLoading(false)
    }

    getInitialSession()

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN" && session?.user) {
        await loadUserProfile(session.user)
      } else if (event === "SIGNED_OUT") {
        setUser(null)
      }
      setIsLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  const loadUserProfile = async (supabaseUser: SupabaseUser) => {
    try {
      const profile = await getProfile(supabaseUser.id)

      if (profile) {
        // Update last login
        await updateLastLogin(supabaseUser.id)

        setUser({
          id: profile.id,
          name: profile.full_name,
          email: profile.email,
          role: profile.role as UserRole,
          avatar: profile.avatar_url,
          isActive: profile.is_active,
          createdAt: profile.created_at,
          lastLogin: profile.last_login || undefined,
          hasCompletedKYC: profile.has_completed_kyc,
        })
      }
    } catch (error) {
      console.error("Error loading user profile:", error)
    }
  }

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true)

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        setIsLoading(false)
        return { success: false, error: error.message }
      }

      if (data.user) {
        await loadUserProfile(data.user)
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
      const { data, error } = await supabase.auth.signUp({
        email: userData.email,
        password: userData.password,
        options: {
          data: {
            full_name: userData.name,
          },
        },
      })

      if (error) {
        setIsLoading(false)
        return { success: false, error: error.message }
      }

      // The profile will be created automatically by the database trigger
      // But we can also create it manually if needed
      if (data.user && !data.user.email_confirmed_at) {
        // User needs to confirm email
        setIsLoading(false)
        return {
          success: true,
          error: "Please check your email and click the confirmation link to complete registration.",
        }
      }

      setIsLoading(false)
      return { success: true }
    } catch (error) {
      setIsLoading(false)
      return { success: false, error: "An error occurred during registration" }
    }
  }

  const logout = async () => {
    setIsLoading(true)

    try {
      const { error } = await supabase.auth.signOut()
      if (error) {
        console.error("Error signing out:", error)
      }
      setUser(null)
    } catch (error) {
      console.error("Error during logout:", error)
    } finally {
      setIsLoading(false)
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
