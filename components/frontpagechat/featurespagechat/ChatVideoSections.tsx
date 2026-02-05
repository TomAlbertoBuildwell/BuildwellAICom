"use client"

import { CheckCircle, MessageSquare, FileText, BarChart3, Search, Zap, Shield, FileCheck, Clock, BookOpen } from "lucide-react"

export function ChatVideoSections() {
    return (
        <section className="pb-12 bg-white dark:bg-[#0a1929]">
            <div className="container mx-auto px-4">

                {/* Section 1: Chat / Q&A */}
                <div className="py-12 md:py-20 border-b border-neutral-100 dark:border-white/5">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="space-y-6 order-2 md:order-1 relative">
                            {/* Video Container 1 */}
                            <div className="relative rounded-[5px] overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-900 aspect-video">
                                <video
                                    className="w-full h-full object-cover"
                                    loop
                                    muted
                                    playsInline
                                    autoPlay
                                >
                                    <source src="https://res.cloudinary.com/drzxliqyz/video/upload/v1763297450/chatrec_kfrokc.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                        <div className="space-y-6 order-1 md:order-2">
                            <div className="inline-flex items-center gap-2 rounded-[5px] bg-[#FBB429]/10 px-4 py-2 text-sm font-semibold text-[#FBB429] border border-[#FBB429]/20">
                                <MessageSquare className="h-4 w-4" />
                                Instant Answers
                            </div>
                            <h3 className="font-['Big_Shoulders_Display'] text-3xl md:text-4xl font-bold text-foreground dark:text-white">
                                Expert Knowledge, Instantly.
                            </h3>
                            <p className="text-lg text-muted-foreground dark:text-neutral-300 leading-relaxed mb-6">
                                Don't waste hours scrolling through PDFs. Ask complex regulatory questions and gets answers grounded in official Approved Documents and British Standards.
                            </p>

                            {/* Two Feature Cards */}
                            <div className="grid sm:grid-cols-2 gap-3">
                                <div className="bg-background dark:bg-[#0d1f33] p-5 rounded-lg border border-neutral-200 dark:border-neutral-800 text-left hover:border-[#FBB429]/50 transition-colors">
                                    <BookOpen className="w-8 h-8 text-[#FBB429] mb-3" />
                                    <h3 className="font-bold text-lg mb-1 text-foreground dark:text-white">Citations</h3>
                                    <p className="text-sm text-muted-foreground dark:text-neutral-400 leading-snug">Linked directly to official source documents.</p>
                                </div>
                                <div className="bg-background dark:bg-[#0d1f33] p-5 rounded-lg border border-neutral-200 dark:border-neutral-800 text-left hover:border-[#FBB429]/50 transition-colors">
                                    <Clock className="w-8 h-8 text-[#F87866] mb-3" />
                                    <h3 className="font-bold text-lg mb-1 text-foreground dark:text-white">Real-Time</h3>
                                    <p className="text-sm text-muted-foreground dark:text-neutral-400 leading-snug">Always updated with latest amendments.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2: Analysis (Alternating) */}
                <div className="py-12 md:py-20 border-b border-neutral-100 dark:border-white/5">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="space-y-6 order-1">
                            <div className="inline-flex items-center gap-2 rounded-[5px] bg-[#F87866]/10 px-4 py-2 text-sm font-semibold text-[#F87866] border border-[#F87866]/20">
                                <FileText className="h-4 w-4" />
                                Document Intelligence
                            </div>
                            <h3 className="font-['Big_Shoulders_Display'] text-3xl md:text-4xl font-bold text-foreground dark:text-white">
                                Analyze Plans & Docs
                            </h3>
                            <p className="text-lg text-muted-foreground dark:text-neutral-300 leading-relaxed mb-6">
                                Upload floorplans, technical specs, or fire strategy reports. Our vision-enabled AI scans them for compliance risks, identifying missing elements or code violations instantly.
                            </p>

                            {/* Two Feature Cards */}
                            <div className="grid sm:grid-cols-2 gap-3">
                                <div className="bg-background dark:bg-[#0d1f33] p-5 rounded-lg border border-neutral-200 dark:border-neutral-800 text-left hover:border-[#F87866]/50 transition-colors">
                                    <Search className="w-8 h-8 text-[#F87866] mb-3" />
                                    <h3 className="font-bold text-lg mb-1 text-foreground dark:text-white">Visual AI</h3>
                                    <p className="text-sm text-muted-foreground dark:text-neutral-400 leading-snug">Scans drawings and photos for risks.</p>
                                </div>
                                <div className="bg-background dark:bg-[#0d1f33] p-5 rounded-lg border border-neutral-200 dark:border-neutral-800 text-left hover:border-[#F87866]/50 transition-colors">
                                    <Shield className="w-8 h-8 text-[#FBB429] mb-3" />
                                    <h3 className="font-bold text-lg mb-1 text-foreground dark:text-white">Gap Checks</h3>
                                    <p className="text-sm text-muted-foreground dark:text-neutral-400 leading-snug">Identifies missing required information.</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6 order-2 relative">
                            {/* Video Container 2 */}
                            <div className="relative rounded-[5px] overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-900 aspect-video">
                                <video
                                    className="w-full h-full object-cover"
                                    loop
                                    muted
                                    playsInline
                                    autoPlay
                                >
                                    <source src="https://res.cloudinary.com/drzxliqyz/video/upload/v1763297405/threadvid_oxmkua.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 3: Reporting */}
                <div className="py-12 md:py-20">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="space-y-6 order-2 md:order-1 relative">
                            {/* Video Container 3 */}
                            <div className="relative rounded-[5px] overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-900 aspect-video">
                                <video
                                    className="w-full h-full object-cover"
                                    loop
                                    muted
                                    playsInline
                                    autoPlay
                                >
                                    <source src="https://res.cloudinary.com/drzxliqyz/video/upload/v1762797262/showcasenews_peihce.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                        <div className="space-y-6 order-1 md:order-2">
                            <div className="inline-flex items-center gap-2 rounded-[5px] bg-[#FBB429]/10 px-4 py-2 text-sm font-semibold text-[#FBB429] border border-[#FBB429]/20">
                                <BarChart3 className="h-4 w-4" />
                                Automated Reporting
                            </div>
                            <h3 className="font-['Big_Shoulders_Display'] text-3xl md:text-4xl font-bold text-foreground dark:text-white">
                                Reports in Seconds
                            </h3>
                            <p className="text-lg text-muted-foreground dark:text-neutral-300 leading-relaxed mb-6">
                                Turn your analysis into professional deliverables. Generate fire safety statements, compliance checklists, or meeting summaries with one click, branded with your logo.
                            </p>

                            {/* Two Feature Cards */}
                            <div className="grid sm:grid-cols-2 gap-3">
                                <div className="bg-background dark:bg-[#0d1f33] p-5 rounded-lg border border-neutral-200 dark:border-neutral-800 text-left hover:border-[#FBB429]/50 transition-colors">
                                    <FileCheck className="w-8 h-8 text-[#FBB429] mb-3" />
                                    <h3 className="font-bold text-lg mb-1 text-foreground dark:text-white">One-Click</h3>
                                    <p className="text-sm text-muted-foreground dark:text-neutral-400 leading-snug">Export to professionally formatted PDF.</p>
                                </div>
                                <div className="bg-background dark:bg-[#0d1f33] p-5 rounded-lg border border-neutral-200 dark:border-neutral-800 text-left hover:border-[#FBB429]/50 transition-colors">
                                    <Zap className="w-8 h-8 text-[#F87866] mb-3" />
                                    <h3 className="font-bold text-lg mb-1 text-foreground dark:text-white">Branding</h3>
                                    <p className="text-sm text-muted-foreground dark:text-neutral-400 leading-snug">Automatically applies your company logo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
