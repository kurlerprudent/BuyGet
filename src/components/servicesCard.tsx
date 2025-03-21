"use client";

import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import Image from "next/image";

type Service = {
  id: number;
  slug: string;
  title: string;
  description: string;
  bgImage: string;
  icon: React.ComponentType<{ className?: string }>;
};

interface ServiceCardProps {
  service: {
    id: number;
    title: string;
    description: string;
    bgImage: string;
    slug: string;
    icon: React.ForwardRefExoticComponent<
      Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
        title?: string | undefined;
        titleId?: string | undefined;
      }
    >;
    details: string;
  };
  isDarkMode: boolean;
}

const ServiceCard = ({ service, isDarkMode }: ServiceCardProps) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl shadow-2xl group h-[400px] cursor-pointer border border-white/10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.03 }}
    >
      {/* Optimized Image with Static Loading */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.4 }}
      >
        <Image
          src={service.bgImage}
          alt={service.title}
          fill
          priority
          loading="eager"
          quality={80}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          style={{
            transform: "translateZ(0)", // Force hardware acceleration
            backfaceVisibility: "hidden", // Prevent flickering
          }}
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 ${
          isDarkMode
            ? "bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"
            : "bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"
        }`}
      />

      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-end p-8">
        <div
          className={`backdrop-blur-sm ${
            isDarkMode ? "bg-gray-900/30" : "bg-gray-900/30"
          } p-6 rounded-xl space-y-4`}
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/10">
            <service.icon className="w-8 h-8 text-pink-400" />
          </div>
          <h2 className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-white"}`}>
            {service.title}
          </h2>
          <p
            className={`text-gray-300 text-lg leading-relaxed ${
              isDarkMode ? "text-gray-300" : "text-gray-300"
            }`}
          >
            {service.description}
          </p>
          <motion.div
            className="inline-flex items-center gap-2 text-white/80 hover:text-pink-400 transition-colors"
            whileHover={{ x: 5 }}
          >
            <Link href={`/services/${service.slug}`} legacyBehavior>
              <a className="inline-flex items-center gap-2">
                <span>Explore Service</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;