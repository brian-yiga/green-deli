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
    <div className="group flex flex-col rounded-[2.5rem] overflow-hidden bg-deli-botanical text-white border border-white/10 shadow-md hover:shadow-2xl hover:border-deli-gold/30 transition-all duration-500">
      {/* 1. Green Deli Custom Botanical Stage */}
      <Link
        to={`/product/${product.slug}`}
        className="relative aspect-[4/5] overflow-hidden bg-[#FAF7F2] flex items-center justify-center p-3 m-2 rounded-[2rem]"
      >
        {/* Architectural Arch Line Frame */}
        <div className="absolute inset-2.5 rounded-[1.8rem] border border-deli-charcoal/10 pointer-events-none" />

        {/* Ambient Warm Spotlight Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/95 via-[#FAF7F2] to-[#EFE7D8] pointer-events-none" />

        {/* Natural Ground Contact Shadow */}
        <div className="absolute bottom-6 w-3/4 h-3 bg-black/15 rounded-[100%] blur-md transform scale-y-50 group-hover:scale-x-105 group-hover:bg-black/20 transition-all duration-500 pointer-events-none" />

        {/* Floating Product Cutout with Reddish-Brown Drop Shadow */}
        <img
          src={product.image}
          alt={product.name}
          className="relative z-10 w-full h-full max-h-[92%] max-w-[92%] object-contain drop-shadow-[0_14px_22px_rgba(160,50,20,0.38)] transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Signature Bottom Stamp */}
        <div className="absolute bottom-3 inset-x-0 flex items-center justify-between px-5 z-20 pointer-events-none">
          <span className="font-sans text-[8px] font-bold uppercase tracking-[0.2em] text-deli-charcoal/60 bg-white/80 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-black/5">
            Single Origin
          </span>
          <span className="font-sans text-[8px] font-bold uppercase tracking-[0.2em] text-deli-red font-bold">
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
          <span className="font-sans text-[9px] uppercase tracking-widest text-deli-gold font-bold block mb-1">
            {product.origin}
          </span>

          <Link to={`/product/${product.slug}`}>
            <h4 className="font-display sm:text-base md:text-lg uppercase leading-tight text-white group-hover:text-deli-gold transition-colors">
              {product.name}
            </h4>
          </Link>
        </div>

        {/* Cart Action */}
        <div className="flex flex-col gap-3">
          <button
            onClick={handleQuickAdd}
            className="w-full bg-deli-red hover:bg-red-600 text-white py-3 rounded-full shadow-lg active:scale-95 transition-all duration-300 cursor-pointer"
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
