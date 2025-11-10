"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, X, ChevronDown } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function MarketingNav({ hideUntilScroll = false }: { hideUntilScroll?: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productMenuOpen, setProductMenuOpen] = useState(false)
  const [isProductHovered, setIsProductHovered] = useState(false)

  return (
    <nav 
      className="fixed top-0 z-50 w-full border-b border-border bg-white/80 dark:bg-[#0a1929]/90 backdrop-blur-md"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="BuildwellAI"
            width={32}
            height={32}
            className="h-6 w-auto"
          />
          </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          <div 
            className="relative"
            onMouseEnter={() => setIsProductHovered(true)}
            onMouseLeave={() => setIsProductHovered(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary">
              Product Line
              <ChevronDown className="h-4 w-4" />
            </button>
            {isProductHovered && (
              <div className="absolute left-0 top-full pt-2 z-50">
                <div className="bg-white dark:bg-[#0a1929] border border-border rounded-[5px] shadow-lg w-48 py-1">
                  <a 
                    href="https://thread.buildwellai.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block px-4 py-2 text-sm transition-colors hover:bg-muted cursor-pointer"
                  >
                    BuildwellThread
                  </a>
                  <a 
                    href="https://inspect.buildwellai.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block px-4 py-2 text-sm transition-colors hover:bg-muted cursor-pointer"
                  >
                    BuildwellInspect
                  </a>
                  <a 
                    href="https://eye.buildwellai.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block px-4 py-2 text-sm transition-colors hover:bg-muted cursor-pointer"
                  >
                    BuildwellEye
                  </a>
                  <a 
                    href="https://chat.buildwellai.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block px-4 py-2 text-sm transition-colors hover:bg-muted cursor-pointer"
                  >
                    BuildwellChat
                  </a>
                  <a 
                    href="https://news.buildwellai.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block px-4 py-2 text-sm transition-colors hover:bg-muted cursor-pointer"
                  >
                    BuildwellNews
                  </a>
                </div>
              </div>
            )}
          </div>
          <Link href="/#features" className="text-sm font-medium transition-colors hover:text-primary">
            Features
          </Link>
          <Link href="/pricing" className="text-sm font-medium transition-colors hover:text-primary">
            Pricing
          </Link>
          {/* <Link href="/api_documentation" className="text-sm font-medium transition-colors hover:text-primary">
            API Docs
          </Link> */}
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a href="https://chat.buildwellai.com" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-orange text-white hover:brightness-110">
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
              href="/about"
              className="block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            
            {/* Mobile Product Line Dropdown */}
            <div>
              <button
                onClick={() => setProductMenuOpen(!productMenuOpen)}
                className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
              >
                Product Line
                <ChevronDown className={`h-4 w-4 transition-transform ${productMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              {productMenuOpen && (
                <div className="ml-4 mt-1 space-y-1">
                  <a
                    href="https://thread.buildwellai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    BuildwellThread
                  </a>
                  <a
                    href="https://inspect.buildwellai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    BuildwellInspect
                  </a>
                  <a
                    href="https://eye.buildwellai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    BuildwellEye
                  </a>
                  <a
                    href="https://chat.buildwellai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    BuildwellChat
                  </a>
                  <a
                    href="https://news.buildwellai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    BuildwellNews
                  </a>
                </div>
              )}
            </div>

            <Link
              href="/#features"
              className="block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            {/* <Link
              href="/api_documentation"
              className="block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              API Docs
            </Link> */}
            <Link
              href="/contact"
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
                <Button className="w-full bg-gradient-orange text-white hover:brightness-110">
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
