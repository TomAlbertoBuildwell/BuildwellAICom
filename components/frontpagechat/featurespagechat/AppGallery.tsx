"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle, Mic, Zap, Smartphone, MessageSquare } from 'lucide-react'

export function AppGallery() {
    return (
        <section className="py-20 bg-background dark:bg-[#0a1929] overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-10">
                    <div className="max-w-xl">
                        <div className="inline-block px-3 py-1 rounded-[5px] bg-[#FBB429]/10 text-[#FBB429] text-sm font-semibold mb-6 border border-[#FBB429]/20">
                            <Smartphone className="w-4 h-4 inline mr-2" />
                            Mobile App
                        </div>
                        <h2 className="font-['Big_Shoulders_Display'] text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-6 leading-tight">
                            The Power of PC, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">In Your Pocket</span>
                        </h2>
                        <p className="text-lg text-muted-foreground dark:text-neutral-300 mb-8 leading-relaxed">
                            Don't compromise on features when you're on site. We've packed the full power of our PC platform into our mobile app, plus exclusive new ways to communicate.
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-[#FBB429]/10 text-[#FBB429] shrink-0">
                                    <Zap className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground dark:text-white">Full Feature Parity</h4>
                                    <p className="text-sm text-muted-foreground dark:text-neutral-400">Every analysis tool, every document, every AI feature—accessible anywhere.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-[#F87866]/10 text-[#F87866] shrink-0">
                                    <Mic className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground dark:text-white">New: V2V Communication</h4>
                                    <p className="text-sm text-muted-foreground dark:text-neutral-400">Reliable Voice-to-Voice AI interaction for hands-free site queries.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 opacity-90">
                            <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Coming Soon on Mobile</h4>
                            <div className="flex flex-wrap gap-4">
                                <button disabled className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 px-6 py-3 rounded-[5px] flex items-center gap-3 opacity-70 cursor-not-allowed transition-none">
                                    <span className="text-left">
                                        <span className="block text-[10px] opacity-70">Coming soon on</span>
                                        <span className="font-bold text-base">App Store</span>
                                    </span>
                                </button>
                                <button disabled className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 px-6 py-3 rounded-[5px] flex items-center gap-3 opacity-70 cursor-not-allowed transition-none">
                                    <span className="text-left">
                                        <span className="block text-[10px] opacity-70">Coming soon on</span>
                                        <span className="font-bold text-base">Google Play</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Phones Visual */}
                    <div className="relative w-full lg:w-1/2 flex justify-center">
                        {/* Circle Background */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#FBB429]/20 to-[#F87866]/20 rounded-full blur-3xl -z-10" />

                        <div className="grid grid-cols-2 gap-4">
                            {/* Phone 1 feature card style */}
                            <motion.div
                                initial={{ opacity: 1, rotate: 0, x: 40, y: 60 }}
                                whileInView={{ opacity: 1, rotate: -6, x: 0, y: 16 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, ease: "backOut" }}
                                className="mt-12 bg-neutral-900 border-4 border-neutral-800 rounded-[2rem] p-2 shadow-2xl w-[180px] h-[360px] md:w-[220px] md:h-[440px]"
                            >
                                <div className="h-full w-full bg-neutral-800 rounded-[1.5rem] overflow-hidden relative">
                                    <div className="absolute inset-0 flex items-center justify-center bg-[#0a1929]">
                                        <div className="text-center p-4">
                                            <MessageSquare className="w-12 h-12 text-[#FBB429] mx-auto mb-4" />
                                            <p className="text-white font-bold text-lg">Full Chat <br />History</p>
                                        </div>
                                    </div>
                                    {/* <Image src="/mobile-1.png" fill className="object-cover" alt="Mobile App" /> */}
                                </div>
                            </motion.div>

                            {/* Phone 2 V2V focus */}
                            <motion.div
                                initial={{ opacity: 1, rotate: 0, x: -40, y: 60 }}
                                whileInView={{ opacity: 1, rotate: 6, x: 0, y: -16 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, ease: "backOut", delay: 0.1 }}
                                className="bg-neutral-900 border-4 border-neutral-800 rounded-[2rem] p-2 shadow-2xl w-[180px] h-[360px] md:w-[220px] md:h-[440px] z-10"
                            >
                                <div className="h-full w-full bg-neutral-800 rounded-[1.5rem] overflow-hidden relative">
                                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#FBB429] to-[#F87866]">
                                        <div className="text-center p-4">
                                            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6 animate-pulse">
                                                <Mic className="w-8 h-8 text-white" />
                                            </div>
                                            <p className="text-white font-bold text-xl mb-2">V2V Active</p>
                                            <p className="text-white/80 text-sm">"Check Part B for fire doors..."</p>
                                        </div>
                                    </div>
                                    {/* <Image src="/mobile-2.png" fill className="object-cover" alt="Mobile App V2V" /> */}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
