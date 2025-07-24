"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
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
  const [isLoading, setIsLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const fetchUser = async () => {
      try {
        const {
          data: { user: supabaseUser },
        } = await supabase.auth.getUser()

        if (supabaseUser) {
          const profile = await getProfile(supabaseUser.id)
          if (profile) {
            setUser({
              id: profile.id,
              name: profile.full_name,
              email: profile.email,
              role: profile.role as UserRole,
              avatar: profile.avatar_url,
              isActive: profile.is_active ?? true,
              createdAt: profile.created_at,
              lastLogin: profile.last_login || undefined,
            })
          }
        }
      } catch (error) {
        console.error("Error fetching user:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUser()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN" && session?.user) {
        try {
          const profile = await getProfile(session.user.id)
          if (profile) {
            setUser({
              id: profile.id,
              name: profile.full_name,
              email: profile.email,
              role: profile.role as UserRole,
              avatar: profile.avatar_url,
              isActive: profile.is_active ?? true,
              createdAt: profile.created_at,
              lastLogin: profile.last_login || undefined,
            })
            await updateLastLogin(session.user.id)
          }
        } catch (error) {
          console.error("Error updating user profile:", error)
        }
      } else if (event === "SIGNED_OUT") {
        setUser(null)
      }
      setIsLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true)
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        return { success: false, error: error.message }
      }

      if (data.user) {
        const profile = await getProfile(data.user.id)
        if (profile) {
          if (!profile.is_active) {
            await supabase.auth.signOut()
            return { success: false, error: "Account has been deactivated. Please contact support." }
          }

          setUser({
            id: profile.id,
            name: profile.full_name,
            email: profile.email,
            role: profile.role as UserRole,
            avatar: profile.avatar_url,
            isActive: profile.is_active ?? true,
            createdAt: profile.created_at,
            lastLogin: profile.last_login || undefined,
          })

          await updateLastLogin(data.user.id)
          return { success: true }
        } else {
          return { success: false, error: "User profile not found" }
        }
      }

      return { success: false, error: "Login failed" }
    } catch (error) {
      console.error("Login error:", error)
      return { success: false, error: "An unexpected error occurred" }
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (userData: { name: string; email: string; password: string }) => {
    try {
      setIsLoading(true)

      // Check if user already exists
      const { data: existingUser } = await supabase
        .from("profiles")
        .select("email")
        .eq("email", userData.email.toLowerCase())
        .single()

      if (existingUser) {
        return { success: false, error: "An account with this email already exists" }
      }

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
        return { success: false, error: error.message }
      }

      if (data.user) {
        // Create profile
        const { error: profileError } = await supabase.from("profiles").insert({
          id: data.user.id,
          email: userData.email.toLowerCase(),
          full_name: userData.name,
          role: "user",
          is_active: true,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        })

        if (profileError) {
          console.error("Profile creation error:", profileError)
          return { success: false, error: "Failed to create user profile" }
        }

        return { success: true }
      }

      return { success: false, error: "Registration failed" }
    } catch (error) {
      console.error("Registration error:", error)
      return { success: false, error: "An unexpected error occurred" }
    } finally {
      setIsLoading(false)
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

  if (!mounted) {
    return null
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isLoading,
        isAuthenticated: !!user,
        isAdmin: user?.role === "admin" && user?.isActive,
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
