"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ctech = {
  id: 4,
  slug: "ctech",
  name: "Cybersecurity",
  description: "Cybersecurity and digital identity protection.",
  category: "Cybersecurity",
  bgImage: "/assets/ctech.jpg",
  caseStudy: {
    challenges: "Rising digital threats and identity theft risks required robust protection.",
    solutions: "We implemented strong security protocols and identity verification systems.",
    outcomes: "Significantly reduced breaches and secured digital assets.",
  },
};

export default function Page() {
  if (!ctech) {
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
            {ctech.name}
          </h1>

          <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden mb-8 shadow-2xl"> {/* Enhanced image container */}
            <Image
              src={ctech.bgImage}
              alt={ctech.name}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-2xl transition-transform duration-500 hover:scale-105" // Added transition and hover effect
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 rounded-2xl"></div> {/* Added subtle overlay */}
          </div>

          <p className="text-lg md:text-xl mb-4 text-gray-700">{ctech.description}</p>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Project Details</h2>
            <p className="text-lg leading-relaxed text-gray-700">{ctech.caseStudy.challenges}</p>
            <p className="text-lg leading-relaxed text-gray-700">{ctech.caseStudy.solutions}</p>
            <p className="text-lg leading-relaxed text-gray-700">{ctech.caseStudy.outcomes}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}