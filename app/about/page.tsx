import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, TrendingUp, Users, Award, Target, Globe, Zap } from "lucide-react"
import MainLayout from "@/components/main-layout"

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
          <div className="absolute inset-0 bg-black/20"></div>

          <div className="container mx-auto text-center relative z-10">
            <Badge className="mb-6 bg-blue-600/20 text-blue-200 border-blue-400/30">🏢 About WOLV-INVEST</Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              About WOLV-INVEST
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              WOLV-INVEST is a crypto investment platform that offers competitive returns on investment. With a daily
              ROI of 2-5% for 7 days, users can enjoy capital returns after a 20-day withdrawal period.
            </p>
          </div>
        </section>

        {/* Why WOLV-INVEST Stands Out */}
        <section className="py-20 px-4 bg-white dark:bg-gray-900">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why WOLV-INVEST Stands Out</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                WOLV-INVEST is not just another investment platform; it is a gateway to innovative financial
                opportunities. Here's what sets us apart:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Target className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle>Diverse Investment Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    From crypto to cannabis and gold trading, we offer a wide range of investment opportunities to suit
                    different financial goals.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-green-100 dark:bg-green-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <TrendingUp className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle>Competitive Returns</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Enjoy daily ROI of 2-5%, ensuring your investments grow steadily with consistent performance.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-purple-100 dark:bg-purple-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Zap className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle>User-Centric Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our platform is designed with simplicity and efficiency in mind, making it accessible to both
                    beginners and seasoned investors.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-orange-100 dark:bg-orange-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle>Expert Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Benefit from personalized advice and dedicated account managers to guide your investment journey.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-red-100 dark:bg-red-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-red-600" />
                  </div>
                  <CardTitle>Community Engagement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Join a vibrant community of like-minded investors and participate in exclusive networking events.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-teal-100 dark:bg-teal-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Globe className="h-8 w-8 text-teal-600" />
                  </div>
                  <CardTitle>Global Reach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Access international markets and diversify your portfolio with our global investment opportunities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Track Record</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Numbers that speak for our commitment to excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-10 w-10" />
                </div>
                <div className="text-3xl font-bold mb-2 text-blue-600">2-5%</div>
                <div className="text-gray-600 dark:text-gray-300">Daily ROI</div>
              </div>

              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10" />
                </div>
                <div className="text-3xl font-bold mb-2 text-green-600">25K+</div>
                <div className="text-gray-600 dark:text-gray-300">Active Investors</div>
              </div>

              <div className="text-center">
                <div className="bg-purple-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-10 w-10" />
                </div>
                <div className="text-3xl font-bold mb-2 text-purple-600">99.9%</div>
                <div className="text-gray-600 dark:text-gray-300">Success Rate</div>
              </div>

              <div className="text-center">
                <div className="bg-orange-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-10 w-10" />
                </div>
                <div className="text-3xl font-bold mb-2 text-orange-600">5+</div>
                <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join WOLV-INVEST?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start your investment journey today and experience the difference of professional crypto investment
              management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/investment-plans">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
                >
                  View Investment Plans
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}
