"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"

const plans = [
  {
    id: "conservative",
    name: "Conservative Plan",
    description: "A low-risk investment plan focused on capital preservation.",
    returns: "3-5%",
  },
  {
    id: "moderate",
    name: "Moderate Plan",
    description: "A balanced investment plan with moderate risk and return.",
    returns: "5-8%",
  },
  {
    id: "aggressive",
    name: "Aggressive Plan",
    description: "A high-risk investment plan focused on maximizing returns.",
    returns: "8-12%",
  },
]

export default function InvestmentPlansPage() {
  const router = useRouter()

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-5">Investment Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {plans.map((plan) => (
          <Card key={plan.id}>
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Expected Returns: {plan.returns}</p>
              <Button className="w-full" onClick={() => router.push(`/invest?plan=${plan.id}`)}>
                Get Started
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
