
"use client";

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';

const ProjectsSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);
  const services = [
    { id: 1, name: "SHSWEB", description: "Technological solutions for senior high schools.", bgImage: "/assets/shsweb.jpg" },
    { id: 2, name: "SOFTICA", description: "Enterprise software development and solutions.", bgImage: "/assets/softica.jpg" },
    { id: 3, name: "INOVIC", description: "AI & robotics research and development.", bgImage: "/assets/inovic.jpg" },
    { id: 4, name: "CTECH", description: "Cybersecurity and digital identity protection.", bgImage: "/assets/ctech.jpg" },
    { id: 5, name: "ITECTONA", description: "Security & military engineering.", bgImage: "/assets/itectona.jpg" },
    { id: 6, name: "UNISOFT", description: "Industrial, agricultural, and construction machinery.", bgImage: "/assets/unisoft.jpg" },
    { id: 7, name: "TEKSOL", description: "Consumer electronics and smart devices.", bgImage: "/assets/teksol.jpg" },
    { id: 8, name: "NRECOM", description: "Renewable energy solutions.", bgImage: "/assets/project-renewable.jpg" },
    { id: 9, name: "ZAPPY EON", description: "Aerospace and electrical engineering projects.", bgImage: "/assets/zappyeon.jpg" },
  ];

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="relative py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            Featured <span className="text-pink-400">Projects</span>
          </h2>
          <div className="flex gap-4">
            <button
              onClick={scrollPrev}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ArrowLeftIcon className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={scrollNext}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ArrowRightIcon className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {services.map((project) => (
              <div className="embla__slide flex-[0_0_80%] md:flex-[0_0_40%] lg:flex-[0_0_30%] px-4" key={project.id}>
                <motion.div 
                  className="relative h-[500px] rounded-3xl overflow-hidden group"
                  whileHover="hover"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"/>
                  <img
                    src={project.bgImage}
                    alt={project.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 p-8 z-20">
                    <motion.div
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                    >
                      <h3 className="text-3xl font-bold mb-2">{project.name}</h3>
                      <p className="text-gray-300">{project.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSlider;