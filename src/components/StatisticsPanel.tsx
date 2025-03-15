"use client";

import React from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Rocket, BarChart, Users, Globe } from 'lucide-react';

const stats = [
  { icon: Rocket, value: 150, suffix: '+', label: 'Projects Completed', iconColor: 'text-blue-400' },
  { icon: BarChart, value: 98.7, suffix: '%', label: 'Client Satisfaction', iconColor: 'text-green-400' },
  { icon: Users, value: 2.5, suffix: 'M', label: 'Active Users', iconColor: 'text-purple-400' },
  { icon: Globe, value: 15, suffix: '+', label: 'Countries Served', iconColor: 'text-orange-400' },
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
      className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 opacity-20 bg-[url('/images/grid-pattern-dark.svg')] bg-repeat" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-slate-800/30 to-slate-900" />

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
              className="group relative bg-slate-800 p-6 rounded-2xl border border-slate-600 backdrop-blur-sm shadow-lg"
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
                <stat.icon className={`w-10 h-10 ${stat.iconColor} drop-shadow-lg`} />
              </motion.div>

              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  <AnimatedNumber value={stat.value} />
                </span>
                <span className="text-lg text-slate-200">{stat.suffix}</span>
              </div>
              <p className="text-slate-200 font-medium tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}