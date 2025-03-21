"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects, Project } from "@/data/projects";
import React, { useEffect, useState } from "react";


const itectona =  
{
    id: 5,
    slug: "itectona",
    name: "Cybersecurity",
    description: "Security & military engineering.",
    category: "Defense",
    bgImage: "/assets/itectona.jpg",
    caseStudy: {
      challenges: "Strict security requirements and advanced threats needed reliable solutions.",
      solutions: "We engineered military-grade systems and secure engineering solutions.",
      outcomes: "Enhanced defense capabilities and overall operational security.",
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

  

  if (!itectona) {
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
            {itectona.name}
          </h1>

          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden mb-8">
            <Image
              src={itectona.bgImage}
              alt={itectona.name}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
              priority
            />
          </div>

          <p className={`text-lg md:text-xl mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>{itectona.description}</p>

          <div className="space-y-4">
            <h2 className={`text-2xl font-semibold ${isDarkMode ? "text-white" : "text-black"}`}>Project Details</h2>
            <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>{itectona.caseStudy.challenges}</p>
            <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>{itectona.caseStudy.solutions}</p>
            <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>{itectona.caseStudy.outcomes}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}