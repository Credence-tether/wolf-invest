"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import {
  BarChart3,
  Search,
  Filter,
  MoreHorizontal,
  TrendingUp,
  DollarSign,
  Calendar,
  Eye,
  Pause,
  Play,
  StopCircle,
} from "lucide-react"

export default function AdminInvestmentsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Mock investments data
  const [investments, setInvestments] = useState([
    {
      id: 1,
      user: "John Doe",
      email: "john@example.com",
      plan: "Basic Plan",
      amount: 500,
      dailyROI: 2.5,
      daysCompleted: 2,
      totalDays: 7,
      earned: 25,
      status: "active",
      startDate: "2024-01-18",
      endDate: "2024-01-25",
    },
    {
      id: 2,
      user: "Jane Smith",
      email: "jane@example.com",
      plan: "Amateur Plan",
      amount: 1500,
      dailyROI: 3.5,
      daysCompleted: 4,
      totalDays: 7,
      earned: 210,
      status: "active",
      startDate: "2024-01-16",
      endDate: "2024-01-23",
    },
    {
      id: 3,
      user: "Mike Johnson",
      email: "mike@example.com",
      plan: "Retirement Plan",
      amount: 5000,
      dailyROI: 4.5,
      daysCompleted: 7,
      totalDays: 7,
      earned: 1575,
      status: "completed",
      startDate: "2024-01-08",
      endDate: "2024-01-15",
    },
    {
      id: 4,
      user: "Sarah Wilson",
      email: "sarah@example.com",
      plan: "VIP Plan",
      amount: 10000,
      dailyROI: 5.0,
      daysCompleted: 1,
      totalDays: 7,
      earned: 500,
      status: "active",
      startDate: "2024-01-19",
      endDate: "2024-01-26",
    },
    {
      id: 5,
      user: "David Brown",
      email: "david@example.com",
      plan: "Basic Plan",
      amount: 250,
      dailyROI: 2.0,
      daysCompleted: 0,
      totalDays: 7,
      earned: 0,
      status: "paused",
      startDate: "2024-01-20",
      endDate: "2024-01-27",
    },
  ])

  const filteredInvestments = investments.filter(
    (investment) =>
      investment.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      investment.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      investment.plan.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const activeInvestments = investments.filter((inv) => inv.status === "active")
  const completedInvestments = investments.filter((inv) => inv.status === "completed")
  const pausedInvestments = investments.filter((inv) => inv.status === "paused")

  const totalInvested = investments.reduce((sum, inv) => sum + inv.amount, 0)
  const totalEarned = investments.reduce((sum, inv) => sum + inv.earned, 0)

  const handleStatusChange = (investmentId: number, newStatus: string) => {
    setInvestments(investments.map((inv) => (inv.id === investmentId ? { ...inv, status: newStatus } : inv)))
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>
      case "completed":
        return <Badge className="bg-blue-100 text-blue-800">Completed</Badge>
      case "paused":
        return <Badge className="bg-yellow-100 text-yellow-800">Paused</Badge>
      case "cancelled":
        return <Badge className="bg-red-100 text-red-800">Cancelled</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case "Basic Plan":
        return "text-blue-600"
      case "Amateur Plan":
        return "text-green-600"
      case "Retirement Plan":
        return "text-purple-600"
      case "VIP Plan":
        return "text-orange-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Investment Management</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Monitor and manage all platform investments</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Investments</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{investments.length}</div>
            <p className="text-xs text-muted-foreground">All time investments</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Investments</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{activeInvestments.length}</div>
            <p className="text-xs text-muted-foreground">Currently running</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Invested</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalInvested.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Platform total</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Paid Out</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">${totalEarned.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">ROI payments</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Investments</CardTitle>
          <CardDescription>Monitor all investment activities and performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search by user, email, or plan..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>

          <Tabs defaultValue="all" className="space-y-4">
            <TabsList>
              <TabsTrigger value="all">All ({investments.length})</TabsTrigger>
              <TabsTrigger value="active">Active ({activeInvestments.length})</TabsTrigger>
              <TabsTrigger value="completed">Completed ({completedInvestments.length})</TabsTrigger>
              <TabsTrigger value="paused">Paused ({pausedInvestments.length})</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Investor</TableHead>
                    <TableHead>Plan</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead>ROI</TableHead>
                    <TableHead>Earned</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredInvestments.map((investment) => (
                    <TableRow key={investment.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{investment.user}</div>
                          <div className="text-sm text-gray-500">{investment.email}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className={`font-medium ${getPlanColor(investment.plan)}`}>{investment.plan}</span>
                      </TableCell>
                      <TableCell>${investment.amount.toLocaleString()}</TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>
                              {investment.daysCompleted}/{investment.totalDays} days
                            </span>
                            <span>{Math.round((investment.daysCompleted / investment.totalDays) * 100)}%</span>
                          </div>
                          <Progress value={(investment.daysCompleted / investment.totalDays) * 100} className="h-2" />
                        </div>
                      </TableCell>
                      <TableCell>{investment.dailyROI}%</TableCell>
                      <TableCell className="text-green-600 font-medium">
                        ${investment.earned.toLocaleString()}
                      </TableCell>
                      <TableCell>{getStatusBadge(investment.status)}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              View Details
                            </DropdownMenuItem>
                            {investment.status === "active" && (
                              <DropdownMenuItem onClick={() => handleStatusChange(investment.id, "paused")}>
                                <Pause className="mr-2 h-4 w-4" />
                                Pause Investment
                              </DropdownMenuItem>
                            )}
                            {investment.status === "paused" && (
                              <DropdownMenuItem onClick={() => handleStatusChange(investment.id, "active")}>
                                <Play className="mr-2 h-4 w-4" />
                                Resume Investment
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuItem
                              className="text-red-600"
                              onClick={() => handleStatusChange(investment.id, "cancelled")}
                            >
                              <StopCircle className="mr-2 h-4 w-4" />
                              Cancel Investment
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="active">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Investor</TableHead>
                    <TableHead>Plan</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead>Daily ROI</TableHead>
                    <TableHead>Next Payment</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {activeInvestments.map((investment) => (
                    <TableRow key={investment.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{investment.user}</div>
                          <div className="text-sm text-gray-500">{investment.email}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className={`font-medium ${getPlanColor(investment.plan)}`}>{investment.plan}</span>
                      </TableCell>
                      <TableCell>${investment.amount.toLocaleString()}</TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>
                              {investment.daysCompleted}/{investment.totalDays} days
                            </span>
                            <span>{Math.round((investment.daysCompleted / investment.totalDays) * 100)}%</span>
                          </div>
                          <Progress value={(investment.daysCompleted / investment.totalDays) * 100} className="h-2" />
                        </div>
                      </TableCell>
                      <TableCell>{investment.dailyROI}%</TableCell>
                      <TableCell>
                        <span className="text-sm text-gray-500">Tomorrow</span>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="completed">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Investor</TableHead>
                    <TableHead>Plan</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Total Earned</TableHead>
                    <TableHead>ROI</TableHead>
                    <TableHead>Completion Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {completedInvestments.map((investment) => (
                    <TableRow key={investment.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{investment.user}</div>
                          <div className="text-sm text-gray-500">{investment.email}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className={`font-medium ${getPlanColor(investment.plan)}`}>{investment.plan}</span>
                      </TableCell>
                      <TableCell>${investment.amount.toLocaleString()}</TableCell>
                      <TableCell className="text-green-600 font-medium">
                        ${investment.earned.toLocaleString()}
                      </TableCell>
                      <TableCell>{((investment.earned / investment.amount) * 100).toFixed(1)}%</TableCell>
                      <TableCell>{investment.endDate}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="paused">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Investor</TableHead>
                    <TableHead>Plan</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead>Paused Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pausedInvestments.map((investment) => (
                    <TableRow key={investment.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{investment.user}</div>
                          <div className="text-sm text-gray-500">{investment.email}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className={`font-medium ${getPlanColor(investment.plan)}`}>{investment.plan}</span>
                      </TableCell>
                      <TableCell>${investment.amount.toLocaleString()}</TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>
                              {investment.daysCompleted}/{investment.totalDays} days
                            </span>
                            <span>{Math.round((investment.daysCompleted / investment.totalDays) * 100)}%</span>
                          </div>
                          <Progress value={(investment.daysCompleted / investment.totalDays) * 100} className="h-2" />
                        </div>
                      </TableCell>
                      <TableCell>{investment.startDate}</TableCell>
                      <TableCell>
                        <Button size="sm" onClick={() => handleStatusChange(investment.id, "active")}>
                          <Play className="mr-2 h-4 w-4" />
                          Resume
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
