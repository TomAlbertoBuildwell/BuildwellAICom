"use client"

import React from 'react';
import { TrendingUp, Building2, Users2, CheckCircle } from 'lucide-react';

export function StatsSection() {
  const stats = [
    {
      icon: <Building2 className="h-8 w-8" />,
      value: '500+',
      label: 'Projects Managed',
      description: 'Successfully delivered using our platform'
    },
    {
      icon: <Users2 className="h-8 w-8" />,
      value: '10,000+',
      label: 'Industry Professionals',
      description: 'Trust BuildwellAI daily'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      value: '40%',
      label: 'Time Saved',
      description: 'On compliance and documentation'
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      value: '99.9%',
      label: 'Compliance Rate',
      description: 'Meeting Building Safety Act standards'
    }
  ];

  return (
    <section className="py-20 bg-background border-y border-transparent">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl mb-4">
            Trusted by Construction{' '}
            <span className="text-gradient-orange">Leaders</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Join thousands of construction professionals who are transforming their projects with BuildwellAI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-orange">
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
              </div>
              <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="font-semibold text-lg mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
