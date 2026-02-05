"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "./../ui/button" // Local clone
import { ContainerScroll } from "./../ui/container-scroll-animation" // Local clone
import { Layers } from "lucide-react"

export function MainFeaturesHero() {
    return (
        <section className="relative bg-white dark:bg-[#0a1929] overflow-hidden">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <motion.div
                    className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-[#FBB429]/30 to-[#F87866]/30 rounded-full blur-3xl"
                    animate={{
                        x: [0, 100, 50, 0],
                        y: [0, 50, 100, 0],
                        scale: [1, 1.2, 0.9, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute top-1/4 -right-20 w-96 h-96 bg-gradient-to-l from-[#FBB429]/20 to-[#F87866]/20 rounded-full blur-3xl"
                    animate={{
                        x: [0, -80, -40, 0],
                        y: [0, 80, 40, 0],
                        scale: [1, 0.8, 1.1, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <ContainerScroll
                titleComponent={
                    <div className="relative z-10 mx-auto max-w-4xl text-center mb-20 md:mb-40">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-6">
                            <Layers className="w-4 h-4 text-[#FBB429]" />
                            <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                                Integrated Construction Cloud
                            </span>
                        </div>

                        {/* ENFORCED FONT: Big Shoulders Display */}
                        <h1 className="font-['Big_Shoulders_Display'] text-balance text-4xl font-bold md:text-5xl lg:text-7xl text-foreground dark:text-white mb-6 leading-tight">
                            Complete Compliance Platform <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">
                                Powered by AI
                            </span>
                        </h1>
                        <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground dark:text-neutral-300">
                            Five integrated products that work together to transform how you manage building safety, compliance, and documentation.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                asChild
                                size="lg"
                                className="bg-gradient-to-r from-[#FBB429] to-[#F87866] text-white px-8 py-3 rounded-[5px] font-semibold hover:shadow-lg hover:opacity-95 transition-all duration-300 border-none">
                                <Link href="/contact">
                                    <span>Get a Demo</span>
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="border-2 border-neutral-300 dark:border-neutral-600 text-foreground dark:text-white px-8 py-3 rounded-[5px] font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300">
                                <Link href="#features">
                                    <span>Explore Products</span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                }
            >
                <div className="relative w-full h-full">
                    {/* Light Mode Image */}
                    <Image
                        className="rounded-[5px] object-cover object-top h-full w-full dark:hidden"
                        src="/chatimg/signupim.png"
                        alt="BuildwellAI Platform Dashboard"
                        fill
                        priority
                    />
                    {/* Dark Mode Image */}
                    <Image
                        className="rounded-[5px] object-cover object-top h-full w-full hidden dark:block"
                        src="/chatimg/signupim.png"
                        alt="BuildwellAI Platform Dashboard"
                        fill
                        priority
                    />
                </div>
            </ContainerScroll>
        </section>
    )
}

