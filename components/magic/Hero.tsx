import React from 'react';
export function Hero() {
  return <section className="relative">
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 h-[500px] w-full absolute opacity-80"></div>
      <div className="h-[500px] bg-cover bg-center w-full" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
      backgroundBlendMode: 'overlay'
    }}>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-3xl">
            Building the Future of UK Construction
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-8">
            Transforming the construction industry with AI-powered solutions
            that enhance efficiency, safety, and productivity.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#solutions" className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-md transition-colors">
              Explore Our Solutions
            </a>
            <a href="#contact" className="bg-white hover:bg-gray-100 text-gray-800 font-medium px-6 py-3 rounded-md transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>;
}