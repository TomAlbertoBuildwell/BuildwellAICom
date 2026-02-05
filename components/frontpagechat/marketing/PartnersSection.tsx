"use client"

import Image from "next/image"

export function PartnersSection() {
    return (
        <section className="py-12 md:py-16 bg-muted/30 dark:bg-[#0d1f33]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-['Big_Shoulders_Display'] text-4xl lg:text-5xl font-bold text-foreground dark:text-white mb-4">
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
                            { src: "/chatimg/biba.svg", alt: "BIBA", invert: true },
                            { src: "/chatimg/cambridge_university2.svg", alt: "Cambridge University", invert: false },
                            { src: "/chatimg/lbb_logo.png", alt: "LBB", invert: false },
                            { src: "/chatimg/LBS_Surveyors_Colour_RGB.png", alt: "LBS Surveyors", invert: false },
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
                            { src: "/chatimg/biba.svg", alt: "BIBA", invert: true },
                            { src: "/chatimg/cambridge_university2.svg", alt: "Cambridge University", invert: false },
                            { src: "/chatimg/lbb_logo.png", alt: "LBB", invert: false },
                            { src: "/chatimg/LBS_Surveyors_Colour_RGB.png", alt: "LBS Surveyors", invert: false },
                            { src: "/chatimg/biba.svg", alt: "BIBA", invert: true },
                            { src: "/chatimg/cambridge_university2.svg", alt: "Cambridge University", invert: false },
                            { src: "/chatimg/lbb_logo.png", alt: "LBB", invert: false },
                            { src: "/chatimg/LBS_Surveyors_Colour_RGB.png", alt: "LBS Surveyors", invert: false },
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
    )
}
