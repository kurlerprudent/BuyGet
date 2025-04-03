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
      "Founder and Visionary of Buyget ICT Solutions, passionate about Africa’s technological advancement and development. He holds a BSc in Information Technology from the University of Ghana, currently pursuing his Master’s degree in Cybersecurity and Forensics. He is a certified Pro Backend Developer from ALX, he also runs multiple agribusiness firms. Previously, he served as a Public Relations Officer with the Ghana Armed Forces Northern Command during his national service.",
    image: "/assets/josh.jpeg",
  },
  {
    id: 2,
    name: "Mr. Christian",
    title: "Co-founder and Managing Director",
    description:
      "Co-founder and Managing Director of Buyget ICT Solutions. A software engineer with over 5 years of experience in technology and business leadership. Holds a BSc in Computer Science from the University of Ghana and is currently pursuing his MSc in Software Engineering. He is a skilled full-stack developer with expertise. Previously, he worked as Lead Software Engineer at PMC where he led development teams and implemented enterprise solutions. Additionally, he co-founded QuiverTech Solutions.",
    image: "/assets/christiain.jpeg",
  },
];

const board = [
  {
    id: 1,
    name: "Mr Dei",
    title: "Financial Lead & Audit",
    description:
      "Results-driven finance expert with 30+ years of experience, offering a unique blend of technical expertise, business insight, and leadership prowess. A Chartered Accountant (ICAG) with an MBA in Finance, he boasts a versatile background in financial management, budgeting, and reporting, with notable stints at the Controller and Accountant General's Department and top auditing firms like Deloitte. He has also showcased exceptional leadership skills as Audit Committee Chairman for various MMDAs.",
    image: "/assets/avatar.png",
  },
  {
    id: 2,
    name: "Lt col incoom",
    title: "Board Lead & Operations",
    description:
      "A seasoned military leader with over 17 years of experience in leadership, logistics, and project management. He holds an MBA from Accra Business School and an MSc in Defence and International Politics from the Ghana Armed Forces Command and Staff College. Has served in key roles, including Deputy Director for Special Operations, Assistant Director for Land Operations, and Services Engineer at the 37 Military Hospital. With extensive experience in UN Peace Support Operations and mentoring over 20 junior leaders, he excels in strategic planning and operational execution. He currently serves as Deputy Logistics Officer in the Ghana Armed Forces.",
    image: "/assets/hon.jpeg",
  },
  {
    id: 3,
    name: "Lt lawyer lawyer he",
    title: "Legal Lead & Secretary",
    description: "Provides legal advice and representation",
    image: "/assets/secetery.jpeg",
  },
  {
    id: 4,
    name: "Mr. Honu Christian",
    title: "Non-Executive Director",
    description:
      "Experienced counsellor and visionary leader dedicated to fostering growth and development. He developed his leadership expertise through senior roles at Volta Aluminium Company Ghana and Spiro Ghana Limited. By combining his counselling knowledge with strategic leadership, he enables individuals and organizations to reach their full potential.",
    image: "/assets/honu.jpeg",
  },
];

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
            {/* Angled Overlay for Name & Title */} 
            <div
              className="absolute top-0 left-0 bg-black/50 text-white p-2"
              style={{ width: "200px", height: "80px", clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)" }}
              title={`${name} - ${title}`}
            >
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
         Click to view email
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
