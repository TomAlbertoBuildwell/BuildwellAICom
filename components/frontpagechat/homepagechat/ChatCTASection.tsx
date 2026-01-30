"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ChatCTASection() {
    return (
        <section className="w-full py-20 relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/build.jpg"
                    alt="Construction site"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="space-y-6">
                        <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl text-white">
                            Ready to Build <span className="text-gradient-orange">Safer & Smarter</span>?
                        </h2>
                        <p className="text-lg leading-relaxed text-gray-200">
                            Book a demo to see how AI-powered monitoring can reduce safety incidents and keep your projects on track.
                        </p>
                        <div className="flex flex-col items-center justify-center gap-6 pt-4">
                            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                                <Link href="/dashboard" className="w-full sm:w-auto">
                                    <Button className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FBB429] to-[#F87866] text-white px-8 py-3 rounded-[5px] font-semibold text-base hover:shadow-lg hover:opacity-95 transition-all duration-300 h-14 w-full sm:w-auto">
                                        Get Started
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
