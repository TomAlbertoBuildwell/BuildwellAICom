"use client"

import { useState } from "react"
import { Footer } from "@/components/footer"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { SubdomainSection } from "@/components/SubdomainSection"

//

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
      <Hero />
      <SubdomainSection />

      </main>
      {/* Footer */}
      <Footer />
    </div>
  )
}
