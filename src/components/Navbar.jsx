import React from 'react';
import { MatrixGridIcon } from './CustomIcons';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border-theme"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="bg-accent text-white p-2 rounded-lg">
            <MatrixGridIcon className="w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight text-text-primary">
            ScannTek <span className="text-text-secondary font-medium">DigiMenu</span>
          </span>
        </div>

        {/* Center: Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">Features</a>
          <a href="#products" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">Products</a>
          <a href="#previews" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">Live Previews</a>
        </nav>

        {/* Right: CTA */}
        <div className="flex items-center">
          <button className="hidden md:block px-6 py-2.5 bg-accent hover:bg-accent-hover active:bg-accent-active text-white text-sm font-medium rounded-xl shadow-[var(--shadow-btn)] transition-all hover:-translate-y-0.5">
            Request Free Setup
          </button>
          
          {/* Mobile Menu Button placeholder */}
          <button className="md:hidden p-2 text-text-primary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
