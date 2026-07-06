import React from 'react';

const PhoneMockup = ({ imageSrc = "/hero/mobile-menu-img.png" }) => {
  return (
    <div className="w-[110px] lg:w-[130px] aspect-[1/2.1] bg-[#111] rounded-[18px] lg:rounded-[24px] p-1.5 shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative border-[3px] border-gray-800">
      {/* Notch / Dynamic Island */}
      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-8 lg:w-10 h-2.5 bg-black rounded-full z-20"></div>

      {/* Screen */}
      <div className="w-full h-full bg-white rounded-[14px] lg:rounded-[18px] overflow-hidden relative">
        <img src={imageSrc} alt="Mobile Menu" className="w-full h-full object-cover object-top" />
      </div>
    </div>
  );
};

export default PhoneMockup;
