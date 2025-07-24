import { MainLayout } from "@/components/main-layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Shield, TrendingUp, Users, CheckCircle } from "lucide-react"

export default function HomePage() {
  return (
    <MainLayout>
      <div className="relative">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    🚀 Next-Generation Crypto Investment Platform
                  </h1>
                  <p className="text-xl text-blue-200 leading-relaxed">
                    Join thousands of investors earning consistent returns with our secure, 
                    regulated cryptocurrency investment platform.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/register">
                    <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-4">
                      Start Investing Today
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/how-it-works">
                    <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-4">
                      Learn How It Works
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-400" />
                    <span>SEC Regulated</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-green-400" />
                    <span>50,000+ Investors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-400" />
                    <span>Daily Returns</span>
                  </div>
                </div>
              </div>
              
              <div className="hidden lg:block">
                <Image
                  src="/images/wolv-invest.jpg"
                  alt="Investment Dashboard"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Why Choose WOLV-INVEST?</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Experience the future of cryptocurrency investment with our cutting-edge platform
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 text-center space-y-4">
                <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">High Returns</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Earn 2-5% daily returns on your cryptocurrency investments with our proven strategies.
                </p>
              </Card>

              <Card className="p-6 text-center space-y-4">
                <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold">Secure Platform</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Your investments are protected with bank-level security and insurance coverage.
                </p>
              </Card>

              <Card className="p-6 text-center space-y-4">
                <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold">Expert Support</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Get 24/7 support from our team of cryptocurrency investment experts.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Investment Plans Preview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Investment Plans</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Choose the plan that fits your investment goals
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 space-y-4 border-2 border-gray-200 hover:border-blue-500 transition-colors">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Basic Plan</h3>
                  <div className="text-3xl font-bold text-blue-600">2.5%</div>
                  <p className="text-sm text-gray-500">Daily ROI</p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>₦200 - ₦999</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>7 days duration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Perfect for beginners</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 space-y-4 border-2 border-blue-500 bg-blue-50 dark:bg-blue-950">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Amateur Plan</h3>
                  <div className="text-3xl font-bold text-blue-600">3.5%</div>
                  <p className="text-sm text-gray-500">Daily ROI</p>
                </div>
                <div className="text-center">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">Popular</span>
                </div>
              </Card>

              <Card className="p-6 space-y-4 border-2 border-gray-200 hover:border-purple-500 transition-colors">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Retirement Plan</h3>
                  <div className="text-3xl font-bold text-purple-600">4.0%</div>
                  <p className="text-sm text-gray-500">Daily ROI</p>
                </div>
              </Card>

              <Card className="p-6 space-y-4 border-2 border-gray-200 hover:border-gold-500 transition-colors">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">VIP Plan</h3>
                  <div className="text-3xl font-bold text-yellow-600">5.0%</div>
                  <p className="text-sm text-gray-500">Daily ROI</p>
                </div>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Link href="/investment-plans">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  View All Plans
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Start Your Investment Journey?
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Join thousands of satisfied investors and start earning consistent returns today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Create Free Account
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}
