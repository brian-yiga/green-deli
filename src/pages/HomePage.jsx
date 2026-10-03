import React from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import CategoryTile from "../components/CategoryTile";
import useDocumentTitle from "../hooks/useDocumentTitle";
import PromotionsSection from "../components/promotionsSection";
import BackToTop from "../components/BackToTop";
import CatalogueSection from "../components/CatalogueSection";

// Components
import RecipeOfTheWeek from "../components/RecipeOfTheWeek";
import PromoBanner from "../components/PromoBanner";

// Updated with video highlight reels and thumbnail fallbacks
const categories = [
  {
    title: "Agro Processing",
    count: "Factory Highlights",
    video: "/category-videos/video-1.mp4",
    img: "/video-thumbs/thumb-1.png",
    link: "/shop?category=agro-processing",
  },
  {
    title: "Farm Sourcing",
    count: "Field Operations",
    video: "/category-videos/video-2.mp4",
    img: "/video-thumbs/thumb-2.png",
    link: "/shop?category=farm-sourcing",
  },
  {
    title: "Fresh Harvests",
    count: "Organic Produce",
    video: "/category-videos/video-3.mp4",
    img: "/video-thumbs/thumb-3.png",
    link: "/shop?category=fresh-harvests",
  },
];

export default function HomePage() {
  useDocumentTitle("Home");

  return (
    <div className="flex flex-col gap-0 overflow-hidden">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 3. Category Grid / Video Highlights */}
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
              video={cat.video}
              image={cat.img}
              link={cat.link}
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
