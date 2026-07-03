import React from 'react';
import { motion } from 'framer-motion';

const DarkContrast = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px] translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Column: Tilted iPhone & Tablet Showcase */}
          <div className="flex-1 w-full flex justify-center lg:justify-end perspective-1000 relative py-12 lg:py-0">
            
            {/* Background Tablet Mockup */}
            <motion.div
               initial={{ opacity: 0, x: -80, y: 50, rotate: 2 }}
               whileInView={{ opacity: 1, x: -60, y: 20, rotate: 2 }}
               animate={{ y: [20, 10, 20] }}
               viewport={{ once: true }}
               transition={{ duration: 1, ease: "easeOut", y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
               className="absolute z-0 hidden md:block w-[450px] lg:w-[500px] h-[320px] bg-surface rounded-3xl border-8 border-black shadow-[var(--shadow-card)] overflow-hidden left-0 lg:-left-20 top-1/2 -translate-y-1/2"
            >
               <div className="w-full h-full bg-background p-4 flex gap-4">
                  <div className="w-1/3 h-full bg-surface-secondary rounded-xl p-3 flex flex-col gap-3 border border-white/5">
                     <div className="w-full h-8 bg-surface rounded-lg mb-2"></div>
                     <div className="w-3/4 h-4 bg-surface rounded-md"></div>
                     <div className="w-5/6 h-4 bg-surface rounded-md"></div>
                     <div className="w-full h-4 bg-surface rounded-md"></div>
                     <div className="w-2/3 h-4 bg-surface rounded-md"></div>
                     <div className="mt-auto w-full h-10 bg-accent rounded-lg opacity-80"></div>
                  </div>
                  <div className="flex-1 h-full bg-surface-secondary rounded-xl p-4 border border-white/5 flex flex-col">
                     <div className="flex justify-between items-center mb-6">
                        <div className="w-32 h-6 bg-surface rounded-md"></div>
                        <div className="w-8 h-8 bg-accent/20 rounded-full"></div>
                     </div>
                     <div className="w-full h-24 bg-gradient-to-br from-accent/80 to-accent-active rounded-xl border border-white/5 mb-4 shadow-lg shadow-accent/10"></div>
                     <div className="flex gap-4 flex-1">
                        <div className="flex-1 bg-surface rounded-xl border border-white/5"></div>
                        <div className="flex-1 bg-surface rounded-xl border border-white/5"></div>
                     </div>
                  </div>
               </div>
            </motion.div>

            {/* Foreground Phone Frame */}
            <motion.div 
               initial={{ opacity: 0, x: -30, rotate: -5 }}
               whileInView={{ opacity: 1, x: 0, rotate: -5 }}
               animate={{ y: [0, -10, 0] }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, ease: "easeOut", delay: 0.2, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
               className="relative w-[280px] sm:w-[320px] transform hover:rotate-0 transition-transform duration-700 ease-in-out z-10"
            >
              <div className="bg-surface rounded-[2.5rem] border-[6px] border-black shadow-[var(--shadow-card)] overflow-hidden relative h-[600px] sm:h-[650px] w-full">
                {/* Dynamic Island / Notch */}
                <div className="absolute top-2 inset-x-0 h-6 w-32 mx-auto bg-black rounded-full z-20"></div>
                
                {/* Screen Content */}
                <div className="w-full h-full bg-background flex flex-col pt-12 pb-6 px-5 text-text-primary">
                  
                  {/* Header */}
                  <div className="flex justify-between items-center mb-8">
                    <div className="text-text-secondary text-sm font-medium">Dashboard</div>
                    <div className="w-8 h-8 rounded-full bg-surface-secondary border border-border-theme"></div>
                  </div>

                  {/* Balance Card */}
                  <div className="bg-gradient-to-br from-accent to-accent-active rounded-3xl p-6 mb-6 shadow-lg shadow-accent/20">
                    <div className="text-white/80 text-sm font-medium mb-1">Total Balance</div>
                    <div className="text-4xl font-bold tracking-tight mb-4 text-white">$42,593.00</div>
                    <div className="flex justify-between items-end">
                      <div className="text-xs text-white/70">Updated just now</div>
                      <div className="px-2 py-1 bg-white/20 rounded-md text-xs font-bold backdrop-blur-sm text-white">+14.5%</div>
                    </div>
                  </div>

                  {/* Ordering Tracking */}
                  <div className="flex-1 bg-surface rounded-3xl p-5 border border-white/5 flex flex-col">
                    <div className="text-sm font-semibold mb-4 text-text-primary">Live Kitchen Orders</div>
                    
                    <div className="flex flex-col gap-3 flex-1 overflow-hidden relative">
                      {[
                        { id: "#1042", table: "T-04", status: "Cooking", color: "text-status-warning", bg: "bg-status-warning-bg" },
                        { id: "#1043", table: "T-12", status: "Pending", color: "text-text-secondary", bg: "bg-text-secondary/10" },
                        { id: "#1044", table: "T-07", status: "Ready", color: "text-status-success", bg: "bg-status-success-bg" }
                      ].map((order, i) => (
                        <div key={i} className="flex justify-between items-center p-3 rounded-2xl bg-surface-secondary border border-white/5">
                          <div>
                            <div className="font-bold text-sm text-text-primary">{order.id}</div>
                            <div className="text-xs text-text-secondary">Table {order.table}</div>
                          </div>
                          <div className={`text-xs font-bold px-3 py-1.5 rounded-lg ${order.color} ${order.bg}`}>
                            {order.status}
                          </div>
                        </div>
                      ))}
                      
                      <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-surface to-transparent"></div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Copy */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="text-4xl lg:text-5xl font-extrabold text-text-primary leading-[1.1] mb-6 tracking-tight">
              The easiest way to view your <span className="text-accent">total balance.</span>
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Our advanced Kitchen Order Ticket (KOT) bridge automatically communicates guest scans directly to the hot kitchen tables. Watch your revenue grow in real-time as orders are placed seamlessly from smartphones.
            </p>
            
            <ul className="flex flex-col gap-4 text-left max-w-md mx-auto lg:mx-0">
              {[
                "Instant syncing between tables and kitchen",
                "Automated revenue tracking and insights",
                "Reduce human error by 99%"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-text-secondary">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-medium text-text-primary">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DarkContrast;
