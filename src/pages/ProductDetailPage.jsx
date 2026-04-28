import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products, formatPrice } from '../data/products';

// UI Components
import HeatScale from '../components/HeatScale';
import FlavorComplexity from '../components/FlavorComplexity';
import QuantityToggle from '../components/QuantityToggle';
import Button from '../components/Button';
import PriceDisplay from '../components/PriceDisplay';
import Badge from '../components/Badge';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function ProductDetailPage() {
  const { id } = useParams(); // 'id' corresponds to the :id (slug) in your Route
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  // 1. Fetch real product data from our database
  const product = useMemo(() => {
    return products.find((p) => p.slug === id);
  }, [id]);

  // Set page title dynamically
  useDocumentTitle(product ? `${product.name} | Green Deli` : 'Product Details');

  // Handle case where product isn't found
  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center font-display uppercase tracking-widest">
        Product Not Found
      </div>
    );
  }

  // 2. Wrap the Add to Cart logic
  const handleAddToCart = () => {
    addToCart({ ...product, quantity: qty });
  };

  return (
    <div className="flex flex-col pb-24 md:pb-12 bg-deli-cream min-h-screen">
      {/* Mobile-First Image Gallery */}
      <section className="relative w-full aspect-square bg-deli-charcoal/5 md:aspect-[16/9] md:max-h-[600px] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-6 left-6 flex gap-2">
          {product.isHot && <Badge variant="hot">High Heat</Badge>}
          {product.isOrganic && <Badge variant="organic">Single Origin</Badge>}
        </div>
      </section>

      {/* Product Content Container */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 md:mt-12 relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Info Column */}
        <div className="bg-white p-8 md:p-0 rounded-[2.5rem] md:rounded-none shadow-xl md:shadow-none">
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-deli-red mb-3 block">
            {product.origin}
          </span>
          <h1 className="font-display text-4xl md:text-7xl uppercase leading-none mb-6">
            {product.name}
          </h1>
          
          <div className="flex gap-8 mb-8 border-y border-deli-charcoal/5 py-6">
            <HeatScale rating={product.heatRating || 1} label="Heat Level" />
            <FlavorComplexity rating={product.complexity || 3} label="Complexity" />
          </div>

          <p className="font-sans text-sm leading-relaxed text-deli-charcoal/70 mb-8">
            {product.description}
          </p>

          <div className="flex flex-col gap-2 mb-10">
            <h4 className="font-sans text-[10px] uppercase tracking-widest font-bold opacity-40">Specifications</h4>
            <ul className="text-xs font-sans flex flex-col gap-2">
              <li className="flex justify-between border-b border-deli-charcoal/5 pb-2">
                <span>Category</span> <span className="font-bold uppercase tracking-widest text-[10px]">{product.category}</span>
              </li>
              <li className="flex justify-between border-b border-deli-charcoal/5 pb-2">
                <span>Ingredients</span> <span className="font-bold">100% Organic {product.name}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Purchase Column (Sticky on Desktop) */}
        <div className="md:sticky md:top-32 h-fit">
          <div className="bg-white md:bg-transparent p-8 md:p-0 rounded-[2rem] border border-deli-charcoal/5 md:border-none">
            {/* Using our real formatPrice helper */}
            <h2 className="font-display text-3xl mb-8">{formatPrice(product.price)}</h2>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <span className="font-sans text-[10px] uppercase tracking-widest font-bold">Select Quantity</span>
                <QuantityToggle 
                  quantity={qty} 
                  onIncrease={() => setQty(qty + 1)}
                  onDecrease={() => setQty(Math.max(1, qty - 1))}
                />
              </div>
              
              <Button 
                variant="primary" 
                onClick={handleAddToCart}
                className="w-full bg-deli-red text-white py-4 rounded-full font-sans text-[10px] uppercase tracking-widest font-bold shadow-xl active:scale-95 transition-all"
              >
                Add to Cart • {formatPrice(product.price * qty)}
              </Button>
              
              <p className="text-[9px] uppercase tracking-widest text-center opacity-40 font-sans">
                Delivery within Kampala: 24 - 48 Hours
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}