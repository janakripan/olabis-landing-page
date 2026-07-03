import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt } from 'react-icons/fa';

const CTA = () => {
  return (
    <section className="py-24 bg-surface-secondary relative overflow-hidden">
      {/* Faded Dashboard Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 hidden md:block">
        <div className="absolute top-10 left-10 w-64 h-32 bg-surface rounded-2xl border border-white/5 blur-sm flex items-end gap-2 p-4">
          <div className="w-8 h-12 bg-accent/30 rounded-t-sm"></div>
          <div className="w-8 h-20 bg-accent/30 rounded-t-sm"></div>
          <div className="w-8 h-16 bg-accent/30 rounded-t-sm"></div>
          <div className="w-8 h-24 bg-accent/60 rounded-t-sm"></div>
        </div>
        <div className="absolute top-40 right-20 w-72 h-40 bg-surface rounded-2xl border border-white/5 blur-sm p-4">
          <div className="w-full h-4 bg-white/5 rounded mb-4"></div>
          <div className="w-3/4 h-4 bg-white/5 rounded mb-4"></div>
          <div className="w-1/2 h-4 bg-accent/40 rounded"></div>
        </div>
        <div className="absolute bottom-10 left-1/4 w-96 h-48 bg-surface rounded-2xl border border-white/5 blur-[8px] p-6">
          <div className="w-12 h-12 rounded-full bg-accent/20 mb-4"></div>
          <div className="w-full h-2 bg-white/10 rounded mb-2"></div>
          <div className="w-full h-2 bg-white/10 rounded mb-2"></div>
        </div>
      </div>

      {/* Decorative Blur Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-background/80 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 z-0 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-6xl font-extrabold text-text-primary tracking-tight leading-tight mb-6"
        >
          Ready to digitize your <br className="hidden md:block"/> dining experience?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-text-secondary text-lg md:text-xl mb-12 max-w-2xl mx-auto"
        >
          Join thousands of smart restaurants increasing their margins and table turnover with our complete management platform.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-surface p-2 rounded-2xl shadow-[var(--shadow-card)] flex flex-col sm:flex-row max-w-xl mx-auto mb-16 border border-white/10 relative z-20 hover:border-accent/30 transition-colors duration-300 group"
        >
          <div className="flex-1 flex items-center px-4 py-3 sm:py-0">
            <FaPhoneAlt className="text-text-secondary mr-3 group-focus-within:text-accent transition-colors" />
            <input 
              type="tel" 
              placeholder="Enter your phone or WhatsApp number" 
              className="w-full bg-transparent border-none outline-none text-text-primary font-medium placeholder-text-secondary focus:ring-0"
            />
          </div>
          <button className="bg-accent hover:bg-accent-hover active:bg-accent-active text-white font-bold py-4 px-8 rounded-xl transition-all sm:w-auto w-full whitespace-nowrap shadow-[var(--shadow-btn)] hover:shadow-[0_0_20px_rgba(235,148,80,0.4)] hover:-translate-y-0.5">
            Get Call Back
          </button>
        </motion.div>

        {/* Bottom Indicators */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-border-theme gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center backdrop-blur-sm border border-border-theme">
              <span className="text-text-primary font-bold text-xl">6+</span>
            </div>
            <div className="text-left">
              <div className="text-text-primary font-bold">Years in Business</div>
              <div className="text-text-secondary text-sm">Consistent growth</div>
            </div>
          </div>
          
          <div className="hidden sm:block w-px h-12 bg-border-theme"></div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center backdrop-blur-sm border border-border-theme">
              <span className="text-text-primary font-bold text-xl">4k</span>
            </div>
            <div className="text-left">
              <div className="text-text-primary font-bold">Case Studies Delivered</div>
              <div className="text-text-secondary text-sm">Proven ROI metrics</div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default CTA;
