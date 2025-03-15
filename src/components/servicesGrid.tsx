// components/ServiceGrid.tsx
"use client";

import React from "react";
import ServiceCard from "./servicesCard";
import { motion, AnimatePresence } from "framer-motion";
import { CommandLineIcon, CpuChipIcon, DevicePhoneMobileIcon, GlobeAltIcon, ShieldCheckIcon, SunIcon } from "@heroicons/react/24/outline";

const services = [
  {
    id: 1,
    title: "AI Research",
    description: "Cutting-edge AI and machine learning solutions",
    bgImage: "/assets/project-ai.jpg",
    icon: CpuChipIcon,
  },
  {
    id: 2,
    title: "Cybersecurity",
    description: "Advanced security measures and protocols",
    bgImage: "/assets/project-cybersecurity.jpg",
    icon: ShieldCheckIcon,
  },
  {
    id: 3,
    title: "Renewable Energy",
    description: "Innovative renewable energy projects",
    bgImage: "/assets/project-renewable.jpg",
    icon: SunIcon,
  },
  {
    id: 4,
    title: "Bot Automation",
    description: "Intelligent process automation solutions",
    bgImage: "/assets/project-bot.jpg",
    icon: CommandLineIcon,
  },
  {
    id: 5,
    title: "Web Applications",
    description: "Enterprise-grade web application development",
    bgImage: "/assets/project-web.jpg",
    icon: GlobeAltIcon,
  },
  {
    id: 6,
    title: "Mobile Applications",
    description: "Cross-platform mobile app development",
    bgImage: "/assets/project-mobile.jpg",
    icon: DevicePhoneMobileIcon,
  },
];

const ServiceGrid = () => {
  return (
    <section className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-white"
          >
            Our Core Services
          </motion.h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Transforming industries through innovative technological solutions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;