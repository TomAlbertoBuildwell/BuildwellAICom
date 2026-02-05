"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Send, Sparkles, FileText, Zap, ChevronRight, ArrowUp } from "lucide-react"
import { cn } from "../lib/utils" // Local clone


export function ChatInteractiveShowcase() {
    const [activeFeature, setActiveFeature] = useState(0)

    const features = [
        {
            id: "regulatory",
            prompt: "What is the max travel distance for a single stair office?",
            title: "Instant Regulatory Intelligence",
            tech: "RAG + Vector Embeddings",
            description: "BuildwellCHAT instantly searches thousands of pages of Approved Documents (Part A-S), British Standards, and legislation to find precise, cited answers.",
            visual: "https://images.unsplash.com/photo-1555421689-d68471e18963?w=800&q=80", // Placeholder for UI screenshot
            stats: ["< 1.2s Latency", "100% Citation Rate"]
        },
        {
            id: "analysis",
            prompt: "Review this floorplan against Approved Document B",
            title: "Visual Document Analysis",
            tech: "Multimodal Vision AI",
            description: "Upload PDFs, images, or CAD drawings. Our specialized vision models analyze layouts for compliance risks, identifying issues like dead-end corridors or missing fire doors.",
            visual: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
            stats: ["Detects 50+ Hazard Types", "Auto-Scale Detection"]
        },
        {
            id: "reporting",
            prompt: "Generate a fire safety report from this conversation",
            title: "Automated Reporting",
            tech: "Smart Templating Engine",
            description: "Turn your analysis into a professional PDF report in one click. Completely formatted with your company branding, ready to send to clients or building control.",
            visual: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
            stats: ["One-Click Export", "Custom Branding"]
        }
    ]

    return (
        <section className="py-24 bg-muted/30 dark:bg-[#0a1929] border-y border-neutral-100 dark:border-white/5">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="font-['Big_Shoulders_Display'] text-3xl md:text-4xl font-bold text-foreground dark:text-white mb-4">
                        Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">Power of AI</span>
                    </h2>
                    <p className="text-lg text-muted-foreground dark:text-neutral-400">
                        Select a prompt to see how BuildwellCHAT handles complex tasks.
                    </p>
                </div>

                {/* Main Interactive Window */}
                <div className="bg-white dark:bg-[#0d1f33] rounded-[5px] border border-neutral-200 dark:border-white/10 shadow-sm overflow-hidden flex flex-col min-h-[600px]">

                    {/* Chat Display Area */}
                    <div className="flex-1 p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center bg-gradient-to-b from-transparent to-neutral-50/50 dark:to-black/20">

                        {/* Left: Text/Tech Info */}
                        <div className="w-full md:w-1/2 space-y-6">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeFeature}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="h-6 px-2 rounded-[3px] bg-[#FBB429]/10 text-[#FBB429] text-xs font-mono flex items-center border border-[#FBB429]/20">
                                            TECH: {features[activeFeature].tech}
                                        </div>
                                    </div>

                                    <h3 className="text-3xl font-bold text-foreground dark:text-white mb-4">
                                        {features[activeFeature].title}
                                    </h3>

                                    <p className="text-lg text-muted-foreground dark:text-neutral-300 leading-relaxed mb-8">
                                        {features[activeFeature].description}
                                    </p>

                                    <div className="flex gap-4">
                                        {features[activeFeature].stats.map((stat, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm font-medium text-foreground dark:text-white">
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                                {stat}
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Right: Visual Preview */}
                        <div className="w-full md:w-1/2">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeFeature}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                    className="relative aspect-video rounded-[5px] overflow-hidden border border-neutral-200 dark:border-white/10 shadow-sm bg-neutral-900"
                                >
                                    <Image
                                        src={features[activeFeature].visual}
                                        alt={features[activeFeature].title}
                                        fill
                                        className="object-cover opacity-90"
                                    />
                                    {/* Simulated "AI Analysis" Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f33] to-transparent opacity-60" />
                                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                            <span className="text-xs font-mono text-green-400">PROCESSING COMPLETE</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Chat Input Simulation (Bottom Bar) */}
                    <div className="border-t border-neutral-200 dark:border-white/10 bg-white dark:bg-[#0a1929] p-4 md:p-6">
                        {/* Suggestion Chips (The "Buttons") */}
                        <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                            {features.map((feature, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveFeature(index)}
                                    className={cn(
                                        "px-4 py-2 rounded-[5px] text-sm font-medium transition-all duration-200 border",
                                        activeFeature === index
                                            ? "bg-[#0d1f33] text-white border-[#0d1f33] dark:bg-white dark:text-[#0d1f33]"
                                            : "bg-neutral-100 text-neutral-600 border-neutral-200 hover:bg-neutral-200 dark:bg-white/5 dark:text-neutral-400 dark:border-white/10 dark:hover:bg-white/10"
                                    )}
                                >
                                    {activeFeature === index && <span className="mr-2">●</span>}
                                    "{feature.prompt}"
                                </button>
                            ))}
                        </div>

                        {/* Fake Input Field */}
                        <div className="relative">
                            <div className="w-full h-12 bg-neutral-100 dark:bg-[#0d1f33] rounded-[5px] border border-neutral-200 dark:border-white/10 flex items-center px-4 text-neutral-400 dark:text-neutral-500">
                                <span className="truncate">{features[activeFeature].prompt}</span>
                                <span className="w-0.5 h-4 bg-[#FBB429] ml-1 animate-pulse" />
                            </div>
                            <div className="absolute right-2 top-2 bottom-2 aspect-square bg-[#FBB429] rounded-[3px] flex items-center justify-center text-white">
                                <ArrowUp className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
