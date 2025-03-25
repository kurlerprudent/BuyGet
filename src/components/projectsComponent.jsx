"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Project, projects } from "@/data/projects";
import { useEffect, useState } from "react";

export default function ProjectsPage() {
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

  const categories = ["All", "Web", "AI", "Mobile", "Cybersecurity", "Agric"];

  return (
    <>
      <div>
        <title>Our Solutions</title>
        <meta
          name="description"
          content="Discover our latest projects showcasing innovative solutions."
        />
      </div>
      <div
        className={`min-h-screen ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        } py-20 px-4`}
      >
        <h1
          className={`text-5xl md:text-7xl font-bold text-center mb-10 ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          Our Solutions
        </h1>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} isDarkMode={isDarkMode} />
          ))}
        </div>
      </div>
    </>
  );
}

function ProjectCard({ project, isDarkMode }) {
  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden shadow-xl group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-80 rounded-2xl overflow-hidden">
        <Image
          src={project.bgImage}
          alt={project.name}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className={`p-6 ${isDarkMode ? "bg-gray-800" : "bg-gray-100"} ${isDarkMode ? "text-white" : "text-gray-900"}`}>
        <h2 className={`text-2xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-black"}`}>{project.name}</h2>
        <p className={`mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>{project.description}</p>
        <Link href={`/projects/${project.slug}`}>
          <p className="inline-block px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors">
            View Case Study
          </p>
        </Link>
      </div>
    </motion.div>
  );
}