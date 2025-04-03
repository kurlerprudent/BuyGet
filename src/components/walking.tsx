"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function WalkingCarousel() {
  const text = "TRUSTED BY AFRICA DIGITAL LEADERS";
  
  return (
    <div className="overflow-hidden bg-white py-4">
      <motion.div
        className="flex"
        animate={{ x: ['100%', '-100%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 12,
            ease: "linear",
          },
        }}
      >
        {/* Duplicated text for a smooth continuous effect */}
        <span className="text-gray-900 text-2xl font-bold mx-8 whitespace-nowrap">
          {text}
        </span>
        <span className="text-gray-900 text-2xl font-bold mx-8 whitespace-nowrap">
          {text}
        </span>
      </motion.div>
    </div>
  );
}
