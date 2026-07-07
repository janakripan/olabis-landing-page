import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

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
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      align: 'center',
      loop: true,
      containScroll: 'trimSnaps',
      watchDrag: false
    },
    [Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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
          
          <div className="w-full relative group pt-6 pb-4">
            <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]" ref={emblaRef}>
              <div className="flex gap-6 sm:gap-10 px-8 sm:px-12">
                {logos.map((logo, index) => (
                  <div key={index} className="flex-none flex items-center justify-center">
                    <img 
                      src={`/logo-carousal/${logo}`} 
                      alt={`Trusted Brand ${index + 1}`} 
                      className="w-[160px] h-[100px] sm:w-[200px] sm:h-[120px] object-contain transition-transform duration-300 hover:scale-105 select-none"
                      draggable="false"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={scrollPrev}
              className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-r from-background to-transparent flex items-center justify-start pl-0 sm:pl-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 text-text-secondary hover:text-text-primary cursor-pointer"
              aria-label="Previous logo"
            >
              <FiChevronLeft size={48} className="drop-shadow-sm" />
            </button>
            
            <button 
              onClick={scrollNext}
              className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-l from-background to-transparent flex items-center justify-end pr-0 sm:pr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 text-text-secondary hover:text-text-primary cursor-pointer"
              aria-label="Next logo"
            >
              <FiChevronRight size={48} className="drop-shadow-sm" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBrands;
