import React from 'react';

const PotIcon = ({ active }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={`w-4 h-4 md:w-5 md:h-5 ${active ? 'fill-deli-charcoal' : 'fill-deli-charcoal/10'}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5 10c0-2.209 1.791-4 4-4h6c2.209 0 4 1.791 4 4v7c0 1.105-.895 2-2 2H7c-1.105 0-2-.895-2-2v-7zm12-7H7c-.552 0-1 .448-1 1s.448 1 1 1h10c.552 0 1-.448 1-1s-.448-1-1-1z" />
  </svg>
);

export default function FlavorComplexity({ rating = 0, label = "Complexity" }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <PotIcon key={i} active={i < rating} />
        ))}
      </div>
      {label && (
        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-deli-charcoal/40">
          {label}
        </span>
      )}
    </div>
  );
}