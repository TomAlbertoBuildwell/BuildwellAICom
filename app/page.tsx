"use client"

import { MarketingNav } from "@/components/marketing-nav"
import { MarketingFooter } from "@/components/marketing-footer"
import { HeroParallaxDemo } from "@/components/HeroParallaxDemo"
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
    <div className="min-h-screen">
      <MarketingNav />
      <main>
        <HeroParallaxDemo />
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
