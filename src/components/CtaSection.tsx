"use client";

import React, { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';

const FloatingShapes = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const shapes = Array(10).fill(null);
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((_, i) => {
        const width = Math.random() * 60 + 20;
        const height = Math.random() * 60 + 20;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const duration = Math.random() * 5 + 5;
        return (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              isDarkMode 
                ? 'border-lime-400/20' 
                : 'border-emerald-600/20'
            }`}
            style={{
              width: width + 'px',
              height: height + 'px',
              left: left + '%',
              top: top + '%',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.2, 0],
              scale: [0, 1.2, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

const glitchTextVariants: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export function CTASection() {
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
      isDarkMode ? 'bg-black' : 'bg-slate-50'
    }`}>
      {/* Gradient & Animated Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${
        isDarkMode 
          ? 'from-black via-[#111] to-[#222]' 
          : 'from-slate-100 via-slate-50 to-slate-200'
      }`}>
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r from-transparent ${
            isDarkMode ? 'via-white/10' : 'via-black/10'
          } to-transparent`}
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <FloatingShapes isDarkMode={isDarkMode} />

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center gap-8">
        <motion.h1
          className={`relative text-5xl md:text-7xl font-bold ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}
          variants={glitchTextVariants}
          initial="initial"
          animate="animate"
        >
          <span className="relative inline-block">
            Don’t Be Shy,
            <span className={`absolute top-0 left-0 w-full h-full blur-[1px] overflow-hidden mix-blend-screen -z-10 animate-[glitch_1.5s_infinite_alternate] ${
              isDarkMode ? 'text-lime-400/80' : 'text-emerald-600/80'
            }`} aria-hidden="true">
              Don’t Be Shy,
            </span>
          </span>
          <br />
          <span className="relative inline-block">
            Say Hello.
            <span className={`absolute top-0 left-0 w-full h-full blur-[1px] overflow-hidden mix-blend-screen -z-10 animate-[glitch_1.5s_infinite_alternate] ${
              isDarkMode ? 'text-lime-400/80' : 'text-emerald-600/80'
            }`} aria-hidden="true">
              Say Hello.
            </span>
          </span>
        </motion.h1>

        <motion.a
          href="/contact"
          className={`inline-block px-10 py-4 font-semibold rounded-full transition-colors duration-300 ${
            isDarkMode
              ? 'border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black'
              : 'border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Contact Us"
        >
          contact us.
        </motion.a>
      </div>
    </section>
  );
}