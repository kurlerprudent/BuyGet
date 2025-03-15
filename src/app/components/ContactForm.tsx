// ContactForm.tsx
"use client";
import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <form className="space-y-8">
      <motion.div whileHover={{ scale: 1.02 }}>
        <input 
          type="text" 
          className="w-full bg-white/5 border-b-2 border-white/20 focus:border-pink-500 
            text-white py-4 px-2 text-lg focus:outline-none transition-all"
          placeholder="Your Name"
        />
      </motion.div>

      <motion.div whileHover={{ scale: 1.02 }}>
        <textarea
          className="w-full bg-white/5 border-b-2 border-white/20 focus:border-purple-500 
            text-white py-4 px-2 text-lg focus:outline-none transition-all h-32"
          placeholder="Your Message"
        />
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 
          rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
      >
        Send Message
      </motion.button>
    </form>
  );
}