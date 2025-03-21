"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const ModernHero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center isolate overflow-hidden">
      {/* Optimized Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/dev1.jpg"
          alt="Modern digital workspace"
          fill
          priority
          quality={80}
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-gray-900/40" />
      </div>

      {/* Content Container */}
      <div className="max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            <span className="block mb-4">Innovation Meets</span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Digital Precision
            </span>
          </h1>

          <motion.p
            className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Crafting transformative digital experiences through cutting-edge 
            technology and human-centered design.
          </motion.p>

          <motion.div
            className="mt-8 flex justify-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
           
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <ChevronDownIcon className="w-7 h-7 text-white animate-bounce" />
          <span className="text-sm text-white/80 font-medium tracking-wide">
            Discover More
          </span>
        </motion.div>
      </div>

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[url('/assets/grid.svg')] bg-center opacity-10 pointer-events-none" />
    </section>
  );
};

export default ModernHero;