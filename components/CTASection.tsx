"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 border-t border-transparent bg-background dark:bg-background">
      <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-[5px] bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 border-0 p-8 md:p-12 lg:p-16">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff8a00' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }} />
            </div>

            <div className="relative z-10 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your{' '}
                <span className="text-gradient-orange">Construction Projects</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of construction professionals who are already using BuildwellAI 
                to streamline compliance, improve safety, and accelerate project delivery.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://chat.buildwellai.com" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-gradient-orange text-white hover:brightness-110 shadow-lg">
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <a href="/contact">
                  <Button size="lg" variant="outline" className="border-2">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Sales
                  </Button>
                </a>
              </div>

              <p className="mt-6 text-sm text-muted-foreground">
              Price of serivces available on enquiry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
