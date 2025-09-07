import React, { useState } from 'react';
import { HardHatIcon, MenuIcon, XIcon } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <HardHatIcon className="h-8 w-8 text-orange-500" />
          <span className="text-xl font-bold text-gray-800">Buildwell AI</span>
        </div>
        {/* Mobile menu button */}
        <button className="md:hidden focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon className="h-6 w-6 text-gray-600" /> : <MenuIcon className="h-6 w-6 text-gray-600" />}
        </button>
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
            Home
          </a>
          <a href="#solutions" className="text-gray-600 hover:text-orange-500 transition-colors">
            Solutions
          </a>
          <a href="#about" className="text-gray-600 hover:text-orange-500 transition-colors">
            About
          </a>
          <a href="#contact" className="text-gray-600 hover:text-orange-500 transition-colors">
            Contact
          </a>
        </nav>
        {/* Mobile menu */}
        {isMenuOpen && <div className="absolute top-16 left-0 right-0 bg-white shadow-md z-50 md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                Home
              </a>
              <a href="#solutions" className="text-gray-600 hover:text-orange-500 transition-colors">
                Solutions
              </a>
              <a href="#about" className="text-gray-600 hover:text-orange-500 transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-600 hover:text-orange-500 transition-colors">
                Contact
              </a>
            </div>
          </div>}
      </div>
    </header>;
}