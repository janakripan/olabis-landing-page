import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-8 border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          {/* Brand & Socials */}
          <div className="max-w-sm">
            <div className="mb-6">
              <Image 
                src="/olabis.png" 
                alt="Olabis Digital Menu" 
                width={140} 
                height={40} 
                className="w-auto h-8 object-contain"
              />
            </div>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-8 font-medium">
              Empowering restaurants and retail businesses to digitize their customer experience, reduce overheads, and streamline operations.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-[#BB2117] hover:text-white transition-all shadow-sm">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-[#BB2117] hover:text-white transition-all shadow-sm">
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-[#BB2117] hover:text-white transition-all shadow-sm">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-[#BB2117] hover:text-white transition-all shadow-sm">
                <FaLinkedinIn className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="flex flex-wrap md:flex-nowrap gap-12 lg:gap-24">
            
            {/* Explore Column */}
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-gray-900 mb-2">Explore</h4>
              <a href="#features" className="text-gray-500 hover:text-[#BB2117] text-sm font-medium transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-500 hover:text-[#BB2117] text-sm font-medium transition-colors">How It Works</a>
              <a href="#preview-section" className="text-gray-500 hover:text-[#BB2117] text-sm font-medium transition-colors">Live Previews</a>
            </div>

            {/* Connect Column */}
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-gray-900 mb-2">Connect</h4>
              <a href="#testimonials" className="text-gray-500 hover:text-[#BB2117] text-sm font-medium transition-colors">Testimonials</a>
              <a href="#contact" className="text-gray-500 hover:text-[#BB2117] text-sm font-medium transition-colors">Contact Us</a>
            </div>

          </div>
        </div>

        {/* Bottom Strip */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-100 gap-4">
          <div className="text-sm text-gray-400 font-medium">
            &copy; {new Date().getFullYear()} Olabis Digital Menu. All rights reserved.
          </div>
          <div className="flex gap-8 text-sm text-gray-500 font-medium">
            <a href="#" className="hover:text-[#BB2117] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#BB2117] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#BB2117] transition-colors">Cookie Guidelines</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
