"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/components/auth-provider"
import { useRouter, useSearchParams } from "next/navigation"
import { LoadingSpinner } from "@/components/loading-spinner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { DollarSign, Clock, Shield, CheckCircle, ArrowLeft, Calculator } from "lucide-react"
import { INVESTMENT_PLANS } from "@/lib/investment-data"
import type { InvestmentPlan } from "@/lib/investment-data"

export default function InvestPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const searchParams = useSearchParams()
  const planType = searchParams.get("plan") as "basic" | "amateur" | "retirement" | "vip"

  const [selectedPlan, setSelectedPlan] = useState<InvestmentPlan | null>(null)
  const [amount, setAmount] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login")
      return
    }

    if (planType) {
      const plan = INVESTMENT_PLANS.find((p) => p.type === planType)
      if (plan) {
        setSelectedPlan(plan)
        setAmount(plan.minAmount.toString())
      }
    }
  }, [user, isLoading, router, planType])

  if (isLoading) {
    return <LoadingSpinner message="Loading investment page..." />
  }

  if (!user) {
    return null
  }

  if (!selectedPlan) {
    return (
      <div className="container mx-auto p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Investment Plan Not Found</h1>
          <Button onClick={() => router.push("/investment-plans")}>View Investment Plans</Button>
        </div>
      </div>
    )
  }

  const investmentAmount = Number.parseFloat(amount) || 0
  const dailyEarnings = (investmentAmount * selectedPlan.dailyROI) / 100
  const totalEarnings = dailyEarnings * selectedPlan.duration
  const totalReturn = investmentAmount + totalEarnings

  const handleInvest = async () => {
    setError("")

    if (!amount || investmentAmount < selectedPlan.minAmount || investmentAmount > selectedPlan.maxAmount) {
      setError(`Investment amount must be between $${selectedPlan.minAmount} and $${selectedPlan.maxAmount}`)
      return
    }

    setIsProcessing(true)

    try {
      // Simulate investment processing
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // In a real app, this would create the investment record
      // For now, we'll just redirect to success page
      router.push(`/invest/success?plan=${selectedPlan.type}&amount=${investmentAmount}`)
    } catch (error) {
      setError("Failed to process investment. Please try again.")
      setIsProcessing(false)
    }
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Button variant="outline" size="sm" onClick={() => router.push("/investment-plans")}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Plans
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Complete Your Investment</h1>
          <p className="text-muted-foreground">Review your investment details and confirm your purchase</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Investment Form */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Investment Amount
              </CardTitle>
              <CardDescription>Enter the amount you want to invest in the {selectedPlan.name}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="amount">Investment Amount ($)</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  min={selectedPlan.minAmount}
                  max={selectedPlan.maxAmount}
                />
                <p className="text-sm text-muted-foreground">
                  Minimum: ${selectedPlan.minAmount.toLocaleString()} • Maximum: $
                  {selectedPlan.maxAmount.toLocaleString()}
                </p>
              </div>

              {error && (
                <Alert className="border-red-500 bg-red-500/10">
                  <AlertDescription className="text-red-600">{error}</AlertDescription>
                </Alert>
              )}

              <Button
                onClick={handleInvest}
                className="w-full"
                size="lg"
                disabled={isProcessing || !amount || investmentAmount < selectedPlan.minAmount}
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Processing Investment...
                  </>
                ) : (
                  <>
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Confirm Investment
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Plan Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {selectedPlan.name}
                {selectedPlan.popular && <Badge className="bg-green-500">Most Popular</Badge>}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Daily ROI</span>
                  <span className="font-medium">{selectedPlan.dailyROI}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Investment Period</span>
                  <span className="font-medium">{selectedPlan.duration} days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Withdrawal Period</span>
                  <span className="font-medium">{selectedPlan.withdrawalPeriod} days</span>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <h4 className="font-medium">Plan Features:</h4>
                <ul className="space-y-1">
                  {selectedPlan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Investment Summary */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Investment Calculator
              </CardTitle>
              <CardDescription>See your potential returns with this investment</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Investment Amount</span>
                  <span className="font-medium">${investmentAmount.toLocaleString()}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-muted-foreground">Daily Earnings</span>
                  <span className="font-medium text-green-600">+${dailyEarnings.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Earnings ({selectedPlan.duration} days)</span>
                  <span className="font-medium text-green-600">+${totalEarnings.toFixed(2)}</span>
                </div>

                <Separator />

                <div className="flex justify-between text-lg">
                  <span className="font-medium">Total Return</span>
                  <span className="font-bold text-green-600">${totalReturn.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>ROI</span>
                  <span>+{((totalEarnings / investmentAmount) * 100).toFixed(2)}%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Notice */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security & Trust
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>SSL Encrypted Transactions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Regulated Investment Platform</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>24/7 Customer Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Transparent Fee Structure</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Timeline */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Investment Timeline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                  <span>
                    <strong>Day 0:</strong> Investment activated
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                  <span>
                    <strong>Days 1-{selectedPlan.duration}:</strong> Daily ROI credited
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                  <span>
                    <strong>Day {selectedPlan.withdrawalPeriod}:</strong> Withdrawal available
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
