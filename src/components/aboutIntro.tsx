"use client";
import { motion, useInView } from 'framer-motion';
import { Globe, Cpu, Shield, Rocket, Factory, Smartphone, Sun } from 'lucide-react';
import { useRef } from 'react';
import { useState } from 'react';

export function CompanyOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [animated, setAnimated] = useState(false);

  if (isInView && !animated) {
    setAnimated(true);
  }

  const coreAreas = [
    { icon: <Cpu className="w-5 h-5" />, title: "AI & Software Development", color: "text-blue-400" },
    { icon: <Shield className="w-5 h-5" />, title: "Cybersecurity Solutions", color: "text-purple-400" },
    { icon: <Rocket className="w-5 h-5" />, title: "Aerospace Engineering", color: "text-pink-400" },
    { icon: <Factory className="w-5 h-5" />, title: "Industrial Automation", color: "text-orange-400" },
    { icon: <Smartphone className="w-5 h-5" />, title: "Consumer Electronics", color: "text-green-400" },
    { icon: <Sun className="w-5 h-5" />, title: "Renewable Energy", color: "text-yellow-400" },
  ];

  return (
    <section ref={ref} className="relative py-24 bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-20 top-1/3 w-64 h-64 blur-3xl animate-float bg-gradient-to-r from-pink-500/5 to-orange-500/5" />
        <div className="absolute right-32 top-1/2 w-48 h-48 blur-2xl animate-float-delayed bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Legal Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={animated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 inline-flex items-center px-6 py-3 rounded-full border backdrop-blur-sm bg-gradient-to-r from-pink-200 to-orange-200 border-pink-300/50"
        >
          <Globe className="h-5 w-5 mr-2 animate-spin-slow text-pink-600" />
          <span className="text-sm font-semibold text-gray-700">
            Fully Compliant with Ghana's Companies Act 2019 & Constitution
          </span>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Introduction Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={animated ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8 relative"
          >
            <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-pink-400 to-orange-400" />

            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                Digital Transformation
              </span>{' '}
              <span className="text-slate-900">
                Architects
              </span>
            </h2>

            <p className="text-lg leading-relaxed text-gray-700">
              As a certified technology powerhouse, BuyGet ICT Solutions combines legal excellence
              with cutting-edge innovation to deliver transformative solutions across Africa.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
              {[
                { value: "7+", label: "Years Experience", color: "text-pink-400" },
                { value: "150+", label: "Active Projects", color: "text-orange-400" },
                { value: "98%", label: "Client Satisfaction", color: "text-purple-400" }
              ].map((stat, index) => (
                <div key={index} className="p-4 rounded-lg border bg-white/50 border-gray-300">
                  <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Core Areas Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={animated ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Section Title */}
            <h3 className="text-2xl font-bold text-slate-900">
              We specialise in the following
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {coreAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={animated ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{
                    y: -5,
                    borderColor: 'rgba(219, 39, 119, 0.3)',
                    boxShadow: '0 10px 30px rgba(219, 39, 119, 0.05)'
                  }}
                  className="p-4 rounded-xl border transition-all backdrop-blur-sm group bg-white/50 border-gray-300"
                >
                  <div className={`${area.color} mb-2 transition-colors group-hover:text-pink-700`}>
                    {area.icon}
                  </div>
                  <h3 className="text-base font-semibold transition-colors text-slate-900 group-hover:text-pink-700">
                    {area.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Global Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 14s ease-in-out infinite;
          animation-delay: 3s;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}