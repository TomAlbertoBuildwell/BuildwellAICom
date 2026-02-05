"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/frontpagechat/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/frontpagechat/ui/card"
import { Badge } from "@/components/frontpagechat/ui/badge"
import { ChatNavbar } from "@/components/frontpagechat/ChatNavbar"
import { MarketingFooter } from "@/components/frontpagechat/marketing/marketing-footer"
import { CheckCircle, ArrowRight, ChevronDown, MessageSquare, FileText, Zap } from "lucide-react"

export default function ChatPricingPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index)
    }

    const plans = [
        {
            name: "Starter",
            price: "Free",
            description: "Experience the power of UK construction AI",
            features: [
                "Access to basic regulations",
                "50 AI queries per month",
                "Standard citation checking",
                "Mobile app access",
                "Community support",
            ],
            cta: "Start Chatting",
            popular: false,
        },
        {
            name: "Pro Chat",
            price: "£29/mo",
            description: "For professionals needing comprehensive answers",
            features: [
                "Unlimited AI queries",
                "Full UK Regulations Knowledge Base",
                "Document uploads (PDF analysis)",
                "Chat-to-Report generation",
                "Project Memory (Context retention)",
                "Priority email support",
                "Early access to new models",
            ],
            cta: "Get Started",
            popular: true,
        },
        {
            name: "Team",
            price: "On Enquiry",
            description: "For construction firms and consultancies",
            features: [
                "Everything in Pro",
                "Centralized Team billing",
                "Admin user management",
                "Shared Project contexts",
                "API Access for internal tools",
                "Custom Data training options",
                "Dedicated Onboarding",
                "SLA guarantees",
            ],
            cta: "Contact Sales",
            popular: false,
        },
    ]

    const faqs = [
        {
            question: "What documents can BuildwellCHAT analyze?",
            answer: "BuildwellCHAT Pro can analyze PDF construction drawings, specifications, method statements, and technical reports. It cross-references these with UK regulations to identify potential compliance issues.",
        },
        {
            question: "Is the regulation database up to date?",
            answer: "Yes, our knowledge base is updated weekly with the latest Approved Documents, British Standards, and legislative changes to ensure you're always getting current advice.",
        },
        {
            question: "Can I try Pro features before buying?",
            answer: "We offer a 14-day free trial of the Pro plan that gives you full access to document analysis and unlimited queries so you can see the value firsthand.",
        },
        {
            question: "How accurate are the AI citations?",
            answer: "Our system is designed with 'Retrieval-Augmented Generation', meaning every answer is grounded in specific text from official documents. We provide direct citation links so you can verify the source yourself.",
        },
        {
            question: "Is my chat data confidential?",
            answer: "Absolutely. We adhere to strict data privacy standards. Your uploaded documents and chat history are encrypted and are not used to train our public models without your explicit permission.",
        },
    ]

    return (
        <div className="flex min-h-screen flex-col dark:bg-background">
            <ChatNavbar />

            {/* Hero Section */}
            <section className="container mx-auto px-4 pt-32 pb-20">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="font-['Big_Shoulders_Display'] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                        Simple Pricing for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">Intelligent Answers</span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                        Stop searching through thousands of pages of regulations. Get instant, accurate answers with BuildwellCHAT.
                        Start for free and upgrade as your projects grow.
                    </p>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="container mx-auto px-4 pb-20">
                <div className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
                    {plans.map((plan, index) => (
                        <Card
                            key={index}
                            className={`relative flex flex-col border-2 rounded-[5px] shadow-lg transition-all duration-300 ${plan.popular
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
                                <CardTitle className="text-2xl font-['Big_Shoulders_Display'] font-bold">{plan.name}</CardTitle>
                                <CardDescription className="mt-2 text-sm">{plan.description}</CardDescription>
                                <div className="mt-6">
                                    <div className="flex items-baseline justify-center gap-1">
                                        <span className="font-['Big_Shoulders_Display'] text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">{plan.price}</span>
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
                                <Link href="/new-chatpage/contact" className="block">
                                    <Button
                                        className={`w-full rounded-[5px] transition-all duration-300 ${plan.popular
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
                        All prices exclude VAT. Annual billing available with 20% discount.
                    </p>
                </div>
            </section>

            {/* Chat Specific Features Highlights */}
            <section className="border-t border-border bg-muted/30 dark:bg-[#0d1f33] py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                            {/* Content */}
                            <div className="space-y-6">
                                <h2 className="font-['Big_Shoulders_Display'] text-3xl md:text-4xl font-bold tracking-tight text-foreground dark:text-white">
                                    Why Upgrade to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">Pro Chat?</span>
                                </h2>
                                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                                    Move beyond simple Q&A. Pro gives you a dedicated AI research assistant that understands your specific project files.
                                </p>

                                <div className="space-y-4 pt-4">
                                    {[
                                        {
                                            title: "Analyze Your Documents",
                                            description: "Upload PDFs and let AI find conflicts, extract data, and answer questions based on YOUR files.",
                                            icon: <FileText className="h-6 w-6 text-white" />
                                        },
                                        {
                                            title: "Accurate Citations",
                                            description: "Every answer links back to the official regulation or document clause it came from.",
                                            icon: <MessageSquare className="h-6 w-6 text-white" />
                                        },
                                        {
                                            title: "Faster Workflow",
                                            description: "Generate summaries, checklists, and reports instantly from your chat conversations.",
                                            icon: <Zap className="h-6 w-6 text-white" />
                                        },
                                    ].map((feature, index) => (
                                        <div key={index} className="flex gap-4">
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[5px] bg-gradient-to-r from-[#FBB429] to-[#F87866]">
                                                {feature.icon}
                                            </div>
                                            <div>
                                                <h3 className="font-['Big_Shoulders_Display'] text-lg font-bold text-foreground dark:text-white mb-1">{feature.title}</h3>
                                                <p className="text-sm text-muted-foreground dark:text-neutral-300 leading-relaxed">{feature.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Image placeholder */}
                            <div className="relative">
                                <div className="aspect-square overflow-hidden rounded-[5px] border-2 border-neutral-200 dark:border-neutral-700/50 bg-muted shadow-2xl relative">
                                    {/* Placeholder for a feature graphic */}
                                    <Image
                                        src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80"
                                        alt="BuildwellCHAT Interface"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1929]/80 to-transparent flex items-end p-8">
                                        <p className="text-white font-medium text-lg">Detailed analysis of building regulations in seconds.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="container mx-auto px-4 py-20 bg-background dark:bg-background">
                <div className="mx-auto max-w-3xl">
                    <h2 className="text-center font-['Big_Shoulders_Display'] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-12">
                        Chat <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">FAQs</span>
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
                                        className={`h-5 w-5 shrink-0 transition-transform duration-200 ${openFaq === index ? "rotate-180" : ""
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
                        <h2 className="font-['Big_Shoulders_Display'] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                            Ready to Upgrade Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">Workflow</span>?
                        </h2>
                        <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                            Join thousands of UK construction professionals using BuildwellCHAT to work smarter and safer.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="https://chat.buildwellai.com" className="w-full sm:w-auto">
                                <Button size="lg" className="bg-gradient-to-r from-[#FBB429] to-[#F87866] text-white hover:opacity-90 rounded-[5px] w-full">
                                    Try BuildwellCHAT Free
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
