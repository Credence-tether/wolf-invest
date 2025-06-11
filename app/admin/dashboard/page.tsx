"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Users,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  Eye,
  UserCheck,
  Banknote,
  Activity,
  BarChart3,
} from "lucide-react"
import { useAuth } from "@/components/auth-provider"
import Link from "next/link"

export default function AdminDashboard() {
  const { user } = useAuth()

  // Mock data for admin dashboard
  const stats = {
    totalUsers: 1247,
    activeInvestments: 892,
    totalInvested: 2847500,
    totalPaidOut: 425000,
    pendingWithdrawals: 15,
    newUsersToday: 23,
    platformRevenue: 142375,
    activeUsersToday: 156,
  }

  const recentUsers = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      plan: "Basic",
      amount: 500,
      status: "active",
      joinDate: "2024-01-15",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      plan: "Amateur",
      amount: 1500,
      status: "active",
      joinDate: "2024-01-15",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      plan: "Retirement",
      amount: 5000,
      status: "pending",
      joinDate: "2024-01-14",
    },
    {
      id: 4,
      name: "Sarah Wilson",
      email: "sarah@example.com",
      plan: "VIP",
      amount: 10000,
      status: "active",
      joinDate: "2024-01-14",
    },
  ]

  const pendingWithdrawals = [
    { id: 1, user: "Alice Brown", amount: 250, plan: "Basic", requestDate: "2024-01-15" },
    { id: 2, user: "Bob Davis", amount: 750, plan: "Amateur", requestDate: "2024-01-15" },
    { id: 3, user: "Carol White", amount: 1200, plan: "Retirement", requestDate: "2024-01-14" },
  ]

  const recentActivity = [
    { id: 1, type: "user_registered", user: "John Doe", time: "2 minutes ago" },
    { id: 2, type: "investment_created", user: "Jane Smith", amount: 1500, time: "5 minutes ago" },
    { id: 3, type: "withdrawal_requested", user: "Mike Johnson", amount: 750, time: "10 minutes ago" },
    { id: 4, type: "roi_paid", user: "Sarah Wilson", amount: 125, time: "15 minutes ago" },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Welcome back, {user?.name}! Here's your platform overview.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalUsers.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+{stats.newUsersToday} new today</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Invested</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${stats.totalInvested.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">{stats.activeInvestments} active investments</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Platform Revenue</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">${stats.platformRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Total platform earnings</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Actions</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{stats.pendingWithdrawals}</div>
            <p className="text-xs text-muted-foreground">Withdrawal requests</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="users">Recent Users</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="actions">Quick Actions</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Recent Users */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Users</CardTitle>
                  <CardDescription>Latest user registrations and investments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentUsers.map((user) => (
                      <div key={user.id} className="flex items-center justify-between border-b pb-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 font-semibold text-sm">
                              {user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <div>
                            <p className="font-semibold">{user.name}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{user.email}</p>
                            <p className="text-xs text-gray-500">Joined {user.joinDate}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant={user.status === "active" ? "default" : "secondary"}>{user.status}</Badge>
                          </div>
                          <p className="text-sm font-semibold">{user.plan}</p>
                          <p className="text-xs text-gray-500">${user.amount.toLocaleString()}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Link href="/admin/users">
                      <Button variant="outline" className="w-full">
                        View All Users
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Pending Withdrawals */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Pending Withdrawals
                    <Badge variant="destructive">{pendingWithdrawals.length}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {pendingWithdrawals.map((withdrawal) => (
                      <div key={withdrawal.id} className="border rounded-lg p-3">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="font-semibold text-sm">{withdrawal.user}</p>
                            <p className="text-xs text-gray-500">{withdrawal.plan} Plan</p>
                          </div>
                          <span className="font-semibold text-sm">${withdrawal.amount}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">{withdrawal.requestDate}</span>
                          <div className="flex gap-1">
                            <Button size="sm" className="h-6 px-2 text-xs bg-blue-600 hover:bg-blue-700">
                              <UserCheck className="h-3 w-3" />
                            </Button>
                            <Button size="sm" variant="outline" className="h-6 px-2 text-xs">
                              <Eye className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Link href="/admin/transactions">
                      <Button variant="outline" className="w-full">
                        <Banknote className="mr-2 h-4 w-4" />
                        Manage All
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>Manage platform users and their accounts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Link href="/admin/users">
                  <Button className="w-full h-20 flex flex-col gap-2">
                    <Users className="h-6 w-6" />
                    <span>All Users</span>
                  </Button>
                </Link>
                <Button className="w-full h-20 flex flex-col gap-2" variant="outline">
                  <UserCheck className="h-6 w-6" />
                  <span>Active Users</span>
                </Button>
                <Button className="w-full h-20 flex flex-col gap-2" variant="outline">
                  <AlertTriangle className="h-6 w-6" />
                  <span>Pending Users</span>
                </Button>
                <Button className="w-full h-20 flex flex-col gap-2" variant="outline">
                  <Activity className="h-6 w-6" />
                  <span>User Activity</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest platform activities and events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between border-b pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium">
                          {activity.type === "user_registered" && "New user registered"}
                          {activity.type === "investment_created" && "New investment created"}
                          {activity.type === "withdrawal_requested" && "Withdrawal requested"}
                          {activity.type === "roi_paid" && "ROI payment processed"}
                        </p>
                        <p className="text-xs text-gray-500">
                          {activity.user}
                          {activity.amount && ` - $${activity.amount}`}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="actions" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/admin/users">
                  <Button className="w-full" variant="outline">
                    <Users className="mr-2 h-4 w-4" />
                    Manage Users
                  </Button>
                </Link>
                <Button className="w-full" variant="outline">
                  <UserCheck className="mr-2 h-4 w-4" />
                  Approve Accounts
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Financial Operations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/admin/transactions">
                  <Button className="w-full" variant="outline">
                    <Banknote className="mr-2 h-4 w-4" />
                    Process Withdrawals
                  </Button>
                </Link>
                <Link href="/admin/investments">
                  <Button className="w-full" variant="outline">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    Manage Investments
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Analytics & Reports</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/admin/analytics">
                  <Button className="w-full" variant="outline">
                    <Eye className="mr-2 h-4 w-4" />
                    View Analytics
                  </Button>
                </Link>
                <Button className="w-full" variant="outline">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Generate Reports
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
