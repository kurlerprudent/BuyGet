"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, Linkedin, Instagram } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  const pathname = usePathname();
  
  if (pathname?.includes('form')) {
    return null;
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    { name: 'Inventions', href: '/projects' },
    { name: 'About Us', href: '/about' },
    { name: 'News & Events', href: '/news-events' },
  ];

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };

    document.body.classList.toggle('overflow-hidden', isMenuOpen);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.body.classList.remove('overflow-hidden');
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  const mobileMenuVariants = {
    open: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    closed: { x: '-100%', transition: { duration: 0.3 } },
  };

  const linkVariants = {
    open: { opacity: 1, x: 0, transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
    closed: { opacity: 0, x: -20 },
  };

  const activeLinkAnimation = {
    scale: [1, 1.1, 1],
    transition: { duration: 0.3 },
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setIsMenuOpen(false);
  };

  return (
    <motion.nav className="sticky top-0 w-full z-50 bg-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" passHref>
          <motion.div
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
          >
            <motion.div whileHover={{ rotate: 15 }}>
              <Image
                src='/assets/lg6.png'
                alt='BuyGet Logo'
                width={48}
                height={48}
                className="rounded-lg shadow-sm hover:shadow-md transition-shadow"
              />
            </motion.div>
            <span className="text-2xl font-bold tracking-tight relative">
              <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent group-hover:bg-gradient-to-br transition-all duration-500">
                BuyGet
              </span>
            </span>
          </motion.div>   
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 flex-grow justify-center">
          {links.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="relative group"
              whileHover={{ y: -2 }}
              animate={pathname === link.href ? activeLinkAnimation : {}}
            >
              <span className={`text-xl font-medium ${pathname === link.href ? 'text-pink-500' : 'text-gray-900'}`}>
                {link.name}
              </span>
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-6">
          <motion.a 
            href="/contact" 
            whileHover={{ scale: 1.1 }} 
            className="text-gray-900 transition-all duration-300 ease-in hover:text-[#34A853]"
            title="Call us"
          >
            <Phone className="w-5 h-5" />
          </motion.a>
          <motion.a 
            href="mailto:info@example.com" 
            whileHover={{ scale: 1.1 }} 
            className="text-gray-900 transition-all duration-300 ease-in hover:text-[#D93025]"
            title="Email us"
          >
            <Mail className="w-5 h-5" />
          </motion.a>
          <motion.a 
            href="https://wa.me/message/73UEIPABQIORO1" 
            whileHover={{ scale: 1.1 }} 
            className="text-gray-900 transition-all duration-300 ease-in hover:text-[#25D366]"
            title="WhatsApp us"
          >
            <FaWhatsapp className="w-5 h-5" />
          </motion.a>
          <motion.a 
            href="https://www.instagram.com/buyget_ict_solutions/profilecard/?igsh=MTA2bG94bjZzNHExMA==" 
            whileHover={{ scale: 1.1 }} 
            className="text-gray-900 transition-all duration-300 ease-in hover:text-[#E1306C]"
            title="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/buyget-ict-solutions-36340435a" 
            whileHover={{ scale: 1.1 }} 
            className="text-gray-900 transition-all duration-300 ease-in hover:text-[#0077B5]"
            title="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <motion.button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.1 }}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? (
            <X size={24} className="text-gray-900" />
          ) : (
            <Menu size={24} className="text-gray-900" />
          )}
        </motion.button>
      </div>
      

{/* Mobile Menu */}
<AnimatePresence>
  {isMenuOpen && (
    <motion.div
      className="md:hidden fixed inset-0 bg-gradient-to-br from-pink-500/95 via-pink-40/80 to-orange-300/95 backdrop-blur-lg"
      initial="closed"
      animate="open"
      exit="closed"
      variants={mobileMenuVariants}
      onClick={handleBackdropClick}
    >
      <div className="relative container mx-auto px-4 py-8 h-full flex flex-col items-center">
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 text-gray-700 hover:text-pink-600 transition-colors"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        <motion.div
          variants={linkVariants}
          className="flex flex-col space-y-6 w-full items-center mb-8"
        >
          {links.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="relative group"
              variants={linkVariants}
              onClick={() => setIsMenuOpen(false)}
              whileHover={{ x: 10 }}
            > 
              <span className={`text-2xl font-semibold ${pathname === link.href ? 'text-pink-600' : 'text-gray-700'}`}>
                {link.name}
              </span>
              <span className="absolute left-0 bottom-0 h-1 w-0 bg-gradient-to-r from-pink-400 to-orange-300 group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </motion.div>

        {/* Mobile Social Icons */}
        <div className="flex items-center space-x-6 mt-auto">
          <motion.a 
            href="/contact" 
            whileHover={{ scale: 1.1 }} 
            className="text-gray-700 transition-all duration-300 ease-in hover:text-pink-600"
            title="Call us"
          >
            <Phone className="w-6 h-6" />
          </motion.a>
          <motion.a 
            href="mailto:info@example.com" 
            whileHover={{ scale: 1.1 }} 
            className="text-gray-700 transition-all duration-300 ease-in hover:text-pink-600"
            title="Email us"
          >
            <Mail className="w-6 h-6" />
          </motion.a>
          <motion.a 
            href="https://wa.me/message/73UEIPABQIORO1" 
            whileHover={{ scale: 1.1 }} 
            className="text-gray-700 transition-all duration-300 ease-in hover:text-pink-600"
            title="WhatsApp us"
          >
            <FaWhatsapp className="w-6 h-6" />
          </motion.a>
          <motion.a 
            href="https://www.instagram.com/buyget_ict_solutions/profilecard/?igsh=MTA2bG94bjZzNHExMA==" 
            whileHover={{ scale: 1.1 }} 
            className="text-gray-700 transition-all duration-300 ease-in hover:text-pink-600"
            title="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/buyget-ict-solutions-36340435a" 
            whileHover={{ scale: 1.1 }} 
            className="text-gray-700 transition-all duration-300 ease-in hover:text-pink-600"
            title="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </motion.nav>
  );
}