"use client"

import Image from "next/image"
import { MessageSquare, FileText, Zap, CheckCircle } from "lucide-react"

export function ChatFeatureCards() {
    return (
        <section className="container mx-auto px-4 py-20 bg-white dark:bg-[#0a1929]">
            {/* Section Header */}
            <div className="mx-auto max-w-3xl text-center mb-16">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#FBB429]/10 px-4 py-2 text-sm font-semibold text-[#FBB429] border border-[#FBB429]/20 mb-6">
                    <Zap className="w-4 h-4" />
                    <span>Why BuildwellCHAT?</span>
                </div>
                <h2 className="font-['Big_Shoulders_Display'] text-3xl font-bold tracking-tight md:text-5xl text-foreground dark:text-white mb-6">
                    Not just a chatbot. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">
                        A Regulatory Expert.
                    </span>
                </h2>
                <p className="text-xl leading-relaxed text-muted-foreground dark:text-gray-300">
                    Engineered for accuracy, speed, and complete compliance.
                </p>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">

                {/* Card 1: Instant Answers (Tall) */}
                <div className="group relative bg-white dark:bg-[#0d1f33] p-5 rounded-2xl border border-neutral-200 dark:border-white/10 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col min-h-[450px]">
                    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-muted mb-6">
                        <Image
                            src="https://images.unsplash.com/photo-1555421689-d68471e18963?w=800&q=80"
                            alt="Instant Regulatory Answers"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="px-1 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2.5 rounded-xl bg-[#FBB429]/10 text-[#FBB429]">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                            <h3 className="font-['Big_Shoulders_Display'] text-2xl font-bold text-foreground dark:text-white">
                                Instant Answers
                            </h3>
                        </div>
                        <p className="text-muted-foreground dark:text-gray-300 leading-relaxed text-base">
                            Get precise, cited answers to complex questions about Approved Documents and British Standards instantly.
                        </p>
                    </div>
                </div>

                {/* Card 2: Smart Analysis (Tall) */}
                <div className="group relative bg-white dark:bg-[#0d1f33] p-5 rounded-2xl border border-neutral-200 dark:border-white/10 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col min-h-[450px]">
                    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-muted mb-6">
                        <Image
                            src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80"
                            alt="Document Analysis"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="px-1 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2.5 rounded-xl bg-[#F87866]/10 text-[#F87866]">
                                <FileText className="w-6 h-6" />
                            </div>
                            <h3 className="font-['Big_Shoulders_Display'] text-2xl font-bold text-foreground dark:text-white">
                                Smart Analysis
                            </h3>
                        </div>
                        <p className="text-muted-foreground dark:text-gray-300 leading-relaxed text-base">
                            Upload documents and floorplans. Let AI identify compliance risks or summarize technical requirements.
                        </p>
                    </div>
                </div>

                {/* Card 3: One-Click Reports (Wide) */}
                <div className="md:col-span-2 group relative bg-white dark:bg-[#0d1f33] p-6 md:p-8 rounded-2xl border border-neutral-200 dark:border-white/10 hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-xl bg-gradient-to-r from-[#FBB429]/10 to-[#F87866]/10 text-[#FBB429]">
                                    <Zap className="w-7 h-7" />
                                </div>
                                <h3 className="font-['Big_Shoulders_Display'] text-3xl font-bold text-foreground dark:text-white">
                                    One-Click Reports
                                </h3>
                            </div>
                            <p className="text-lg text-muted-foreground dark:text-gray-300 leading-relaxed mb-8">
                                Turn your analysis into professional PDF reports. Generate compliance checklists, summaries, and audit trails instantly, fully formatted for your stakeholders.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                {["Professional Formatting", "Custom Branding", "Instant Export"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm font-medium text-foreground dark:text-white bg-neutral-100 dark:bg-white/5 px-3 py-1.5 rounded-full border border-neutral-200 dark:border-white/10">
                                        <CheckCircle className="w-4 h-4 text-[#FBB429]" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="order-1 md:order-2 relative aspect-video rounded-xl overflow-hidden bg-muted shadow-lg">
                            <Image
                                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"
                                alt="Automated Reporting"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
