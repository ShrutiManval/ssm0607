"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  AlertCircle,
  ChevronRight,
  Lock,
  Shield,
  User,
  Users,
  CreditCard,
  HelpCircle,
  Bell,
  BarChart,
} from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import ServiceCard from "@/components/service-card"
import SecurityBanner from "@/components/security-banner"
import FeatureCarousel from "@/components/feature-carousel"

export default function BankingPortal() {
  const [activeTab, setActiveTab] = useState("personal")

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: 0 }}
              className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center"
            >
              <span className="text-white font-bold">B</span>
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              ModernBank
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Help
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </Button>
            <Button size="sm">
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <SecurityBanner />

        <section className="container py-8">
          <Tabs defaultValue="personal" className="w-full" onValueChange={setActiveTab}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div className="mb-4 md:mb-0">
                <h2 className="text-2xl font-bold tracking-tight">Banking Portal</h2>
                <p className="text-muted-foreground">Access your accounts securely and manage your finances.</p>
              </div>
              <TabsList className="grid w-full md:w-auto grid-cols-2">
                <TabsTrigger value="personal" className="relative overflow-hidden">
                  <User className="h-4 w-4 mr-2" />
                  Personal Banking
                  {activeTab === "personal" && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-primary"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </TabsTrigger>
                <TabsTrigger value="corporate" className="relative overflow-hidden">
                  <Users className="h-4 w-4 mr-2" />
                  Corporate Banking
                  {activeTab === "corporate" && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-primary"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="personal" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="md:col-span-1">
                  <CardHeader>
                    <CardTitle>Personal Login</CardTitle>
                    <CardDescription>Access your personal accounts securely</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <Input id="username" placeholder="Enter your username" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Label htmlFor="password">Password</Label>
                        <a href="#" className="text-xs text-primary hover:underline">
                          Forgot password?
                        </a>
                      </div>
                      <Input id="password" type="password" placeholder="Enter your password" />
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col space-y-4">
                    <Button className="w-full group relative overflow-hidden">
                      <span className="relative z-10">Login Securely</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Button>
                    <div className="flex justify-between items-center w-full text-sm">
                      <a href="#" className="text-primary hover:underline flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        New User Registration
                      </a>
                      <a href="#" className="text-primary hover:underline flex items-center">
                        <Lock className="h-3 w-3 mr-1" />
                        Lock User
                      </a>
                    </div>
                  </CardFooter>
                </Card>

                <div className="space-y-6">
                  <Alert variant="default" className="border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950">
                    <AlertCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    <AlertTitle>Security Notice</AlertTitle>
                    <AlertDescription>
                      We never ask for confidential information such as PIN or OTP. Never share these details with
                      anyone.
                    </AlertDescription>
                  </Alert>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="grid grid-cols-2 gap-4"
                  >
                    <ServiceCard
                      icon={<CreditCard className="h-5 w-5" />}
                      title="Cards"
                      description="Manage your debit and credit cards"
                    />
                    <ServiceCard
                      icon={<Shield className="h-5 w-5" />}
                      title="Security"
                      description="Update security settings"
                    />
                    <ServiceCard
                      icon={<BarChart className="h-5 w-5" />}
                      title="Investments"
                      description="Check your portfolio status"
                    />
                    <ServiceCard
                      icon={<HelpCircle className="h-5 w-5" />}
                      title="Support"
                      description="Get help with your account"
                    />
                  </motion.div>
                </div>
              </div>

              <FeatureCarousel />
            </TabsContent>

            <TabsContent value="corporate" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="md:col-span-1">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <CardTitle>Corporate Login</CardTitle>
                      <Badge
                        variant="outline"
                        className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0"
                      >
                        Business
                      </Badge>
                    </div>
                    <CardDescription>Access your business accounts securely</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="corporate-id">Corporate ID</Label>
                      <Input id="corporate-id" placeholder="Enter your corporate ID" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="user-id">User ID</Label>
                      <Input id="user-id" placeholder="Enter your user ID" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Label htmlFor="corp-password">Password</Label>
                        <a href="#" className="text-xs text-primary hover:underline">
                          Forgot password?
                        </a>
                      </div>
                      <Input id="corp-password" type="password" placeholder="Enter your password" />
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col space-y-4">
                    <Button className="w-full group relative overflow-hidden">
                      <span className="relative z-10">Login Securely</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-100"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Button>
                    <div className="flex justify-between items-center w-full text-sm">
                      <a href="#" className="text-primary hover:underline flex items-center">
                        <Users className="h-3 w-3 mr-1" />
                        New Corporate Registration
                      </a>
                      <a href="#" className="text-primary hover:underline flex items-center">
                        <HelpCircle className="h-3 w-3 mr-1" />
                        Help
                      </a>
                    </div>
                  </CardFooter>
                </Card>

                <div className="space-y-6">
                  <Alert
                    variant="default"
                    className="border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950"
                  >
                    <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                    <AlertTitle>Business Banking Platform</AlertTitle>
                    <AlertDescription>
                      Our new simplified and intuitive business banking platform provides complete control over your
                      corporate finances.
                    </AlertDescription>
                  </Alert>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="grid grid-cols-2 gap-4"
                  >
                    <ServiceCard
                      icon={<Users className="h-5 w-5" />}
                      title="Multi-User"
                      description="Manage user permissions"
                      variant="amber"
                    />
                    <ServiceCard
                      icon={<BarChart className="h-5 w-5" />}
                      title="Analytics"
                      description="Business performance insights"
                      variant="amber"
                    />
                    <ServiceCard
                      icon={<Shield className="h-5 w-5" />}
                      title="Security"
                      description="Enhanced security controls"
                      variant="amber"
                    />
                    <ServiceCard
                      icon={<HelpCircle className="h-5 w-5" />}
                      title="Support"
                      description="24/7 business support"
                      variant="amber"
                    />
                  </motion.div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <a
              href="#"
              className="group flex items-center p-3 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all"
            >
              <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <CreditCard className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium">Block ATM Card</h3>
                <p className="text-xs text-muted-foreground">Instant card blocking</p>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>

            <a
              href="#"
              className="group flex items-center p-3 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all"
            >
              <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium">Security Services</h3>
                <p className="text-xs text-muted-foreground">Update security settings</p>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>

            <a
              href="#"
              className="group flex items-center p-3 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all"
            >
              <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <BarChart className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium">Investments</h3>
                <p className="text-xs text-muted-foreground">Mutual funds & securities</p>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>

            <a
              href="#"
              className="group flex items-center p-3 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all"
            >
              <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <HelpCircle className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium">Help & Support</h3>
                <p className="text-xs text-muted-foreground">Get assistance</p>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-10">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
              <span className="text-white font-bold">B</span>
            </div>
            <span className="text-xl font-bold">ModernBank</span>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Cookies
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Security
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          <div className="mt-4 md:mt-0 text-sm text-muted-foreground">
            © {new Date().getFullYear()} ModernBank. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

