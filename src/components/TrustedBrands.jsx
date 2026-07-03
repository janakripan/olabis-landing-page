import React from 'react';
import { motion } from 'framer-motion';

const TrustedBrands = () => {
  return (
    <section className="py-12 bg-background border-b border-border-theme">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16 relative"
        >
          <p className="text-sm font-semibold text-text-secondary uppercase tracking-widest text-center md:text-left max-w-[220px]">
            Powering innovative restaurants worldwide
          </p>
          
          <div className="flex-1 flex flex-wrap justify-center items-center gap-8 lg:gap-16 grayscale opacity-40 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] -webkit-[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] w-full py-4">
            {/* Dummy Logos */}
            <div className="text-xl font-black tracking-tighter text-text-primary flex items-center gap-2">
              <div className="w-6 h-6 bg-text-primary rounded-sm rotate-45"></div>
              ACME Corp
            </div>
            <div className="text-xl font-bold tracking-widest text-text-primary flex items-center gap-2">
              <div className="w-6 h-6 rounded-full border-4 border-text-primary"></div>
              GLOBAL
            </div>
            <div className="text-xl font-serif italic font-bold text-text-primary">
              Starlight
            </div>
            <div className="text-xl font-black text-text-primary flex items-center gap-1">
              <div className="w-4 h-8 bg-text-primary"></div>
              <div className="w-4 h-8 bg-text-primary opacity-50"></div>
              NEXUS
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBrands;
