import React from 'react';
import { motion } from 'framer-motion';
import { FaAngleRight, FaRegHeart, FaRegComment, FaRegPaperPlane } from 'react-icons/fa';

const textVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const graphicVariantsRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
};

const graphicVariantsLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
};

const textVariantsRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const FeatureSplit = () => {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-clip">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ROW 1: Highlight Meals */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-32">
          
          {/* Text Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textVariants}
            className="flex-1 max-w-xl"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6 tracking-tight">
              Highlight Meals & <br className="hidden md:block" /> Items
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-8 font-medium">
              Use the power of Ketchup Menu to <span className="text-[#BB2117] font-bold">showcase new dishes</span>, highlight special offers, and update your menu instantly. <span className="text-[#BB2117] font-bold">Create a modern dining experience</span> with images, videos, and customizable templates. Want to stand out? Offer interactive links and QR code menus to keep customers engaged and coming back!
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-gray-900 font-bold hover:text-[#BB2117] transition-colors group">
              Check the power of ketchup E-Menus 
              <FaAngleRight className="text-[#BB2117] group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Graphic: Tablet Menu Mockup */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={graphicVariantsRight}
            className="flex-1 w-full"
          >
            <div className="w-full max-w-[600px] mx-auto aspect-[4/3] bg-white rounded-[24px] lg:rounded-[32px] p-2.5 shadow-[0_30px_80px_rgba(0,0,0,0.12)] border-[4px] border-[#1A1A1A] relative overflow-clip flex flex-col">
              
              {/* Tablet Top Bar */}
              <div className="h-12 w-full border-b border-gray-100 flex items-center px-4 gap-6 shrink-0 relative z-10 bg-white">
                <div className="flex items-center gap-2">
                   <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                </div>
                <div className="flex gap-4 overflow-clip flex-1 justify-center">
                  <span className="text-[10px] font-bold text-white bg-green-500 px-3 py-1 rounded-full">Pizza</span>
                  <span className="text-[10px] font-bold text-gray-400 py-1">Appetizers</span>
                  <span className="text-[10px] font-bold text-gray-400 py-1">Desserts</span>
                  <span className="text-[10px] font-bold text-gray-400 py-1">Drinks</span>
                </div>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                </div>
              </div>

              {/* Tablet Content */}
              <div className="flex-1 bg-white relative overflow-clip flex flex-col p-4 gap-4">
                
                {/* Hero Banner inside Tablet */}
                <div className="w-full h-[140px] rounded-2xl overflow-clip relative shrink-0">
                  <img src="/hero-pizza.png" alt="Meat Lover's Pizza" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white font-bold text-sm tracking-wide">Meat Lover's Pizzas</div>
                </div>

                {/* List Items */}
                <div className="flex flex-col gap-3">
                  
                  {/* Item 1 */}
                  <div className="w-full bg-gray-50/50 border border-gray-100 rounded-xl p-3 flex flex-col gap-2">
                    <div className="flex justify-between items-start">
                      <div className="font-bold text-gray-900 text-xs">Ultimate Meat Feast</div>
                      <div className="font-bold text-gray-900 text-xs">59.99 <span className="text-[8px] text-gray-400">AED</span></div>
                    </div>
                    <p className="text-[8px] text-gray-500 leading-tight w-3/4">
                      Loaded with premium beef, pepperoni, sausage, bacon, and ham on our classic marinara base.
                    </p>
                  </div>

                  {/* Item 2 */}
                  <div className="w-full bg-gray-50/50 border border-gray-100 rounded-xl p-3 flex flex-col gap-2">
                    <div className="flex justify-between items-start">
                       <div className="flex items-center gap-1.5">
                         <div className="w-3 h-3 rounded-full bg-red-500 text-white flex items-center justify-center text-[6px] font-bold">N</div>
                         <div className="font-bold text-gray-900 text-xs">BBQ Carnivore</div>
                       </div>
                      <div className="font-bold text-gray-900 text-xs">49.50 <span className="text-[8px] text-gray-400">AED</span></div>
                    </div>
                    <p className="text-[8px] text-gray-500 leading-tight w-3/4">
                      Smoky BBQ sauce, diced chicken, beef, and crispy onions pulled together for a truly robust bite.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>

        </div>


        {/* ROW 2: Promote Events */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Graphic: Promotional Posters inside Tablet */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={graphicVariantsLeft}
            className="flex-1 w-full"
          >
            <div className="w-full max-w-[600px] mx-auto aspect-[4/2.8] bg-[#1A1A1A] rounded-[24px] lg:rounded-[32px] p-2.5 shadow-[0_30px_80px_rgba(0,0,0,0.12)] border-[4px] border-[#1A1A1A] relative overflow-clip flex gap-2">
               
               {/* Left Poster (Burger) */}
               <div className="flex-1 bg-[#8B0000] rounded-xl overflow-clip relative flex flex-col items-center justify-center border border-red-900/50">
                 {/* Halftone / texture overlay */}
                 <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_black_1px,_transparent_1px)] bg-[size:10px_10px]"></div>
                 
                 {/* Repeating Typography */}
                 <div className="absolute inset-0 flex flex-col items-center justify-center opacity-30 pointer-events-none">
                    <h1 className="text-6xl font-black text-white leading-[0.75] tracking-tighter mix-blend-overlay">BURGER</h1>
                    <h1 className="text-6xl font-black text-white leading-[0.75] tracking-tighter mix-blend-overlay">BURGER</h1>
                    <h1 className="text-6xl font-black text-white leading-[0.75] tracking-tighter mix-blend-overlay">BURGER</h1>
                    <h1 className="text-6xl font-black text-white leading-[0.75] tracking-tighter mix-blend-overlay">BURGER</h1>
                 </div>

                 {/* Foreground Burger Image */}
                 <img src="/burger.png" alt="Burger Promo" className="w-[85%] relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
                 
                 {/* Footer Socials fake */}
                 <div className="absolute bottom-4 flex gap-3 text-white/50 z-10">
                   <FaRegHeart className="w-4 h-4" />
                   <FaRegComment className="w-4 h-4" />
                   <FaRegPaperPlane className="w-4 h-4" />
                 </div>
               </div>

               {/* Right Poster (Biriyani) */}
               <div className="flex-1 bg-[#FDF8E7] rounded-xl overflow-clip relative flex flex-col items-center border border-red-100">
                 
                 {/* Red curved bottom */}
                 <div className="absolute bottom-0 w-full h-[55%] bg-[#BB2117]" style={{ clipPath: 'ellipse(120% 100% at 50% 100%)' }}></div>
                 
                 {/* Typography */}
                 <div className="relative z-10 text-center mt-6 flex flex-col items-center">
                   <span className="font-cursive text-red-500 text-xl -rotate-6 block mb-[-10px] ml-[-40px]">Special Tasty</span>
                   <h2 className="text-5xl font-black text-[#BB2117] tracking-tighter leading-none" style={{ textShadow: '2px 2px 0px rgba(255,255,255,0.8)' }}>BIRIYANI</h2>
                   <div className="bg-white text-[#1A1A1A] text-[9px] font-black uppercase px-2 py-0.5 mt-2 tracking-widest shadow-sm">Get 30% Discount for today</div>
                 </div>

                 {/* Foreground Biriyani Image */}
                 <div className="relative z-10 mt-auto mb-8 w-[80%] flex justify-center group">
                   <img src="/biriyani.png" alt="Biriyani Promo" className="w-full drop-shadow-2xl group-hover:scale-105 transition-transform duration-500" />
                   {/* Price Badge */}
                   <div className="absolute -left-2 top-4 w-12 h-12 bg-green-500 rounded-full flex flex-col items-center justify-center text-white shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
                     <span className="text-[6px] font-bold uppercase leading-none">Special Price</span>
                     <span className="text-[14px] font-black leading-none">$5.90</span>
                   </div>
                 </div>

               </div>
               
            </div>
          </motion.div>


          {/* Text Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textVariantsRight}
            className="flex-1 max-w-xl"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6 tracking-tight">
              Promote Events & <br className="hidden md:block" /> Create A Community
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-8 font-medium">
              Use Ketchup Menu to <span className="text-[#BB2117] font-bold">showcase your latest events, special promotions</span>, and customer reviews—right in your digital menu. Highlight limited-time offers, feature social media posts, and keep guests engaged. Want to boost visibility? <span className="text-[#BB2117] font-bold">Display your Socials</span> to encourage easy sharing and online buzz!
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-gray-900 font-bold hover:text-[#BB2117] transition-colors group">
              Why ketchup stands out 
              <FaAngleRight className="text-[#BB2117] group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default FeatureSplit;
