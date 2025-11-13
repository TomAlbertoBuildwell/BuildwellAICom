"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 border-t border-transparent  relative overflow-hidden">
      {/* Background Image - Covers entire section */}
      <div 
        className="absolute inset-0 w-full h-full opacity-15 dark:opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-[5px] bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 border-0 p-8 md:p-12 lg:p-16">

            <div className="relative z-10 text-center">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                Ready to Transform Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB429] to-[#F87866]">Construction Projects</span>?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join thousands of construction professionals who are already using BuildwellAI 
                to streamline compliance, improve safety, and accelerate project delivery.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://chat.buildwellai.com" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-gradient-to-r from-[#FBB429] to-[#F87866] text-white hover:opacity-90 transition-all shadow-lg w-full sm:w-auto">
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <a href="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-neutral-300 dark:border-neutral-700 hover:border-[#FBB429] dark:hover:border-[#FBB429] w-full sm:w-auto transition-all">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Sales
                  </Button>
                </a>
              </div>

              <p className="mt-6 text-sm text-muted-foreground dark:text-gray-400">
                Price of services available on enquiry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}