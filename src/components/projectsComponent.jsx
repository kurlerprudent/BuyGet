"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Project, projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <>
      <div>
        <title>Our Solutions</title>
        <meta
          name="description"
          content="Discover our latest projects showcasing innovative solutions."
        />
      </div>
      <div className="min-h-screen bg-white py-20 px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-10 text-black">
          Our Solutions
        </h1>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-80 w-full">
        <Image
          src={project.bgImage}
          alt={project.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{project.name}</h2>
            <p className="text-gray-200">{project.description}</p>
          </div>
          <Link href={`/projects/${project.slug}`} className="self-start mt-4">
            <span className="inline-block px-4 py-2 bg-white text-black rounded-full hover:bg-gray-100 transition-colors">
              More details
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}