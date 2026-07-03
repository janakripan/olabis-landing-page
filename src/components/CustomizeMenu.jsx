import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaThLarge, FaBox, FaLayerGroup, FaClock, 
  FaBullhorn, FaMapMarkerAlt, FaWallet, FaCreditCard,
  FaCheckCircle, FaPlus, FaStore, FaMoneyBillWave
} from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

// Feature Cards Data Array for mapping (if possible, but we have custom Mini UIs for each, so we'll build them individually).

const CustomizeMenu = () => {
  return (
    <section className="relative py-32 bg-[#0B0C10] overflow-clip">
      
      {/* Animated Premium Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-accent/20 rounded-full blur-[150px] opacity-50 mix-blend-screen animate-pulse-slow"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen"></div>
        {/* Subtle Light Grid Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
            <span className="text-xs font-bold text-gray-300 tracking-widest uppercase">Complete Customization</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6"
          >
            Customize Your Menu, <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Your Way</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-3xl leading-relaxed"
          >
            Whether you manage a café, restaurant, bakery, grocery store, retail shop, or any other business, you have complete control over your digital menu. Add products, organize categories, control ordering hours, manage delivery areas, display promotions, and receive payments—all from one simple dashboard.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Card 1: Create Categories */}
          <motion.div variants={cardVariants} className="group relative bg-[#13141A] border border-white/5 rounded-[24px] overflow-clip hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="p-8 pb-0">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-500">
                <FaThLarge className="text-gray-300 group-hover:text-accent text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Create Categories</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-8">
                Organize your menu into unlimited categories that suit your business. Group products however you like for a clean browsing experience.
              </p>
            </div>
            {/* Mini UI */}
            <div className="h-[200px] w-full bg-[#0D0E12] border-t border-white/5 relative overflow-clip flex items-end justify-center px-8">
               <div className="w-full bg-[#1A1C23] border border-white/10 rounded-t-xl h-[160px] p-4 flex flex-col gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                 <div className="flex items-center gap-2 text-white/50 text-xs font-bold mb-1"><FaPlus/> Add Category</div>
                 {['Food', 'Drinks', 'Electronics'].map((cat, i) => (
                   <div key={i} className={`h-10 rounded-lg flex items-center px-4 text-sm font-medium transition-all duration-300 ${i===0 ? 'bg-accent text-white group-hover:scale-[1.02]' : 'bg-white/5 text-gray-400 group-hover:bg-white/10'}`} style={{ transitionDelay: `${i*100}ms`}}>
                     {cat}
                   </div>
                 ))}
               </div>
            </div>
          </motion.div>

          {/* Card 2: Unlimited Products */}
          <motion.div variants={cardVariants} className="group relative bg-[#13141A] border border-white/5 rounded-[24px] overflow-clip hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="p-8 pb-0">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-500">
                <FaBox className="text-gray-300 group-hover:text-accent text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Add Unlimited Products</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-8">
                Quickly add products or services with names, descriptions, images, pricing, and availability. Update your menu anytime easily.
              </p>
            </div>
            {/* Mini UI */}
            <div className="h-[200px] w-full bg-[#0D0E12] border-t border-white/5 relative overflow-clip flex pt-6 px-6 gap-4">
               {[1,2].map((item, i) => (
                 <div key={item} className="flex-1 bg-[#1A1C23] border border-white/10 rounded-xl p-3 flex flex-col gap-2 transform translate-y-8 group-hover:translate-y-0 opacity-50 group-hover:opacity-100 transition-all duration-700 ease-out" style={{ transitionDelay: `${i*150}ms` }}>
                   <div className="w-full aspect-square bg-white/5 rounded-lg mb-1 overflow-clip relative">
                      <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   </div>
                   <div className="w-3/4 h-2 bg-white/20 rounded-full"></div>
                   <div className="w-1/2 h-2 bg-white/10 rounded-full"></div>
                   <div className="w-1/3 h-3 bg-accent/80 rounded-full mt-auto"></div>
                 </div>
               ))}
            </div>
          </motion.div>

          {/* Card 3: Variants & Sizes */}
          <motion.div variants={cardVariants} className="group relative bg-[#13141A] border border-white/5 rounded-[24px] overflow-clip hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="p-8 pb-0">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-500">
                <FaLayerGroup className="text-gray-300 group-hover:text-accent text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Product Variants & Sizes</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-8">
                Offer multiple sizes, variants, colors, weights, or options for each product. Every variation can have its own customized pricing.
              </p>
            </div>
            {/* Mini UI */}
            <div className="h-[200px] w-full bg-[#0D0E12] border-t border-white/5 relative overflow-clip flex items-center justify-center">
               <div className="bg-[#1A1C23] border border-white/10 rounded-2xl p-2 flex gap-1 relative shadow-2xl scale-95 group-hover:scale-105 transition-transform duration-500">
                 <div className="absolute inset-y-2 left-2 w-[calc(33.33%-6px)] bg-accent rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out group-hover:translate-x-[100%] shadow-[0_0_20px_rgba(235,148,80,0.4)]"></div>
                 {['Small', 'Medium', 'Large'].map((size, i) => (
                   <div key={size} className={`px-6 py-3 rounded-xl text-sm font-bold relative z-10 transition-colors duration-500 ${i===1 ? 'group-hover:text-white' : 'text-gray-400 group-hover:text-gray-400'}`}>
                     {size}
                   </div>
                 ))}
               </div>
            </div>
          </motion.div>

          {/* Card 4: Business Hours */}
          <motion.div variants={cardVariants} className="group relative bg-[#13141A] border border-white/5 rounded-[24px] overflow-clip hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="p-8 pb-0">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-green-500/20 transition-all duration-500">
                <FaClock className="text-gray-300 group-hover:text-green-400 text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Business Hours</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-8">
                Choose when your business is open for orders. Customers can only place orders during your selected operating hours automatically.
              </p>
            </div>
            {/* Mini UI */}
            <div className="h-[200px] w-full bg-[#0D0E12] border-t border-white/5 relative overflow-clip flex items-center justify-center">
               <div className="bg-[#1A1C23] border border-white/10 rounded-2xl w-[80%] p-5 flex flex-col gap-4 shadow-xl">
                 <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-white">Accepting Orders</span>
                    <div className="w-12 h-6 rounded-full bg-white/10 relative cursor-pointer group-hover:bg-green-500/20 transition-colors duration-500 border border-white/5">
                      <div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-gray-400 group-hover:bg-green-400 group-hover:translate-x-6 transition-all duration-500 shadow-md"></div>
                    </div>
                 </div>
                 <div className="h-2 w-full bg-white/5 rounded-full overflow-clip">
                    <div className="h-full bg-green-400/80 w-0 group-hover:w-[70%] transition-all duration-1000 ease-out rounded-full shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
                 </div>
                 <div className="flex justify-between text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                   <span>9:00 AM</span>
                   <span>10:00 PM</span>
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Card 5: Promotional Banners */}
          <motion.div variants={cardVariants} className="group relative bg-[#13141A] border border-white/5 rounded-[24px] overflow-clip hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="p-8 pb-0">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-500">
                <FaBullhorn className="text-gray-300 group-hover:text-purple-400 text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Promotional Banners</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-8">
                Display beautiful banners at the top of your menu to highlight offers, sales, seasonal promotions, or featured products.
              </p>
            </div>
            {/* Mini UI */}
            <div className="h-[200px] w-full bg-[#0D0E12] border-t border-white/5 relative overflow-clip flex items-center justify-center px-4">
               <div className="w-[120%] h-24 flex gap-4 group-hover:-translate-x-20 transition-transform duration-[1.5s] ease-in-out">
                 {[1,2,3].map((item, i) => (
                   <div key={item} className={`min-w-[240px] h-full rounded-xl p-4 flex flex-col justify-center border border-white/10 relative overflow-clip ${i%2===0 ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20' : 'bg-gradient-to-r from-accent/20 to-red-500/20'}`}>
                      <div className="w-1/2 h-3 bg-white/80 rounded-full mb-2"></div>
                      <div className="w-3/4 h-2 bg-white/40 rounded-full"></div>
                      <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-white/10 rounded-full blur-md"></div>
                   </div>
                 ))}
               </div>
            </div>
          </motion.div>

          {/* Card 6: Delivery Locations */}
          <motion.div variants={cardVariants} className="group relative bg-[#13141A] border border-white/5 rounded-[24px] overflow-clip hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="p-8 pb-0">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500">
                <FaMapMarkerAlt className="text-gray-300 group-hover:text-blue-400 text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Delivery Locations</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-8">
                Define exactly where your business accepts orders by adding delivery locations, service areas, neighborhoods, or postal zones.
              </p>
            </div>
            {/* Mini UI */}
            <div className="h-[200px] w-full bg-[#0D0E12] border-t border-white/5 relative overflow-clip flex items-center justify-center">
               <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:20px_20px]"></div>
               <div className="relative w-32 h-32 rounded-full border border-blue-500/30 flex items-center justify-center">
                 <div className="absolute inset-0 rounded-full bg-blue-500/10 scale-0 group-hover:scale-150 opacity-100 group-hover:opacity-0 transition-all duration-1000 ease-out repeat-infinite"></div>
                 <div className="absolute inset-0 rounded-full bg-blue-500/20 scale-0 group-hover:scale-100 opacity-100 group-hover:opacity-0 transition-all duration-[1.5s] ease-out delay-300 repeat-infinite"></div>
                 <div className="w-4 h-4 bg-blue-500 rounded-full z-10 shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>
                 {/* Map Pins */}
                 <FaStore className="absolute -top-4 -left-6 text-gray-500 text-lg group-hover:text-white transition-colors delay-100" />
                 <FaMapMarkerAlt className="absolute top-4 -right-8 text-gray-600 text-sm group-hover:text-blue-400 transition-colors delay-200" />
                 <FaMapMarkerAlt className="absolute -bottom-2 left-2 text-gray-700 text-xs group-hover:text-blue-300 transition-colors delay-300" />
               </div>
            </div>
          </motion.div>

          {/* Card 7: Payment Methods */}
          <motion.div variants={cardVariants} className="group relative bg-[#13141A] border border-white/5 rounded-[24px] overflow-clip hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] lg:col-start-1 lg:ml-[16.66%]">
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="p-8 pb-0">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-500">
                <FaWallet className="text-gray-300 group-hover:text-emerald-400 text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Payment Methods</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-8">
                Enable the payment methods that suit your business, including Cash on Delivery, UPI, Cards, Net Banking, or Digital Wallets.
              </p>
            </div>
            {/* Mini UI */}
            <div className="h-[200px] w-full bg-[#0D0E12] border-t border-white/5 relative overflow-clip flex items-center justify-center">
               <div className="relative w-[180px] h-[120px]">
                 {/* Cards stacked */}
                 <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 border border-gray-600 rounded-xl p-3 shadow-lg transform rotate-[-10deg] translate-y-4 translate-x-[-10px] group-hover:translate-y-2 group-hover:rotate-[-5deg] transition-all duration-500 flex flex-col justify-between">
                   <div className="w-6 h-4 bg-gray-500/50 rounded-sm"></div>
                   <div className="w-full h-2 bg-gray-500/30 rounded-full"></div>
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-emerald-900 border border-emerald-500/50 rounded-xl p-4 shadow-[0_10px_30px_rgba(16,185,129,0.3)] transform rotate-[5deg] translate-y-0 translate-x-[10px] group-hover:translate-y-[-10px] group-hover:rotate-[10deg] transition-all duration-500 z-10 flex flex-col justify-between">
                   <div className="flex justify-between items-start">
                     <FaMoneyBillWave className="text-white/70 text-xl" />
                     <div className="w-8 h-5 bg-white/20 rounded-md"></div>
                   </div>
                   <div className="flex gap-2">
                     {[1,2,3,4].map(i => <div key={i} className="w-2 h-2 rounded-full bg-white/40"></div>)}
                   </div>
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Card 8: Stripe Integration */}
          <motion.div variants={cardVariants} className="group relative bg-[#13141A] border border-white/5 rounded-[24px] overflow-clip hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] lg:col-start-2">
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="p-8 pb-0">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-500">
                <FaCreditCard className="text-gray-300 group-hover:text-indigo-400 text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Stripe Integration</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-8">
                Securely connect your Stripe account to receive online payments directly from your customers with a fast, reliable checkout experience.
              </p>
            </div>
            {/* Mini UI */}
            <div className="h-[200px] w-full bg-[#0D0E12] border-t border-white/5 relative overflow-clip flex items-center justify-center">
               <div className="bg-[#1A1C23] border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-4 transform scale-90 group-hover:scale-100 transition-transform duration-500 group-hover:border-indigo-500/30 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] relative">
                 <div className="absolute inset-0 bg-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 <div className="relative">
                   <div className="text-3xl font-black text-white tracking-tighter">stripe</div>
                   <FaCheckCircle className="absolute -top-1 -right-4 text-indigo-400 scale-0 group-hover:scale-100 transition-transform duration-500 delay-200" />
                 </div>
                 <div className="px-4 py-1.5 rounded-full bg-white/5 text-xs font-bold text-gray-400 group-hover:bg-indigo-500/10 group-hover:text-indigo-300 transition-colors duration-500">
                   Connected Successfully
                 </div>
               </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default CustomizeMenu;
