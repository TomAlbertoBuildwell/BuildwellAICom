"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Eye, Newspaper, Search, GitMerge } from 'lucide-react';

export function SubdomainSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const featureCards = [
    {
      id: 1,
      title: "BuildwellAI Chat",
      subtitle: "CHAT",
      description: "Your on-demand construction expert providing instant, accurate answers. Access building regulations, and project documents with visual analysis capabilities.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      url: "https://chat.buildwellai.com",
    },
    {
      id: 2,
      title: "BuildwellEYE",
      subtitle: "EYE",
      description: "Automated defect detection using computer vision. Identifies potential issues, verifies work quality, and monitors progress with greater speed and accuracy than manual inspection.",
      image: "/AI Hardhat.png",
      url: "https://eye.buildwellai.com/",
    },
    {
      id: 3,
      title: "BuildwellNEWS",
      subtitle: "NEWS",
      description: "Curated industry intelligence and risk monitoring. Stay informed about regulatory changes, product failures, and emerging risks relevant to your projects.",
      image: "/Buildwell News.png",
      url: "https://news.buildwellai.com/",
    },
    {
      id: 4,
      title: "BuildwellINSPECT",
      subtitle: "INSPECT",
      description: "Mobile-first site inspection tool. Capture issues with GPS-tagged photos, generate professional reports in minutes, and sync with your project management systems.",
      image: "/Buildwell Inspect.png",
      url: "https://inspect.buildwellai.com/",
    },
    {
      id: 5,
      title: "BuildwellTHREAD",
      subtitle: "THREAD",
      description: "Complete golden thread compliance management. Organizes critical documents, links on-site evidence, automates compliance tracking, and generates safety case reports.",
      image: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      url: "https://buildwellai.com/thread",
    },
  ];

  const getCardWidth = (id: number) => {
    if (hoveredCard === null) return '20%';
    return hoveredCard === id ? '40%' : '15%';
  };

  return (
    <section id="solutions" className="relative w-full py-20 border-t border-transparent bg-background dark:bg-background">
      <style dangerouslySetInnerHTML={{
        __html: `
          .card-carousel {
            scrollbar-width: none;
            -ms-overflow-style: none;
            scroll-behavior: smooth;
            scroll-snap-type: x mandatory;
            overflow-x: auto;
            width: 100vw;
          }
          .card-carousel::-webkit-scrollbar {
            display: none;
          }
          .carousel-card {
            scroll-snap-align: center;
            width: 85vw;
            min-width: 85vw;
            max-width: 85vw;
          }
          /* Custom 1300px breakpoint for cards */
          @media (min-width: 1300px) {
            .desktop-cards {
              display: flex;
            }
            .mobile-cards {
              display: none;
            }
          }
          @media (max-width: 1299px) {
            .desktop-cards {
              display: none;
            }
            .mobile-cards {
              display: flex;
            }
          }
        `
      }} />

      <div className="container mx-auto px-4 mb-12">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-[5px] border-0 bg-primary/10 px-4 py-2 text-sm font-medium">
            <span>Our Product Suite</span>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl mb-4">
            AI-Powered Solutions for{' '}
            <span className="text-gradient-orange">Modern Construction</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Discover our comprehensive suite of AI tools designed specifically for the UK construction industry.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center">
        <div className="max-w-6xl mx-auto w-full flex flex-col justify-center">
          
          {/* Desktop: Animated stacked cards */}
          <div className="desktop-cards gap-3 h-[400px] px-4">
            {featureCards.map((card) => (
              <motion.a
                key={card.id}
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden cursor-pointer rounded-[5px] group flex-shrink-0"
                initial={{ width: '20%' }}
                style={{
                  width: getCardWidth(card.id)
                }}
                animate={{
                  width: getCardWidth(card.id)
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.32, 0.72, 0, 1]
                }}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="absolute inset-0">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>
                <div className="relative h-full flex flex-col justify-end p-6">
                  <motion.div
                    animate={{
                      opacity: hoveredCard === card.id ? 0 : 1,
                      y: hoveredCard === card.id ? 20 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-6 left-6 right-6"
                  >
                    <h3 className="font-display text-xl font-semibold text-white mb-1">
                      {card.subtitle}
                    </h3>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: hoveredCard === card.id ? 1 : 0,
                      y: hoveredCard === card.id ? 0 : 20
                    }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                  >
                    <h3 className="font-display text-2xl font-bold text-white">
                      {card.title}
                    </h3>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      {card.description}
                    </p>
                    <div className="flex items-center text-orange-400 font-medium text-sm group-hover:text-orange-300 transition-colors">
                      Learn More
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </motion.div>
                </div>
                <motion.div
                  className="absolute inset-0 border-2 border-transparent rounded-2xl pointer-events-none"
                  animate={{
                    borderColor: hoveredCard === card.id ? 'rgba(251, 146, 60, 0.5)' : 'transparent'
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile: Carousel cards with proper snapping */}
          <div className="mobile-cards w-screen flex-col items-center">
            <div 
              className="card-carousel flex flex-row overflow-x-auto gap-4 px-4" 
              style={{ width: '100vw' }}
            >
              {featureCards.map((card) => (
                <div
                  key={card.id}
                  className="carousel-card relative flex flex-col justify-end rounded-2xl shadow-lg bg-black/80 flex-shrink-0"
                  style={{ width: '85vw', minWidth: '85vw', maxWidth: '85vw', height: '420px' }}
                >
                  <img src={card.image} alt={card.title} className="absolute inset-0 object-cover w-full h-full rounded-2xl z-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent rounded-2xl z-10" />
                  <div className="relative z-20 text-left p-6 pt-24 flex flex-col justify-end h-full">
                    <h3 className="font-display text-xl font-bold text-gray-200 mb-1">{card.title}</h3>
                    <p className="text-gray-300 text-base mb-2">{card.description}</p>
                    <a
                      href={card.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 text-sm font-medium underline mt-2"
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom CTA */}
      <div className="container mx-auto px-4 mt-16 text-center">
        <p className="text-muted-foreground mb-4">
          Want to learn more about how BuildwellAI can transform your projects?
        </p>
        <a href="/contact" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
          <span>Get in Touch</span>
          <span>→</span>
        </a>
      </div>
    </section>
  );
}