"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"

const plans = [
  {
    id: "basic",
    name: "Basic Plan",
    description: "Entry-level plan for new investors.",
    returns: "2% – 3%",
    amount: "$200 – $999",
    type: "Fixed",
  },
  {
    id: "amateur",
    name: "Amateur Plan",
    description: "Ideal for intermediate investors.",
    returns: "3% – 4%",
    amount: "$1,000 – $1,999",
    type: "Fixed",
  },
  {
    id: "retirement",
    name: "Retirement Plan",
    description: "7-day fixed plan with custom amount.",
    returns: "4% – 5%",
    amount: "Custom Amount",
    type: "Flexible",
  },
  {
    id: "vip",
    name: "VIP Plan",
    description: "Tailored plan with personalized ROI and terms.",
    returns: "Custom ROI",
    amount: "Custom Amount",
    type: "Flexible",
  },
]

export default function InvestmentPlansPage() {
  const router = useRouter()

  const grouped = {
    Fixed: plans.filter((plan) => plan.type === "Fixed"),
    Flexible: plans.filter((plan) => plan.type === "Flexible"),
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-5">Investment Plans</h1>

      {Object.entries(grouped).map(([groupName, planList]) => (
        <div key={groupName} className="mb-10">
          <h2 className="text-xl font-semibold mb-4">{groupName} Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {planList.map((plan) => (
              <Card key={plan.id}>
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700">
                    <strong>Returns:</strong> {plan.returns}<br />
                    <strong>Investment:</strong> {plan.amount}
                  </p>
                  <Button className="w-full mt-4" onClick={() => router.push(`/invest?plan=${plan.id}`)}>
                    Select Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
