"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const nrecom = {
  id: 8,
  slug: "nrecom",
  name: "NRECOM",
  description: "Renewable energy solutions.",
  category: "Agric",
  bgImage: "/assets/project-renewable.jpg",
  caseStudy: {
    challenges: "High energy demands and environmental concerns required sustainable action.",
    solutions: "We implemented green technologies and sustainable energy projects.",
    outcomes: "Reduced carbon footprint and improved energy efficiency.",
  },
};

export default function Page() {
  if (!nrecom) {
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
            {nrecom.name}
          </h1>

          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden mb-8">
            <Image
              src={nrecom.bgImage}
              alt={nrecom.name}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
              priority
            />
          </div>

          <p className="text-lg md:text-xl mb-4 text-gray-700">{nrecom.description}</p>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">Project Details</h2>
            <p className="text-lg leading-relaxed text-gray-700">{nrecom.caseStudy.challenges}</p>
            <p className="text-lg leading-relaxed text-gray-700">{nrecom.caseStudy.solutions}</p>
            <p className="text-lg leading-relaxed text-gray-700">{nrecom.caseStudy.outcomes}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}