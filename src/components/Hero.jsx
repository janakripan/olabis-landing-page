import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
      {/* Grid Background Accent */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Soft Glow */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Copy & CTAs */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-block mb-4 px-4 py-1.5 rounded-full bg-surface-secondary border border-border-theme text-accent font-semibold text-sm">
              ✨ New: Menu Analytics Dashboard
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl lg:text-7xl font-extrabold text-text-primary tracking-tight leading-[1.1] mb-6"
            >
              Save money, <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-hover">
                fast from app.
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg lg:text-xl text-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              The professional, mobile-optimized QR menu system built from the ground up for smartphone browsers, managed seamlessly from your desktop.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-accent-hover active:bg-accent-active text-white font-bold rounded-xl shadow-[var(--shadow-btn)] transition-all hover:-translate-y-1">
                View Demo Setup
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#9C5D31] hover:bg-accent/12 hover:border-accent text-text-primary font-bold rounded-xl transition-all flex items-center justify-center gap-2 group">
                <span className="bg-surface p-2 rounded-full group-hover:bg-accent/20 group-hover:text-accent transition-colors">
                  <FaPlay className="w-3 h-3 ml-0.5" />
                </span>
                Watch Video Explorer
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Mockup */}
          <motion.div 
            className="flex-1 relative w-full max-w-lg lg:max-w-none"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            {/* Accent Sunburst */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 lg:w-96 lg:h-96 bg-accent rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse"></div>
            
            {/* 3D Smartphone Container Wrapper */}
            <motion.div 
              className="relative z-10 transform perspective-1000"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="rotate-y-[-10deg] rotate-z-[5deg] rotate-x-[5deg] relative">
                
                {/* Floating UI: Revenue Card */}
                <motion.div 
                  className="absolute -left-16 lg:-left-32 top-20 z-20 bg-surface rounded-2xl p-4 border border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-md hidden sm:block w-48"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-xs font-medium text-text-secondary">Today's Revenue</div>
                    <div className="text-[10px] text-status-success font-bold px-1.5 py-0.5 bg-status-success-bg rounded-md">+12%</div>
                  </div>
                  <div className="text-xl font-bold text-text-primary">$4,289.50</div>
                  <div className="mt-3 flex items-end gap-1 h-8">
                    {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
                      <div key={i} className="flex-1 bg-accent/20 rounded-t-sm" style={{ height: `${h}%` }}>
                        {i === 6 && <div className="w-full h-full bg-accent rounded-t-sm"></div>}
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Floating UI: Live Order Pill */}
                <motion.div 
                  className="absolute -right-8 lg:-right-16 bottom-32 z-20 bg-surface/90 rounded-full py-3 px-5 border border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-md hidden sm:flex items-center gap-3"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <div className="w-2 h-2 rounded-full bg-status-success animate-pulse"></div>
                  <div className="text-sm font-bold text-text-primary">Order #1042 Ready</div>
                </motion.div>

                {/* Smartphone Frame */}
                <div className="w-[300px] h-[600px] mx-auto bg-surface rounded-[3rem] border-[8px] border-black shadow-2xl overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 inset-x-0 h-6 bg-black rounded-b-2xl w-40 mx-auto z-20"></div>
                  
                  {/* Active Visual Menu */}
                  <div className="w-full h-full bg-background flex flex-col pt-10 pb-6 px-4">
                    <div className="flex justify-between items-center mb-6 text-text-primary">
                      <div className="w-8 h-8 rounded-full bg-surface-secondary flex items-center justify-center">
                         <svg className="w-4 h-4 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                      </div>
                      <div className="font-bold text-lg">Menu</div>
                      <div className="w-8 h-8"></div>
                    </div>
                    
                    {/* Categories */}
                    <div className="flex gap-2 mb-6 overflow-hidden">
                      <div className="px-4 py-1.5 bg-accent text-white rounded-full text-xs font-bold whitespace-nowrap shadow-sm shadow-accent/20">Popular</div>
                      <div className="px-4 py-1.5 bg-surface-secondary text-text-secondary rounded-full text-xs font-bold whitespace-nowrap border border-white/5">Starters</div>
                      <div className="px-4 py-1.5 bg-surface-secondary text-text-secondary rounded-full text-xs font-bold whitespace-nowrap border border-white/5">Mains</div>
                    </div>
                    
                    {/* Food Previews */}
                    <div className="flex-1 flex flex-col gap-4 overflow-hidden relative">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="bg-surface p-3 rounded-2xl border border-white/5 flex gap-4 items-center shadow-sm">
                          <div className="w-20 h-20 bg-surface-secondary rounded-xl overflow-hidden relative">
                            {/* Placeholder Image Layer */}
                            <div className="absolute inset-0 bg-gradient-to-br from-surface-secondary to-border-theme/30"></div>
                          </div>
                          <div className="flex-1">
                            <div className="font-bold text-sm mb-1 text-text-primary">Truffle Burger</div>
                            <div className="text-xs text-text-secondary mb-2 line-clamp-2">Wagyu beef, truffle mayo, crispy onions.</div>
                            <div className="font-bold text-accent">$24.00</div>
                          </div>
                        </div>
                      ))}
                      
                      {/* Fade out bottom */}
                      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
                    </div>
                    
                    {/* Order Button Floating */}
                    <div className="mt-4 px-4 py-4 bg-accent text-white rounded-xl text-center font-bold text-sm shadow-[var(--shadow-btn)]">
                      View Cart (2 items)
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
