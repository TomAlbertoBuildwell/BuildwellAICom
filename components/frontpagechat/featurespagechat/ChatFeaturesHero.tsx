"use client"

import Image from 'next/image'
import { Button } from './../ui/button' // Local clone
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function ChatFeaturesHero() {
    return (
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/chatimg/build.jpg"
                    alt="BuildwellAI Chat Interface"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Black Overlay for consistent look */}
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="container relative z-10 mx-auto px-4">
                <div className="mx-auto max-w-4xl text-center text-white">
                    {/* ENFORCED FONT: Big Shoulders Display */}
                    <h1 className="font-['Big_Shoulders_Display'] text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl mb-6">
                        Your AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">Regulatory Expert</span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-gray-200 mb-10">
                        Get instant, cited answers to UK building regulations. Analyze documents, check compliance, and automate your golden thread documentation.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            asChild
                            size="lg"
                            className="bg-gradient-to-r from-[#FBB429] to-[#F87866] text-white border-none hover:opacity-90 px-8 py-6 text-lg rounded-[5px]"
                        >
                            <Link href="/login"> {/* Updated for migration default */}
                                Start Chatting Free
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 px-8 py-6 text-lg rounded-[5px]"
                        >
                            <Link href="#features">
                                Explore Features
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

