import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="group flex flex-col rounded-[2.5rem] overflow-hidden bg-white border border-deli-charcoal/10 shadow-sm hover:shadow-2xl transition-all duration-500">
      {/* 1. Green Deli Custom Botanical Stage */}
      <Link
        to={`/product/${product.slug}`}
        className="relative aspect-[4/5] overflow-hidden bg-[#FAF7F2] flex items-center justify-center p-3 m-2 rounded-[2rem]"
      >
        {/* Architectural Arch Line Frame */}
        <div className="absolute inset-2.5 rounded-[1.8rem] border border-deli-charcoal/10 pointer-events-none" />

        {/* Ambient Warm Spotlight Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/90 via-[#FAF7F2] to-[#EFE7D8] pointer-events-none" />

        {/* Natural Ground Contact Shadow */}
        <div className="absolute bottom-6 w-3/4 h-3 bg-black/15 rounded-[100%] blur-md transform scale-y-50 group-hover:scale-x-105 group-hover:bg-black/20 transition-all duration-500 pointer-events-none" />

        {/* Floating Product Cutout (Bigger Size) */}
        <img
          src={product.image}
          alt={product.name}
          className="relative z-10 w-full h-full max-h-[92%] max-w-[92%] object-contain drop-shadow-[0_10px_18px_rgba(0,0,0,0.12)] transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Signature Bottom Stamp */}
        <div className="absolute bottom-3 inset-x-0 flex items-center justify-between px-5 z-20 pointer-events-none">
          <span className="font-sans text-[8px] font-bold uppercase tracking-[0.2em] text-deli-charcoal/50 bg-white/70 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-black/5">
            Single Origin
          </span>
          <span className="font-sans text-[8px] font-bold uppercase tracking-[0.2em] text-deli-red/80">
            Uganda • 100% Pure
          </span>
        </div>

        {/* Badges Overlay */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-30">
          {product.isHot && (
            <span className="bg-deli-red text-white text-[8px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
              Hot
            </span>
          )}

          {product.isOrganic && (
            <span className="bg-deli-charcoal text-white text-[8px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
              Organic
            </span>
          )}
        </div>
      </Link>

      {/* 2. Content Details */}
      <div className="p-5 flex flex-col gap-4">
        <div>
          <span className="font-sans text-[9px] uppercase tracking-widest opacity-40 block mb-1">
            {product.origin}
          </span>

          <Link to={`/product/${product.slug}`}>
            <h4 className="font-display sm:text-base md:text-lg uppercase leading-tight hover:text-deli-red transition-colors">
              {product.name}
            </h4>
          </Link>
        </div>

        {/* Cart Action */}
        <div className="flex flex-col gap-3">
          <button
            onClick={handleQuickAdd}
            className="w-full bg-deli-red text-white py-3 rounded-full shadow-lg active:scale-95 transition-all duration-300 hover:opacity-90 cursor-pointer"
            aria-label={`Add ${product.name} to cart`}
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] font-bold">
              Cart +
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
