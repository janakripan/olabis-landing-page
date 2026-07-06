import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaPuzzlePiece } from 'react-icons/fa';
import TabletMockup from './showcase/TabletMockup';
import PhoneMockup from './showcase/PhoneMockup';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-clip">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[40px] md:text-[56px] font-black text-gray-900 mb-4 tracking-tight"
          >
            How It Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-medium"
          >
            Ketchup Menu is loaded with features to make digital Menus management and creation easy as never before!
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          
          {/* Card 1: Contact Us */}
          <motion.div variants={itemVariants} className="bg-white border border-red-100 rounded-[32px] overflow-clip shadow-sm flex flex-col pt-8">
            <div className="px-8 pb-4 flex-1">
              <span className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2 block">STEP 1</span>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h3>
              <p className="text-gray-500 font-medium leading-relaxed">
                Reach out to us, and <span className="font-bold text-gray-900">we'll set up your account</span>. We'll guide you through the process and get you started in no time.
              </p>
            </div>
            
            {/* Card 1 Illustration */}
            <div className="mt-8 px-6 pb-6 relative h-[220px] flex items-center justify-between">
              
              {/* Left Box (Restaurant) */}
              <div className="w-[45%] h-[140px] bg-black rounded-r-[32px] rounded-l-[16px] flex flex-col items-center justify-center text-white z-10 -ml-6 border border-gray-800">
                 <div className="mb-2">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.89 10.74c.07-.24.11-.5.11-.74 0-1.66-1.34-3-3-3-.46 0-.89.11-1.28.29-.6-1.39-2.02-2.29-3.72-2.29-1.7 0-3.12.9-3.72 2.29-.39-.18-.82-.29-1.28-.29-1.66 0-3 1.34-3 3 0 .24.04.5.11.74C2.52 11.58 1.5 13.17 1.5 15v5h19v-5c0-1.83-1.02-3.42-2.61-4.26z" />
                    </svg>
                 </div>
                 <span className="text-sm font-medium">Our Team</span>
              </div>

              {/* Connecting elements */}
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
                <div className="w-10 h-10 bg-white rounded-full border border-gray-200 shadow-md flex items-center justify-center relative">
                   <FaPhoneAlt className="text-gray-900 w-4 h-4" />
                   {/* Dashed line top */}
                   <svg className="absolute w-[180px] h-10 -z-10" style={{ left: '-70px', top: '10px', pointerEvents: 'none' }}>
                     <path d="M0,10 Q90,-20 180,10" fill="none" stroke="#D1D5DB" strokeWidth="2" strokeDasharray="4 4" />
                   </svg>
                </div>
                <div className="w-10 h-10 bg-white rounded-full border border-gray-200 shadow-md flex items-center justify-center relative">
                   <FaPuzzlePiece className="text-gray-900 w-5 h-5" />
                   {/* Dashed line bottom */}
                   <svg className="absolute w-[180px] h-10 -z-10" style={{ left: '-70px', top: '-10px', pointerEvents: 'none' }}>
                     <path d="M0,20 Q90,50 180,20" fill="none" stroke="#D1D5DB" strokeWidth="2" strokeDasharray="4 4" />
                   </svg>
                </div>
              </div>

              {/* Right Box (Ketchup) */}
              <div className="w-[45%] h-[140px] bg-[#BB2117] rounded-l-[32px] rounded-r-[16px] flex flex-col items-center justify-center text-white z-10 -mr-6">
                 <div className="text-2xl font-black tracking-tight mb-1">SuperMart</div>
                 <span className="text-xs text-white/80 font-medium">Store Admin</span>
              </div>
            </div>
          </motion.div>


          {/* Card 2: Customize Your Menu */}
          <motion.div variants={itemVariants} className="bg-white border border-red-100 rounded-[32px] overflow-clip shadow-sm flex flex-col pt-8">
            <div className="px-8 pb-4 flex-1">
              <span className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2 block">STEP 2</span>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Customize Your Menu</h3>
              <p className="text-gray-500 font-medium leading-relaxed">
                Easily create and organize your menu with our intuitive tools. <span className="font-bold text-gray-900">Add items, update prices, set languages</span>, and make changes anytime.
              </p>
            </div>
            
            {/* Card 2 Illustration */}
            <div className="mt-4 mx-6 h-[240px] relative">
               {/* UI Mockup Window */}
               <div className="absolute inset-0 top-6 bg-white rounded-t-[20px] border border-gray-100 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] overflow-clip">
                 <img src="/realistic_menu.png" alt="Realistic Digital Menu" className="w-full h-full object-cover object-top" />
               </div>
            </div>
          </motion.div>


          {/* Card 3: Up & Ready */}
          <motion.div variants={itemVariants} className="bg-white border border-red-100 rounded-[32px] overflow-clip shadow-sm flex flex-col pt-8">
            <div className="px-8 pb-4 flex-1">
              <span className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2 block">STEP 3</span>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Up & Ready</h3>
              <p className="text-gray-500 font-medium leading-relaxed">
                Your menu is live and ready to share! Customers can <span className="font-bold text-gray-900">scan, browse, and order with ease</span>—seamless and hassle-free.
              </p>
            </div>
            
            {/* Card 3 Illustration */}
            <div className="mt-8 relative h-[220px] bg-[#FAFAFA] flex items-end justify-center overflow-clip border-t border-gray-50">
               {/* Scaled down versions of our Hero devices */}
               <div className="relative w-full max-w-[320px] flex justify-center items-end bottom-[-20px] scale-[0.6] lg:scale-[0.65] origin-bottom">
                  
                  {/* Tablet */}
                  <div className="relative z-10 w-[360px] mr-12">
                     <TabletMockup imageSrc="/demo-retail-images/demo-retail-tablet.png" />
                  </div>
                  
                  {/* Phone */}
                  <div className="absolute right-0 bottom-10 z-20 w-[130px]">
                     <PhoneMockup imageSrc="/demo-retail-images/demo-retail-mobile.png" />
                  </div>

               </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
