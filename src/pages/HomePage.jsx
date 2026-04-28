import React from 'react';
import HeroSection from '../components/HeroSection';
import CategoryTile from '../components/CategoryTile';
import ProductCard from '../components/ProductCard';
import FeatureBlock from '../components/FeatureBlock';

// Temporary Mock Data
const categories = [
  { title: "Chillies", count: 12, img: "/assets/fresh-red-peppers.png" },
  { title: "Masalas", count: 8, img: "/assets/masalas.webp" },
  { title: "Powders", count: 15, img: "/assets/powders.png" }
];

const featuredProduct = {
  name: "African Bird's Eye",
  origin: "Mount Elgon, Uganda",
  price: 25000,
  rating: 4,
  image: "/assets/blackPepper.png",
  isHot: true
};

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <HeroSection />

      {/* Category Grid */}
      <section className="px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <CategoryTile 
              key={cat.title} 
              title={cat.title} 
              itemCount={cat.count} 
              image={cat.img} 
            />
          ))}
        </div>
      </section>

      {/* The Apothecary Highlight */}
      <FeatureBlock 
        subtitle="The Apothecary"
        title="Biologically Potent Spices"
        description="Our spices are harvested at peak potency, ensuring the highest concentration of essential oils and health benefits."
        image="/assets/garlicPowder.jpeg"
      />

      {/* Best Sellers Preview */}
      <section className="px-6 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-end mb-10">
          <h2 className="font-display text-3xl uppercase">Best Sellers</h2>
          <span className="font-sans text-[10px] uppercase tracking-widest border-b border-deli-charcoal pb-1 cursor-pointer">View All</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ProductCard product={featuredProduct} />
          <ProductCard product={featuredProduct} />
          <ProductCard product={featuredProduct} />
          <ProductCard product={featuredProduct} />
        </div>
      </section>
    </div>
  );
}