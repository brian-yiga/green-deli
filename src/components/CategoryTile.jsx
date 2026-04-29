import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryTile({ title, image, itemCount }) {
  // We generate a URL-friendly path from the title (e.g., "Chili Oils" becomes "chili-oils")
  const categoryPath = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <Link 
      to={`/shop?category=${categoryPath}`}
      className="group relative aspect-square w-full overflow-hidden bg-deli-charcoal rounded-[2.5rem] block shadow-xl"
    >
      {/* Background Image with Overlay */}
      <img 
        src={image} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-110 group-hover:opacity-50 transition-all duration-700 ease-out"
      />
      
      {/* Dynamic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-deli-charcoal via-deli-charcoal/20 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

      {/* Text Content */}
      <div className="absolute bottom-8 left-8 right-8">
        <span className="text-[14px] font-sans font-bold uppercase tracking-[0.2em] text-deli-gold mb-2 block transform transition-transform duration-500 group-hover:-translate-y-1">
          {itemCount} Products
        </span>
        <h3 className="font-display text-5xl md:text-4xl text-white uppercase leading-none mb-4">
          {title}
        </h3>
        
        {/* Animated "Explore Collection" link */}
        <div className="flex items-center gap-3 text-white/40 group-hover:text-white transition-all duration-500 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="text-[12px] uppercase tracking-[0.3em] font-sans font-bold">
            Explore Collection
          </span>
          <div className="w-8 h-[1px] bg-deli-red transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100" />
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="transform transition-transform duration-500 group-hover:translate-x-1">
            <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </Link>
  );
}