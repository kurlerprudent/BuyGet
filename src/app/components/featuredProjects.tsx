"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const projectsPreview = [
  {
    title: "SHSWEB",
    description: "Develops technological solutions for senior high schools.",
    category: "Technology and Software Solutions",
  },
  {
    title: "SOFTICA",
    description: "Software development and enterprise solutions.",
    category: "Technology and Software Solutions",
  },
  {
    title: "INOVIC",
    description: "AI & robotics research and development.",
    category: "Technology and Software Solutions",
  },
  {
    title: "CTECH",
    description: "Cybersecurity solutions & digital identity protection.",
    category: "Technology and Software Solutions",
  },
  {
    title: "ITECTONA",
    description: "Security & military engineering.",
    category: "Engineering, Aerospace, and Security",
  },
  {
    title: "ZAPPY EON",
    description: "Aerospace & electrical engineering (drones, electric vehicles, aviation systems).",
    category: "Engineering, Aerospace, and Security",
  },
  {
    title: "UNISOFT",
    description: "Industrial, agricultural, and construction machinery.",
    category: "Engineering, Aerospace, and Security",
  },
  {
    title: "TEKSOL",
    description: "Consumer electronics and smart devices.",
    category: "Consumer Electronics & Renewable Energy",
  },
  {
    title: "NRECOM",
    description: "Renewable energy (solar, wind, hydro solutions).",
    category: "Consumer Electronics & Renewable Energy",
  },
];

const ProjectsPreview = () => {
  // Only display the first four projects.
  const displayedProjects = projectsPreview.slice(0, 4);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Our Projects
        </h2>
        <motion.div
          className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {displayedProjects.map((project, index) => (
            <Link href="/projects" key={index} passHref>
              <motion.p
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 shadow-lg transition transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl cursor-pointer"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <span className="text-sm text-gray-400 uppercase tracking-wide">
                  {project.category}
                </span>
              </motion.p>
            </Link>
          ))}
        </motion.div>
        <div className="mt-12 flex justify-center">
          <Link href="/projects" passHref>
            <p className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-full shadow-xl transition transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl">
              View All Projects
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
