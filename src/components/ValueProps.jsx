import React from 'react';
import { motion } from 'framer-motion';
import { FaMobileAlt, FaSyncAlt, FaPrint, FaChartPie } from 'react-icons/fa';

const features = [
  {
    title: "Built for Mobile",
    description: "Zero app downloads. Opens instantly via Safari or Chrome.",
    icon: FaMobileAlt,
    color: "text-status-info",
    bg: "bg-status-info-bg"
  },
  {
    title: "Real-Time Updates",
    description: "Modify prices or hide dishes instantly on your control dashboard.",
    icon: FaSyncAlt,
    color: "text-status-warning",
    bg: "bg-status-warning-bg"
  },
  {
    title: "Zero Printing Costs",
    description: "Eradicate physical printing bills when prices or dishes change.",
    icon: FaPrint,
    color: "text-status-success",
    bg: "bg-status-success-bg"
  },
  {
    title: "Mouth-Watering Analytics",
    description: "Monitor high-margin dishes via customer choice patterns.",
    icon: FaChartPie,
    color: "text-status-danger",
    bg: "bg-status-danger-bg"
  }
];

const ValueProps = () => {
  return (
    <section id="features" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-extrabold text-text-primary mb-6 tracking-tight"
          >
            The complete operating system <br className="hidden md:block" /> for modern dining.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            Everything you need to run your restaurant, from digital menus to kitchen displays, beautifully integrated into one powerful platform.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative bg-surface rounded-[16px] p-8 shadow-sm transition-all border border-white/5 hover:border-accent/40 flex flex-col items-start overflow-hidden"
            >
              {/* Premium Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-all duration-500 z-0"></div>
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">{feature.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ValueProps;
