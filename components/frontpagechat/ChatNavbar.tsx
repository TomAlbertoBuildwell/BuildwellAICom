"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button" // Local clone
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./ui/theme-toggle" // Local clone

export function ChatNavbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <nav
            className="fixed top-0 z-50 w-full border-b border-border bg-white/80 dark:bg-[#0a1929]/90 backdrop-blur-md"
        >
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/chatimg/logo.png"
                        alt="BuildwellAI"
                        width={32}
                        height={32}
                        className="h-6 w-auto"
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    <Link href="/new-chatpage/mobile-app" className="text-sm font-medium transition-colors hover:text-primary">
                        Mobile App
                    </Link>
                    <Link href="/new-chatpage/features" className="text-sm font-medium transition-colors hover:text-primary">
                        Features
                    </Link>
                    <Link href="/new-chatpage/pricing" className="text-sm font-medium transition-colors hover:text-primary">
                        Pricing
                    </Link>
                    <Link href="/new-chatpage/contact" className="text-sm font-medium transition-colors hover:text-primary">
                        Contact
                    </Link>
                </div>

                {/* Desktop CTA */}
                <div className="hidden items-center gap-3 md:flex">
                    <ThemeToggle />
                    <a href="https://chat.buildwellai.com" target="_blank" rel="noopener noreferrer">
                        <Button className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FBB429] to-[#F87866] text-white px-8 py-3 rounded-[5px] font-semibold text-base hover:shadow-lg hover:opacity-95 transition-all duration-300 h-auto">
                            Get Started
                        </Button>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="border-t border-border bg-white/95 dark:bg-[#0a1929]/95 backdrop-blur-md md:hidden">
                    <div className="container mx-auto space-y-1 px-4 py-4">
                        <Link
                            href="/new-chatpage/mobile-app"
                            className="block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Mobile App
                        </Link>
                        <Link
                            href="/new-chatpage/features"
                            className="block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Features
                        </Link>
                        <Link
                            href="/new-chatpage/pricing"
                            className="block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Pricing
                        </Link>
                        <Link
                            href="/new-chatpage/contact"
                            className="block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Contact
                        </Link>
                        <div className="flex flex-col gap-2 pt-4">
                            <div className="flex justify-center pb-2">
                                <ThemeToggle />
                            </div>
                            <a href="https://chat.buildwellai.com" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                                <Button className="w-full group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FBB429] to-[#F87866] text-white px-8 py-3 rounded-[5px] font-semibold text-base hover:shadow-lg hover:opacity-95 transition-all duration-300 h-auto">
                                    Get Started
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}
