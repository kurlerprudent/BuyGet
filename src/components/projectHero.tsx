"use client";

import { motion } from "framer-motion";
import { ArrowDownIcon } from "@heroicons/react/24/outline";

const SimpleHero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-900">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/assets/grid.svg')] bg-center" />
      
      {/* Floating shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-xl"
        animate={{
          y: [0, 30, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-pink-500/20 rounded-full blur-xl"
        animate={{
          y: [30, 0, 30],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Crafting Digital
          <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Excellence
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8"
        >
          Transforming ideas into impactful digital experiences through innovative
          solutions and cutting-edge technology.
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-8 py-3 rounded-lg text-white hover:bg-white/20 transition-all group">
            Explore Our Work
            <span className="group-hover:translate-x-1 transition-transform">
              &rarr;
            </span>
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 flex flex-col items-center gap-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <ArrowDownIcon className="w-6 h-6 text-white animate-bounce" />
        <span className="text-sm text-white/80">Scroll to discover</span>
      </motion.div>

      <h1 className="text-2xl text-red-600">Page Under Construction....</h1>
    </section>
  );
};

export default SimpleHero;