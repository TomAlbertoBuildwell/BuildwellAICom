"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export interface FeatureDeepDiveProps {
  title: string
  summary: string
  details: React.ReactNode
}

export function FeatureDeepDive({ title, summary, details }: FeatureDeepDiveProps) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-border rounded-lg bg-background mb-4 overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-4 font-semibold text-base transition-colors hover:bg-muted/50"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{title}</span>
        <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`transition-all duration-300 ease-in-out ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"} overflow-hidden px-6 pb-4 pt-0`}>        
        <div className="text-muted-foreground text-sm mb-2">{summary}</div>
        <div>{details}</div>
      </div>
    </div>
  )
}
