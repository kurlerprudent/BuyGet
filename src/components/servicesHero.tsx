"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";

const ServiceHero: React.FC = () => {
  // Immediately set isMounted to true
  const [isMounted] = useState(true);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const [windowSize, setWindowSize] = useState({ width: 1000, height: 1000 });
  const animationFrame = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateWindowSize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
      updateWindowSize();
      const handleResize = () => updateWindowSize();
      const moveCursor = (e: MouseEvent) => {
        if (animationFrame.current === null) {
          animationFrame.current = requestAnimationFrame(() => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            animationFrame.current = null;
          });
        }
      };

      window.addEventListener("resize", handleResize);
      window.addEventListener("mousemove", moveCursor);
      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("mousemove", moveCursor);
        if (animationFrame.current) {
          cancelAnimationFrame(animationFrame.current);
        }
      };
    }
  }, [cursorX, cursorY]);

  // Parallax transforms
  const rotateX = useTransform(cursorY, [0, windowSize.height], [-5, 5]);
  const rotateY = useTransform(cursorX, [0, windowSize.width], [5, -5]);

  // FloatingParticle with precomputed values
  const FloatingParticle = ({ index }: { index: number }) => {
    const { initialX, initialY, animateX, animateY, duration, width, height } =
      React.useMemo(
        () => ({
          initialX: Math.random() * 100 - 50,
          initialY: Math.random() * 100 - 50,
          animateX: Math.random() * 200 - 100,
          animateY: Math.random() * 200 - 100,
          duration: Math.random() * 4 + 3,
          width: Math.random() * 40 + 20,
          height: Math.random() * 40 + 20,
        }),
        [index]
      );

    return (
      <motion.div
        className="absolute rounded-full bg-gradient-to-r from-pink-500/20 to-yellow-500/20"
        initial={{
          scale: 1,
          opacity: 0.5,
          x: initialX,
          y: initialY,
        }}
        animate={{
          scale: [1, 1, 1],
          opacity: [0.5, 0.5, 0.5],
          x: animateX,
          y: animateY,
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ width, height }}
      />
    );
  };

  return (
    <section className="relative h-screen overflow-hidden dark:bg-gray-900">
      {/* Background image without delay */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/services-hero.jpg')",
          rotateX: isMounted ? rotateX : 0,
          rotateY: isMounted ? rotateY : 0,
        }}
        animate={{ scale: 1 }} // no initial scale change
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-purple-900/60" />

      {/* Main content appears instantly */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-yellow-200 drop-shadow-2xl">
              Transformative Digital Solutions
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
            Discover innovative{" "}
            <span className="text-pink-300 font-semibold underline-offset-4 hover:underline cursor-default">
              solutions
            </span>{" "}
            and{" "}
            <span className="text-yellow-300 font-semibold underline-offset-4 hover:underline cursor-default">
              cutting-edge technology
            </span>{" "}
            that empower your business.
          </p>

          <div className="inline-block">
            <Link href="/contact" aria-label="Contact Us">
              <div className="inline-block bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white font-bold py-3 px-7 rounded-full shadow-2xl relative overflow-hidden">
                <span className="relative z-10 text-lg tracking-wide flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Get In Touch
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator appears instantly */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-6 h-10 border-2 border-white rounded-3xl flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-1 animate-bounce" />
        </div>
      </div>

      {/* Floating particles (optional, lightweight animation) */}
      {[...Array(12)].map((_, i) => (
        <FloatingParticle key={i} index={i} />
      ))}
    </section>
  );
};

export default ServiceHero;
