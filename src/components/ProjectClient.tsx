"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";

interface ProjectClientProps {
  project: Project;
}

export default function ProjectClient({ project }: ProjectClientProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {project.name}
          </h1>

          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden mb-8">
            <Image
              src={project.bgImage}
              alt={project.name}
              fill
              className="rounded-lg object-cover"
              priority
            />
          </div>

          <div className="space-y-8">
            <div className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800">
              <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {project.description}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800">
                <h3 className="text-xl font-semibold mb-3 text-pink-400">
                  Challenges
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {project.caseStudy.challenges}
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800">
                <h3 className="text-xl font-semibold mb-3 text-pink-400">
                  Solutions
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {project.caseStudy.solutions}
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800">
                <h3 className="text-xl font-semibold mb-3 text-pink-400">
                  Outcomes
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
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