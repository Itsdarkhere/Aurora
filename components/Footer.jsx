import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main footer content */}
        <div className="flex flex-col items-center space-y-8">
          {/* Company name */}
          <div className="text-xl font-semibold text-gray-900">
            Psyykkinen Valmennus
          </div>

          {/* Navigation links */}
          <nav className="flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </a>
          </nav>

          {/* Social media icons */}
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
          </div>

          {/* Quote */}
          <p className="text-sm text-gray-500 max-w-md text-center italic">
            "Supporting mental wellness and peak performance through mindful coaching."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;