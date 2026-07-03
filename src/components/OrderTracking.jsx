import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const OrderTracking = () => {
  return (
    <section className="py-24 bg-surface-secondary border-t border-border-theme overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Column: Copy */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="text-4xl lg:text-5xl font-extrabold text-text-primary leading-[1.1] mb-6 tracking-tight">
              Flawless communication from <span className="text-accent">table to kitchen.</span>
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Managing operations has never been more elegant. Review ordered items, sub-items, and final bills directly from the merchant dashboard while the Kitchen Display System updates in real-time.
            </p>
            
            <div className="space-y-6 max-w-md mx-auto lg:mx-0 text-left">
              {[
                { title: "Detailed Cart State", desc: "View every modifier and sub-item selected by guests." },
                { title: "One-Tap Processing", desc: "Process payments rapidly to turn tables faster." },
                { title: "Expense Analytics", desc: "Monitor voids, discounts, and high-margin sales daily." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <FaCheckCircle className="w-6 h-6 text-status-success flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-text-primary">{item.title}</h4>
                    <p className="text-sm text-text-secondary mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Vertical Phone Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex-1 w-full flex justify-center lg:justify-start"
          >
            <div className="relative w-[300px] sm:w-[340px]">
              {/* Decorative Circle Behind */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl z-0"></div>
              
              {/* Floating KDS Alert */}
              <motion.div
                className="absolute -right-8 lg:-right-24 top-32 z-20 bg-surface rounded-2xl p-4 border border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-md hidden sm:block w-56"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-status-warning-bg flex items-center justify-center">
                    <div className="w-3 h-3 bg-status-warning rounded-full"></div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-text-primary">KDS Alert</div>
                    <div className="text-[10px] text-text-secondary">Just now</div>
                  </div>
                </div>
                <div className="text-sm text-text-primary font-medium">Table 04 order received at Hot Line.</div>
              </motion.div>

              {/* Phone Frame */}
              <div className="bg-surface rounded-[2.5rem] border-[8px] border-black shadow-[var(--shadow-card)] overflow-hidden relative h-[650px] w-full z-10">
                {/* Notch */}
                <div className="absolute top-0 inset-x-0 h-5 w-32 mx-auto bg-black rounded-b-xl z-20"></div>
                
                {/* App Interface */}
                <div className="w-full h-full flex flex-col pt-10 pb-6 bg-background">
                  
                  {/* Header */}
                  <div className="px-5 pb-4 border-b border-white/5 bg-surface flex justify-between items-center shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-surface-secondary flex items-center justify-center text-text-secondary">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                      </svg>
                    </div>
                    <div className="font-bold text-text-primary">Checkout Table 04</div>
                    <div className="w-8 h-8"></div>
                  </div>

                  {/* Cart Items */}
                  <div className="flex-1 overflow-y-auto p-5">
                    <div className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-4">Guest Order</div>
                    
                    <div className="flex flex-col gap-4">
                      {/* Item 1 */}
                      <div className="bg-surface p-4 rounded-2xl shadow-sm border border-white/5">
                        <div className="flex justify-between items-start mb-2">
                          <div className="font-bold text-text-primary">Wagyu Steak</div>
                          <div className="font-bold text-text-primary">$45.00</div>
                        </div>
                        <div className="text-xs text-text-secondary mb-2">Medium Rare, Peppercorn Sauce</div>
                        <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/5 text-xs">
                          <div className="text-text-secondary">Qty: 1</div>
                          <div className="text-accent font-semibold cursor-pointer">Edit</div>
                        </div>
                      </div>

                      {/* Item 2 */}
                      <div className="bg-surface p-4 rounded-2xl shadow-sm border border-white/5">
                        <div className="flex justify-between items-start mb-2">
                          <div className="font-bold text-text-primary">Truffle Fries</div>
                          <div className="font-bold text-text-primary">$12.00</div>
                        </div>
                        <div className="text-xs text-text-secondary mb-2">Extra Parmesan</div>
                        <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/5 text-xs">
                          <div className="text-text-secondary">Qty: 2</div>
                          <div className="text-accent font-semibold cursor-pointer">Edit</div>
                        </div>
                      </div>
                      
                      {/* Item 3 */}
                      <div className="bg-surface p-4 rounded-2xl shadow-sm border border-white/5 opacity-60">
                        <div className="flex justify-between items-start mb-2">
                          <div className="font-bold text-text-secondary line-through">Sparkling Water</div>
                          <div className="font-bold text-text-secondary line-through">$5.00</div>
                        </div>
                        <div className="text-xs text-status-danger font-semibold mb-2">Voided by server</div>
                      </div>
                    </div>
                  </div>

                  {/* Total & Action */}
                  <div className="bg-surface p-5 rounded-t-3xl shadow-[0_-10px_30px_rgba(0,0,0,0.25)] border-t border-white/5">
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-text-secondary">Subtotal</div>
                      <div className="font-medium text-text-primary">$69.00</div>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-text-secondary">Tax (8%)</div>
                      <div className="font-medium text-text-primary">$5.52</div>
                    </div>
                    <div className="flex justify-between items-center mb-6">
                      <div className="text-lg font-bold text-text-primary">Total</div>
                      <div className="text-2xl font-black text-accent">$74.52</div>
                    </div>
                    
                    <button className="w-full py-4 bg-accent hover:bg-accent-hover active:bg-accent-active text-white rounded-xl font-bold text-center shadow-[var(--shadow-btn)] transition-all">
                      Process Payment
                    </button>
                  </div>
                  
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default OrderTracking;
