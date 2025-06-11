import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import {
  BlockchainNode,
  BlockchainCube,
  BlockchainHexagon,
  BlockchainNetwork,
  BlockchainWaves,
  BlockchainCircuit,
} from "@/components/blockchain-illustrations"

export default function InvestmentPlansPage() {
  const plans = [
    {
      name: "Basic Plan",
      range: "$200 - $999",
      roi: "2-3%",
      duration: "20 days",
      features: [
        "Perfect for beginners",
        "Steady returns with minimal risk",
        "Access to basic educational resources",
        "Daily ROI: 2-3%",
        "Withdrawal Duration: 20 days",
      ],
    },
    {
      name: "Amateur Plan",
      range: "$1,000 - $1,999",
      roi: "3-4%",
      duration: "20 days",
      features: [
        "For intermediate investors",
        "Higher returns than Basic Plan",
        "Additional benefits and support",
        "Access to exclusive webinars",
        "Daily ROI: 3-4%",
        "Withdrawal Duration: 20 days",
      ],
    },
    {
      name: "Retirement Plan",
      range: "Custom",
      roi: "4-5%",
      duration: "20 days",
      features: [
        "Tailored for long-term investors",
        "Focused on financial stability",
        "Consistent returns over time",
        "Personalized financial planning",
        "Eligible for loan services",
        "Daily ROI: 4-5%",
        "Withdrawal Duration: 20 days",
      ],
    },
    {
      name: "VIP Plan",
      range: "Custom",
      roi: "Custom",
      duration: "Custom",
      features: [
        "Exclusive benefits for high-value investors",
        "Personalized investment strategy",
        "Priority customer support",
        "Dedicated account manager",
        "Custom ROI and terms",
      ],
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Added blockchain illustrations */}
        <BlockchainNode className="absolute top-10 left-[10%] text-gray-300 opacity-30 hidden md:block" />
        <BlockchainCube className="absolute bottom-10 right-[5%] text-gray-300 opacity-30 hidden md:block" />
        <BlockchainHexagon className="absolute top-1/4 right-[15%] text-gray-300 opacity-20 hidden lg:block" />

        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Investment Plans
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                Choose the investment plan that best suits your financial goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900 relative">
        {/* Added blockchain illustrations */}
        <BlockchainWaves className="absolute left-0 top-1/4 text-blue-600 dark:text-blue-400 opacity-10" />
        <BlockchainCircuit className="absolute right-0 bottom-1/4 text-blue-600 dark:text-blue-400 opacity-10" />

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold">Our Investment Plans</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
              Wolv.pro operates on four distinct investment plans to cater to different investor needs.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan, index) => (
              <Card key={index} className="flex flex-col h-full relative">
                {/* Small blockchain icon in the corner of each card */}
                <div className="absolute top-2 right-2 text-emerald-600 opacity-20">
                  {index % 4 === 0 && <BlockchainNode className="w-8 h-8" />}
                  {index % 4 === 1 && <BlockchainCube className="w-8 h-8" />}
                  {index % 4 === 2 && <BlockchainHexagon className="w-8 h-8" />}
                  {index % 4 === 3 && <BlockchainCircuit className="w-8 h-8" />}
                </div>

                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>Investment Range: {plan.range}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-4">
                    <p className="text-2xl font-bold text-emerald-600">{plan.roi}</p>
                    <p className="text-sm text-gray-500">Daily ROI</p>
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-500 dark:text-gray-400 text-left">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Start Investing</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800 relative">
        {/* Added blockchain illustrations */}
        <BlockchainNetwork className="absolute left-[5%] top-1/2 -translate-y-1/2 text-blue-600 dark:text-blue-400 opacity-20 hidden lg:block" />
        <BlockchainHexagon className="absolute right-[5%] bottom-10 text-blue-600 dark:text-blue-400 opacity-20 hidden md:block" />

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
              Get answers to common questions about our investment plans.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">How do I start investing?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                To start investing with Wolv.pro, simply create an account, verify your identity, and choose an
                investment plan that suits your financial goals.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">When can I withdraw my capital?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                You can withdraw your capital after the 20-day withdrawal period. Your daily ROI will be paid out for 7
                days.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">What is the minimum investment?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                The minimum investment starts at $200 with our Basic Plan.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">How is the ROI calculated?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                The ROI is calculated daily based on your investment amount and the plan you choose. It ranges from 2%
                to 5% per day for 7 days.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
