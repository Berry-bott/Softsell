// Footer.jsx
// This is a simple footer component for the SoftSell website.
// It includes the SoftSell logo, a brief description, navigation links, and copyright information.
// The footer is styled using Tailwind CSS classes for a modern and responsive design.
import React from 'react';
import { GlobeAltIcon, EnvelopeIcon, HomeIcon, UserIcon, CogIcon } from '@heroicons/react/24/solid';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Logo and Description */}
        <div className="text-center md:text-left">
          <img src="/softsell-logo.png" alt="SoftSell Logo" className="h-8 w-auto mb-2 mx-auto md:mx-0" />
          <p className="text-sm text-gray-400">Resell your unused software licenses with ease.</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <HomeIcon className="h-8 w-10" />
          </a>
          <a href="mailto:youremail@example.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <EnvelopeIcon className="h-8 w-10" />
          </a>
          <a href="mailto:youremail@example.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <UserIcon className="h-8 w-10" />
          </a>
          <a href="mailto:youremail@example.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <CogIcon className="h-8 w-10" />
          </a>

        </div>

        {/* Footer Bottom */}
        <div className="mt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} SoftSell. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

