"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import React, { useEffect, useState } from "react";
import { CpuChipIcon, ShieldCheckIcon, SunIcon } from "@heroicons/react/24/solid";

type Service = {
  id: number;
  slug: string;
  title: string;
  description: string;
  bgImage: string;
  details: string;
  icon: React.ComponentType<{ className?: string }>;
};

const Renewable = 
{
    id: 3,
    title: "Renewable Energy",
    description: "Innovative renewable energy projects",
    bgImage: "/assets/project-renewable.jpg",
      slug: "renewable-energy",
    icon: SunIcon,
    details:
    "Our Renewable Energy service focuses on sustainable solutions to reduce your carbon footprint. From solar and wind power installations to energy efficiency audits, we provide end-to-end solutions. Embrace green technology and invest in a cleaner, more efficient future with our expert guidance.",
  }
export default function Page() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    };

    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  

  if (!Renewable) {
    return (
      <div className={`min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} flex items-center justify-center`}>
        <p className={`text-xl ${isDarkMode ? "text-white" : "text-black"}`}>Service not found.</p>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <div className="max-w-5xl mx-auto py-10 pt-28 pb-25 px-4">
        {/* Back Link */}
        <Link href="/Services">
          <p className="text-pink-400 hover:underline mb-4 cursor-pointer">
            &larr; Back to Services
          </p>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Service Title */}
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-black"}`}>
            {Renewable.title}
          </h1>

          {/* Background Image */}
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden mb-8">
            <Image
              src={Renewable.bgImage}
              alt={Renewable.title}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>

          {/* Service Short Description */}
          <p className={`text-lg md:text-xl mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>{Renewable.description}</p>

          {/* Detailed Information */}
          <div className="space-y-4">
            <h2 className={`text-2xl font-semibold ${isDarkMode ? "text-white" : "text-black"}`}>Service Details</h2>
            <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>{Renewable.details}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}