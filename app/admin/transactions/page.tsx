"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import {
  CreditCard,
  Search,
  Filter,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownLeft,
  Clock,
  CheckCircle,
  XCircle,
  Eye,
  Download,
} from "lucide-react"

export default function AdminTransactionsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTransaction, setSelectedTransaction] = useState<any>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // Mock transactions data
  const [transactions, setTransactions] = useState([
    {
      id: "TXN001",
      user: "John Doe",
      email: "john@example.com",
      type: "deposit",
      amount: 500,
      status: "completed",
      method: "Bank Transfer",
      date: "2024-01-20",
      time: "14:30",
      reference: "DEP001",
      description: "Initial investment deposit",
    },
    {
      id: "TXN002",
      user: "Jane Smith",
      email: "jane@example.com",
      type: "roi_payment",
      amount: 52.5,
      status: "completed",
      method: "Auto",
      date: "2024-01-20",
      time: "09:00",
      reference: "ROI002",
      description: "Daily ROI payment - Day 4",
    },
    {
      id: "TXN003",
      user: "Mike Johnson",
      email: "mike@example.com",
      type: "withdrawal",
      amount: 750,
      status: "pending",
      method: "Bank Transfer",
      date: "2024-01-20",
      time: "11:15",
      reference: "WTH003",
      description: "Withdrawal request",
    },
    {
      id: "TXN004",
      user: "Sarah Wilson",
      email: "sarah@example.com",
      type: "deposit",
      amount: 10000,
      status: "completed",
      method: "Crypto",
      date: "2024-01-19",
      time: "16:45",
      reference: "DEP004",
      description: "VIP plan investment",
    },
    {
      id: "TXN005",
      user: "David Brown",
      email: "david@example.com",
      type: "withdrawal",
      amount: 125,
      status: "rejected",
      method: "Bank Transfer",
      date: "2024-01-19",
      time: "13:20",
      reference: "WTH005",
      description: "Withdrawal request - insufficient balance",
    },
    {
      id: "TXN006",
      user: "Alice Cooper",
      email: "alice@example.com",
      type: "roi_payment",
      amount: 175,
      status: "completed",
      method: "Auto",
      date: "2024-01-19",
      time: "09:00",
      reference: "ROI006",
      description: "Daily ROI payment - Day 3",
    },
  ])

  const filteredTransactions = transactions.filter(
    (transaction) =>
      transaction.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const pendingTransactions = transactions.filter((txn) => txn.status === "pending")
  const completedTransactions = transactions.filter((txn) => txn.status === "completed")
  const rejectedTransactions = transactions.filter((txn) => txn.status === "rejected")

  const totalVolume = transactions.filter((txn) => txn.status === "completed").reduce((sum, txn) => sum + txn.amount, 0)

  const handleStatusChange = (transactionId: string, newStatus: string) => {
    setTransactions(transactions.map((txn) => (txn.id === transactionId ? { ...txn, status: newStatus } : txn)))
  }

  const handleViewTransaction = (transaction: any) => {
    setSelectedTransaction(transaction)
    setIsDialogOpen(true)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800">Completed</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
      case "rejected":
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>
      case "processing":
        return <Badge className="bg-blue-100 text-blue-800">Processing</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "deposit":
        return <ArrowDownLeft className="h-4 w-4 text-green-600" />
      case "withdrawal":
        return <ArrowUpRight className="h-4 w-4 text-red-600" />
      case "roi_payment":
        return <CreditCard className="h-4 w-4 text-blue-600" />
      default:
        return <CreditCard className="h-4 w-4 text-gray-600" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "deposit":
        return "text-green-600"
      case "withdrawal":
        return "text-red-600"
      case "roi_payment":
        return "text-blue-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Transaction Management</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Monitor and manage all platform transactions</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Transactions</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{transactions.length}</div>
            <p className="text-xs text-muted-foreground">All time transactions</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{pendingTransactions.length}</div>
            <p className="text-xs text-muted-foreground">Awaiting approval</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Volume</CardTitle>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalVolume.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Completed transactions</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {Math.round((completedTransactions.length / transactions.length) * 100)}%
            </div>
            <p className="text-xs text-muted-foreground">Transaction success</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Transactions</CardTitle>
          <CardDescription>Monitor all financial transactions on the platform</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search by user, email, or transaction ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>

          <Tabs defaultValue="all" className="space-y-4">
            <TabsList>
              <TabsTrigger value="all">All ({transactions.length})</TabsTrigger>
              <TabsTrigger value="pending">Pending ({pendingTransactions.length})</TabsTrigger>
              <TabsTrigger value="completed">Completed ({completedTransactions.length})</TabsTrigger>
              <TabsTrigger value="rejected">Rejected ({rejectedTransactions.length})</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Transaction</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTransactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{transaction.id}</div>
                          <div className="text-sm text-gray-500">{transaction.reference}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{transaction.user}</div>
                          <div className="text-sm text-gray-500">{transaction.email}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getTypeIcon(transaction.type)}
                          <span className={`capitalize ${getTypeColor(transaction.type)}`}>
                            {transaction.type.replace("_", " ")}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className={`font-medium ${getTypeColor(transaction.type)}`}>
                          {transaction.type === "withdrawal" ? "-" : "+"}${transaction.amount.toLocaleString()}
                        </span>
                      </TableCell>
                      <TableCell>{transaction.method}</TableCell>
                      <TableCell>{getStatusBadge(transaction.status)}</TableCell>
                      <TableCell>
                        <div>
                          <div className="text-sm">{transaction.date}</div>
                          <div className="text-xs text-gray-500">{transaction.time}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => handleViewTransaction(transaction)}>
                              <Eye className="mr-2 h-4 w-4" />
                              View Details
                            </DropdownMenuItem>
                            {transaction.status === "pending" && (
                              <>
                                <DropdownMenuItem onClick={() => handleStatusChange(transaction.id, "completed")}>
                                  <CheckCircle className="mr-2 h-4 w-4" />
                                  Approve
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleStatusChange(transaction.id, "rejected")}>
                                  <XCircle className="mr-2 h-4 w-4" />
                                  Reject
                                </DropdownMenuItem>
                              </>
                            )}
                            <DropdownMenuItem>
                              <Download className="mr-2 h-4 w-4" />
                              Download Receipt
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="pending">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Transaction</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pendingTransactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{transaction.id}</div>
                          <div className="text-sm text-gray-500">{transaction.reference}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{transaction.user}</div>
                          <div className="text-sm text-gray-500">{transaction.email}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getTypeIcon(transaction.type)}
                          <span className={`capitalize ${getTypeColor(transaction.type)}`}>
                            {transaction.type.replace("_", " ")}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className={`font-medium ${getTypeColor(transaction.type)}`}>
                          {transaction.type === "withdrawal" ? "-" : "+"}${transaction.amount.toLocaleString()}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="text-sm">{transaction.date}</div>
                          <div className="text-xs text-gray-500">{transaction.time}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" onClick={() => handleStatusChange(transaction.id, "completed")}>
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Approve
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleStatusChange(transaction.id, "rejected")}
                          >
                            <XCircle className="mr-2 h-4 w-4" />
                            Reject
                          </Button>
                        </div>
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
                    <TableHead>Transaction</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {completedTransactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{transaction.id}</div>
                          <div className="text-sm text-gray-500">{transaction.reference}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{transaction.user}</div>
                          <div className="text-sm text-gray-500">{transaction.email}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getTypeIcon(transaction.type)}
                          <span className={`capitalize ${getTypeColor(transaction.type)}`}>
                            {transaction.type.replace("_", " ")}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className={`font-medium ${getTypeColor(transaction.type)}`}>
                          {transaction.type === "withdrawal" ? "-" : "+"}${transaction.amount.toLocaleString()}
                        </span>
                      </TableCell>
                      <TableCell>{transaction.method}</TableCell>
                      <TableCell>
                        <div>
                          <div className="text-sm">{transaction.date}</div>
                          <div className="text-xs text-gray-500">{transaction.time}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" onClick={() => handleViewTransaction(transaction)}>
                          <Eye className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="rejected">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Transaction</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Reason</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rejectedTransactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{transaction.id}</div>
                          <div className="text-sm text-gray-500">{transaction.reference}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{transaction.user}</div>
                          <div className="text-sm text-gray-500">{transaction.email}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getTypeIcon(transaction.type)}
                          <span className={`capitalize ${getTypeColor(transaction.type)}`}>
                            {transaction.type.replace("_", " ")}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className={`font-medium ${getTypeColor(transaction.type)}`}>
                          {transaction.type === "withdrawal" ? "-" : "+"}${transaction.amount.toLocaleString()}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="text-sm">{transaction.date}</div>
                          <div className="text-xs text-gray-500">{transaction.time}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm text-red-600">Insufficient balance</span>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" onClick={() => handleViewTransaction(transaction)}>
                          <Eye className="h-4 w-4" />
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

      {/* Transaction Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Transaction Details</DialogTitle>
            <DialogDescription>Complete information about transaction {selectedTransaction?.id}</DialogDescription>
          </DialogHeader>
          {selectedTransaction && (
            <div className="grid gap-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium">Transaction ID</Label>
                  <p className="text-sm text-gray-600">{selectedTransaction.id}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Reference</Label>
                  <p className="text-sm text-gray-600">{selectedTransaction.reference}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">User</Label>
                  <p className="text-sm text-gray-600">{selectedTransaction.user}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Email</Label>
                  <p className="text-sm text-gray-600">{selectedTransaction.email}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Type</Label>
                  <div className="flex items-center gap-2 mt-1">
                    {getTypeIcon(selectedTransaction.type)}
                    <span className={`capitalize ${getTypeColor(selectedTransaction.type)}`}>
                      {selectedTransaction.type.replace("_", " ")}
                    </span>
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium">Amount</Label>
                  <p className={`text-sm font-medium ${getTypeColor(selectedTransaction.type)}`}>
                    {selectedTransaction.type === "withdrawal" ? "-" : "+"}$
                    {selectedTransaction.amount.toLocaleString()}
                  </p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Method</Label>
                  <p className="text-sm text-gray-600">{selectedTransaction.method}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Status</Label>
                  <div className="mt-1">{getStatusBadge(selectedTransaction.status)}</div>
                </div>
                <div>
                  <Label className="text-sm font-medium">Date</Label>
                  <p className="text-sm text-gray-600">
                    {selectedTransaction.date} at {selectedTransaction.time}
                  </p>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium">Description</Label>
                <p className="text-sm text-gray-600 mt-1">{selectedTransaction.description}</p>
              </div>

              {selectedTransaction.status === "pending" && (
                <div className="flex gap-2">
                  <Button
                    className="flex-1"
                    onClick={() => {
                      handleStatusChange(selectedTransaction.id, "completed")
                      setIsDialogOpen(false)
                    }}
                  >
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Approve Transaction
                  </Button>
                  <Button
                    variant="destructive"
                    className="flex-1"
                    onClick={() => {
                      handleStatusChange(selectedTransaction.id, "rejected")
                      setIsDialogOpen(false)
                    }}
                  >
                    <XCircle className="mr-2 h-4 w-4" />
                    Reject Transaction
                  </Button>
                </div>
              )}

              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">
                  <Download className="mr-2 h-4 w-4" />
                  Download Receipt
                </Button>
                <Button variant="outline" className="flex-1">
                  Contact User
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
