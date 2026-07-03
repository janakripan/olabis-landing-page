import React from 'react';
import { motion } from 'framer-motion';
import QRPanel from './showcase/QRPanel';
import TabletMockup from './showcase/TabletMockup';
import PhoneMockup from './showcase/PhoneMockup';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const Hero = () => {
  return (
    <section className="relative pt-32 lg:pt-48 pb-20 overflow-hidden bg-background">
      
      {/* Soft Radial Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Top Text Content */}
        <motion.div 
          className="flex flex-col items-center text-center w-full max-w-[800px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Announcement Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-8 p-1 pr-4 bg-gray-900 rounded-full cursor-pointer hover:bg-gray-800 transition-colors shadow-sm group">
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-bold rounded-full">NEW</span>
            <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">All-in-one Restaurant Management Platform</span>
            <svg className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </motion.div>
          
          {/* Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-[72px] font-extrabold text-text-primary tracking-tight leading-[1.05] mb-6 max-w-[760px] capitalize"
          >
            The Fastest Way To Create Your Digital Menu
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-lg lg:text-[19px] text-text-secondary mb-10 max-w-[620px] leading-relaxed"
          >
            Streamline your operations with our all-in-one solution. Seamlessly integrate QR Ordering, POS, Digital Menus, Kitchen Management, Analytics, Inventory, and Reservations into one powerful ecosystem.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-accent-hover active:bg-accent-active text-white font-bold rounded-xl shadow-[var(--shadow-btn)] transition-all hover:-translate-y-0.5">
              Request Demo
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-50 text-text-primary font-bold rounded-xl border border-gray-200 shadow-sm transition-all hover:-translate-y-0.5">
              Live Preview
            </button>
          </motion.div>
        </motion.div>

        {/* Large Product Showcase Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 w-full lg:max-w-[1200px] h-[500px] md:h-[600px] lg:h-[700px] bg-[#141517] rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] relative overflow-visible flex items-center justify-center border border-white/5"
        >
          {/* Right Panel: Pizza Background */}
          <div className="absolute top-0 right-0 bottom-0 w-1/2 overflow-hidden rounded-r-[24px] z-0 hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-[#141517] via-[#141517]/80 to-transparent z-10"></div>
            <img src="/hero-pizza.png" alt="Pizza Display" className="w-[120%] h-[120%] object-cover object-center opacity-90 -mr-20 -mt-10" />
          </div>

          {/* Left Panel: QR Menu Content */}
          <div className="absolute left-0 top-0 bottom-0 w-full lg:w-1/2 z-10 pt-12 lg:pt-16 pl-8 lg:pl-16 pb-32">
            <QRPanel />
          </div>

          {/* Center Devices Container */}
          <div className="absolute bottom-[-40px] lg:bottom-[-60px] left-1/2 -translate-x-1/2 w-[340px] lg:w-[420px] flex items-end justify-center z-20">
            
            {/* Tablet Mockup */}
            <motion.div 
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-20 w-[280px] lg:w-[360px]"
            >
              <TabletMockup />
            </motion.div>

            {/* Phone Mockup */}
            <motion.div 
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -right-4 lg:-right-10 bottom-[-10px] lg:bottom-[-20px] z-30 transform hover:-translate-y-2 transition-transform duration-500 hidden md:block"
            >
              <PhoneMockup />
            </motion.div>

          </div>

          {/* Mobile Fallback: Phone only (if tablet is hidden on very small screens) */}
          <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 z-30 md:hidden scale-90 origin-bottom">
            <PhoneMockup />
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
