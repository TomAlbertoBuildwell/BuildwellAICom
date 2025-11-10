"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MarketingNav } from "@/components/marketing-nav"
import { MarketingFooter } from "@/components/marketing-footer"
import { Mail, Phone, Send, ChevronDown } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "How quickly will I get a response?",
      answer: "We aim to respond to all inquiries within 24 hours during business days (Monday-Friday, 9am-6pm GMT). For urgent matters, please call us directly.",
    },
    {
      question: "What information should I include in my message?",
      answer: "Tell us about your project, team size, specific challenges you're facing, and which BuildwellAI products interest you. The more details you provide, the better we can assist you.",
    },
    {
      question: "Is BuildwellAI suitable for small teams?",
      answer: "Yes! We have plans designed for teams of all sizes, from independent inspectors to large construction firms. Our solutions scale to meet your needs.",
    },
    {
      question: "Can I schedule a product demo?",
      answer: "Absolutely! Mention in your message that you'd like to see a demo, and we'll arrange a personalized session at a time that works for you.",
    },
    {
      question: "Do you offer technical support?",
      answer: "Yes, we provide comprehensive technical support for all our customers. Contact us for assistance with implementation, troubleshooting, or any questions about our platform.",
    },
    {
      question: "What makes BuildwellAI different from other construction software?",
      answer: "BuildwellAI combines cutting-edge AI technology with deep construction industry expertise. Our solutions are specifically designed for UK building regulations and the Golden Thread of Information requirements.",
    },
    {
      question: "Do you offer training for teams?",
      answer: "Yes, we provide comprehensive onboarding and training sessions for all team members. We'll ensure everyone is comfortable using the platform and maximizing its potential.",
    },
    {
      question: "Can BuildwellAI integrate with our existing systems?",
      answer: "Our platform offers robust API integrations and can work alongside your current project management, document management, and compliance systems. Contact us to discuss your specific integration needs.",
    },
    {
      question: "Is my data secure with BuildwellAI?",
      answer: "Absolutely. We use enterprise-grade security, including end-to-end encryption, secure cloud storage, and compliance with UK data protection regulations including GDPR.",
    },
    {
      question: "What industries do you serve?",
      answer: "While we specialize in UK construction, our solutions are used across residential, commercial, infrastructure, and public sector building projects. We work with contractors, developers, building control, and inspectors.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-[#0a1929]">
      <MarketingNav />

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-5xl font-bold leading-tight tracking-tight md:text-6xl">
            Get in <span className="text-gradient-orange">Touch</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Ready to transform your construction projects with AI? Our team is here to help. 
            Whether you have questions, need support, or want to learn more about our solutions.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Why Book a Meeting */}
          <div className="space-y-6 lg:col-span-1">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-xl">Why Contact Us?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Expert consultation on AI solutions",
                  "Custom implementation for your projects",
                  "Technical support and guidance",
                  "Tailored pricing for your team",
                  "Product demonstrations",
                  "Partnership opportunities",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Send className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-orange">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="mt-4">Email Us</CardTitle>
                <CardDescription>Quick questions? Send us an email</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="mailto:hello@buildwellai.com" className="font-sans text-primary hover:underline">
                  hello@buildwellai.com
                </a>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-orange">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="mt-4">Call Us</CardTitle>
                <CardDescription>Monday to Friday, 9am to 6pm GMT</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="tel:+442012345678" className="font-sans text-primary hover:underline">
                  +44 20 1234 5678
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and our team will get back to you within 24 hours. 
                  We're excited to hear about your project and how we can help.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-muted/50 border-input dark:bg-muted dark:border-white/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Work Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-muted/50 border-input dark:bg-muted dark:border-white/20"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company *</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your Company Ltd"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="bg-muted/50 border-input dark:bg-muted dark:border-white/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+44 20 1234 5678"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-muted/50 border-input dark:bg-muted dark:border-white/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 flex-1 flex flex-col">
                    <Label htmlFor="message">Your Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project, questions, or how we can help you..."
                      className="flex-1 min-h-[150px] resize-none bg-muted/50 border-input dark:bg-muted dark:border-white/20"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="rounded-lg border border-muted bg-muted/30 p-4">
                    <p className="text-sm text-muted-foreground">
                      By submitting this form, you agree to be contacted by BuildwellAI. 
                      We respect your privacy and will never share your information.
                    </p>
                  </div>

                  {submitted && (
                    <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-4 text-green-600 dark:text-green-400">
                      <strong>Thank you for reaching out!</strong> We've received your message and will get back to you within 24 hours.
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-orange text-white hover:brightness-110 md:w-auto"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              Frequently Asked <span className="text-gradient-orange">Questions</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Quick answers to common questions about contacting us
            </p>
          </div>

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

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:contact@buildwellai.com">Contact Support</a>
            </Button>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  )
}
