"use client";

import { motion } from "framer-motion";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br  from-gray-900 to-gray-950 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Have a question or want to work together? Drop us a message below.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all">
              <MapPinIcon className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Our Office</h3>
              <p className="text-gray-300">Accra<br/>Ghana</p>
            </div>

            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all">
              <PhoneIcon className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+233 3578493<br/>Mon-Sat, 8am-5pm PST</p>
            </div>

            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all">
              <EnvelopeIcon className="w-8 h-8 text-pink-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">buygetsolutions@.com<br/>response within 24 hours</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full bg-white/5 rounded-lg px-4 py-3 text-white 
                    border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 
                    outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-white/5 rounded-lg px-4 py-3 text-white 
                    border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 
                    outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full bg-white/5 rounded-lg px-4 py-3 text-white 
                    border border-white/10 focus:border-pink-500 focus:ring-1 focus:ring-pink-500/30 
                    outline-none transition-all"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600/80 to-blue-500/80 text-white py-3 px-6 
                  rounded-lg font-semibold backdrop-blur-sm border border-white/10 hover:border-white/20 
                  hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 transition-all"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
          <div className="h-96 w-full flex items-center justify-center">
            <span className="text-gray-400">Map </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;