import React from 'react';
import WholesaleForm from '../components/WholesaleForm';
import Badge from '../components/Badge';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function WholesalePage() {
    useDocumentTitle('Wholesalers');
  const benefits = [
    { title: "Custom Blends", desc: "Tailored spice profiles for your specific restaurant menu or product line." },
    { title: "Ethical Sourcing", desc: "Direct-from-farm partnerships ensuring fair wages and peak biological potency." },
    { title: "Eco-Packaging", desc: "Bulk sizes available in biodegradable or reusable high-barrier containers." }
  ];

  return (
    <div className="flex flex-col gap-16 pb-24">
      {/* Editorial Hero Header */}
      <section className="bg-deli-charcoal text-deli-cream pt-20 pb-16 px-6 text-center md:text-left">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div>
            <Badge variant="hot" className="mb-4">B2B Partnerships</Badge>
            <h1 className="font-display text-4xl md:text-7xl uppercase leading-tight mb-6">
              Spice the <br/> <span className="text-deli-red">Hospitality</span> Sector
            </h1>
            <p className="font-sans text-sm opacity-70 max-w-md leading-relaxed tracking-wide">
              Supplying Uganda's top chefs, lodges, and retailers with the most vibrant, 
              biologically active botanicals from the region.
            </p>
          </div>
          <div className="hidden md:block aspect-video rounded-[2rem] overflow-hidden">
            <img 
              src="/assets/wholesale-hero.jpg" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              alt="Bulk Spices"
            />
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex flex-col gap-4 border-l border-deli-red/20 pl-6">
              <h3 className="font-display text-xl uppercase text-deli-charcoal">{benefit.title}</h3>
              <p className="font-sans text-xs text-deli-charcoal/60 leading-relaxed uppercase tracking-wider">
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
          <h4 className="font-sans text-[10px] uppercase tracking-[.3em] font-bold text-deli-red mb-2">Global Shipping</h4>
          <p className="font-sans text-xs text-deli-charcoal/50 max-w-xs mx-auto uppercase tracking-widest">
            Dispatching weekly from Kampala via air freight and courier to over 20 countries.
          </p>
        </div>
      </section>
    </div>
  );
}