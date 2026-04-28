import React from 'react';

export default function Badge({ children, variant = 'default', className = '' }) {
  const baseStyles = "px-2.5 py-1 text-[8px] md:text-[9px] font-sans font-bold uppercase tracking-[0.15em] rounded-full inline-flex items-center justify-center border";
  
  const variants = {
    default: "bg-transparent text-deli-charcoal border-deli-charcoal/20",
    organic: "bg-transparent text-green-700 border-green-700/20",
    hot: "bg-deli-red text-white border-deli-red",
    dark: "bg-deli-charcoal text-white border-deli-charcoal"
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}