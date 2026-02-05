"use client"

import { ChatNavbar } from "@/components/frontpagechat/ChatNavbar"
import { MarketingFooter } from "@/components/frontpagechat/marketing/marketing-footer"
import { SmoothScrollProvider } from "@/components/frontpagechat/marketing/smooth-scroll-provider"
import { ChatMobileShowcase } from "@/components/frontpagechat/featurespagechat"
import { Button } from "@/components/frontpagechat/ui/button"
import { ArrowRight, Download } from "lucide-react"

export default function MobileAppPage() {
    return (
        <SmoothScrollProvider>
            <div className="min-h-screen bg-white dark:bg-[#0a1929]">
                <ChatNavbar />
                <main className="pt-32 pb-20">
                    <div className="container mx-auto px-4 text-center mb-16">
                        <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866] uppercase tracking-wider mb-4 block">
                            BuildwellAI Mobile
                        </span>
                        <h1 className="font-['Big_Shoulders_Display'] text-4xl md:text-5xl lg:text-6xl font-bold text-foreground dark:text-white mb-6">
                            Your Site Assistant, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">
                                In Your Pocket
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground dark:text-neutral-300 max-w-2xl mx-auto mb-8">
                            Access all the power of BuildwellAI directly from your mobile device. detailed inspections, instant queries, and real-time collaboration.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button size="lg" className="gap-2 bg-black hover:bg-neutral-800 text-white">
                                <Download className="w-5 h-5" /> Download for iOS
                            </Button>
                            <Button size="lg" className="gap-2 bg-black hover:bg-neutral-800 text-white">
                                <Download className="w-5 h-5" /> Download for Android
                            </Button>
                        </div>
                    </div>

                    <ChatMobileShowcase />
                </main>
                <MarketingFooter />
            </div>
        </SmoothScrollProvider>
    )
}
