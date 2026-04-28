import React from 'react';
import Button from './Button';

export default function FeatureBlock({ title, subtitle, description, image, reversed = false }) {
  return (
    <section className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-20 py-12 px-6 max-w-7xl mx-auto`}>
      
      {/* Image Side */}
      <div className="w-full md:w-1/2 aspect-[4/5] rounded-[3rem] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Side */}
      <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
        <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-deli-red mb-4">
          {subtitle}
        </span>
        <h2 className="font-display text-4xl md:text-6xl uppercase leading-[0.9] text-deli-charcoal mb-6">
          {title}
        </h2>
        <p className="font-sans text-sm leading-relaxed text-deli-charcoal/60 mb-8 max-w-md">
          {description}
        </p>
        <Button variant="secondary" className="w-fit">
          Explore More
        </Button>
      </div>
    </section>
  );
}
