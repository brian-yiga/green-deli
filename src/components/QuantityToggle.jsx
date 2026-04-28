import React from 'react';

export default function QuantityToggle({ quantity = 1, onIncrease, onDecrease }) {
  return (
    <div className="inline-flex items-center border border-deli-charcoal/10 rounded-full px-2 py-1 bg-white shadow-sm">
      <button 
        onClick={onDecrease}
        className="w-8 h-8 flex items-center justify-center text-deli-charcoal/50 hover:text-deli-red transition-colors"
        aria-label="Decrease quantity"
      >
        <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>
      
      <span className="w-8 text-center font-sans text-xs font-bold text-deli-charcoal">
        {quantity}
      </span>
      
      <button 
        onClick={onIncrease}
        className="w-8 h-8 flex items-center justify-center text-deli-charcoal/50 hover:text-deli-red transition-colors"
        aria-label="Increase quantity"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>
    </div>
  );
}