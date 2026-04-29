import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; 
import { formatPrice } from '../data/products';   

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  // Prevent parent Link click when clicking the button
  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="group flex flex-col gap-4">
      {/* 1. Image Area - Clean Gallery Aesthetic */}
      <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-deli-charcoal/5">
        <Link to={`/product/${product.slug}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110" 
            loading="lazy"
          />
        </Link>
        
        {/* Status Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 pointer-events-none">
          {product.isHot && (
            <span className="bg-deli-red text-white text-[8px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
              Hot
            </span>
          )}
          {product.isOrganic && (
            <span className="bg-white/90 backdrop-blur-md text-deli-charcoal text-[8px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-black/5">
              Organic
            </span>
          )}
        </div>
      </div>

      {/* 2. Text & Action Area (The "White Part") */}
      <div className="px-2 flex justify-between items-end gap-2">
        {/* Left Side: Product Details */}
        <div className="flex-1 min-w-0">
          <span className="font-sans text-[9px] uppercase tracking-widest opacity-40 block mb-1 truncate">
            {product.origin}
          </span>
          <Link to={`/product/${product.slug}`}>
            <h4 className="font-display text-lg uppercase leading-tight hover:text-deli-red transition-colors mb-2 truncate">
              {product.name}
            </h4>
          </Link>
          <p className="font-sans text-xs font-bold text-deli-charcoal">
            {formatPrice(product.price)}
          </p>
        </div>

        {/* Right Side: Rectangular Cart Button */}
        <button 
          onClick={handleQuickAdd}
          className="flex items-center justify-center bg-deli-red text-white transition-all duration-500 active:scale-90 shadow-xl shrink-0
                     /* Shapes & Sizing */
                     px-4 py-2.5 rounded-sm
                     /* Mobile: Slide in from right on hover/tap */
                     translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100
                     /* Desktop: Solidly visible */
                     md:translate-x-0 md:opacity-100"
          aria-label={`Add ${product.name} to cart`}
        >
          <span className="font-sans text-[8px] uppercase tracking-[0.25em] font-bold">
            Cart +
          </span>
        </button>
      </div>
    </div>
  );
}