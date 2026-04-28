import React from 'react';
import HeatScale from './HeatScale';
import PriceDisplay from './PriceDisplay';
import Badge from './Badge';

export default function ProductCard({ product }) {
  const { name, origin, price, salePrice, rating, image, isHot, isOrganic } = product;

  return (
    <div className="group relative flex flex-col bg-white rounded-2xl p-3 shadow-sm hover:shadow-md transition-shadow">
      {/* Image Container */}
      <div className="relative aspect-square mb-4 bg-deli-cream rounded-xl overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badges Overlay */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {isHot && <Badge variant="hot">Hot</Badge>}
          {isOrganic && <Badge variant="organic">Organic</Badge>}
        </div>

        {/* Quick Add Button */}
        <button className="absolute bottom-2 right-2 bg-deli-charcoal text-white w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 md:opacity-100 transition-opacity">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 1V13M1 7H13" />
          </svg>
        </button>
      </div>

      {/* Info Section */}
      <div className="flex flex-col gap-1">
        <span className="text-[9px] uppercase tracking-widest text-deli-charcoal/40 font-bold">
          {origin}
        </span>
        <h3 className="font-display text-base text-deli-charcoal leading-tight">
          {name}
        </h3>
        
        <div className="mt-1 mb-2">
          <HeatScale rating={rating} label="" />
        </div>

        <PriceDisplay price={price} salePrice={salePrice} />
      </div>
    </div>
  );
}