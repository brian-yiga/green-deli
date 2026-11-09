import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/productCard';
import useDocumentTitle from '../hooks/useDocumentTitle';
import BackToTop from '../components/BackToTop';

// Import product database
import { products } from '../data/products';

// Central Categories Configuration with artisanal subtitles
const CATEGORIES_CONFIG = [
  { 
    key: 'tomatoes', 
    title: 'Tomatoes', 
    subtitle: 'Sun-dried natural powders, rich flakes & savory tomato blends' 
  },
  { 
    key: 'chillies', 
    title: 'Chillies', 
    subtitle: 'Hot chilli powders, crushed flakes & infused botanical oils' 
  },
  { 
    key: 'seasonings', 
    title: 'Seasonings', 
    subtitle: 'Signature artisanal spice rubs for meats, luwombo, poultry, fish & veggies' 
  },
  { 
    key: 'mchuzi-mixes', 
    title: 'Mchuzi Mixes', 
    subtitle: 'Traditional aromatic gravies, thickeners & rich stew bases' 
  },
  { 
    key: 'powders', 
    title: 'Powders', 
    subtitle: '100% pure single-origin ground ginger, garlic, turmeric, cinnamon & onion' 
  },
  { 
    key: 'flakes', 
    title: 'Flakes', 
    subtitle: 'Coarsely dehydrated aromatics for rich texture & depth' 
  },
  { 
    key: 'peppers-salts', 
    title: 'Peppers & Salts', 
    subtitle: 'Lake salt infusions, pink Himalayan salts & zesty table rubs' 
  },
  { 
    key: 'masalas', 
    title: 'Masalas', 
    subtitle: 'Traditional fragrant blends for curries, pilau, meats & spiced tea' 
  },
  { 
    key: 'specialty', 
    title: 'Specialty', 
    subtitle: '100% pure raw organic honey & herbal wellness botanicals' 
  },
];

export default function ShopPage() {
  useDocumentTitle('Green Deli | The Collection');
  
  const [searchParams, setSearchParams] = useSearchParams();
  const urlSearch = searchParams.get('search') || '';
  const urlCategory = searchParams.get('category') || '';

  const [activeCategory, setActiveCategory] = useState('All');
  
  // Sidebar filter states
  const [organicOnly, setOrganicOnly] = useState(false);
  const [highHeat, setHighHeat] = useState(false);
  
  // Sync category from URL parameter on mount or URL change
  useEffect(() => {
    if (urlCategory) {
      const match = CATEGORIES_CONFIG.find(
        (c) => c.key.toLowerCase() === urlCategory.toLowerCase()
      );
      if (match) {
        setActiveCategory(match.title);
      }
    }
  }, [urlCategory]);

  const tabs = ['All', ...CATEGORIES_CONFIG.map((c) => c.title)];

  const getCategoryKey = (tabName) => {
    const match = CATEGORIES_CONFIG.find(
      (c) => c.title.toLowerCase() === tabName.toLowerCase()
    );
    return match ? match.key : 'all';
  };

  // Dynamic product count per category
  const categoryCounts = useMemo(() => {
    const counts = { All: products.length };
    CATEGORIES_CONFIG.forEach((cat) => {
      counts[cat.title] = products.filter((p) => p.category === cat.key).length;
    });
    return counts;
  }, []);

  // Filter logic: Handles Search, Category, Organic, and Heat level states
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // 1. Text Search Filter (from header search query)
      if (urlSearch) {
        const query = urlSearch.toLowerCase();
        const matchesSearch =
          product.name.toLowerCase().includes(query) ||
          product.description?.toLowerCase().includes(query) ||
          product.category?.toLowerCase().includes(query);
        if (!matchesSearch) return false;
      }

      // 2. Category Filter
      const targetCategory = getCategoryKey(activeCategory);
      const matchesCategory =
        activeCategory === 'All' || product.category === targetCategory;
      
      // 3. Organic Filter
      const matchesOrganic = !organicOnly || product.isOrganic;
      
      // 4. Heat Filter
      const matchesHeat = !highHeat || product.isHot;

      return matchesCategory && matchesOrganic && matchesHeat;
    });
  }, [activeCategory, organicOnly, highHeat, urlSearch]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (urlCategory) {
      searchParams.delete('category');
      setSearchParams(searchParams);
    }
  };

  const handleClearSearch = () => {
    searchParams.delete('search');
    setSearchParams(searchParams);
  };

  const selectedCategoryConfig = useMemo(() => {
    const key = getCategoryKey(activeCategory);
    return CATEGORIES_CONFIG.find((c) => c.key === key);
  }, [activeCategory]);

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
        <aside className="w-full md:w-60 shrink-0">
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible gap-3 no-scrollbar pb-4 md:pb-0 border-b border-deli-charcoal/10 md:border-none">
            {tabs.map((tab) => {
              const count = categoryCounts[tab];
              const isSelected = activeCategory === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => handleCategoryChange(tab)}
                  className={`whitespace-nowrap font-sans text-[11px] uppercase tracking-[0.16em] font-bold py-1.5 px-2 md:px-0 transition-all text-left flex items-center justify-between cursor-pointer
                    ${isSelected 
                      ? 'text-deli-red border-b-2 border-deli-red md:border-b-2 font-black' 
                      : 'text-deli-botanical/75 border-b-2 border-transparent hover:text-deli-botanical hover:pl-1'
                    }`}
                >
                  <span>{tab}</span>
                  {count !== undefined && (
                    <span className={`text-[10px] ml-2 ${isSelected ? 'text-deli-red font-bold' : 'opacity-50 font-normal'}`}>
                      ({count})
                    </span>
                  )}
                </button>
              );
            })}
          </div>
          
          {/* Desktop Only: Functional Filters */}
          <div className="hidden md:block mt-12 pt-10 border-t border-deli-charcoal/10">
            <h4 className="font-sans text-[11px] uppercase tracking-widest font-bold text-deli-botanical mb-6">
              Filter By
            </h4>
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

        {/* Main Products Display */}
        <main className="flex-1 min-w-0">
          {/* Top Status Bar */}
          <div className="flex flex-wrap justify-between items-center gap-3 mb-6">
            <span className="font-sans text-[10px] uppercase tracking-widest font-bold text-deli-botanical/80">
              Showing {filteredProducts.length} of {products.length} Products
            </span>
            
            {urlSearch && (
              <div className="flex items-center gap-2 bg-deli-red/10 text-deli-red px-3 py-1 rounded-full text-xs font-sans font-bold">
                <span>Search: "{urlSearch}"</span>
                <button 
                  onClick={handleClearSearch}
                  className="hover:underline font-black cursor-pointer"
                  title="Clear search"
                >
                  ✕
                </button>
              </div>
            )}
          </div>

          {/* Quick Category Jump Bar (Visible when viewing All Categories) */}
          {activeCategory === 'All' && !urlSearch && (
            <div className="mb-10 p-3 bg-deli-cream/60 rounded-2xl border border-deli-charcoal/10 flex items-center gap-2 overflow-x-auto no-scrollbar shadow-xs">
              <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-deli-charcoal/60 whitespace-nowrap pl-2 shrink-0">
                Jump To:
              </span>
              <div className="flex gap-2 shrink-0">
                {CATEGORIES_CONFIG.map((cat) => {
                  const count = filteredProducts.filter((p) => p.category === cat.key).length;
                  if (count === 0) return null;
                  return (
                    <button
                      key={cat.key}
                      type="button"
                      onClick={() => {
                        const el = document.getElementById(`category-${cat.key}`);
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="whitespace-nowrap font-sans text-[10px] uppercase tracking-wider font-bold px-3 py-1 bg-white hover:bg-deli-botanical hover:text-white text-deli-botanical rounded-full border border-deli-charcoal/10 shadow-xs transition-colors cursor-pointer"
                    >
                      {cat.title} ({count})
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* --- VIEW MODE 1: ALL CATEGORIES (Grouped by Category with Clear Headers) --- */}
          {activeCategory === 'All' && !urlSearch ? (
            <div className="space-y-16">
              {CATEGORIES_CONFIG.map((cat, idx) => {
                const categoryProducts = filteredProducts.filter((p) => p.category === cat.key);
                if (categoryProducts.length === 0) return null;

                return (
                  <section 
                    key={cat.key} 
                    id={`category-${cat.key}`} 
                    className="scroll-mt-28"
                  >
                    {/* Category Title Banner */}
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 mb-8 border-b-2 border-deli-botanical/25">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-sans text-[9px] font-bold uppercase tracking-[0.25em] text-deli-orange">
                            Category {String(idx + 1).padStart(2, '0')}
                          </span>
                          <span className="text-deli-charcoal/30">•</span>
                          <span className="font-sans text-[9px] font-bold uppercase tracking-wider text-deli-botanical/70">
                            Green Deli Uganda
                          </span>
                        </div>
                        <h2 className="font-display text-3xl md:text-4xl uppercase text-deli-botanical tracking-tight">
                          {cat.title}
                        </h2>
                        {cat.subtitle && (
                          <p className="font-sans text-xs md:text-sm text-deli-charcoal/70 tracking-wide mt-1">
                            {cat.subtitle}
                          </p>
                        )}
                      </div>
                      <div className="shrink-0 flex items-center gap-2">
                        <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-deli-botanical bg-deli-botanical/10 px-3.5 py-1 rounded-full border border-deli-botanical/20">
                          {categoryProducts.length} {categoryProducts.length === 1 ? 'Product' : 'Products'}
                        </span>
                      </div>
                    </div>

                    {/* Product Cards Grid for This Category */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-16">
                      {categoryProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          ) : (
            /* --- VIEW MODE 2: SINGLE CATEGORY OR SEARCH RESULTS VIEW --- */
            <div>
              {/* Header for Filtered Category or Search */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 mb-8 border-b-2 border-deli-botanical/25">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <button
                      type="button"
                      onClick={() => {
                        setActiveCategory('All');
                        handleClearSearch();
                      }}
                      className="font-sans text-[10px] font-bold uppercase tracking-widest text-deli-red hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      ← View All Categories
                    </button>
                    <span className="text-deli-charcoal/30">•</span>
                    <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-deli-orange">
                      {urlSearch ? 'Search Result' : 'Filtered Category'}
                    </span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl uppercase text-deli-botanical tracking-tight">
                    {urlSearch ? `"${urlSearch}"` : (selectedCategoryConfig?.title || activeCategory)}
                  </h2>
                  {selectedCategoryConfig?.subtitle && !urlSearch && (
                    <p className="font-sans text-xs md:text-sm text-deli-charcoal/70 tracking-wide mt-1">
                      {selectedCategoryConfig.subtitle}
                    </p>
                  )}
                </div>
                <div className="shrink-0 flex items-center gap-3">
                  <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-deli-botanical bg-deli-botanical/10 px-3.5 py-1 rounded-full border border-deli-botanical/20">
                    {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveCategory('All');
                      handleClearSearch();
                    }}
                    className="font-sans text-[10px] font-bold uppercase tracking-wider text-deli-red hover:text-white bg-deli-red/10 hover:bg-deli-red px-3 py-1 rounded-full transition-colors cursor-pointer"
                  >
                    Show All
                  </button>
                </div>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-16">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="py-20 text-center">
              <p className="font-sans text-[10px] uppercase tracking-widest opacity-40">
                No products match the selected filters.
              </p>
              <button 
                type="button"
                onClick={() => { 
                  setOrganicOnly(false); 
                  setHighHeat(false); 
                  setActiveCategory('All'); 
                  handleClearSearch();
                }}
                className="mt-4 text-deli-red font-sans text-[9px] uppercase tracking-widest font-bold border-b border-deli-red pb-0.5 cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}
        </main>
      </div>

      <BackToTop />
    </div>
  );
}
