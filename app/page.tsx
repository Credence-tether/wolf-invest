import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, TrendingUp, Users, DollarSign, Clock, Award, CheckCircle } from "lucide-react"
import {
  BlockchainNode,
  BlockchainCube,
  BlockchainConnection,
  BlockchainHexagon,
  BlockchainNetwork,
  BlockchainWaves,
  BlockchainCircuit,
} from "@/components/blockchain-illustrations"
import MainLayout from "@/components/main-layout"

export default function HomePage() {
  return (
    <MainLayout>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Blockchain Illustrations Background */}
          <div className="absolute inset-0 opacity-20">
            <BlockchainNode className="absolute top-10 left-[10%] text-blue-300 opacity-40 hidden md:block" />
            <BlockchainCube className="absolute bottom-10 right-[5%] text-blue-300 opacity-40 hidden md:block" />
            <BlockchainHexagon className="absolute top-1/4 right-[15%] text-blue-300 opacity-30 hidden lg:block" />
            <BlockchainConnection className="absolute left-0 top-1/3 text-blue-400 opacity-30" />
            <BlockchainWaves className="absolute right-0 bottom-1/3 text-blue-400 opacity-30" />
            <BlockchainCircuit className="absolute left-[20%] bottom-20 text-blue-300 opacity-25 hidden lg:block" />
            <BlockchainNetwork className="absolute right-[20%] top-20 text-blue-300 opacity-25 hidden lg:block" />
          </div>

          <div className="container mx-auto text-center relative z-10">
            <Badge className="mb-6 bg-blue-600/20 text-blue-200 border-blue-400/30">
              🚀 Next-Generation Crypto Investment Platform
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Invest in Your Future with WOLV-INVEST
            </h1>

            {/* Platform Image */}
            <div className="mb-8 relative">
              <div className="relative mx-auto max-w-2xl">
                <Image
                  src="/images/wolv-invest.jpg"
                  alt="WOLV-INVEST Platform"
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-2xl border border-blue-400/20"
                  priority
                />
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Next-gen crypto investing
                </div>
              </div>
            </div>

            {/* Site Description */}
            <div className="mb-8 max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl mb-4 text-blue-100">
                Experience the future of cryptocurrency investment with our cutting-edge platform
              </p>
              <p className="text-lg text-blue-200 leading-relaxed">
                WOLV-INVEST combines advanced blockchain technology with intelligent investment strategies to deliver
                consistent returns. Our platform offers daily ROI of 2-5% across multiple investment plans, backed by
                expert analysis and secure infrastructure. Join thousands of smart investors who trust WOLV-INVEST for
                their crypto investment journey.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/register">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                  Start Investing Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/investment-plans">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-400 text-blue-100 hover:bg-blue-800/50 px-8 py-4 text-lg"
                >
                  View Investment Plans
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="bg-blue-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-blue-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2">2-5% Daily ROI</h3>
                <p className="text-blue-200">Consistent returns on your investments</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
                <p className="text-blue-200">Bank-level security for your investments</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
                <p className="text-blue-200">Dedicated account managers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Plans Preview */}
        <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900 relative">
          {/* Background illustrations */}
          <BlockchainConnection className="absolute left-0 top-1/4 text-blue-600 dark:text-blue-400 opacity-10" />
          <BlockchainWaves className="absolute right-0 bottom-1/4 text-blue-600 dark:text-blue-400 opacity-10" />

          <div className="container mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Investment Plan</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Select from our carefully designed investment plans to match your financial goals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Basic Plan",
                  range: "$200 - $999",
                  roi: "2-3%",
                  duration: "20 days",
                  features: ["Perfect for beginners", "Steady returns", "Basic support"],
                },
                {
                  name: "Amateur Plan",
                  range: "$1,000 - $1,999",
                  roi: "3-4%",
                  duration: "20 days",
                  features: ["Higher returns", "Expert advice", "Priority support"],
                },
                {
                  name: "Retirement Plan",
                  range: "Custom",
                  roi: "4-5%",
                  duration: "20 days",
                  features: ["Long-term focus", "Loan services", "Personal planning"],
                },
                {
                  name: "VIP Plan",
                  range: "Premium",
                  roi: "4-5%",
                  duration: "20 days",
                  features: ["Exclusive benefits", "VIP support", "Maximum returns"],
                },
              ].map((plan, index) => (
                <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <CardDescription className="text-2xl font-bold text-blue-600">{plan.roi} Daily ROI</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Investment Range</p>
                        <p className="font-semibold">{plan.range}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Duration</p>
                        <p className="font-semibold">{plan.duration}</p>
                      </div>
                      <div className="space-y-2">
                        {plan.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/investment-plans">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  View All Plans
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-blue-600 text-white relative">
          {/* Background illustrations */}
          <BlockchainCircuit className="absolute left-[5%] top-1/2 -translate-y-1/2 text-white opacity-10 hidden lg:block" />
          <BlockchainNetwork className="absolute right-[5%] top-1/2 -translate-y-1/2 text-white opacity-10 hidden lg:block" />

          <div className="container mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <DollarSign className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                <div className="text-3xl font-bold mb-2">$50M+</div>
                <div className="text-blue-200">Total Investments</div>
              </div>
              <div>
                <Users className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                <div className="text-3xl font-bold mb-2">25K+</div>
                <div className="text-blue-200">Active Investors</div>
              </div>
              <div>
                <Clock className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                <div className="text-3xl font-bold mb-2">99.9%</div>
                <div className="text-blue-200">Uptime</div>
              </div>
              <div>
                <Award className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                <div className="text-3xl font-bold mb-2">5 Years</div>
                <div className="text-blue-200">Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white relative overflow-hidden">
          {/* Background illustrations */}
          <BlockchainHexagon className="absolute left-[10%] bottom-10 text-white opacity-20 hidden md:block" />
          <BlockchainNode className="absolute right-[10%] top-10 text-white opacity-20 hidden md:block" />

          <div className="container mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Investment Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of smart investors who trust WOLV-INVEST for consistent returns and professional service.
            </p>
            <Link href="/register">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}
