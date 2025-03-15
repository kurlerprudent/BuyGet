"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, Sun, Moon, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/Services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  // Scroll handling
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 100) {
      setIsHidden(true);
    } else if (latest < previous) {
      setIsHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  // Dark mode handling
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const isDarkPreferred = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(storedTheme ? storedTheme === 'dark' : isDarkPreferred);
    document.documentElement.classList.toggle('dark', storedTheme === 'dark' || (!storedTheme && isDarkPreferred));
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  // Mobile menu handling
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };

    document.body.classList.toggle('overflow-hidden', isMenuOpen);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.body.classList.remove('overflow-hidden');
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  // Animation variants
  const mobileMenuVariants = {
    open: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    closed: { x: '-100%', transition: { duration: 0.3 } },
  };

  const linkVariants = {
    open: { opacity: 1, x: 0, transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
    closed: { opacity: 0, x: -20 },
  };

  const activeLinkAnimation = {
    scale: [1, 1.1, 1],
    transition: { duration: 0.3 },
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setIsMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 ${isScrolled ? 'shadow-lg' : ''}`}
      animate={{ y: isHidden ? -100 : 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="bg-background/80 backdrop-blur-md border-b border-border/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Zap className="mr-2 w-6 h-6 text-pink-500" />
            <span className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              BuyGet
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="relative group"
                whileHover={{ y: -2 }}
                animate={pathname === link.href ? activeLinkAnimation : {}}
              >
                <span className={`text-lg font-medium ${pathname === link.href ? 'text-pink-500' : 'text-white'}`}>
                  {link.name}
                </span>
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
            <motion.button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-accent transition-colors"
              whileHover={{ scale: 1.1 }}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-white" />
              )}
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <motion.button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
<AnimatePresence>
  {isMenuOpen && (
    <motion.div
      className="md:hidden fixed inset-0 bg-black/80 backdrop-blur-sm"
      initial="closed"
      animate="open"
      exit="closed"
      variants={mobileMenuVariants}
      onClick={handleBackdropClick}
    >
      <div className="relative container mx-auto px-4 py-8 h-full flex flex-col items-center">
        {/* Close Button Added Here */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 text-white hover:text-pink-500 transition-colors"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        <motion.div
          variants={linkVariants}
          className="flex flex-col space-y-6 w-full items-center"
        >
          {links.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="relative group"
              variants={linkVariants}
              onClick={() => setIsMenuOpen(false)}
              whileHover={{ x: 10 }}
            >
              <span className={`text-2xl font-semibold ${pathname === link.href ? 'text-pink-500' : 'text-white'}`}>
                {link.name}
              </span>
              <span className="absolute left-0 bottom-0 h-1 w-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </motion.div>

        {/* ... rest of the mobile menu content ... */}
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </motion.nav>
  );
}