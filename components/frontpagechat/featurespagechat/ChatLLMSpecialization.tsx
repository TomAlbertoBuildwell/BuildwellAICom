"use client"

import { Check, CheckCircle, FileText, Brain, Sparkles, TrendingUp } from "lucide-react"

export function ChatLLMSpecialization() {
    const standards = [
        "Approved Documents Part A - S",
        "BS EN 1990 - 1999 (Eurocodes)",
        "CDM Regulations 2015",
        "Building Safety Act 2022",
        "RIBA Plan of Work 2020",
        "NBS Uniclass 2015"
    ]

    return (
        <section className="py-24 bg-muted/30 dark:bg-[#0d1f33] overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[5px] bg-[#FBB429]/10 text-[#FBB429] mb-6 border border-[#FBB429]/20">
                            <span className="text-xs font-bold uppercase">Specialized Knowledge Base</span>
                        </div>

                        <h2 className="font-['Big_Shoulders_Display'] text-4xl lg:text-5xl font-bold text-foreground dark:text-white mb-6 leading-tight">
                            Not Just a Chatbot. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">
                                An Expert Consultant.
                            </span>
                        </h2>

                        <p className="text-xl text-muted-foreground dark:text-neutral-300 mb-8 leading-relaxed">
                            Generic AI models hallucinate. BuildwellCHAT is grounded in a verified library of 40+ UK construction standards. It understands the difference between a recommendation and a regulation.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                            {standards.map((std, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 rounded-[5px] bg-background dark:bg-[#0a1929] border border-neutral-200 dark:border-neutral-700/50">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                                    <span className="text-sm font-medium text-foreground dark:text-neutral-200">{std}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-sm text-muted-foreground italic">
                            * Automatically updated as new amendments are released.
                        </p>
                    </div>

                    {/* Visual Side (Process Flow) */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative z-10 bg-white dark:bg-[#0d1f33] rounded-[5px] border border-neutral-200 dark:border-neutral-700/50 shadow-sm p-6 md:p-8">
                            {/* Step 1: Query */}
                            <div className="flex gap-4 mb-8 opacity-50">
                                <div className="w-10 h-10 rounded-[5px] bg-neutral-100 dark:bg-[#0a1929] flex items-center justify-center shrink-0">
                                    <span className="font-bold text-neutral-500">Q</span>
                                </div>
                                <div className="bg-neutral-100 dark:bg-[#0a1929] rounded-[5px] rounded-tl-none p-4 text-sm text-neutral-500">
                                    What is the minimum escape distance for a single stair office building?
                                </div>
                            </div>

                            {/* Step 2: RAG Process (Highlight) */}
                            <div className="relative mb-8 pl-14">
                                <div className="absolute left-[1.2rem] top-0 bottom-0 w-0.5 bg-gradient-to-b from-neutral-200 via-[#FBB429] to-neutral-200 dark:from-neutral-800 dark:via-[#FBB429] dark:to-neutral-800" />

                                <div className="bg-[#FBB429]/5 border border-[#FBB429]/20 rounded-[5px] p-4 mb-4">
                                    <div className="flex items-center gap-2 mb-2 text-[#FBB429] text-xs font-bold uppercase">
                                        Retrieving Context...
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between text-xs text-foreground dark:text-white p-2 bg-white dark:bg-black/20 rounded-[3px]">
                                            <span>Approved Document B Vol 2</span>
                                            <span className="text-green-500 font-mono">98% match</span>
                                        </div>
                                        <div className="flex items-center justify-between text-xs text-foreground dark:text-white p-2 bg-white dark:bg-black/20 rounded-[3px]">
                                            <span>BS 9999:2017</span>
                                            <span className="text-green-500 font-mono">92% match</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3: Answer */}
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-[5px] bg-gradient-to-r from-[#FBB429] to-[#F87866] flex items-center justify-center shrink-0 shadow-sm">
                                    <Sparkles className="w-5 h-5 text-white" />
                                </div>
                                <div className="bg-gradient-to-r from-[#FBB429]/10 to-[#F87866]/10 border border-[#FBB429]/20 rounded-[5px] rounded-tl-none p-4 text-sm text-foreground dark:text-white">
                                    <p className="mb-2">According to <strong className="text-[#FBB429]">Approved Document B Vol 2</strong>, for a small single stair office building:</p>
                                    <ul className="list-disc pl-4 space-y-1 mb-2 text-muted-foreground dark:text-neutral-300">
                                        <li>Max travel distance in one direction: <strong>18m</strong></li>
                                        <li>Max number of storeys: <strong>4</strong></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Background blob - Reduced intensity */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-gradient-to-r from-[#FBB429]/5 to-[#F87866]/5 blur-3xl -z-10 rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    )
}
