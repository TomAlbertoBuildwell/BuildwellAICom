"use client"

import { Eye, FileSearch, Newspaper, MessageSquare, GitMerge } from "lucide-react"
import Link from "next/link"

export function ProductHighlight() {
  const products = [
    {
      icon: MessageSquare,
      name: "BuildwellAI Chat",
      tagline: "Your intelligent construction assistant",
      description: "Ask questions, get expert answers, and solve problems with AI trained on UK construction standards and regulations.",
      link: "https://chat.buildwellai.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Eye,
      name: "Buildwell EYE",
      tagline: "AI-powered visual inspection",
      description: "Detect safety hazards, compliance issues, and quality concerns automatically from site photos and videos.",
      link: "https://eye.buildwellai.com",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FileSearch,
      name: "Buildwell INSPECT",
      tagline: "Intelligent document analysis",
      description: "Analyze construction documents, contracts, and specifications with AI-powered insights and compliance checking.",
      link: "https://inspect.buildwellai.com",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Newspaper,
      name: "BuildwellAI NEWS",
      tagline: "Stay informed and compliant",
      description: "Get personalized construction industry news, regulation updates, and insights tailored to your projects.",
      link: "https://news.buildwellai.com",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: GitMerge,
      name: "BuildwellTHREAD",
      tagline: "Connect your construction ecosystem",
      description: "Integrate all your tools and data sources into one intelligent platform for seamless project management.",
      link: "https://thread.buildwellai.com",
      color: "from-indigo-500 to-violet-500"
    }
  ]

  return (
    <section className="py-20 bg-muted/30 dark:bg-[#0d1f33]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground dark:text-white">
              Our Complete AI Suite
            </h2>
            <p className="text-lg text-muted-foreground dark:text-neutral-300 mt-4 max-w-2xl mx-auto">
              Five powerful AI solutions working together to transform your construction projects
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Link
                key={index}
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group bg-background dark:bg-[#0a1929] p-6 rounded-[5px] border border-border hover:border-[#FBB429] transition-all duration-300 hover:shadow-xl ${
                  index === products.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Icon with gradient background */}
                <div className={`w-14 h-14 rounded-[5px] bg-gradient-to-r ${product.color} p-[2px] mb-4`}>
                  <div className="w-full h-full bg-background dark:bg-[#0a1929] rounded-[4px] flex items-center justify-center">
                    <product.icon className="h-7 w-7 text-foreground dark:text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-foreground dark:text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866] mb-3">
                  {product.tagline}
                </p>
                <p className="text-sm text-muted-foreground dark:text-neutral-300 leading-relaxed">
                  {product.description}
                </p>

                {/* Arrow indicator */}
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[#FBB429] group-hover:gap-3 transition-all">
                  <span>Learn more</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
