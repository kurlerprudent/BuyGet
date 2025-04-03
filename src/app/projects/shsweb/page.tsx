"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const shsweb = {
  id: 1,
  slug: "shsweb",
  name: "SHSWEB",
  description: "Technological solutions for senior high schools.",
  category: "Web",
  bgImage: "/assets/shsweb.jpeg",
  caseStudy: {
    challenges: "Schools needed modern digital tools to support learning and communication.",
    solutions: "We built interactive web applications tailored for educational environments.",
    outcomes: "Improved engagement and streamlined communication between teachers and students.",
  },
};

export default function Page() {
  if (!shsweb) {
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
            {shsweb.name}
          </h1>

          <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden mb-8 shadow-xl border-4 border-gray-200"> {/* Enhanced image container */}
            <Image
              src={shsweb.bgImage}
              alt={shsweb.name}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-3xl transition-transform duration-500 hover:scale-105 brightness-95" // Added transition, hover effect, and brightness adjustment
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent rounded-3xl"></div> {/* Added gradient overlay */}
          </div>

          <p className="text-lg md:text-xl mb-4 text-gray-700">{shsweb.description}</p>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Project Details</h2>
            <p className="text-lg leading-relaxed text-gray-700">{shsweb.caseStudy.challenges}</p>
            <p className="text-lg leading-relaxed text-gray-700">{shsweb.caseStudy.solutions}</p>
            <p className="text-lg leading-relaxed text-gray-700">{shsweb.caseStudy.outcomes}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}