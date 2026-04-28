import React from 'react';

export default function FormInput({ label, type = 'text', placeholder, ...props }) {
  return (
    <div className="w-full flex flex-col gap-1.5">
      {label && (
        <label className="font-sans text-[10px] uppercase tracking-widest text-deli-charcoal/50 font-bold ml-1">
          {label}
        </label>
      )}
      <input 
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-deli-charcoal/20 py-3 px-1 font-sans text-sm focus:outline-none focus:border-deli-red transition-colors placeholder:text-deli-charcoal/20"
        {...props}
      />
    </div>
  );
}