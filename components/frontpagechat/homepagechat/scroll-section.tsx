"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "./../ui/button"; // Local clone
import "../chat-styles.css";

// Register GSAP ScrollTrigger
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(useGSAP);
}

const ScrollSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const galleryRef = useRef<HTMLDivElement>(null);
    const textBlocksRef = useRef<(HTMLDivElement | null)[]>([]);
    const [activeFeature, setActiveFeature] = React.useState(0);

    useGSAP(() => {
        const textBlocks = textBlocksRef.current.filter((el): el is HTMLDivElement => el !== null);

        // Loop through each text block to trigger image changes
        textBlocks.forEach((block, i) => {
            ScrollTrigger.create({
                trigger: block,
                start: "top 60%",
                end: "bottom 60%",
                onEnter: () => setActiveFeature(i),
                onEnterBack: () => setActiveFeature(i),
            });
        });
    }, { scope: containerRef });

    const scrollFeatures = [
        {
            title: "Geolocation Intelligence",
            description: "Automatically identify site locations and relevant local regulations based on project data. No manual lookup required.",
            image: "/chatimg/phones.png"
        },
        {
            title: "Universal Integration",
            description: "Seamlessly connect with your existing software ecosystem. BuildwellAI works alongside the tools you already trust.",
            image: "/chatimg/photos2.png"
        },
        {
            title: "Smart Project Planning",
            description: "Draft construction schedules and logistics plans in minutes. Let AI handle the complexity of sequencing and resource allocation.",
            image: "/chatimg/photos3.png"
        }
    ];

    return (
        <div className="bg-white dark:bg-[#0a1929] text-foreground dark:text-white pb-20">


            {/* Component Title (Visible on all screens) */}
            <div className="container mx-auto px-10 pt-20 pb-10 text-center">
                <h2 className="font-['Big_Shoulders_Display'] text-4xl lg:text-5xl font-bold text-foreground dark:text-white">
                    Your On-Site <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">Compliance Partner</span>
                </h2>
            </div>

            {/* Scroll-Triggered Gallery Section (Desktop) */}
            <div ref={containerRef} className="relative hidden lg:block"> {/* Desktop Only */}

                <div className="flex">
                    {/* Left: Pinned Image Gallery */}
                    <div ref={galleryRef} className="w-1/2 h-[80vh] sticky top-[10vh] flex items-center justify-end lg:pr-28 xl:pr-40 2xl:pr-56 bg-transparent overflow-hidden">
                        <div className="relative h-[75vh] aspect-[9/16] bg-transparent">
                            {scrollFeatures.map((feature, i) => (
                                <div key={i} className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${i === activeFeature ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        fill
                                        className="object-contain" // Changed to contain to ensure full image visibility without crop
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Scrolling Text Blocks */}
                    <div className="w-1/2">
                        {scrollFeatures.map((feature, i) => (
                            <div
                                key={i}
                                ref={(el) => { textBlocksRef.current[i] = el; }}
                                className="h-[60vh] flex flex-col justify-center lg:pl-32 xl:pl-48 2xl:pl-64 lg:pr-20 xl:pr-32 relative overflow-visible"
                            >
                                {/* Background Watermark Number */}
                                <span className={`absolute top-1/2 -translate-y-1/2 text-[20rem] md:text-[30rem] font-['Big_Shoulders_Display'] font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866] opacity-10 select-none z-0 leading-none pointer-events-none whitespace-nowrap ${i === 1
                                    ? 'left-0' // 02 at the start
                                    : 'left-1/2 -translate-x-1/2' // 01, 03 centered
                                    }`}>
                                    0{i + 1}
                                </span>

                                <div className="relative z-10 max-w-sm">
                                    <h3 className={`font-['Big_Shoulders_Display'] text-4xl font-bold mb-6 transition-colors duration-300 ${i === activeFeature ? 'text-[#FBB429]' : 'text-foreground dark:text-white'}`}>
                                        {feature.title}
                                    </h3>
                                    <p className={`text-xl leading-relaxed transition-colors duration-300 mb-8 ${i === activeFeature ? 'text-foreground dark:text-gray-200' : 'text-muted-foreground'}`}>
                                        {feature.description}
                                    </p>

                                    {/* App Store Buttons (Disabled/Coming Soon) */}
                                    <div className="flex flex-col gap-3 opacity-90">
                                        <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Coming Soon on Mobile</h4>
                                        <div className="flex flex-wrap gap-4">
                                            <Button disabled variant="outline" className="h-14 px-6 rounded-xl border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50 gap-3 opacity-70 cursor-not-allowed w-full sm:w-auto">
                                                {/* Apple Icon SVG */}
                                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 12.6c0 2.2 1.6 3.9 1.7 4 .1 0-2.5 3.5-3.4 3.5-.7 0-1.6-.6-2.6-.6-1 0-1.8.6-2.6.6-.9 0-3.3-3.4-3.4-3.5-1.7-2.5-1.5-6 .7-8.3 1.1-1.1 2.9-1.9 4-1.9.9 0 1.9.5 2.5.5.5 0 1.6-.5 2.6-.5 1.1 0 2.9.7 3.8 1.9-.1.1-2.2 1.3-2.2 3.8h.1zM15 4.8c-.8-1-2.2-1.6-3.4-1.6-.1 1.2.6 2.5 1.4 3.4.9 1 2.3 1.6 3.4 1.5.1-1.2-.6-2.4-1.4-3.3z" /></svg>
                                                <div className="flex flex-col items-start text-xs">
                                                    <span className="opacity-70">Coming soon on</span>
                                                    <span className="font-bold text-sm">App Store</span>
                                                </div>
                                            </Button>
                                            <Button disabled variant="outline" className="h-14 px-6 rounded-xl border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50 gap-3 opacity-70 cursor-not-allowed w-full sm:w-auto">
                                                {/* Play Store Icon SVG */}
                                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 2.5c0-.6.4-1.1.9-1.3L15 8.9 10.7 12 3 3.6v-1.1zM3.4 4l7.6 8.4L3 21.6V4zm.6 19.3c-.6.2-1.3-.2-1.3-.9v-.5l7.9-9.1 4.5 3.2-11.1 7.3zm12.9-7.1 2.5 1.7c.9.6.9 1.7 0 2.3l-2.5 1.7-4.8-3.3 4.8-2.4z" /></svg>
                                                <div className="flex flex-col items-start text-xs">
                                                    <span className="opacity-70">Coming soon on</span>
                                                    <span className="font-bold text-sm">Google Play</span>
                                                </div>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Fallback (No Pinning) */}
            <div className="lg:hidden container mx-auto px-4 pt-0 pb-10 space-y-24">
                {scrollFeatures.map((feature, i) => (
                    <div key={i} className="flex flex-col items-center text-center relative overflow-hidden">
                        {/* Background Watermark Number (Mobile) */}
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-['Big_Shoulders_Display'] font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866] opacity-10 select-none z-0 leading-none pointer-events-none whitespace-nowrap">
                            0{i + 1}
                        </span>

                        <div className="relative w-full h-[350px] mb-8 z-10">
                            <Image
                                src={feature.image}
                                alt={feature.title}
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="relative z-10 max-w-sm">
                            <h3 className="font-['Big_Shoulders_Display'] text-3xl font-bold mb-4 text-[#FBB429]">{feature.title}</h3>
                            <p className="text-lg text-foreground dark:text-gray-200 mb-8">
                                {feature.description}
                            </p>

                            {/* App Store Buttons (Mobile) */}
                            <div className="flex flex-col gap-3 opacity-90 items-center">
                                <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Coming Soon on Mobile</h4>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <Button disabled variant="outline" className="h-12 px-5 rounded-xl border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50 gap-3 opacity-70 cursor-not-allowed">
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 12.6c0 2.2 1.6 3.9 1.7 4 .1 0-2.5 3.5-3.4 3.5-.7 0-1.6-.6-2.6-.6-1 0-1.8.6-2.6.6-.9 0-3.3-3.4-3.4-3.5-1.7-2.5-1.5-6 .7-8.3 1.1-1.1 2.9-1.9 4-1.9.9 0 1.9.5 2.5.5.5 0 1.6-.5 2.6-.5 1.1 0 2.9.7 3.8 1.9-.1.1-2.2 1.3-2.2 3.8h.1zM15 4.8c-.8-1-2.2-1.6-3.4-1.6-.1 1.2.6 2.5 1.4 3.4.9 1 2.3 1.6 3.4 1.5.1-1.2-.6-2.4-1.4-3.3z" /></svg>
                                        <div className="flex flex-col items-start text-[10px]">
                                            <span className="opacity-70">Coming soon on</span>
                                            <span className="font-bold text-xs">App Store</span>
                                        </div>
                                    </Button>
                                    <Button disabled variant="outline" className="h-12 px-5 rounded-xl border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50 gap-3 opacity-70 cursor-not-allowed">
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 2.5c0-.6.4-1.1.9-1.3L15 8.9 10.7 12 3 3.6v-1.1zM3.4 4l7.6 8.4L3 21.6V4zm.6 19.3c-.6.2-1.3-.2-1.3-.9v-.5l7.9-9.1 4.5 3.2-11.1 7.3zm12.9-7.1 2.5 1.7c.9.6.9 1.7 0 2.3l-2.5 1.7-4.8-3.3 4.8-2.4z" /></svg>
                                        <div className="flex flex-col items-start text-[10px]">
                                            <span className="opacity-70">Coming soon on</span>
                                            <span className="font-bold text-xs">Google Play</span>
                                        </div>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScrollSection;
