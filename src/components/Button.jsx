import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ children, variant = 'primary', to, onClick, className = '' }) {
  const baseStyles = "px-8 py-4 font-sans text-[12px] font-bold uppercase tracking-[0.2em] transition-all duration-300 text-center";
  
  const variants = {
    primary: "bg-deli-red text-deli-cream hover:text-white hover:bg-red-400 shadow-lg hover:shadow-red-900/20",
    outline: "border border-white text-white hover:bg-white hover:text-deli-charcoal",
    secondary: "bg-deli-charcoal text-white hover:bg-deli-red"
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  // If "to" prop exists, render as a Link for routing
  if (to) {
    return (
      <Link to={to} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}