import React from 'react';
import { HardHatIcon, MailIcon, PhoneIcon, MapPinIcon, FacebookIcon, TwitterIcon, LinkedinIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <HardHatIcon className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold">Buildwell AI</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming the UK construction industry with cutting-edge AI
              solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://chat.buildwellai.com" className="text-gray-400 hover:text-white transition-colors">
                  Chat Platform
                </a>
              </li>
              <li>
                <a href="https://eye.buildwellai.com" className="text-gray-400 hover:text-white transition-colors">
                  Eye Monitoring
                </a>
              </li>
              <li>
                <a href="https://news.buildwellai.com" className="text-gray-400 hover:text-white transition-colors">
                  News Hub
                </a>
              </li>
              <li>
                <a href="https://inspect.buildwellai.com" className="text-gray-400 hover:text-white transition-colors">
                  Inspect Tool
                </a>
              </li>
              <li>
                <a href="https://thread.buildwellai.com" className="text-gray-400 hover:text-white transition-colors">
                  Thread Collaboration
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div id="contact">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Construction Way, London, UK, EC1A 1BB
                </span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+44 20 1234 5678</span>
              </li>
              <li className="flex items-center">
                <MailIcon className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@buildwellai.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Buildwell AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
}