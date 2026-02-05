"use client"

import { useState } from "react"
import { Button } from "@/components/frontpagechat/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/frontpagechat/ui/card"
import { Input } from "@/components/frontpagechat/ui/input"
import { Textarea } from "@/components/frontpagechat/ui/textarea"
import { Label } from "@/components/frontpagechat/ui/label"
import { ChatNavbar } from "@/components/frontpagechat/ChatNavbar"
import { MarketingFooter } from "@/components/frontpagechat/marketing/marketing-footer"
import { Mail, Phone, Send, ChevronDown, MessageSquare } from "lucide-react"

export default function ChatContactPage() {
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
        console.log("Chat Contact Form submitted:", formData)
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
            question: "I have a technical question about the Chat API.",
            answer: "Great! Our engineering team is ready to help with integration questions. Please specify 'API Integration' in your message.",
        },
        {
            question: "Do you offer demos for the Enterprise Chat solution?",
            answer: "Yes, we can demonstrate how BuildwellCHAT Enterprise can be trained on your organization's specific private data securely.",
        },
        {
            question: "How do I report an incorrect answer from the AI?",
            answer: "You can flag responses directly within the chat interface using the thumbs-down icon. For persistent issues, please contact support here with details.",
        },
        {
            question: "Can I request features for the Mobile App?",
            answer: "We love user feedback! Please let us know what features would make your on-site work easier.",
        },
        {
            question: "Billing assistance for Pro subscriptions?",
            answer: "For billing inquiries, invoices, or plan changes, please include your account email in the form below.",
        },
    ]

    return (
        <div className="flex min-h-screen flex-col bg-white dark:bg-[#0a1929]">
            <ChatNavbar />

            {/* Hero Section */}
            <section className="container mx-auto px-4 pt-32 pb-20">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="font-['Big_Shoulders_Display'] text-5xl font-bold leading-tight tracking-tight md:text-6xl">
                        Chat <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">Support</span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                        Need help with BuildwellCHAT? Our team is available to assist with technical queries, account management, and enterprise integrations.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="container mx-auto px-4 pb-20">
                <div className="grid gap-12 lg:grid-cols-3">
                    {/* Why Contact Us */}
                    <div className="space-y-6 lg:col-span-1">
                        <Card className="border-border">
                            <CardHeader>
                                <CardTitle className="text-xl">Common Inquiries</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {[
                                    "Enterprise API Access",
                                    "Private Data Training",
                                    "Billing & Subscriptions",
                                    "Technical Troubleshooting",
                                    "Feature Requests",
                                    "Mobile App Support",
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <MessageSquare className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                                        <span className="text-sm">{item}</span>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        <Card className="border-border">
                            <CardHeader>
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-[#FBB429] to-[#F87866]">
                                    <Mail className="h-6 w-6 text-white" />
                                </div>
                                <CardTitle className="mt-4">Email Chat Support</CardTitle>
                                <CardDescription>Direct line to the product team</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <a href="mailto:chat-support@buildwellai.com" className="font-sans text-primary hover:underline">
                                    chat-support@buildwellai.com
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
                                    Detailed info helps us answer faster. For bugs, please include which device/browser you are using.
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
                                            <Label htmlFor="company">Company</Label>
                                            <Input
                                                id="company"
                                                name="company"
                                                placeholder="Your Company Ltd"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="bg-muted/50 border-input dark:bg-muted dark:border-white/20"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Phone Number</Label>
                                            <Input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                placeholder="Optional"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="bg-muted/50 border-input dark:bg-muted dark:border-white/20"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2 flex-1 flex flex-col">
                                        <Label htmlFor="message">How can we help? *</Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder="I'm interested in the Enterprise plan for my team of 20..."
                                            className="flex-1 min-h-[150px] resize-none bg-muted/50 border-input dark:bg-muted dark:border-white/20"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    {submitted && (
                                        <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-4 text-green-600 dark:text-green-400">
                                            <strong>Message Sent!</strong> We'll get back to you regarding your inquiry shortly.
                                        </div>
                                    )}

                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full bg-gradient-to-r from-[#FBB429] to-[#F87866] text-white hover:brightness-110 md:w-auto"
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
                        <h2 className="font-['Big_Shoulders_Display'] text-3xl font-bold tracking-tight md:text-4xl">
                            Support <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">FAQs</span>
                        </h2>
                        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                            Answers to common support questions
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
                                        className={`h-5 w-5 shrink-0 transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${openFaq === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
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

            <MarketingFooter />
        </div>
    )
}
