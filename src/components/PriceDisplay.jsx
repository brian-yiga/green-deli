import React from 'react';

export default function PriceDisplay({ price, salePrice, currency = "UGX", className = "" }) {
  // --- CLIENT REQUEST: TEMPORARILY DISABLE ALL PRICE RENDERING ---
  // To restore pricing in the future, simply comment out or remove the line below.
  return null;

  const isSale = salePrice && salePrice < price;

  return (
    <div className={`flex items-center gap-2 font-sans ${className}`}>
      {isSale && (
        <span className="text-[11px] text-deli-charcoal/30 line-through decoration-deli-red/40">
          {currency} {price?.toLocaleString()}
        </span>
      )}
      <span className={`text-sm font-bold tracking-tight ${isSale ? 'text-deli-red' : 'text-deli-charcoal'}`}>
        {currency} {isSale ? salePrice?.toLocaleString() : price?.toLocaleString()}
      </span>
    </div>
  );
}