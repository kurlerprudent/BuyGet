"use client"

import React, { useEffect, useState } from 'react';
import { Mail, ArrowUp, Globe, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const initialDarkMode = storedTheme ? storedTheme === 'dark' : true;
    setDarkMode(initialDarkMode);
    document.documentElement.classList.toggle('dark', initialDarkMode);
  }, []);

  const socialLinks = [
    { name: 'Facebook', icon: <Facebook />, url: '#' },
    { name: 'Twitter', icon: <Twitter />, url: '#' },
    { name: 'Instagram', icon: <Instagram />, url: '#' },
    { name: 'LinkedIn', icon: <Linkedin />, url: '#' },
  ];

  const footerLinks = [
    { title: 'About BuyGet', links: [{ name: 'Our Story', href: '#' }, { name: 'Team', href: '#' }, { name: 'Careers', href: '#' }] },
    { title: 'Help & Support', links: [{ name: 'FAQ', href: '#' }, { name: 'Contact Us', href: '#' }, { name: 'Shipping & Returns', href: '#' }] },
    { title: 'Legal', links: [{ name: 'Terms of Service', href: '#' }, { name: 'Privacy Policy', href: '#' }] },
  ];

  return (
    <footer className={`relative pt-12 pb-6 ${darkMode ? 'bg-gray-900 text-gray-400' : 'bg-gray-50 text-gray-700'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 space-y-6 md:space-y-0">
          <div className="text-2xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">
              BuyGet™
            </span>
          </div>
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="text-2xl hover:scale-110 transition-transform duration-300 text-gray-600 dark:text-gray-300"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {footerLinks.map((column, index) => (
            <div key={index} className="space-y-4">
              <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={`hover:text-primary transition-colors ${darkMode ? 'text-gray-400 dark:hover:text-primary' : 'text-gray-600'}`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-4 lg:col-span-1">
            <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Stay Updated</h3>
            <div className="relative group">
              <input
                type="email"
                placeholder="Enter your email"
                className={`w-full px-4 py-2 rounded-md border ${darkMode ? 'border-gray-700 bg-gray-800 text-gray-300' : 'border-gray-300 bg-gray-50 text-gray-800'} focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-300`}
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1.5 rounded-md hover:bg-primary-dark transition-all flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Globe className={`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              <select className={`pl-10 pr-4 py-2 rounded-md border ${darkMode ? 'border-gray-700 bg-gray-800 text-gray-300' : 'border-gray-300 bg-gray-50 text-gray-800'} appearance-none focus:outline-none focus:ring-2 focus:ring-primary`}>
                {['English', 'Spanish', 'French', 'German'].map((lang) => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span>
              © {new Date().getFullYear()} BuyGet™. All rights reserved.
            </span>
          </div>
        </div>
      </div>

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 rounded-full h-12 w-12 shadow-lg animate-bounce bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </footer>
  );
};

export default Footer;