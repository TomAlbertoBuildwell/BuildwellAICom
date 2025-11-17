"use client"

import { useEffect, useRef, useState } from "react"
import { MarketingNav } from "@/components/marketing-nav"
import { MarketingFooter } from "@/components/marketing-footer"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background dark:bg-background">
      <MarketingNav />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-background dark:bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866] uppercase tracking-wider">
                  About BuildwellAI
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground dark:text-white mt-4 mb-6">
                  Transforming UK Construction with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">AI Innovation</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
                  We're building the future of construction through intelligent automation, 
                  safety innovation, and data-driven insights.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
                <div className="text-center p-6 bg-background dark:bg-[#0a1929] rounded-[5px] border-2 border-neutral-200 dark:border-neutral-700/50 hover:border-[#FBB429] transition-all">
                  <div className="font-display text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866] mb-2">100+</div>
                  <div className="text-sm text-muted-foreground dark:text-neutral-300">Active Projects</div>
                </div>
                <div className="text-center p-6 bg-background dark:bg-[#0a1929] rounded-[5px] border-2 border-neutral-200 dark:border-neutral-700/50 hover:border-[#FBB429] transition-all">
                  <div className="font-display text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866] mb-2">60%</div>
                  <div className="text-sm text-muted-foreground dark:text-neutral-300">Safety Improvement</div>
                </div>
                <div className="text-center p-6 bg-background dark:bg-[#0a1929] rounded-[5px] border-2 border-neutral-200 dark:border-neutral-700/50 hover:border-[#FBB429] transition-all">
                  <div className="font-display text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866] mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground dark:text-neutral-300">AI Monitoring</div>
                </div>
                <div className="text-center p-6 bg-background dark:bg-[#0a1929] rounded-[5px] border-2 border-neutral-200 dark:border-neutral-700/50 hover:border-[#FBB429] transition-all">
                  <div className="font-display text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866] mb-2">5</div>
                  <div className="text-sm text-muted-foreground dark:text-neutral-300">AI Products</div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="mt-12 relative rounded-[5px] overflow-hidden shadow-2xl">
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
        <section className="py-20 bg-muted/30 dark:bg-[#0d1f33]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866] uppercase tracking-wider">
                  Our Mission
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground dark:text-white mt-4 mb-6">
                  Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">Future</span> Together
                </h2>
                <p className="text-lg text-muted-foreground dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
                  We're dedicated to revolutionising the construction industry by providing 
                  AI-powered solutions that enhance safety, efficiency, and productivity 
                  across all phases of building projects.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                <div className="bg-background dark:bg-[#0a1929] p-6 md:p-8 rounded-[5px] border-2 border-neutral-200 dark:border-neutral-700/50 hover:border-[#FBB429] transition-all duration-300 hover:shadow-xl text-center group">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground dark:text-white mb-3">Innovation</h3>
                  <p className="text-muted-foreground dark:text-neutral-300 leading-relaxed">
                    Pioneering cutting-edge AI technologies to solve complex construction challenges.
                  </p>
                </div>
                <div className="bg-background dark:bg-[#0a1929] p-6 md:p-8 rounded-[5px] border-2 border-neutral-200 dark:border-neutral-700/50 hover:border-[#FBB429] transition-all duration-300 hover:shadow-xl text-center group">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground dark:text-white mb-3">Collaboration</h3>
                  <p className="text-muted-foreground dark:text-neutral-300 leading-relaxed">
                    Working closely with industry professionals to understand real-world needs.
                  </p>
                </div>
                <div className="bg-background dark:bg-[#0a1929] p-6 md:p-8 rounded-[5px] border-2 border-neutral-200 dark:border-neutral-700/50 hover:border-[#FBB429] transition-all duration-300 hover:shadow-xl text-center group">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground dark:text-white mb-3">Excellence</h3>
                  <p className="text-muted-foreground dark:text-neutral-300 leading-relaxed">
                    Delivering solutions that exceed expectations and drive measurable results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background dark:bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="lg:flex lg:items-center lg:gap-12">
                {/* Text Content - Shows first on mobile, left on desktop */}
                <div className="lg:w-1/2 space-y-6 order-1">
                  <div className="flex justify-center lg:justify-start">
                    <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866] uppercase tracking-wider">
                      Our Story
                    </span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground dark:text-white text-center lg:text-left">
                    Building on Experience, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">Innovating</span> for Tomorrow
                  </h2>
                  <p className="text-lg text-muted-foreground dark:text-neutral-300 leading-relaxed">
                    Founded by construction veterans and AI specialists, BuildwellAI emerged from a shared vision 
                    to solve the sector's most pressing challenges through intelligent technology.
                  </p>
                  <p className="text-lg text-muted-foreground dark:text-neutral-300 leading-relaxed">
                    Today, we proudly serve construction professionals across the UK, helping them build 
                    safer, more efficient, and more profitable projects.
                  </p>
                </div>

                {/* Image - Shows after text on mobile, right on desktop */}
                <div className="lg:w-1/2 order-2 mt-8 lg:mt-0">
                  <div className="relative aspect-[4/3] rounded-[5px] overflow-hidden shadow-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"
                      alt="BuildwellAI Office"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#FBB429]/20 to-[#F87866]/20" />
                  </div>
                </div>
              </div>
              
              {/* Feature Cards with Images */}
              <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-16">
                <div className="bg-background dark:bg-[#0a1929] rounded-[5px] overflow-hidden border-2 border-neutral-200 dark:border-neutral-700/50 hover:border-[#FBB429] transition-all duration-300 shadow-lg hover:shadow-2xl">
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
                
                <div className="bg-background dark:bg-[#0a1929] rounded-[5px] overflow-hidden border-2 border-neutral-200 dark:border-neutral-700/50 hover:border-[#FBB429] transition-all duration-300 shadow-lg hover:shadow-2xl">
                  <div className="relative h-48">
                    <Image
                      src="/innov.jpg"
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
                
                <div className="bg-background dark:bg-[#0a1929] rounded-[5px] overflow-hidden border-2 border-neutral-200 dark:border-neutral-700/50 hover:border-[#FBB429] transition-all duration-300 shadow-lg hover:shadow-2xl">
                  <div className="relative h-48">
                    <Image
                      src="/result.jpg"
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

        {/* Journey Timeline Section */}
        <section className="py-20 bg-muted/30 dark:bg-[#0d1f33]">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground dark:text-white mt-4 mb-6">
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">Journey</span>
                </h2>
              </div>
              
              {/* Timeline Item 1 - 2020 */}
              <div className="mb-16">
                <div className="lg:flex lg:items-center lg:gap-12">
                  {/* Image */}
                  <div className="lg:w-1/2">
                    <div className="relative aspect-[4/3] rounded-[5px] overflow-hidden shadow-2xl mb-6 lg:mb-0">
                      <Image
                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                        alt="BuildwellAI Foundation"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Text */}
                  <div className="lg:w-1/2 space-y-4">
                    <h4 className="font-bold text-2xl md:text-3xl text-foreground dark:text-white">
                      2020: The Foundation
                    </h4>
                    <p className="text-lg text-muted-foreground dark:text-neutral-300 leading-relaxed">
                      BuildwellAI was founded with a simple mission: to revolutionize the UK construction industry 
                      through AI-powered solutions. From day one, we set out to tackle the sector's most pressing 
                      challenges with innovative technology.
                    </p>
                    <p className="text-lg text-muted-foreground dark:text-neutral-300 leading-relaxed">
                      Our founding team brought together decades of construction experience with cutting-edge AI expertise, 
                      creating a unique perspective on solving real industry challenges.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 2 - 2021 */}
              <div className="mb-16">
                <div className="lg:flex lg:flex-row-reverse lg:items-center lg:gap-12">
                  {/* Image */}
                  <div className="lg:w-1/2">
                    <div className="relative aspect-[4/3] rounded-[5px] overflow-hidden shadow-2xl mb-6 lg:mb-0">
                      <Image
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                        alt="Team Expansion"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Text */}
                  <div className="lg:w-1/2 space-y-4">
                    <h4 className="font-bold text-2xl md:text-3xl text-foreground dark:text-white">
                      2021: Expansion & Innovation
                    </h4>
                    <p className="text-lg text-muted-foreground dark:text-neutral-300 leading-relaxed">
                      Our team grew with industry experts and AI engineers. We launched BuildwellEYE, our flagship 
                      computer vision platform, transforming how construction sites monitor safety in real-time.
                    </p>
                    <p className="text-lg text-muted-foreground dark:text-neutral-300 leading-relaxed">
                      The successful deployment of BuildwellEYE across multiple UK construction sites validated our 
                      approach and demonstrated the tangible benefits of AI in construction safety.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 3 - 2022 */}
              <div className="mb-16">
                <div className="lg:flex lg:items-center lg:gap-12">
                  {/* Image */}
                  <div className="lg:w-1/2">
                    <div className="relative aspect-[4/3] rounded-[5px] overflow-hidden shadow-2xl mb-6 lg:mb-0">
                      <Image
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                        alt="Product Development"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Text */}
                  <div className="lg:w-1/2 space-y-4">
                    <h4 className="font-bold text-2xl md:text-3xl text-foreground dark:text-white">
                      2022: Building the Suite
                    </h4>
                    <p className="text-lg text-muted-foreground dark:text-neutral-300 leading-relaxed">
                      We expanded our product portfolio with BuildwellTHREAD for golden thread documentation management 
                      and BuildwellINSPECT for mobile-first site inspections, addressing the complete project lifecycle.
                    </p>
                    <p className="text-lg text-muted-foreground dark:text-neutral-300 leading-relaxed">
                      This expansion reflected our deep understanding of construction workflows and enabled seamless 
                      information flow across all project stages and stakeholders.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 4 - 2024 */}
              <div>
                <div className="lg:flex lg:flex-row-reverse lg:items-center lg:gap-12">
                  {/* Image */}
                  <div className="lg:w-1/2">
                    <div className="relative aspect-[4/3] rounded-[5px] overflow-hidden shadow-2xl mb-6 lg:mb-0">
                      <Image
                        src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80"
                        alt="Future Vision"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Text */}
                  <div className="lg:w-1/2 space-y-4">
                    <h4 className="font-bold text-2xl md:text-3xl text-foreground dark:text-white">
                      2024: Leading the Future
                    </h4>
                    <p className="text-lg text-muted-foreground dark:text-neutral-300 leading-relaxed">
                      Today, BuildwellAI serves construction professionals across the UK with a comprehensive AI platform. 
                      We're pioneering new frontiers with BuildwellCHAT and BuildwellNEWS while setting new industry standards.
                    </p>
                    <p className="text-lg text-muted-foreground dark:text-neutral-300 leading-relaxed">
                      With over 100 active projects and a 60% improvement in safety outcomes, our focus extends to 
                      predictive analytics and AI-powered decision support systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-background dark:bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866] uppercase tracking-wider">
                  Our Team
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground dark:text-white mt-4 mb-6">
                  Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">Experts</span> Behind BuildwellAI
                </h2>
                <p className="text-lg text-muted-foreground dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
                  A diverse team of AI specialists, construction experts, and industry professionals
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {[
                  {
                    name: "Ben Smallwood",
                    role: "CEO & Founder",
                    description: "Former construction project manager with 15+ years experience, now leading BuildwellAI's vision for safer, smarter construction sites.",
                    image: "/ben_smallwood.jpg"
                  },
                  {
                    name: "Thomas Alberto",
                    role: "Head of Research and Development",
                    description: "AI researcher specializing in computer vision and machine learning, driving innovation in construction safety technology.",
                    image: "/thomas_alberto.jpg"
                  },
                  {
                    name: "Jad El Tounsi",
                    role: "Head of Engineering",
                    description: "Software architect with expertise in scalable cloud platforms, ensuring BuildwellAI delivers reliable enterprise solutions.",
                    image: "/jad_el_tounsi.jpg"
                  },
                  {
                    name: "Badr Otky",
                    role: "Head of Product",
                    description: "Product strategist focused on user experience, ensuring every BuildwellAI tool solves real construction challenges.",
                    image: "/badr_otky.jpg"
                  },
                  {
                    name: "Jermouni Choukri",
                    role: "Head of Safety & Compliance",
                    description: "Former HSE inspector ensuring our solutions meet all UK construction safety regulations and standards.",
                    image: "/jermouni_choukri.jpg"
                  },
                  {
                    name: "Baddredin Bendriss",
                    role: "Head of Customer Success",
                    description: "Dedicated to client partnerships, ensuring BuildwellAI delivers measurable value and exceptional support.",
                    image: "/baddredin_bendriss.jpg"
                  },
                     {
                    name: "Hamza ",
                    role: "Head of Customer Success",
                    description: "Dedicated to client partnerships, ensuring BuildwellAI delivers measurable value and exceptional support.",
                    image: "/hamza.jpg"
                  },  {
                    name: "Oussama Alouche ",
                    role: "Frontend Engineer",
                    description: "Passionate about crafting seamless user experiences, Oussama brings designs to life with clean, efficient code.",
                    image: "/oussama_alouche.jpg"
                  },
                    {
                    name: "Oumaima El Hakim ",
                    role: "Head of Customer Success",
                    description: "Dedicated to client partnerships, ensuring BuildwellAI delivers measurable value and exceptional support.",
                    image: "/oumaima_el_hakim.jpg"
                  }
                  
                  

                
                ].map((member, index) => (
                  <div key={index} className="bg-background dark:bg-[#0a1929] rounded-[5px] overflow-hidden border-2 border-neutral-200 dark:border-neutral-700/50 hover:border-[#FBB429] transition-all duration-300 shadow-lg hover:shadow-2xl group">
                    <div className="relative h-64">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl font-bold text-foreground dark:text-white mb-1">{member.name}</h3>
                      <p className="text-[#FBB429] font-semibold mb-3 text-sm">{member.role}</p>
                      <p className="text-muted-foreground dark:text-neutral-300 text-sm leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30 dark:bg-[#0d1f33]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866] uppercase tracking-wider">
                  Our Values
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground dark:text-white mt-4 mb-6">
                  The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">Principles</span> That Guide Us
                </h2>
                <p className="text-lg text-muted-foreground dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
                  Everything we do is guided by these core values
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div className="bg-background dark:bg-[#0a1929] p-6 md:p-8 rounded-[5px] border-2 border-neutral-200 dark:border-neutral-700/50 hover:border-[#FBB429] transition-all duration-300 hover:shadow-xl group">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground dark:text-white mb-4">Safety First</h3>
                  <p className="text-muted-foreground dark:text-neutral-300 leading-relaxed">
                    Every solution we develop prioritises worker safety and regulatory compliance, 
                    helping construction sites become safer environments for everyone.
                  </p>
                </div>
                <div className="bg-background dark:bg-[#0a1929] p-6 md:p-8 rounded-[5px] border-2 border-neutral-200 dark:border-neutral-700/50 hover:border-[#FBB429] transition-all duration-300 hover:shadow-xl group">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground dark:text-white mb-4">Transparency</h3>
                  <p className="text-muted-foreground dark:text-neutral-300 leading-relaxed">
                    We believe in clear communication, honest partnerships, and transparent 
                    processes that build trust with our clients and stakeholders.
                  </p>
                </div>
                <div className="bg-background dark:bg-[#0a1929] p-6 md:p-8 rounded-[5px] border-2 border-neutral-200 dark:border-neutral-700/50 hover:border-[#FBB429] transition-all duration-300 hover:shadow-xl group">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground dark:text-white mb-4">Continuous Learning</h3>
                  <p className="text-muted-foreground dark:text-neutral-300 leading-relaxed">
                    The construction industry evolves rapidly, and so do we. We're committed 
                    to staying at the forefront of both industry trends and technological advances.
                  </p>
                </div>
                <div className="bg-background dark:bg-[#0a1929] p-6 md:p-8 rounded-[5px] border-2 border-neutral-200 dark:border-neutral-700/50 hover:border-[#FBB429] transition-all duration-300 hover:shadow-xl group">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground dark:text-white mb-4">Sustainability</h3>
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
            <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/70 to-[#000000]/70" />
          </div>
          
          {/* Content */}
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">Transform</span> Your Projects?
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                Join hundreds of construction professionals who trust BuildwellAI to 
                deliver smarter, safer, and more efficient building solutions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/contact">
                  <button className="group bg-gradient-to-r from-[#FBB429] to-[#F87866] text-white px-8 py-4 rounded-[5px] font-semibold hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto">
                    Get In Touch
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </a>
                <a href="/#solutions">
                  <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-[5px] font-semibold hover:bg-white/20 transition-all border-2 border-white/30 w-full sm:w-auto">
                    View Solutions
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