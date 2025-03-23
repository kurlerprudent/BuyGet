// components/NewsHero.tsx
"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

const NewsHero = () => {
  return (
    <section className="relative h-[80vh] w-full">
      {/* Background Image with Subtle Animation */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/assets/news-hero-bg.jpg"
          alt="Innovation in Action"
          layout="fill"
          objectFit="cover"
          priority
          className="opacity-90"
          placeholder="blur"
          blurDataURL="/assets/news-hero-blur.jpg"
        />
      </motion.div>

      {/* Solid Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content Container */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-center"
          >
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl mb-6">
              BuyGet Insights
              <span className="block mt-3 text-pink-400">News & Events</span>
            </h1>
            
            <p className="text-lg text-gray-200 md:text-xl mb-8 mx-auto max-w-xl">
              Cutting-edge updates shaping the future of commerce
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
             
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsHero;