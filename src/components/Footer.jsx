import React from 'react';
import Image from 'next/image';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-8 border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          {/* Brand */}
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
            <p className="text-gray-500 text-[15px] leading-relaxed mb-6 font-medium">
              Empowering restaurants and retail businesses to digitize their customer experience, reduce overheads, and streamline operations.
            </p>
          </div>

          {/* Download App Banner Block */}
          <div className="bg-[#FAFAFA] p-8 rounded-[24px] border border-gray-100 flex-1 max-w-md w-full shadow-sm">
            <h4 className="font-bold text-gray-900 mb-2 text-lg">Get the Manager App</h4>
            <p className="text-gray-500 text-sm mb-6">Manage orders and your digital menu directly from your pocket.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex-1 bg-white border border-gray-200 hover:border-[#BB2117] hover:shadow-md text-gray-900 rounded-xl py-2.5 px-4 flex items-center justify-center gap-3 transition-all group">
                <FaApple className="w-6 h-6 group-hover:text-[#BB2117] transition-colors" />
                <div className="text-left">
                  <div className="text-[10px] leading-none text-gray-500">Download on the</div>
                  <div className="text-sm font-bold leading-tight">App Store</div>
                </div>
              </button>
              <button className="flex-1 bg-white border border-gray-200 hover:border-[#BB2117] hover:shadow-md text-gray-900 rounded-xl py-2.5 px-4 flex items-center justify-center gap-3 transition-all group">
                <FaGooglePlay className="w-5 h-5 group-hover:text-[#BB2117] transition-colors" />
                <div className="text-left">
                  <div className="text-[10px] leading-none text-gray-500">GET IT ON</div>
                  <div className="text-sm font-bold leading-tight">Google Play</div>
                </div>
              </button>
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
