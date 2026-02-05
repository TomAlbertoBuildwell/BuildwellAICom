"use client"

import { Zap, Database, ShieldCheck, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./../ui/card" // Local clone

export function ChatSpeedStats() {
    const stats = [
        {
            label: "Average Response Time",
            value: "< 1.2s",
            desc: "Instant answers for complex regulatory queries",
            color: "bg-gradient-to-r from-[#FBB429] to-[#F87866]"
        },
        {
            label: "Regulatory Knowledge",
            value: "100%",
            desc: "Trained on all Approved Documents & British Standards",
            color: "bg-gradient-to-r from-[#FBB429] to-[#F87866]"
        },
        {
            label: "Uptime SLA",
            value: "99.9%",
            desc: "Enterprise-grade reliability for your projects",
            color: "bg-gradient-to-r from-[#FBB429] to-[#F87866]"
        },
        {
            label: "Context Window",
            value: "128k",
            desc: "Analyze huge documents & full drawing sets at once",
            color: "bg-gradient-to-r from-[#FBB429] to-[#F87866]"
        }
    ]

    return (
        <section className="container mx-auto px-4 py-20 bg-white dark:bg-[#0a1929]">
            <div className="mx-auto max-w-3xl text-center mb-16">
                <h2 className="font-['Big_Shoulders_Display'] text-3xl font-bold tracking-tight md:text-4xl text-foreground dark:text-white">
                    Unmatched <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">Performance</span>
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground dark:text-gray-300">
                    Built on advanced AI architecture designed specifically for the construction industry
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
                {stats.map((stat, index) => (
                    <Card key={index} className="border-border hover:shadow-sm transition-shadow dark:bg-[#0d1f33] dark:border-white/10 rounded-[5px]">
                        <CardHeader>
                            {/* Minimized Shadow / Radius / No Icon */}
                            <div className="font-['Big_Shoulders_Display'] text-4xl font-bold text-foreground dark:text-white mb-1">
                                {stat.value}
                            </div>
                            <CardTitle className="font-['Big_Shoulders_Display'] text-lg text-muted-foreground dark:text-gray-400">
                                {stat.label}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="leading-relaxed text-sm">
                                {stat.desc}
                            </CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
