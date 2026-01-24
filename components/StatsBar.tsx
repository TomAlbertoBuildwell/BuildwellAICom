"use client"

import { motion } from "framer-motion"

export function StatsBar() {
    const stats = [
        { value: "60%", label: "Faster defect detection" },
        { value: "10+", label: "Hours saved weekly" },
        { value: "90%", label: "Faster reporting" },
        { value: "100%", label: "BSA compliant" }
    ]

    return (
        <section className="py-16 bg-muted/30 dark:bg-[#0d1f33] border-y border-neutral-200 dark:border-neutral-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="text-center"
                        >
                            <div className="font-display text-4xl md:text-5xl font-bold text-[#FBB429] mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm md:text-base text-muted-foreground dark:text-neutral-400">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
