"use client"

import { Play, Pause } from "lucide-react"
import { useState, useRef } from "react"

export function VisualDemo() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="py-20 bg-background dark:bg-[#0a1929]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866] uppercase tracking-wider">
                  See It in Action
                </span>
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground dark:text-white">
                BuildwellEYE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">Live Demo</span>
              </h2>
              
              <p className="text-lg text-muted-foreground dark:text-neutral-300 leading-relaxed">
                Watch how our AI detects safety hazards and compliance issues in real-time on construction sites. Instant alerts, detailed reports, and actionable insights.
              </p>

              <div className="space-y-3 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FBB429] to-[#F87866] mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground dark:text-white text-sm">Real-time AI Detection</p>
                    <p className="text-muted-foreground dark:text-neutral-300 text-sm leading-snug">
                      Instantly identify safety violations and potential hazards on your construction site
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FBB429] to-[#F87866] mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground dark:text-white text-sm">Comprehensive Analytics</p>
                    <p className="text-muted-foreground dark:text-neutral-300 text-sm leading-snug">
                      Get instant alerts, detailed reports, and actionable insights through our dashboard
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FBB429] to-[#F87866] mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground dark:text-white text-sm">24/7 Site Monitoring</p>
                    <p className="text-muted-foreground dark:text-neutral-300 text-sm leading-snug">
                      Continuous surveillance with cloud-based storage and multi-camera support
                    </p>
                  </div>
                </div>
              </div>
            </div>

              <div className="relative overflow-hidden rounded-xl bg-[#0a1929] shadow-2xl">
                <div style={{ padding: '56.25% 0 0 0', position: 'relative', overflow: 'hidden', width: '100%', height: '100%' }}>
                  <iframe 
                      src="https://player.vimeo.com/video/1172720769?badge=0&autopause=0&player_id=0&app_id=58479&background=1" 
                      frameBorder="0" 
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} className="scale-[1.15]"
                      title="eye_demo"
                  />
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}
