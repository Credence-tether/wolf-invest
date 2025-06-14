import { createClient } from "@supabase/supabase-js"

// Client-side Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
})

// Types for our database
export interface Profile {
  id: string
  email: string
  full_name: string
  username?: string
  role: "user" | "admin"
  avatar_url?: string
  website?: string
  is_active?: boolean
  created_at: string
  updated_at?: string
  last_login?: string
  has_completed_kyc?: boolean
}

export const getProfile = async (userId: string): Promise<Profile | null> => {
  try {
    const { data, error } = await supabase.from("profiles").select("*").eq("id", userId).maybeSingle()

    if (error) {
      console.error("Error fetching profile:", error)
      return null
    }

    return data
  } catch (error) {
    console.error("Get profile failed:", error)
    return null
  }
}

export const updateLastLogin = async (userId: string) => {
  try {
    const { error } = await supabase
      .from("profiles")
      .update({
        last_login: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .eq("id", userId)

    if (error) {
      console.error("Error updating last login:", error)
    } else {
      console.log("Last login updated successfully")
    }
  } catch (error) {
    console.warn("Could not update last login:", error)
  }
}

// Get current user's profile (safe from RLS issues)
export const getCurrentUserProfile = async (): Promise<Profile | null> => {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return null
    }

    return await getProfile(user.id)
  } catch (error) {
    console.error("Error getting current user profile:", error)
    return null
  }
}

// Check if current user is admin (safe method)
export const isCurrentUserAdmin = async (): Promise<boolean> => {
  try {
    const profile = await getCurrentUserProfile()
    return profile?.role === "admin" && profile?.is_active === true
  } catch (error) {
    console.error("Error checking admin status:", error)
    return false
  }
}
