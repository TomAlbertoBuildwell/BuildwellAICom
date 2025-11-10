"use client"

import { TrendingUp, Building2, Users2, CheckCircle, Star } from "lucide-react"

export function TestimonialsOutcomes() {
  const outcomes = [
    {
      icon: <Building2 className="h-8 w-8" />,
      value: '500+',
      label: 'Projects Managed',
      description: 'Successfully delivered using our platform'
    },
    {
      icon: <Users2 className="h-8 w-8" />,
      value: '10,000+',
      label: 'Industry Professionals',
      description: 'Trust BuildwellAI daily'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      value: '40%',
      label: 'Time Saved',
      description: 'On compliance and documentation'
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      value: '99.9%',
      label: 'Compliance Rate',
      description: 'Meeting Building Safety Act standards'
    }
  ]

  const testimonials = [
    {
      quote: "BuildwellAI transformed our compliance process. What used to take days now happens in minutes.",
      author: "Sarah Johnson",
      role: "Compliance Officer",
      company: "Major Construction Ltd",
      rating: 5
    },
    {
      quote: "The AI chatbot is incredible. It answers questions instantly and cites the exact regulations.",
      author: "Mike Chen",
      role: "Project Manager",
      company: "Urban Developments",
      rating: 5
    },
    {
      quote: "Golden Thread management was a nightmare before BuildwellAI. Now it's automated and foolproof.",
      author: "Emma Thompson",
      role: "Safety Director",
      company: "Infrastructure Builders",
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-muted/30 dark:bg-[#0d1f33]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Outcomes Stats */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground dark:text-white mb-4">
              Real Results from Real Projects
            </h2>
            <p className="text-lg text-muted-foreground dark:text-neutral-300 max-w-2xl mx-auto">
              Join thousands of construction professionals who are transforming their projects with BuildwellAI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {outcomes.map((outcome, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#FBB429] to-[#F87866]">
                    <div className="text-white">
                      {outcome.icon}
                    </div>
                  </div>
                </div>
                <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                  {outcome.value}
                </div>
                <div className="font-semibold text-lg mb-1">
                  {outcome.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {outcome.description}
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-background dark:bg-[#0a1929] p-6 rounded-lg border border-border">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-foreground dark:text-white mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-foreground dark:text-white">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground dark:text-neutral-300">{testimonial.role}</div>
                  <div className="text-sm text-muted-foreground dark:text-neutral-300">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
