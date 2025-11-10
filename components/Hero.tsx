"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Shield, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden pt-32 md:pt-40">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Construction site"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/45 dark:bg-black/45" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
        <div className="max-w-5xl text-left">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-[5px] border-0 bg-primary/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-white">AI-Powered Construction Solutions</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl mb-6 text-white">
            Building the Future of{' '}
            <span className="text-gradient-orange">UK Construction</span>
          </h1>

          {/* Subheading */}
          <p className="max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl mb-12">
            Transform your construction projects with cutting-edge AI technology. 
            From compliance and safety to project management and digital transformation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-start gap-4 sm:flex-row mb-16">
            <a href="#solutions">
              <Button size="lg" className="bg-gradient-orange text-white hover:brightness-110 shadow-lg">
                Explore Our Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="/contact">
              <Button size="lg" variant="outline" className="border-2">
                Get in Touch
              </Button>
            </a>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap items-start gap-6 text-sm">
            <div className="flex items-center gap-2 rounded-[5px] bg-white/10 backdrop-blur-sm px-4 py-2 border-0">
              <Shield className="h-4 w-4 text-primary" />
              <span className="font-medium text-white">Building Safety Compliant</span>
            </div>
            <div className="flex items-center gap-2 rounded-[5px] bg-white/10 backdrop-blur-sm px-4 py-2 border-0">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span className="font-medium text-white">AI-Driven Insights</span>
            </div>
            <div className="flex items-center gap-2 rounded-[5px] bg-white/10 backdrop-blur-sm px-4 py-2 border-0">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="font-medium text-white">Digital Transformation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}