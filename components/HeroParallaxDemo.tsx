"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroCarouselProps {
  backgroundImage: string;
}

export const HeroCarousel = React.forwardRef<HTMLDivElement, HeroCarouselProps>(
  ({ backgroundImage }, ref) => {

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.05,
          delayChildren: 0.3,
        },
      },
    };

    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.2,
          ease: "easeOut",
        },
      },
    };

    const imageVariants = {
      hidden: { clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' },
      visible: {
        clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)',
        transition: {
          duration: 1.2,
          ease: [0.18, 0.9, 0.3, 1] // Smooth easeOutCubic - fast start, smooth end
        }
      }
    };

    return (
      <motion.section
        ref={ref}
        className="relative w-full overflow-hidden bg-white dark:bg-[#0a1929]"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Mobile Version - Full background image */}
        <div
          className="md:hidden relative w-full h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center items-center h-screen p-6 pt-24">
            <div className="space-y-6 max-w-2xl text-center">

              {/* Main Title */}
              <motion.h1
                variants={itemVariants}
                className="font-display text-5xl font-bold leading-tight text-white mb-6"
              >
                Building the <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FBB429] to-[#F87866]">Future</span> of UK Construction
              </motion.h1>

              {/* Accent Line */}
              <motion.div
                variants={itemVariants}
                className="h-1 w-24 bg-gradient-to-r from-[#FBB429] to-[#F87866] mx-auto"
              ></motion.div>

              {/* Subtitle */}
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-200 leading-relaxed"
              >
                Transform your construction projects with BuildwellAI&apos;s cutting-edge technology. From compliance and safety to project management and digital transformation.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col gap-4 pt-4"
              >
                <a href="#solutions" className="w-full">
                  <button className="w-full group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FBB429] to-[#F87866] text-white px-8 py-3 rounded-[5px] font-semibold hover:shadow-lg hover:opacity-95 transition-all duration-300">
                    Explore Our Solutions
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </a>
                <a href="/contact" className="w-full">
                  <button className="w-full inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-[5px] font-semibold hover:bg-white/10 transition-all duration-300">
                    Get in Touch
                  </button>
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Desktop Version - Split layout */}
        <div className="hidden md:flex flex-row min-h-screen">

          {/* Left Content Section */}
          <div className="w-full md:w-3/5 flex flex-col justify-center p-12 lg:p-16">

            {/* Main Content */}
            <div className="space-y-8 max-w-2xl">

              {/* Main Title */}
              <motion.h1
                variants={itemVariants}
                className="font-display text-6xl lg:text-7xl font-bold leading-tight text-black dark:text-white"
              >
                Building the <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FBB429] to-[#F87866]">Future</span> of UK Construction
              </motion.h1>

              {/* Accent Line */}
              <motion.div
                variants={itemVariants}
                className="h-1 w-24 bg-gradient-to-r from-[#FBB429] to-[#F87866]"
              ></motion.div>

              {/* Subtitle */}
              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                Transform your construction projects with BuildwellAI&apos;s cutting-edge technology. From compliance and safety to project management and digital transformation.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-row gap-4 pt-4"
              >
                <a href="#solutions">
                  <button className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-[#FBB429] to-[#F87866] text-white px-8 py-3 rounded-[5px] font-semibold hover:shadow-lg hover:opacity-95 transition-all duration-300">
                    Explore Our Solutions
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </a>
                <a href="/contact">
                  <button className="inline-flex items-center gap-2 border-2 border-gray-300 dark:border-gray-600 text-black dark:text-white px-8 py-3 rounded-[5px] font-semibold hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300">
                    Get in Touch
                  </button>
                </a>
              </motion.div>
            </div>
          </div>

          {/* Right Image Section */}
          <motion.div
            variants={imageVariants}
            className="w-full md:w-4/5 min-h-full bg-cover bg-center relative"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundAttachment: 'fixed'
            }}
          >
            {/* Overlay - darker in dark mode */}
            <div className="absolute inset-0 bg-black/20 dark:bg-black/60"></div>
          </motion.div>

        </div>
      </motion.section>
    );
  }
);

HeroCarousel.displayName = "HeroCarousel";