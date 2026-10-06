import React from "react";
import { Link } from "react-router-dom";
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
    video: "/assets/uma-trade-show/uma-video.mp4",
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

      {/* 2. Category Grid / Video Highlights */}
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

      {/* 3. Independence Trade Show Section with Featured Video */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="border-t border-deli-red/15 py-12 px-4 bg-gradient-to-r from-amber-500/10 via-red-500/5 to-amber-500/10"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Video Feature */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-black aspect-[9/16] max-h-[480px] mx-auto">
              <video
                src="/assets/uma-trade-show/uma-video.mp4"
                poster="/video-thumbs/uma-video-thumb.png"
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left space-y-5">
            <div>
              <span className="inline-block bg-deli-red/10 text-deli-red text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                Live Event Highlight
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Fresh Flavors & Live Demos at the Independence Trade Show!
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Visit our booth at the Lugogo Show Grounds for the Independence
              Trade Show week opposite Little Ritz! Explore live product
              showcases, exclusive event offers, and see how Green Deli is
              bringing premium organic products to you.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center lg:justify-start">
              <Link
                to="/gallery"
                className="inline-flex items-center justify-center px-6 py-3 bg-deli-red text-white font-medium rounded-lg shadow hover:bg-deli-red/90 transition-colors text-sm text-center"
              >
                View Full Photo & Video Gallery
              </Link>
              <a
                href="https://www.tiktok.com/@Greendeli256"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 bg-white text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors text-sm text-center"
              >
                TikTok Highlights
              </a>
              <a
                href="https://www.instagram.com/greendelispices?igsi=MXhjZTlkNmZ3N3Y4ag=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 bg-white text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors text-sm text-center"
              >
                Instagram Highlights
              </a>
            </div>
          </div>
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
