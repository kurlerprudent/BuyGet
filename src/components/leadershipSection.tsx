"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Sample Data
const executives = [
  {
    id: 1,
    name: "Mr. Joshua Elson",
    title: "Founder and Executive Director",
    description:
      "Provides overall leadership, strategic vision, and corporate governance.",
    image: "/assets/josh.jpeg",
  },
  {
    id: 2,
    name: "Mr. Christian",
    title: "Chief Technology Officer (CTO)",
    description:
      "Leads technological innovations, AI development, and cybersecurity frameworks.",
    image: "/assets/christiain.jpeg",
  },
];

const board = [
  {
    id: 1,
    name: "Mr Dei",
    title: "education UK",
    description: "Results-driven finance expert with 30+ years of experience, offering a unique blend of technical expertise, business insight, and leadership prowess. A Chartered Accountant (ICAG) with an MBA in Finance, he boasts a versatile background in financial management, budgeting, and reporting, with notable stints at the Controller and Accountant General's Department and top auditing firms like Deloitte. He has also showcased exceptional leadership skills as Audit Committee Chairman for various MMDAs.",
    image: "/assets/avatar.png",
  },
  {
    id: 2,
    name: "Lt col incoom",
    title: "Clo of Northern command",
    description: "And operations",
    image: "/assets/hon.jpeg",
  },
  {
    id: 3,
    name: "Lt lawyer lawyer he",
    title: "lawyer and legal officer",
    description: "Provides legal advice and representation",
    image: "/assets/secetery.jpeg",
  },
  {
    id: 4,
    name: "Mr.Honu Christian",
    title: "non Executive Director",
    description: "Councillor",
    image: "/assets/honu.jpeg",
  },
];

// Updated Teams Array
const teams = [
  {
    id: 1,
    name: "Customer Support",
    description: "Provides customer assistance and troubleshooting.",
    email: "support@buyget.co",
  },
  {
    id: 2,
    name: "Media",
    description: "Handles public relations, marketing, and communications.",
    email: "media@buyget.co",
  },
  {
    id: 3,
    name: "Research",
    description: "Conducts market and technology research to drive innovation.",
    email: "research@buyget.co",
  },
  {
    id: 4,
    name: "Developers",
    description: "Builds and maintains our cutting-edge technological solutions.",
    email: "dev@buyget.co",
  },
];

// FlipCard Component for Leadership Cards
function FlipCard({
  image,
  name,
  title,
  description,
}: {
  image: string;
  name: string;
  title: string;
  description?: string;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="h-96 perspective-1000" style={{ perspective: "1000px" }}>
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full backface-hidden rounded-xl shadow-lg border border-gray-300 bg-white/50 backdrop-blur-md overflow-hidden"
          style={{ WebkitBackfaceVisibility: "hidden", backfaceVisibility: "hidden" }}
        >
          <div className="relative w-full h-full">
            <Image src={image} alt={name} fill className="object-cover" />
            {/* Name & Title at top-left */}
            <div className="absolute top-2 left-2 bg-black/50 text-white p-2 rounded-md">
              <h4 className="text-sm font-bold">{name}</h4>
              <p className="text-xs">{title}</p>
            </div>
            {/* Click to flip at bottom */}
            <button
              onClick={() => setIsFlipped(true)}
              className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-3 py-1 rounded-md"
            >
              Click to view profile
            </button>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full backface-hidden rounded-xl shadow-lg border border-gray-300 bg-white/50 backdrop-blur-md p-6 flex flex-col items-center justify-center"
          style={{
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <h4 className="text-lg font-semibold text-black mb-2">{name}</h4>
          <p className="text-sm text-gray-600 mb-3">{title}</p>
          {description && (
            <p className="text-sm text-gray-600 mb-4">{description}</p>
          )}
          <button
            onClick={() => setIsFlipped(false)}
            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded-md"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

// TeamCard Component for Operational & Technical Teams
function TeamCard({ team }: { team: { id: number; name: string; description: string; email: string } }) {
  const [showEmail, setShowEmail] = useState(false);
  return (
    <div className="rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-300 bg-white/50 backdrop-blur-md">
      <h4 className="text-xl font-bold text-black">{team.name}</h4>
      <p className="text-gray-600">{team.description}</p>
      <button
        onClick={() => setShowEmail(!showEmail)}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-md"
      >
         view email
      </button>
      {showEmail && (
        <div className="mt-2 text-sm text-gray-800">{team.email}</div>
      )}
    </div>
  );
}

export default function LeadershipSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200">
      {/* Fixed light background */}
      <div className="fixed inset-0" style={{ zIndex: -1, background: "white" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Leadership &amp; Organizational Structure
        </motion.h2>

        {/* Executive Caucus */}
        <div className="mb-16">
          <motion.h3
            className="text-3xl font-semibold text-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Executive Caucus
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-6">
            {executives.map((exec) => (
              <motion.div
                key={exec.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <FlipCard
                  image={exec.image}
                  name={exec.name}
                  title={exec.title}
                  description={exec.description}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Board Section */}
        <div className="mb-16">
          <motion.h3
            className="text-3xl font-semibold text-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Board
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:px-6">
            {board.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <FlipCard
                  image={member.image}
                  name={member.name}
                  title={member.title}
                  description={member.description}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Operational & Technical Teams */}
        <div className="mb-16">
          <motion.h3
            className="text-3xl font-semibold text-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Operational &amp; Technical Teams
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teams.map((team) => (
              <motion.div
                key={team.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <TeamCard team={team} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
