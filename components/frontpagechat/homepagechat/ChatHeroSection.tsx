"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "./../ui/button" // Local clone
import { ContainerScroll } from "./../ui/container-scroll-animation" // Local clone

export const ChatHeroSection = () => {
    return (
        <section className="relative bg-white dark:bg-[#0a1929] overflow-hidden">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                {/* Large animated blob 1 */}
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
                {/* Large animated blob 2 */}
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
                {/* Small floating orb */}
                <motion.div
                    className="absolute top-1/2 left-1/4 w-32 h-32 bg-[#FBB429]/40 rounded-full blur-2xl"
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                {/* Another small orb */}
                <motion.div
                    className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-[#F87866]/40 rounded-full blur-2xl"
                    animate={{
                        y: [0, 20, 0],
                        x: [0, -20, 0],
                        opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <ContainerScroll
                titleComponent={
                    <div className="relative z-10 mx-auto max-w-4xl text-center mb-20 md:mb-40">
                        <h1 className="font-['Big_Shoulders_Display'] text-balance text-4xl font-bold md:text-5xl lg:text-6xl text-foreground dark:text-white mb-6">
                            Your AI-Powered{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">
                                Construction Expert
                            </span>
                        </h1>
                        <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
                            Get instant answers to building regulations, analyze project documents, and receive expert guidance—all powered by AI trained on UK construction standards.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                asChild
                                size="lg"
                                className="bg-gradient-to-r from-[#FBB429] to-[#F87866] text-white px-8 py-3 rounded-[5px] font-semibold hover:shadow-lg hover:opacity-95 transition-all duration-300 border-none">
                                <Link href="/dashboard">
                                    <span>Start Chatting Free</span>
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="border-2 border-neutral-300 dark:border-neutral-600 text-foreground dark:text-white px-8 py-3 rounded-[5px] font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300">
                                <Link href="#features">
                                    <span>See How It Works</span>
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
                        src="/chatimg/chat_screenshot.jpeg"
                        alt="BuildwellAI Chat Interface"
                        fill
                        priority
                    />
                    {/* Dark Mode Image */}
                    <Image
                        className="rounded-[5px] object-cover object-top h-full w-full hidden dark:block"
                        src="/chatimg/chat_screenshot.jpeg"
                        alt="BuildwellAI Chat Interface"
                        fill
                        priority
                    />
                </div>
            </ContainerScroll>
        </section>
    )
}
