"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { PermissionGuard } from "./permission-guard"
import { RoleBadge } from "./role-badge"
import { ROLE_DEFINITIONS, type AdminRole, type Permission } from "@/lib/permissions"
import { Shield, Users, Edit, Plus, Info } from "lucide-react"

interface AdminUser {
  id: string
  name: string
  email: string
  role: AdminRole
  permissions: Permission[]
  lastLogin: string
  isActive: boolean
}

export function RoleManager() {
  const [adminUsers, setAdminUsers] = useState<AdminUser[]>([
    {
      id: "admin-1",
      name: "System Administrator",
      email: "admin@wolv-invest.com",
      role: "super_admin",
      permissions: ROLE_DEFINITIONS.super_admin.permissions,
      lastLogin: "2024-01-20",
      isActive: true,
    },
    {
      id: "admin-2",
      name: "John Manager",
      email: "john.manager@wolv-invest.com",
      role: "manager",
      permissions: ROLE_DEFINITIONS.manager.permissions,
      lastLogin: "2024-01-19",
      isActive: true,
    },
    {
      id: "admin-3",
      name: "Sarah Support",
      email: "sarah.support@wolv-invest.com",
      role: "support",
      permissions: ROLE_DEFINITIONS.support.permissions,
      lastLogin: "2024-01-20",
      isActive: true,
    },
  ])

  const [selectedUser, setSelectedUser] = useState<AdminUser | null>(null)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)

  const handleRoleChange = (userId: string, newRole: AdminRole) => {
    setAdminUsers((users) =>
      users.map((user) =>
        user.id === userId ? { ...user, role: newRole, permissions: ROLE_DEFINITIONS[newRole].permissions } : user,
      ),
    )
  }

  const handleEditUser = (user: AdminUser) => {
    setSelectedUser(user)
    setIsEditDialogOpen(true)
  }

  return (
    <PermissionGuard permission="settings.security">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Role Management</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Manage admin roles and permissions</p>
          </div>
          <PermissionGuard permission="users.create">
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Admin User
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Admin User</DialogTitle>
                  <DialogDescription>Create a new admin user with specific role and permissions</DialogDescription>
                </DialogHeader>
                {/* Add user form would go here */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <input className="w-full p-2 border rounded" placeholder="admin@wolv-invest.com" />
                  </div>
                  <div className="space-y-2">
                    <Label>Role</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(ROLE_DEFINITIONS).map(([key, role]) => (
                          <SelectItem key={key} value={key}>
                            {role.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full">Create Admin User</Button>
                </div>
              </DialogContent>
            </Dialog>
          </PermissionGuard>
        </div>

        {/* Role Definitions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Available Roles
            </CardTitle>
            <CardDescription>System-defined roles with their permissions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {Object.entries(ROLE_DEFINITIONS).map(([key, role]) => (
                <Card key={key} className="border">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <RoleBadge role={key as AdminRole} />
                      <Badge variant="outline">{role.permissions.length} permissions</Badge>
                    </div>
                    <CardDescription className="text-sm">{role.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2">
                      <Label className="text-xs font-medium text-gray-500">Key Permissions:</Label>
                      <div className="flex flex-wrap gap-1">
                        {role.permissions.slice(0, 3).map((permission) => (
                          <Badge key={permission} variant="secondary" className="text-xs">
                            {permission.split(".")[1]}
                          </Badge>
                        ))}
                        {role.permissions.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{role.permissions.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Admin Users */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Admin Users
            </CardTitle>
            <CardDescription>Manage admin users and their role assignments</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Permissions</TableHead>
                  <TableHead>Last Login</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {adminUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <RoleBadge role={user.role} />
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{user.permissions.length} permissions</Badge>
                    </TableCell>
                    <TableCell>{user.lastLogin}</TableCell>
                    <TableCell>
                      <Badge className={user.isActive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
                        {user.isActive ? "Active" : "Inactive"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <PermissionGuard permission="users.edit">
                          <Button variant="ghost" size="sm" onClick={() => handleEditUser(user)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                        </PermissionGuard>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <Info className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>User Permissions</DialogTitle>
                              <DialogDescription>Detailed permissions for {user.name}</DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <Label className="text-sm font-medium">Role</Label>
                                  <div className="mt-1">
                                    <RoleBadge role={user.role} />
                                  </div>
                                </div>
                                <div>
                                  <Label className="text-sm font-medium">Total Permissions</Label>
                                  <p className="text-sm text-gray-600 mt-1">{user.permissions.length} permissions</p>
                                </div>
                              </div>
                              <div>
                                <Label className="text-sm font-medium">Permissions</Label>
                                <div className="mt-2 max-h-60 overflow-y-auto">
                                  <div className="grid grid-cols-2 gap-2">
                                    {user.permissions.map((permission) => (
                                      <Badge key={permission} variant="secondary" className="text-xs">
                                        {permission}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Edit User Dialog */}
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Admin User</DialogTitle>
              <DialogDescription>Modify user role and permissions</DialogDescription>
            </DialogHeader>
            {selectedUser && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>User</Label>
                  <div className="p-2 bg-gray-50 rounded">
                    <div className="font-medium">{selectedUser.name}</div>
                    <div className="text-sm text-gray-500">{selectedUser.email}</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Current Role</Label>
                  <div className="p-2 bg-gray-50 rounded">
                    <RoleBadge role={selectedUser.role} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>New Role</Label>
                  <Select
                    value={selectedUser.role}
                    onValueChange={(value) => handleRoleChange(selectedUser.id, value as AdminRole)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(ROLE_DEFINITIONS).map(([key, role]) => (
                        <SelectItem key={key} value={key}>
                          <div className="flex items-center gap-2">
                            <RoleBadge role={key as AdminRole} showIcon={false} variant="outline" />
                            <span>{role.description}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    Changing the role will automatically update the user's permissions according to the role definition.
                  </AlertDescription>
                </Alert>
                <div className="flex gap-2">
                  <Button onClick={() => setIsEditDialogOpen(false)} className="flex-1">
                    Save Changes
                  </Button>
                  <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                    Cancel
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </PermissionGuard>
  )
}
