"use client"

import { MarketingNav } from "@/components/marketing-nav"
import { MarketingFooter } from "@/components/marketing-footer"
import { Building, Users, Target, Award, CheckCircle, Zap, Shield, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background dark:bg-background">
      <MarketingNav />
      <main className="pt-16">
        {/* Hero Section with Image */}
        <section className="relative min-h-[600px] flex items-center bg-background dark:bg-[#0a1929]">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80"
              alt="BuildwellAI Team"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />
          </div>
          
          {/* Content */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <span className="text-sm font-semibold text-[#FBB429] uppercase tracking-wider">
                About Us
              </span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-4 mb-6">
                Building the Future of UK Construction
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Transforming the UK construction industry through intelligent automation, 
                safety innovation, and data-driven insights.
              </p>
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
                  <div className="w-16 h-16 mx-auto rounded-[5px] bg-gradient-to-r from-[#FBB429]/10 to-[#F87866]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Building className="h-8 w-8 text-[#FBB429]" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground dark:text-white mb-3">Innovation</h3>
                  <p className="text-muted-foreground dark:text-neutral-300">
                    Pioneering cutting-edge AI technologies to solve complex construction challenges.
                  </p>
                </div>
                <div className="bg-background dark:bg-[#0a1929] p-8 rounded-[5px] border border-border hover:border-[#FBB429] transition-all duration-300 hover:shadow-xl text-center group">
                  <div className="w-16 h-16 mx-auto rounded-[5px] bg-gradient-to-r from-[#FBB429]/10 to-[#F87866]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-8 w-8 text-[#FBB429]" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground dark:text-white mb-3">Collaboration</h3>
                  <p className="text-muted-foreground dark:text-neutral-300">
                    Working closely with industry professionals to understand real-world needs.
                  </p>
                </div>
                <div className="bg-background dark:bg-[#0a1929] p-8 rounded-[5px] border border-border hover:border-[#FBB429] transition-all duration-300 hover:shadow-xl text-center group">
                  <div className="w-16 h-16 mx-auto rounded-[5px] bg-gradient-to-r from-[#FBB429]/10 to-[#F87866]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Target className="h-8 w-8 text-[#FBB429]" />
                  </div>
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
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle className="h-6 w-6 text-[#FBB429] flex-shrink-0" />
                      <h4 className="font-display text-lg font-bold text-foreground dark:text-white">Industry Expertise</h4>
                    </div>
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
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle className="h-6 w-6 text-[#FBB429] flex-shrink-0" />
                      <h4 className="font-display text-lg font-bold text-foreground dark:text-white">AI Innovation</h4>
                    </div>
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
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle className="h-6 w-6 text-[#FBB429] flex-shrink-0" />
                      <h4 className="font-display text-lg font-bold text-foreground dark:text-white">Proven Results</h4>
                    </div>
                    <p className="text-muted-foreground dark:text-neutral-300">Track record of successful implementations across the UK</p>
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
                  <div className="w-16 h-16 rounded-[5px] bg-gradient-to-r from-[#FBB429]/10 to-[#F87866]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="h-8 w-8 text-[#FBB429]" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground dark:text-white mb-4">Safety First</h3>
                  <p className="text-muted-foreground dark:text-neutral-300 leading-relaxed">
                    Every solution we develop prioritises worker safety and regulatory compliance, 
                    helping construction sites become safer environments for everyone.
                  </p>
                </div>
                <div className="bg-background dark:bg-[#0a1929] p-8 rounded-[5px] border border-border hover:border-[#FBB429] transition-all duration-300 hover:shadow-xl group">
                  <div className="w-16 h-16 rounded-[5px] bg-gradient-to-r from-[#FBB429]/10 to-[#F87866]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="h-8 w-8 text-[#FBB429]" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground dark:text-white mb-4">Transparency</h3>
                  <p className="text-muted-foreground dark:text-neutral-300 leading-relaxed">
                    We believe in clear communication, honest partnerships, and transparent 
                    processes that build trust with our clients and stakeholders.
                  </p>
                </div>
                <div className="bg-background dark:bg-[#0a1929] p-8 rounded-[5px] border border-border hover:border-[#FBB429] transition-all duration-300 hover:shadow-xl group">
                  <div className="w-16 h-16 rounded-[5px] bg-gradient-to-r from-[#FBB429]/10 to-[#F87866]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="h-8 w-8 text-[#FBB429]" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground dark:text-white mb-4">Continuous Learning</h3>
                  <p className="text-muted-foreground dark:text-neutral-300 leading-relaxed">
                    The construction industry evolves rapidly, and so do we. We're committed 
                    to staying at the forefront of both industry trends and technological advances.
                  </p>
                </div>
                <div className="bg-background dark:bg-[#0a1929] p-8 rounded-[5px] border border-border hover:border-[#FBB429] transition-all duration-300 hover:shadow-xl group">
                  <div className="w-16 h-16 rounded-[5px] bg-gradient-to-r from-[#FBB429]/10 to-[#F87866]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-8 w-8 text-[#FBB429]" />
                  </div>
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