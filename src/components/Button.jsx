import React from 'react';

export default function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) {
  // Base styles: Mobile-first height, center text, uppercase tracking
  const baseStyles = "w-full py-4 px-6 text-[11px] font-sans font-bold uppercase tracking-[0.25em] transition-all duration-300 active:scale-[0.98]";
  
  // Variant styles from your design
  const variants = {
    primary: "bg-deli-red text-white hover:bg-deli-red/90",
    secondary: "bg-transparent text-deli-charcoal border border-deli-charcoal/20 hover:border-deli-red hover:text-deli-red",
    outline: "bg-transparent text-white border border-white hover:bg-white hover:text-deli-red"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}