import React from 'react';
import { Flame, ShoppingBag } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { 
    name, 
    price, 
    image, 
    heatLevel, 
    scovilleRating, 
    flavorProfile, 
    inStock,
    weight 
  } = product;

  const getHeatColor = (level) => {
    if (level === 0) return 'text-deli-brown/20'; // Neutral for turmeric/non-heat
    if (level <= 2) return 'text-deli-green'; 
    if (level === 3) return 'text-orange-500';
    return 'text-deli-red'; 
  };

  return (
    <div className={`group flex flex-col bg-deli-cream border border-deli-brown/10 rounded-xl overflow-hidden transition-all duration-300 ${!inStock ? 'opacity-75' : 'hover:shadow-xl hover:-translate-y-1'}`}>
      
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-[#F5F5F5]">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Scoville Badge - Only show if there is heat */}
        {heatLevel > 0 && (
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2 py-1 rounded shadow-sm">
            <p className="text-[10px] font-black tracking-tighter uppercase text-deli-brown">
              {scovilleRating}
            </p>
          </div>
        )}

        {!inStock && (
          <div className="absolute inset-0 bg-deli-brown/40 flex items-center justify-center">
            <span className="bg-white text-deli-brown px-3 py-1 font-bold text-xs uppercase tracking-widest">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-serif text-xl text-deli-brown font-bold leading-tight uppercase tracking-tight">
              {name}
            </h3>
            <span className="text-[10px] text-deli-brown/50 font-bold uppercase tracking-widest">
              {weight}
            </span>
          </div>
          <span className="text-deli-green font-black text-sm">
            UGX {price.toLocaleString()}
          </span>
        </div>

        {/* Flavor Profile Pills */}
        <div className="flex flex-wrap gap-1 mt-2 mb-4">
          {flavorProfile.map((note) => (
            <span key={note} className="text-[9px] bg-deli-brown/5 px-2 py-0.5 rounded-full text-deli-brown/80 font-medium">
              {note}
            </span>
          ))}
        </div>

        {/* Heat Indicator & Action */}
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-deli-brown/10">
          <div className="flex items-center gap-0.5" title={`Heat Level: ${heatLevel}/5`}>
            {[...Array(5)].map((_, i) => (
              <Flame 
                key={i} 
                size={14} 
                className={`${i < heatLevel ? getHeatColor(heatLevel) : 'text-deli-brown/10'}`}
                fill={i < heatLevel ? 'currentColor' : 'none'}
              />
            ))}
          </div>
          
          <button 
            disabled={!inStock}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all
              ${inStock 
                ? 'bg-deli-red text-white hover:bg-red-700 shadow-md active:scale-95' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
          >
            <ShoppingBag size={14} />
            ADD TO BAG
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;