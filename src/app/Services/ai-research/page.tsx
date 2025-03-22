"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import React, { useEffect, useState } from "react";
import { CpuChipIcon } from "@heroicons/react/24/solid";

type Service = {
  id: number;
  slug: string;
  title: string;
  description: string;
  bgImage: string;
  details: string;
  icon: React.ComponentType<{ className?: string }>;
};

const ai = 
{
  id: 1,
  title: "AI Research",
  description: "Cutting-edge AI and machine learning solutions",
  bgImage: "/assets/project-ai.jpg",
  slug: "ai-research",
  icon: CpuChipIcon,
  details:
  "Our AI Research service uses advanced machine learning algorithms to deliver innovative solutions. We analyze data, optimize processes, and empower businesses with actionable insights. Whether you need predictive modeling, natural language processing, or computer vision, our team delivers transformative results.",
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

  

  if (!ai) {
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
            {ai.title}
          </h1>

          {/* Background Image */}
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden mb-8">
            <Image
              src={ai.bgImage}
              alt={ai.title}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>

          {/* Service Short Description */}
          <p className={`text-lg md:text-xl mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>{ai.description}</p>

          {/* Detailed Information */}
          <div className="space-y-4">
            <h2 className={`text-2xl font-semibold ${isDarkMode ? "text-white" : "text-black"}`}>Service Details</h2>
            <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>{ai.details}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}