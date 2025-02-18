"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useState, useEffect } from 'react';

/** 
 * Floating shapes in the background
 */
const FloatingShapes = () => {
  const shapes = Array(10).fill(null);
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((_, i) => (
        <motion.div
          key={i}
          className="absolute border border-lime-400/20 rounded-full"
          style={{
            width: Math.random() * 60 + 20 + 'px',
            height: Math.random() * 60 + 20 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.2, 0],
            scale: [0, 1.2, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

/** 
 * Simple glitch text effect 
 */
const glitchTextVariants: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export function CTASection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Subtle Gradient & Animated Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#111] to-[#222]">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Floating Shapes */}
      <FloatingShapes />

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center gap-8">
        {/* Glitch Headline */}
        <motion.h1
          className="relative text-5xl md:text-7xl font-bold text-white"
          variants={glitchTextVariants}
          initial="initial"
          animate="animate"
        >
          <span className="relative inline-block">
            Don’t Be Shy, 
            {/* Glitch layers */}
            <span className="absolute top-0 left-0 w-full h-full text-lime-400/80 blur-[1px] overflow-hidden mix-blend-screen -z-10 animate-[glitch_1.5s_infinite_alternate]" aria-hidden="true">
              Don’t Be Shy,
            </span>
          </span>
          <br />
          <span className="relative inline-block">
            Say Hello.
            {/* Glitch layers */}
            <span className="absolute top-0 left-0 w-full h-full text-lime-400/80 blur-[1px] overflow-hidden mix-blend-screen -z-10 animate-[glitch_1.5s_infinite_alternate]" aria-hidden="true">
              Say Hello.
            </span>
          </span>
        </motion.h1>

        {/* CTA Button */}
        <motion.a
          href="/contact"
          className="inline-block px-10 py-4 border border-lime-400 text-lime-400 font-semibold rounded-full hover:bg-lime-400 hover:text-black transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          contact us.
        </motion.a>
      </div>
    </section>
  );
}



 
