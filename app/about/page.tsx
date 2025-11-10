"use client"

import { useEffect } from "react"
import { MarketingNav } from "@/components/marketing-nav"
import { MarketingFooter } from "@/components/marketing-footer"
import Image from "next/image"
import "./timeline.css"

export default function AboutPage() {
  useEffect(() => {
    const revealedBoxes = document.querySelectorAll(".timeliner .revealedBox")

    const handleScroll = () => {
      revealedBoxes.forEach((box) => {
        if (window.scrollY + window.innerHeight > (box as HTMLElement).offsetTop) {
          box.classList.add("revealedBox-in")
        }
      })
    }

    const setChildrenSpanClasses = () => {
      revealedBoxes.forEach((box) => {
        const childrenSpan = box.querySelectorAll("span").length
        box.classList.add(`childrenSpan-${childrenSpan}`)
      })
    }

    setChildrenSpanClasses()
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background dark:bg-background">
      <MarketingNav />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-background dark:bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-2 rounded-full bg-gradient-orange/10 px-4 py-2 text-sm font-semibold text-primary border border-primary/20 mb-6">
                  About BuildwellAI
                </span>
                <h1 className="font-display text-5xl md:text-6xl lg:text-8xl font-bold text-foreground dark:text-white mb-6">
                  Transforming UK Construction with <span className="text-gradient-orange">AI Innovation</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground dark:text-neutral-300 max-w-4xl mx-auto leading-relaxed">
                  We're building the future of construction through intelligent automation, 
                  safety innovation, and data-driven insights.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16">
                <div className="text-center p-6 bg-background dark:bg-[#0a1929] rounded-[5px] border border-border hover:border-[#FBB429] transition-all">
                  <div className="font-display text-4xl md:text-5xl font-bold text-gradient-orange mb-2">100+</div>
                  <div className="text-sm md:text-base text-muted-foreground dark:text-neutral-300">Active Projects</div>
                </div>
                <div className="text-center p-6 bg-background dark:bg-[#0a1929] rounded-[5px] border border-border hover:border-[#FBB429] transition-all">
                  <div className="font-display text-4xl md:text-5xl font-bold text-gradient-orange mb-2">60%</div>
                  <div className="text-sm md:text-base text-muted-foreground dark:text-neutral-300">Safety Improvement</div>
                </div>
                <div className="text-center p-6 bg-background dark:bg-[#0a1929] rounded-[5px] border border-border hover:border-[#FBB429] transition-all">
                  <div className="font-display text-4xl md:text-5xl font-bold text-gradient-orange mb-2">24/7</div>
                  <div className="text-sm md:text-base text-muted-foreground dark:text-neutral-300">AI Monitoring</div>
                </div>
                <div className="text-center p-6 bg-background dark:bg-[#0a1929] rounded-[5px] border border-border hover:border-[#FBB429] transition-all">
                  <div className="font-display text-4xl md:text-5xl font-bold text-gradient-orange mb-2">5</div>
                  <div className="text-sm md:text-base text-muted-foreground dark:text-neutral-300">AI Products</div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="mt-16 relative rounded-xl overflow-hidden shadow-2xl">
                <div className="aspect-video relative">
                  <Image
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80"
                    alt="BuildwellAI Team"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-background dark:bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866] uppercase tracking-wider">
                  Our Mission
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground dark:text-white mt-4 mb-6">
                  Building the Future Together
                </h2>
                <p className="text-lg text-muted-foreground dark:text-neutral-300 max-w-3xl mx-auto">
                  We're dedicated to revolutionising the construction industry by providing 
                  AI-powered solutions that enhance safety, efficiency, and productivity 
                  across all phases of building projects.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-background dark:bg-[#0a1929] p-8 rounded-[5px] border border-border hover:border-[#FBB429] transition-all duration-300 hover:shadow-xl text-center group">
                  <h3 className="font-display text-xl font-bold text-foreground dark:text-white mb-3">Innovation</h3>
                  <p className="text-muted-foreground dark:text-neutral-300">
                    Pioneering cutting-edge AI technologies to solve complex construction challenges.
                  </p>
                </div>
                <div className="bg-background dark:bg-[#0a1929] p-8 rounded-[5px] border border-border hover:border-[#FBB429] transition-all duration-300 hover:shadow-xl text-center group">
                  <h3 className="font-display text-xl font-bold text-foreground dark:text-white mb-3">Collaboration</h3>
                  <p className="text-muted-foreground dark:text-neutral-300">
                    Working closely with industry professionals to understand real-world needs.
                  </p>
                </div>
                <div className="bg-background dark:bg-[#0a1929] p-8 rounded-[5px] border border-border hover:border-[#FBB429] transition-all duration-300 hover:shadow-xl text-center group">
                  <h3 className="font-display text-xl font-bold text-foreground dark:text-white mb-3">Excellence</h3>
                  <p className="text-muted-foreground dark:text-neutral-300">
                    Delivering solutions that exceed expectations and drive measurable results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-muted/30 dark:bg-[#0d1f33]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className="order-2 lg:order-1">
                  <div className="relative aspect-[4/3] rounded-[5px] overflow-hidden shadow-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"
                      alt="BuildwellAI Office"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#FBB429]/10 to-[#F87866]/10" />
                  </div>
                </div>
                
                {/* Text Content */}
                <div className="order-1 lg:order-2">
                  <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866] uppercase tracking-wider">
                    Our Story
                  </span>
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground dark:text-white mt-4 mb-6">
                    Building on Experience, Innovating for Tomorrow
                  </h2>
                  <p className="text-lg text-muted-foreground dark:text-neutral-300 mb-6 leading-relaxed">
                    Founded by construction veterans and AI specialists, BuildwellAI emerged from a shared vision 
                    to solve the sector's most pressing challenges through intelligent technology.
                  </p>
                  <p className="text-lg text-muted-foreground dark:text-neutral-300 leading-relaxed">
                    Today, we proudly serve construction professionals across the UK, helping them build 
                    safer, more efficient, and more profitable projects.
                  </p>
                </div>
              </div>
              
              {/* Feature Cards with Images */}
              <div className="grid md:grid-cols-3 gap-8 mt-16">
                <div className="bg-background dark:bg-[#0a1929] rounded-[5px] overflow-hidden border border-border hover:border-[#FBB429] transition-all duration-300 hover:shadow-xl">
                  <div className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"
                      alt="Industry Expertise"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <h4 className="font-display text-lg font-bold text-foreground dark:text-white mb-3">Industry Expertise</h4>
                    <p className="text-muted-foreground dark:text-neutral-300">Deep understanding of construction workflows and challenges</p>
                  </div>
                </div>
                
                <div className="bg-background dark:bg-[#0a1929] rounded-[5px] overflow-hidden border border-border hover:border-[#FBB429] transition-all duration-300 hover:shadow-xl">
                  <div className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80"
                      alt="AI Innovation"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <h4 className="font-display text-lg font-bold text-foreground dark:text-white mb-3">AI Innovation</h4>
                    <p className="text-muted-foreground dark:text-neutral-300">Cutting-edge machine learning and automation technologies</p>
                  </div>
                </div>
                
                <div className="bg-background dark:bg-[#0a1929] rounded-[5px] overflow-hidden border border-border hover:border-[#FBB429] transition-all duration-300 hover:shadow-xl">
                  <div className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=800&q=80"
                      alt="Proven Results"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <h4 className="font-display text-lg font-bold text-foreground dark:text-white mb-3">Proven Results</h4>
                    <p className="text-muted-foreground dark:text-neutral-300">Track record of successful implementations across the UK</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-background dark:bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="timeliner">
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-center text-foreground dark:text-white mb-20">
                Our Journey
              </h1>
              
              {/* Timeline Item 1 - Right */}
              <div className="md:flex md:flex-row-reverse items-center mb-8">
                <div className="md:w-1/2 scroll-animation revealedBox goRight">
                  <div className="contentBox relative aspect-[4/3] rounded-[5px] overflow-hidden shadow-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                      alt="BuildwellAI Foundation"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span></span>
                  <span></span>
                </div>
                <div className="md:w-1/2 text-md md:text-left px-4 text-justify">
                  <h4 className="font-bold text-2xl md:text-3xl text-foreground dark:text-white mb-4">
                    2020: The Foundation
                  </h4>
                  <p className="text-lg text-muted-foreground dark:text-neutral-300 leading-relaxed">
                    BuildwellAI was founded with a simple mission: to revolutionize the UK construction industry 
                    through AI-powered solutions. From day one, we set out to tackle the sector's most pressing 
                    challenges with innovative technology, starting with safety monitoring and compliance management.
                  </p>
                </div>
              </div>

              {/* Timeline Item 2 - Left */}
              <div className="md:flex items-center mb-8">
                <div className="md:w-1/2 scroll-animation revealedBox goLeft">
                  <div className="contentBox relative aspect-[4/3] rounded-[5px] overflow-hidden shadow-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                      alt="Team Expansion"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="md:w-1/2 text-md md:text-right text-center px-4">
                  <h4 className="font-bold text-2xl md:text-3xl text-foreground dark:text-white mb-4">
                    2021: Expansion & Innovation
                  </h4>
                  <p className="text-lg text-muted-foreground dark:text-neutral-300 leading-relaxed">
                    Our team grew with industry experts, AI engineers, and construction professionals. We launched 
                    BuildwellEYE, our flagship computer vision platform, transforming how construction sites monitor 
                    safety in real-time. This year marked our commitment to combining human expertise with AI innovation.
                  </p>
                </div>
              </div>

              {/* Timeline Item 3 - Right */}
              <div className="md:flex md:flex-row-reverse items-center mb-8">
                <div className="md:w-1/2 scroll-animation revealedBox goTop">
                  <div className="contentBox relative aspect-[4/3] rounded-[5px] overflow-hidden shadow-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                      alt="Product Development"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="md:w-1/2 text-md md:text-left text-center px-4">
                  <h4 className="font-bold text-2xl md:text-3xl text-foreground dark:text-white mb-4">
                    2022: Building the Suite
                  </h4>
                  <p className="text-lg text-muted-foreground dark:text-neutral-300 leading-relaxed">
                    We expanded our product portfolio with BuildwellTHREAD for golden thread documentation management 
                    and BuildwellINSPECT for mobile-first site inspections. Our solutions began addressing the complete 
                    lifecycle of construction projects, from planning to handover.
                  </p>
                </div>
              </div>

              {/* Timeline Item 4 - Left */}
              <div className="md:flex items-center mb-8">
                <div className="md:w-1/2 scroll-animation revealedBox goBottom">
                  <div className="contentBox relative aspect-[4/3] rounded-[5px] overflow-hidden shadow-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80"
                      alt="Future Vision"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="md:w-1/2 text-md md:text-right text-center px-4">
                  <h4 className="font-bold text-2xl md:text-3xl text-foreground dark:text-white mb-4">
                    2024: Leading the Future
                  </h4>
                  <p className="text-lg text-muted-foreground dark:text-neutral-300 leading-relaxed">
                    Today, BuildwellAI serves construction professionals across the UK with a comprehensive AI platform. 
                    We're pioneering new frontiers with BuildwellCHAT and BuildwellNEWS, while continuing to push the 
                    boundaries of innovation. Our commitment to safety, compliance, and excellence drives us forward.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-muted/30 dark:bg-[#0a1929]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866] uppercase tracking-wider">
                  Our Team
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground dark:text-white mt-4 mb-6">
                  Meet the Experts Behind BuildwellAI
                </h2>
                <p className="text-lg text-muted-foreground dark:text-neutral-300 max-w-3xl mx-auto">
                  A diverse team of AI specialists, construction experts, and industry professionals
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-background dark:bg-background rounded-[5px] overflow-hidden border border-border hover:border-[#FBB429] transition-all duration-300 hover:shadow-xl group">
                  <div className="relative h-72">
                    <Image
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
                      alt="CEO"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-foreground dark:text-white mb-1">Dr. James Mitchell</h3>
                    <p className="text-[#FBB429] font-semibold mb-3">CEO & Co-Founder</p>
                    <p className="text-muted-foreground dark:text-neutral-300 text-sm">
                      Former construction project manager with 15+ years experience, now leading BuildwellAI's vision for safer, smarter construction sites.
                    </p>
                  </div>
                </div>

                <div className="bg-background dark:bg-background rounded-[5px] overflow-hidden border border-border hover:border-[#FBB429] transition-all duration-300 hover:shadow-xl group">
                  <div className="relative h-72">
                    <Image
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                      alt="CTO"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-foreground dark:text-white mb-1">Dr. Sarah Chen</h3>
                    <p className="text-[#FBB429] font-semibold mb-3">CTO & Co-Founder</p>
                    <p className="text-muted-foreground dark:text-neutral-300 text-sm">
                      AI researcher specializing in computer vision and machine learning, driving innovation in construction safety technology.
                    </p>
                  </div>
                </div>

                <div className="bg-background dark:bg-background rounded-[5px] overflow-hidden border border-border hover:border-[#FBB429] transition-all duration-300 hover:shadow-xl group">
                  <div className="relative h-72">
                    <Image
                      src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80"
                      alt="Head of Engineering"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-foreground dark:text-white mb-1">Marcus Thompson</h3>
                    <p className="text-[#FBB429] font-semibold mb-3">Head of Engineering</p>
                    <p className="text-muted-foreground dark:text-neutral-300 text-sm">
                      Software architect with expertise in scalable cloud platforms, ensuring BuildwellAI delivers reliable enterprise solutions.
                    </p>
                  </div>
                </div>

                <div className="bg-background dark:bg-background rounded-[5px] overflow-hidden border border-border hover:border-[#FBB429] transition-all duration-300 hover:shadow-xl group">
                  <div className="relative h-72">
                    <Image
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80"
                      alt="Head of Product"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-foreground dark:text-white mb-1">Emily Rodriguez</h3>
                    <p className="text-[#FBB429] font-semibold mb-3">Head of Product</p>
                    <p className="text-muted-foreground dark:text-neutral-300 text-sm">
                      Product strategist focused on user experience, ensuring every BuildwellAI tool solves real construction challenges.
                    </p>
                  </div>
                </div>

                <div className="bg-background dark:bg-background rounded-[5px] overflow-hidden border border-border hover:border-[#FBB429] transition-all duration-300 hover:shadow-xl group">
                  <div className="relative h-72">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                      alt="Head of Safety & Compliance"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-foreground dark:text-white mb-1">David Patterson</h3>
                    <p className="text-[#FBB429] font-semibold mb-3">Head of Safety & Compliance</p>
                    <p className="text-muted-foreground dark:text-neutral-300 text-sm">
                      Former HSE inspector ensuring our solutions meet all UK construction safety regulations and standards.
                    </p>
                  </div>
                </div>

                <div className="bg-background dark:bg-background rounded-[5px] overflow-hidden border border-border hover:border-[#FBB429] transition-all duration-300 hover:shadow-xl group">
                  <div className="relative h-72">
                    <Image
                      src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&q=80"
                      alt="Head of Customer Success"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-foreground dark:text-white mb-1">Priya Sharma</h3>
                    <p className="text-[#FBB429] font-semibold mb-3">Head of Customer Success</p>
                    <p className="text-muted-foreground dark:text-neutral-300 text-sm">
                      Dedicated to client partnerships, ensuring BuildwellAI delivers measurable value and exceptional support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-background dark:bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866] uppercase tracking-wider">
                  Our Values
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground dark:text-white mt-4 mb-6">
                  The Principles That Guide Us
                </h2>
                <p className="text-lg text-muted-foreground dark:text-neutral-300 max-w-3xl mx-auto">
                  Everything we do is guided by these core values
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-background dark:bg-[#0a1929] p-8 rounded-[5px] border border-border hover:border-[#FBB429] transition-all duration-300 hover:shadow-xl group">
                  <h3 className="font-display text-2xl font-bold text-foreground dark:text-white mb-4">Safety First</h3>
                  <p className="text-muted-foreground dark:text-neutral-300 leading-relaxed">
                    Every solution we develop prioritises worker safety and regulatory compliance, 
                    helping construction sites become safer environments for everyone.
                  </p>
                </div>
                <div className="bg-background dark:bg-[#0a1929] p-8 rounded-[5px] border border-border hover:border-[#FBB429] transition-all duration-300 hover:shadow-xl group">
                  <h3 className="font-display text-2xl font-bold text-foreground dark:text-white mb-4">Transparency</h3>
                  <p className="text-muted-foreground dark:text-neutral-300 leading-relaxed">
                    We believe in clear communication, honest partnerships, and transparent 
                    processes that build trust with our clients and stakeholders.
                  </p>
                </div>
                <div className="bg-background dark:bg-[#0a1929] p-8 rounded-[5px] border border-border hover:border-[#FBB429] transition-all duration-300 hover:shadow-xl group">
                  <h3 className="font-display text-2xl font-bold text-foreground dark:text-white mb-4">Continuous Learning</h3>
                  <p className="text-muted-foreground dark:text-neutral-300 leading-relaxed">
                    The construction industry evolves rapidly, and so do we. We're committed 
                    to staying at the forefront of both industry trends and technological advances.
                  </p>
                </div>
                <div className="bg-background dark:bg-[#0a1929] p-8 rounded-[5px] border border-border hover:border-[#FBB429] transition-all duration-300 hover:shadow-xl group">
                  <h3 className="font-display text-2xl font-bold text-foreground dark:text-white mb-4">Sustainability</h3>
                  <p className="text-muted-foreground dark:text-neutral-300 leading-relaxed">
                    Our solutions help reduce waste, optimise resource usage, and support 
                    environmentally responsible construction practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80"
              alt="Construction Site"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/65 to-[#000000]/65" />
          </div>
          
          {/* Content */}
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Projects?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Join hundreds of construction professionals who trust BuildwellAI to 
                deliver smarter, safer, and more efficient building solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact">
                  <button className="bg-gradient-to-r from-[#FBB429] to-[#F87866] text-white px-8 py-4 rounded-[5px] font-semibold hover:opacity-90 transition-all shadow-lg">
                    Get In Touch
                  </button>
                </a>
                <a href="/pricing">
                  <button className="bg-transparent text-white px-8 py-4 rounded-[5px] font-semibold hover:bg-white/10 transition-all shadow-[inset_0_0_0_2px] shadow-white">
                    View Pricing
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </div>
  )
}