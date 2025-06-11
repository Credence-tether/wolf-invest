import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, Shield, TrendingUp, Globe, Zap } from "lucide-react"
import {
  BlockchainNode,
  BlockchainCube,
  BlockchainConnection,
  BlockchainHexagon,
  BlockchainNetwork,
  BlockchainWaves,
  BlockchainCircuit,
} from "@/components/blockchain-illustrations"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Web3 Design */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
        {/* Web3 Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 border border-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-blue-300 rounded-lg rotate-45 animate-bounce"></div>
          <div className="absolute bottom-32 left-40 w-20 h-20 bg-blue-400 rounded-full opacity-30 animate-ping"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 border-2 border-blue-500 rounded-full animate-spin"></div>
          {/* Blockchain network visualization */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Added blockchain illustrations */}
        <BlockchainNode className="absolute top-10 left-[10%] text-blue-300 opacity-40 hidden md:block" />
        <BlockchainCube className="absolute bottom-10 right-[5%] text-blue-300 opacity-40 hidden md:block" />
        <BlockchainHexagon className="absolute top-1/4 right-[15%] text-blue-300 opacity-30 hidden lg:block" />

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Invest in Your Future with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  WOLV-INVEST
                </span>
              </h1>
              <p className="mx-auto max-w-[700px] text-blue-200 md:text-xl">
                Earn 2-5% daily ROI with our innovative crypto investment platform. Start your journey to financial
                freedom today with blockchain-powered investments.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/register">
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="text-white border-white hover:bg-blue-800/50">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Web3 Icons */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900 relative">
        {/* Subtle Web3 background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 border border-blue-400 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 border border-blue-300 rounded-lg rotate-12"></div>
        </div>

        {/* Added blockchain illustrations */}
        <BlockchainConnection className="absolute left-0 top-1/4 text-blue-600 dark:text-blue-400 opacity-20" />
        <BlockchainWaves className="absolute right-0 bottom-1/4 text-blue-600 dark:text-blue-400 opacity-20" />

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Why Choose{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  WOLV-INVEST
                </span>
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We offer a unique Web3 investment experience with competitive returns and cutting-edge technology.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950">
              <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Competitive Returns</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Enjoy daily ROI of 2-5% with our advanced blockchain-powered investment algorithms.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
              <div className="p-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Secure & Transparent</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Your investments are protected by military-grade encryption and blockchain transparency.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
              <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Global Community</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Join a vibrant global community of Web3 investors and blockchain enthusiasts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800 relative">
        {/* Added blockchain illustrations */}
        <BlockchainCircuit className="absolute left-[5%] top-1/2 -translate-y-1/2 text-blue-600 dark:text-blue-400 opacity-20 hidden lg:block" />
        <BlockchainNetwork className="absolute right-[5%] top-1/2 -translate-y-1/2 text-blue-600 dark:text-blue-400 opacity-20 hidden lg:block" />

        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2">
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="text-3xl font-bold text-blue-600">$2.8M+</div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Invested</p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="text-3xl font-bold text-green-600">1,247</div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Active Investors</p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="text-3xl font-bold text-purple-600">892</div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Active Investments</p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="text-3xl font-bold text-orange-600">4.2%</div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Average Daily ROI</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-cyan-600 relative overflow-hidden">
        {/* Web3 CTA Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-24 h-24 border border-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 border border-white rounded-lg rotate-45 animate-bounce"></div>
          <Zap className="absolute top-1/2 left-1/4 h-16 w-16 text-white opacity-10 animate-ping" />
          <TrendingUp className="absolute top-1/3 right-1/4 h-12 w-12 text-white opacity-10 animate-pulse" />
        </div>

        {/* Added blockchain illustrations */}
        <BlockchainHexagon className="absolute left-[10%] bottom-10 text-white opacity-20 hidden md:block" />
        <BlockchainNode className="absolute right-[10%] top-10 text-white opacity-20 hidden md:block" />

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Start Your Web3 Investment Journey?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl/relaxed">
                Join thousands of smart investors who trust WOLV-INVEST for their financial growth in the digital
                economy.
              </p>
            </div>
            <Link href="/register">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
                Start Investing Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
