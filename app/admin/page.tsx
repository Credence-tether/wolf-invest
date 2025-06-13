"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/components/auth-provider"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"

type UserRow = {
  id: string
  full_name: string
  email: string
  role: string
  is_active: boolean
  has_completed_kyc?: boolean
  created_at: string
  last_login?: string
}

export default function AdminPage() {
  const { isAdmin, isAuthenticated } = useAuth()
  const [users, setUsers] = useState<UserRow[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated || !isAdmin) {
      router.push("/")
      return
    }

    const fetchUsers = async () => {
      const { data, error } = await supabase.from("profiles").select("*").order("created_at", { ascending: false })
      if (!error && data) {
        setUsers(data)
      }
      setLoading(false)
    }

    fetchUsers()
  }, [isAuthenticated, isAdmin, router])

  if (loading) {
    return <div className="p-6 text-lg">Loading users...</div>
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <div className="overflow-auto border rounded-lg shadow">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Role</th>
                <th className="p-3">KYC</th>
                <th className="p-3">Active</th>
                <th className="p-3">Last Login</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b">
                  <td className="p-3">{user.full_name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3 font-semibold">{user.role}</td>
                  <td className="p-3">{user.has_completed_kyc ? "✅ Yes" : "❌ No"}</td>
                  <td className="p-3">{user.is_active ? "🟢 Active" : "🔴 Blocked"}</td>
                  <td className="p-3">{user.last_login ? new Date(user.last_login).toLocaleString() : "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
