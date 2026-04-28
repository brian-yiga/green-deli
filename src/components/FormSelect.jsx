import React from 'react';

export default function FormSelect({ label, options = [], ...props }) {
  return (
    <div className="w-full flex flex-col gap-1.5 relative">
      {label && (
        <label className="font-sans text-[10px] uppercase tracking-widest text-deli-charcoal/50 font-bold ml-1">
          {label}
        </label>
      )}
      <div className="relative">
        <select 
          className="w-full bg-transparent border-b border-deli-charcoal/20 py-3 px-1 font-sans text-sm focus:outline-none focus:border-deli-red transition-colors appearance-none cursor-pointer"
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        
        {/* Custom Chevron Icon */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-deli-charcoal/40">
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}