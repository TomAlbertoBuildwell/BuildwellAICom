"use client"

import { ChatNavbar } from "@/components/frontpagechat/ChatNavbar"
import { MarketingFooter } from "@/components/frontpagechat/marketing/marketing-footer"
import { SmoothScrollProvider } from "@/components/frontpagechat/marketing/smooth-scroll-provider"
import {
    ChatFeaturesHero,
    ChatFeatureCards,
    ChatScreenshotShowcase,
    ChatVideoSections,
    ChatMobileShowcase
} from "@/components/frontpagechat/featurespagechat"

export default function FeaturesPage() {
    return (
        <SmoothScrollProvider>
            <div className="min-h-screen bg-white dark:bg-[#0a1929]">
                <ChatNavbar />
                <main>
                    <ChatFeaturesHero />
                    <ChatFeatureCards />
                    <ChatScreenshotShowcase />
                    <ChatVideoSections />
                    <ChatMobileShowcase />
                </main>
                <MarketingFooter />
            </div>
        </SmoothScrollProvider>
    )
}
