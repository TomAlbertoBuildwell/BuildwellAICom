"use client"

import React from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Smartphone, CheckCircle } from "lucide-react"

export function ChatMobileShowcase() {
    const [activeApp, setActiveApp] = React.useState(0);
    const [isDesktop, setIsDesktop] = React.useState(false);

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
            image: "/chatimg/app1.png",
            description: "Visual inspection powered by AI. Capture photos on-site and get instant defect detection, safety assessments, and compliance verification in real-time.",
            features: ["AI defect detection", "Photo documentation", "Real-time safety checks"],
            color: "#F87866" // Using hex directly as tailored classes might rely on external config
        },
        {
            name: "BuildwellCHAT",
            image: "/chatimg/app2.png",
            description: "AI-powered construction assistant at your fingertips. Ask questions about regulations, get instant compliance checks, and generate documentation—all through natural conversation.",
            features: ["Instant regulation answers", "AI compliance checking", "Document generation"],
            color: "#FBB429"
        },
        {
            name: "BuildwellEYE",
            image: "/chatimg/app3.png",
            description: "Advanced visual monitoring and AI-driven site safety analytics. Real-time alerts for PPE compliance, unauthorized access, and proactive hazard detection.",
            features: ["AI Safety Monitoring", "Hazard Detection", "24/7 Surveillance"],
            color: "#FBB429"
        }
    ];

    const currentApp = apps[activeApp];

    return (
        <section className="py-20 md:py-24 bg-muted/30 dark:bg-[#0d1f33] overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 md:gap-16 items-center max-w-7xl mx-auto">
                    {/* Left Text Content - Changes based on selected app */}
                    <div className="text-center lg:text-left">
                        <div className="inline-block px-3 py-1 rounded-[5px] bg-[#FBB429]/10 text-[#FBB429] text-sm font-semibold mb-6 border border-[#FBB429]/20">
                            <Smartphone className="w-4 h-4 inline mr-2" />
                            Mobile Apps
                        </div>
                        {/* UPDATED TEXT FOR CHAT CONTEXT */}
                        <h2 className="font-['Big_Shoulders_Display'] text-5xl lg:text-6xl font-bold text-foreground dark:text-white leading-tight mb-6">
                            Your AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">Knowledge Base</span>, always in your pocket.
                        </h2>

                        {/* Dynamic App Content */}
                        <div className="h-[400px] lg:h-auto lg:min-h-[200px]">
                            <motion.div
                                key={activeApp}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="font-['Big_Shoulders_Display'] text-5xl font-bold mb-3" style={{ color: currentApp.color }}>
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

                    {/* Right: Card Shuffle Stack */}
                    <div className="relative flex flex-col items-center justify-center min-h-[700px] lg:min-h-[700px]">
                        <div ref={stackRef} className="relative w-full lg:max-w-[500px] h-[650px] md:h-[650px] lg:h-[700px]">
                            {apps.map((app, index) => {
                                // Calculate position: 0 = front, 1 = middle, 2 = back
                                const position = (index - activeApp + 3) % 3;
                                const isFront = position === 0;

                                const positionConfigs = {
                                    0: { x: isDesktop ? -160 : 0, y: '-50%', rotate: 0, scale: 1, zIndex: 30, opacity: 1 },
                                    1: { x: isDesktop ? -40 : 50, y: '-50%', rotate: 6, scale: 0.95, zIndex: 20, opacity: 0.9 },
                                    2: { x: isDesktop ? 40 : 100, y: '-50%', rotate: 12, scale: 0.9, zIndex: 10, opacity: 0.75 },
                                };

                                const stackedConfig = { x: 0, y: '-50%', rotate: 0, scale: 0.8, zIndex: 0, opacity: 0 };
                                // @ts-ignore
                                const currentConfig = isStackInView ? positionConfigs[position] : stackedConfig;

                                return (
                                    <motion.div
                                        key={app.name}
                                        drag={isFront ? "x" : false}
                                        dragSnapToOrigin={false}
                                        dragConstraints={isFront ? { left: -100, right: 100 } : undefined}
                                        dragElastic={isFront ? 0.2 : undefined}
                                        onDragEnd={isFront ? (_, { offset }) => {
                                            if (offset.x < -50) {
                                                setActiveApp((prev) => (prev + 1) % 3);
                                            } else if (offset.x > 50) {
                                                setActiveApp((prev) => (prev - 1 + 3) % 3);
                                            }
                                        } : undefined}
                                        animate={currentConfig}
                                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                        onClick={!isFront ? () => setActiveApp(index) : undefined}
                                        className={`absolute top-1/2 ${isDesktop ? 'left-1/2' : 'left-[-16px]'} w-[220px] h-[440px] md:w-[240px] md:h-[480px] lg:w-[240px] lg:h-[500px] ${isFront ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer'}`}
                                        style={isFront ? { touchAction: 'none' } : undefined}
                                    >
                                        <div className={`w-full h-full rounded-3xl overflow-hidden relative shadow-2xl ${isFront ? 'pointer-events-none' : ''}`}>
                                            <Image
                                                src={app.image}
                                                alt={app.name}
                                                fill
                                                className="object-contain"
                                            />
                                            {!isFront && (
                                                <div className={`absolute inset-0 transition-opacity duration-300 ${position === 1 ? 'bg-white/30 dark:bg-black/40' : 'bg-white/50 dark:bg-black/60'}`} />
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            })}

                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#FBB429]/15 to-[#F87866]/15 rounded-[3rem] blur-3xl -z-10 opacity-60" />
                        </div>

                        {/* Navigation Buttons - Mobile only */}
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
    )
}
