import React from 'react';

const ChiliIcon = ({ active }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={`w-4 h-4 md:w-5 md:h-5 transition-colors duration-300 ${active ? 'fill-deli-red' : 'fill-deli-charcoal/10'}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.64 5.23c-.66-.45-1.57-.33-2.11.27l-.46.52c-.11.13-.25.21-.41.24-.16.03-.32-.01-.45-.1l-1.34-1.01c-.35-.26-.82-.28-1.2-.05-.38.23-.58.66-.49 1.1l.24.96c.04.16.02.33-.06.47-.08.14-.21.24-.36.29l-.95.32c-.44.15-.74.55-.77 1.01-.03.46.21.89.6 1.15l.8.54c.14.1.23.25.26.41.03.16-.01.33-.1.46l-.52.68c-.26.35-.28.82-.05 1.2.23.38.66.58 1.1.49l.96-.24c.16-.04.33-.02.47.06.14.08.24.21.29.36l.32.95c.15.44.55.74 1.01.77.46.03.89-.21 1.15-.6l1.24-1.87c1.37-2.06 1.4-4.73.08-6.82z" />
  </svg>
);

export default function HeatScale({ rating = 0, label = "Heat Level" }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <ChiliIcon key={i} active={i < rating} />
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