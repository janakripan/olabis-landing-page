import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaGlobe } from 'react-icons/fa';

const QRPanel = () => {
  return (
    <div className="w-full h-full text-white flex flex-col justify-between">
      
      {/* Header: Logo */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          {/* Chef Hat Icon */}
          <svg className="w-6 h-6 text-[#1A1A1A]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.89 10.74c.07-.24.11-.5.11-.74 0-1.66-1.34-3-3-3-.46 0-.89.11-1.28.29-.6-1.39-2.02-2.29-3.72-2.29-1.7 0-3.12.9-3.72 2.29-.39-.18-.82-.29-1.28-.29-1.66 0-3 1.34-3 3 0 .24.04.5.11.74C2.52 11.58 1.5 13.17 1.5 15v5h19v-5c0-1.83-1.02-3.42-2.61-4.26z" />
          </svg>
        </div>
        <span className="font-bold text-xl tracking-wide uppercase">YOUR LOGO</span>
      </div>

      {/* Main Content: QR & Text */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mt-8 mb-auto">
        
        {/* Realistic QR Code Mockup */}
        <div className="w-48 h-48 lg:w-56 lg:h-56 bg-white rounded-[24px] p-4 shadow-2xl relative shrink-0 overflow-hidden">
          
          {/* Top Left Corner */}
          <div className="absolute top-4 left-4 w-12 h-12 border-[5px] border-[#1A1A1A] rounded-lg flex items-center justify-center bg-white z-10">
            <div className="w-[50%] h-[50%] bg-[#4CAF50] rounded-sm"></div>
          </div>
          
          {/* Top Right Corner */}
          <div className="absolute top-4 right-4 w-12 h-12 border-[5px] border-[#1A1A1A] rounded-lg flex items-center justify-center bg-white z-10">
            <div className="w-[50%] h-[50%] bg-[#4CAF50] rounded-sm"></div>
          </div>

          {/* Bottom Left Corner */}
          <div className="absolute bottom-4 left-4 w-12 h-12 border-[5px] border-[#1A1A1A] rounded-lg flex items-center justify-center bg-white z-10">
            <div className="w-[50%] h-[50%] bg-[#4CAF50] rounded-sm"></div>
          </div>
          
          {/* Realistic QR Pattern (CSS Grid) */}
          <div className="absolute inset-4 grid grid-cols-12 grid-rows-12 gap-[2px] z-0">
             {[...Array(144)].map((_, i) => {
               // Leave empty spaces for the corners
               const col = i % 12;
               const row = Math.floor(i / 12);
               if ((row < 4 && col < 4) || (row < 4 && col > 7) || (row > 7 && col < 4)) return <div key={i} />;
               
               // Random fill for the rest to simulate data
               return <div key={i} className={`${Math.random() > 0.4 ? 'bg-[#1A1A1A]' : 'bg-transparent'} rounded-[1px]`}></div>;
             })}
          </div>
        </div>

        {/* Text Details */}
        <div className="text-center lg:text-left flex-1 max-w-[280px]">
          <h3 className="text-[54px] lg:text-[64px] font-black tracking-tight leading-none mb-3">QR MENU</h3>
          <p className="text-xl lg:text-2xl text-gray-200 leading-tight">
            Share your menu the<br/>way you like to!
          </p>
        </div>
      </div>

      {/* Footer: Social Icons */}
      <div className="flex gap-3 mt-12 justify-center lg:justify-start">
        {[FaInstagram, FaFacebookF, FaTwitter, FaGlobe].map((Icon, i) => (
          <div key={i} className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer text-[#1A1A1A]">
             <Icon className="w-5 h-5" />
          </div>
        ))}
      </div>

    </div>
  );
};

export default QRPanel;
