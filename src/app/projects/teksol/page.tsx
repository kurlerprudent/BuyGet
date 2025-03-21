"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects, Project } from "@/data/projects";
import React, { useEffect, useState } from "react";


const teksol =  
{
    id: 7,
    slug: "teksol",
    name: "TEKSOL",
    description: "Consumer electronics and smart devices.",
    category: "Mobile",
    bgImage: "/assets/teksol.jpg",
    caseStudy: {
      challenges: "A fast-changing market and high consumer expectations were hard to meet.",
      solutions: "We designed innovative products with smart integrations and modern design.",
      outcomes: "Boosted market presence and significantly improved customer satisfaction.",
    },
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

  

  if (!teksol) {
    return (
      <div className={`min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} flex items-center justify-center`}>
        <p className={`text-xl ${isDarkMode ? "text-white" : "text-black"}`}>Project not found.</p>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <div className="max-w-5xl mx-auto py-10 pt-28 pb-25 px-4">
        <Link href="/projects">
          <p className="text-pink-400 hover:underline mb-4 cursor-pointer">
            &larr; Back to Projects
          </p>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-black"}`}>
            {teksol.name}
          </h1>

          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden mb-8">
            <Image
              src={teksol.bgImage}
              alt={teksol.name}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
              priority
            />
          </div>

          <p className={`text-lg md:text-xl mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>{teksol.description}</p>

          <div className="space-y-4">
            <h2 className={`text-2xl font-semibold ${isDarkMode ? "text-white" : "text-black"}`}>Project Details</h2>
            <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>{teksol.caseStudy.challenges}</p>
            <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>{teksol.caseStudy.solutions}</p>
            <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>{teksol.caseStudy.outcomes}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}