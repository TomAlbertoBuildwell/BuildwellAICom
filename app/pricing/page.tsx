"use client"

import { useState } from "react"
import Link from "next/link"
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
    {
      question: "How is BuildwellCHAT different from other AI chatbots?",
      answer: "BuildwellCHAT is trained specifically on UK building regulations, construction standards, and your project documentation. It provides contextual answers with source references, helping your team find information instantly without leaving the platform.",
    },
    {
      question: "What type of alerts does BuildwellNEWS provide?",
      answer: "BuildwellNEWS monitors regulatory changes, safety notices, product recalls, and industry updates relevant to your projects. You receive prioritized alerts based on your active projects and can customize notification preferences.",
    },
    {
      question: "Do you offer training for my team?",
      answer: "Yes! All plans include comprehensive onboarding training for each product you use. Professional and Enterprise plans include ongoing training sessions, documentation, and dedicated support to ensure your team maximizes platform benefits.",
    },
    {
      question: "Can I change plans later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any charges. Book a meeting to discuss the best plan for your evolving needs.",
    },
    {
      question: "What happens to my data if I cancel?",
      answer: "You can export all your data at any time in standard formats (PDF, CSV, JSON). After cancellation, we retain your data for 90 days before permanent deletion, giving you plenty of time to migrate if needed.",
    },
    {
      question: "Is there a minimum contract period?",
      answer: "Starter and Professional plans are month-to-month with no long-term commitment. Enterprise plans typically include annual contracts with better pricing and dedicated support. Contact us to discuss flexible options.",
    },
    {
      question: "How secure is my project data across all products?",
      answer: "We use bank-level encryption for data in transit and at rest. All data is stored in ISO 27001 certified UK data centers with regular security audits. You maintain full ownership and can control access through role-based permissions across all products.",
    },
    {
      question: "Can I integrate BuildwellAI products with my existing tools?",
      answer: "Yes! Professional and Enterprise plans include API access for integrations with popular construction management platforms like Procore, BIM 360, Aconex, and Viewpoint. We also offer custom integrations for Enterprise clients.",
    },
    {
      question: "Do you offer discounts for multiple users or annual contracts?",
      answer: "Absolutely! We offer a 20% discount on annual billing for all plans. Volume discounts are available for teams with 10+ users. Enterprise plans include custom pricing based on your specific requirements and scale.",
    },
    {
      question: "What's the difference between Basic and Advanced plan checking in BuildwellEYE?",
      answer: "Basic plan checking handles standard comparisons and measurements. Advanced includes 3D model analysis, automated dimension verification, material specification checking, and integration with BIM workflows for complex projects.",
    },
    {
      question: "Can BuildwellTHREAD handle legacy documentation from past projects?",
      answer: "Yes! BuildwellTHREAD can process and organize historical documentation. We offer bulk upload and AI-assisted classification for legacy files. Enterprise plans include migration support for large document libraries.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-[#0a1929]">
      <MarketingNav />

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-5xl font-bold leading-tight tracking-tight md:text-6xl">
            Transparent <span className="text-gradient-orange">Pricing</span> for Every Team Size
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Choose the plan that fits your needs. Book a demo to see how our complete AI suite can enhance your team's compliance workflow. 
            All plans include human-in-the-loop AI features with professional verification from our compliance team.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative flex flex-col border-border $  {plan.popular ? "border-primary shadow-lg scale-105" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-orange text-white">Most Popular</Badge>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
                <div className="mt-6">
                  <div className="font-display text-4xl font-bold">{plan.price}</div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col space-y-6">
                <ul className="flex-1 space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 shrink-0 text-success-green mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block">
                  <Button
                    className={`w-full ${
                      plan.popular ? "bg-gradient-orange text-white hover:brightness-110" : "bg-transparent"
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
      <section className="border-t border-border bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              Complete <span className="text-gradient-orange">BuildwellAI Suite</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              All plans include human-in-the-loop AI across our product range
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
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
              {
                title: "API Access",
                description: "Integrate with your existing construction management tools",
              },
            ].map((feature, index) => (
              <Card key={index} className="border-border text-center">
                <CardContent className="pt-6">
                  <CheckCircle className="h-12 w-12 text-success-green mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold tracking-tight md:text-4xl mb-12">
            Frequently Asked <span className="text-gradient-orange">Questions</span>
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-border overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between transition-colors hover:bg-muted/50"
                >
                  <h3 className="font-semibold text-base pr-4">{faq.question}</h3>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openFaq === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-4 pt-0">
                      <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              Ready to See BuildwellAI in Action?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Book a personalized demo to see how our AI-powered suite can enhance your team's compliance workflow. 
              We'll discuss your specific needs and help you choose the right plan.
            </p>
            <div className="mt-8">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-orange text-white hover:brightness-110">
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
