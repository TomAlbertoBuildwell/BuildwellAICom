"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { MarketingNav } from "@/components/marketing-nav"
import { MarketingFooter } from "@/components/marketing-footer"
import { CTASection } from "@/components/CTASection"
import {
    ArrowRight,
    ChevronDown,
    Camera,
    Eye,
    FileText,
    Shield,
    CheckCircle,
    Bell,
    Search,
    Lock,
    Zap,
    FileCheck,
    MessageSquare,
    BarChart3,
    MapPin,
    Users,
    Download,
    Link2,
    Calendar,
    Lightbulb,
    Wifi,
    WifiOff,
    Globe,
    Sparkles,
} from "lucide-react"

/* ── Animation presets ─────────────────────── */
const fade = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
}
const stagger = { visible: { transition: { staggerChildren: 0.08 } } }

/* ── Reusable browser-frame video wrapper ──── */
function BrowserFrame({ children, url }: { children: React.ReactNode; url?: string }) {
    return (
        <div className="rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-2xl overflow-hidden bg-white dark:bg-[#1a1a2e]">
            {/* Chrome bar */}
            <div className="flex items-center gap-2 px-4 py-2.5 bg-neutral-100 dark:bg-[#1e1e30] border-b border-neutral-200 dark:border-neutral-700">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>
                {url && (
                    <div className="ml-3 flex-1 max-w-md">
                        <div className="bg-white dark:bg-[#2a2a3e] rounded-md px-3 py-1 text-xs text-muted-foreground truncate border border-neutral-200 dark:border-neutral-600">
                            {url}
                        </div>
                    </div>
                )}
            </div>
            {/* Video content */}
            <div className="bg-neutral-900">
                {children}
            </div>
        </div>
    )
}

/* ═══════════════════════════════════════════════════════
   HERO — Full-bleed background image with overlay
   Inspired by Procore's construction-site hero
   ═══════════════════════════════════════════════════════ */
function Hero() {
    return (
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/features_hero.jpg"
                    alt="Construction site"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center py-32 md:py-40">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 rounded-[5px] bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-sm font-semibold text-white mb-6">
                        <Sparkles className="h-4 w-4 text-[#FBB429]" />
                        The Buildwell Toolkit
                    </div>

                    <h1 className="font-['Big_Shoulders_Display'] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[0.95] tracking-tight mb-6 max-w-4xl mx-auto">
                        Your workflow,{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">
                            supercharged
                        </span>
                    </h1>

                    <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mb-10">
                        Five AI-powered products that work together to transform how you manage
                        projects, compliance, and building safety across every stage of construction.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/pricing">
                            <button className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FBB429] to-[#F87866] text-white px-8 py-3 rounded-[5px] font-semibold text-base hover:shadow-lg hover:shadow-orange-500/25 hover:opacity-95 transition-all duration-300">
                                Get Started Today
                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                        <Link href="/contact">
                            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/30 bg-white/5 backdrop-blur-sm text-white px-8 py-3 rounded-[5px] font-semibold text-base hover:bg-white/15 transition-all duration-300">
                                Book a Demo
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

/* ═══════════════════════════════════════════════════════
   OVERVIEW CARDS — Quick product overview (4 cols)
   Inspired by Procore's card sections
   ═══════════════════════════════════════════════════════ */
function OverviewCards() {
    const cards = [
        { icon: Eye, title: "Site Monitoring", desc: "AI-powered defect detection and safety monitoring in real-time", color: "#FBB429" },
        { icon: MessageSquare, title: "AI Assistant", desc: "Natural language queries across 40+ UK construction standards", color: "#F87866" },
        { icon: FileText, title: "Smart Documentation", desc: "AI sorts & classifies hundreds of documents by type and trade", color: "#FBB429" },
        { icon: CheckCircle, title: "Site Inspections", desc: "Mobile-first reporting with photo evidence and instant PDFs", color: "#F87866" },
    ]

    return (
        <section className="py-16 bg-white dark:bg-[#0a1929]">
            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={stagger}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
                >
                    {cards.map((c, i) => (
                        <motion.div
                            key={i}
                            variants={fade}
                            className="group p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0d1f33] hover:shadow-lg hover:border-[#FBB429]/30 transition-all duration-300"
                        >
                            <div
                                className="flex h-11 w-11 items-center justify-center rounded-lg mb-4"
                                style={{ background: `linear-gradient(135deg, ${c.color}20, ${c.color}10)` }}
                            >
                                <c.icon className="h-5 w-5" style={{ color: c.color }} />
                            </div>
                            <h3 className="font-['Big_Shoulders_Display'] text-xl font-bold text-foreground dark:text-white mb-2">
                                {c.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

/* ═══════════════════════════════════════════════════════
   ACCORDION ITEM — Reusable feature accordion
   Inspired by ArchiAdemia's expandable feature lists
   ═══════════════════════════════════════════════════════ */
function AccordionFeature({
    title,
    description,
    isActive,
    onClick,
    accentColor = "#FBB429",
}: {
    title: string
    description: string
    isActive: boolean
    onClick: () => void
    accentColor?: string
}) {
    return (
        <button
            onClick={onClick}
            className={`w-full text-left p-4 rounded-lg border transition-all duration-300 ${isActive
                ? "border-[#FBB429]/40 bg-gradient-to-r from-[#FBB429]/5 to-[#F87866]/5 shadow-sm"
                : "border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700"
                }`}
        >
            <div className="flex items-center justify-between">
                <h4
                    className={`font-semibold text-base transition-colors ${isActive ? "text-[#FBB429]" : "text-foreground dark:text-white"
                        }`}
                >
                    {title}
                </h4>
                <ChevronDown
                    className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${isActive ? "rotate-180" : ""
                        }`}
                />
            </div>
            <AnimatePresence>
                {isActive && (
                    <motion.p
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 8 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        className="text-sm text-muted-foreground leading-relaxed overflow-hidden"
                    >
                        {description}
                    </motion.p>
                )}
            </AnimatePresence>
        </button>
    )
}

/* ═══════════════════════════════════════════════════════
   PRODUCT: BuildwellEYE
   Layout: Large video right (60%) + text+accordion left
   ═══════════════════════════════════════════════════════ */
function EyeSection() {
    const [active, setActive] = useState(0)
    const features = [
        { title: "Real-time AI Detection", desc: "Instantly identify safety hazards, PPE violations, and quality defects across your site with computer vision that never sleeps." },
        { title: "Multi-Camera Integration", desc: "Connect existing CCTV, drones, or mobile devices. No new infrastructure required — our AI works with what you already have." },
        { title: "Smart Analytics Dashboard", desc: "Track trends over time with heatmaps, severity scoring, and automated weekly safety reports delivered to your inbox." },
        { title: "Instant Alert System", desc: "Get real-time SMS, email, and in-app notifications the moment a critical safety issue is detected on site." },
    ]

    return (
        <section className="py-16 bg-white dark:bg-[#0a1929]">
            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={stagger}
                >
                    {/* Section badge */}
                    <motion.div variants={fade} className="mb-4">
                        <span className="inline-flex items-center gap-2 rounded-[5px] bg-gradient-to-r from-[#FBB429]/10 to-[#F87866]/10 px-4 py-2 text-sm font-semibold text-[#FBB429] border border-[#FBB429]/20">
                            <Eye className="h-4 w-4" /> AI-Powered Vision
                        </span>
                    </motion.div>

                    <div className="grid lg:grid-cols-5 gap-10 items-start">
                        {/* Left col: text + accordion (2 cols) */}
                        <motion.div variants={fade} className="lg:col-span-2 space-y-5">
                            <h2 className="font-['Big_Shoulders_Display'] text-4xl lg:text-5xl font-bold text-foreground dark:text-white leading-[1.05] tracking-tight">
                                Your complete{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">
                                    AI vision studio
                                </span>
                            </h2>

                            <div className="space-y-2">
                                {features.map((f, i) => (
                                    <AccordionFeature
                                        key={i}
                                        title={f.title}
                                        description={f.desc}
                                        isActive={active === i}
                                        onClick={() => setActive(i)}
                                    />
                                ))}
                            </div>

                            <a href="https://eye.buildwellai.com" target="_blank" rel="noopener noreferrer">
                                <button className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FBB429] to-[#F87866] text-white px-8 py-3 rounded-[5px] font-semibold text-base hover:shadow-lg hover:opacity-95 transition-all duration-300 mt-2">
                                    Explore EYE <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </a>
                        </motion.div>

                        {/* Right col: large video (3 cols) */}
                        <motion.div variants={fade} className="lg:col-span-3">
                            <BrowserFrame url="eye.buildwellai.com">
                                <video
                                    className="w-full h-auto aspect-video object-cover"
                                    loop muted playsInline autoPlay
                                >
                                    <source src="https://res.cloudinary.com/drzxliqyz/video/upload/v1762606241/WhatsApp_Video_2025-11-07_at_18.14.45_6913d34a_wrpesi.mp4" type="video/mp4" />
                                </video>
                            </BrowserFrame>

                            {/* Stats row under video */}
                            <div className="grid grid-cols-3 gap-4 mt-5">
                                {[
                                    { value: "60%", label: "Fewer safety incidents" },
                                    { value: "24/7", label: "Continuous monitoring" },
                                    { value: "3×", label: "Faster issue detection" },
                                ].map((s, i) => (
                                    <div key={i} className="text-center p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#0d1f33]">
                                        <div className="font-['Big_Shoulders_Display'] text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">
                                            {s.value}
                                        </div>
                                        <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

/* ═══════════════════════════════════════════════════════
   PRODUCT: BuildwellCHAT
   Layout: Video left (60%) + text+accordion right
   Reversed layout from EYE for visual variety
   ═══════════════════════════════════════════════════════ */
function ChatSection() {
    const [active, setActive] = useState(0)
    const features = [
        { title: "Natural Language Queries", desc: "Ask about building regulations, project specs, or compliance requirements in plain English. No technical jargon needed." },
        { title: "Document Analysis", desc: "Upload PDFs, drawings, and specifications. Get instant summaries, gap analysis, and compliance checks against UK standards." },
        { title: "Diagram Generation", desc: "Generate professional flowcharts, process diagrams, and project visualizations directly from your conversations." },
        { title: "Citation-Backed Answers", desc: "Every response references the exact regulation clause, document page, or standard section — verifiable and traceable." },
    ]

    return (
        <section className="py-16 bg-white dark:bg-[#0a1929]">
            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={stagger}
                >
                    <motion.div variants={fade} className="mb-4">
                        <span className="inline-flex items-center gap-2 rounded-[5px] bg-gradient-to-r from-[#FBB429]/10 to-[#F87866]/10 px-4 py-2 text-sm font-semibold text-[#FBB429] border border-[#FBB429]/20">
                            <MessageSquare className="h-4 w-4" /> AI Construction Expert
                        </span>
                    </motion.div>

                    <div className="grid lg:grid-cols-5 gap-10 items-start">
                        {/* Left col: large video (3 cols) */}
                        <motion.div variants={fade} className="lg:col-span-3 order-2 lg:order-1">
                            <BrowserFrame url="chat.buildwellai.com">
                                <video
                                    className="w-full h-auto aspect-video object-cover"
                                    loop muted playsInline autoPlay
                                >
                                    <source src="https://res.cloudinary.com/drzxliqyz/video/upload/v1763297450/chatrec_kfrokc.mp4" type="video/mp4" />
                                </video>
                            </BrowserFrame>

                            {/* Feature cards under video */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                                {[
                                    { icon: Globe, title: "40+ Standards", desc: "UK building regs trained" },
                                    { icon: Zap, title: "Instant Answers", desc: "Sub-second response time" },
                                ].map((c, i) => (
                                    <div key={i} className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#0d1f33] flex items-start gap-3">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-r from-[#FBB429]/15 to-[#F87866]/15 flex-shrink-0">
                                            <c.icon className="h-4 w-4 text-[#FBB429]" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-sm text-foreground dark:text-white">{c.title}</h4>
                                            <p className="text-xs text-muted-foreground mt-0.5">{c.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right col: text + accordion (2 cols) */}
                        <motion.div variants={fade} className="lg:col-span-2 space-y-5 order-1 lg:order-2">
                            <h2 className="font-['Big_Shoulders_Display'] text-4xl lg:text-5xl font-bold text-foreground dark:text-white leading-[1.05] tracking-tight">
                                Your construction{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">
                                    expert, 24/7
                                </span>
                            </h2>

                            <div className="space-y-2">
                                {features.map((f, i) => (
                                    <AccordionFeature
                                        key={i}
                                        title={f.title}
                                        description={f.desc}
                                        isActive={active === i}
                                        onClick={() => setActive(i)}
                                    />
                                ))}
                            </div>

                            <a href="https://chat.buildwellai.com" target="_blank" rel="noopener noreferrer">
                                <button className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FBB429] to-[#F87866] text-white px-8 py-3 rounded-[5px] font-semibold text-base hover:shadow-lg hover:opacity-95 transition-all duration-300 mt-2">
                                    Try CHAT <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

/* ═══════════════════════════════════════════════════════
   PRODUCT: BuildwellINSPECT
   Layout: Full-width video with overlay text, then
   3g feature cards below (Procore "keep projects
   moving forward" style)
   ═══════════════════════════════════════════════════════ */
function InspectSection() {
    const [active, setActive] = useState(0)
    const features = [
        { title: "Photo-First Snagging", desc: "Capture defects with GPS-tagged, timestamped photos. AI auto-categorizes issues by severity and trade for instant triage." },
        { title: "One-Click PDF Reports", desc: "Generate branded, professional inspection reports in minutes. Customizable templates with your company logo and formatting." },
        { title: "Full Offline Support", desc: "Works anywhere without internet — data syncs automatically when you're back online. Zero downtime on remote sites." },
        { title: "Task Assignment & Tracking", desc: "Assign issues to contractors, set deadlines, and track resolution progress. Automated reminders ensure nothing slips." },
    ]

    return (
        <section className="py-16 bg-white dark:bg-[#0a1929]">
            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={stagger}
                >
                    <motion.div variants={fade} className="mb-4">
                        <span className="inline-flex items-center gap-2 rounded-[5px] bg-gradient-to-r from-[#FBB429]/10 to-[#F87866]/10 px-4 py-2 text-sm font-semibold text-[#FBB429] border border-[#FBB429]/20">
                            <CheckCircle className="h-4 w-4" /> Mobile-First Inspections
                        </span>
                    </motion.div>

                    <div className="grid lg:grid-cols-5 gap-10 items-start">
                        {/* Left col: text + accordion */}
                        <motion.div variants={fade} className="lg:col-span-2 space-y-5">
                            <h2 className="font-['Big_Shoulders_Display'] text-4xl lg:text-5xl font-bold text-foreground dark:text-white leading-[1.05] tracking-tight">
                                Keep projects{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">
                                    moving forward
                                </span>
                            </h2>

                            <div className="space-y-2">
                                {features.map((f, i) => (
                                    <AccordionFeature
                                        key={i}
                                        title={f.title}
                                        description={f.desc}
                                        isActive={active === i}
                                        onClick={() => setActive(i)}
                                    />
                                ))}
                            </div>

                            <a href="https://inspect.buildwellai.com" target="_blank" rel="noopener noreferrer">
                                <button className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FBB429] to-[#F87866] text-white px-8 py-3 rounded-[5px] font-semibold text-base hover:shadow-lg hover:opacity-95 transition-all duration-300 mt-2">
                                    Explore INSPECT <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </a>
                        </motion.div>

                        {/* Right col: video + feature cards */}
                        <motion.div variants={fade} className="lg:col-span-3">
                            <BrowserFrame url="inspect.buildwellai.com">
                                <video
                                    className="w-full h-auto aspect-video object-cover"
                                    loop muted playsInline autoPlay
                                >
                                    <source src="https://res.cloudinary.com/drzxliqyz/video/upload/v1763297404/inspectvid_znvtb6.mp4" type="video/mp4" />
                                </video>
                            </BrowserFrame>

                            {/* Capability cards under video */}
                            <div className="grid grid-cols-3 gap-4 mt-5">
                                {[
                                    { icon: Camera, title: "360° Capture", desc: "Drones & LiDAR" },
                                    { icon: WifiOff, title: "Works Offline", desc: "Auto-syncs later" },
                                    { icon: Shield, title: "Compliance", desc: "BSA ready" },
                                ].map((c, i) => (
                                    <div key={i} className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#0d1f33] text-center">
                                        <c.icon className="h-5 w-5 text-[#FBB429] mx-auto mb-2" />
                                        <h4 className="font-semibold text-sm text-foreground dark:text-white">{c.title}</h4>
                                        <p className="text-xs text-muted-foreground mt-0.5">{c.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

/* ═══════════════════════════════════════════════════════
   PRODUCT: BuildwellTHREAD
   Layout: Video left + text right with card grid below
   ═══════════════════════════════════════════════════════ */
function ThreadSection() {
    const [active, setActive] = useState(0)
    const features = [
        { title: "AI Document Classification", desc: "Upload hundreds of documents at once. AI instantly classifies them by type, trade, building zone, and compliance category." },
        { title: "Automated Metadata Extraction", desc: "Automatically extract dates, revision numbers, approval status, and author information from every document." },
        { title: "Complete Traceability", desc: "Connect drawings to specifications, specifications to products, and products to certifications — an unbroken golden thread." },
        { title: "One-Click Handover Packages", desc: "Generate complete golden thread packages for handover, audits, or regulatory submission with a single click." },
    ]

    return (
        <section className="py-16 bg-white dark:bg-[#0a1929]">
            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={stagger}
                >
                    <motion.div variants={fade} className="mb-4">
                        <span className="inline-flex items-center gap-2 rounded-[5px] bg-gradient-to-r from-[#FBB429]/10 to-[#F87866]/10 px-4 py-2 text-sm font-semibold text-[#FBB429] border border-[#FBB429]/20">
                            <FileText className="h-4 w-4" /> Golden Thread Compliance
                        </span>
                    </motion.div>

                    <div className="grid lg:grid-cols-5 gap-10 items-start">
                        {/* Left col: video */}
                        <motion.div variants={fade} className="lg:col-span-3 order-2 lg:order-1">
                            <BrowserFrame url="thread.buildwellai.com">
                                <video
                                    className="w-full h-auto aspect-video object-cover"
                                    loop muted playsInline autoPlay
                                >
                                    <source src="https://res.cloudinary.com/drzxliqyz/video/upload/v1763297405/threadvid_oxmkua.mp4" type="video/mp4" />
                                </video>
                            </BrowserFrame>

                            {/* Golden thread capability cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
                                {[
                                    { icon: Link2, title: "Document Linking", desc: "Full traceability chain" },
                                    { icon: MapPin, title: "GPS Tracking", desc: "Zone-tagged documents" },
                                    { icon: Download, title: "Export Packages", desc: "One-click handover" },
                                ].map((c, i) => (
                                    <div key={i} className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#0d1f33] text-center">
                                        <c.icon className="h-5 w-5 text-[#FBB429] mx-auto mb-2" />
                                        <h4 className="font-semibold text-sm text-foreground dark:text-white">{c.title}</h4>
                                        <p className="text-xs text-muted-foreground mt-0.5">{c.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right col: text + accordion */}
                        <motion.div variants={fade} className="lg:col-span-2 space-y-5 order-1 lg:order-2">
                            <h2 className="font-['Big_Shoulders_Display'] text-4xl lg:text-5xl font-bold text-foreground dark:text-white leading-[1.05] tracking-tight">
                                Handle the{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">
                                    compliance side
                                </span>{" "}
                                with ease
                            </h2>

                            <div className="space-y-2">
                                {features.map((f, i) => (
                                    <AccordionFeature
                                        key={i}
                                        title={f.title}
                                        description={f.desc}
                                        isActive={active === i}
                                        onClick={() => setActive(i)}
                                    />
                                ))}
                            </div>

                            <a href="https://thread.buildwellai.com" target="_blank" rel="noopener noreferrer">
                                <button className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FBB429] to-[#F87866] text-white px-8 py-3 rounded-[5px] font-semibold text-base hover:shadow-lg hover:opacity-95 transition-all duration-300 mt-2">
                                    Explore THREAD <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

/* ═══════════════════════════════════════════════════════
   PRODUCT: BuildwellNEWS
   Layout: Full-width video with gradient overlay text,
   then feature list below (Procore wide-shot style)
   ═══════════════════════════════════════════════════════ */
function NewsSection() {
    const [active, setActive] = useState(0)
    const features = [
        { title: "Real-time Regulatory Alerts", desc: "Get instant notifications when Building Safety Act amendments, material recalls, or safety notices are published that affect your projects." },
        { title: "AI-Curated Intelligence", desc: "Our AI filters thousands of sources daily, surfacing only the news, trends, and updates relevant to your specific project types and regions." },
        { title: "Compliance Tracking", desc: "Monitor Building Safety Act updates, NHBC standards changes, and local authority requirements in a single unified feed." },
        { title: "Trending Topics Analysis", desc: "See what the industry is talking about. AI identifies emerging trends, risks, and opportunities across UK construction." },
    ]

    return (
        <section className="py-16 bg-white dark:bg-[#0a1929]">
            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={stagger}
                >
                    <motion.div variants={fade} className="mb-4">
                        <span className="inline-flex items-center gap-2 rounded-[5px] bg-gradient-to-r from-[#FBB429]/10 to-[#F87866]/10 px-4 py-2 text-sm font-semibold text-[#FBB429] border border-[#FBB429]/20">
                            <Bell className="h-4 w-4" /> Industry Intelligence
                        </span>
                    </motion.div>

                    {/* Full-width video with overlay */}
                    <motion.div variants={fade} className="mb-10">
                        <div className="rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-2xl overflow-hidden bg-white dark:bg-[#1a1a2e]">
                            {/* Chrome bar for NEWS video */}
                            <div className="flex items-center gap-2 px-4 py-2.5 bg-neutral-100 dark:bg-[#1e1e30] border-b border-neutral-200 dark:border-neutral-700">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                                    <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                                </div>
                                <div className="ml-3 flex-1 max-w-md">
                                    <div className="bg-white dark:bg-[#2a2a3e] rounded-md px-3 py-1 text-xs text-muted-foreground truncate border border-neutral-200 dark:border-neutral-600">
                                        news.buildwellai.com
                                    </div>
                                </div>
                            </div>
                            <div className="relative aspect-video bg-neutral-900">
                                <video
                                    className="w-full h-full object-cover"
                                    loop muted playsInline autoPlay
                                >
                                    <source src="https://res.cloudinary.com/drzxliqyz/video/upload/v1762797262/showcasenews_peihce.mp4" type="video/mp4" />
                                </video>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                                    <h2 className="font-['Big_Shoulders_Display'] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight">
                                        Stay informed.{" "}
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">
                                            Stay compliant.
                                        </span>
                                    </h2>
                                    <p className="text-base md:text-lg text-white/85 max-w-2xl leading-relaxed">
                                        Your central hub for curated UK construction news, safety alerts, and regulatory updates. AI filters the noise so you see only what matters.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Accordion + stat cards */}
                    <div className="grid lg:grid-cols-2 gap-10 items-start">
                        <motion.div variants={fade} className="space-y-2">
                            {features.map((f, i) => (
                                <AccordionFeature
                                    key={i}
                                    title={f.title}
                                    description={f.desc}
                                    isActive={active === i}
                                    onClick={() => setActive(i)}
                                />
                            ))}

                            <div className="pt-3">
                                <a href="https://news.buildwellai.com" target="_blank" rel="noopener noreferrer">
                                    <button className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FBB429] to-[#F87866] text-white px-8 py-3 rounded-[5px] font-semibold text-base hover:shadow-lg hover:opacity-95 transition-all duration-300">
                                        Explore NEWS <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </a>
                            </div>
                        </motion.div>

                        {/* Info cards grid */}
                        <motion.div variants={fade} className="grid grid-cols-2 gap-4">
                            {[
                                { icon: Bell, title: "Live Alerts", desc: "Instant push notifications for critical regulatory changes and safety notices", stat: "Real-time" },
                                { icon: Search, title: "Smart Search", desc: "AI-powered search across every UK construction news source", stat: "1000+ sources" },
                                { icon: Shield, title: "BSA Tracker", desc: "Building Safety Act amendments monitored and explained in plain English", stat: "Always current" },
                                { icon: BarChart3, title: "Trend Analysis", desc: "AI identifies emerging risks and opportunities across the industry", stat: "Daily insights" },
                            ].map((c, i) => (
                                <div key={i} className="p-5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#0d1f33]">
                                    <c.icon className="h-5 w-5 text-[#FBB429] mb-3" />
                                    <h4 className="font-semibold text-sm text-foreground dark:text-white mb-1">{c.title}</h4>
                                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">{c.desc}</p>
                                    <span className="inline-block text-xs font-bold text-[#FBB429] bg-[#FBB429]/10 px-2 py-0.5 rounded-[5px]">
                                        {c.stat}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

/* ═══════════════════════════════════════════════════════
   STATS BANNER — Bold numbers in a horizontal row
   ═══════════════════════════════════════════════════════ */
function StatsBanner() {
    const stats = [
        { value: "40+", label: "UK standards trained" },
        { value: "5", label: "Integrated products" },
        { value: "60%", label: "Faster compliance" },
        { value: "24/7", label: "Continuous monitoring" },
    ]

    return (
        <section className="py-14 bg-white dark:bg-[#0a1929] border-y border-neutral-200 dark:border-neutral-800">
            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={stagger}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                >
                    {stats.map((s, i) => (
                        <motion.div key={i} variants={fade}>
                            <div className="font-['Big_Shoulders_Display'] text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866] mb-1">
                                {s.value}
                            </div>
                            <p className="text-sm text-muted-foreground dark:text-neutral-400">{s.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

/* ═══════════════════════════════════════════════════════
   PAGE ASSEMBLY
   ═══════════════════════════════════════════════════════ */
export default function NewFeaturesPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-[#0a1929]">
            <MarketingNav />
            <main>
                <Hero />
                <OverviewCards />
                <EyeSection />
                <ChatSection />
                <InspectSection />
                <StatsBanner />
                <ThreadSection />
                <NewsSection />
                <CTASection />
            </main>
            <MarketingFooter />
        </div>
    )
}
