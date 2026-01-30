"use client"

import Image from "next/image"
import { CheckCircle, Shield, Brain, Gavel, FileText } from "lucide-react"

export const ChatModelsSection = () => {
    return (
        <section className="py-12 md:py-[100px] bg-background dark:bg-[#0a1929]">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center max-w-7xl mx-auto">
                    {/* Mobile Title (Visible only on mobile/tablet) */}
                    <div className="text-center mb-8 lg:hidden">
                        <h2 className="font-display text-3xl font-bold text-foreground dark:text-white leading-tight">
                            Advanced Chat Models <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">for Every Discipline</span>
                        </h2>
                    </div>

                    {/* Left: Large Image */}
                    <div className="relative">
                        <div className="rounded-xl overflow-hidden">
                            <Image
                                src="/build.jpg"
                                alt="AI Chat Models Processing Construction Data"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Subtle glow effect */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-[#FBB429]/20 to-[#F87866]/20 rounded-2xl blur-3xl -z-10 opacity-50" />
                    </div>

                    {/* Right Text Content */}
                    <div className="text-center lg:text-left">
                        {/* Desktop Title (Hidden on mobile) */}
                        <h2 className="hidden lg:block font-display text-3xl lg:text-4xl font-bold text-foreground dark:text-white leading-tight mb-6">
                            Advanced Chat Models <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">for Every Discipline</span>
                        </h2>
                        <p className="text-xl text-justify lg:text-left text-muted-foreground dark:text-neutral-400 mb-8 leading-relaxed">
                            BuildwellAI Chat acts as your multi-disciplinary team. It understands context, providing role-specific advice whether you need a legal interpretation of the Building Safety Act or a technical review of materials on-site.
                        </p>

                        {/* Two Small Feature Cards Below Text */}
                        <div className="grid sm:grid-cols-2 gap-3">
                            <div className="bg-muted/50 dark:bg-[#0d1f33] p-5 rounded-lg border border-neutral-200 dark:border-neutral-700/50 text-left">
                                <Gavel className="w-8 h-8 text-[#FBB429] mb-3" />
                                <h3 className="font-bold text-lg mb-1 text-foreground dark:text-white">Regulatory Expert</h3>
                                <p className="text-sm text-muted-foreground dark:text-neutral-400">Instant analysis of BSA 2022 & Building Regs.</p>
                            </div>
                            <div className="bg-muted/50 dark:bg-[#0d1f33] p-5 rounded-lg border border-neutral-200 dark:border-neutral-700/50 text-left">
                                <Brain className="w-8 h-8 text-[#F87866] mb-3" />
                                <h3 className="font-bold text-lg mb-1 text-foreground dark:text-white">Technical Engineer</h3>
                                <p className="text-sm text-muted-foreground dark:text-neutral-400">Structural calculations & material specs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
