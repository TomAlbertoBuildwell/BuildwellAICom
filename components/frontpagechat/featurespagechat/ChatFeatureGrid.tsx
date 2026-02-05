"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export function ChatFeatureGrid() {
    return (
        <section className="py-20 md:py-32 bg-white dark:bg-[#0a1929]">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <div className="inline-flex items-center gap-2 rounded-[5px] bg-gradient-to-r from-[#FBB429]/10 to-[#F87866]/10 px-4 py-2 text-sm font-semibold text-[#FBB429] border border-[#FBB429]/20 mb-4">
                        Workflow Automation
                    </div>
                    <h2 className="font-['Big_Shoulders_Display'] text-4xl md:text-5xl font-bold mb-4 text-foreground dark:text-white">
                        More Than Just <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">Chat</span>
                    </h2>
                    <p className="text-xl text-muted-foreground dark:text-gray-300 max-w-2xl mx-auto">
                        A complete suite of tools to automate your daily compliance and documentation tasks.
                    </p>
                </div>

                {/* Feature 1: Instant Answers (Step style) */}
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
                    <div className="relative order-2 md:order-1">
                        <div className="aspect-4/3 overflow-hidden rounded-[5px] border-2 border-gray-300/40 dark:border-gray-700/40 bg-muted shadow-sm">
                            <Image
                                src="https://images.unsplash.com/photo-1555421689-d68471e18963?w=800&q=80"
                                alt="Instant Regulatory Answers"
                                width={800}
                                height={600}
                                className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                    <div className="space-y-6 order-1 md:order-2">
                        <div className="inline-flex items-center gap-2 rounded-[5px] bg-[#FBB429]/10 px-4 py-2 text-sm font-semibold text-[#FBB429] border border-[#FBB429]/20">
                            Feature 1: Instant Citations
                        </div>
                        <h3 className="font-['Big_Shoulders_Display'] text-3xl font-bold text-foreground dark:text-white">
                            Instant Regulatory Answers
                        </h3>
                        <p className="text-muted-foreground dark:text-gray-300 leading-relaxed">
                            Stop searching through 1000-page PDFs. Ask complex questions about Approved Documents, British Standards, and CDM 2015. Get precise answers linked directly to the official source text in seconds.
                        </p>
                        <div className="space-y-3">
                            {["Context-aware responses", "Direct links to source PDFs", "Always up-to-date with latest amendments"].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                                    <p className="text-sm text-foreground dark:text-gray-300">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Feature 2: Document Analysis (Step style - reversed) */}
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
                    <div className="space-y-6 order-1">
                        <div className="inline-flex items-center gap-2 rounded-[5px] bg-[#F87866]/10 px-4 py-2 text-sm font-semibold text-[#F87866] border border-[#F87866]/20">
                            Feature 2: Smart Analysis
                        </div>
                        <h3 className="font-['Big_Shoulders_Display'] text-3xl font-bold text-foreground dark:text-white">
                            Scan & Analyze Documents
                        </h3>
                        <p className="text-muted-foreground dark:text-gray-300 leading-relaxed">
                            Upload PDFs, plans, or technical specifications. The AI reviews them against specific regulations to find contradictions, missing info, or compliance risks instantly.
                        </p>
                        <div className="space-y-3">
                            {["Risk Detection & Gap Analysis", "Compare against specific regulations", "Summarize technical reports instantly"].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#F87866] mt-2 shrink-0" />
                                    <p className="text-sm text-foreground dark:text-gray-300">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative order-2">
                        <div className="aspect-4/3 overflow-hidden rounded-[5px] border-2 border-gray-300/40 dark:border-gray-700/40 bg-muted shadow-sm">
                            <Image
                                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80"
                                alt="Document Analysis"
                                width={800}
                                height={600}
                                className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>

                {/* Feature 3: Reporting (Step style) */}
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="relative order-2 md:order-1">
                        <div className="aspect-4/3 overflow-hidden rounded-[5px] border-2 border-gray-300/40 dark:border-gray-700/40 bg-muted shadow-sm">
                            <Image
                                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"
                                alt="Automated Reporting"
                                width={800}
                                height={600}
                                className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                    <div className="space-y-6 order-1 md:order-2">
                        <div className="inline-flex items-center gap-2 rounded-[5px] bg-gradient-to-r from-[#FBB429]/10 to-[#F87866]/10 px-4 py-2 text-sm font-semibold text-[#FBB429] border border-[#FBB429]/20">
                            Feature 3: One-Click Reports
                        </div>
                        <h3 className="font-['Big_Shoulders_Display'] text-3xl font-bold text-foreground dark:text-white">
                            Automated Reporting
                        </h3>
                        <p className="text-muted-foreground dark:text-gray-300 leading-relaxed">
                            Turn your conversations and analysis into professional, branded PDF reports. Generate compliance checklists, summary emails, or formal audit trails with a single click.
                        </p>
                        <div className="space-y-3">
                            {["Professional PDF formatting", "Custom Branding", "Instant Export"].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                                    <p className="text-sm text-foreground dark:text-gray-300">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
