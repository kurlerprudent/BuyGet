"use client"

import Head from "next/head";
import { services } from "@/data/services";
import ServiceCard from "./servicesCard";
import { useEffect, useState } from "react";

export default function ServicesIndex() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    };

    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Explore Our Services | My Company</title>
        <meta
          name="description"
          content="Discover our diverse range of services designed to deliver innovative solutions."
        />
      </Head>
      <div
        className={`min-h-screen ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        } py-20 px-4`}
      >
        <h1
          className={`text-5xl md:text-7xl font-bold text-center mb-10 ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          Our Services
        </h1>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} isDarkMode={isDarkMode} />
          ))}
        </div>
      </div>
    </>
  );
}