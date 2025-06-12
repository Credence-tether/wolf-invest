import { createClient } from "@supabase/supabase-js"

// ✅ Correct way to access env vars
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// ✅ Server-side only
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database
export interface Profile {
  id: string
  email: string
  full_name: string
  role: "user" | "admin"
  avatar_url?: string
  is_active: boolean
  created_at: string
  updated_at: string
  last_login?: string
  has_completed_kyc?: boolean
}

// Database helper functions
export const createProfile = async (userId: string, email: string, fullName: string) => {
  const { data, error } = await supabase
    .from("profiles")
    .insert([
      {
        id: userId,
        email,
        full_name: fullName,
        role: "user",
        is_active: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        has_completed_kyc: false,
      },
    ])
    .select()
    .single()

  if (error) throw error
  return data
}

export const getProfile = async (userId: string): Promise<Profile | null> => {
  const { data, error } = await supabase.from("profiles").select("*").eq("id", userId).single()

  if (error) {
    console.error("Error fetching profile:", error)
    return null
  }

  return data
}

export const updateLastLogin = async (userId: string) => {
  const { error } = await supabase
    .from("profiles")
    .update({
      last_login: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .eq("id", userId)

  if (error) {
    console.error("Error updating last login:", error)
  }
}
