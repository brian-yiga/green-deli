import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import CategoryTile from "../components/CategoryTile";
import VideoFrame from "../components/VideoFrame";
import useDocumentTitle from "../hooks/useDocumentTitle";
import PromotionsSection from "../components/promotionsSection";
import BackToTop from "../components/BackToTop";

// Components
import RecipeOfTheWeek from "../components/RecipeOfTheWeek";
import PromoBanner from "../components/PromoBanner";

// Central dynamic media configuration
import { heroVideoHighlights, tradeShowFeaturedVideos } from "../data/eventMedia";

export default function HomePage() {
  useDocumentTitle("Home");

  return (
    <div className="flex flex-col gap-0 overflow-hidden">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Top 3 Video Showcase Cards (Right below Hero) */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="border-t border-deli-red/15 py-10 px-4 max-w-7xl mx-auto w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {heroVideoHighlights.map((cat) => (
            <CategoryTile
              key={cat.id || cat.title}
              title={cat.title}
              itemCount={cat.count}
              video={cat.video}
              image={cat.img}
              link={cat.link}
            />
          ))}
        </div>
      </motion.section>

      {/* 3. Sub-Hero Section: Independence Trade Show 2026 (Responsive 2-Column Video Grid) */}
      <motion.section
        id="trade-show-feature"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="border-t border-deli-red/15 py-12 px-4 bg-gradient-to-r from-amber-500/10 via-red-500/5 to-amber-500/10"
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-deli-red/10 text-deli-red text-xs font-semibold uppercase tracking-wider px-3.5 py-1 rounded-full mb-3 border border-deli-red/20">
              Live Event Highlight • Lugogo Show Grounds
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3">
              Fresh Flavors & Live Demos at the Independence Trade Show!
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Visit our booth at the Lugogo Show Grounds for the Independence
              Trade Show week opposite Little Ritz! Watch live booth walkthroughs,
              product demos, and discover our premium organic spice collection.
            </p>
          </div>

          {/* 2-Column Responsive Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
            {tradeShowFeaturedVideos.map((video) => (
              <VideoFrame
                key={video.id}
                src={video.video}
                poster={video.poster}
                title={video.title}
                subtitle={video.subtitle}
                aspectRatio={video.aspectRatio || "aspect-[9/16]"}
                maxHeightClass="max-h-[500px]"
                objectFit="object-contain"
              />
            ))}
          </div>

          {/* CTAs: Gallery & Social Media */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
            <Link
              to="/gallery#trade-show-section"
              className="inline-flex items-center justify-center px-6 py-3 bg-deli-red text-white font-medium rounded-lg shadow hover:bg-deli-red/90 transition-colors text-sm text-center"
            >
              View Full Photo & Video Gallery →
            </Link>
            <a
              href="https://www.tiktok.com/@Greendeli256"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 bg-white text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors text-sm text-center shadow-sm"
            >
              TikTok Highlights
            </a>
            <a
              href="https://www.instagram.com/greendelispices?igsi=MXhjZTlkNmZ3N3Y4ag=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 bg-white text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors text-sm text-center shadow-sm"
            >
              Instagram Highlights
            </a>
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
