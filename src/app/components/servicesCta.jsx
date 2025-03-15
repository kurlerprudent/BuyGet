"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon, ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";

const CallToAction = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-purple-600 to-indigo-600">
      {/* Floating background elements */}
      <motion.div
        className="absolute top-20 left-20 w-48 h-48 bg-white/10 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-32 w-32 h-32 bg-white/10 rounded-lg"
        animate={{
          rotate: [0, 90, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-white/90 mb-12 max-w-2xl mx-auto"
          >
            Join hundreds of successful companies leveraging our cutting-edge solutions
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-bold 
              text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Start Free Trial
              <ArrowRightIcon className="w-5 h-5" />
            </motion.button>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="group flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white/20 
              hover:border-white/40 transition-colors cursor-pointer"
            >
              <ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6 text-white" />
              <span className="text-white font-semibold">Schedule Demo</span>
            </motion.div>
          </div>

          {/* Animated gradient button alternative */}
          <motion.div
            className="mt-12 inline-block relative overflow-hidden rounded-xl"
            whileHover="hover"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 animate-gradient-x" />
            <button className="relative z-10 px-12 py-4 bg-black/20 backdrop-blur-sm text-white text-lg 
              font-bold border border-white/10 rounded-xl hover:bg-black/30 transition-colors">
              Enterprise Solution Inquiry
            </button>
          </motion.div>
        </div>
      </div>

      {/* Glowing dot grid overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-dot-white/[0.03]" />
      </div>
    </section>
  );
};

export default CallToAction;