"use client";
import { motion, useInView } from "framer-motion";
import { Rocket, Leaf, Shield, Users, Star, Lightbulb } from "lucide-react";
import { useRef } from "react";

const OurStoryCoreValues = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const coreValues = [
    { icon: <Rocket />, title: "Innovation", text: "Pushing technological boundaries through creative solutions" },
    { icon: <Star />, title: "Excellence", text: "Delivering unmatched quality in every project" },
    { icon: <Shield />, title: "Integrity", text: "Building trust through transparency and honesty" },
    { icon: <Users />, title: "Collaboration", text: "Fostering teamwork and strategic partnerships" },
    { icon: <Leaf />, title: "Sustainability", text: "Committing to eco-friendly technological progress" },
    { icon: <Lightbulb />, title: "Vision", text: "Anticipating future tech trends and needs" },
  ];

  return (
    <section ref={ref} className="relative py-5 bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200">
      {/* Fixed, lighter background */}
      <div className="fixed inset-0" style={{ zIndex: -1, background: "white" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        
        {/* Mission & Vision Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-20 grid md:grid-cols-2 gap-8 rounded-2xl p-8 shadow-xl border border-gray-300 bg-white/50 backdrop-blur-lg"
        >
          <div className="space-y-6">
            <div className="bg-blue-500/10 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-black mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                Empower industries through innovative technology solutions that drive progress, efficiency, and sustainable growth.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-purple-500/10 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-black mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                Lead global digital transformation by pioneering advancements that redefine the future of technology across continents.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStoryCoreValues;
