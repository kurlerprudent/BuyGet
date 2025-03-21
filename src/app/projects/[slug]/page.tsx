"use client";

import React, { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Project, projects } from "@/data/projects";
// Removed unused PageProps from next/navigation; using custom type instead.

interface PageProps {
  params: {
    slug: string;
  };
}

export default function Page({ params }: PageProps) { // Use custom PageProps
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

  const { slug } = params; // Access slug directly

  const project = projects.find((p: Project) => p.slug === slug);

  if (!project) {
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
            {project.name}
          </h1>

          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden mb-8">
            <Image
              src={project.bgImage}
              alt={project.name}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
              priority
            />
          </div>

          <div className="space-y-8">
            <div className={`p-6 rounded-xl ${isDarkMode ? "bg-gray-800" : "bg-gray-100"} ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? "text-white" : "text-black"}`}>Project Overview</h2>
              <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>{project.description}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className={`p-6 rounded-xl ${isDarkMode ? "bg-gray-800" : "bg-gray-100"} ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                <h3 className="text-xl font-semibold mb-3 text-pink-400">
                  Challenges
                </h3>
                <p className={`text-gray-300 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  {project.caseStudy.challenges}
                </p>
              </div>

              <div className={`p-6 rounded-xl ${isDarkMode ? "bg-gray-800" : "bg-gray-100"} ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                <h3 className="text-xl font-semibold mb-3 text-pink-400">
                  Solutions
                </h3>
                <p className={`text-gray-300 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  {project.caseStudy.solutions}
                </p>
              </div>

              <div className={`p-6 rounded-xl ${isDarkMode ? "bg-gray-800" : "bg-gray-100"} ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                <h3 className="text-xl font-semibold mb-3 text-pink-400">
                  Outcomes
                </h3>
                <p className={`text-gray-300 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  {project.caseStudy.outcomes}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}