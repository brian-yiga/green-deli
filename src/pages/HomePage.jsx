import React from 'react';
import HeroSection from '../components/HeroSection';
import CategoryTile from '../components/CategoryTile';
import ProductCard from '../components/ProductCard';
import FeatureBlock from '../components/FeatureBlock';
import useDocumentTitle from '../hooks/useDocumentTitle';
import BestSellersSection from '../components/BestSellersSection';

// Temporary Mock Data
const categories = [
  { title: "Chillies", count: 12, img: "/assets/products/fresh-red-peppers.png" },
  { title: "Masalas", count: 8, img: "/assets/products/masalas.webp" },
  { title: "Powders", count: 15, img: "/assets/products/powders.png" }
];

const featuredProduct = {
  name: "African Bird's Eye",
  origin: "Mount Elgon, Uganda",
  price: 25000,
  rating: 4,
  image: "/assets/products/blackPepper.png",
  isHot: true
};

export default function HomePage() {
  useDocumentTitle('Home');
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
        description="Our spices are captured at their biological zenith. Harvesting at peak potency means timing the collection to the exact moment when a plant’s essential oils are at their most concentrated. These volatile oils are the lifeblood of the spice, containing the complex aromatic top notes and deep flavors that industrial farming often loses. By respecting these natural cycles, we ensure that every gram of our harvest is dense with antioxidants and bioactive compounds."
        image="/assets/products/garlicPowder.jpeg"
      />

      {/* Best Sellers Preview */}
      < BestSellersSection />
    </div>
  );
}