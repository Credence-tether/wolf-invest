"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Settings, Save, Shield, Bell, DollarSign, Mail, CheckCircle } from "lucide-react"
import { RoleManager } from "@/components/admin/role-manager"

export default function AdminSettingsPage() {
  const [saved, setSaved] = useState(false)
  const [settings, setSettings] = useState({
    // Platform Settings
    platformName: "WOLV-INVEST",
    platformDescription: "A crypto investment platform offering competitive returns",
    maintenanceMode: false,
    registrationEnabled: true,

    // Investment Settings
    basicPlanMin: 200,
    basicPlanMax: 999,
    basicPlanROI: 2.5,
    amateurPlanMin: 1000,
    amateurPlanMax: 1999,
    amateurPlanROI: 3.5,
    retirementPlanROI: 4.5,
    vipPlanROI: 5.0,
    withdrawalPeriod: 20,
    roiDuration: 7,

    // Security Settings
    twoFactorRequired: false,
    sessionTimeout: 30,
    maxLoginAttempts: 5,
    passwordMinLength: 8,

    // Notification Settings
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    adminAlerts: true,

    // Financial Settings
    platformFee: 5,
    withdrawalFee: 2,
    minimumWithdrawal: 50,
    maximumWithdrawal: 10000,

    // Email Settings
    smtpHost: "smtp.gmail.com",
    smtpPort: 587,
    smtpUsername: "noreply@wolv-invest.com",
    smtpPassword: "",

    // Support Settings
    supportEmail: "support@wolv-invest.com",
    supportPhone: "+1-800-WOLV-INV",
    businessHours: "9:00 AM - 6:00 PM EST",
  })

  const handleSave = () => {
    // Simulate saving settings
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const handleInputChange = (key: string, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Platform Settings</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Configure platform settings and preferences</p>
        </div>
        <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>

      {saved && (
        <Alert className="border-green-500 bg-green-50 dark:bg-green-950">
          <CheckCircle className="h-4 w-4" />
          <AlertDescription className="text-green-700 dark:text-green-300">
            Settings have been saved successfully!
          </AlertDescription>
        </Alert>
      )}

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="investment">Investment Plans</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="roles">Roles & Permissions</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="financial">Financial</TabsTrigger>
          <TabsTrigger value="email">Email</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Platform Configuration
              </CardTitle>
              <CardDescription>Basic platform settings and configuration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="platformName">Platform Name</Label>
                  <Input
                    id="platformName"
                    value={settings.platformName}
                    onChange={(e) => handleInputChange("platformName", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="supportEmail">Support Email</Label>
                  <Input
                    id="supportEmail"
                    type="email"
                    value={settings.supportEmail}
                    onChange={(e) => handleInputChange("supportEmail", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="platformDescription">Platform Description</Label>
                <Textarea
                  id="platformDescription"
                  value={settings.platformDescription}
                  onChange={(e) => handleInputChange("platformDescription", e.target.value)}
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="supportPhone">Support Phone</Label>
                  <Input
                    id="supportPhone"
                    value={settings.supportPhone}
                    onChange={(e) => handleInputChange("supportPhone", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="businessHours">Business Hours</Label>
                  <Input
                    id="businessHours"
                    value={settings.businessHours}
                    onChange={(e) => handleInputChange("businessHours", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Maintenance Mode</Label>
                    <p className="text-sm text-gray-500">Enable maintenance mode to restrict access</p>
                  </div>
                  <Switch
                    checked={settings.maintenanceMode}
                    onCheckedChange={(checked) => handleInputChange("maintenanceMode", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>User Registration</Label>
                    <p className="text-sm text-gray-500">Allow new users to register</p>
                  </div>
                  <Switch
                    checked={settings.registrationEnabled}
                    onCheckedChange={(checked) => handleInputChange("registrationEnabled", checked)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="investment" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Investment Plan Settings
              </CardTitle>
              <CardDescription>Configure investment plans and ROI rates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-4">Basic Plan</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label>Minimum Amount ($)</Label>
                      <Input
                        type="number"
                        value={settings.basicPlanMin}
                        onChange={(e) => handleInputChange("basicPlanMin", Number.parseInt(e.target.value))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Maximum Amount ($)</Label>
                      <Input
                        type="number"
                        value={settings.basicPlanMax}
                        onChange={(e) => handleInputChange("basicPlanMax", Number.parseInt(e.target.value))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Daily ROI (%)</Label>
                      <Input
                        type="number"
                        step="0.1"
                        value={settings.basicPlanROI}
                        onChange={(e) => handleInputChange("basicPlanROI", Number.parseFloat(e.target.value))}
                      />
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-4">Amateur Plan</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label>Minimum Amount ($)</Label>
                      <Input
                        type="number"
                        value={settings.amateurPlanMin}
                        onChange={(e) => handleInputChange("amateurPlanMin", Number.parseInt(e.target.value))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Maximum Amount ($)</Label>
                      <Input
                        type="number"
                        value={settings.amateurPlanMax}
                        onChange={(e) => handleInputChange("amateurPlanMax", Number.parseInt(e.target.value))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Daily ROI (%)</Label>
                      <Input
                        type="number"
                        step="0.1"
                        value={settings.amateurPlanROI}
                        onChange={(e) => handleInputChange("amateurPlanROI", Number.parseFloat(e.target.value))}
                      />
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-4">Retirement Plan</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Daily ROI (%)</Label>
                      <Input
                        type="number"
                        step="0.1"
                        value={settings.retirementPlanROI}
                        onChange={(e) => handleInputChange("retirementPlanROI", Number.parseFloat(e.target.value))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Custom Amount</Label>
                      <p className="text-sm text-gray-500 mt-1">Negotiated individually</p>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-4">VIP Plan</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Daily ROI (%)</Label>
                      <Input
                        type="number"
                        step="0.1"
                        value={settings.vipPlanROI}
                        onChange={(e) => handleInputChange("vipPlanROI", Number.parseFloat(e.target.value))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Custom Terms</Label>
                      <p className="text-sm text-gray-500 mt-1">Tailored for each client</p>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-4">General Settings</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Withdrawal Period (days)</Label>
                      <Input
                        type="number"
                        value={settings.withdrawalPeriod}
                        onChange={(e) => handleInputChange("withdrawalPeriod", Number.parseInt(e.target.value))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>ROI Duration (days)</Label>
                      <Input
                        type="number"
                        value={settings.roiDuration}
                        onChange={(e) => handleInputChange("roiDuration", Number.parseInt(e.target.value))}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security Settings
              </CardTitle>
              <CardDescription>Configure security and authentication settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Session Timeout (minutes)</Label>
                  <Input
                    type="number"
                    value={settings.sessionTimeout}
                    onChange={(e) => handleInputChange("sessionTimeout", Number.parseInt(e.target.value))}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Max Login Attempts</Label>
                  <Input
                    type="number"
                    value={settings.maxLoginAttempts}
                    onChange={(e) => handleInputChange("maxLoginAttempts", Number.parseInt(e.target.value))}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Minimum Password Length</Label>
                <Input
                  type="number"
                  value={settings.passwordMinLength}
                  onChange={(e) => handleInputChange("passwordMinLength", Number.parseInt(e.target.value))}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Two-Factor Authentication Required</Label>
                  <p className="text-sm text-gray-500">Require 2FA for all users</p>
                </div>
                <Switch
                  checked={settings.twoFactorRequired}
                  onCheckedChange={(checked) => handleInputChange("twoFactorRequired", checked)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="roles" className="space-y-4">
          <RoleManager />
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notification Settings
              </CardTitle>
              <CardDescription>Configure notification preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-gray-500">Send notifications via email</p>
                  </div>
                  <Switch
                    checked={settings.emailNotifications}
                    onCheckedChange={(checked) => handleInputChange("emailNotifications", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>SMS Notifications</Label>
                    <p className="text-sm text-gray-500">Send notifications via SMS</p>
                  </div>
                  <Switch
                    checked={settings.smsNotifications}
                    onCheckedChange={(checked) => handleInputChange("smsNotifications", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Push Notifications</Label>
                    <p className="text-sm text-gray-500">Send browser push notifications</p>
                  </div>
                  <Switch
                    checked={settings.pushNotifications}
                    onCheckedChange={(checked) => handleInputChange("pushNotifications", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Admin Alerts</Label>
                    <p className="text-sm text-gray-500">Receive admin alerts and warnings</p>
                  </div>
                  <Switch
                    checked={settings.adminAlerts}
                    onCheckedChange={(checked) => handleInputChange("adminAlerts", checked)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="financial" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Financial Settings
              </CardTitle>
              <CardDescription>Configure fees and financial limits</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Platform Fee (%)</Label>
                  <Input
                    type="number"
                    step="0.1"
                    value={settings.platformFee}
                    onChange={(e) => handleInputChange("platformFee", Number.parseFloat(e.target.value))}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Withdrawal Fee (%)</Label>
                  <Input
                    type="number"
                    step="0.1"
                    value={settings.withdrawalFee}
                    onChange={(e) => handleInputChange("withdrawalFee", Number.parseFloat(e.target.value))}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Minimum Withdrawal ($)</Label>
                  <Input
                    type="number"
                    value={settings.minimumWithdrawal}
                    onChange={(e) => handleInputChange("minimumWithdrawal", Number.parseInt(e.target.value))}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Maximum Withdrawal ($)</Label>
                  <Input
                    type="number"
                    value={settings.maximumWithdrawal}
                    onChange={(e) => handleInputChange("maximumWithdrawal", Number.parseInt(e.target.value))}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="email" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Email Configuration
              </CardTitle>
              <CardDescription>Configure SMTP settings for email delivery</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>SMTP Host</Label>
                  <Input value={settings.smtpHost} onChange={(e) => handleInputChange("smtpHost", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>SMTP Port</Label>
                  <Input
                    type="number"
                    value={settings.smtpPort}
                    onChange={(e) => handleInputChange("smtpPort", Number.parseInt(e.target.value))}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>SMTP Username</Label>
                <Input
                  type="email"
                  value={settings.smtpUsername}
                  onChange={(e) => handleInputChange("smtpUsername", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label>SMTP Password</Label>
                <Input
                  type="password"
                  value={settings.smtpPassword}
                  onChange={(e) => handleInputChange("smtpPassword", e.target.value)}
                  placeholder="Enter SMTP password"
                />
              </div>

              <Button variant="outline">Test Email Configuration</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
