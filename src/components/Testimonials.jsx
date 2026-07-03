import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    quote: "Implementing ScannTek DigiMenu completely eliminated our weekly menu printing costs. The ability to instantly update out-of-stock items has reduced guest complaints to near zero. A total game-changer for our high-volume bistro.",
    author: "Sarah Jenkins",
    role: "General Manager, The Rustic Spoon",
    initials: "SJ",
    color: "bg-red-50 text-[#9C1C13]"
  },
  {
    quote: "Our drink sales increased by 22% in the first month. High-res imagery makes the cocktails look irresistible on customers' phones. Plus, the analytics dashboard shows exactly which modifiers drive the highest margins.",
    author: "Marcus Rivera",
    role: "Owner, Elevate Lounge",
    initials: "MR",
    color: "bg-red-50 text-[#9C1C13]"
  },
  {
    quote: "The direct Kitchen Order Ticket bridge is flawless. During our weekend rushes, tables turn 15 minutes faster because guests can reorder drinks or desserts without waiting to flag down a server. Unbelievably seamless.",
    author: "Chef Liam O'Connor",
    role: "Executive Chef, Seaside Grill",
    initials: "LO",
    color: "bg-red-50 text-[#9C1C13]"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
          >
            Trusted by 30k+ world class companies & dining teams
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center items-center gap-1 text-[#BB2117]"
          >
            {[...Array(5)].map((_, i) => <FaStar key={i} />)}
            <span className="text-gray-900 font-bold ml-2">4.9/5 Average Rating</span>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="group relative bg-white border-2 border-red-50 rounded-[32px] p-8 flex flex-col shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-[#BB2117]/30 transition-all duration-500 overflow-hidden"
            >
              {/* Premium Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#BB2117]/0 to-[#BB2117]/0 group-hover:from-[#BB2117]/5 group-hover:to-transparent transition-all duration-500 z-0 pointer-events-none"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="text-[#BB2117]/30 mb-6 transition-transform group-hover:scale-110 group-hover:text-[#BB2117] duration-500 origin-left">
                  <svg className="w-10 h-10 opacity-50 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-8 flex-1 italic group-hover:text-gray-900 transition-colors duration-500">
                  "{test.quote}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <div className={`w-12 h-12 rounded-full ${test.color} flex items-center justify-center font-bold text-lg ring-2 ring-transparent group-hover:ring-[#BB2117]/20 transition-all`}>
                    {test.initials}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{test.author}</div>
                    <div className="text-xs text-gray-500">{test.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default Testimonials;
