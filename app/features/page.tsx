"use client"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MarketingNav } from "@/components/marketing-nav"
import { MarketingFooter } from "@/components/marketing-footer"
import {
  FileText,
  Eye,
  Shield,
  CheckCircle,
  TrendingUp,
  Users,
  Camera,
  MapPin,
  Calendar,
  Download,
  Search,
  Bell,
  Lock,
  Zap,
  FileCheck,
  Award,
  Link2,
  ArrowRight,
  MessageSquare,
  BarChart3,
  Lightbulb,
  Globe,
} from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-[#0a1929]">
      <MarketingNav />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/build.jpg"
            alt="Construction site with AI technology"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h1 className="font-display text-5xl font-bold leading-tight tracking-tight md:text-6xl">
              Complete Compliance Platform <span className="text-gradient-orange">Powered by AI</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
              Five integrated products that work together to transform how you manage building safety and compliance
            </p>
          </div>
        </div>
      </section>

      {/* Quick Overview Cards */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            AI-Powered Tools for Every Need
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Streamlined solutions that enhance your team's expertise
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          <Card className="border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-orange mb-4">
                <Camera className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="font-display text-xl">Site Monitoring</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-relaxed">
                AI-powered defect detection and safety monitoring in real-time
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-orange mb-4">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="font-display text-xl">Smart Classification</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-relaxed">
                AI sorts hundreds of documents instantly by type, trade, and compliance category
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-orange mb-4">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="font-display text-xl">Site Inspections</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-relaxed">
                Mobile-first inspection reports with photo evidence and instant PDFs
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-orange mb-4">
                <Bell className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="font-display text-xl">Industry Intelligence</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-relaxed">
                Stay informed with curated UK construction news and regulatory updates
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 1: BuildwellEYE */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-orange/10 px-4 py-2 text-sm font-semibold text-primary border border-primary/20 mb-4">
              AI-Powered Vision
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Buildwell<span className="text-gradient-orange">EYE</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real-time defect detection and safety monitoring with AI-powered computer vision
            </p>
          </div>

          {/* Custom Video Showcase - Grid Style */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
              {/* Left Column - Text Content (2 columns) */}
              <div className="lg:col-span-2 space-y-4">
                <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold">
                  BuildwellEYE in Action
                </h3>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  See how AI-powered visual analysis transforms construction site monitoring and ensures safety compliance in real-time.
                </p>
                
                <div className="space-y-3 pt-2">
                  <h4 className="font-display text-2xl font-bold">Key Features</h4>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-orange mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Real-time AI Detection</p>
                      <p className="text-muted-foreground text-sm leading-snug">
                        Instantly identify safety violations and potential hazards on your construction site
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-orange mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Comprehensive Analytics</p>
                      <p className="text-muted-foreground text-sm leading-snug">
                        Get instant alerts, detailed reports, and actionable insights through our dashboard
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-orange mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">24/7 Site Monitoring</p>
                      <p className="text-muted-foreground text-sm leading-snug">
                        Continuous surveillance with cloud-based storage and multi-camera support
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Video (3 columns - larger) */}
              <div className="lg:col-span-3 relative">
                <div className="relative overflow-hidden rounded-lg bg-[#0a1929] shadow-lg">
                  <video
                    className="w-full h-auto object-cover aspect-video"
                    loop
                    muted
                    playsInline
                    autoPlay
                  >
                    <source src="https://res.cloudinary.com/drzxliqyz/video/upload/v1762606241/WhatsApp_Video_2025-11-07_at_18.14.45_6913d34a_wrpesi.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1929]/20 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* How It Works - Step by Step */}
          <div className="grid gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative md:order-2">
                <div className="aspect-4/3 overflow-hidden rounded-[5px] border-2 border-gray-300/40 dark:border-gray-700/40 bg-muted">
                  <Image
                    src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=600&fit=crop"
                    alt="Camera integration"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6 md:order-1">
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-orange/10 px-4 py-2 text-sm font-semibold text-primary border border-primary/20">
                  <Camera className="h-4 w-4" />
                  Step 1: Connect Your Cameras
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold">
                  Seamless Integration with Existing Cameras
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  BuildwellEYE integrates with your existing CCTV cameras, drones, or mobile devices. No need to replace infrastructure—our AI works with what you already have.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success-green mt-0.5 shrink-0" />
                    <p className="text-sm">Works with any IP camera, RTSP stream, or uploaded photos/videos</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success-green mt-0.5 shrink-0" />
                    <p className="text-sm">Cloud-based processing—no expensive on-site hardware required</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success-green mt-0.5 shrink-0" />
                    <p className="text-sm">Secure data transmission with enterprise-grade encryption</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative md:order-1">
                <div className="aspect-4/3 overflow-hidden rounded-[5px] border-2 border-gray-300/40 dark:border-gray-700/40 bg-muted">
                  <Image
                    src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&h=600&fit=crop"
                    alt="AI analysis"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6 md:order-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-orange/10 px-4 py-2 text-sm font-semibold text-primary border border-primary/20">
                  <Eye className="h-4 w-4" />
                  Step 2: AI Analyzes in Real-Time
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold">
                  Continuous AI Monitoring & Detection
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our computer vision models analyze every frame, detecting safety hazards, quality defects, and progress milestones. AI learns your site's unique conditions for more accurate detection over time.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success-green mt-0.5 shrink-0" />
                    <p className="text-sm">Real-time detection of 50+ safety hazards and quality issues</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success-green mt-0.5 shrink-0" />
                    <p className="text-sm">Automated alerts sent instantly via SMS, email, or app notification</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success-green mt-0.5 shrink-0" />
                    <p className="text-sm">Custom detection models trained for your specific project requirements</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-orange/10 px-4 py-2 text-sm font-semibold text-primary border border-primary/20">
                  <BarChart3 className="h-4 w-4" />
                  Step 3: Act on Insights
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold">
                  Actionable Dashboards & Reports
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Access a centralized dashboard showing all detected issues, safety trends, and progress analytics. Filter by severity, location, or type. Generate compliance reports instantly.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success-green mt-0.5 shrink-0" />
                    <p className="text-sm">Real-time dashboards with photo evidence and exact timestamps</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success-green mt-0.5 shrink-0" />
                    <p className="text-sm">Automated compliance reports for regulators and stakeholders</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success-green mt-0.5 shrink-0" />
                    <p className="text-sm">Historical analytics to identify patterns and prevent future issues</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-4/3 overflow-hidden rounded-[5px] border-2 border-gray-300/40 dark:border-gray-700/40 bg-muted">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                    alt="Dashboard analytics"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Key Stats */}
          <div className="mx-auto max-w-5xl mt-16 pt-12 border-t border-border">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center space-y-2">
                <div className="font-display text-4xl font-bold text-primary md:text-5xl">60%</div>
                <p className="text-sm text-muted-foreground">
                  Reduction in safety incidents with real-time AI monitoring
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="font-display text-4xl font-bold text-primary md:text-5xl">24/7</div>
                <p className="text-sm text-muted-foreground">
                  Continuous site monitoring with AI-powered defect detection
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="font-display text-4xl font-bold text-primary md:text-5xl">3x</div>
                <p className="text-sm text-muted-foreground">
                  Faster issue identification with automated visual analysis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: BuildwellTHREAD */}
      <section className="py-20 bg-white dark:bg-[#0a1929]">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium mb-4">
              AI-Powered Documentation
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Buildwell<span className="text-gradient-orange">THREAD</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete Golden Thread Documentation Management
            </p>
          </div>

          {/* Custom Video Showcase - Centered Style */}
          <div className="mb-16 max-w-5xl mx-auto">
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h3 className="font-display text-3xl sm:text-4xl font-bold">
                  Smart Document Management
                </h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  See how AI automatically organizes hundreds of construction documents, creating a complete golden thread of building information from design to handover.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-xl border-2 border-border shadow-2xl">
                <video
                  className="w-full h-auto object-cover aspect-video"
                  loop
                  muted
                  playsInline
                  autoPlay
                >
                  <source src="https://res.cloudinary.com/drzxliqyz/video/upload/v1763297405/threadvid_oxmkua.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="grid md:grid-cols-3 gap-6 pt-4">
                <div className="text-center space-y-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-orange mx-auto">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold">AI Classification</h4>
                  <p className="text-sm text-muted-foreground">Automatic document sorting by type and trade</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-orange mx-auto">
                    <Link2 className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold">Complete Traceability</h4>
                  <p className="text-sm text-muted-foreground">Unbroken chain from design to handover</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-orange mx-auto">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold">Compliance Ready</h4>
                  <p className="text-sm text-muted-foreground">Building Safety Act requirements</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center mb-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-orange">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-display text-3xl font-bold tracking-tight">AI Document Sorting</h3>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Upload hundreds of documents at once and let AI intelligently classify them by type, trade, building zone, 
                and compliance category. Your team reviews and approves classifications, maintaining full control while 
                eliminating hours of manual sorting work.
              </p>
              
              <div className="space-y-3">
                <h4 className="font-semibold">Key Capabilities:</h4>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success-green mt-0.5 shrink-0" />
                  <p className="text-sm">Intelligent categorization by document type, trade, and building zone</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success-green mt-0.5 shrink-0" />
                  <p className="text-sm">Automatic metadata extraction (dates, revision numbers, approval status)</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success-green mt-0.5 shrink-0" />
                  <p className="text-sm">OCR for scanned documents and handwritten notes</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-success-green/10 border border-success-green/20">
                <TrendingUp className="h-8 w-8 text-success-green" />
                <div>
                  <div className="font-semibold">Save 10+ Hours Per Week</div>
                  <div className="text-sm text-muted-foreground">Eliminate manual document sorting and filing</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-4/3 overflow-hidden rounded-2xl border-2 border-border bg-muted">
                <Image
                  src="/sorting.jpg"
                  alt="Document sorting"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Golden Thread Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mt-16">
            {[
              {
                icon: Link2,
                title: "Document Linking",
                description: "Connect drawings to specifications, specifications to products, creating an unbroken chain of evidence.",
              },
              {
                icon: MapPin,
                title: "GPS Tracking",
                description: "Every photo and document is GPS-tagged and linked to specific building zones for perfect traceability.",
              },
              {
                icon: Calendar,
                title: "Timeline View",
                description: "See the complete history from design through construction to handover with timestamps and audit trails.",
              },
              {
                icon: Users,
                title: "Responsibility Tracking",
                description: "Log who made every decision, when, and why. Complete accountability for the entire golden thread.",
              },
              {
                icon: Search,
                title: "Instant Search",
                description: "Find any document, photo, or certification in seconds. Search by location, date, trade, or metadata.",
              },
              {
                icon: Download,
                title: "Export Packages",
                description: "Generate complete golden thread packages for handover, audits, or regulatory submission with one click.",
              },
            ].map((feature, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-orange mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: BuildwellCHAT */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-4">
              Coming Soon
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Buildwell<span className="text-gradient-orange">CHAT</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AI Assistant for Building Documentation
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8 lg:grid-cols-5 items-center mb-12">
              <div className="space-y-6 lg:col-span-2">
                <h3 className="font-display text-3xl font-bold">Your Building Documentation Expert</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ask questions and get instant answers from your entire building documentation library. Like ChatGPT, but trained on your project data.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MessageSquare className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Instant Answers</p>
                      <p className="text-sm text-muted-foreground">Query your entire project documentation in natural language</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileCheck className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Smart Compliance</p>
                      <p className="text-sm text-muted-foreground">Get regulatory guidance based on Building Safety Act requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Search className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Document Discovery</p>
                      <p className="text-sm text-muted-foreground">Find relevant certifications, approvals, and specifications instantly</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative lg:col-span-3">
                <div className="aspect-video overflow-hidden rounded-xl border-2 border-border bg-muted shadow-lg">
                   <video
                  className="w-full h-auto object-cover aspect-video"
                  loop
                  muted
                  playsInline
                  autoPlay
                >
                  <source src="https://res.cloudinary.com/drzxliqyz/video/upload/v1763297450/chatrec_kfrokc.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                </div>
              </div>
            </div>

            <div className="text-center p-12 rounded-2xl bg-card border-2 border-border  ">
              <h3 className="font-display text-2xl font-bold mb-4">Be Among the First to Try It</h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                BuildwellCHAT is currently in development. Join our waitlist to get early access and help shape the future of AI-powered construction documentation.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-orange text-white hover:brightness-110">
                  Join the Waitlist
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: BuildwellINSPECT */}
      <section className="py-20 bg-white dark:bg-[#0a1929]">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-orange/10 px-4 py-2 text-sm font-semibold text-primary border border-primary/20 mb-4">
              Mobile-First Inspections
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Buildwell<span className="text-gradient-orange">INSPECT</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple, Powerful Site Inspections
            </p>
          </div>

          {/* Custom Video Showcase - Side by Side Style */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative overflow-hidden rounded-xl border-2 border-border shadow-2xl order-2 lg:order-1">
                <video
                  className="w-full h-auto object-cover aspect-video"
                  loop
                  muted
                  playsInline
                  autoPlay
                >
                  <source src="https://res.cloudinary.com/drzxliqyz/video/upload/v1763297404/inspectvid_znvtb6.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="space-y-6 order-1 lg:order-2">
                <h3 className="font-display text-3xl sm:text-4xl font-bold">
                  Inspections Made Simple
                </h3>
                <p className="text-lg text-muted-foreground">
                  Capture issues with photos, generate professional reports in minutes, and ensure nothing falls through the cracks with our mobile-first platform.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-orange flex-shrink-0">
                      <Camera className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Photo-First Reporting</h4>
                      <p className="text-sm text-muted-foreground">Automatic GPS tagging, timestamps, and custom metadata for perfect audit trails</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-orange flex-shrink-0">
                      <FileCheck className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Instant PDF Reports</h4>
                      <p className="text-sm text-muted-foreground">Generate branded, professional reports in minutes with one-click sharing</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-orange flex-shrink-0">
                      <Lock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Offline Mode</h4>
                      <p className="text-sm text-muted-foreground">Work anywhere without internet—data syncs automatically when you're back online</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {[
              {
                icon: Camera,
                title: "360° Capture",
                description: "Support for 360° cameras, drones, and LiDAR scans to capture complete site context",
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description: "Share inspections, assign tasks, and track resolution progress in real-time",
              },
              {
                icon: Shield,
                title: "Compliance Ready",
                description: "Meets post-Grenfell requirements with BuildwellTHREAD integration",
              },
            ].map((feature, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-orange mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: BuildwellNEWS */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-orange/10 px-4 py-2 text-sm font-semibold text-primary border border-primary/20 mb-4">
              Industry Intelligence
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Buildwell<span className="text-gradient-orange">NEWS</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              UK Construction Industry Intelligence Hub
            </p>
          </div>

          {/* Custom Video Showcase - Overlay Style */}
          <div className="mb-16 max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl border-2 border-border shadow-2xl">
              <div className="relative aspect-video">
                <video
                  className="w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                  autoPlay
                >
                  <source src="https://res.cloudinary.com/drzxliqyz/video/upload/v1762797262/showcasenews_peihce.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="font-display text-3xl sm:text-4xl font-bold mb-3">
                    Stay Informed, Stay Compliant
                  </h3>
                  <p className="text-lg text-white/90 max-w-3xl">
                    Your central hub for UK construction news, regulations, and industry updates. Never miss critical compliance changes or material recalls that affect your projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center mb-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <h3 className="font-display text-3xl font-bold tracking-tight">Stay Ahead of Changes</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Access curated construction news, safety alerts, regulatory updates, and material recalls—all in one place. Our AI-powered platform filters the noise to bring you only what matters for your projects.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Bell, title: "Real-time Updates", desc: "Instant alerts on regulatory changes and safety notices" },
                  { icon: Search, title: "Intelligent Search", desc: "Find relevant info across all sources with AI-powered search" },
                  { icon: Shield, title: "Compliance Tracking", desc: "Monitor Building Safety Act updates and industry standards" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-orange flex-shrink-0">
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-4/3 overflow-hidden rounded-2xl border-2 border-border bg-muted shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop"
                  alt="Industry news and updates"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Platform Overview */}
      <section className="py-20 border-t border-border bg-white dark:bg-[#0a1929]">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              One Platform, <span className="text-gradient-orange">Complete Solution</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              All products work together seamlessly for end-to-end compliance
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {[
              { icon: Eye, title: "Visual Monitoring", desc: "BuildwellEYE captures site safety", color: "from-orange-500 to-orange-600" },
              { icon: FileText, title: "Documentation", desc: "BuildwellTHREAD manages the golden thread", color: "from-orange-500 to-orange-600" },
              { icon: Users, title: "AI Assistant", desc: "BuildwellCHAT answers questions", color: "from-orange-500 to-orange-600" },
              { icon: Camera, title: "Site Inspections", desc: "BuildwellINSPECT for mobile reporting", color: "from-orange-500 to-orange-600" },
              { icon: TrendingUp, title: "Industry Intel", desc: "BuildwellNEWS keeps you informed", color: "from-orange-500 to-orange-600" },
              { icon: Lock, title: "Secure", desc: "Bank-level encryption & audit trails", color: "from-orange-500 to-orange-600" },
            ].map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="border-border hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${feature.color}`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="mt-4">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">{feature.desc}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

 {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Ready to Transform Your Compliance?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Book a personalized demo to see how BuildwellAI can work for your projects
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-gradient-orange text-white hover:brightness-110">
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/pricing" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  )
}
