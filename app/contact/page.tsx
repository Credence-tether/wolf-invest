"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Headphones, Shield, CheckCircle, Loader2 } from "lucide-react"
import {
  BlockchainNode,
  BlockchainCube,
  BlockchainHexagon,
  BlockchainNetwork,
  BlockchainWaves,
  BlockchainCircuit,
} from "@/components/blockchain-illustrations"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      category: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.category || !formData.message) {
      setError("Please fill in all fields")
      setIsSubmitting(false)
      return
    }

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // In a real app, you would send this to your backend
      console.log("Contact form submitted:", formData)

      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        category: "",
        message: "",
      })
    } catch (error) {
      setError("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 relative">
        {/* Added blockchain illustrations */}
        <BlockchainNetwork className="absolute left-[5%] top-1/4 text-green-600 dark:text-green-400 opacity-20 hidden lg:block" />
        <BlockchainHexagon className="absolute right-[5%] bottom-1/4 text-green-600 dark:text-green-400 opacity-20 hidden lg:block" />

        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto" />
                <h2 className="text-2xl font-bold text-green-800 dark:text-green-200">Message Sent Successfully!</h2>
                <p className="text-green-700 dark:text-green-300">
                  Thank you for contacting WOLV-INVEST. We've received your message and will get back to you within 24
                  hours.
                </p>
                <Button onClick={() => setIsSubmitted(false)} className="bg-green-600 hover:bg-green-700">
                  Send Another Message
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-20 relative overflow-hidden">
        {/* Added blockchain illustrations */}
        <BlockchainNode className="absolute top-10 left-[10%] text-white opacity-20 hidden md:block" />
        <BlockchainCube className="absolute bottom-10 right-[5%] text-white opacity-20 hidden md:block" />
        <BlockchainHexagon className="absolute top-1/4 right-[15%] text-white opacity-10 hidden lg:block" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Get in touch with our team. We're here to help you with your investment journey.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Have questions about our investment plans or need support? Our team is ready to assist you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email Support</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                    Get help with your account or investments
                  </p>
                  <a href="mailto:support@wolv-invest.com" className="text-blue-600 hover:text-blue-700">
                    support@wolv-invest.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone Support</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Speak directly with our support team</p>
                  <a href="tel:+1-800-WOLV-INV" className="text-green-600 hover:text-green-700">
                    +1 (800) WOLV-INV
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg">
                  <MessageSquare className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Live Chat</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Available 24/7 for instant support</p>
                  <Button variant="outline" size="sm" className="text-purple-600 border-purple-600 hover:bg-purple-50">
                    Start Chat
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 dark:bg-orange-900 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Office Address</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    123 Financial District
                    <br />
                    New York, NY 10004
                    <br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Monday - Friday</span>
                  <span className="text-sm font-medium">9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Saturday</span>
                  <span className="text-sm font-medium">10:00 AM - 4:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Sunday</span>
                  <span className="text-sm font-medium">Closed</span>
                </div>
                <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <p className="text-xs text-blue-700 dark:text-blue-300">
                    <Headphones className="h-4 w-4 inline mr-1" />
                    Emergency support available 24/7 for critical issues
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 relative">
            {/* Added blockchain illustration */}
            <BlockchainWaves className="absolute right-0 bottom-0 text-blue-600 dark:text-blue-400 opacity-10" />

            <Card className="relative z-10">
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category *</Label>
                    <Select value={formData.category} onValueChange={handleSelectChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="investment">Investment Questions</SelectItem>
                        <SelectItem value="account">Account Support</SelectItem>
                        <SelectItem value="technical">Technical Issues</SelectItem>
                        <SelectItem value="withdrawal">Withdrawal Support</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                        <SelectItem value="complaint">Complaint</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Brief description of your inquiry"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Please provide details about your inquiry..."
                      className="min-h-[120px]"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {error && (
                    <Alert className="border-red-500 bg-red-50 dark:bg-red-950">
                      <AlertDescription className="text-red-700 dark:text-red-300">{error}</AlertDescription>
                    </Alert>
                  )}

                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-sm mb-1">Privacy Notice</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Your information is secure and will only be used to respond to your inquiry. We never share
                          personal data with third parties.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 relative">
          {/* Added blockchain illustrations */}
          <BlockchainCircuit className="absolute left-0 top-1/2 -translate-y-1/2 text-blue-600 dark:text-blue-400 opacity-10 hidden lg:block" />
          <BlockchainNode className="absolute right-0 bottom-0 text-blue-600 dark:text-blue-400 opacity-10 hidden lg:block" />

          <h2 className="text-3xl font-bold text-center mb-12 relative z-10">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto relative z-10">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How quickly will I receive a response?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  We typically respond to all inquiries within 24 hours during business days. For urgent matters, please
                  call our support line.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What information should I include?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Please include your account email, a clear description of your issue, and any relevant screenshots or
                  error messages.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I schedule a call?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Yes! For complex investment discussions, we offer scheduled consultations. Mention this in your
                  message and we'll coordinate a time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Is my information secure?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Absolutely. All communications are encrypted and we follow strict privacy policies to protect your
                  personal and financial information.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
