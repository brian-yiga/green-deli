import React from 'react';
import { motion } from 'framer-motion';
import WholesaleForm from '../components/WholesaleForm';
import Badge from '../components/Badge';
import useDocumentTitle from '../hooks/useDocumentTitle';
import BackToTop from '../components/BackToTop';

export default function WholesalePage() {
  useDocumentTitle('Wholesalers');

  const benefits = [
    { title: "Custom Blends", desc: "Tailored spice profiles for your specific restaurant menu or product line." },
    { title: "Ethical Sourcing", desc: "Direct-from-farm partnerships ensuring fair wages and peak biological potency." },
    { title: "Eco-Packaging", desc: "Bulk sizes available in biodegradable or reusable high-barrier containers." }
  ];

  return (
    <div className="flex flex-col gap-16">
      
      {/* Refactored Hero Header (Clean Split Grid with Framer Motion) */}
      <section className="pt-24 pb-12 px-6 bg-white border-b border-deli-charcoal/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-start"
          >
            <Badge variant="hot" className="mb-4">B2B Partnerships</Badge>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase leading-[1.05] text-deli-charcoal mb-6">
              Spice the <br /> 
              <span className="text-deli-red">Hospitality</span> Sector
            </h1>
            
            <p className="font-sans text-base sm:text-lg text-deli-charcoal/70 leading-relaxed tracking-wide mb-8 max-w-lg">
              Supplying Uganda's top chefs, lodges, and retailers with the most vibrant, 
              biologically active botanicals from the region.
            </p>

            {/* Quick Stat Bar */}
            <div className="flex items-center gap-6 border-t border-deli-charcoal/10 pt-6 w-full">
              <div>
                <span className="font-display text-2xl text-deli-red block">100%</span>
                <span className="font-sans text-[10px] uppercase tracking-widest text-deli-charcoal/60">Pure Sourcing</span>
              </div>
              <div className="h-8 w-[1px] bg-deli-charcoal/10" />
              <div>
                <span className="font-display text-2xl text-deli-charcoal block">Bulk</span>
                <span className="font-sans text-[10px] uppercase tracking-widest text-deli-charcoal/60">Tier Pricing</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Image Stage */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:col-span-7 flex w-full"
          >
            <div className="relative w-full aspect-[16/9] lg:aspect-[4/3] rounded-[2rem] overflow-hidden bg-deli-charcoal group border border-deli-charcoal/5 shadow-xl">
              <img 
                src="/assets/HomeHeroBg.jpg" 
                alt="Bulk Spices Wholesale"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Top Floating Badge */}
              <div className="absolute top-5 left-5 bg-black/45 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-deli-red animate-pulse" />
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-white font-bold">
                  Wholesale Direct
                </span>
              </div>

              {/* Bottom Info Bar */}
              <div className="absolute bottom-5 left-5 right-5 bg-black/45 backdrop-blur-md p-4 rounded-xl border border-white/15 flex items-center justify-between text-white">
                <div>
                  <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-deli-gold font-bold block">
                    Custom Spice Processing
                  </span>
                  <span className="font-display text-sm uppercase">
                    Commercial & Institutional Orders
                  </span>
                </div>
                <span className="text-xs text-white/80 font-sans uppercase tracking-widest font-bold">
                  Kampala
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Benefits Grid */}
      <section className="px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex flex-col gap-4 border-l border-deli-red/20 pl-6">
              <h3 className="font-display text-xl uppercase text-deli-charcoal">{benefit.title}</h3>
              <p className="font-sans text-sm text-deli-charcoal/60 leading-relaxed uppercase tracking-wider">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* The Form Section */}
      <section className="px-6 max-w-3xl mx-auto w-full">
        <WholesaleForm />
      </section>

      {/* Logistics Note */}
      <section className="px-6 text-center">
        <div className="bg-deli-cream inline-block p-8 rounded-[2rem] border border-deli-charcoal/5">
          <h4 className="font-sans text-[16px] uppercase tracking-[.3em] font-bold text-deli-red mb-2">Global Shipping</h4>
          <p className="font-sans text-sm text-deli-charcoal/50 max-w-xs mx-auto uppercase tracking-widest">
            Dispatching weekly from Kampala via air freight and courier to over 20 countries.
          </p>
        </div>
      </section>

      <BackToTop />
    </div>
  );
}