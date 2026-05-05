import React from 'react';
import { useNavigate } from 'react-router-dom';
import qrCodeImage from '/assets/store-qr-code.jpeg';

export default function TreasurySection() {
  const navigate = useNavigate();

  return (
    <section className="px-6 py-5 bg-deli-charcoal text-white rounded-[3rem] mx-4 md:mx-10 overflow-hidden relative">
      {/* Decorative Background Element */}
      <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        
        {/* Left Side: Minimalist QR Focus */}
        <div className="w-full md:w-2/5 flex justify-center">
          <div className="relative group">
            {/* Soft Glow/Aura behind the QR */}
            <div className="absolute inset-0 bg-deli-red/20 blur-[60px] rounded-full scale-150 opacity-50 group-hover:opacity-80 transition-opacity" />
            
            {/* The QR Code standalone */}
            <div className="relative w-48 h-48 bg-white p-4 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.6)] transform group-hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full overflow-hidden rounded-2xl">
                  <img 
                    src={qrCodeImage} 
                    alt="Scan to Shop" 
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-deli-red text-white text-[8px] font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-xl">
                  Shop Mobile
                </div>
            </div>
          </div>
        </div>

        {/* Right Side: Copy & Action */}
        <div className="w-full md:w-3/5 text-center md:text-left">
          <h2 className="font-display text-5xl md:text-7xl uppercase mb-6 leading-[0.85]">
            The Spice <br/><span className="text-deli-red">Treasury</span>
          </h2>
          <p className="font-sans text-sm opacity-60 mb-10 max-w-md uppercase tracking-[0.15em] leading-relaxed">
            Discover Uganda's finest botanical blends. From farm to your kitchen, explore a collection of masalas and oils crafted for the modern palate.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center md:justify-start items-center">
            <button 
              onClick={() => navigate('/shop')}
              className="group bg-white text-deli-charcoal px-12 py-5 rounded-full font-sans text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-deli-red hover:text-white transition-all shadow-xl active:scale-95 flex items-center gap-3"
            >
              Explore Collection
              <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
            </button>
            
            <div className="flex flex-col gap-1 text-left">
               <span className="font-sans text-[9px] uppercase tracking-widest font-bold text-deli-red">Scan to Order</span>
               <p className="font-sans text-[9px] uppercase tracking-widest opacity-40 leading-tight max-w-[150px]">
                 Browse our full digital menu on your phone.
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}