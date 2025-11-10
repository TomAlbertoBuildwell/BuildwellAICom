"use client"

import { Award, Users, Globe, TrendingUp } from "lucide-react"

export function TrustSection() {
  const metrics = [
    {
      icon: Award,
      label: "Industry Recognition",
      description: "Leading AI construction solutions"
    },
    {
      icon: Users,
      label: "Expert Team",
      description: "Construction & AI specialists"
    },
    {
      icon: Globe,
      label: "UK-Wide Coverage",
      description: "Supporting projects nationwide"
    },
    {
      icon: TrendingUp,
      label: "Continuous Innovation",
      description: "Always improving our technology"
    }
  ]

  return (
    <section className="py-20 bg-muted/30 dark:bg-[#0d1f33]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground dark:text-white">
              Trusted by Construction Professionals
            </h2>
            <p className="text-lg text-muted-foreground dark:text-neutral-300 mt-4 max-w-2xl mx-auto">
              We're committed to delivering excellence in every aspect of our service
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div 
                key={index}
                className="group bg-background dark:bg-[#0a1929] p-8 rounded-[5px] border border-border hover:border-[#FBB429] transition-all duration-300 hover:shadow-xl text-center"
              >
                {/* Icon */}
                <div className="w-16 h-16 mx-auto rounded-[5px] bg-gradient-to-r from-[#FBB429]/10 to-[#F87866]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <metric.icon className="h-8 w-8 text-[#FBB429]" />
                </div>
                
                {/* Content */}
                <h3 className="font-display text-xl font-bold text-foreground dark:text-white mb-2">
                  {metric.label}
                </h3>
                <p className="text-sm text-muted-foreground dark:text-neutral-300">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
