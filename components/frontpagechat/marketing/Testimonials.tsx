"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Testimonials() {
    const testimonials = [
        {
            quote: "BuildwellEYE caught a waterproofing defect that would have cost us £80,000 to fix after handover. Paid for itself on day one.",
            author: "James Mitchell",
            company: "Site Manager, Major UK Contractor",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&q=80"
        },
        {
            quote: "We reduced documentation time by 75% and passed our first BSA audit without a single query. Game changer.",
            author: "Sarah Jenkins",
            company: "Compliance Director, National Developer",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&q=80"
        },
        {
            quote: "Our team saves 10+ hours every week. The AI actually understands UK building regs—it's like having an expert on every site.",
            author: "David Chen",
            company: "H&S Officer, Regional Housebuilder",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&q=80"
        },
        {
            quote: "The automated Golden Thread tracking has completely transformed how we handle compliance documentation.",
            author: "Emma Thompson",
            company: "Project Director, Urban Living",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&q=80"
        },
        {
            quote: "Instant answers to complex regulation queries directly on site has improved our team's confidence massively.",
            author: "Michael Ross",
            company: "Senior Architect, Design & Build Co.",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&q=80"
        },
        {
            quote: "BuildwellINSPECT makes snagging significantly faster. The automated reports are professional and accurate.",
            author: "Lisa Patel",
            company: "Quality Manager, ConstructOne",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&q=80"
        }
    ]

    return (
        <section className="py-24 bg-muted/30 dark:bg-[#0d1f33]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-['Big_Shoulders_Display'] text-4xl lg:text-5xl font-bold text-foreground dark:text-white mb-4">
                        What Our Users <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">Are Saying</span>
                    </h2>
                    <p className="text-lg text-muted-foreground dark:text-neutral-400">
                        Trusted by construction professionals across the UK
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {testimonials.map((testimonial, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-background dark:bg-[#0a1929] p-8 rounded-[5px] border border-neutral-200 dark:border-neutral-700/50 flex flex-col h-full"
                        >
                            <div className="text-4xl text-[#FBB429]/30 mb-4">"</div>
                            <blockquote className="text-lg text-foreground dark:text-white mb-6 leading-relaxed flex-grow">
                                {testimonial.quote}
                            </blockquote>
                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#FBB429]/30 flex-shrink-0">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.author}
                                        width={48}
                                        height={48}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div>
                                    <div className="font-semibold text-foreground dark:text-white">
                                        {testimonial.author}
                                    </div>
                                    <div className="text-sm text-muted-foreground dark:text-neutral-400">
                                        {testimonial.company}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
