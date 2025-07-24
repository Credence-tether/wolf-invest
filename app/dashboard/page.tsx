"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Wallet, 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Users, 
  BarChart3,
  Plus,
  Eye,
  Download,
  Bell,
  Settings,
  LogOut,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react"
import { useAuth } from "@/components/auth-provider"
import { INVESTMENT_PLANS } from "@/lib/investment-data"
import Link from "next/link"

interface DashboardStats {
  totalBalance: number
  totalInvested: number
  totalEarnings: number
  activeInvestments: number
  pendingWithdrawals: number
  todaysEarnings: number
}

interface RecentActivity {
  id: string
  type: "investment" | "withdrawal" | "deposit" | "earnings"
  amount: number
  description: string
  date: string
  status: "completed" | "pending" | "failed"
}

export default function DashboardPage() {
  const { user, logout, isLoading } = useAuth()
  const router = useRouter()
  const [stats, setStats] = useState<DashboardStats>({
    totalBalance: 0,
    totalInvested: 0,
    totalEarnings: 0,
    activeInvestments: 0,
    pendingWithdrawals: 0,
    todaysEarnings: 0
  })
  
  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([])

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login")
      return
    }

    // Simulate loading dashboard data
    // In a real app, this would fetch from your API
    setStats({
      totalBalance: 25750.00,
      totalInvested: 15000.00,
      totalEarnings: 10750.00,
      activeInvestments: 3,
      pendingWithdrawals: 1,
      todaysEarnings: 425.50
    })

    setRecentActivity([
      {
        id: "1",
        type: "earnings",
        amount: 125.50,
        description: "Daily earnings from VIP Plan",
        date: "2025-07-24T10:30:00Z",
        status: "completed"
      },
      {
        id: "2", 
        type: "investment",
        amount: 5000.00,
        description: "New investment in Amateur Plan",
        date: "2025-07-23T15:45:00Z",
        status: "completed"
      },
      {
        id: "3",
        type: "withdrawal",
        amount: 2000.00,
        description: "Withdrawal to bank account",
        date: "2025-07-22T09:20:00Z",
        status: "pending"
      },
      {
        id: "4",
        type: "deposit",
        amount: 3000.00,
        description: "Wallet funding via bank transfer",
        date: "2025-07-21T14:15:00Z",
        status: "completed"
      }
    ])
  }, [user, isLoading, router])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "investment": return <TrendingUp className="h-4 w-4 text-blue-600" />
      case "withdrawal": return <ArrowDownRight className="h-4 w-4 text-red-600" />
      case "deposit": return <ArrowUpRight className="h-4 w-4 text-green-600" />
      case "earnings": return <DollarSign className="h-4 w-4 text-green-600" />
      default: return <Clock className="h-4 w-4" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed": return <Badge variant="default" className="bg-green-100 text-green-800">Completed</Badge>
      case "pending": return <Badge variant="secondary">Pending</Badge>
      case "failed": return <Badge variant="destructive">Failed</Badge>
      default: return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-xl font-semibold">Welcome back, {user.name}!</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {user.role === "admin" ? "Administrator" : "Investor"}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              {user.role === "admin" && (
                <Link href="/admin">
                  <Button variant="outline" size="sm">
                    Admin Panel
                  </Button>
                </Link>
              )}
              <Button variant="ghost" size="sm" onClick={logout}>
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
              <Wallet className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₦{stats.totalBalance.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Available for investment</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Invested</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₦{stats.totalInvested.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Across {stats.activeInvestments} plans</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">₦{stats.totalEarnings.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+₦{stats.todaysEarnings} today</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Investments</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeInvestments}</div>
              <p className="text-xs text-muted-foreground">{stats.pendingWithdrawals} pending withdrawal</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Manage your investments and account</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Link href="/invest">
                    <Button className="w-full h-20 flex flex-col gap-2 bg-blue-600 hover:bg-blue-700">
                      <Plus className="h-5 w-5" />
                      <span className="text-sm">New Investment</span>
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full h-20 flex flex-col gap-2">
                    <Download className="h-5 w-5" />
                    <span className="text-sm">Withdraw</span>
                  </Button>
                  <Button variant="outline" className="w-full h-20 flex flex-col gap-2">
                    <Wallet className="h-5 w-5" />
                    <span className="text-sm">Fund Wallet</span>
                  </Button>
                  <Button variant="outline" className="w-full h-20 flex flex-col gap-2">
                    <Eye className="h-5 w-5" />
                    <span className="text-sm">View Portfolio</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest transactions and activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        {getActivityIcon(activity.type)}
                        <div>
                          <p className="font-medium">{activity.description}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {new Date(activity.date).toLocaleDateString()} at{" "}
                            {new Date(activity.date).toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">
                          {activity.type === "withdrawal" ? "-" : "+"}₦{activity.amount.toLocaleString()}
                        </p>
                        {getStatusBadge(activity.status)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Investment Plans */}
            <Card>
              <CardHeader>
                <CardTitle>Available Plans</CardTitle>
                <CardDescription>Choose an investment plan</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {INVESTMENT_PLANS.slice(0, 3).map((plan) => (
                  <div key={plan.id} className="p-4 border rounded-lg space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold">{plan.name}</h3>
                      <Badge className={plan.color}>{plan.dailyROI}% Daily</Badge>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      ₦{plan.minAmount.toLocaleString()} - ₦{plan.maxAmount.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-500">{plan.duration} days duration</p>
                    <Link href="/invest">
                      <Button variant="outline" size="sm" className="w-full">
                        Invest Now
                      </Button>
                    </Link>
                  </div>
                ))}
                <Link href="/investment-plans">
                  <Button variant="ghost" className="w-full">
                    View All Plans
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Portfolio Performance */}
            <Card>
              <CardHeader>
                <CardTitle>Portfolio Performance</CardTitle>
                <CardDescription>Your investment growth</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>ROI Progress</span>
                      <span>71.7%</span>
                    </div>
                    <Progress value={71.7} className="h-2" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-green-600">+15.2%</p>
                      <p className="text-xs text-gray-500">This Month</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-blue-600">+48.7%</p>
                      <p className="text-xs text-gray-500">Total ROI</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
