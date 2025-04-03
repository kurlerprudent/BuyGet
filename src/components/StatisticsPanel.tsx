"use client";

import React from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Rocket, BarChart, Users, Globe } from 'lucide-react';

const stats = [
  { icon: Rocket, value: 43, suffix: '+', label: 'Projects Completed', iconColor: 'text-blue-400' },
  { icon: BarChart, value: 99.7, suffix: '%', label: 'Client Satisfaction', iconColor: 'text-green-400' },
  { icon: Users, value: 2.5, suffix: 'M', label: 'Active Users', iconColor: 'text-purple-400' },
  { icon: Globe, value: 3, suffix: '+', label: 'Countries Served', iconColor: 'text-orange-400' },
];

function AnimatedNumber({ value }: { value: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    value % 1 === 0 ? Math.round(latest) : latest.toFixed(1)
  );
  const [displayValue, setDisplayValue] = React.useState("0");

  React.useEffect(() => {
    const unsubscribe = rounded.onChange((latest) => {
      setDisplayValue(latest.toString());
    });
    const controls = animate(count, value, {
      duration: 2.5,
      ease: [0.25, 0.1, 0.25, 1],
    });
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [value, count, rounded]);

  return <motion.span>{displayValue}</motion.span>;
}

export function StatsPanel() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      className="py-5 relative overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100"
      ref={ref}
    >
      <div
        className="absolute inset-0 opacity-40 bg-[url(/images/grid-pattern-light.svg)] bg-repeat"
      />
      
      <div className="absolute inset-0 bg-gradient-radial via-slate-100/30 to-slate-50" />

      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.15,
                when: 'beforeChildren',
              },
            },
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="group relative p-6 rounded-2xl backdrop-blur-sm shadow-lg bg-white/80 border border-slate-200"
              variants={{
                hidden: { y: 20, opacity: 0, scale: 0.95 },
                visible: { y: 0, opacity: 1, scale: 1 },
              }}
            >
              <motion.div
                className="inline-block mb-4"
                animate={{
                  y: [0, -5, 0],
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }}
              >
                <stat.icon className={`w-10 h-10 ${stat.iconColor} drop-shadow-sm`} />
              </motion.div>

              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  <AnimatedNumber value={stat.value} />
                </span>
                <span className="text-lg text-slate-600">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-slate-600 font-medium tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
