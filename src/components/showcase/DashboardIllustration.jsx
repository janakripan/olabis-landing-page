import React from 'react';

const DashboardIllustration = () => {
  return (
    <div className="w-full h-full p-8 md:p-12 relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="relative z-10 h-full flex flex-col justify-center">
        {/* Dashboard Card 1 */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 origin-bottom-right mb-6">
          <div className="flex justify-between items-center mb-6">
            <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
              <div className="w-6 h-6 bg-accent rounded-sm"></div>
            </div>
            <div className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-white/80">+24.5%</div>
          </div>
          <div className="w-1/2 h-4 bg-white/20 rounded-md mb-2"></div>
          <div className="w-3/4 h-8 bg-white/40 rounded-md"></div>
        </div>

        {/* Dashboard Card 2 */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500 origin-bottom-left flex gap-4 items-end h-40">
           {/* Abstract Bar Chart */}
           {[40, 70, 45, 90, 65, 85].map((h, i) => (
             <div key={i} className="flex-1 bg-white/10 rounded-t-md hover:bg-accent/40 transition-colors" style={{ height: `${h}%` }}>
               {i === 3 && <div className="w-full h-full bg-accent rounded-t-md"></div>}
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardIllustration;
