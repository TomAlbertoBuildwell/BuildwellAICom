"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Testimonials() {
    const testimonials = [
        {
            quote: "BuildwellEYE caught a waterproofing defect that would have cost us £80,000 to fix after handover. Paid for itself on day one.",
            author: "Site Manager",
            company: "Major UK Contractor",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&q=80"
        },
        {
            quote: "We reduced documentation time by 75% and passed our first BSA audit without a single query. Game changer.",
            author: "Compliance Director",
            company: "National Developer",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&q=80"
        },
        {
            quote: "Our team saves 10+ hours every week. The AI actually understands UK building regs—it's like having an expert on every site.",
            author: "H&S Officer",
            company: "Regional Housebuilder",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&q=80"
        }
    ]

    return (
        <section className="py-24 bg-muted/30 dark:bg-[#0d1f33]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground dark:text-white mb-4">
                        What construction teams are saying
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {testimonials.map((testimonial, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-background dark:bg-[#0a1929] p-8 rounded-[5px] border border-neutral-200 dark:border-neutral-700/50"
                        >
                            <div className="text-4xl text-[#FBB429]/30 mb-4">"</div>
                            <blockquote className="text-lg text-foreground dark:text-white mb-6 leading-relaxed">
                                {testimonial.quote}
                            </blockquote>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#FBB429]/30">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.author}
                                        width={48}
                                        height={48}
                                        className="object-cover"
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
