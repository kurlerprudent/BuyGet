"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const softica = {
  id: 2,
  slug: "softica",
  name: "Softica",
  description: "Enterprise software development and solutions.",
  category: "Web",
  bgImage: "/assets/softica.jpg",
  caseStudy: {
    challenges: "Legacy systems and complex business requirements slowed down operations.",
    solutions: "We developed custom enterprise applications using modern frameworks.",
    outcomes: "Boosted efficiency and reduced operating costs for the organization.",
  },
};

export default function Page() {
  if (!softica) {
    return (
      <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center">
        <p className="text-xl text-black">Project not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
            {softica.name}
          </h1>

          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden mb-8">
            <Image
              src={softica.bgImage}
              alt={softica.name}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
              priority
            />
          </div>

          <p className="text-lg md:text-xl mb-4 text-gray-700">{softica.description}</p>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Project Details</h2>
            <p className="text-lg leading-relaxed text-gray-700">{softica.caseStudy.challenges}</p>
            <p className="text-lg leading-relaxed text-gray-700">{softica.caseStudy.solutions}</p>
            <p className="text-lg leading-relaxed text-gray-700">{softica.caseStudy.outcomes}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}