"use client"

import Image from 'next/image'
import { CheckCircle } from 'lucide-react'

export function FeatureShowcase() {
    const features = [
        {
            title: "Instant Regulatory Answers",
            description: "Ask complex questions about Approved Documents or British Standards and get instant, cited answers linked directly to the source text.",
            image: "https://images.unsplash.com/photo-1555421689-d68471e18963?w=800&q=80", // Placeholder for actual UI screenshot
            benefits: ["Reference exact clauses", "Always up-to-date", "Reduce research time"]
        },
        {
            title: "Document Analysis",
            description: "Upload PDFs, plans, or technical specifications. BuildwellCHAT analyzes them instantly to find contradictions, missing information, or risks.",
            image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80", // Placeholder
            benefits: ["Multi-document support", "Context-aware analysis", "Risk highlighting"]
        },
        {
            title: "Automated Report Generation",
            description: "Turn your chat conversation or document analysis into professional PDF reports with one click. Custom branded for your company.",
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80", // Placeholder
            benefits: ["One-click export", "Professional formatting", "Editable drafts"]
        }
    ]

    return (
        <section className="py-20 bg-muted/30 dark:bg-[#0d1f33]">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-['Big_Shoulders_Display'] text-3xl md:text-4xl font-bold text-foreground dark:text-white mb-6">
                        Everything You Need to <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">
                            Build Smarter
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground dark:text-neutral-300">
                        A complete suite of intelligent tools designed specifically for UK construction professionals.
                    </p>
                </div>

                <div className="space-y-24">
                    {features.map((feature, index) => (
                        <div key={index} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                            {/* Image Side */}
                            <div className="w-full lg:w-1/2">
                                <div className="relative rounded-xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-700/50 group">
                                    <div className="aspect-[4/3] relative">
                                        <Image
                                            src={feature.image}
                                            alt={feature.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
                                    </div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full lg:w-1/2 space-y-6">
                                <h3 className="font-['Big_Shoulders_Display'] text-2xl md:text-3xl font-bold text-foreground dark:text-white">
                                    {feature.title}
                                </h3>
                                <p className="text-lg text-muted-foreground dark:text-neutral-300 leading-relaxed">
                                    {feature.description}
                                </p>
                                <div className="space-y-3 pt-4">
                                    {feature.benefits.map((benefit, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#FBB429]/20 to-[#F87866]/20 flex items-center justify-center">
                                                <CheckCircle className="w-4 h-4 text-[#FBB429]" />
                                            </div>
                                            <span className="text-foreground dark:text-neutral-200 font-medium">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
