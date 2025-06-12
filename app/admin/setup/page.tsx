"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Shield, UserCheck, Mail, Calendar, Loader2 } from "lucide-react"
import { supabase } from "@/lib/supabase"

interface AdminUser {
  id: string
  email: string
  full_name: string
  role: string
  is_active: boolean
  created_at: string
}

export default function AdminSetupPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [adminUsers, setAdminUsers] = useState<AdminUser[]>([])
  const [loadingUsers, setLoadingUsers] = useState(false)

  const promoteToAdmin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage("")
    setError("")

    try {
      // Update user role to admin
      const { data, error: updateError } = await supabase
        .from("profiles")
        .update({
          role: "admin",
          updated_at: new Date().toISOString(),
        })
        .eq("email", email)
        .select()

      if (updateError) {
        throw updateError
      }

      if (data && data.length > 0) {
        setMessage(`Successfully promoted ${email} to admin!`)
        setEmail("")
        loadAdminUsers() // Refresh the list
      } else {
        setError(`User with email ${email} not found. Make sure they have registered first.`)
      }
    } catch (err: any) {
      setError(err.message || "Failed to promote user to admin")
    } finally {
      setIsLoading(false)
    }
  }

  const loadAdminUsers = async () => {
    setLoadingUsers(true)
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("id, email, full_name, role, is_active, created_at")
        .eq("role", "admin")
        .order("created_at", { ascending: false })

      if (error) throw error
      setAdminUsers(data || [])
    } catch (err: any) {
      console.error("Error loading admin users:", err)
    } finally {
      setLoadingUsers(false)
    }
  }

  const removeAdmin = async (userId: string, email: string) => {
    if (!confirm(`Remove admin privileges from ${email}?`)) return

    try {
      const { error } = await supabase
        .from("profiles")
        .update({
          role: "user",
          updated_at: new Date().toISOString(),
        })
        .eq("id", userId)

      if (error) throw error

      setMessage(`Removed admin privileges from ${email}`)
      loadAdminUsers()
    } catch (err: any) {
      setError(err.message || "Failed to remove admin privileges")
    }
  }

  // Load admin users on component mount
  useState(() => {
    loadAdminUsers()
  })

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Admin Setup</h1>
        <p className="text-gray-600 dark:text-gray-400">Manage administrator accounts for WOLV-INVEST platform</p>
      </div>

      {/* Promote User to Admin */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Promote User to Admin
          </CardTitle>
          <CardDescription>Enter the email of a registered user to promote them to administrator</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={promoteToAdmin} className="space-y-4">
            <div>
              <Label htmlFor="email">User Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="user@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <p className="text-sm text-gray-500 mt-1">The user must have already registered on the platform</p>
            </div>

            {message && (
              <Alert className="border-green-500 bg-green-50">
                <UserCheck className="h-4 w-4" />
                <AlertDescription className="text-green-700">{message}</AlertDescription>
              </Alert>
            )}

            {error && (
              <Alert className="border-red-500 bg-red-50">
                <AlertDescription className="text-red-700">{error}</AlertDescription>
              </Alert>
            )}

            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Promoting...
                </>
              ) : (
                <>
                  <Shield className="mr-2 h-4 w-4" />
                  Promote to Admin
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Current Admin Users */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <UserCheck className="h-5 w-5" />
              Current Administrators
            </span>
            <Button variant="outline" size="sm" onClick={loadAdminUsers} disabled={loadingUsers}>
              {loadingUsers ? <Loader2 className="h-4 w-4 animate-spin" /> : "Refresh"}
            </Button>
          </CardTitle>
          <CardDescription>All users with administrator privileges</CardDescription>
        </CardHeader>
        <CardContent>
          {adminUsers.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <Shield className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No administrators found</p>
              <p className="text-sm">Promote a user to admin to get started</p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {adminUsers.map((admin) => (
                  <TableRow key={admin.id}>
                    <TableCell className="font-medium">{admin.full_name}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-gray-400" />
                        {admin.email}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={admin.is_active ? "default" : "secondary"}>
                        {admin.is_active ? "Active" : "Inactive"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        {new Date(admin.created_at).toLocaleDateString()}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => removeAdmin(admin.id, admin.email)}
                        className="text-red-600 hover:text-red-700"
                      >
                        Remove Admin
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {/* Instructions */}
      <Card>
        <CardHeader>
          <CardTitle>Setup Instructions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <h4 className="font-semibold">Method 1: Use This Interface</h4>
              <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
                <li>User registers normally on the platform</li>
                <li>Enter their email above and click "Promote to Admin"</li>
                <li>They can now access admin features</li>
              </ol>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Method 2: Direct Database</h4>
              <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
                <li>Go to Supabase Dashboard</li>
                <li>Navigate to Table Editor → profiles</li>
                <li>Change user's role from "user" to "admin"</li>
                <li>Save changes</li>
              </ol>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
