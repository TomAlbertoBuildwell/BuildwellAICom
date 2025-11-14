"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MarketingNav } from "@/components/marketing-nav"
import { MarketingFooter } from "@/components/marketing-footer"
import { CheckCircle, ArrowRight, ChevronDown } from "lucide-react"

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const plans = [
    {
      name: "Starter",
      price: "On Enquiry",
      description: "Perfect for small projects and independent inspectors",
      features: [
        "Up to 5 active projects",
        "BuildwellTHREAD access (1,000 docs/month)",
        "BuildwellEYE basic plan checking",
        "BuildwellINSPECT certification tracking",
        "BuildwellCHAT AI assistant (100 queries/month)",
        "BuildwellNEWS alerts",
        "PDF report generation",
        "Email support",
        "Mobile app access",
      ],
      cta: "Book a Demo",
      popular: false,
    },
    {
      name: "Professional",
      price: "On Enquiry",
      description: "Ideal for growing teams and multiple projects",
      features: [
        "Up to 25 active projects",
        "BuildwellTHREAD unlimited docs",
        "BuildwellEYE advanced plan checking",
        "BuildwellINSPECT AI verification",
        "BuildwellCHAT unlimited queries",
        "BuildwellNEWS priority alerts",
        "Golden thread linking",
        "Team collaboration tools",
        "Priority support",
        "API access",
        "Custom branding",
      ],
      cta: "Book a Demo",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "On Enquiry",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited projects across all products",
        "Full BuildwellAI suite access",
        "Custom AI training for your projects",
        "Dedicated account manager",
        "Custom integrations",
        "SLA guarantee (99.9% uptime)",
        "On-premise deployment option",
        "Advanced security features",
        "White-label options",
        "24/7 priority support",
      ],
      cta: "Book a Meeting",
      popular: false,
    },
  ]

  const faqs = [
    {
      question: "How does AI enhance my team's work across all BuildwellAI products?",
      answer: "Our AI handles time-consuming tasks like document sorting (BuildwellTHREAD), plan checking (BuildwellEYE), and certification verification (BuildwellINSPECT), but your team always makes the final decisions. BuildwellCHAT provides instant answers while BuildwellNEWS keeps you updated on industry changes.",
    },
    {
      question: "Can I use individual products or do I need the full suite?",
      answer: "You can start with individual products or choose a package that includes multiple solutions. Professional and Enterprise plans give you access to the full suite at better value. Book a demo to discuss what combination works best for your needs.",
    },
    {
      question: "What's included in BuildwellTHREAD document processing?",
      answer: "BuildwellTHREAD includes automatic classification, tagging, metadata extraction, duplicate detection, and golden thread linking. It organizes all your construction documentation intelligently, making compliance tracking effortless.",
    },
    {
      question: "How does BuildwellEYE plan checking work?",
      answer: "BuildwellEYE uses AI to compare as-built conditions against approved plans, identifying discrepancies automatically. Your inspectors review and validate findings, ensuring accuracy while saving hours of manual comparison work.",
    },
    {
      question: "What can BuildwellINSPECT verify?",
      answer: "BuildwellINSPECT automatically verifies product certifications, fire safety documentation, and compliance certificates. It cross-references databases and flags expired or missing certifications, with human oversight for all critical decisions.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col dark:bg-background">
      <MarketingNav />

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">Pricing</span> for Every Team Size
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Choose the plan that fits your needs. Book a demo to see how our complete AI suite can enhance your team's compliance workflow. 
            All plans include human-in-the-loop AI features with professional verification from our compliance team.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative flex flex-col border-2 rounded-[5px] shadow-lg transition-all duration-300 ${
                plan.popular 
                  ? "border-[#FBB429] lg:scale-105 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(251,180,41,0.3)]" 
                  : "border-neutral-200 dark:border-neutral-700/50 hover:border-[#FBB429] hover:shadow-2xl hover:scale-105"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-auto">
                  <Badge className="bg-gradient-to-r from-[#FBB429] to-[#F87866] text-white border-0 px-3 py-1 text-xs whitespace-nowrap">
                    Most Popular
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl font-display font-bold">{plan.name}</CardTitle>
                <CardDescription className="mt-2 text-sm">{plan.description}</CardDescription>
                <div className="mt-6">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="font-display text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">{plan.price}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col space-y-6 px-6 pb-8">
                <ul className="flex-1 space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 shrink-0 text-success-green mt-0.5" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block">
                  <Button
                    className={`w-full rounded-[5px] transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-[#FBB429] to-[#F87866] text-white hover:opacity-90 hover:scale-105"
                        : "bg-transparent border-2 hover:bg-muted hover:scale-105"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            All prices exclude VAT. Annual billing available with 20% discount. Custom pricing for large deployments.
          </p>
        </div>
      </section>

      {/* Product Suite Features */}
      <section className="border-t border-border bg-muted/30 dark:bg-[#0d1f33] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              {/* Title for mobile */}
              <div className="lg:hidden space-y-4">
                <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground dark:text-white">
                  Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">BuildwellAI Suite</span>
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  All plans include human-in-the-loop AI across our product range
                </p>
              </div>

              {/* Image */}
              <div className="lg:order-1">
                <div className="aspect-4/3 overflow-hidden rounded-[5px] border-2 border-neutral-200 dark:border-neutral-700/50 bg-muted shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                    alt="Team collaborating with AI tools"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="lg:order-2 space-y-6">
                {/* Title for desktop */}
                <div className="hidden lg:block">
                  <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground dark:text-white">
                    Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">BuildwellAI Suite</span>
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                    All plans include human-in-the-loop AI across our product range
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      title: "BuildwellTHREAD",
                      description: "AI document sorting and golden thread management with human review",
                    },
                    {
                      title: "BuildwellEYE",
                      description: "Automated plan checking with inspector validation",
                    },
                    {
                      title: "BuildwellINSPECT",
                      description: "Certification verification with compliance officer approval",
                    },
                    {
                      title: "BuildwellCHAT",
                      description: "AI assistant trained on UK regulations with source references",
                    },
                    {
                      title: "BuildwellNEWS",
                      description: "Real-time alerts on regulations, safety, and industry updates",
                    },
                  ].map((feature, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[5px] bg-gradient-to-r from-[#FBB429] to-[#F87866]">
                        <CheckCircle className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold text-foreground dark:text-white mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground dark:text-neutral-300 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-20 bg-background dark:bg-background">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-12">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">Questions</span>
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-2 border-neutral-200 dark:border-neutral-700/50 hover:border-[#FBB429] transition-all duration-300 overflow-hidden rounded-[5px] p-0">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <h3 className="font-semibold text-base pr-4">{faq.question}</h3>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </Card>
            ))}
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
              Ready to See BuildwellAI in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">Action</span>?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Book a personalized demo to see how our AI-powered suite can enhance your team's compliance workflow. 
              We'll discuss your specific needs and help you choose the right plan.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="bg-gradient-to-r from-[#FBB429] to-[#F87866] text-white hover:opacity-90 rounded-[5px] w-full">
                  Book Your Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  )
}