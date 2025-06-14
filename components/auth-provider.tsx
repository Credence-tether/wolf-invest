"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { supabase, createProfile, getProfile, updateLastLogin } from "@/lib/supabase"
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

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const fetchUser = async () => {
      try {
        const {
          data: { user: supabaseUser },
        } = await supabase.auth.getUser()

        if (supabaseUser) {
          await loadUserProfile(supabaseUser)
        }
      } catch (error) {
        console.error("Error fetching initial user:", error)
      }
    }

    fetchUser()

    // Listen for auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("Auth state changed:", event)

      if (event === "SIGNED_IN" && session?.user) {
        await loadUserProfile(session.user)
      } else if (event === "SIGNED_OUT") {
        setUser(null)
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  const loadUserProfile = async (supabaseUser: SupabaseUser) => {
    try {
      const profile = await getProfile(supabaseUser.id)

      if (profile) {
        setUser({
          id: supabaseUser.id,
          name: profile.full_name,
          email: profile.email,
          role: profile.role,
          isActive: profile.is_active ?? true,
          avatar: profile.avatar_url,
          createdAt: profile.created_at,
          lastLogin: profile.last_login,
        })

        // Update last login (non-blocking)
        updateLastLogin(supabaseUser.id).catch(console.warn)
      } else {
        console.error("Profile not found for user:", supabaseUser.id)
      }
    } catch (error) {
      console.error("Error loading user profile:", error)
    }
  }

  const register = async ({ name, email, password }: { name: string; email: string; password: string }) => {
    setIsLoading(true)

    try {
      console.log("Starting registration for:", email)

      // Step 1: Create auth user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
          },
        },
      })

      if (authError) {
        console.error("Auth signup error:", authError)
        setIsLoading(false)
        return { success: false, error: authError.message }
      }

      if (!authData.user) {
        setIsLoading(false)
        return { success: false, error: "Failed to create user account" }
      }

      console.log("Auth user created:", authData.user.id)

      // Step 2: Create profile (the trigger should handle this, but we'll do it manually as backup)
      try {
        await createProfile(authData.user.id, email, name)
        console.log("Profile created successfully")
      } catch (profileError) {
        console.warn("Profile creation failed, but user was created:", profileError)
        // Don't fail registration if profile creation fails - the trigger might have handled it
      }

      setIsLoading(false)

      // Check if email confirmation is required
      if (!authData.user.email_confirmed_at) {
        return {
          success: true,
          error: "Please check your email and click the confirmation link to complete registration.",
        }
      }

      return { success: true }
    } catch (error) {
      console.error("Registration error:", error)
      setIsLoading(false)
      return {
        success: false,
        error: error instanceof Error ? error.message : "Registration failed. Please try again.",
      }
    }
  }

  const login = async (email: string, password: string) => {
    setIsLoading(true)

    try {
      console.log("Starting login for:", email)

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        console.error("Login error:", error)
        setIsLoading(false)
        return { success: false, error: error.message }
      }

      if (!data.user) {
        setIsLoading(false)
        return { success: false, error: "Login failed" }
      }

      console.log("Login successful for:", data.user.id)

      // Profile will be loaded by the auth state change listener
      setIsLoading(false)
      return { success: true }
    } catch (error) {
      console.error("Login error:", error)
      setIsLoading(false)
      return {
        success: false,
        error: error instanceof Error ? error.message : "Login failed. Please try again.",
      }
    }
  }

  const logout = async () => {
    try {
      await supabase.auth.signOut()
      setUser(null)
    } catch (error) {
      console.error("Logout error:", error)
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
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
