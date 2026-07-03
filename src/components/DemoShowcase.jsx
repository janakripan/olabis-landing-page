import React from 'react';
import { motion } from 'framer-motion';
import { FaUtensils, FaCoffee, FaShoppingCart, FaStore } from 'react-icons/fa';

const DemoShowcase = () => {
  return (
    <section id="preview-section" className="py-12 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF9F6] rounded-[40px] md:rounded-[60px] py-20 px-6 sm:px-12 relative overflow-clip border border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto">
            
            {/* Header Section */}
            <div className="text-center max-w-3xl mx-auto mb-10">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-[56px] font-black text-gray-900 tracking-tight leading-tight mb-6"
              >
                A Menu For Every Business
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-gray-500 font-medium leading-relaxed"
              >
                Whether you manage a bustling restaurant, a cozy café, a busy supermarket, or a sprawling hypermarket, our platform seamlessly adapts to your unique business needs!
              </motion.p>
            </div>

        {/* Categories Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-16"
        >
          <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm border border-gray-100 text-sm font-bold text-gray-700">
            <FaUtensils className="text-gray-400" /> Restaurants
          </div>
          <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm border border-gray-100 text-sm font-bold text-gray-700">
            <FaCoffee className="text-gray-400" /> Cafes
          </div>
          <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm border border-gray-100 text-sm font-bold text-gray-700">
            <FaShoppingCart className="text-gray-400" /> Supermarkets
          </div>
          <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm border border-gray-100 text-sm font-bold text-gray-700">
            <FaStore className="text-gray-400" /> Hypermarkets
          </div>
        </motion.div>

        {/* Mockups Grid */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10 mb-12">
          
          {/* Restaurant Mockup */}
          <motion.a 
            href="https://digimenu.scanntek.com/UAESALESDEMO"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="group relative flex-1 w-full rounded-[24px] lg:rounded-[32px] p-2.5 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] border-[6px] border-[#1A1A1A] overflow-clip hover:scale-[1.02] hover:shadow-[0_30px_80px_rgba(187,33,23,0.15)] transition-all duration-500 cursor-pointer block"
          >
            <div className="w-full rounded-[16px] lg:rounded-[20px] overflow-clip relative">
              {/* Overlay on hover for interactivity clue */}
              <div className="absolute inset-0 bg-[#BB2117]/0 group-hover:bg-[#BB2117]/10 transition-colors duration-500 z-10 flex items-center justify-center">
                 <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 bg-white text-[#BB2117] hover:bg-[#BB2117] hover:text-white border-2 border-[#BB2117] font-bold px-6 py-3 rounded-full shadow-xl">
                   View Live Demo
                 </div>
              </div>
              <img src="/preview-section/reataurant.png" alt="Restaurant Menu Demo" className="w-full h-auto object-cover" />
            </div>
          </motion.a>

          {/* Retail Mockup */}
          <motion.a 
            href="https://digimenu.scanntek.com/demoRetail"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="group relative flex-1 w-full rounded-[24px] lg:rounded-[32px] p-2.5 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] border-[6px] border-[#1A1A1A] overflow-clip hover:scale-[1.02] hover:shadow-[0_30px_80px_rgba(187,33,23,0.15)] transition-all duration-500 cursor-pointer block"
          >
            <div className="w-full rounded-[16px] lg:rounded-[20px] overflow-clip relative">
              {/* Overlay on hover for interactivity clue */}
              <div className="absolute inset-0 bg-[#BB2117]/0 group-hover:bg-[#BB2117]/10 transition-colors duration-500 z-10 flex items-center justify-center">
                 <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 bg-white text-[#BB2117] hover:bg-[#BB2117] hover:text-white border-2 border-[#BB2117] font-bold px-6 py-3 rounded-full shadow-xl">
                   View Live Demo
                 </div>
              </div>
              <img src="/preview-section/retail.png" alt="Retail Menu Demo" className="w-full h-auto object-cover" />
            </div>
          </motion.a>

        </div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="https://digimenu.scanntek.com/UAESALESDEMO" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl border-2 border-[#BB2117] text-[#BB2117] hover:bg-[#BB2117] hover:text-white font-bold tracking-wide transition-colors duration-300 text-center"
          >
            Watch Demo Restaurant
          </a>
          <a 
            href="https://digimenu.scanntek.com/demoRetail" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl border-2 border-[#BB2117] text-[#BB2117] hover:bg-[#BB2117] hover:text-white font-bold tracking-wide transition-colors duration-300 text-center"
          >
            Watch Demo Retail
          </a>
        </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoShowcase;
