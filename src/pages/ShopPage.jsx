import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Badge from '../components/Badge';
import HeatScale from '../components/HeatScale';
import PriceDisplay from '../components/PriceDisplay';
import useDocumentTitle from '../hooks/useDocumentTitle';

// Mock Data for the Shop
const products = [
  { id: 1, name: "African Bird's Eye", origin: "Mt. Elgon", price: 25000, rating: 4, image: "/assets/chili-1.jpg", isHot: true, category: "Chilies" },
  { id: 2, name: "Green Deli Masala", origin: "Fort Portal", price: 18000, salePrice: 15000, rating: 2, image: "/assets/masala-1.jpg", isOrganic: true, category: "Masalas" },
  { id: 3, name: "Smoked Paprika", origin: "Kasese", price: 12000, rating: 1, image: "/assets/paprika.jpg", category: "Powders" },
  { id: 4, name: "Pure Cardamom", origin: "Bundibugyo", price: 30000, rating: 0, image: "/assets/cardamom.jpg", category: "Apothecary" },
  // Add more to fill the grid...
];

export default function ShopPage() {
    useDocumentTitle('Apothecary');
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Chilies', 'Masalas', 'Powders', 'Apothecary'];

  return (
    <div className="px-4 md:px-10 py-10 max-w-7xl mx-auto">
      {/* Header Section */}
      <header className="mb-12 text-center md:text-left">
        <h1 className="font-display text-4xl md:text-6xl uppercase mb-4">The Collection</h1>
        <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-deli-charcoal/40">
          Sourced from the fertile soils of Uganda
        </p>
      </header>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Desktop Sidebar Filters / Mobile Horizontal Scroll */}
        <aside className="w-full md:w-48 shrink-0">
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible gap-4 md:gap-6 no-scrollbar pb-4 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap font-sans text-[10px] uppercase tracking-[0.2em] font-bold pb-1 transition-all
                  ${activeCategory === cat 
                    ? 'text-deli-red border-b-2 border-deli-red' 
                    : 'text-deli-charcoal/30 border-b-2 border-transparent hover:text-deli-charcoal'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          {/* Desktop Only: Additional Filters */}
          <div className="hidden md:block mt-12 pt-12 border-t border-deli-charcoal/10">
            <h4 className="font-sans text-[10px] uppercase tracking-widest font-bold mb-6">Filter By</h4>
            <div className="flex flex-col gap-4">
              <label className="flex items-center gap-3 font-sans text-xs cursor-pointer">
                <input type="checkbox" className="accent-deli-red" /> Organic Only
              </label>
              <label className="flex items-center gap-3 font-sans text-xs cursor-pointer">
                <input type="checkbox" className="accent-deli-red" /> High Heat
              </label>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1">
          <div className="flex justify-between items-center mb-8">
            <span className="font-sans text-[9px] uppercase tracking-widest opacity-40">
              Showing {products.length} Products
            </span>
            <div className="flex items-center gap-2 md:hidden">
              <button className="flex items-center gap-2 border border-deli-charcoal/10 px-4 py-2 rounded-full font-sans text-[10px] uppercase tracking-widest">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 3H10M4 6H8M5 9H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                Refine
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-12">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}