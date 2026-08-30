import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MotionLink = motion.create(Link);

export default function CategoryTile({ title, image, itemCount }) {
  // Generate URL-friendly path from title
  const categoryPath = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <MotionLink 
      to={`/shop?category=${categoryPath}`}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      /* Reduced height on mobile: aspect-[4/3] mobile, aspect-square on tablet/desktop */
      className="group relative aspect-[4/3] overflow-hidden bg-deli-charcoal rounded-[1rem] block shadow-xl border border-white/5 hover:border-deli-gold/40 hover:shadow-[0_25px_50px_rgba(0,0,0,0.45)] transition-colors duration-500"
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
      <div className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-60 group-hover:opacity-100 group-hover:bg-deli-red group-hover:border-deli-red transition-all duration-300 transform group-hover:rotate-45 shadow-md">
        <svg width="12" height="12" className="md:w-3.5 md:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </div>

      {/* Text Content */}
      <div className="absolute bottom-5 left-5 right-5 md:bottom-8 md:left-8 md:right-8">
        <span className="text-[11px] md:text-[13px] font-sans font-bold uppercase tracking-[0.2em] text-deli-gold mb-1 md:mb-2 block transform transition-transform duration-500 group-hover:-translate-y-1">
          {itemCount} Products
        </span>
        <h3 className="font-display text-2xl sm:text-3xl md:text-5xl text-white uppercase leading-none mb-2 md:mb-4 tracking-tight drop-shadow-sm">
          {title}
        </h3>
        
        {/* Animated "Explore Collection" link */}
        <div className="flex items-center gap-2 md:gap-3 text-white/50 group-hover:text-white transition-all duration-500 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="text-[9px] md:text-[11px] uppercase tracking-[0.3em] font-sans font-bold">
            Explore Collection
          </span>
          <div className="w-6 md:w-8 h-[1px] bg-deli-red transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100" />
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="transform transition-transform duration-500 group-hover:translate-x-1">
            <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </MotionLink>
  );
}