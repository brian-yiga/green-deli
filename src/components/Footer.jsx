import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-deli-charcoal text-deli-cream px-6 pt-16 pb-32 md:pb-16 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Mission */}
        <div className="col-span-1 md:col-span-1">
          <h2 className="font-display text-2xl font-bold uppercase tracking-tighter mb-6">
            Green Deli
          </h2>
          <p className="font-sans text-xs leading-relaxed opacity-70 tracking-wide uppercase">
            Uganda's finest spice apothecary. Sustainably sourced, 
            artisanal quality, and biologically potent botanicals 
            from the heart of the pearl.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-8 col-span-1 md:col-span-2">
          <div>
            <h3 className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-deli-red">Shop</h3>
            <ul className="flex flex-col gap-4 font-sans text-[11px] uppercase tracking-widest opacity-80">
              <li><a href="#" className="hover:text-deli-red transition-colors">All Spices</a></li>
              <li><a href="#" className="hover:text-deli-red transition-colors">Chili Oils</a></li>
              <li><a href="#" className="hover:text-deli-red transition-colors">Apothecary</a></li>
              <li><a href="#" className="hover:text-deli-red transition-colors">Gift Sets</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-deli-red">Company</h3>
            <ul className="flex flex-col gap-4 font-sans text-[11px] uppercase tracking-widest opacity-80">
              <li><a href="#" className="hover:text-deli-red transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-deli-red transition-colors">Wholesale</a></li>
              <li><a href="#" className="hover:text-deli-red transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-deli-red transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter / Social */}
        <div className="col-span-1">
          <h3 className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-deli-red">Connect</h3>
          <div className="flex gap-4 mb-8">
            {/* Simple Social Icons placeholders */}
            <div className="w-8 h-8 rounded-full border border-deli-cream/20 flex items-center justify-center hover:bg-deli-red transition-colors cursor-pointer">
              <span className="text-[10px]">IG</span>
            </div>
            <div className="w-8 h-8 rounded-full border border-deli-cream/20 flex items-center justify-center hover:bg-deli-red transition-colors cursor-pointer">
              <span className="text-[10px]">FB</span>
            </div>
          </div>
          <p className="font-sans text-[9px] opacity-40 uppercase tracking-widest">
            © 2026 Green Deli Uganda. <br /> All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}