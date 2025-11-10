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
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Video - Takes 3 columns */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <div className="relative aspect-video rounded-[5px] overflow-hidden shadow-2xl border border-border">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                  autoPlay
                >
                  <source src="https://res.cloudinary.com/drzxliqyz/video/upload/v1762606241/WhatsApp_Video_2025-11-07_at_18.14.45_6913d34a_wrpesi.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Features - Takes 2 columns */}
            <div className="lg:col-span-2 space-y-6 order-1 lg:order-2">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-[5px] bg-gradient-to-r from-[#FBB429]/10 to-[#F87866]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-[#FBB429]" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground dark:text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground dark:text-neutral-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
