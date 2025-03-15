"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import React, { useEffect } from "react";

const ServiceHero: React.FC = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  const rotateX = useTransform(cursorY, [0, window.innerHeight], [-5, 5]);
  const rotateY = useTransform(cursorX, [0, window.innerWidth], [5, -5]);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  const FloatingParticle = () => {
    const duration = Math.random() * 4 + 3;
    return (
      <motion.div
        className="absolute rounded-full bg-gradient-to-r from-pink-500/20 to-yellow-500/20"
        initial={{
          scale: 0,
          opacity: 0,
          y: Math.random() * 100 - 50,
          x: Math.random() * 100 - 50,
        }}
        animate={{
          scale: [0, 1, 0],
          opacity: [0, 0.5, 0],
          x: Math.random() * 200 - 100,
          y: Math.random() * 200 - 100,
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          width: Math.random() * 40 + 20,
          height: Math.random() * 40 + 20,
        }}
      />
    );
  };

 return (
    <section className="relative h-screen overflow-hidden dark:bg-gray-900">
      {/* Enhanced Dark Overlay */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/assets/services-hero.jpg')",
          rotateX,
          rotateY,
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />
      
      {/* Stronger Overlay for Better Contrast */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-purple-900/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      {/* Content Container with Text Enhancements */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <motion.div className="max-w-4xl">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-6"
            variants={{
              hidden: { opacity: 0, y: 30, rotateX: -45 },
              visible: { 
                opacity: 1, 
                y: 0, 
                rotateX: 0,
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
           Discover innovative <span className="text-pink-300 font-semibold underline-offset-4 hover:underline cursor-default">solutions and cutting-edge technology that</span> and{" "}
            <span className="text-yellow-300 font-semibold underline-offset-4 hover:underline cursor-default">next-generation web technologies</span> empower your business in the digital age.

          </motion.p>

         

          {/* Enhanced CTA Button */}
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/contact">
              <motion.div
                className="inline-block bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white font-bold py-5 px-10 rounded-full shadow-2xl relative overflow-hidden group"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300"/>
                <span className="relative z-10 text-lg tracking-wide flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Schedule Free Consultation
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-600 via-red-600 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Prompt */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, repeat: Infinity, repeatType: "mirror" }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-3xl flex justify-center">
            <motion.div
              className="w-1 h-2 bg-white rounded-full mt-1"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;