"use client";

import { motion, useTransform, useScroll, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const { scrollY } = useScroll();
  const yPos = useTransform(scrollY, [0, 500], [0, 100]);
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const taglines = [
    "Empowering Digital Africa",
    "Tech Solutions for Tomorrow",
    "Smart Ecosystem Builders",
  ];

  // Dark mode detection
  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };
    
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true });
    
    return () => observer.disconnect();
  }, []);

  // Typing effect
  useEffect(() => {
    const currentTagline = taglines[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(currentTagline.substring(0, currentText.length + 1));
        if (currentText === currentTagline) setTimeout(() => setIsDeleting(true), 1500);
      } else {
        setCurrentText(currentTagline.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % taglines.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex]);

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.02, delayChildren: 0.3 } },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 15, filter: 'blur(6px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { type: 'spring', stiffness: 250 } },
  };

  // Dynamic background styles
  const bgGradient = isDarkMode 
    ? `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.6))`
    : `linear-gradient(to bottom, rgba(255,255,255,0.4), rgba(255,255,255,0.6))`;

  return (
    <section className="relative h-screen">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `${bgGradient}, url('/hero-bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: yPos,
          scale: 1.05,
        }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      />

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8 md:mb-12 space-y-4 md:space-y-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-wide
                         text-gray-900 dark:text-white"
            >
              {currentText.split('').map((char, index) => (
                <motion.span
                  key={index}
                  variants={charVariants}
                  className="inline-block mx-0.5"
                >
                  {char}
                </motion.span>
              ))}
              <span className={`ml-1 w-[3px] h-[1em] inline-block animate-pulse ${
                isDarkMode ? 'bg-white' : 'bg-gray-900'
              }`} />
            </motion.div>

            <motion.p
              className="text-lg md:text-xl font-medium max-w-xl mx-auto px-4 leading-relaxed
                         text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              Driving digital transformation through innovative solutions and strategic partnerships
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mt-8 md:mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <motion.a
              href="/services"
              className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-pink-500 to-yellow-500 
                        rounded-lg md:rounded-xl hover:shadow-xl transition-all flex items-center justify-center 
                        text-base md:text-lg font-semibold group text-white"
              whileHover={{ 
                scale: 1.03,
                boxShadow: '0 4px 24px rgba(255,255,255,0.1)',
              }}
            >
              Explore Innovations
              <ChevronDown className="ml-2 h-4 w-4 md:h-5 md:w-5 animate-bounce group-hover:translate-y-0.5 
                                      transition-transform text-white" />
            </motion.a>
            
            <motion.a
              href="/contact"
              className="px-6 py-3 md:px-8 md:py-4 border-2 rounded-lg md:rounded-xl transition-all 
                        text-base md:text-lg font-semibold text-center
                        border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-400
                        text-gray-900 dark:text-white hover:bg-gray-50/50 dark:hover:bg-gray-800/50"
              whileHover={{ scale: 1.03 }}
            >
              Start Partnership
            </motion.a>
          </motion.div>

          <motion.div
            className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <ChevronDown className="h-8 w-8 md:h-12 md:w-12 text-gray-900/80 dark:text-white/80 
                                    hover:text-gray-900 dark:hover:text-white cursor-pointer" />
          </motion.div>
        </div>
      </div>

      {/* Dynamic gradient overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className={`absolute inset-0 bg-gradient-to-b ${
          isDarkMode 
            ? 'from-black/30 via-black/50 to-black/70' 
            : 'from-white/30 via-white/50 to-white/70'
        }`} />
        <div className={`absolute inset-0 bg-[radial-gradient(circle,transparent_20%,${
          isDarkMode ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.7)'
        }_80%)]`} />
      </div>
    </section>
  );
}