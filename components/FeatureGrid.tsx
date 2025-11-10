"use client"

import { CheckCircle, ArrowRight, Star } from "lucide-react"
import Link from "next/link"

interface FeatureGridProps {
  features: Array<{
    title: string
    description: string
    icon: React.ReactNode
    image: string
    alt: string
  }>
}

export function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <section className="py-20 bg-muted/30 dark:bg-[#0d1f33]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground dark:text-white">
              Our Complete AI Suite
            </h2>
            <p className="text-lg text-muted-foreground dark:text-neutral-300 mt-4 max-w-2xl mx-auto">
              Five powerful AI solutions working together to transform your construction projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-background dark:bg-[#0a1929] p-6 rounded-lg border border-border hover:border-[#FBB429] transition-all duration-300 hover:shadow-xl group"
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-[#FBB429] to-[#F87866] p-[2px] mb-4">
                  <div className="w-full h-full bg-background dark:bg-[#0a1929] rounded-[6px] flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-foreground dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground dark:text-neutral-300 leading-relaxed mb-4">
                  {feature.description}
                </p>

                <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                  <img
                    src={feature.image}
                    alt={feature.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-[#FBB429] group-hover:gap-3 transition-all">
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
