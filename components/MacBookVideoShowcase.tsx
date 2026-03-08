"use client"

import React, { useRef, useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

/* ── Video data ──────────────────────────── */
const videos = [
    {
        id: "eye",
        label: "EYE",
        description: "AI-powered site monitoring",
        src: "https://res.cloudinary.com/drzxliqyz/video/upload/v1762606241/WhatsApp_Video_2025-11-07_at_18.14.45_6913d34a_wrpesi.mp4",
    },
    {
        id: "chat",
        label: "CHAT",
        description: "Construction AI assistant",
        src: "https://res.cloudinary.com/drzxliqyz/video/upload/v1763297450/chatrec_kfrokc.mp4",
    },
    {
        id: "news",
        label: "NEWS",
        description: "Industry intelligence hub",
        src: "https://res.cloudinary.com/drzxliqyz/video/upload/v1762797262/showcasenews_peihce.mp4",
    },
    {
        id: "inspect",
        label: "INSPECT",
        description: "Mobile-first snagging",
        src: "https://res.cloudinary.com/drzxliqyz/video/upload/v1763297404/inspectvid_znvtb6.mp4",
    },
    {
        id: "thread",
        label: "THREAD",
        description: "Document compliance",
        src: "https://res.cloudinary.com/drzxliqyz/video/upload/v1763297405/threadvid_oxmkua.mp4",
    },
]

function fmt(s: number) {
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60)
    return `${m}:${sec.toString().padStart(2, "0")}`
}

/* ═══════════════════════════════════════════
   MacBook Video Showcase
   Video sits BEHIND the macbook.png.
   Controls are OVER the MacBook hugging the bottom of the video.
   ═══════════════════════════════════════════ */
export function MacBookVideoShowcase() {
    const [active, setActive] = useState(0)
    const [playing, setPlaying] = useState(true)
    const [progress, setProgress] = useState(0)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const [muted, setMuted] = useState(true)
    const [speed, setSpeed] = useState(1)
    const videoRef = useRef<HTMLVideoElement>(null)
    const progressInterval = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        const vid = videoRef.current
        if (!vid) return
        vid.src = videos[active].src
        vid.load()
        vid.playbackRate = speed
        const onLoaded = () => {
            setDuration(vid.duration)
            setProgress(0)
            setCurrentTime(0)
            if (playing) vid.play().catch(() => { })
        }
        vid.addEventListener("loadedmetadata", onLoaded)
        return () => vid.removeEventListener("loadedmetadata", onLoaded)
    }, [active]) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (progressInterval.current) clearInterval(progressInterval.current)
        if (playing) {
            progressInterval.current = setInterval(() => {
                const vid = videoRef.current
                if (!vid || !vid.duration) return
                setProgress((vid.currentTime / vid.duration) * 100)
                setCurrentTime(vid.currentTime)
            }, 100)
        }
        return () => { if (progressInterval.current) clearInterval(progressInterval.current) }
    }, [playing, active])

    const togglePlay = useCallback(() => {
        const vid = videoRef.current
        if (!vid) return
        if (vid.paused) { vid.play().catch(() => { }); setPlaying(true) }
        else { vid.pause(); setPlaying(false) }
    }, [])

    const next = useCallback(() => { setActive((a) => (a + 1) % videos.length); setPlaying(true) }, [])
    const prev = useCallback(() => { setActive((a) => (a - 1 + videos.length) % videos.length); setPlaying(true) }, [])

    const seek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const vid = videoRef.current
        if (!vid || !vid.duration) return
        const rect = e.currentTarget.getBoundingClientRect()
        const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
        vid.currentTime = pct * vid.duration
        setProgress(pct * 100)
        setCurrentTime(vid.currentTime)
    }, [])

    const toggleMute = useCallback(() => {
        const vid = videoRef.current
        if (!vid) return
        vid.muted = !vid.muted
        setMuted(vid.muted)
    }, [])

    const cycleSpeed = useCallback(() => {
        const vid = videoRef.current
        if (!vid) return
        const speeds = [1, 1.5, 2, 0.5]
        const idx = speeds.indexOf(speed)
        const s = speeds[(idx + 1) % speeds.length]
        vid.playbackRate = s
        setSpeed(s)
    }, [speed])

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === " " || e.key === "k") { e.preventDefault(); togglePlay() }
            if (e.key === "ArrowRight" || e.key === "l") next()
            if (e.key === "ArrowLeft" || e.key === "j") prev()
            if (e.key === "m") toggleMute()
        }
        window.addEventListener("keydown", handler)
        return () => window.removeEventListener("keydown", handler)
    }, [togglePlay, next, prev, toggleMute])

    return (
        <div className="w-full max-w-[1400px] mx-auto">
            {/* ── Frame container ────────── */}
            <div className="relative w-full">
                {/* 
                    Layer 1 (back): Video — positioned to fill the screen area.
                    The video sits BEHIND the macbook image.
                */}
                <div
                    className="absolute overflow-hidden"
                    style={{
                        top: "18%",
                        left: "26%",
                        width: "47.5%",
                        height: "54%",
                        zIndex: 1,
                    }}
                >
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        muted={muted}
                        playsInline
                        onEnded={next}
                    />

                    {/* Click-to-toggle overlay */}
                    <div className="absolute inset-0 cursor-pointer" onClick={togglePlay} />

                    {/* Pause indicator */}
                    <AnimatePresence>
                        {!playing && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                            >
                                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center">
                                    <svg className="w-7 h-7 md:w-8 md:h-8 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* 
                    Layer 2 (front): MacBook image on top.
                    The transparent screen area lets the video show through.
                */}
                <img
                    src="/macbook.png"
                    alt=""
                    className="relative w-full h-auto block pointer-events-none select-none"
                    style={{ zIndex: 2 }}
                    draggable={false}
                />

                {/* 
                    Layer 3 (frontmost): Controls overlay.
                    Anchored to exactly match the bottom of the video, overlapping the macbook bezel/video.
                */}
                <div
                    className="absolute bg-neutral-900/90 backdrop-blur-md px-3 py-2"
                    style={{
                        bottom: "28%", // 100% - (18% top + 54% height) = sits exactly on the bottom edge of the video overlay
                        left: "26%", // Matches video left
                        width: "47.5%", // Matches video width
                        zIndex: 3,
                    }}
                >
                    {/* Progress bar */}
                    <div
                        className="w-full h-1 bg-white/10 rounded-full cursor-pointer mb-2 group"
                        onClick={seek}
                    >
                        <div
                            className="h-full bg-gradient-to-r from-[#FBB429] to-[#F87866] rounded-full relative transition-[width] duration-100"
                            style={{ width: `${progress}%` }}
                        >
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    </div>

                    {/* Controls row */}
                    <div className="flex items-center justify-between gap-2 border-b border-white/5 pb-2 mb-2">
                        {/* Left: playback */}
                        <div className="flex items-center gap-1">
                            <button onClick={prev} className="p-1 rounded hover:bg-white/10 transition-colors text-white/60 hover:text-white" title="Previous (←)">
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" /></svg>
                            </button>
                            <button onClick={togglePlay} className="p-1 md:p-1.5 rounded-md bg-white/15 hover:bg-white/20 transition-colors text-white" title="Play/Pause (Space)">
                                {playing ? (
                                    <svg className="w-3 h-3 md:w-3.5 md:h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
                                ) : (
                                    <svg className="w-3 h-3 md:w-3.5 md:h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                )}
                            </button>
                            <button onClick={next} className="p-1 rounded hover:bg-white/10 transition-colors text-white/60 hover:text-white" title="Next (→)">
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" /></svg>
                            </button>
                            <span className="text-[9px] text-white/40 font-mono ml-1 hidden sm:block">
                                {fmt(currentTime)}/{fmt(duration)}
                            </span>
                        </div>

                        {/* Center: track selector */}
                        <div className="flex items-center gap-0.5 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
                            {videos.map((v, i) => (
                                <button
                                    key={v.id}
                                    onClick={() => { setActive(i); setPlaying(true) }}
                                    className={`px-2 py-0.5 rounded text-[10px] font-medium whitespace-nowrap transition-all ${i === active
                                        ? "bg-gradient-to-r from-[#FBB429] to-[#F87866] text-white"
                                        : "text-white/50 hover:text-white hover:bg-white/10"
                                        }`}
                                >
                                    {v.label}
                                </button>
                            ))}
                        </div>

                        {/* Right: extras */}
                        <div className="flex items-center gap-0.5">
                            <button onClick={cycleSpeed} className="px-1.5 py-1 rounded text-[9px] font-mono font-medium text-white/40 hover:text-white hover:bg-white/10 transition-colors hidden sm:block" title="Speed">
                                {speed}×
                            </button>
                            <button onClick={toggleMute} className="p-1 rounded hover:bg-white/10 transition-colors text-white/50 hover:text-white" title="Mute (M)">
                                {muted ? (
                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" /></svg>
                                ) : (
                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" /></svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Now-playing strip */}
                    <div className="flex items-center justify-between">
                        <p className="text-[10px] text-white/50">
                            <span className="text-white/30 uppercase tracking-wider text-[8px] mr-2">Now playing</span>
                            Buildwell{videos[active].label} — {videos[active].description}
                        </p>
                        <div className="flex items-center gap-1">
                            {videos.map((_, i) => (
                                <div key={i} className={`w-1 h-1 rounded-full ${i === active ? "bg-[#FBB429]" : "bg-white/20"}`} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <p className="text-center text-[10px] text-neutral-400 dark:text-neutral-600 mt-3 relative z-10">
                Space to play/pause · ← → to switch · M to mute
            </p>
        </div>
    )
}
