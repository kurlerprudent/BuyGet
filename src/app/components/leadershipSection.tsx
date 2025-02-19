"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Updated sample data from the document

const executives = [
  {
    id: 1,
    name: "Mr. Honu",
    title: "Chief Executive Officer (CEO)",
    description:
      "Provides overall leadership, strategic vision, and corporate governance. Leads innovation and global expansion. Oversees daily operations, resource management, and business efficiency. Ensures cross-departmental collaboration.",
    image: "/leaders/ceo.jpg",
  },
  {
    id: 2,
    name: "Mr. Christian",
    title: "Chief Technology Officer (CTO)",
    description:
      "Leads technological innovations, AI development, and cybersecurity frameworks.",
    image: "/leaders/cto.jpg",
  },
  {
    id: 3,
    name: "Mr. Asem",
    title: "Chief Financial Officer and Legal (CF/LO) Officer",
    description:
      "Manages financial planning, investment strategies, and fiscal sustainability. Ensures revenue optimization.",
    image: "/leaders/cfo.jpg",
  },
  {
    id: 4,
    name: "Miss Shine",
    title: "Chief Marketing Officer (CMO)",
    description:
      "Directs marketing, branding, and business growth strategies. Expands Buyget’s market presence and strategic partnerships.",
    image: "/leaders/cmo.jpg",
  },
];

const directors = [
  {
    id: 1,
    name: "Major Adams",
    title: "Director (Executive), SHSWEB",
    description:
      "Oversees SHSWEB operations, school partnerships, and AI-powered biometric systems.",
  },
  {
    id: 2,
    name: "[Vacant]",
    title: "Director (Executive), BUYGET NETWORK",
    description:
      "Manages network security and all partner development.",
  },
  {
    id: 3,
    name: "[Vacant]",
    title: "Director (Executive), INOVIC",
    description:
      "Leads AI development, automation, and robotics research.",
  },
  {
    id: 4,
    name: "[Vacant]",
    title: "Director (Executive), SOFTICA",
    description:
      "Oversees enterprise software solutions and application development.",
  },
  {
    id: 5,
    name: "[Vacant]",
    title: "Director (Executive), ITECTONA",
    description: "Security & Military Engineering.",
  },
  {
    id: 6,
    name: "[Vacant]",
    title: "Director (Executive), UNISOFT",
    description:
      "Oversees industrial, agricultural, and construction machinery operations.",
  },
  {
    id: 7,
    name: "[Vacant]",
    title: "Director (Executive), TEKSOL",
    description:
      "Leads consumer electronics and smart devices initiatives.",
  },
  {
    id: 8,
    name: "[Vacant]",
    title: "Director (Executive), CTECH",
    description:
      "Creates cybersecurity solutions and digital identity protection measures.",
  },
  {
    id: 9,
    name: "[Vacant]",
    title: "Director (Executive), NRECOM",
    description:
      "Leads research and deployment of renewable energy solutions.",
  },
  {
    id: 10,
    name: "[Vacant]",
    title: "Director (Executive), ZAPPY EON",
    description:
      "Manages aerospace, electric vehicle production, and aviation projects.",
  },
];

const teams = [
  {
    id: 1,
    name: "Development & Engineering Team",
    description:
      "Supports technological innovations and product development across divisions.",
  },
  {
    id: 2,
    name: "Business Development, Finance & Legal Team",
    description:
      "Handles business development, financial planning, and legal compliance.",
  },
  {
    id: 3,
    name: "Customer Support & Training Team",
    description:
      "Provides customer support, training, and ensures high satisfaction levels.",
  },
  {
    id: 4,
    name: "Corporate Governance & Strategic Vision",
    description:
      "Ensures transparency and aligns long-term strategic growth with corporate governance.",
  },
];

const LeadershipSection = () => {
  return (
    <section className="relative py-20">
      {/* Fixed dark background */}
      <div className="fixed inset-0 bg-black" style={{ zIndex: -1 }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
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
            className="text-3xl font-semibold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Executive Caucus
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {executives.map((exec) => (
              <motion.div
                key={exec.id}
                className="bg-white/10 rounded-xl p-6 shadow-sm hover:shadow-lg border border-white/20 backdrop-blur-md text-center transition-all"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border border-white/30">
                  <Image
                    src={exec.image}
                    alt={exec.name}
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-white">{exec.name}</h4>
                <p className="text-sm text-gray-300 mb-2">{exec.title}</p>
                <p className="text-gray-300">{exec.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Directors & Senior Management */}
        <div className="mb-16">
          <motion.h3
            className="text-3xl font-semibold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Directors &amp; Senior Management
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {directors.map((director) => (
              <motion.div
                key={director.id}
                className="bg-white/10 rounded-xl p-6 shadow-sm hover:shadow-lg border border-white/20 backdrop-blur-md transition-all"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h4 className="text-xl font-bold text-white">{director.name}</h4>
                <p className="text-sm text-gray-300 mb-2">{director.title}</p>
                <p className="text-gray-300">{director.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Operational & Technical Teams */}
        <div className="mb-16">
          <motion.h3
            className="text-3xl font-semibold text-white mb-6"
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
                className="bg-white/10 rounded-xl p-6 shadow-sm hover:shadow-lg border border-white/20 backdrop-blur-md transition-all"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h4 className="text-xl font-bold text-white">{team.name}</h4>
                <p className="text-gray-300">{team.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Governance */}
        <div>
          <motion.h3
            className="text-3xl font-semibold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Governance
          </motion.h3>
          <motion.div
            className="bg-white/10 rounded-xl shadow-sm p-6 border border-white/20 backdrop-blur-md transition-all"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-300">
              Buyget ICT Solutions is governed by a Board of Directors that ensures transparency, accountability, and long-term strategic growth for all divisions. Their oversight plays a pivotal role in shaping our vision and safeguarding stakeholder interests.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
