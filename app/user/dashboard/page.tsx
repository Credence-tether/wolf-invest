"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, ArrowDownRight, DollarSign, TrendingUp, Wallet, PieChart, BarChart3 } from "lucide-react"
import { useAuth } from "@/components/auth-provider"
import {
  BlockchainNode,
  BlockchainCube,
  BlockchainHexagon,
  BlockchainNetwork,
  BlockchainWaves,
  BlockchainCircuit,
} from "@/components/blockchain-illustrations"

// Client-side component that handles auth logic
function UserDashboardContent() {
  const { user, isAuthenticated } = useAuth()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Only run auth check on client side
    if (typeof window !== "undefined") {
      setIsLoading(false)

      if (!isAuthenticated || !user || user.role !== "user") {
        router.push("/login")
        return
      }
    }
  }, [user, isAuthenticated, router])

  // Show loading state during hydration
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  // Redirect if not authenticated (client-side only)
  if (!isAuthenticated || !user || user.role !== "user") {
    return null
  }

  // Mock data for user dashboard
  const investments = [
    {
      id: 1,
      plan: "Basic Plan",
      amount: 500,
      dailyROI: 2.5,
      daysRemaining: 5,
      totalEarned: 62.5,
      status: "active",
    },
    {
      id: 2,
      plan: "Amateur Plan",
      amount: 1500,
      dailyROI: 3.5,
      daysRemaining: 3,
      totalEarned: 210,
      status: "active",
    },
  ]

  const totalInvested = investments.reduce((sum, inv) => sum + inv.amount, 0)
  const totalEarned = investments.reduce((sum, inv) => sum + inv.totalEarned, 0)
  const dailyEarnings = investments.reduce((sum, inv) => sum + (inv.amount * inv.dailyROI) / 100, 0)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative">
      {/* Added blockchain illustrations */}
      <BlockchainNode className="absolute top-10 left-[5%] text-blue-600 dark:text-blue-400 opacity-10 hidden lg:block" />
      <BlockchainCube className="absolute bottom-10 right-[5%] text-blue-600 dark:text-blue-400 opacity-10 hidden lg:block" />
      <BlockchainHexagon className="absolute top-1/2 left-[2%] text-blue-600 dark:text-blue-400 opacity-10 hidden xl:block" />
      <BlockchainWaves className="absolute bottom-1/4 left-[10%] text-blue-600 dark:text-blue-400 opacity-10 hidden lg:block" />

      <div className="container mx-auto p-6 relative z-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome back, {user.name}!</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Here's your investment overview</p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card className="relative">
            <BlockchainCircuit className="absolute top-2 right-2 w-6 h-6 text-blue-600 dark:text-blue-400 opacity-20" />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Invested</CardTitle>
              <Wallet className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalInvested.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Across {investments.length} investments</p>
            </CardContent>
          </Card>

          <Card className="relative">
            <BlockchainNode className="absolute top-2 right-2 w-6 h-6 text-emerald-600 opacity-20" />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Earned</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald-600">${totalEarned.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">
                +{((totalEarned / totalInvested) * 100).toFixed(1)}% return
              </p>
            </CardContent>
          </Card>

          <Card className="relative">
            <BlockchainHexagon className="absolute top-2 right-2 w-6 h-6 text-purple-600 opacity-20" />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Daily Earnings</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${dailyEarnings.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">Expected daily return</p>
            </CardContent>
          </Card>

          <Card className="relative">
            <BlockchainCube className="absolute top-2 right-2 w-6 h-6 text-orange-600 opacity-20" />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Available Balance</CardTitle>
              <PieChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalEarned.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">Ready for withdrawal</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Active Investments */}
          <div className="lg:col-span-2">
            <Card className="relative">
              <BlockchainNetwork className="absolute right-0 bottom-0 text-blue-600 dark:text-blue-400 opacity-10" />
              <CardHeader>
                <CardTitle>Active Investments</CardTitle>
                <CardDescription>Your current investment portfolio</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {investments.map((investment) => (
                    <div key={investment.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h3 className="font-semibold">{investment.plan}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            ${investment.amount.toLocaleString()} invested
                          </p>
                        </div>
                        <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                          {investment.status}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-3">
                        <div>
                          <p className="text-xs text-gray-500">Daily ROI</p>
                          <p className="font-semibold text-emerald-600">{investment.dailyROI}%</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Total Earned</p>
                          <p className="font-semibold">${investment.totalEarned}</p>
                        </div>
                      </div>

                      <div className="mb-2">
                        <div className="flex justify-between text-xs text-gray-500 mb-1">
                          <span>Days remaining</span>
                          <span>{investment.daysRemaining}/7 days</span>
                        </div>
                        <Progress value={((7 - investment.daysRemaining) / 7) * 100} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card className="relative">
              <BlockchainWaves className="absolute right-0 top-0 text-blue-600 dark:text-blue-400 opacity-10" />
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  <ArrowUpRight className="mr-2 h-4 w-4" />
                  New Investment
                </Button>
                <Button variant="outline" className="w-full">
                  <ArrowDownRight className="mr-2 h-4 w-4" />
                  Withdraw Funds
                </Button>
                <Button variant="outline" className="w-full">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  View Reports
                </Button>
              </CardContent>
            </Card>

            <Card className="relative">
              <BlockchainCircuit className="absolute right-0 bottom-0 text-blue-600 dark:text-blue-400 opacity-10" />
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      <div>
                        <p className="text-sm font-medium">ROI Payment</p>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-emerald-600">+$52.50</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <div>
                        <p className="text-sm font-medium">Investment Started</p>
                        <p className="text-xs text-gray-500">1 day ago</p>
                      </div>
                    </div>
                    <span className="text-sm font-semibold">$1,500</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      <div>
                        <p className="text-sm font-medium">ROI Payment</p>
                        <p className="text-xs text-gray-500">1 day ago</p>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-emerald-600">+$12.50</span>
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

// Main component that can be safely pre-rendered
export default function UserDashboard() {
  return <UserDashboardContent />
}
