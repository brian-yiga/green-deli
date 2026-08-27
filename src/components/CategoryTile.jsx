import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MotionLink = motion.create(Link);

export default function CategoryTile({ title, image, itemCount }) {
  // We generate a URL-friendly path from the title (e.g., "Chili Oils" becomes "chili-oils")
  const categoryPath = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <MotionLink 
      to={`/shop?category=${categoryPath}`}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative aspect-square w-full overflow-hidden bg-deli-charcoal rounded-[1rem] block shadow-xl border border-white/5 hover:border-deli-gold/40 hover:shadow-[0_25px_50px_rgba(0,0,0,0.45)] transition-colors duration-500"
    >
      {/* Background Image with Overlay */}
      <img 
        src={image} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:scale-110 group-hover:opacity-55 transition-all duration-700 ease-out"
      />
      
      {/* Dynamic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-deli-charcoal via-deli-charcoal/25 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

      {/* Floating Top-Right Action Pill */}
      <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-60 group-hover:opacity-100 group-hover:bg-deli-red group-hover:border-deli-red transition-all duration-300 transform group-hover:rotate-45 shadow-md">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </div>

      {/* Text Content */}
      <div className="absolute bottom-8 left-8 right-8">
        <span className="text-[13px] font-sans font-bold uppercase tracking-[0.2em] text-deli-gold mb-2 block transform transition-transform duration-500 group-hover:-translate-y-1">
          {itemCount} Products
        </span>
        <h3 className="font-display text-4xl md:text-5xl text-white uppercase leading-none mb-4 tracking-tight drop-shadow-sm">
          {title}
        </h3>
        
        {/* Animated "Explore Collection" link */}
        <div className="flex items-center gap-3 text-white/50 group-hover:text-white transition-all duration-500 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="text-[11px] uppercase tracking-[0.3em] font-sans font-bold">
            Explore Collection
          </span>
          <div className="w-8 h-[1px] bg-deli-red transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100" />
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="transform transition-transform duration-500 group-hover:translate-x-1">
            <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </MotionLink>
  );
}