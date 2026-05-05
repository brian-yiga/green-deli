import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../data/products";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="group flex flex-col rounded-[2rem] overflow-hidden bg-white border border-deli-charcoal/5 shadow-sm hover:shadow-xl transition-all duration-500">
      {/* Image */}
      <Link
        to={`/product/${product.slug}`}
        className="relative aspect-[4/5] bg-deli-charcoal/5 overflow-hidden"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isHot && (
            <span className="bg-deli-red text-white text-[8px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              Hot
            </span>
          )}

          {product.isOrganic && (
            <span className="bg-white/90 backdrop-blur-md text-deli-charcoal text-[8px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-black/5">
              Organic
            </span>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col gap-4">
        <div>
          <span className="font-sans text-[9px] uppercase tracking-widest opacity-40 block mb-1">
            {product.origin}
          </span>

          <Link to={`/product/${product.slug}`}>
            <h4 className="font-display text-lg uppercase leading-tight hover:text-deli-red transition-colors">
              {product.name}
            </h4>
          </Link>
        </div>

        {/* Price + Cart */}
        <div className="flex flex-col gap-3">
          <p className="font-sans text-xl font-bold text-deli-charcoal">
            {formatPrice(product.price)}
          </p>

          <button
            onClick={handleQuickAdd}
            className="w-full bg-deli-red text-white py-3 rounded-full shadow-lg active:scale-95 transition-all duration-300 hover:opacity-90"
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
