import React from 'react';

const TabletMockup = ({ imageSrc = "/hero/tablet-menu-img.png" }) => {
  return (
    <div className="w-[300px] lg:w-[360px] aspect-[4/2.8] bg-[#111] rounded-[20px] lg:rounded-[24px] p-2 lg:p-2.5 shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative border-[3px] lg:border-[4px] border-gray-800">
      {/* Screen */}
      <div className="w-full h-full bg-white rounded-[14px] lg:rounded-[16px] overflow-hidden relative">
        <img src={imageSrc} alt="Tablet Menu" className="w-full h-full object-cover object-top" />
      </div>
    </div>
  );
};

export default TabletMockup;
