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

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a1929]">
      <MarketingNav />
      <main>
        <HeroCarousel
          title={
            <>
              Building the <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FBB429] to-[#F87866]">Future</span>
            </>
          }
      subtitle="Your subtitle here"
      callToActionPrimary={{
        text: "Get Started",
        href: "/features"
      }}
      callToActionSecondary={{
        text: "Learn More",
        href: "/about"
      }}
      backgroundImage="/signupim.png"
      
    />
        <div className="-mt-40">
          <ImageTextSection />
          <TrustSection />
          <SubdomainSection />
          <section className="py-20 border-t border-transparent bg-background dark:bg-background">
            <div className="container mx-auto px-4">
              <VideoShowcase />
            </div>
          </section>
          <ChatShowcase />
          <FeaturesSection />
          <CTASection />
        </div>
      </main>
      <MarketingFooter />
    </div>
  )
}
