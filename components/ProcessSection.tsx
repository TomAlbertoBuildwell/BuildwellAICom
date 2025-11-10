"use client"

import { Brain, Zap, Shield, TrendingUp } from "lucide-react"

export function ProcessSection() {
  const steps = [
    {
      icon: Brain,
      number: "01",
      title: "Intelligent Analysis",
      description: "Our AI algorithms analyze your project requirements, identifying potential risks and optimization opportunities."
    },
    {
      icon: Zap,
      number: "02",
      title: "Automated Solutions",
      description: "Streamline workflows with intelligent automation that adapts to your team's unique processes and needs."
    },
    {
      icon: Shield,
      number: "03",
      title: "Compliance Assurance",
      description: "Stay ahead of regulations with automated compliance checking and real-time safety monitoring."
    },
    {
      icon: TrendingUp,
      number: "04",
      title: "Continuous Growth",
      description: "Leverage data-driven insights to improve efficiency and make smarter decisions across all projects."
    }
  ]

  return (
    <section className="py-20 bg-muted/30 dark:bg-[#0d1f33]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866] uppercase tracking-wider">
              How It Works
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground dark:text-white mt-4">
              Your Path to Construction Excellence
            </h2>
            <p className="text-lg text-muted-foreground dark:text-neutral-300 mt-4 max-w-2xl mx-auto">
              Our streamlined process ensures you get the most out of AI-powered construction management
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative group"
              >
                {/* Connector Line (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-[#FBB429]/50 to-transparent -translate-x-1/2 z-0" />
                )}
                
                <div className="relative bg-background dark:bg-[#0a1929] p-6 rounded-[5px] border border-border hover:border-[#FBB429] transition-all duration-300 hover:shadow-xl z-10">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-r from-[#FBB429] to-[#F87866] flex items-center justify-center font-bold text-white shadow-lg">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-[5px] bg-gradient-to-r from-[#FBB429]/10 to-[#F87866]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="h-8 w-8 text-[#FBB429]" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-display text-xl font-bold text-foreground dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground dark:text-neutral-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
