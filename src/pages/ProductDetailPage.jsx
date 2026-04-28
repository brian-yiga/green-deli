import React, { useState } from 'react';
import HeatScale from '../components/HeatScale';
import FlavorComplexity from '../components/FlavorComplexity';
import QuantityToggle from '../components/QuantityToggle';
import Button from '../components/Button';
import PriceDisplay from '../components/PriceDisplay';
import Badge from '../components/Badge';

export default function ProductDetailPage() {
  const [qty, setQty] = useState(1);

  // Mock product data based on the "African Bird's Eye"
  const product = {
    name: "African Bird's Eye",
    origin: "Mount Elgon, Uganda",
    price: 25000,
    description: "Known locally as 'Akabirigiti', this chili is legendary for its clean, piercing heat and citrus undertones. Wild-harvested at 1,200m altitude.",
    heatRating: 4,
    complexityRating: 3,
    ingredients: "100% Organic Sun-dried Bird's Eye Chili",
    weight: "50g / 1.7oz"
  };

  return (
    <div className="flex flex-col pb-24 md:pb-12">
      {/* Mobile-First Image Gallery */}
      <section className="relative w-full aspect-square bg-deli-cream md:aspect-[16/9] md:max-h-[600px] overflow-hidden">
        <img 
          src="/assets/chili-detail.jpg" 
          alt={product.name}
          className="w-full h-full object-cover mix-blend-multiply"
        />
        <div className="absolute top-6 left-6 flex gap-2">
          <Badge variant="hot">Hot Release</Badge>
          <Badge variant="organic">Single Origin</Badge>
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
            <HeatScale rating={product.heatRating} label="Heat Level" />
            <FlavorComplexity rating={product.complexityRating} label="Complexity" />
          </div>

          <p className="font-sans text-sm leading-relaxed text-deli-charcoal/70 mb-8">
            {product.description}
          </p>

          <div className="flex flex-col gap-2 mb-10">
            <h4 className="font-sans text-[10px] uppercase tracking-widest font-bold opacity-40">Details</h4>
            <ul className="text-xs font-sans flex flex-col gap-2">
              <li className="flex justify-between border-b border-deli-charcoal/5 pb-2">
                <span>Weight</span> <span className="font-bold">{product.weight}</span>
              </li>
              <li className="flex justify-between border-b border-deli-charcoal/5 pb-2">
                <span>Ingredients</span> <span className="font-bold">{product.ingredients}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Purchase Column (Sticky on Desktop) */}
        <div className="md:sticky md:top-32 h-fit">
          <div className="bg-deli-cream p-8 rounded-[2rem] border border-deli-charcoal/5">
            <PriceDisplay price={product.price} className="text-2xl mb-8" />
            
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <span className="font-sans text-[10px] uppercase tracking-widest font-bold">Select Quantity</span>
                <QuantityToggle 
                  quantity={qty} 
                  onIncrease={() => setQty(qty + 1)}
                  onDecrease={() => setQty(Math.max(1, qty - 1))}
                />
              </div>
              
              <Button variant="primary">Add to Cart • {(product.price * qty).toLocaleString()} UGX</Button>
              
              <p className="text-[9px] uppercase tracking-widest text-center opacity-40 font-sans">
                Free Delivery within Kampala for orders above 100k
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}