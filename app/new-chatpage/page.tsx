"use client"

import { ChatNavbar } from "@/components/frontpagechat/ChatNavbar"
import { MarketingFooter } from "@/components/frontpagechat/marketing/marketing-footer"
import { ChatHeroSection } from "@/components/frontpagechat/homepagechat/ChatHeroSection"
import { ChatModelsSection } from "@/components/frontpagechat/homepagechat/ChatModelsSection"
import { ChatCapabilitiesSection } from "@/components/frontpagechat/homepagechat/ChatCapabilitiesSection"
import { ScrollSection, ChatCarouselSection } from "@/components/frontpagechat/homepagechat"
import { ChatCTASection } from "@/components/frontpagechat/homepagechat/ChatCTASection"
import { PartnersSection } from "@/components/frontpagechat/marketing/PartnersSection"
import { Testimonials } from "@/components/frontpagechat/marketing/Testimonials"
import { SmoothScrollProvider } from "@/components/frontpagechat/marketing/smooth-scroll-provider"

export default function NewChatPage() {
    return (
        <SmoothScrollProvider>
            <div className="min-h-screen bg-white dark:bg-[#0a1929]">
                <ChatNavbar />
                <main className="pt-20">
                    {/* Hero Section */}
                    <ChatHeroSection />

                    {/* Unified Title for Feature Sections */}
                    <section className="pt-20 pb-0 bg-background dark:bg-[#0a1929]">
                        <div className="container mx-auto px-4 text-center max-w-3xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866] font-semibold tracking-wider uppercase text-sm mb-4 block">
                                Why BuildwellAI Chat?
                            </span>
                            <h2 className="font-['Big_Shoulders_Display'] text-3xl md:text-4xl lg:text-5xl font-bold text-foreground dark:text-white mb-6">
                                Complete Project Intelligence <br />
                                <span className="text-foreground dark:text-white">From Regulations to </span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">Real-Time</span>
                                <span className="text-foreground dark:text-white"> Analysis</span>
                            </h2>
                        </div>
                    </section>

                    {/* Chat Models Section */}
                    <ChatModelsSection />

                    {/* Chat Capabilities Section (Flipped) */}
                    <ChatCapabilitiesSection />

                    {/* Scroll Section (GSAP) */}
                    <ScrollSection />

                    {/* Carousel Section */}
                    <ChatCarouselSection />

                    {/* Testimonials */}
                    <Testimonials />

                    {/* Partners Section */}
                    <PartnersSection />

                    {/* CTA Section with App Store Buttons */}
                    <ChatCTASection />
                </main>

                <MarketingFooter />
            </div >
        </SmoothScrollProvider>
    )
}
