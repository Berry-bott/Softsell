// Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="text-center md:text-left">
        <img src="/softsell-logo.png" alt="SoftSell Logo" className="h-8 w-auto" />

          <p className="text-sm text-gray-400">Resell your unused software licenses with ease.</p>
        </div>

        <div className="flex space-x-6">
          <a href="#hero" className="hover:text-white text-sm">Home</a>
          <a href="#how-it-works" className="hover:text-white text-sm">How It Works</a>
          <a href="#testimonials" className="hover:text-white text-sm">Testimonials</a>
          <a href="#contact" className="hover:text-white text-sm">Contact</a>
        </div>

        <div className="text-sm text-gray-400 text-center md:text-right">
          &copy; {new Date().getFullYear()} SoftSell. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
