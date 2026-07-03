import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", id: "features" },
    { name: "How It Works", id: "how-it-works" },
    { name: "Previews", id: "preview-section" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-6 left-0 right-0 z-50 transition-all duration-300 mx-auto px-4 sm:px-6 w-full max-w-[95%] lg:max-w-[1200px]`}
    >
      <div className={`h-16 md:h-20 bg-surface rounded-[16px] flex items-center justify-between px-6 lg:px-8 border border-border-theme transition-all duration-300 ${isScrolled ? 'shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]' : 'shadow-sm'}`}>
        
        {/* Left: Logo */}
        <div className="flex items-center cursor-pointer">
          <Image 
            src="/olabis.png" 
            alt="Olabis Logo" 
            width={120} 
            height={40} 
            className="w-auto h-7 md:h-8 object-contain"
          />
        </div>

        {/* Center: Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={`#${link.id}`} 
              className="text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: CTAs (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="px-5 py-2.5 text-sm font-bold text-text-primary border border-border-theme hover:bg-surface-secondary rounded-xl transition-colors">
            Login
          </button>
          <button className="px-5 py-2.5 bg-accent hover:bg-accent-hover active:bg-accent-active text-white text-sm font-bold rounded-xl shadow-[var(--shadow-btn)] transition-all hover:-translate-y-0.5">
            Book Demo
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 -mr-2 text-text-primary focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-5 flex flex-col justify-between items-center overflow-hidden">
            <span className={`w-full h-[2px] bg-current transform transition-all duration-300 origin-left ${isMobileMenuOpen ? 'rotate-45 translate-x-px' : ''}`} />
            <span className={`w-full h-[2px] bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 translate-x-4' : ''}`} />
            <span className={`w-full h-[2px] bg-current transform transition-all duration-300 origin-left ${isMobileMenuOpen ? '-rotate-45 translate-x-px' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-24 left-4 right-4 bg-surface rounded-[24px] shadow-2xl border border-border-theme p-6 lg:hidden overflow-hidden"
          >
            <nav className="flex flex-col gap-4 mb-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={`#${link.id}`} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-semibold text-text-primary hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-3">
              <button className="w-full py-4 text-center font-bold text-text-primary border border-border-theme hover:bg-surface-secondary rounded-xl transition-colors">
                Login
              </button>
              <button className="w-full py-4 text-center bg-accent hover:bg-accent-hover active:bg-accent-active text-white font-bold rounded-xl shadow-[var(--shadow-btn)] transition-all">
                Book Demo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
