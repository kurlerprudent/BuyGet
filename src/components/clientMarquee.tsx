"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const clients = [
  { name: 'Ghana edtech Aliance', logo: '/assets/geda.jpeg' },
  { name: 'Education Watch Africa', logo: '/assets/eduwatch.jpg' },
  { name: 'Quivertech', logo: '/assets/quiver.jpeg' },
  { name: 'Shsweb', logo: '/assets/shsweb.jpeg' },
  { name: 'Inovic', logo: '/assets/inovic.webp' },
  { name: 'Itectona', logo: '/assets/itectona.png' },
  { name: 'Nrecom', logo: '/assets/nrecom.jpeg' },
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
    <section 
      className="py-5 relative overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200" 
      ref={ref}
    >
      {/* Dynamic background texture */}
      <div 
        className="absolute inset-0 opacity-20 bg-[url(/images/light-dot-pattern.svg)] bg-repeat" 
      />
      
      <motion.div
        className="container mx-auto px-4"
        variants={marqueeVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <div className="relative overflow-hidden py-8 group">
          {/* Gradient overlays to create a fade effect at edges */}
          <div 
            className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r z-20 pointer-events-none from-gray-100 via-gray-100/90 to-transparent" 
          />
          <div 
            className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l z-20 pointer-events-none from-gray-100 via-gray-100/90 to-transparent" 
          />

          <motion.div
            className="flex"
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              x: { 
                duration: 40, 
                repeat: Infinity, 
                ease: 'linear',
                repeatType: 'loop'
              },
            }}
          >
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex shrink-0 items-center">
                {clients.map((client, index) => (
                  <motion.div
                    key={`${client.name}-${i}-${index}`}
                    className="relative group px-8 md:px-16 py-4"
                    variants={logoVariants}
                    whileHover={{
                      scale: 1.15,
                      filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.1))',
                    }}
                  >
                    <div className="relative">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="h-8 md:h-12 transition-all duration-300 opacity-80 grayscale-[50%] group-hover:grayscale-0 group-hover:opacity-100"
                        loading="lazy"
                      />
                      <span 
                        className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gray-100 text-gray-800 shadow-sm"
                      >
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
