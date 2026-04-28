import React from 'react';
import Button from './Button';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img 
        src="/assets/HomeHeroBg.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Green Deli Spices"
      />
      
      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Glassmorphic Container */}
      <div className="relative z-10 w-[90%] max-w-xl p-8 md:p-12 backdrop-blur-xl bg-white/10 border border-white/20 rounded-[2.5rem] text-center shadow-2xl">
        <span className="inline-block font-sans text-[10px] uppercase tracking-[0.4em] text-white/80 mb-4">
          Established 2026 • Uganda
        </span>
        
        <h2 className="font-display text-4xl md:text-6xl text-white leading-[0.9] uppercase mb-8">
          Explore <br/> 
          <span className="text-deli-red">Uganda's</span> <br/> 
          Larder
        </h2>

        <div className="flex flex-col md:flex-row gap-4">
          <Button variant="primary">Shop Collection</Button>
          <Button variant="outline">Our Story</Button>
        </div>
      </div>
    </section>
  );
}