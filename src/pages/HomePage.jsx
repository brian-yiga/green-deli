import React from 'react';
import HeroSection from '../components/HeroSection';
import CategoryTile from '../components/CategoryTile';
import ProductCard from '../components/ProductCard';
import FeatureBlock from '../components/FeatureBlock';
import useDocumentTitle from '../hooks/useDocumentTitle';
import PromotionsSection from '../components/promotionsSection';
import BackToTop from '../components/BackToTop';
import CatalogueSection from '../components/CatalogueSection';

// Temporary Mock Data
const categories = [
  { title: "Chillies", count: 12, img: "/assets/products/fresh-red-peppers.png" },
  { title: "Masalas", count: 8, img: "/assets/products/masalas.webp" },
  { title: "Powders", count: 15, img: "/assets/products/powders.png" }
];

const featuredProduct = {
  name: "Black Pepper",
  origin: "Mount Elgon, Uganda",
  price: 25000,
  rating: 4,
  image: "/assets/products/blackPepper.png",
  isHot: true
};

export default function HomePage() {
  useDocumentTitle('Home');
  return (
    <div className="flex flex-col gap-10">
      <HeroSection />
      <CatalogueSection />

      {/* Category Grid */}
      <section className="px-2 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
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
      < PromotionsSection />
      <BackToTop />
    </div>
  );
}