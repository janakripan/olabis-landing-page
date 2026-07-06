import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const BentoFeatures = () => {
  return (
    <section className="py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-screen-lg mx-auto px-6">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Row 1 */}
          
          {/* Card 1: Increase Sales (Black) */}
          <motion.div variants={cardVariants} className="bg-[#111] rounded-[32px] p-8 lg:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Increase Sales.</h3>
              <p className="text-gray-400 font-medium leading-relaxed">
                Digital menu boards and displays help influence customer decisions and drive unplanned purchases at the right time.
              </p>
            </div>
            <div className="mt-12 text-center relative z-10">
              <div className="text-red-400 font-bold mb-[-10px] tracking-widest text-sm uppercase">Up To</div>
              <div className="text-[80px] lg:text-[100px] font-black leading-none bg-clip-text text-transparent bg-gradient-to-br from-[#E45A5A] to-[#BB2117] tracking-tighter">
                38%
              </div>
              <div className="text-red-400 font-bold mt-[-5px] text-lg">Sales Boost</div>
            </div>
          </motion.div>

          {/* Card 2: Save Time & Resources */}
          <motion.div variants={cardVariants} className="bg-white border-2 border-red-50 rounded-[32px] p-8 lg:p-10 shadow-sm hover:shadow-xl hover:border-red-100 transition-all duration-500 flex flex-col relative overflow-hidden group">
            <div className="mb-12 relative z-10">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Save Time & Resources.</h3>
              <p className="text-gray-500 font-medium leading-relaxed">
                Update your menu instantly without printing costs or extra staff effort, keeping operations smooth and efficient.
              </p>
            </div>
            {/* Mobile UI Mockup */}
            <div className="mt-auto relative w-full h-[180px] flex justify-center items-end">
               <div className="w-[160px] h-[220px] bg-white rounded-t-3xl border-[6px] border-[#1A1A1A] border-b-0 shadow-2xl relative overflow-hidden transform group-hover:translate-y-[-10px] transition-transform duration-500">
                  <div className="w-1/3 h-1 bg-[#1A1A1A] absolute top-2 left-1/2 -translate-x-1/2 rounded-full z-20"></div>
                  <img src="/hero-pizza.png" className="w-full h-[100px] object-cover absolute top-0" />
                  
                  {/* Floating Item */}
                  <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-xl shadow-lg p-2 flex gap-2">
                     <div className="w-10 h-10 bg-red-50 rounded-lg overflow-hidden shrink-0">
                       <img src="/burger.png" className="w-full h-full object-cover" />
                     </div>
                     <div className="flex flex-col justify-center">
                       <div className="text-[8px] font-bold text-gray-900 leading-none mb-1">Mortadella</div>
                       <div className="text-[6px] text-gray-500 leading-tight">A classic italian starter.</div>
                       <div className="text-[8px] font-bold text-red-600 mt-1">25.50 AED</div>
                     </div>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Card 3: All Customers Languages */}
          <motion.div variants={cardVariants} className="bg-white border-2 border-red-50 rounded-[32px] p-8 lg:p-10 shadow-sm flex flex-col group">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">All Customers<br/>Languages.</h3>
              <p className="text-gray-500 font-medium leading-relaxed text-[15px]">
                Easily customize your menu in to serve all your customers. so you offer a seamless experience in any language!
              </p>
            </div>
            {/* Flags Grid UI - Pixel Perfect to Image */}
            <div className="mt-auto flex flex-col gap-3 px-2">
               {/* Row 1 */}
               <div className="flex justify-between items-center gap-4">
                 <div className="flex items-center gap-2 w-1/2">
                   <img src="https://flagcdn.com/w40/gb.png" className="w-5 shadow-sm" alt="GB" />
                   <span className="text-[9px] text-gray-700 whitespace-nowrap">Lamb Chops</span>
                 </div>
                 <div className="flex items-center justify-end gap-2 w-1/2">
                   <span className="text-[9px] text-gray-700 whitespace-nowrap" dir="rtl">ريش لحم خروف</span>
                   <img src="https://flagcdn.com/w40/ae.png" className="w-5 shadow-sm" alt="AE" />
                 </div>
               </div>
               
               {/* Row 2 */}
               <div className="flex justify-between items-center gap-4 ml-6">
                 <div className="flex items-center gap-2 w-1/2">
                   <img src="https://flagcdn.com/w40/es.png" className="w-5 shadow-sm" alt="ES" />
                   <span className="text-[9px] text-gray-700 whitespace-nowrap">Chuletas de cordero</span>
                 </div>
                 <div className="flex items-center gap-2 w-1/2">
                   <img src="https://flagcdn.com/w40/tr.png" className="w-5 shadow-sm" alt="TR" />
                   <span className="text-[9px] text-gray-700 whitespace-nowrap">Kuzu Pirzola</span>
                 </div>
               </div>

               {/* Row 3 */}
               <div className="flex justify-between items-center gap-4">
                 <div className="flex items-center gap-2 w-1/2">
                   <img src="https://flagcdn.com/w40/cn.png" className="w-5 shadow-sm" alt="CN" />
                   <span className="text-[9px] text-gray-700 whitespace-nowrap">羊排 (Yáng pái)</span>
                 </div>
                 <div className="flex items-center gap-2 w-1/2">
                   <img src="https://flagcdn.com/w40/ru.png" className="w-5 shadow-sm" alt="RU" />
                   <span className="text-[9px] text-gray-700 whitespace-nowrap">Бараньи отбивные</span>
                 </div>
               </div>

               {/* Row 4 */}
               <div className="flex justify-between items-center gap-4 ml-8">
                 <div className="flex items-center gap-2 w-1/2">
                   <img src="https://flagcdn.com/w40/fr.png" className="w-5 shadow-sm" alt="FR" />
                   <span className="text-[9px] text-gray-700 whitespace-nowrap">Côtelettes d'agneau</span>
                 </div>
                 <div className="flex items-center gap-2 w-1/2">
                   <img src="https://flagcdn.com/w40/it.png" className="w-5 shadow-sm" alt="IT" />
                   <span className="text-[9px] text-gray-700 whitespace-nowrap">Costolette</span>
                 </div>
               </div>
            </div>
          </motion.div>


          {/* Row 2 */}

          {/* Card 4: Efficiently Manage (Spans 2 cols) */}
          <motion.div variants={cardVariants} className="md:col-span-2 bg-white border-2 border-red-50 rounded-[32px] p-8 pb-0 lg:p-10 lg:pb-0 shadow-sm flex flex-col relative overflow-hidden group">
            <div className="relative z-10 w-full mb-8">
              <h3 className="text-[22px] font-bold text-gray-900 mb-2 leading-tight">
                Efficiently manage your dynamic digital menus at scale. <span className="font-medium text-gray-500">Centralize your retail or dining experience management and standardize tools across all your locations</span>
              </h3>
            </div>
            
            {/* Dashboard Mockup - Flex-col bottom placement */}
            <div className="w-full flex justify-center mt-auto relative z-0">
               <div className="w-[90%] md:w-[85%] bg-white rounded-t-2xl md:rounded-t-3xl border-t-[12px] border-l-[12px] border-r-[12px] border-[#1A1A1A] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] transform group-hover:translate-y-[-10px] transition-transform duration-700 relative overflow-hidden">
                 {/* Webcam Notch */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-3 bg-[#1A1A1A] rounded-b-xl z-20"></div>
                 <img src="/bento-features/dashboard.png" alt="Dashboard View" className="w-full h-auto rounded-t-sm" />
               </div>
            </div>
          </motion.div>

          {/* Card 5: Promotions (Black) */}
          <motion.div variants={cardVariants} className="bg-[#111] rounded-[32px] p-8 lg:p-10 flex flex-col justify-between shadow-xl relative overflow-visible group">
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-2">Promotions &<br/>Specials.</h3>
              <p className="text-gray-400 font-medium leading-relaxed text-[15px]">
                On of key benefits is highlighting your menu display promotions for your digital menu board and specials with highest margins to help lead & engage customer to specific purchases. You can also easily add your social media links as a part of your business promotion.
              </p>
            </div>

            {/* Red Jagged Burst Badge */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#BB2117] flex items-center justify-center text-white font-black text-xl shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" 
                 style={{ clipPath: 'polygon(50% 0%, 61% 16%, 80% 10%, 82% 29%, 98% 35%, 88% 50%, 98% 65%, 82% 71%, 80% 90%, 61% 84%, 50% 100%, 39% 84%, 20% 90%, 18% 71%, 2% 65%, 12% 50%, 2% 35%, 18% 29%, 20% 10%, 39% 16%)' }}>
              NEW
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default BentoFeatures;
