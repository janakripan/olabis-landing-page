import React from 'react';

export const MatrixGridIcon = ({ className = "w-6 h-6", ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M4 4H10V10H4V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 14H10V20H4V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 4H20V10H14V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 14H16V16H14V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 14H20V16H18V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 18H16V20H14V18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 18H20V20H18V18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const DiningPlateIcon = ({ className = "w-6 h-6", ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2"/>
    <path d="M12 2C6.47715 2 2 6.47715 2 12" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const ToggleIcon = ({ className = "w-6 h-6", active = false, ...props }) => (
  <svg viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <rect width="40" height="24" rx="12" fill={active ? "#1E56FD" : "#CBD5E1"}/>
    <circle cx={active ? "28" : "12"} cy="12" r="10" fill="white" style={{ transition: 'cx 0.3s' }}/>
  </svg>
);

// Custom QR Frame Matrix Icon
export const QrMatrixIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <path d="M14 14h1v1h-1zM18 14h3v3h-3zM14 18h3v3h-3zM20 20h1v1h-1z" />
  </svg>
);

// Custom Thumb Touch Optimization Icon
export const MobileTouchIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <path d="M12 18h.01" />
    <path d="M11 10a2 2 0 1 0 2 2" />
  </svg>
);
