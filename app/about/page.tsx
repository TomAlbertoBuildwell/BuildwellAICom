"use client"

import { useEffect, useRef, useState } from "react"
import { MarketingNav } from "@/components/marketing-nav"
import { MarketingFooter } from "@/components/marketing-footer"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { m } from "framer-motion"

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
                  <div className="font-display text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866] mb-2">Trusted Nationwide</div>
                  <div className="text-sm text-muted-foreground dark:text-neutral-300">By Leading Contractors</div>
                </div>
                <div className="text-center p-6 bg-background dark:bg-[#0a1929] rounded-[5px] border-2 border-neutral-200 dark:border-neutral-700/50 hover:border-[#FBB429] transition-all">
                  <div className="font-display text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866] mb-2">Safer Sites</div>
                  <div className="text-sm text-muted-foreground dark:text-neutral-300">Through Proactive Monitoring</div>
                </div>
                <div className="text-center p-6 bg-background dark:bg-[#0a1929] rounded-[5px] border-2 border-neutral-200 dark:border-neutral-700/50 hover:border-[#FBB429] transition-all">
                  <div className="font-display text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866] mb-2">Always On</div>
                  <div className="text-sm text-muted-foreground dark:text-neutral-300">Continuous AI Protection</div>
                </div>
                <div className="text-center p-6 bg-background dark:bg-[#0a1929] rounded-[5px] border-2 border-neutral-200 dark:border-neutral-700/50 hover:border-[#FBB429] transition-all">
                  <div className="font-display text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866] mb-2">Full Suite</div>
                  <div className="text-sm text-muted-foreground dark:text-neutral-300">Integrated AI Platform</div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="mt-12 relative rounded-[5px] overflow-hidden shadow-2xl">
                <div className="aspect-video relative">
                  <Image
                    src="/sky.png"
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

              {/* Timeline Item 1 - Jan 2022 */}
              <div className="mb-16">
                <div className="lg:flex lg:items-start lg:gap-12">
                  {/* Image */}
                  <div className="lg:w-[45%]">
                    <div className="relative aspect-[4/3] rounded-[5px] overflow-hidden shadow-2xl mb-6 lg:mb-0">
                      <Image
                        src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                        alt="AI Research Foundation"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="lg:w-[55%] lg:pr-8 space-y-4">
                    <h4 className="font-bold text-2xl md:text-3xl text-foreground dark:text-white">
                      January 2022: The Foundation
                    </h4>
                    <p className="text-lg text-muted-foreground dark:text-neutral-300 leading-relaxed text-justify">
                      BuildwellAI was established as an AI research group with a focused mission: investigating how
                      robotic process automation could transform workflows in the construction industry.
                    </p>
                    <p className="text-lg text-muted-foreground dark:text-neutral-300 leading-relaxed text-justify">
                      Our founding research identified critical inefficiencies in construction processes, laying the
                      groundwork for our AI-powered solutions that would address real industry pain points.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 2 - June 2023 - Feb 2024 */}
              <div className="mb-16">
                <div className="lg:flex lg:flex-row-reverse lg:items-start lg:gap-12">
                  {/* Image */}
                  <div className="lg:w-[45%]">
                    <div className="relative aspect-[4/3] rounded-[5px] overflow-hidden shadow-2xl mb-6 lg:mb-0">
                      <Image
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
                        alt="Early AI Development"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="lg:w-[55%] lg:pl-8 space-y-4">
                    <h4 className="font-bold text-2xl md:text-3xl text-foreground dark:text-white">
                      June 2023 - February 2024: Early Innovation
                    </h4>
                    <p className="text-lg text-muted-foreground dark:text-neutral-300 leading-relaxed text-justify">
                      We began leveraging GPT-3 and reinforcement learning to develop basic report generation capabilities,
                      marking our first step into practical AI applications for construction documentation.
                    </p>
                    <p className="text-lg text-muted-foreground dark:text-neutral-300 leading-relaxed text-justify">
                      The creation of our custom GPT models combined with systematic user feedback collection helped us
                      refine our approach and understand real-world construction needs better than ever before.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 3 - Nov 2024 - May 2025 */}
              <div className="mb-16">
                <div className="lg:flex lg:items-start lg:gap-12">
                  {/* Image */}
                  <div className="lg:w-[45%]">
                    <div className="relative aspect-[4/3] rounded-[5px] overflow-hidden shadow-2xl mb-6 lg:mb-0">
                      <Image
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                        alt="Platform Development and Investment"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="lg:w-[55%] lg:pr-8 space-y-4">
                    <h4 className="font-bold text-2xl md:text-3xl text-foreground dark:text-white">
                      November 2024 - May 2025: Strategic Growth
                    </h4>
                    <p className="text-lg text-muted-foreground dark:text-neutral-300 leading-relaxed text-justify">
                      Full rebuild and strategic development of BuildwellCHAT transformed our platform capabilities.
                      In February 2025, we advanced into computer vision development, creating sophisticated AI models
                      for construction safety scenario detection.
                    </p>
                    <p className="text-lg text-muted-foreground dark:text-neutral-300 leading-relaxed text-justify">
                      May 2025 marked a pivotal moment with strategic investment from LBB, validating our technology
                      and vision while providing the resources to accelerate our development roadmap.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 4 - June 2025 & Beyond */}
              <div>
                <div className="lg:flex lg:flex-row-reverse lg:items-start lg:gap-12">
                  {/* Image */}
                  <div className="lg:w-[45%]">
                    <div className="relative aspect-[4/3] rounded-[5px] overflow-hidden shadow-2xl mb-6 lg:mb-0">
                      <Image
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                        alt="Team Growth and Future"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="lg:w-[55%] lg:pl-8 space-y-4">
                    <h4 className="font-bold text-2xl md:text-3xl text-foreground dark:text-white">
                      June 2025: Leading the Future
                    </h4>
                    <p className="text-lg text-muted-foreground dark:text-neutral-300 leading-relaxed text-justify">
                      Following our investment milestone, we expanded our team to its current strength, bringing together
                      top talent in AI engineering, construction technology, and industry expertise.
                    </p>
                    <p className="text-lg text-muted-foreground dark:text-neutral-300 leading-relaxed text-justify">
                      Today, BuildwellAI serves construction professionals across the UK with BuildwellEYE, BuildwellCHAT,
                      and our comprehensive AI platform. We're pioneering the future with advanced computer vision,
                      predictive analytics, and AI-powered decision support systems that are setting new industry standards.
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
                    description: "chartered construction professional with building regulation and insurance experience, now leading BuildwellAI's vision for safer, smarter construction sites.",
                    // Professional mature business man
                    image: "/personalimgs/ben.jpg"
                  },
                  {
                    name: "Giles Fallan",
                    role: "Chairman",
                    description: "A highly experienced construction industry professional and strategic advisor, guiding BuildwellAI's growth and market leadership.",
                    // Professional mature business man
                    image: "/personalimgs/giles.jpg"
                  },
                  {
                    name: "Badr Otky",
                    role: "Chief Technology Officer",
                    description: "A visionary leader in AI and technology, driving innovation and shaping the future of construction intelligence.",
                    // Corporate professional
                    image: "/personalimgs/badr.jpg"
                  },
                  {
                    name: "Thomas Alberto",
                    role: "Head Of Operations",
                    description: "An accomplished leader in operational efficiency and strategic planning, optimizing workflows and ensuring seamless project delivery.",
                    // Tech focused professional
                    image: "/personalimgs/tomm.jpeg",
                    objectPosition: "center 30%"
                  },
                  {
                    name: "Jad El Tounsi",
                    role: "AI Engineer",
                    description: "AI Engineer with expertise in scalable cloud platforms, ensuring BuildwellAI delivers reliable enterprise solutions.",
                    // Corporate professional
                    image: "/personalimgs/jad.jpg"
                  },
                  {
                    name: "Tim Woodgate",
                    role: "Head of Partnerships",
                    description: "A strategic relationship builder with extensive experience forging valuable partnerships, driving business growth and expanding BuildwellAI's industry reach.",
                    // Tech focused professional
                    image: "/personalimgs/tim.jpeg"
                  },

                  {
                    name: "Baddredin Bendriss",
                    role: "Software Engineer",
                    description: "Software Engineer passionate about crafting efficient and scalable solutions, contributing to the core development of BuildwellAI's platform.",
                    // Corporate professional
                    image: "/personalimgs/baddredin.jpg"
                  },


                  {
                    name: "Jermouni Choukri",
                    role: "Full Stack Engineer ",
                    description: "Full Stack Engineer and DevOps specialist, building robust and scalable infrastructure while developing seamless user experiences.",
                    // Experienced senior professional
                    image: "/personalimgs/choukri.jpg"
                  },

                  {
                    name: "Oussama Alouche",
                    role: "Frontend Engineer",
                    description: "Passionate about crafting seamless user experiences, bringing designs to life with clean, efficient code.",
                    // Developer/Creative vibe
                    image: "/personalimgs/oussama.jpg"
                  },
                  {
                    name: "Oumaima El Hakim",
                    role: "Operations Automation Specialist",
                    description: "Operations Automation Specialist with expertise in scalable cloud platforms, ensuring BuildwellAI delivers reliable enterprise solutions.",
                    // Professional woman
                    image: "/personalimgs/oumaima.jpg"
                  },

                  // {
                  //   name: "Hamza El Alaoui El Ismaili",
                  //   role: "Mobile Engineer",
                  //   description: "A skilled Mobile Engineer dedicated to building innovative and user-friendly applications, extending BuildwellAI's powerful platform to every device.",
                  //   image: "/personalimgs/hamzaa.png"
                  // },




                ].map((member, index) => (
                  <div key={index} className="bg-background dark:bg-[#0a1929] rounded-[5px] overflow-hidden border-2 border-neutral-200 dark:border-neutral-700/50 hover:border-[#FBB429] transition-all duration-300 shadow-lg hover:shadow-2xl group">
                    <div className="relative h-80 w-full">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        style={{ objectPosition: member.objectPosition || 'center top' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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