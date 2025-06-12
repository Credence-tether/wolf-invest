export interface Investment {
  id: string
  userId: string
  planType: "basic" | "amateur" | "retirement" | "vip"
  amount: number
  dailyROI: number
  startDate: string
  endDate: string
  status: "active" | "completed" | "pending" | "cancelled"
  totalEarnings: number
  daysRemaining: number
  nextPayoutDate: string
  createdAt: string
}

export interface InvestmentPlan {
  id: string
  name: string
  type: "basic" | "amateur" | "retirement" | "vip"
  minAmount: number
  maxAmount: number
  dailyROI: number
  duration: number // in days
  withdrawalPeriod: number // in days
  features: string[]
  color: string
  popular?: boolean
}

export const INVESTMENT_PLANS: InvestmentPlan[] = [
  {
    id: "basic",
    name: "Basic Plan",
    type: "basic",
    minAmount: 200,
    maxAmount: 999,
    dailyROI: 2.5,
    duration: 7,
    withdrawalPeriod: 20,
    features: [
      "Perfect for beginners",
      "Steady returns with minimal risk",
      "Access to basic educational resources",
      "24/7 customer support",
    ],
    color: "bg-blue-500",
  },
  {
    id: "amateur",
    name: "Amateur Plan",
    type: "amateur",
    minAmount: 1000,
    maxAmount: 1999,
    dailyROI: 3.5,
    duration: 7,
    withdrawalPeriod: 20,
    features: [
      "Designed for intermediate investors",
      "Higher returns with moderate risk",
      "Exclusive webinars and expert advice",
      "Priority customer support",
    ],
    color: "bg-green-500",
    popular: true,
  },
  {
    id: "retirement",
    name: "Retirement Plan",
    type: "retirement",
    minAmount: 2000,
    maxAmount: 4999,
    dailyROI: 4.5,
    duration: 7,
    withdrawalPeriod: 20,
    features: [
      "Long-term investment strategy",
      "Consistent returns for financial stability",
      "Personalized financial planning",
      "Eligible for loan services",
    ],
    color: "bg-purple-500",
  },
  {
    id: "vip",
    name: "VIP Plan",
    type: "vip",
    minAmount: 5000,
    maxAmount: 50000,
    dailyROI: 5.0,
    duration: 7,
    withdrawalPeriod: 20,
    features: [
      "Exclusive benefits for high-value investors",
      "Maximum returns with premium support",
      "Dedicated account manager",
      "VIP customer service",
    ],
    color: "bg-gold-500",
  },
]

// Mock investment data for demonstration
export const generateMockInvestments = (userId: string): Investment[] => [
  {
    id: "inv-001",
    userId,
    planType: "amateur",
    amount: 1500,
    dailyROI: 3.5,
    startDate: "2024-12-01",
    endDate: "2024-12-08",
    status: "active",
    totalEarnings: 367.5,
    daysRemaining: 3,
    nextPayoutDate: "2024-12-13",
    createdAt: "2024-12-01T10:00:00Z",
  },
  {
    id: "inv-002",
    userId,
    planType: "basic",
    amount: 500,
    dailyROI: 2.5,
    startDate: "2024-11-20",
    endDate: "2024-11-27",
    status: "completed",
    totalEarnings: 87.5,
    daysRemaining: 0,
    nextPayoutDate: "2024-12-17",
    createdAt: "2024-11-20T14:30:00Z",
  },
]

export const calculateInvestmentStats = (investments: Investment[]) => {
  const totalInvested = investments.reduce((sum, inv) => sum + inv.amount, 0)
  const totalEarnings = investments.reduce((sum, inv) => sum + inv.totalEarnings, 0)
  const activeInvestments = investments.filter((inv) => inv.status === "active").length
  const completedInvestments = investments.filter((inv) => inv.status === "completed").length

  return {
    totalInvested,
    totalEarnings,
    activeInvestments,
    completedInvestments,
    totalBalance: totalInvested + totalEarnings,
    roi: totalInvested > 0 ? (totalEarnings / totalInvested) * 100 : 0,
  }
}
