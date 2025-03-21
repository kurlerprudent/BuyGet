"use client";
import { motion, useInView } from "framer-motion";
import { Rocket, Leaf, Shield, Users, Star, Lightbulb } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const OurStoryCoreValues = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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

  const coreValues = [
    { icon: <Rocket />, title: "Innovation", text: "Pushing technological boundaries through creative solutions" },
    { icon: <Star />, title: "Excellence", text: "Delivering unmatched quality in every project" },
    { icon: <Shield />, title: "Integrity", text: "Building trust through transparency and honesty" },
    { icon: <Users />, title: "Collaboration", text: "Fostering teamwork and strategic partnerships" },
    { icon: <Leaf />, title: "Sustainability", text: "Committing to eco-friendly technological progress" },
    { icon: <Lightbulb />, title: "Vision", text: "Anticipating future tech trends and needs" },
  ];

  return (
    <section ref={ref} className={`relative py-20 ${
      isDarkMode
        ? 'bg-gradient-to-b from-gray-900 via-gray-950 to-black'
        : 'bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200'
    }`}>
      {/* Fixed, darker background */}
      <div className="fixed inset-0" style={{ zIndex: -1, background: isDarkMode ? 'black' : 'white' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold" style={{color: isDarkMode ? 'white' : 'black'}}>
            <span className={`bg-gradient-to-r ${
              isDarkMode
                ? 'from-blue-400 to-purple-400'
                : 'from-blue-600 to-purple-600'
            } bg-clip-text text-transparent`}>
              Our Journey
            </span>{" "}
            &amp; Values
          </h2>
          <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} max-w-2xl mx-auto`}>
            Shaping the future through technology and principled innovation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Our Story Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-8 relative"
          >
            <div className={`absolute left-8 top-2 bottom-2 w-1 bg-gradient-to-b ${
              isDarkMode
                ? 'from-blue-200/50 to-purple-200/50'
                : 'from-blue-200 to-purple-200'
            }`} />

            <div className="pl-12 relative">
              <div className="absolute left-0 top-1 w-6 h-6 bg-blue-500 rounded-full" />
              <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'} mb-4`}>2019 - Foundation</h3>
              <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Established with a bold vision to revolutionize digital transformation in West Africa
              </p>
            </div>

            <div className="pl-12 relative">
              <div className="absolute left-0 top-1 w-6 h-6 bg-purple-500 rounded-full" />
              <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'} mb-4`}>2021 - Expansion</h3>
              <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Launched three new divisions in AI, cybersecurity, and renewable energy
              </p>
            </div>

            <div className="pl-12 relative">
              <div className="absolute left-0 top-1 w-6 h-6 bg-blue-500 rounded-full" />
              <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'} mb-4`}>2023 - Recognition</h3>
              <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Awarded "Most Innovative Tech Company" at Africa Tech Awards
              </p>
            </div>
          </motion.div>

          {/* Core Values Grid with Bento-Box Layout & Glass Morphism */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-xl shadow-sm hover:shadow-lg transition-all border ${isDarkMode ? 'border-white/20 bg-gray-800/50' : 'border-gray-300 bg-white/50'} backdrop-blur-md`}
              >
                <div className="text-blue-500 mb-4">{value.icon}</div>
                <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'} mb-2`}>{value.title}</h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{value.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mission & Vision Section with Glass Morphism */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className={`mt-20 grid md:grid-cols-2 gap-8 rounded-2xl p-8 shadow-xl border ${isDarkMode ? 'border-white/20 bg-gray-800/50' : 'border-gray-300 bg-white/50'} backdrop-blur-lg`}
        >
          <div className="space-y-6">
            <div className={`${isDarkMode ? 'bg-blue-500/10' : 'bg-blue-500/10'} p-6 rounded-xl`}>
              <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'} mb-4`}>Our Mission</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                Empower industries through innovative technology solutions that drive progress, efficiency, and sustainable growth.
              </p>
            </div>
          </div>

          <div className="space-y-6">
          
<div className={`${isDarkMode ? 'bg-purple-500/10' : 'bg-purple-500/10'} p-6 rounded-xl`}>
<h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'} mb-4`}>Our Vision</h3>
<p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
  Lead global digital transformation by pioneering advancements that redefine the future of technology across continents.
</p>
</div>
</div>
</motion.div>
</div>
</section>
);
};

export default OurStoryCoreValues;