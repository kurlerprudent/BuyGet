"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, animate } from 'framer-motion';
import { Star, Play, Twitter, Linkedin, Check, ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useMotionValue } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO at TechCorp",
    text: "The platform transformed our workflow completely. Our team's productivity increased by 200% within the first month of implementation.",
    rating: 5,
    avatar: "/avatars/sarah.jpg",
    video: "/testimonials/sarah.mp4",
    companyLogo: "/logos/techcorp.svg",
    socialProof: ["twitter-verified", "linkedin-recommendation"]
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Lead at StartX",
    text: "Exceptional customer support and cutting-edge features. We've reduced operational costs by 40% while improving service quality.",
    rating: 4.5,
    avatar: "/avatars/michael.jpg",
    companyLogo: "/logos/startx.png",
    socialProof: ["top-reviewer"]
  }
];

const AnimatedStars = ({ rating }: { rating: number }) => {
  const stars = Array.from({ length: 5 }, (_, i) => {
    const starProgress = useMotionValue(0);

    React.useEffect(() => {
      const fill = rating - i > 0 ? Math.min(rating - i, 1) : 0;
      animate(starProgress, fill * 100, {
        duration: 0.5,
        delay: i * 0.1
      });
    }, [rating, i, starProgress]);

    return (
      <div className="relative" key={i}>
        <Star className="w-6 h-6 text-slate-600 absolute" />
        <motion.div
          className="absolute overflow-hidden"
          style={{ width: starProgress }}
        >
          <Star className="w-6 h-6 text-yellow-400" />
        </motion.div>
      </div>
    );
  });
  return <div className="flex gap-1">{stars}</div>;
};

export function TestimonialsSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    // Auto-rotate every 8 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const testimonial = testimonials[activeIndex];

    return (
        <section className="py-24 bg-slate-900 relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <motion.h2 
                        className="text-4xl font-bold text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Trusted by Industry Leaders
                    </motion.h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Discover why thousands of teams rely on our solutions to drive their success.
                    </p>
                </div>

                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6 }}
                            className="relative bg-slate-800/70 rounded-2xl p-8 shadow-2xl overflow-hidden"
                        >
                            {/* Company Watermark */}
                            <div className="absolute inset-0 opacity-10 mix-blend-overlay">
                                <Image
                                    src={testimonial.companyLogo}
                                    alt=""
                                    width={200}
                                    height={200}
                                    className="object-contain w-full h-full blur-sm"
                                />
                            </div>

                            {/* Social Proof Badges */}
                            <div className="absolute top-4 right-4 flex gap-2">
                                {testimonial.socialProof?.includes("twitter-verified") && (
                                    <motion.div
                                        className="flex items-center gap-1 px-3 py-1 bg-blue-500/20 rounded-full text-blue-400"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                    >
                                        <Twitter className="w-4 h-4" />
                                        <span className="text-xs">Verified</span>
                                    </motion.div>
                                )}
                                {testimonial.socialProof?.includes("top-reviewer") && (
                                    <motion.div
                                        className="flex items-center gap-1 px-3 py-1 bg-purple-500/20 rounded-full text-purple-400"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1, transition: { delay: 0.2 } }}
                                    >
                                        <Star className="w-4 h-4" />
                                        <span className="text-xs">Top Reviewer</span>
                                    </motion.div>
                                )}
                            </div>

                            {/* Avatar with Hover Effect */}
                            <motion.div
                                className="relative w-20 h-20 mx-auto mb-6 cursor-pointer group"
                                whileHover={{ rotate: 5, scale: 1.05 }}
                                onClick={() => testimonial.video && setIsVideoPlaying(true)}
                            >
                                <Image
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    width={80}
                                    height={80}
                                    className="rounded-full object-cover border-2 border-primary/50"
                                />
                                {testimonial.video && (
                                    <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Play className="w-8 h-8 text-white" />
                                    </div>
                                )}
                            </motion.div>

                            {/* Testimonial Content */}
                            <div className="relative z-10">
                                <AnimatedStars rating={testimonial.rating} />
                                <motion.blockquote
                                    className="mt-6 text-slate-300 italic leading-relaxed"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    "{testimonial.text}"
                                </motion.blockquote>

                                <motion.div
                                    className="mt-8 pt-6 border-t border-slate-700"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                                    <p className="text-slate-400 text-sm">{testimonial.role}</p>
                                    <div className="mt-3 flex items-center gap-2">
                                        <Check className="w-4 h-4 text-green-400" />
                                        <span className="text-xs bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                                            Verified Customer
                                        </span>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition"
                    >
                        <ArrowLeft className="w-6 h-6 text-white" />
                    </button>
                    <button
                        onClick={nextTestimonial}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition"
                    >
                        <ArrowRight className="w-6 h-6 text-white" />
                    </button>
                </div>

                {/* Dot Navigation */}
                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`w-3 h-3 rounded-full ${i === activeIndex ? 'bg-primary' : 'bg-slate-600'}`}
                        ></button>
                    ))}
                </div>
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {isVideoPlaying && (
                    <motion.div
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsVideoPlaying(false)}
                    >
                        <motion.video
                            controls
                            autoPlay
                            muted
                            className="rounded-lg shadow-2xl max-w-4xl w-full"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                        >
                            <source src={testimonial.video} type="video/mp4" />
                        </motion.video>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
// function useMotionValue(arg0: number) {
//     throw new Error('Function not implemented.');
// }

