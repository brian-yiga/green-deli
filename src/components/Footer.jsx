import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-deli-charcoal text-deli-cream px-6 pt-16 pb-32 md:pb-12 mt-20">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Mission */}
          <div className="col-span-1">
            <div>
              <img src="/assets/green-deli-logo.png" alt="Green Deli Logo" />
            </div>
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
                <li><Link to="/shop" className="hover:text-deli-red transition-colors">All Spices</Link></li>
                <li><Link to="/shop" className="hover:text-deli-red transition-colors">Chili Oils</Link></li>
                <li><Link to="/shop" className="hover:text-deli-red transition-colors">Apothecary</Link></li>
                <li><Link to="/shop" className="hover:text-deli-red transition-colors">Gift Sets</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-deli-red">Company</h3>
              <ul className="flex flex-col gap-4 font-sans text-[11px] uppercase tracking-widest opacity-80">
                <li><Link to="/story" className="hover:text-deli-red transition-colors">Our Story</Link></li>
                <li><Link to="/wholesale" className="hover:text-deli-red transition-colors">Wholesale</Link></li>
                <li><Link to="/contact" className="hover:text-deli-red transition-colors">Shipping</Link></li>
                <li><Link to="/contact" className="hover:text-deli-red transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Newsletter / Social */}
          <div className="col-span-1">
            <h3 className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-deli-red">Connect</h3>
            <div className="flex gap-4 mb-8">
              <div className="w-8 h-8 rounded-full border border-deli-cream/20 flex items-center justify-center hover:bg-deli-red transition-colors cursor-pointer group">
                <span className="text-[10px] group-hover:text-white">IG</span>
              </div>
              <div className="w-8 h-8 rounded-full border border-deli-cream/20 flex items-center justify-center hover:bg-deli-red transition-colors cursor-pointer group">
                <span className="text-[10px] group-hover:text-white">FB</span>
              </div>
            </div>
            <Link 
              to="/terms" 
              className="font-sans text-[10px] font-bold uppercase tracking-widest text-deli-red hover:underline underline-offset-4 decoration-1"
            >
              View Our Terms & Privacy Policy
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-deli-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-sans text-[9px] opacity-40 uppercase tracking-[0.2em] text-center md:text-left">
            © 2026 Green Deli Uganda. All Rights Reserved.
          </p>
          
          <div className="flex flex-col items-center md:items-end gap-1">
            <span className="font-sans text-[8px] uppercase tracking-[0.3em] opacity-30">Development & Digital</span>
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold opacity-60">
              Designed & Built by <span className="text-deli-red">Ivory Media House</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}