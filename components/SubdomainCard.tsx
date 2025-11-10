"use client"

import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

interface SubdomainCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  url: string;
  imageUrl: string;
}

export function SubdomainCard({
  title,
  description,
  icon,
  url,
  imageUrl
}: SubdomainCardProps) {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block group"
    >
      <Card className="h-full overflow-hidden border-border transition-all duration-300 hover:shadow-2xl hover:border-primary/50 hover:-translate-y-1 rounded-[5px] flex flex-col p-0 min-h-[500px]">
        {/* Image Section */}
        <div className="relative h-[300px] overflow-hidden bg-muted flex-shrink-0">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Icon Badge */}
          <div className="absolute top-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-orange shadow-lg">
            <div className="text-white">
              {icon}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <CardContent className="p-6 flex-1 flex flex-col">
          <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
            {description}
          </p>
          
          {/* CTA */}
          <div className="flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-all">
            <span className="text-sm">Visit {title.split(' ')[0]}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </a>
  );
}
