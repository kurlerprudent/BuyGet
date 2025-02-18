"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Recommended image sources:
// 1. Company official websites (press/media pages)
// 2. Clearbit API (https://clearbit.com/logo)
// 3. SVG Repo (https://www.svgrepo.com/)
// 4. Wikimedia Commons (https://commons.wikimedia.org/)
// Convert PNGs to SVG using: https://www.onlineconverter.com/png-to-svg

const clients = [
  { name: 'Safaricom', logo: '/logos/safaricom.png' },
  { name: 'KCB Group', logo: '/logos/kcb-group.png' },
  { name: 'Equity Bank', logo: '/logos/moe.png' },
  { name: 'Nation Media', logo: '/logos/national-media.jpeg' },
  { name: 'Cooperative Bank', logo: '/logos/ges.png' },
  { name: 'Kenya Airways', logo: '/logos/kenya-airways.svg' },
  { name: 'Telkom Kenya', logo: '/logos/telkom.png' },
  { name: 'EABL', logo: '/logos/eabl.png' },
];

export function ClientMarquee() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const marqueeVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, when: 'beforeChildren' },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        type: 'spring', 
        stiffness: 300,
        damping: 15 
      } 
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden" ref={ref}>
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('/images/dot-pattern.svg')] bg-repeat" />
      
      <motion.div
        className="container mx-auto px-4"
        variants={marqueeVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <h3 className="text-center text-gray-400 mb-12 text-lg md:text-xl font-medium tracking-wide">
          Trusted by Africa's Digital Leaders
        </h3>

        <div className="relative overflow-hidden py-8 group">
          {/* Enhanced gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-900 via-gray-900/90 to-transparent z-20 pointer-events-none" />

          <motion.div
            className="flex"
            animate={{
              x: ['0%', '-100%'],
            }}
            transition={{
              x: { 
                duration: 40, 
                repeat: Infinity, 
                ease: 'linear',
                repeatType: 'loop'
              },
            }}
          >
            {/* Optimized seamless loop */}
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex shrink-0 items-center">
                {clients.map((client, index) => (
                  <motion.div
                    key={`${client.name}-${i}-${index}`}
                    className="relative group px-8 md:px-16 py-4"
                    variants={logoVariants}
                    whileHover={{
                      scale: 1.15,
                      filter: 'drop-shadow(0 8px 24px rgba(255,255,255,0.1))',
                    }}
                  >
                    <div className="relative">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="h-8 md:h-12 opacity-90 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                        loading="lazy"
                      />
                      {/* Hover tooltip */}
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-gray-200 text-xs font-medium px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        {client.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}