"use client";

import React, { useEffect, useState } from 'react';
import { Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const footerLinks = [
    {
      title: 'Legal',
      links: [
        { name: 'Contact Us', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Privacy Policy', href: '#' }
      ]
    }
  ];

  return (
    <footer className="relative pt-12 pb-6 bg-gradient-to-r from-gray-900 to-black border-t border-gray-700/50 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-200">Legal</h3>
            <ul className="space-y-2">
              {footerLinks[0].links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-gray-400 transition-colors text-gray-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-200">Stay Updated</h3>
            <div className="relative group">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-700/30 bg-gray-800/50 text-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-gray-600/50 focus:border-transparent outline-none transition-all duration-300"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-600/80 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-all flex items-center shadow-sm backdrop-blur-sm">
                <Mail className="mr-2 h-4 w-4" />
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700/20 pt-6 text-center">
          <span className="text-gray-300">
            © {new Date().getFullYear()} BuyGet™. All rights reserved.
          </span>
        </div>
      </div>

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 rounded-full h-12 w-12 shadow-lg animate-bounce bg-gray-600/80 text-white flex items-center justify-center hover:bg-gray-600 transition-colors backdrop-blur-sm"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </footer>
  );
};

export default Footer;