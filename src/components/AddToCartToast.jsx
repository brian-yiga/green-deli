import React from 'react';
import { Link } from 'react-router-dom';

export default function AddToCartToast({ isVisible, onClose, productName }) {
  if (!isVisible) return null;

  return (
    <div className="fixed top-20 right-6 z-[100] animate-in slide-in-from-right duration-300">
      <div className="bg-white border border-deli-charcoal/10 shadow-2xl rounded-2xl p-4 w-72 backdrop-blur-md bg-white/95">
        <div className="flex items-start gap-3">
          <div className="bg-deli-red/10 p-2 rounded-full text-deli-red">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path d="M20 6 9 17l-5-5"/>
            </svg>
          </div>
          <div className="flex-1">
            <p className="font-sans text-[11px] uppercase tracking-wider font-bold text-deli-charcoal">
              Added to Cart
            </p>
            <p className="font-display text-sm text-deli-red truncate">
              {productName}
            </p>
            <div className="mt-3 flex gap-4">
              <Link 
                to="/cart" 
                className="font-sans text-[10px] uppercase tracking-widest font-bold text-deli-red hover:underline"
              >
                View Cart
              </Link>
              <button 
                onClick={onClose}
                className="font-sans text-[10px] uppercase tracking-widest font-bold opacity-40 hover:opacity-100"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}