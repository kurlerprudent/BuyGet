"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ServiceHero: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const [windowSize, setWindowSize] = useState({ width: 1000, height: 1000 });

  // Stable motion transforms
  const rotateX = useTransform(
    cursorY,
    [0, windowSize.height],
    [-5, 5]
  );
  const rotateY = useTransform(
    cursorX,
    [0, windowSize.width],
    [5, -5]
  );

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== "undefined") {
      const updateWindowSize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };

      updateWindowSize();
      const handleResize = () => updateWindowSize();
      
      const moveCursor = (e: MouseEvent) => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      };

      window.addEventListener("resize", handleResize);
      window.addEventListener("mousemove", moveCursor);
      
      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("mousemove", moveCursor);
      };
    }
  }, []);

  // Deterministic particle generator
  const FloatingParticle = ({ index }: { index: number }) => {
    const seed = index * 1000;
    const stableRandom = (max: number) => {
      return Math.abs(Math.sin(seed + Date.now() / 1000)) * max;
    };

    return (
      <motion.div
        className="absolute rounded-full bg-gradient-to-r from-pink-500/20 to-yellow-500/20"
        initial={{
          scale: 0,
          opacity: 0,
          x: stableRandom(100) - 50,
          y: stableRandom(100) - 50,
        }}
        animate={{
          scale: [0, 1, 0],
          opacity: [0, 0.5, 0],
          x: stableRandom(200) - 100,
          y: stableRandom(200) - 100,
        }}
        transition={{
          duration: stableRandom(4) + 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          width: stableRandom(40) + 20,
          height: stableRandom(40) + 20,
        }}
      />
    );
  };

  return (
    <section className="relative h-screen overflow-hidden dark:bg-gray-900">
      {/* Background image with safe rotation */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/assets/services-hero.jpg')",
          rotateX: isMounted ? rotateX : 0,
          rotateY: isMounted ? rotateY : 0,
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-purple-900/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      {/* Main content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <motion.div className="max-w-4xl">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-6"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  type: "spring", 
                  stiffness: 100,
                  damping: 10
                }
              },
            }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-yellow-200 drop-shadow-2xl">
              Transformative Digital Solutions
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Discover innovative <span className="text-pink-300 font-semibold underline-offset-4 hover:underline cursor-default">solutions</span> and{" "}
            <span className="text-yellow-300 font-semibold underline-offset-4 hover:underline cursor-default">cutting-edge technology</span> that empower your business.
          </motion.p>

          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/contact">
              <motion.div
                className="inline-block bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white font-bold py-3 px-7 rounded-full shadow-2xl relative overflow-hidden"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 300 }}
              >
                <span className="relative z-10 text-lg tracking-wide flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Get In Touch
                </span>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        {isMounted && (
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <div className="w-6 h-10 border-2 border-white rounded-3xl flex justify-center">
              <motion.div
                className="w-1 h-2 bg-white rounded-full mt-1"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        )}
      </div>

      {/* Client-side only particles */}
      {isMounted && (
        <>
          {[...Array(12)].map((_, i) => (
            <FloatingParticle key={i} index={i} />
          ))}
        </>
      )}
    </section>
  );
};

export default ServiceHero;