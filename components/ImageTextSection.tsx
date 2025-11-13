"use client"

import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export function ImageTextSection() {
  const benefits = [
    "AI-powered compliance checking",
    "Real-time project monitoring",
    "Automated safety protocols",
    "Seamless team collaboration"
  ]

  return (
    <section className="pt-40 mt-20 md:mt-32 pb-20 bg-background dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto lg:flex lg:items-center lg:gap-12">
          {/* Text Content - Left on Desktop */}
          <div className="space-y-6 lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
              <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866] uppercase tracking-wider">
                Transforming Construction
              </span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground dark:text-white text-center lg:text-left">
              Building Smarter with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">
                AI Technology
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground dark:text-neutral-300 leading-relaxed">
              BuildwellAI combines cutting-edge artificial intelligence with deep construction industry expertise to deliver solutions that streamline operations, ensure compliance, and enhance safety across every project phase.
            </p>

            {/* Image - Shows after text on mobile */}
            <div className="relative lg:hidden my-8">
              <div className="relative aspect-square rounded-[5px] overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
                  alt="BuildwellAI Technology"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FBB429]/20 to-[#F87866]/20" />
              </div>
            </div>

            {/* Benefits List */}
            <div className="space-y-3 pt-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#FBB429] flex-shrink-0" />
                  <span className="text-foreground dark:text-white font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Link href="/about" className="block lg:inline-block">
                <button className="group bg-gradient-to-r from-[#FBB429] to-[#F87866] text-white px-8 py-4 rounded-[5px] font-semibold hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-2 w-full lg:w-auto">
                  Learn More About Us
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>

          {/* Image - Shows on right on desktop */}
          <div className="relative lg:w-1/2 hidden lg:block">
            <div className="relative aspect-square rounded-[5px] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
                alt="BuildwellAI Technology"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FBB429]/20 to-[#F87866]/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}