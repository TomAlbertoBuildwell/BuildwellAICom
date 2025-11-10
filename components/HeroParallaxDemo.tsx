"use client";
import React from "react";
import { HeroParallax } from "@/components/blocks/hero-parallax";

export function HeroParallaxDemo() {
  return (
    <div className="w-full">
      <HeroParallax products={products} />
    </div>
  );
}

export const products = [
  {
    title: "BuildwellAI Chat",
    link: "https://chat.buildwellai.com",
    thumbnail: "/screenshots/im1.png",
  },
  {
    title: "BuildwellEYE",
    link: "https://eye.buildwellai.com",
    thumbnail: "/screenshots/im2.png",
  },
  {
    title: "BuildwellNEWS",
    link: "https://news.buildwellai.com",
    thumbnail: "/screenshots/im3.png",
  },
  {
    title: "BuildwellINSPECT",
    link: "https://inspect.buildwellai.com",
    thumbnail: "/screenshots/im4.png",
  },
  {
    title: "BuildwellTHREAD",
    link: "https://thread.buildwellai.com",
    thumbnail: "/screenshots/im5.png",
  },
  // Second row
  {
    title: "AI Safety Monitoring",
    link: "https://eye.buildwellai.com",
    thumbnail: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
  },
  {
    title: "Compliance Documentation",
    link: "https://thread.buildwellai.com",
    thumbnail: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
  },
  {
    title: "Construction Analytics",
    link: "https://chat.buildwellai.com",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    title: "Site Inspections",
    link: "https://inspect.buildwellai.com",
    thumbnail: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=600&h=400&fit=crop",
  },
  {
    title: "Building Safety Act",
    link: "https://thread.buildwellai.com",
    thumbnail: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop",
  },
  // Third row
  {
    title: "AI Document Analysis",
    link: "https://chat.buildwellai.com",
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
  },
  {
    title: "Real-time Monitoring",
    link: "https://eye.buildwellai.com",
    thumbnail: "https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=600&h=400&fit=crop",
  },
  {
    title: "Industry News",
    link: "https://news.buildwellai.com",
    thumbnail: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop",
  },
  {
    title: "Quality Assurance",
    link: "https://inspect.buildwellai.com",
    thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
  },
  {
    title: "Golden Thread",
    link: "https://thread.buildwellai.com",
    thumbnail: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?w=600&h=400&fit=crop",
  },
];
