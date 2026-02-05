"use client"

import * as React from "react"

import { motion, useScroll, useSpring, useInView } from "framer-motion"
import { MarketingNav } from "@/components/marketing-nav"
import { MarketingFooter } from "@/components/marketing-footer"
import { HeroCarousel } from "@/components/HeroParallaxDemo"
import { CTASection } from "@/components/CTASection"
import {
    ArrowRight,
    Search,
    Eye,
    FileText,
    MessageSquare,
    Camera,
    Newspaper,
    Shield,
    Clock,
    CheckCircle,
    Smartphone,
    BarChart3
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import Image from "next/image"
import Link from "next/link"

export default function NewHomepage() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="min-h-screen bg-white dark:bg-[#0a1929]">
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FBB429] to-[#F87866] origin-left z-50"
                style={{ scaleX }}
            />
            <MarketingNav />
            <main>
                {/* 
                    HOMEPAGE STRUCTURE - Optimal Order for Conversion
                    
                    1. Hero (with search) - Hook visitors ✓
                    2. Product Grid - Show what you offer ✓
                    3. Training/Compliance (Image + Text) - Build credibility ✓
                    4. Track & Log Features - Explain capabilities ✓
                    5. Platform Speed (Stats grid) - Fast performance proof ✓
                    6. Testimonials - Social proof ✓
                    7. Final CTA - Convert ✓
                    
                    Current sections below follow this proven conversion flow.
                */}


                {/* Hero Section - Same as main homepage */}
                <HeroCarousel backgroundImage="/signupim.png" />

                {/* What's Inside BuildwellAI - Product Grid with Featured Chat */}
                <section id="products" className="py-12 md:py-[100px] bg-background dark:bg-[#0a1929]">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground dark:text-white mb-4">
                                What <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">BuildwellAI</span> Provides
                            </h2>
                        </div>

                        {/* 3-column grid: 2 left stacked, 1 tall center (CHAT), 2 right stacked */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto mb-10 md:mb-12">
                            {/* Left Column - 2 cards stacked */}
                            <div className="flex flex-col gap-6">
                                {/* Card 1: EYE */}
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.2 }}
                                    className="group bg-white dark:bg-[#0d1f33] p-3 rounded-lg border border-neutral-200 dark:border-neutral-700/50 hover:border-[#FBB429]/50 transition-all"
                                >
                                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted">
                                        <Image
                                            src="/eye.jpg"
                                            alt="BuildwellEYE"
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="pt-5 pb-2 px-1">
                                        <h3 className="font-display text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                                            BuildwellEYE
                                        </h3>
                                        <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                                            AI-powered video analysis for real-time defect detection, safety monitoring, and site surveillance.
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Card 2: THREAD */}
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.2 }}
                                    className="group bg-white dark:bg-[#0d1f33] p-3 rounded-lg border border-neutral-200 dark:border-neutral-700/50 hover:border-[#FBB429]/50 transition-all"
                                >
                                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted">
                                        <Image
                                            src="/thread.jpg"
                                            alt="BuildwellTHREAD"
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="pt-5 pb-2 px-1">
                                        <h3 className="font-display text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                                            BuildwellTHREAD
                                        </h3>
                                        <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                                            Golden Thread documentation management with automated audit trails and compliance tracking.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Center Column - CHAT (Just a regular tall card) */}
                            <motion.div
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.2 }}
                                className="group bg-white dark:bg-[#0d1f33] p-3 rounded-lg border border-neutral-200 dark:border-neutral-700/50 hover:border-[#FBB429]/50 transition-all h-full flex flex-col"
                            >
                                <div className="relative flex-grow w-full overflow-hidden rounded-lg bg-muted min-h-[400px]">
                                    <Image
                                        src="/chat.jpg"
                                        alt="BuildwellCHAT"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="pt-5 pb-2 px-1">
                                    <h3 className="font-display text-3xl font-bold text-neutral-900 dark:text-white mb-3">
                                        BuildwellCHAT
                                    </h3>
                                    <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                                        AI assistant trained on 40+ UK building regulations including BSA 2022, CDM 2015, and Building Regulations.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Right Column - 2 cards stacked */}
                            <div className="flex flex-col gap-6">
                                {/* Card 4: INSPECT */}
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.2 }}
                                    className="group bg-white dark:bg-[#0d1f33] p-3 rounded-lg border border-neutral-200 dark:border-neutral-700/50 hover:border-[#FBB429]/50 transition-all"
                                >
                                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted">
                                        <Image
                                            src="/inspect.jpg"
                                            alt="BuildwellINSPECT"
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="pt-5 pb-2 px-1">
                                        <h3 className="font-display text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                                            BuildwellINSPECT
                                        </h3>
                                        <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                                            Digital snagging and inspection workflow with photo documentation and automated report generation.
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Card 5: NEWS */}
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.2 }}
                                    className="group bg-white dark:bg-[#0d1f33] p-3 rounded-lg border border-neutral-200 dark:border-neutral-700/50 hover:border-[#FBB429]/50 transition-all"
                                >
                                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted">
                                        <Image
                                            src="/news.jpg"
                                            alt="BuildwellNEWS"
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="pt-5 pb-2 px-1">
                                        <h3 className="font-display text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                                            BuildwellNEWS
                                        </h3>
                                        <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                                            Curated UK construction news and regulatory updates delivered to your dashboard daily.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>


                        <div className="text-left lg:text-center">
                            <Link href="/features" className="w-full md:w-auto">
                                <Button className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FBB429] to-[#F87866] text-white px-8 py-3 rounded-[5px] font-semibold text-base hover:shadow-lg hover:opacity-95 transition-all duration-300 h-auto w-full md:w-auto">
                                    Explore Features
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>


                {/* Training & Compliance - ArchAdemia Style (Image Left, Text Right) */}
                <section className="py-12 md:py-[100px] bg-background dark:bg-[#0a1929]">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center max-w-7xl mx-auto">
                            {/* Left: Large Image */}
                            <div className="relative">
                                <div className="rounded-xl overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
                                        alt="UK Building Regulations"
                                        width={800}
                                        height={600}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                                {/* Subtle glow effect */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-[#FBB429]/20 to-[#F87866]/20 rounded-2xl blur-3xl -z-10 opacity-50" />
                            </div>

                            {/* Right Text Content */}
                            <div className="text-center lg:text-left">
                                <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground dark:text-white leading-tight mb-6">
                                    Trained on <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">40+ </span>UK Construction Standards
                                </h2>
                                <p className="text-xl text-justify lg:text-left text-muted-foreground dark:text-neutral-400 mb-8 leading-relaxed">
                                    Comprehensive training on BSA 2022, CDM 2015, and UK Building Regulations. Ensure compliance and automatically maintain your Golden Thread documentation in real-time.
                                </p>

                                {/* Two Small Feature Cards Below Text */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="bg-muted/50 dark:bg-[#0d1f33] p-5 rounded-lg border border-neutral-200 dark:border-neutral-700/50">
                                        <CheckCircle className="w-8 h-8 text-[#FBB429] mb-3" />
                                        <h4 className="font-bold text-lg mb-1 text-foreground dark:text-white">Golden Thread</h4>
                                        <p className="text-sm text-muted-foreground dark:text-neutral-400">Automated audit trails.</p>
                                    </div>
                                    <div className="bg-muted/50 dark:bg-[#0d1f33] p-5 rounded-lg border border-neutral-200 dark:border-neutral-700/50">
                                        <Shield className="w-8 h-8 text-[#F87866] mb-3" />
                                        <h4 className="font-bold text-lg mb-1 text-foreground dark:text-white">CDM 2015</h4>
                                        <p className="text-sm text-muted-foreground dark:text-neutral-400">Integrated safety protocols.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Track and Log Section - ArchAdemia Style (Text Left, Image Right) */}
                <section className="pt-12 pb-10 md:pt-[100px] md:pb-16 bg-muted/30 dark:bg-[#0d1f33]">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center max-w-7xl mx-auto">
                            {/* Left Text Content */}
                            <div className="text-center lg:text-left">
                                <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground dark:text-white leading-tight mb-6">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">Track</span> and Log Continuous Professional Development.
                                </h2>
                                <p className="text-xl text-justify lg:text-left text-muted-foreground dark:text-neutral-400 mb-8 leading-relaxed">
                                    Leverage real-time project monitoring and AI-powered documentation tools. Maintain organized, professional records and stay ahead of schedule with automated administrative workflows.
                                </p>

                                {/* Two Small Feature Cards Below Text */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="bg-background dark:bg-[#0a1929] p-5 rounded-lg border border-neutral-200 dark:border-neutral-700/50">
                                        <Shield className="w-8 h-8 text-[#FBB429] mb-3" />
                                        <h4 className="font-bold text-lg mb-1 text-foreground dark:text-white">RIBA-Aligned</h4>
                                        <p className="text-sm text-muted-foreground dark:text-neutral-400">Standardized workflows.</p>
                                    </div>
                                    <div className="bg-background dark:bg-[#0a1929] p-5 rounded-lg border border-neutral-200 dark:border-neutral-700/50">
                                        <FileText className="w-8 h-8 text-[#F87866] mb-3" />
                                        <h4 className="font-bold text-lg mb-1 text-foreground dark:text-white">Auto-Docs</h4>
                                        <p className="text-sm text-muted-foreground dark:text-neutral-400">Instant report generation.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Large Image */}
                            <div className="relative">
                                <div className="rounded-xl overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                                        alt="BuildwellAI Dashboard Preview"
                                        width={800}
                                        height={600}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                                {/* Subtle glow effect */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-[#FBB429]/20 to-[#F87866]/20 rounded-2xl blur-3xl -z-10 opacity-50" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Everything You Need Section - Numbered Cards */}
                <section className="pt-12 pb-10 md:pt-[100px] md:pb-12 bg-background dark:bg-[#0a1929]">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12 md:mb-16">
                            <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground dark:text-white leading-tight mb-4">
                                Everything you need, in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">one place</span>.
                            </h2>
                            <p className="text-xl text-muted-foreground dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                                From initial planning to final sign-off, BuildwellAI provides everything you need to deliver projects on time and on budget.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                            {[
                                {
                                    number: "01",
                                    icon: Eye,
                                    title: "Visual Inspection",
                                    description: "AI-powered defect detection catches issues instantly, saving hours of manual review."
                                },
                                {
                                    number: "02",
                                    icon: FileText,
                                    title: "Doc Management",
                                    description: "Automatically organize and link documents. Never lose track of critical paperwork again."
                                },
                                {
                                    number: "03",
                                    icon: Shield,
                                    title: "Compliance",
                                    description: "Real-time compliance status tracking keeps you audit-ready at all times."
                                },
                                {
                                    number: "04",
                                    icon: BarChart3,
                                    title: "Analytics",
                                    description: "Track project milestones, identify risks, and make data-driven decisions."
                                }
                            ].map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -5 }}
                                    className="group relative bg-muted/50 dark:bg-[#0d1f33] p-6 rounded-xl border border-neutral-200 dark:border-neutral-700/50 hover:border-[#FBB429] transition-all"
                                >
                                    {/* Large faded number in background */}
                                    <span className="absolute top-4 left-6 text-6xl font-bold text-neutral-200/50 dark:text-neutral-700/30 select-none">
                                        {feature.number}
                                    </span>

                                    {/* Icon in top right */}
                                    <div className="flex justify-end mb-8">
                                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FBB429]/20 to-[#F87866]/20 flex items-center justify-center group-hover:from-[#FBB429] group-hover:to-[#F87866] transition-all">
                                            <feature.icon className="h-5 w-5 text-[#FBB429] group-hover:text-white transition-colors" />
                                        </div>
                                    </div>

                                    <h3 className="font-display text-xl font-bold text-foreground dark:text-white mb-3 group-hover:text-[#FBB429] transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground dark:text-neutral-400 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Mobile Apps Section - Interactive with Stacked Phones */}
                {(() => {
                    const [activeApp, setActiveApp] = React.useState(0);
                    const [isDesktop, setIsDesktop] = React.useState(false); // Default to mobile to prevent hydration mismatch, or handle with useEffect

                    React.useEffect(() => {
                        const check = () => setIsDesktop(window.innerWidth >= 1024);
                        check();
                        window.addEventListener('resize', check);
                        return () => window.removeEventListener('resize', check);
                    }, []);

                    const stackRef = React.useRef(null);
                    const isStackInView = useInView(stackRef, { once: true, amount: 0.4 });

                    const apps = [
                        {
                            name: "BuildwellINSPECT",
                            image: "/app1.png",
                            description: "Visual inspection powered by AI. Capture photos on-site and get instant defect detection, safety assessments, and compliance verification in real-time.",
                            features: ["AI defect detection", "Photo documentation", "Real-time safety checks"],
                            color: "#F87866"
                        },
                        {
                            name: "BuildwellCHAT",
                            image: "/app2.png",
                            description: "AI-powered construction assistant at your fingertips. Ask questions about regulations, get instant compliance checks, and generate documentation—all through natural conversation.",
                            features: ["Instant regulation answers", "AI compliance checking", "Document generation"],
                            color: "#FBB429"
                        },
                        {
                            name: "BuildwellEYE",
                            image: "/app3.png",
                            description: "Advanced visual monitoring and AI-driven site safety analytics. Real-time alerts for PPE compliance, unauthorized access, and proactive hazard detection.",
                            features: ["AI Safety Monitoring", "Hazard Detection", "24/7 Surveillance"],
                            color: "#FBB429"
                        }
                    ];
                    const currentApp = apps[activeApp];

                    return (
                        <section className="py-2 md:py-2 bg-muted/30 dark:bg-[#0d1f33] overflow-hidden">
                            <div className="container mx-auto px-4">
                                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 md:gap-16 items-center max-w-7xl mx-auto">
                                    {/* Left Text Content - Changes based on selected app */}
                                    <div className="text-center lg:text-left">
                                        <div className="inline-block px-3 py-1 rounded-[5px] bg-[#FBB429]/10 text-[#FBB429] text-sm font-semibold mb-6 border border-[#FBB429]/20">
                                            <Smartphone className="w-4 h-4 inline mr-2" />
                                            Mobile Apps
                                        </div>
                                        <h2 className="font-display text-5xl lg:text-6xl font-bold text-foreground dark:text-white leading-tight mb-6">
                                            Your construction <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">toolkit</span>, always in your pocket.
                                        </h2>

                                        {/* Dynamic App Content */}
                                        <div className="h-[400px] lg:h-auto lg:min-h-[200px]">
                                            <motion.div
                                                key={activeApp}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <h3 className="font-display text-5xl font-bold mb-3" style={{ color: currentApp.color }}>
                                                    {currentApp.name}
                                                </h3>
                                                <p className="text-xl text-justify lg:text-left text-muted-foreground dark:text-neutral-400 mb-6 leading-relaxed">
                                                    {currentApp.description}
                                                </p>
                                                <div className="space-y-3">
                                                    {currentApp.features.map((item, i) => (
                                                        <div key={i} className="flex items-center gap-3">
                                                            <CheckCircle className="w-5 h-5" style={{ color: currentApp.color }} />
                                                            <span className="text-lg text-foreground dark:text-white/90">{item}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        </div>

                                        {/* App Selector Dots */}
                                        <div className="flex justify-center lg:justify-start gap-2 mt-8">
                                            {apps.map((app, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => setActiveApp(i)}
                                                    className={`w-3 h-3 rounded-full transition-all ${activeApp === i ? 'w-8' : ''}`}
                                                    style={{ backgroundColor: activeApp === i ? app.color : '#666' }}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Right: Card Shuffle Stack - Front straight, others tilted, drag to switch */}
                                    <div className="relative flex flex-col items-center justify-center min-h-[700px] lg:min-h-[700px]">
                                        <div ref={stackRef} className="relative w-full lg:max-w-[500px] h-[650px] md:h-[650px] lg:h-[700px]">
                                            {/* Render images based on their position relative to activeApp */}
                                            {apps.map((app, index) => {
                                                // Calculate position: 0 = front, 1 = middle, 2 = back
                                                const position = (index - activeApp + 3) % 3;

                                                // Position configs - cards stack to the right, front is left
                                                // When dragging left, front exits left, new card slides in from right
                                                // Position configs - cards stack to the right, front is left
                                                // When dragging left, front exits left, new card slides in from right
                                                // Position configs - responsive
                                                // Desktop: Stacked to the left/right offset convention
                                                // Mobile: Centered stack to prevent clipping
                                                const positionConfigs = {
                                                    0: { x: isDesktop ? -160 : 0, y: '-50%', rotate: 0, scale: 1, zIndex: 30, opacity: 1 },
                                                    1: { x: isDesktop ? -40 : 50, y: '-50%', rotate: 6, scale: 0.95, zIndex: 20, opacity: 0.9 },
                                                    2: { x: isDesktop ? 40 : 100, y: '-50%', rotate: 12, scale: 0.9, zIndex: 10, opacity: 0.75 },
                                                };

                                                const stackedConfig = { x: 0, y: '-50%', rotate: 0, scale: 0.8, zIndex: 0, opacity: 0 };
                                                const currentConfig = isStackInView ? positionConfigs[position as keyof typeof positionConfigs] : stackedConfig;
                                                const isFront = position === 0;

                                                return (
                                                    <motion.div
                                                        key={app.name}
                                                        drag={isFront ? "x" : false}
                                                        dragSnapToOrigin={false} // Custom snap logic needed for bi-directional swipe
                                                        dragConstraints={isFront ? { left: -100, right: 100 } : undefined}
                                                        dragElastic={isFront ? 0.2 : undefined}
                                                        onDragEnd={isFront ? (_, { offset }) => {
                                                            // Swipe Left -> Next
                                                            if (offset.x < -50) {
                                                                setActiveApp((prev) => (prev + 1) % 3);
                                                            }
                                                            // Swipe Right -> Prev
                                                            else if (offset.x > 50) {
                                                                setActiveApp((prev) => (prev - 1 + 3) % 3);
                                                            }
                                                        } : undefined}
                                                        animate={currentConfig}
                                                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                                        onClick={!isFront ? () => setActiveApp(index) : undefined}
                                                        className={`absolute top-1/2 ${isDesktop ? 'left-1/2' : 'left-[-16px]'} w-[220px] h-[440px] md:w-[240px] md:h-[480px] lg:w-[240px] lg:h-[500px] ${isFront ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer'
                                                            }`} // Increased mobile size
                                                        style={isFront ? { touchAction: 'none' } : undefined}
                                                    >
                                                        <div className={`w-full h-full rounded-3xl overflow-hidden relative shadow-2xl ${isFront ? 'pointer-events-none' : ''}`}>
                                                            <Image
                                                                src={app.image}
                                                                alt={app.name}
                                                                fill
                                                                className="object-contain"
                                                            />
                                                            {/* Overlay filter for background cards */}
                                                            {!isFront && (
                                                                <div className={`absolute inset-0 transition-opacity duration-300 ${position === 1
                                                                    ? 'bg-white/30 dark:bg-black/40'
                                                                    : 'bg-white/50 dark:bg-black/60'
                                                                    }`} />
                                                            )}
                                                        </div>
                                                    </motion.div>
                                                );
                                            })}

                                            {/* Glow effect */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-[#FBB429]/15 to-[#F87866]/15 rounded-[3rem] blur-3xl -z-10 opacity-60" />
                                        </div>

                                        {/* Navigation Buttons - Below cards (Mobile only) */}
                                        <div className="flex lg:hidden items-center gap-4 mt-6 lg:mt-8">
                                            <button
                                                onClick={() => setActiveApp((prev) => (prev - 1 + 3) % 3)}
                                                className="px-6 py-2.5 rounded-lg bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-neutral-200 dark:border-white/10 text-foreground dark:text-white hover:bg-white/20 dark:hover:bg-white/10 transition-all font-medium text-sm"
                                            >
                                                ← Prev
                                            </button>
                                            <span className="text-sm text-muted-foreground dark:text-neutral-400 font-medium min-w-[60px] text-center">
                                                {activeApp + 1} / 3
                                            </span>
                                            <button
                                                onClick={() => setActiveApp((prev) => (prev + 1) % 3)}
                                                className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#FBB429] to-[#F87866] text-white hover:opacity-90 transition-all font-medium text-sm"
                                            >
                                                Next →
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    );
                })()}

                {/* Product Demo Carousel - Hero Style (Reference Match) */}
                <section className="pt-6 pb-12 md:pt-10 md:pb-16 bg-background dark:bg-[#0a1929] overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="w-full max-w-[1400px] mx-auto">
                            <Carousel
                                setApi={setApi}
                                opts={{
                                    align: "center",
                                    loop: true,
                                }}
                                className="w-full"
                            >
                                <CarouselContent>
                                    {[
                                        {
                                            title: "BuildwellCHAT",
                                            subtitle: "Smart Communication",
                                            desc: "Instant, AI-powered team communication and project coordination. Keep everyone on the same page with real-time updates.",
                                            video: "https://res.cloudinary.com/drzxliqyz/video/upload/v1763297450/chatrec_kfrokc.mp4",
                                            image: "/screenshots/im1.png",
                                            link: "https://chat.buildwellai.com"
                                        },
                                        {
                                            title: "BuildwellNEWS",
                                            subtitle: "Industry Updates",
                                            desc: "Stay ahead with curated construction news and regulatory updates. Never miss a critical compliance change again.",
                                            video: "https://res.cloudinary.com/drzxliqyz/video/upload/v1762797262/showcasenews_peihce.mp4",
                                            image: "/screenshots/im2.png",
                                            link: "https://news.buildwellai.com"
                                        },
                                        {
                                            title: "BuildwellINSPECT",
                                            subtitle: "Visual Inspections",
                                            desc: "Streamlined inspection workflows with automated reporting. Capture defects and generate reports in seconds.",
                                            video: "https://res.cloudinary.com/drzxliqyz/video/upload/v1763297404/inspectvid_znvtb6.mp4",
                                            image: "/screenshots/im3.png",
                                            link: "https://inspect.buildwellai.com"
                                        },
                                        {
                                            title: "BuildwellTHREAD",
                                            subtitle: "Seamless Connectivity",
                                            desc: "Connect every stakeholder in a single, unified conversation thread. From architect to contractor, everyone is aligned.",
                                            video: "https://res.cloudinary.com/drzxliqyz/video/upload/v1763297405/threadvid_oxmkua.mp4",
                                            image: "/screenshots/im4.png",
                                            link: "https://thread.buildwellai.com"
                                        },
                                        {
                                            title: "BuildwellEYE",
                                            subtitle: "Site Monitoring",
                                            desc: "Advanced visual monitoring and AI-driven site safety analytics. Keep your site safe and secure 24/7.",
                                            video: "https://res.cloudinary.com/drzxliqyz/video/upload/v1762606241/WhatsApp_Video_2025-11-07_at_18.14.45_6913d34a_wrpesi.mp4",
                                            image: "/screenshots/im5.png",
                                            link: "https://eye.buildwellai.com"
                                        }
                                    ].map((item, index) => (
                                        <CarouselItem key={index} className="basis-full">
                                            <div className="p-1">
                                                <div className="bg-[#111] dark:bg-black text-white rounded-xl overflow-hidden relative min-h-[600px] flex items-center">

                                                    {/* Background Visual (Video) */}
                                                    <div className="absolute inset-0 z-0">
                                                        <div className="absolute inset-0 bg-black/30 z-10" /> {/* Dark overlay for text readability */}
                                                        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent z-10" /> {/* Gradient from left */}
                                                        <video
                                                            autoPlay
                                                            loop
                                                            muted
                                                            playsInline
                                                            poster={item.image}
                                                            className="w-full h-full object-cover"
                                                        >
                                                            <source src={item.video} type="video/mp4" />
                                                        </video>
                                                    </div>

                                                    {/* Content Overlay (Text Left) */}
                                                    <div className="p-6 md:p-12 lg:p-20 flex flex-col justify-center relative z-20 w-full max-w-4xl">
                                                        <div className="inline-block px-4 py-1 rounded-[5px] bg-white/10 text-xs font-bold tracking-wider uppercase mb-6 w-fit text-[#FBB429] backdrop-blur-md border border-white/10">
                                                            {item.subtitle}
                                                        </div>
                                                        <h3 className="font-display text-5xl lg:text-7xl font-bold leading-tight mb-8 drop-shadow-lg">
                                                            {item.title}
                                                        </h3>
                                                        <p className="text-xl text-gray-200 mb-12 leading-relaxed max-w-xl drop-shadow-md">
                                                            {item.desc}
                                                        </p>
                                                        <div className="flex flex-wrap gap-4">
                                                            <Link href="/pricing" className="w-full md:w-auto">
                                                                <Button className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FBB429] to-[#F87866] text-white px-8 py-3 rounded-[5px] font-semibold text-base hover:shadow-lg hover:opacity-95 transition-all duration-300 h-auto border-none w-full md:w-auto">
                                                                    Get Started Now
                                                                </Button>
                                                            </Link>
                                                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
                                                                <Button variant="outline" className="group relative inline-flex items-center justify-center gap-2 border-2 border-white/30 bg-transparent text-white px-8 py-3 rounded-[5px] font-semibold text-base hover:bg-white/20 backdrop-blur-sm transition-all duration-300 h-auto w-full md:w-auto">
                                                                    Learn More
                                                                </Button>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                {/* Pagination Dots */}
                                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                                    {[0, 1, 2, 3, 4].map((i) => (
                                        <div
                                            key={i}
                                            onClick={() => api?.scrollTo(i)}
                                            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${current === i + 1 ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'}`}
                                        />
                                    ))}
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </section>

                {/* Our Partners - Logo Carousel */}
                <section className="py-12 md:py-16 bg-muted/30 dark:bg-[#0d1f33]">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground dark:text-white mb-4">
                                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">Partners</span>
                            </h2>
                            <p className="text-lg text-muted-foreground dark:text-neutral-400">
                                Trusted by leading construction firms across the UK
                            </p>
                        </div>

                        <div className="relative flex overflow-x-hidden group">
                            <div className="animate-marquee whitespace-nowrap flex items-center">
                                {/* Partner logos - repeated for seamless loop */}
                                {[
                                    { src: "/biba.svg", alt: "BIBA", invert: true },
                                    { src: "/cambridge_university2.svg", alt: "Cambridge University", invert: false },
                                    { src: "/lbb_logo.png", alt: "LBB", invert: false },
                                    { src: "/LBS_Surveyors_Colour_RGB.png", alt: "LBS Surveyors", invert: false },
                                    { src: "/biba.svg", alt: "BIBA", invert: true },
                                    { src: "/cambridge_university2.svg", alt: "Cambridge University", invert: false },
                                    { src: "/lbb_logo.png", alt: "LBB", invert: false },
                                    { src: "/LBS_Surveyors_Colour_RGB.png", alt: "LBS Surveyors", invert: false },
                                ].map((logo, i) => (
                                    <div key={i} className="mx-8 w-40 h-20 rounded-lg flex items-center justify-center px-4 transition-colors">
                                        <Image
                                            src={logo.src}
                                            alt={logo.alt}
                                            width={120}
                                            height={60}
                                            className={`object-contain max-h-12 ${logo.invert ? 'invert dark:invert-0' : ''}`}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center">
                                {[
                                    { src: "/biba.svg", alt: "BIBA", invert: true },
                                    { src: "/cambridge_university2.svg", alt: "Cambridge University", invert: false },
                                    { src: "/lbb_logo.png", alt: "LBB", invert: false },
                                    { src: "/LBS_Surveyors_Colour_RGB.png", alt: "LBS Surveyors", invert: false },
                                    { src: "/biba.svg", alt: "BIBA", invert: true },
                                    { src: "/cambridge_university2.svg", alt: "Cambridge University", invert: false },
                                    { src: "/lbb_logo.png", alt: "LBB", invert: false },
                                    { src: "/LBS_Surveyors_Colour_RGB.png", alt: "LBS Surveyors", invert: false },
                                ].map((logo, i) => (
                                    <div key={i + 8} className="mx-8 w-40 h-20 rounded-lg flex items-center justify-center px-4 transition-colors">
                                        <Image
                                            src={logo.src}
                                            alt={logo.alt}
                                            width={120}
                                            height={60}
                                            className={`object-contain max-h-12 ${logo.invert ? 'invert dark:invert-0' : ''}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <CTASection />
            </main >
            <MarketingFooter />
        </div >
    )
}
