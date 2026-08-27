import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import CategoryTile from '../components/CategoryTile';
import useDocumentTitle from '../hooks/useDocumentTitle';
import PromotionsSection from '../components/promotionsSection';
import BackToTop from '../components/BackToTop';
import CatalogueSection from '../components/CatalogueSection';

// Components
import RecipeOfTheWeek from '../components/RecipeOfTheWeek';
import PromoBanner from '../components/PromoBanner';

const categories = [
  { title: "Chillies", count: 12, img: "/assets/chilliesHomePage.jpg" },
  { title: "Masalas", count: 8, img: "/assets/blended-spices.jpg" },
  { title: "Powders", count: 15, img: "/assets/red-onion-powder.jpg" }
];

export default function HomePage() {
  useDocumentTitle('Home');

  return (
    <div className="flex flex-col gap-0 overflow-hidden">
      
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 3. Category Grid */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="border-t border-deli-red/15 py-10 px-4 max-w-7xl mx-auto w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <CategoryTile 
              key={cat.title} 
              title={cat.title} 
              itemCount={cat.count} 
              image={cat.img} 
            />
          ))}
        </div>
      </motion.section>

      {/* 4. Recipe of the Week Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="border-t border-deli-red/15 py-10"
      >
        <RecipeOfTheWeek />
      </motion.div>

      {/* 5. Bulk & Wholesale Promo Banner */}
      <div className="border-t border-deli-red/15 py-6">
        <PromoBanner />
      </div>

      {/* 6. Best Sellers / Promotions */}
      <div className="border-t border-deli-red/15 py-10">
        <PromotionsSection />
      </div>

      <BackToTop />
    </div>
  );
}