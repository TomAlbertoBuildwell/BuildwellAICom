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
      image: 'https://images.unsplash.com/photo-1581094794329-c8112c4e5190?w=600&h=400&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop',
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
    <section className="py-20 border-t border-transparent bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl mb-4">
            Everything You Need for{' '}
            <span className="text-gradient-orange">Modern Construction</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Built specifically for the UK construction industry with features that matter most to your projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group border-border overflow-hidden hover:shadow-xl transition-all duration-300 rounded-[5px] flex flex-col p-0 h-[500px]"
            >
              <div className="relative h-[300px] overflow-hidden bg-muted flex-shrink-0">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 h-12 w-12 rounded-full bg-gradient-orange flex items-center justify-center shadow-lg">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <CardContent className="p-6 flex-1 flex flex-col">
                <h3 className="font-display font-bold text-xl mb-2">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
