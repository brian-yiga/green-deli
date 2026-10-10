import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CategoryTile({ title, image, video, itemCount, link }) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  // Sound toggle handler (stops navigation event)
  const handleToggleSound = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (video && videoRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
      if (!newMutedState && videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
      }
    }
  };

  const CardContent = (
    <div className="relative w-full h-full">
      {/* Background Video with Poster Fallback */}
      {video ? (
        <video 
          ref={videoRef}
          src={video}
          poster={image}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-75 transition-all duration-700 ease-out pointer-events-none"
        />
      ) : (
        <img 
          src={image} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-75 transition-all duration-700 ease-out"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 300 400'><rect width='100%' height='100%' fill='%23283328'/><text x='50%' y='50%' fill='%23EFE9DF' font-family='sans-serif' font-size='14' text-anchor='middle'>Video Placeholder</text></svg>";
          }}
        />
      )}
      
      {/* Dynamic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-deli-charcoal/90 via-deli-charcoal/30 to-transparent transition-opacity duration-500 group-hover:opacity-95 pointer-events-none" />

      {/* Audio Status Pill (Top Right) */}
      {video && (
        <button
          type="button"
          onClick={handleToggleSound}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          className="absolute top-3 right-3 md:top-4 md:right-4 z-20 p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-deli-red hover:border-deli-red transition-all duration-300 shadow-md flex items-center gap-1.5 px-3 cursor-pointer"
        >
          {isMuted ? (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6" />
              </svg>
              <span className="text-[10px] font-sans font-bold uppercase tracking-wider">Tap Sound</span>
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
              <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-deli-gold">Audio On</span>
            </>
          )}
        </button>
      )}

      {/* Card Text Content */}
      <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 pointer-events-none">
        {itemCount && (
          <span className="text-[10px] md:text-[12px] font-sans font-bold uppercase tracking-[0.2em] text-deli-gold mb-1 block transform transition-transform duration-500 group-hover:-translate-y-1">
            {itemCount}
          </span>
        )}
        <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-white uppercase leading-none mb-2 md:mb-3 tracking-tight drop-shadow-sm">
          {title}
        </h3>
        
        {/* Visual Callout for Audio / Explore */}
        <div className="flex items-center gap-2 text-white/80 group-hover:text-white transition-all duration-500 transform translate-y-1 md:translate-y-2 opacity-90 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-sans font-bold">
            Explore Details →
          </span>
          <div className="w-5 md:w-6 h-[1px] bg-deli-red transform origin-left transition-transform duration-500 scale-x-100 md:scale-x-0 group-hover:scale-x-100" />
        </div>
      </div>
    </div>
  );

  const cardClasses = "group relative aspect-[3/4] overflow-hidden bg-deli-charcoal rounded-[1.25rem] md:rounded-[1.5rem] block shadow-xl border border-white/10 hover:border-deli-gold/50 hover:shadow-[0_25px_50px_rgba(0,0,0,0.45)] transition-colors duration-500 select-none";

  if (link) {
    if (link.startsWith('http')) {
      return (
        <motion.a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -6, scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className={cardClasses}
        >
          {CardContent}
        </motion.a>
      );
    }

    return (
      <motion.div
        whileHover={{ y: -6, scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
      >
        <Link to={link} className={cardClasses}>
          {CardContent}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div 
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={cardClasses}
    >
      {CardContent}
    </motion.div>
  );
}