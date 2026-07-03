import React from 'react';

const LaptopMockup = () => {
  return (
    <div className="w-[800px] flex flex-col items-center">
      {/* Screen Frame */}
      <div className="w-full h-[480px] bg-black rounded-t-[20px] p-2 sm:p-3 shadow-2xl relative">
        {/* Screen Display */}
        <div className="w-full h-full bg-[#FAFAFA] rounded-t-[10px] rounded-b-[4px] overflow-hidden flex flex-col relative">
          
          {/* Top Bar (Mock Browser/App Header) */}
          <div className="h-12 bg-white border-b border-gray-100 flex items-center justify-between px-6 shrink-0 z-10">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-accent rounded-md"></div>
              <div className="font-bold text-sm text-gray-900 tracking-tight">FRESH & TASTY</div>
            </div>
            <div className="flex items-center gap-6 text-xs font-semibold text-gray-500">
              <div className="hover:text-accent cursor-pointer">Menu</div>
              <div className="hover:text-accent cursor-pointer">About</div>
              <div className="hover:text-accent cursor-pointer">Contact</div>
            </div>
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded-full bg-gray-100"></div>
              <div className="px-4 py-1 bg-gray-900 text-white text-xs font-bold rounded-full">Login</div>
            </div>
          </div>

          {/* Scrollable Content Area */}
          <div className="flex-1 overflow-hidden relative bg-[#FAFAFA]">
            {/* Cover Image Placeholder */}
            <div className="h-40 bg-gradient-to-r from-gray-800 to-gray-900 relative">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h2 className="text-3xl font-serif italic mb-2">Artisan Kitchen</h2>
                <p className="text-xs text-gray-300">Experience the taste of perfection</p>
              </div>
            </div>

            {/* Menu Body */}
            <div className="px-8 py-6">
              {/* Categories */}
              <div className="flex gap-3 mb-6">
                <div className="px-4 py-1.5 bg-accent text-white text-xs font-bold rounded-full shadow-sm shadow-accent/20">All Items</div>
                <div className="px-4 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-bold rounded-full">Starters</div>
                <div className="px-4 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-bold rounded-full">Mains</div>
                <div className="px-4 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-bold rounded-full">Desserts</div>
              </div>

              {/* Grid of Items */}
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex gap-4">
                    <div className="w-20 h-20 bg-gray-100 rounded-lg shrink-0 overflow-hidden relative">
                       {/* Food placeholder visual */}
                       <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-red-50"></div>
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-red-200 rounded-full opacity-50"></div>
                    </div>
                    <div className="flex flex-col justify-between flex-1 py-1">
                      <div>
                        <div className="font-bold text-sm text-gray-900">Truffle Pasta</div>
                        <div className="text-[10px] text-gray-500 line-clamp-2 mt-1">Handmade pasta with black truffle shavings, parmesan, and butter.</div>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <div className="font-bold text-sm text-accent">$24.00</div>
                        <div className="w-6 h-6 bg-gray-900 text-white rounded-md flex items-center justify-center text-xs font-bold shadow-sm">+</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Laptop Base/Keyboard Deck */}
      <div className="w-[110%] h-4 bg-gray-300 rounded-b-xl relative z-20 shadow-xl border-t border-gray-400">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-gray-400 rounded-b-md"></div>
      </div>
      <div className="w-[110%] h-2 bg-gray-400 rounded-b-[20px] shadow-2xl"></div>
    </div>
  );
};

export default LaptopMockup;
