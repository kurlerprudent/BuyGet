"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const executives = [
  {
    id: 1,
    name: "Mr. Joshua Elson",
    title: "Founder and Executive Director",
    description:
      "Provides overall leadership, strategic vision, and corporate governance. Leads innovation and global expansion. Oversees daily operations, resource management, and business efficiency. Ensures cross-departmental collaboration.",
    image: "/test_1.jpg",
  },
  {
    id: 2,
    name: "Mr. Christian",
    title: "Chief Technology Officer (CTO)",
    description:
      "Leads technological innovations, AI development, and cybersecurity frameworks.",
    image: "/test_1.jpg",
  },
  {
    id: 3,
    name: "Mr. Asem",
    title: "Chief Financial Officer and Legal (CF/LO) Officer",
    description:
      "Manages financial planning, investment strategies, and fiscal sustainability. Ensures revenue optimization.",
    image: "/test_1.jpg",
  },
];

const teams = [
  {
    id: 1,
    name: "Development & Engineering Team",
    description:
      "Supports technological innovations and product development across divisions.",
  },
  {
    id: 2,
    name: "Business Development, Finance & Legal Team",
    description:
      "Handles business development, financial planning, and legal compliance.",
  },
  {
    id: 3,
    name: "Customer Support & Training Team",
    description:
      "Provides customer support, training, and ensures high satisfaction levels.",
  },
  {
    id: 4,
    name: "Corporate Governance & Strategic Vision",
    description:
      "Ensures transparency and aligns long-term strategic growth with corporate governance.",
  },
];

const LeadershipSection = () => {
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

  return (
    <section className={`relative py-20 ${
      isDarkMode
        ? 'bg-gradient-to-b from-gray-900 via-gray-950 to-black'
        : 'bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200'
    }`}>
      {/* Fixed dark background */}
      <div className="fixed inset-0" style={{ zIndex: -1, background: isDarkMode ? 'black' : 'white' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          className={`text-4xl md:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-black'} text-center mb-12`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Leadership &amp; Organizational Structure
        </motion.h2>

        {/* Executive Caucus */}
        <div className="mb-16">
          <motion.h3
            className={`text-3xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'} mb-6`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Executive Caucus
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-6">
            {executives.map((exec) => (
              <motion.div
                key={exec.id}
                className={`rounded-xl p-6 shadow-sm hover:shadow-lg border ${isDarkMode ? 'border-white/20 bg-gray-800/50' : 'border-gray-300 bg-white/50'} backdrop-blur-md text-center transition-all`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border border-white/30">
                  <Image
                    src={exec.image}
                    alt={exec.name}
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <h4 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>{exec.name}</h4>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>{exec.title}</p>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{exec.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Operational & Technical Teams */}
        <div className="mb-16">
          <motion.h3
            className={`text-3xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'} mb-6`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Operational &amp; Technical Teams
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teams.map((team) => (
              <motion.div
                key={team.id}
                className={`rounded-xl p-6 shadow-sm hover:shadow-lg border ${isDarkMode ? 'border-white/20 bg-gray-800/50' : 'border-gray-300 bg-white/50'} transition-all backdrop-blur-md`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h4 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>{team.name}</h4>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{team.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Governance */}
        <div>
          <motion.h3
            className={`text-3xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'} mb-6`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Governance
          </motion.h3>
          <motion.div
            className={`rounded-xl shadow-sm p-6 border lg:max-w-[50%] ${isDarkMode ? 'border-white/20 bg-gray-800/50' : 'border-gray-300 bg-white/50'} transition-all backdrop-blur-md`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Buyget ICT Solutions is governed by a Board of Directors that ensures transparency, accountability, and long-term strategic growth for all divisions. Their oversight plays a pivotal role in shaping our vision and safeguarding stakeholder interests.
            </p>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;