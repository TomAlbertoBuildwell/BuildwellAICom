"use client"

import { useRef, useEffect } from "react"
import { MessageSquare, Zap, Shield, Clock } from "lucide-react"

export function ChatShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Auto-play was prevented:", error)
      })
    }
  }, [])

  const features = [
    {
      icon: MessageSquare,
      title: "Instant Answers",
      description: "Get immediate responses to construction queries"
    },
    {
      icon: Zap,
      title: "Smart Context",
      description: "AI understands your project context"
    },
    {
      icon: Shield,
      title: "Compliance Ready",
      description: "Answers backed by UK regulations"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Always ready when you need help"
    }
  ]

  return (
    <section className="py-20 bg-background dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866] uppercase tracking-wider">
              BuildwellAI Chat
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground dark:text-white mt-4">
              Your AI Construction Assistant
            </h2>
            <p className="text-lg text-muted-foreground dark:text-neutral-300 mt-4 max-w-2xl mx-auto">
              Get expert answers and guidance powered by advanced AI trained on UK construction standards
            </p>
          </div>

          {/* Video and Features Grid */}
          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-12 lg:items-center">
            {/* Video - Takes 3 columns on desktop, full width on mobile */}
            <div className="lg:col-span-3 lg:order-1">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border-2 border-[#FBB429]/20">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                  autoPlay
                >
                  <source src="https://res.cloudinary.com/drzxliqyz/video/upload/v1762797262/showcasenews_peihce.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* Mobile-only gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
              </div>
            </div>

            {/* Features - Takes 2 columns on desktop, grid on mobile */}
            <div className="lg:col-span-2 lg:order-2">
              {/* Mobile: 2-column grid */}
              <div className="grid grid-cols-2 gap-4 lg:space-y-6 lg:grid-cols-1 lg:gap-0">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-3 lg:gap-4 p-4 lg:p-0 bg-background dark:bg-[#0a1929] lg:bg-transparent rounded-lg lg:rounded-none border border-border lg:border-0 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-[#FBB429]/10 to-[#F87866]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-6 w-6 text-[#FBB429]" />
                    </div>
                    <div>
                      <h3 className="font-display text-base lg:text-lg font-bold text-foreground dark:text-white mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-xs lg:text-sm text-muted-foreground dark:text-neutral-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
