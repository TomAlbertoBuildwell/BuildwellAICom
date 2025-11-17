"use client"

import React from 'react';
import { Shield, Zap, Users, FileCheck, BarChart3, Lock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: 'Building Safety Compliance',
      description: 'Stay compliant with UK Building Safety Act requirements and regulations with AI-powered monitoring and documentation.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop',
    },
    {
      icon: Zap,
      title: 'Real-Time AI Analysis',
      description: 'Get instant insights and recommendations powered by advanced machine learning algorithms trained on construction data.',
      image: '/analysis.jpg',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamlessly coordinate with your team, contractors, and stakeholders on a unified platform.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop',
    },
    {
      icon: FileCheck,
      title: 'Digital Golden Thread',
      description: 'Maintain complete digital records of building information throughout the entire lifecycle.',
      image: '/plan.jpg',
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Track project progress, identify risks, and optimize resource allocation with data-driven insights.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and security protocols to protect your sensitive construction data.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-muted/30 dark:bg-[#0d1f33]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-orange/10 px-4 py-2 text-sm font-semibold text-primary border border-primary/20 mb-6">
            Our Features
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Everything You Need for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">Modern Construction</span>
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground dark:text-neutral-300">
            Built specifically for the UK construction industry with features that matter most to your projects.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group border border-neutral-200 dark:border-neutral-700/50 hover:border-[#FBB429] dark:hover:border-[#FBB429] bg-background dark:bg-[#0a1929] overflow-hidden hover:shadow-2xl hover:shadow-[#FBB429]/20 transition-all duration-500 rounded-[5px] flex flex-col p-0 h-auto"
            >
              {/* Image Section */}
              <div className="relative h-52 md:h-56 overflow-hidden bg-muted flex-shrink-0">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 h-14 w-14 rounded-full bg-gradient-to-r from-[#FBB429] to-[#F87866] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
              </div>

              {/* Content Section */}
              <CardContent className="p-6 md:p-7 flex-1 flex flex-col">
                <h3 className="font-display font-bold text-xl md:text-2xl mb-3 text-foreground dark:text-white group-hover:text-[#FBB429] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground dark:text-neutral-300">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}