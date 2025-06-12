"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Home, BarChart3 } from "lucide-react"
import { INVESTMENT_PLANS } from "@/lib/investment-data"

export default function InvestmentSuccess() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [countdown, setCountdown] = useState(10)

  const planType = searchParams.get("plan")
  const amount = searchParams.get("amount")

  const plan = INVESTMENT_PLANS.find((p) => p.type === planType)
  const investmentAmount = Number.parseFloat(amount || "0")

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          router.push("/user/dashboard")
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [router])

  if (!plan || !amount) {
    return (
      <div className="container mx-auto p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Invalid Investment</h1>
          <Button onClick={() => router.push("/investment-plans")}>View Investment Plans</Button>
        </div>
      </div>
    )
  }

  const dailyEarnings = (investmentAmount * plan.dailyROI) / 100
  const totalEarnings = dailyEarnings * plan.duration

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-green-800 to-green-900 p-4">
      <Card className="border-green-700 bg-green-800/50 backdrop-blur-lg shadow-2xl max-w-md w-full">
        <CardContent className="pt-6">
          <div className="text-center space-y-6">
            <CheckCircle className="h-20 w-20 text-green-400 mx-auto animate-pulse" />

            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Investment Successful!</h2>
              <p className="text-green-200">
                Your investment has been activated and will start generating returns immediately.
              </p>
            </div>

            <div className="bg-green-700/30 rounded-lg p-4 space-y-3">
              <div className="flex justify-between text-green-100">
                <span>Plan:</span>
                <span className="font-medium">{plan.name}</span>
              </div>
              <div className="flex justify-between text-green-100">
                <span>Amount:</span>
                <span className="font-medium">${investmentAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-green-100">
                <span>Daily ROI:</span>
                <span className="font-medium">{plan.dailyROI}%</span>
              </div>
              <div className="flex justify-between text-green-100">
                <span>Expected Earnings:</span>
                <span className="font-medium text-green-300">+${totalEarnings.toFixed(2)}</span>
              </div>
            </div>

            <div className="space-y-3">
              <Button onClick={() => router.push("/user/dashboard")} className="w-full bg-green-600 hover:bg-green-700">
                <BarChart3 className="h-4 w-4 mr-2" />
                View Dashboard
              </Button>

              <Button
                variant="outline"
                onClick={() => router.push("/investment-plans")}
                className="w-full border-green-600 text-green-100 hover:bg-green-700"
              >
                <ArrowRight className="h-4 w-4 mr-2" />
                Make Another Investment
              </Button>

              <Button
                variant="ghost"
                onClick={() => router.push("/")}
                className="w-full text-green-200 hover:bg-green-700"
              >
                <Home className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </div>

            <p className="text-sm text-green-300">Redirecting to dashboard in {countdown} seconds...</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
