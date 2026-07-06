import React from 'react';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

const logos = [
  "ABUHAIL RESTAURANT.png",
  "AlZamani (2).png",
  "Burger_Logo (1).png",
  "Delight Restaurant_02.png",
  "Hill Bake (3).png",
  "LOGO NOOR.jpg",
  "MH_logo (1).png",
  "chicknwrld.png",
  "hgf.png"
];

const TrustedBrands = () => {
  return (
    <section className="py-12 bg-background border-b border-border-theme overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center gap-8 relative"
        >
          <p className="text-sm font-semibold text-text-secondary uppercase tracking-widest text-center">
            Trusted by top retail and restaurant brands
          </p>
          
          <div className="w-full relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] -webkit-[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] pt-6 pb-2">
            <Marquee speed={30} gradient={false} pauseOnHover={true}>
              {logos.map((logo, index) => (
                <div key={index} className="mx-8 lg:mx-12 flex items-center justify-center">
                  <img 
                    src={`/logo-carousal/${logo}`} 
                    alt={`Trusted Brand ${index + 1}`} 
                    className="w-[140px] h-[90px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBrands;
