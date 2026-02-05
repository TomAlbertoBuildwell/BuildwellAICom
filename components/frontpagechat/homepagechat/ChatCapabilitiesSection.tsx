"use client"

import Image from "next/image"
import { FileText, Search, Zap, CheckCircle } from "lucide-react"

export const ChatCapabilitiesSection = () => {
    return (
        <section className="py-12 md:py-[100px] bg-muted/30 dark:bg-[#0d1f33]">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center max-w-7xl mx-auto">

                    {/* Left Text Content (order-1 on desktop, order-2 on mobile for consistency if desired, but user asked for flip, usually means visual flip) */}
                    <div className="text-center lg:text-left order-2 lg:order-1">
                        <h2 className="font-['Big_Shoulders_Display'] text-3xl lg:text-4xl font-bold text-foreground dark:text-white leading-tight mb-6">
                            Instant Analysis <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">& Document Review</span>
                        </h2>
                        <p className="text-xl text-justify lg:text-left text-muted-foreground dark:text-neutral-400 mb-8 leading-relaxed">
                            Upload PDFs, images, or technical drawings and get instant summaries, compliance checks, and actionable insights. BuildwellAI Chat doesn't just talk; it reads, sees, and understands your project data.
                        </p>

                        {/* Two Small Feature Cards Below Text */}
                        <div className="grid sm:grid-cols-2 gap-3">
                            <div className="bg-background dark:bg-[#0a1929] p-5 rounded-lg border border-neutral-200 dark:border-neutral-700/50 text-left">
                                <FileText className="w-8 h-8 text-[#FBB429] mb-3" />
                                <h3 className="font-bold text-lg mb-1 text-foreground dark:text-white">Document Analysis</h3>
                                <p className="text-sm text-muted-foreground dark:text-neutral-400">Upload & query construction docs instantly.</p>
                            </div>
                            <div className="bg-background dark:bg-[#0a1929] p-5 rounded-lg border border-neutral-200 dark:border-neutral-700/50 text-left">
                                <Search className="w-8 h-8 text-[#F87866] mb-3" />
                                <h3 className="font-bold text-lg mb-1 text-foreground dark:text-white">Visual Recognition</h3>
                                <p className="text-sm text-muted-foreground dark:text-neutral-400">Analyze site photos for potential hazards.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Large Image (order-1 on mobile, order-2 on desktop) */}
                    <div className="relative order-1 lg:order-2">
                        <div className="rounded-xl overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&q=80&w=800&h=600"
                                alt="BuildwellAI Chat Analyzing Documents"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Subtle glow effect */}
                        <div className="absolute -inset-4 bg-gradient-to-l from-[#FBB429]/20 to-[#F87866]/20 rounded-2xl blur-3xl -z-10 opacity-50" />
                    </div>

                </div>
            </div>
        </section>
    )
}
