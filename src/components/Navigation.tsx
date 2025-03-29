"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const { scrollY } = useScroll();

  // Return null if not on form page
  if (pathname !== '/form') {
    return null;
  }

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Inventions', href: '/projects' },
    { name: 'News & Events', href: '/news-events' },
    { name: 'Contact Us', href: '/contact' },
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
    const initialDarkMode = storedTheme ? storedTheme === 'dark' : true;
    setDarkMode(initialDarkMode);
    document.documentElement.classList.toggle('dark', initialDarkMode);
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
          <Link href="/" passHref>
            <motion.div
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            >
              <motion.div whileHover={{ rotate: 15 }}>
                <Image
                  src='/assets/buygetLogo1.jpeg'
                  alt='BuyGet Logo'
                  width={48}
                  height={48}
                  className="rounded-lg shadow-sm hover:shadow-md transition-shadow"
                />
              </motion.div>
              <span className="text-2xl font-bold tracking-tight relative">
                <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent group-hover:bg-gradient-to-br transition-all duration-500">
                  BuyGet
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10">
                  BuyGet
                </span>
              </span>
            </motion.div>
          </Link>

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
                <span className={`text-xl font-bold font-medium ${pathname === link.href ? 'text-pink-500' : darkMode ? 'text-white' : 'text-gray-400'}`}>
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
                <Moon className="w-5 h-5 text-gray-800" />
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

              <motion.button
                onClick={toggleDarkMode}
                className="mt-8 p-2 rounded-full hover:bg-accent transition-colors"
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}