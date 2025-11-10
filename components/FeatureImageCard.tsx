"use client"

import Image from "next/image"

interface FeatureImageCardProps {
  title: string
  description: string
  image: string
  alt: string
  reverse?: boolean
  children?: React.ReactNode
}

export function FeatureImageCard({ title, description, image, alt, reverse = false, children }: FeatureImageCardProps) {
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-10 py-12`}>      
      <div className="md:w-1/2 w-full">
        <Image
          src={image}
          alt={alt}
          width={600}
          height={400}
          className="rounded-xl border border-border shadow-xl object-cover w-full h-auto"
        />
      </div>
      <div className="md:w-1/2 w-full flex flex-col items-start">
        <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-gradient-orange">{title}</h3>
        <p className="text-lg text-muted-foreground mb-4">{description}</p>
        {children}
      </div>
    </div>
  )
}
