import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SubdomainSection } from './components/SubdomainSection';
import { Footer } from './components/Footer';
export function App() {
  return <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Hero />
        <SubdomainSection />
      </main>
      <Footer />
    </div>;
}