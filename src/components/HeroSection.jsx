import { motion } from "framer-motion";
import Button from "./Button";

export default function HeroSection() {
  const scrollToRecipe = (e) => {
    e.preventDefault();
    const section = document.getElementById("recipe-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative px-4 md:px-8 max-w-7xl mx-auto w-full pt-6 pb-8 md:pt-12 md:pb-12 overflow-hidden">
      {/* Decorative Background Accents */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-deli-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-deli-botanical/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Grid: 5 columns left, 7 columns right for a wider video */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-stretch relative z-10">
        
        {/* Left Side: Headline, Subtext & CTAs (Span 5) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col justify-center text-left items-start py-2"
        >
          {/* Established Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="bg-deli-charcoal text-white text-[6px] md:text-[9px] font-sans font-bold px-3.5 py-1 rounded-full uppercase tracking-[0.2em] shadow-sm">
              Established 2022
            </span>
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-deli-charcoal/60 font-semibold">
              Uganda • Luwero Sourced
            </span>
          </motion.div>

          {/* Main Headline (Enhanced Framer Motion Animation) */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.9, 
              delay: 0.2, 
              ease: [0.215, 0.61, 0.355, 1.0] 
            }}
            className="font-display text-5xl sm:text-6xl md:text-7xl uppercase leading-[0.92] text-deli-charcoal mb-6 tracking-tight"
          >
            Explore <br />
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-deli-red inline-block"
            >
              Uganda's
            </motion.span> <br />
            Finest
          </motion.h1>

          {/* Subtitle / Narrative */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-sans text-base md:text-lg text-deli-charcoal/70 leading-relaxed mb-8 max-w-lg"
          >
            Single-origin, peak-potency botanicals, handcrafted masalas, and pure sun-dried spices cultivated in the fertile soils of Luwero and Mount Elgon.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <Button
              variant="primary"
              to="/shop"
              className="shadow-xl py-4 px-8 text-center w-full sm:w-auto"
            >
              Explore Spice Shop
            </Button>
            <button
              onClick={scrollToRecipe}
              className="px-8 py-4 font-sans text-[12px] font-bold uppercase tracking-[0.2em] transition-all duration-300 text-center border border-deli-charcoal/25 text-deli-charcoal hover:bg-deli-charcoal hover:text-white rounded-none cursor-pointer w-full sm:w-auto"
            >
              View Recipe of the Week
            </button>
          </motion.div>

          {/* Trust Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-deli-charcoal/10 text-deli-charcoal/60 font-sans text-[10px] uppercase tracking-widest"
          >
            <span>✓ 100% Organically Grown</span>
            <span>✓ Hand-Harvested</span>
            <span>✓ Direct Farm Partnerships</span>
          </motion.div>
        </motion.div>

        {/* Right Side: Wider, Borderless Full-Height Video Showcase (Span 7) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="lg:col-span-7 flex w-full h-full min-h-[420px] lg:min-h-full"
        >
          <div className="relative w-full h-full min-h-[420px] lg:min-h-full overflow-hidden bg-deli-charcoal group">
            <video
              autoPlay
              loop
              muted
              playsInline
              src="/hero-video.mp4"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Top-Left Floating Badge */}
            <div className="absolute top-5 left-5 bg-black/45 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-deli-red animate-pulse" />
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-white font-bold">
                Luwero Harvest
              </span>
            </div>

            {/* Bottom Floating Info Pill */}
            <div className="absolute bottom-5 left-5 right-5 bg-black/45 backdrop-blur-md p-4 rounded-xl border border-white/15 flex items-center justify-between text-white">
              <div>
                <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-deli-gold font-bold block">
                  Peak-Potency Botanicals
                </span>
                <span className="font-display text-sm uppercase">
                  Farm to Table
                </span>
              </div>
              <span className="text-xs text-white/80 font-sans uppercase tracking-widest font-bold">
                Uganda
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}