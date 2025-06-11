import { Briefcase, Users, TrendingUp, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior Blockchain Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Investment Analyst",
      department: "Finance",
      location: "New York",
      type: "Full-time",
    },
    {
      title: "Customer Success Manager",
      department: "Support",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Marketing Specialist",
      department: "Marketing",
      location: "London",
      type: "Full-time",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Join Our Team</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Help us revolutionize the future of cryptocurrency investments and build the next generation of financial
            technology.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Work With WOLV-INVEST?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Advance your career in the rapidly growing fintech industry
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Remote-First</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Work from anywhere with our flexible remote work policy
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Great Team</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Collaborate with talented professionals from around the world
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 dark:bg-orange-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Briefcase className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Competitive Benefits</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Comprehensive benefits package and equity opportunities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{position.title}</CardTitle>
                      <CardDescription>
                        {position.department} • {position.location} • {position.type}
                      </CardDescription>
                    </div>
                    <Button>Apply Now</Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Don't see a position that fits? We're always looking for talented individuals.
            </p>
            <Button variant="outline">Send Us Your Resume</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
