"use client"

import { useRef, useEffect } from 'react'
import { Button } from './../ui/button' // Local clone
import { ArrowRight } from 'lucide-react'

export function FeatureVideoHero() {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(() => {
                // Auto-play was prevented
            })
        }
    }, [])

    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-background dark:bg-[#0a1929]">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866] uppercase tracking-wider mb-4 block">
                        See It In Action
                    </span>
                    <h1 className="font-['Big_Shoulders_Display'] text-4xl md:text-5xl lg:text-6xl font-bold text-foreground dark:text-white mb-6">
                        The Power of AI, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">
                            Simplified for Construction
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-8">
                        BuildwellCHAT understands your project documents, local regulations, and safety standards.
                        Watch how it instantly answers complex queries and generates reports.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a href="https://chat.buildwellai.com" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-gradient-to-r from-[#FBB429] to-[#F87866] text-white hover:opacity-90 rounded-[5px]">
                                Try It Yourself
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </a>
                    </div>
                </div>

                {/* Video Container with Macbook-style Frame */}
                <div className="relative max-w-5xl mx-auto">
                    <div className="relative rounded-xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 bg-black">
                        <div className="absolute top-0 w-full h-8 bg-neutral-100 dark:bg-neutral-900 flex items-center px-4 gap-2 z-10 border-b border-neutral-200 dark:border-neutral-800">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>
                        <div className="pt-8">
                            <video
                                ref={videoRef}
                                className="w-full h-auto aspect-video object-cover"
                                loop
                                muted
                                playsInline
                                autoPlay
                                poster="/chatimg/build.jpg"
                            >
                                {/* Using a placeholder video, intended replaced with actual screen recording */}
                                <source src="https://res.cloudinary.com/drzxliqyz/video/upload/v1762606241/WhatsApp_Video_2025-11-07_at_18.14.45_6913d34a_wrpesi.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1929]/20 to-transparent pointer-events-none" />
                        </div>
                    </div>

                    {/* Decorative Glow */}
                    <div className="absolute -inset-10 bg-gradient-to-r from-[#FBB429]/20 to-[#F87866]/20 blur-3xl -z-10 rounded-full opacity-50" />
                </div>
            </div>
        </section>
    )
}
