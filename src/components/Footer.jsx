import React from 'react';
import { MatrixGridIcon } from './CustomIcons';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-background pt-16 pb-8 border-t border-border-theme">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-accent text-white p-1.5 rounded-md">
                <MatrixGridIcon className="w-4 h-4" />
              </div>
              <span className="font-bold text-lg tracking-tight text-text-primary">
                ScannTek <span className="text-text-secondary font-medium">DigiMenu</span>
              </span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Empowering restaurants to digitize their dining experience, reduce overheads, and turn tables faster.
            </p>
          </div>

          {/* Download App Banner Block */}
          <div className="bg-surface p-6 rounded-2xl border border-white/5 flex-1 max-w-md w-full">
            <h4 className="font-bold text-text-primary mb-2">Get the Manager App</h4>
            <p className="text-text-secondary text-sm mb-4">Manage orders and KOT directly from your pocket.</p>
            <div className="flex gap-3">
              <button className="flex-1 bg-transparent border border-[#9C5D31] hover:bg-accent/12 hover:border-accent text-text-primary rounded-xl py-2 px-4 flex items-center justify-center gap-2 transition-colors">
                <FaApple className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-[10px] leading-none text-text-secondary">Download on the</div>
                  <div className="text-sm font-bold leading-tight">App Store</div>
                </div>
              </button>
              <button className="flex-1 bg-transparent border border-[#9C5D31] hover:bg-accent/12 hover:border-accent text-text-primary rounded-xl py-2 px-4 flex items-center justify-center gap-2 transition-colors">
                <FaGooglePlay className="w-4 h-4 text-accent" />
                <div className="text-left">
                  <div className="text-[10px] leading-none text-text-secondary">GET IT ON</div>
                  <div className="text-sm font-bold leading-tight">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-border-theme gap-4">
          <div className="text-sm text-text-secondary">
            &copy; {new Date().getFullYear()} ScannTek.com. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-text-secondary">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Cookie Guidelines</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
