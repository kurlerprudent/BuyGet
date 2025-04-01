"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const { scrollY } = useScroll();
  const yOffset = useTransform(scrollY, [0, 400], [0, 100]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Dark mode detection
  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };

    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  // Dynamic background settings
  const bgImage = isDarkMode ? '/assets/lg5.jpeg' : '/assets/aboutbg.jpeg';
  const bgOverlay = isDarkMode 
    ? 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.6))'
    : 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.5), transparent)';

  return (
    <section className="relative w-full flex items-center justify-center min-h-[80vh] md:max-h-[70vh] overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: yOffset }}
      >
        <div 
          className="absolute inset-0 z-0"
          style={{ backgroundImage: bgOverlay }}
        />
        <Image
          src={bgImage}
          alt="Background"
          fill
          priority
          quality={100}
          className="object-cover z-0"
        />
      </motion.div>

      {/* Dark mode specific overlays */}
      {isDarkMode && (
        <div className="absolute inset-0 pointer-events-none z-1">
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,rgba(0,0,0,0.7)_80%)]" />
        </div>
      )}

      {/* Floating Gradient Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-1/3 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl animate-float" />
        <div className="absolute right-1/4 top-1/2 w-48 h-48 bg-gradient-to-br from-pink-400/15 to-orange-400/15 blur-2xl animate-float-delayed" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        {/* Main Title with Reflection */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.2, 0.6, 0.3, 1] }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white">
            About Us
          </h1>
          
          {/* Animated Reflection */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0.7 }}
            animate={{ opacity: 0.1, scaleY: -0.9 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white 
            [mask-image:linear-gradient(to_bottom,transparent_10%,white_90%)]"
          >
            About Us
          </motion.div>
        </motion.div>

        {/* Subtle Scroll Indicator */}
        <motion.div
          className="absolute bottom-1 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-sm text-gray-300 tracking-widest">EXPLORE MORE</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/80 to-transparent" />
        </motion.div>
      </div>

      {/* Global Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 14s ease-in-out infinite;
          animation-delay: 3s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;