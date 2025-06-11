import { CheckCircle } from "lucide-react"
import {
  BlockchainNode,
  BlockchainCube,
  BlockchainHexagon,
  BlockchainNetwork,
  BlockchainWaves,
} from "@/components/blockchain-illustrations"

export default function AboutPage() {
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
                About Wolv.pro
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                A crypto investment platform that offers competitive returns on investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900 relative">
        {/* Added blockchain illustrations */}
        <BlockchainWaves className="absolute left-0 top-1/4 text-blue-600 dark:text-blue-400 opacity-10" />

        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">What is Wolv.pro?</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Wolv.pro is a crypto investment platform that offers competitive returns on investment. With a daily ROI
                of 2-5% for 7 days, users can enjoy capital returns after a 20-day withdrawal period.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Our platform is designed to make crypto investments accessible to everyone, from beginners to
                experienced investors. We provide a secure and user-friendly environment for you to grow your
                investments.
              </p>
            </div>
            <div className="rounded-lg bg-gray-100 dark:bg-gray-800 p-6 relative">
              {/* Added blockchain illustration */}
              <BlockchainNetwork className="absolute right-0 bottom-0 text-blue-600 dark:text-blue-400 opacity-10" />

              <h3 className="text-xl font-bold mb-4">Investment Highlights</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-emerald-600" />
                  <span>Daily ROI of 2-5% for 7 days</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-emerald-600" />
                  <span>Capital returns after 20-day withdrawal period</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-emerald-600" />
                  <span>Multiple investment plans to choose from</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-emerald-600" />
                  <span>Expert support and guidance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Stand Out */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800 relative">
        {/* Added blockchain illustrations */}
        <BlockchainHexagon className="absolute left-[5%] bottom-10 text-blue-600 dark:text-blue-400 opacity-20 hidden md:block" />
        <BlockchainCube className="absolute right-[5%] top-10 text-blue-600 dark:text-blue-400 opacity-20 hidden md:block" />

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold">Why Wolv.pro Stands Out</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
              Wolv.pro is not just another investment platform; it is a gateway to innovative financial opportunities.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-white p-6 shadow-sm dark:bg-gray-900">
              <h3 className="text-xl font-bold mb-2">Diverse Investment Options</h3>
              <p className="text-gray-500 dark:text-gray-400">
                From crypto to cannabis and gold trading, we offer a wide range of investment opportunities to suit
                different financial goals.
              </p>
            </div>

            <div className="rounded-lg border bg-white p-6 shadow-sm dark:bg-gray-900">
              <h3 className="text-xl font-bold mb-2">Competitive Returns</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Enjoy daily ROI of 2-5%, ensuring your investments grow steadily.
              </p>
            </div>

            <div className="rounded-lg border bg-white p-6 shadow-sm dark:bg-gray-900">
              <h3 className="text-xl font-bold mb-2">User-Centric Design</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our platform is designed with simplicity and efficiency in mind, making it accessible to both beginners
                and seasoned investors.
              </p>
            </div>

            <div className="rounded-lg border bg-white p-6 shadow-sm dark:bg-gray-900">
              <h3 className="text-xl font-bold mb-2">Expert Support</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Benefit from personalized advice and dedicated account managers to guide your investment journey.
              </p>
            </div>

            <div className="rounded-lg border bg-white p-6 shadow-sm dark:bg-gray-900">
              <h3 className="text-xl font-bold mb-2">Community Engagement</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Join a vibrant community of like-minded investors and participate in exclusive networking events.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
