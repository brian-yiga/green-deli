import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the hook
import catalogueCover from '/assets/catalogue-cover.png'; 
import qrCodeImage from '/assets/store-qr-code.jpeg';

export default function CatalogueSection() {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <section className="px-6 py-20 bg-deli-charcoal text-white rounded-[3rem] mx-4 md:mx-10 overflow-hidden relative">
      {/* Decorative Background Element */}
      <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        
        {/* Left Side: Visual Mockups */}
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative group">
            <div className="w-48 h-64 bg-deli-cream/10 backdrop-blur-md border border-white/20 rounded-xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 overflow-hidden shadow-2xl">
              <img 
                src={catalogueCover} 
                alt="Green Deli Visual Guide" 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deli-charcoal/40 to-transparent" />
            </div>

            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white p-2 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full overflow-hidden rounded-lg">
                  <img 
                    src={qrCodeImage} 
                    alt="Scan for Digital Menu" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="absolute -top-2 -left-2 bg-deli-red text-white text-[7px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter">
                  Scan to Order
                </span>
            </div>
          </div>
        </div>

        {/* Right Side: Copy & Action */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="font-display text-4xl md:text-6xl uppercase mb-6 leading-[0.9]">
            The Digital <br/>Treasury
          </h2>
          <p className="font-sans text-sm opacity-60 mb-10 max-w-md uppercase tracking-widest leading-relaxed">
            Explore our signature masalas, powders, and spices. Access our 2026 digital experience directly on your device.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start items-center">
            {/* Action: Navigates to the /shop route */}
            <button 
              onClick={() => navigate('/shop')}
              className="bg-deli-red text-white px-10 py-5 rounded-full font-sans text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-deli-red transition-all shadow-xl active:scale-95"
            >
              explore
            </button>
            
            <span className="font-sans text-[9px] uppercase tracking-widest opacity-40 md:max-w-[140px] leading-tight">
              Scan the QR code to save our menu to your phone
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}