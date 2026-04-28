import React from 'react';

export default function CategoryTile({ title, image, itemCount }) {
  return (
    <div className="group relative aspect-square w-full overflow-hidden bg-deli-charcoal rounded-3xl cursor-pointer">
      {/* Background Image with Overlay */}
      <img 
        src={image} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-deli-charcoal/80 via-transparent to-transparent" />

      {/* Text Content */}
      <div className="absolute bottom-6 left-6 right-6">
        <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-deli-red mb-1 block">
          {itemCount} Products
        </span>
        <h3 className="font-display text-2xl md:text-3xl text-white uppercase leading-none">
          {title}
        </h3>
        
        {/* Subtle "Shop Now" link that appears on hover for desktop */}
        <div className="mt-4 flex items-center gap-2 text-white/60 group-hover:text-white transition-colors">
          <span className="text-[9px] uppercase tracking-widest font-sans font-bold">Explore Collection</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor">
            <path d="M1 6H11M11 6L6 1M11 6L6 11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}