"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "./../ui/carousel"; // Local clone
import { Button } from "./../ui/button"; // Local clone
import { Card, CardContent } from "./../ui/card"; // Local clone
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export const ChatCarouselSection = () => {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
        if (!api) {
            return;
        }

        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    const items = [
        {
            title: <>Advanced Document <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">Analysis</span></>,
            subtitle: "Deep Understanding",
            desc: "Upload PDFs, drawings, and specs. BuildwellAI analyzes every detail to provide instant, citation-backed answers.",
            video: "https://res.cloudinary.com/drzxliqyz/video/upload/v1763297404/inspectvid_znvtb6.mp4", // Kept existing video as placeholder
            image: "/chatimg/analysis.jpg",
            link: "https://inspect.buildwellai.com",
            color: "#FBB429"
        },
        {
            title: <>Up to Date Regulations <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">Compliance</span></>,
            subtitle: "Always Compliant",
            desc: "Stay aligned with the latest Building Safety Act and local regulations. Real-time updates ensure zero compliance gaps.",
            video: "https://res.cloudinary.com/drzxliqyz/video/upload/v1762797262/showcasenews_peihce.mp4",
            image: "/chatimg/news.jpg",
            link: "https://news.buildwellai.com",
            color: "#F87866"
        },
        {
            title: <>Modern Diagram <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">Generation</span></>,
            subtitle: "Visual Clarity",
            desc: "Generate professional diagrams and flowcharts instantly to visualize complex workflows and project structures.",
            video: "https://res.cloudinary.com/drzxliqyz/video/upload/v1763297450/chatrec_kfrokc.mp4",
            image: "/chatimg/plan.jpg",
            link: "https://chat.buildwellai.com",
            color: "#FBB429"
        },
        {
            title: <>3D Model <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">Generation</span></>,
            subtitle: "Spatial Intelligence",
            desc: "Turn specifications into preliminary 3D models. Visualize spatial relationships and potential conflicts early.",
            video: "https://res.cloudinary.com/drzxliqyz/video/upload/v1763297405/threadvid_oxmkua.mp4",
            image: "/chatimg/result.jpg",
            link: "https://thread.buildwellai.com",
            color: "#2196f3"
        },
        {
            title: <>Voice to Voice <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">Communication</span></>,
            subtitle: "Natural Interaction",
            desc: "Talk to your project data. Hands-free voice interaction for on-site queries and rapid information retrieval.",
            video: "https://res.cloudinary.com/drzxliqyz/video/upload/v1762606241/WhatsApp_Video_2025-11-07_at_18.14.45_6913d34a_wrpesi.mp4",
            image: "/chatimg/chat.jpg",
            link: "https://eye.buildwellai.com",
            color: "#FBB429"
        }
    ];

    return (
        <section className="py-20 bg-muted/30 dark:bg-[#0d1f33] overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-['Big_Shoulders_Display'] text-4xl lg:text-5xl font-bold text-foreground dark:text-white mb-4">
                        Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">Features</span>
                    </h2>
                    <p className="text-lg text-muted-foreground dark:text-neutral-400">
                        Integrated tools for every stage of construction.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto">
                    <Carousel
                        setApi={setApi}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {items.map((item, index) => (
                                <CarouselItem key={index} className="basis-full">
                                    <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">

                                        {/* Left: Text Card */}
                                        <div className="lg:col-span-5 flex flex-col h-full order-2 lg:order-1">
                                            <Card className="h-full border-none bg-white dark:bg-[#111] overflow-hidden rounded-[2rem] flex flex-col justify-center relative group">

                                                <CardContent className="p-8 md:p-12 flex flex-col items-start justify-center h-full">
                                                    <div className="inline-block px-4 py-1.5 rounded-full bg-orange-50 dark:bg-orange-900/20 text-[#FBB429] text-xs font-bold tracking-wider uppercase mb-6 border border-[#FBB429]/20">
                                                        {item.subtitle}
                                                    </div>

                                                    <h3 className="font-['Big_Shoulders_Display'] text-4xl lg:text-5xl font-bold text-foreground dark:text-white mb-6 leading-tight">
                                                        {item.title}
                                                    </h3>

                                                    <p className="text-lg text-muted-foreground dark:text-neutral-400 mb-8 leading-relaxed">
                                                        {item.desc}
                                                    </p>

                                                    <div className="flex flex-col sm:flex-row gap-4 w-full">
                                                        <Button
                                                            asChild
                                                            className="flex-1 bg-gradient-to-r from-[#FBB429] to-[#F87866] text-white rounded-[5px] h-12 text-base font-semibold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 hover:opacity-95 transition-all"
                                                        >
                                                            <Link href="/dashboard">
                                                                Get Started
                                                            </Link>
                                                        </Button>
                                                        <Button
                                                            asChild
                                                            variant="outline"
                                                            className="flex-1 rounded-[5px] h-12 text-base font-semibold border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900"
                                                        >
                                                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                                Learn More
                                                            </a>
                                                        </Button>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>

                                        {/* Right: Visual Card */}
                                        <div className="lg:col-span-7 h-[400px] lg:h-[600px] order-1 lg:order-2">
                                            <div className="w-full h-full rounded-[2rem] overflow-hidden relative bg-black border border-neutral-200 dark:border-neutral-800">
                                                <div className="absolute inset-0 bg-neutral-900 z-0">
                                                    <video
                                                        autoPlay
                                                        loop
                                                        muted
                                                        playsInline
                                                        poster={item.image}
                                                        className="w-full h-full object-cover opacity-80"
                                                    >
                                                        <source src={item.video} type="video/mp4" />
                                                    </video>
                                                </div>

                                                {/* Gradient Overlay for integration */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                                                {/* Floating Badge (optional) */}
                                                <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl hidden md:block">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black font-bold text-lg">
                                                            NB
                                                        </div>
                                                        <div className="text-white text-sm">
                                                            <p className="font-bold">Next Best Action</p>
                                                            <p className="opacity-80">AI Recommended</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {/* Custom Navigation buttons outside content */}
                        <div className="flex justify-center gap-4 mt-10">
                            <button
                                onClick={() => api?.scrollPrev()}
                                className="w-12 h-12 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <div className="flex items-center gap-2">
                                {items.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => api?.scrollTo(i)}
                                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${current === i + 1 ? 'bg-[#FBB429] w-8' : 'bg-neutral-300 dark:bg-neutral-700'}`}
                                    />
                                ))}
                            </div>
                            <button
                                onClick={() => api?.scrollNext()}
                                className="w-12 h-12 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};
