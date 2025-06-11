import { ArrowRight, UserPlus, CreditCard, TrendingUp, Banknote } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HowItWorksPage() {
  const steps = [
    {
      icon: UserPlus,
      title: "Create Account",
      description: "Sign up with your email and complete the verification process",
      details: "Provide basic information and verify your identity to ensure platform security.",
    },
    {
      icon: CreditCard,
      title: "Choose Investment Plan",
      description: "Select from our four investment plans based on your goals",
      details: "Basic ($200-$999), Amateur ($1,000-$1,999), Retirement, or VIP plans available.",
    },
    {
      icon: TrendingUp,
      title: "Start Earning",
      description: "Earn daily ROI of 2-5% for 7 consecutive days",
      details: "Your returns are calculated daily and added to your account automatically.",
    },
    {
      icon: Banknote,
      title: "Withdraw Profits",
      description: "Access your capital after the 20-day withdrawal period",
      details: "Withdraw your initial investment plus accumulated returns when eligible.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">How WOLV-INVEST Works</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Start your cryptocurrency investment journey in four simple steps and begin earning daily returns.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center mb-12 last:mb-0">
                <div className="flex-shrink-0 mr-8">
                  <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full w-16 h-16 flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <CardTitle>{step.title}</CardTitle>
                      </div>
                      <CardDescription>{step.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-400">{step.details}</p>
                    </CardContent>
                  </Card>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex-shrink-0 ml-8">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Plans Overview */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Investment Plans Overview</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Basic Plan</CardTitle>
                <CardDescription>$200 - $999</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600 mb-2">2-3%</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Daily ROI for 7 days</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Perfect for beginners</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Amateur Plan</CardTitle>
                <CardDescription>$1,000 - $1,999</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600 mb-2">3-4%</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Daily ROI for 7 days</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">For intermediate investors</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Retirement Plan</CardTitle>
                <CardDescription>Custom Amount</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600 mb-2">4-5%</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Daily ROI for 7 days</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Long-term focused</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">VIP Plan</CardTitle>
                <CardDescription>Custom Amount</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600 mb-2">Custom</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Tailored returns</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Exclusive benefits</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>How long does it take to see returns?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  You'll start earning daily returns immediately after your investment is confirmed. Returns are
                  calculated and credited to your account every 24 hours for 7 consecutive days.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>When can I withdraw my capital?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Your initial capital becomes available for withdrawal after a 20-day period. Daily ROI payments can be
                  withdrawn immediately as they're credited to your account.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Is there a minimum investment amount?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Yes, the minimum investment is $200 for our Basic Plan. This ensures that all investors can
                  participate while maintaining the platform's operational efficiency.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How secure are my investments?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  We use military-grade encryption, cold storage for funds, and regular security audits. However, all
                  investments carry inherent risks, and we recommend reading our risk disclosure.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
