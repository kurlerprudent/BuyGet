"use client";
import { motion, useInView } from 'framer-motion';
import { Globe, Cpu, Shield, Rocket, Factory, Smartphone, Sun } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

export function CompanyOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };
    
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true });
    
    return () => observer.disconnect();
  }, []);

  const coreAreas = [
    { icon: <Cpu />, title: "AI & Software Development", color: "text-blue-400 dark:text-blue-400" },
    { icon: <Shield />, title: "Cybersecurity Solutions", color: "text-purple-400 dark:text-purple-400" },
    { icon: <Rocket />, title: "Aerospace Engineering", color: "text-pink-400 dark:text-pink-400" },
    { icon: <Factory />, title: "Industrial Automation", color: "text-orange-400 dark:text-orange-400" },
    { icon: <Smartphone />, title: "Consumer Electronics", color: "text-green-400 dark:text-green-400" },
    { icon: <Sun />, title: "Renewable Energy", color: "text-yellow-400 dark:text-yellow-400" },
  ];

  return (
    <section ref={ref} className={`relative py-24 ${
      isDarkMode 
        ? 'bg-gradient-to-b from-gray-900 via-gray-950 to-black' 
        : 'bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200'
    }`}>
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute left-20 top-1/3 w-64 h-64 blur-3xl animate-float ${
          isDarkMode 
            ? 'bg-gradient-to-r from-pink-500/10 to-orange-500/10' 
            : 'bg-gradient-to-r from-pink-500/5 to-orange-500/5'
        }`} />
        <div className={`absolute right-32 top-1/2 w-48 h-48 blur-2xl animate-float-delayed ${
          isDarkMode 
            ? 'bg-gradient-to-br from-blue-500/15 to-purple-500/15' 
            : 'bg-gradient-to-br from-blue-500/10 to-purple-500/10'
        }`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Legal Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mb-16 inline-flex items-center px-6 py-3 rounded-full border backdrop-blur-sm ${
            isDarkMode 
              ? 'bg-gradient-to-r from-pink-500/20 to-orange-500/20 border-pink-400/30' 
              : 'bg-gradient-to-r from-pink-200 to-orange-200 border-pink-300/50'
          }`}
        >
          <Globe className={`h-5 w-5 mr-2 animate-spin-slow ${
            isDarkMode ? 'text-pink-400' : 'text-pink-600'
          }`} />
          <span className={`text-sm font-semibold ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Fully Compliant with Ghana's Companies Act 2019 & Constitution
          </span>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Introduction Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8 relative"
          >
            <div className={`absolute -left-8 top-0 w-1 h-full bg-gradient-to-b ${
              isDarkMode 
                ? 'from-pink-500 to-orange-500' 
                : 'from-pink-400 to-orange-400'
            }`} />
            
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className={`bg-gradient-to-r ${
                isDarkMode 
                  ? 'from-pink-400 to-orange-400' 
                  : 'from-pink-600 to-orange-600'
              } bg-clip-text text-transparent`}>
                Digital Transformation
              </span>{' '}
              <span className={isDarkMode ? 'text-white' : 'text-slate-900'}>
                Architects
              </span>
            </h2>
            
            <p className={`text-lg leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              As a certified technology powerhouse, BuyGet ICT Solutions combines legal excellence 
              with cutting-edge innovation to deliver transformative solutions across Africa. 
              Our multidisciplinary expertise spans:
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
              {[
                { value: "7+", label: "Years Experience", color: "text-pink-400" },
                { value: "150+", label: "Active Projects", color: "text-orange-400" },
                { value: "98%", label: "Client Satisfaction", color: "text-purple-400" }
              ].map((stat, index) => (
                <div key={index} className={`p-4 rounded-lg border ${
                  isDarkMode 
                    ? 'bg-gray-800/50 border-gray-700' 
                    : 'bg-white/50 border-gray-300'
                }`}>
                  <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Core Areas Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {coreAreas.map((area, index) => (
              <motion.div
                key={index}
                custom={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  borderColor: isDarkMode ? 'rgba(251, 113, 133, 0.5)' : 'rgba(219, 39, 119, 0.3)',
                  boxShadow: isDarkMode 
                    ? '0 10px 30px rgba(251, 113, 133, 0.1)'
                    : '0 10px 30px rgba(219, 39, 119, 0.05)'
                }}
                className={`p-6 rounded-xl border transition-all backdrop-blur-sm group ${
                  isDarkMode 
                    ? 'bg-gray-800/50 border-gray-700' 
                    : 'bg-white/50 border-gray-300'
                }`}
              >
                <div className={`${area.color} mb-4 transition-colors ${
                  isDarkMode 
                    ? 'group-hover:text-pink-400' 
                    : 'group-hover:text-pink-600'
                }`}>
                  {area.icon}
                </div>
                <h3 className={`text-xl font-semibold transition-colors ${
                  isDarkMode 
                    ? 'text-white group-hover:text-pink-300' 
                    : 'text-slate-900 group-hover:text-pink-700'
                }`}>
                  {area.title}
                </h3>
                <p className={`mt-2 text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {[
                    "Enterprise-grade AI solutions & cloud platforms",
                    "Military-grade security frameworks & audits",
                    "Advanced drone technology & satellite systems",
                    "Smart factory automation & IIoT integration",
                    "Connected home devices & wearable tech",
                    "Solar farms & microgrid solutions"
                  ][index]}
                </p>
              </motion.div>
            ))}
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