// components/ServiceCard.tsx
"use client";

import { motion } from "framer-motion";
import React from "react";
import {
  CpuChipIcon,
  ShieldCheckIcon,
  SunIcon,
  CommandLineIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

type Service = {
  id: number;
  title: string;
  description: string;
  bgImage: string;
  icon: React.ComponentType<{ className?: string }>;
};

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl shadow-2xl group h-[400px] cursor-pointer border border-white/10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.03 }}
    >
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${service.bgImage}')` }}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.4 }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />

      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-end p-8">
        <div className="backdrop-blur-sm bg-gray-900/30 p-6 rounded-xl space-y-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/10">
            <service.icon className="w-8 h-8 text-pink-400" />
          </div>
          
          <h2 className="text-3xl font-bold text-white">{service.title}</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            {service.description}
          </p>
          
          <motion.div
            className="inline-flex items-center gap-2 text-white/80 hover:text-pink-400 transition-colors"
            whileHover={{ x: 5 }}
          >
            <span>Explore Service</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;