"use client"

import { useRef, useEffect } from 'react'

interface VideoShowcaseProps {
  videoUrl?: string
  title?: string
  description?: string
  className?: string
}

export function VideoShowcase({
  videoUrl = "https://res.cloudinary.com/drzxliqyz/video/upload/v1762606241/WhatsApp_Video_2025-11-07_at_18.14.45_6913d34a_wrpesi.mp4",
  title = "BuildwellEYE in Action",
  description = "See how AI-powered visual analysis transforms construction site monitoring and ensures safety compliance in real-time.",
  className = "",
}: VideoShowcaseProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Auto-play was prevented, try again on user interaction
      })
    }
  }, [])

  return (
    <div className={`w-full ${className}`}>
      <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
        {/* Left Column - Text Content (2 columns) */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {description}
          </p>
          
          <div className="space-y-3 pt-2">
            <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white">
              Key Features
            </h3>
            
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FBB429] to-[#F87866] mt-2 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">Real-time AI Detection</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-snug">
                  Instantly identify safety violations and potential hazards on your construction site
                </p>
              </div>
            </div>
            
            
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FBB429] to-[#F87866] mt-2 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">Comprehensive Analytics</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-snug">
                  Get instant alerts, detailed reports, and actionable insights through our dashboard
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FBB429] to-[#F87866] mt-2 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">24/7 Site Monitoring</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-snug">
                  Continuous surveillance with cloud-based storage and multi-camera support
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Video (3 columns - larger) */}
        <div className="lg:col-span-3 relative">
          {/* Video Container */}
          <div className="relative overflow-hidden rounded-lg bg-[#0a1929] shadow-lg">
            {/* Video Element - Auto-playing, looping, muted, no controls */}
            <video
              ref={videoRef}
              className="w-full h-auto object-cover aspect-video"
              loop
              muted
              playsInline
              autoPlay
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Gradient Overlay for Better Visual */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1929]/20 to-transparent pointer-events-none" />
          </div>

          
        </div>
      </div>
    </div>
  )
}
