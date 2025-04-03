"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const projectsPreview = [
  {
    title: "SHSWEB",
    description: "Develops technological solutions for schools.",
    category: "Technology and Software Solutions",
    bgImage: "/assets/shsweb.jpeg",
  },
  {
    title: "SOFTICA",
    description: "Software development and enterprise solutions.",
    category: "Technology and Software Solutions",
    bgImage: "/assets/softica.jpg",
  },
  {
    title: "INOVIC",
    description: "AI & robotics research and development.",
    category: "Technology and Software Solutions",
    bgImage: "/assets/inovic.jpg",
  },
  {
    title: "CTECH",
    description: "Cybersecurity solutions & digital identity protection.",
    category: "Technology and Software Solutions",
    bgImage: "/assets/ctech.jpg",
  },
];

const ProjectsPreview = () => {
  const displayedProjects = projectsPreview.slice(0, 4);

  return (
    <section className="py-5 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Our Inventions
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
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image
                    src={project.bgImage}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Changed the gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent" />
                </div>
                <div className="p-6 bg-gray-100 text-gray-900">
                  <h3 className="text-2xl font-bold mb-2 text-black">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-gray-700">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
        <div className="mt-12 flex justify-center">
          <Link href="/projects" passHref>
            <p className="px-8 py-3 font-semibold rounded-full shadow-xl transition transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white">
              View All Inventions
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;