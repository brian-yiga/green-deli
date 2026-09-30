import React, { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import useDocumentTitle from '../hooks/useDocumentTitle';
// import CatalogueSection from '../components/CatalogueSection'; // Commented out if unused

// Import your real data
import { products } from '../data/products';

export default function ShopPage() {
  useDocumentTitle('Green Deli | The Collection');
  
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Sidebar filter states
  const [organicOnly, setOrganicOnly] = useState(false);
  const [highHeat, setHighHeat] = useState(false);
  
  // Categories for a balanced, multi-category spice store
  const tabs = ['All', 'Chillies', 'Masalas', 'Powders', 'Pantry'];

  // Filter logic: Handles Category, Organic, and Heat level states dynamically
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // 1. Category Filter
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      
      // 2. Organic Filter (checks product.isOrganic property)
      const matchesOrganic = !organicOnly || product.isOrganic;
      
      // 3. Heat Filter (checks product.isHot property)
      const matchesHeat = !highHeat || product.isHot;

      return matchesCategory && matchesOrganic && matchesHeat;
    });
  }, [activeCategory, organicOnly, highHeat]);

  // Helper to reset sidebar filters when switching categories (optional, premium UX detail)
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="px-4 md:px-10 py-10 max-w-7xl mx-auto">
      {/* Header Section */}
      <header className="mb-12 text-center md:text-left">
        <h1 className="font-display text-4xl md:text-6xl uppercase mb-4 tracking-tighter text-deli-botanical">
          The Collection
        </h1>
        <p className="font-sans text-sm md:text-base uppercase tracking-[0.25em] text-deli-botanical font-semibold">
          Sourced from the fertile soils of Uganda
        </p>
        <blockquote className="my-10 border-l-4 border-deli-red pl-6 py-6 text-left italic font-sans text-lg md:text-xl text-deli-charcoal/90 bg-white/80 rounded-r-3xl shadow-sm">
          <span className="font-sans text-xs not-italic uppercase tracking-[0.2em] font-bold text-deli-red block mb-2">
            Our Products, Our Promise
          </span>
          Green Deli is developing a diverse portfolio of value-added food products inspired by Uganda's agricultural resources. The portfolio is being developed progressively, with ongoing products listed first and new product categories introduced as production and distribution capacity grows.
        </blockquote>
      </header>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Desktop Sidebar / Mobile Nav */}
        <aside className="w-full md:w-48 shrink-0">
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible gap-4 md:gap-6 no-scrollbar pb-4 md:pb-0 border-b border-deli-charcoal/5 md:border-none">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleCategoryChange(tab)}
                className={`whitespace-nowrap font-sans text-[11px] uppercase tracking-[0.2em] font-bold pb-1 transition-all text-left
                  ${activeCategory === tab 
                    ? 'text-deli-red border-b-2 border-deli-red' 
                    : 'text-deli-botanical/70 border-b-2 border-transparent hover:text-deli-botanical'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          {/* Desktop Only: Fully Functional Filters */}
          <div className="hidden md:block mt-12 pt-12 border-t border-deli-charcoal/10">
            <h4 className="font-sans text-[11px] uppercase tracking-widest font-bold text-deli-botanical mb-6">Filter By</h4>
            <div className="flex flex-col gap-4">
              <label className="flex items-center gap-3 font-sans text-[11px] uppercase tracking-widest cursor-pointer text-deli-botanical font-semibold hover:text-deli-charcoal transition-colors">
                <input 
                  type="checkbox" 
                  checked={organicOnly}
                  onChange={(e) => setOrganicOnly(e.target.checked)}
                  className="accent-deli-red h-3.5 w-3.5 rounded border-deli-charcoal/20 focus:ring-0 cursor-pointer" 
                /> 
                Single Origin
              </label>
              <label className="flex items-center gap-3 font-sans text-[11px] uppercase tracking-widest cursor-pointer text-deli-botanical font-semibold hover:text-deli-charcoal transition-colors">
                <input 
                  type="checkbox" 
                  checked={highHeat}
                  onChange={(e) => setHighHeat(e.target.checked)}
                  className="accent-deli-red h-3.5 w-3.5 rounded border-deli-charcoal/20 focus:ring-0 cursor-pointer" 
                /> 
                High Heat
              </label>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1">
          <div className="flex justify-between items-center mb-8">
            <span className="font-sans text-[9px] uppercase tracking-widest opacity-40">
              Showing {filteredProducts.length} of {products.length} Products
            </span>
          </div>

          {/* Grid setup matching your premium ProductCard design */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-16">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="py-20 text-center">
              <p className="font-sans text-[10px] uppercase tracking-widest opacity-40">
                No products match the selected filters.
              </p>
              <button 
                onClick={() => { setOrganicOnly(false); setHighHeat(false); setActiveCategory('All'); }}
                className="mt-4 text-deli-red font-sans text-[9px] uppercase tracking-widest font-bold border-b border-deli-red pb-0.5"
              >
                Reset Filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}