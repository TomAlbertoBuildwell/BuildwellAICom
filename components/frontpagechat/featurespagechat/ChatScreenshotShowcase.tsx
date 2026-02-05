"use client"

import { FileText, Search, Zap, CheckCircle, Shield, BarChart3, Ruler, HardHat, Camera } from "lucide-react"

export function ChatScreenshotShowcase() {

    const capabilities = [
        {
            icon: FileText,
            title: "Document Analysis",
            color: "text-[#FBB429]"
        },
        {
            icon: Search,
            title: "Reg Search",
            color: "text-[#F87866]"
        },
        {
            icon: Camera,
            title: "Visual AI",
            color: "text-[#FBB429]"
        },
        {
            icon: Shield,
            title: "Compliance Check",
            color: "text-[#F87866]"
        },
        {
            icon: Ruler,
            title: "Plan Review",
            color: "text-[#FBB429]"
        },
        {
            icon: BarChart3,
            title: "Risk Scoring",
            color: "text-[#F87866]"
        },
        {
            icon: HardHat,
            title: "Ram Statement",
            color: "text-[#FBB429]"
        },
        {
            icon: Zap,
            title: "Instant Export",
            color: "text-[#F87866]"
        }
    ]

    return (
        <section className="py-10 bg-white dark:bg-[#0a1929]">
            <div className="container mx-auto px-4 text-center">
                <div className="mb-8">
                    <h2 className="font-['Big_Shoulders_Display'] text-4xl md:text-5xl font-bold mb-4 text-foreground dark:text-white">
                        Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">Power of AI</span>
                    </h2>
                    <p className="text-xl text-muted-foreground dark:text-neutral-300 max-w-2xl mx-auto">
                        A complete suite of intelligent tools designed for the modern construction professional.
                    </p>
                </div>

                {/* Dense Grid of Small Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-6xl mx-auto">
                    {capabilities.map((item, i) => (
                        <div key={i} className="bg-background dark:bg-[#0d1f33] p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 text-left hover:border-[#FBB429]/50 transition-colors shadow-sm cursor-default flex items-center gap-3">
                            <item.icon className={`w-6 h-6 ${item.color} flex-shrink-0`} />
                            <h3 className="font-bold text-base text-foreground dark:text-white leading-tight">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
