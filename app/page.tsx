"use client"

import { MarketingNav } from "@/components/marketing-nav"
import { MarketingFooter } from "@/components/marketing-footer"
import { HeroCarousel } from "@/components/HeroParallaxDemo"
import { ImageTextSection } from "@/components/ImageTextSection"
import { TrustSection } from "@/components/TrustSection"
import { SubdomainSection } from "@/components/SubdomainSection"
import { VideoShowcase } from "@/components/VideoShowcase"
import { ChatShowcase } from "@/components/ChatShowcase"
import { ProductHighlight } from "@/components/ProductHighlight"
import { FeaturesSection } from "@/components/FeaturesSection"
import { CTASection } from "@/components/CTASection"
import { StatsBar } from "@/components/StatsBar"
import { Testimonials } from "@/components/Testimonials"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a1929]">
      <MarketingNav />
      <main>
        <HeroCarousel
          title={
            <>
              Construction Safety. <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FBB429] to-[#F87866]">Simplified.</span>
            </>
          }
          subtitle="Real-time defect detection, automated compliance, and instant reporting for UK construction professionals."
          callToActionPrimary={{
            text: "Get Started Free",
            href: "/contact"
          }}
          callToActionSecondary={{
            text: "See How It Works",
            href: "#video"
          }}
          backgroundImage="/signupim.png"

        />
        <div className="-mt-20">
          <SubdomainSection />
          <StatsBar />
          <section id="video" className="py-20 border-t border-transparent bg-background dark:bg-background">
            <div className="container mx-auto px-4">
              <VideoShowcase />
            </div>
          </section>
          <FeaturesSection />
          <ChatShowcase />
          <Testimonials />
          <CTASection />
        </div>
      </main>
      <MarketingFooter />
    </div>
  )
}
