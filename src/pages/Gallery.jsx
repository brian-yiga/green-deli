import React from 'react';

export default function Gallery() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
      
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-deli-red mb-2 block">
          Press & Live Updates
        </span>
        <h1 className="font-display text-4xl md:text-6xl uppercase text-deli-charcoal mb-4">
          Green Deli In The News
        </h1>
        <p className="font-sans text-sm uppercase tracking-wider text-deli-charcoal/70">
          Discover our latest milestones, community events, and feature stories across Uganda.
        </p>
      </div>

      {/* Social Media Bridge Banner */}
      <div className="bg-[#2A1E1A] text-deli-cream p-8 md:p-10 rounded-3xl mb-12 flex flex-col md:flex-row justify-between items-center gap-6 shadow-lg">
        <div>
          <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-deli-red mb-2 block">
            Media & Live Gallery
          </span>
          <h2 className="font-display text-2xl md:text-3xl uppercase text-deli-botanical mb-2">
            Looking for Photos & Behind-the-Scenes Clips?
          </h2>
          <p className="font-sans text-xs uppercase tracking-widest text-deli-cream/70 max-w-xl">
            We post daily video shorts, spice preparation guides, farm updates, and recipes directly on our social pages. Connect with us on Instagram and TikTok for full visual content!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <a
            href="https://www.instagram.com/greendelispices?igsi=MXhjZTlkNmZ3N3Y4ag=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-white/10 hover:bg-deli-red px-6 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all border border-white/10 hover:border-deli-red"
          >
            <img src="/assets/instagram-icon.webp" alt="Instagram" className="w-5 h-5 object-contain" />
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@Greendeli256"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-white/10 hover:bg-deli-red px-6 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all border border-white/10 hover:border-deli-red"
          >
            <img src="/assets/tiktok-icon.webp" alt="TikTok" className="w-5 h-5 object-contain" />
            TikTok
          </a>
        </div>
      </div>

      {/* Press & Feature Articles Grid */}
      <div className="space-y-8">
        
        {/* Article 1: Cookathon Sponsorship */}
        <div className="bg-deli-cream/50 border border-deli-charcoal/10 rounded-2xl p-6 md:p-8 hover:border-deli-red/40 transition-all duration-300 shadow-sm group">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] bg-deli-red/10 text-deli-red px-2.5 py-1 rounded-full">
              Event Sponsorship
            </span>
            <span className="font-sans text-xs text-deli-charcoal/50 uppercase tracking-wider">
              New Vision • Entertainment
            </span>
          </div>

          <h3 className="font-display text-2xl md:text-3xl uppercase text-deli-charcoal leading-snug mb-3 group-hover:text-deli-red transition-colors">
            Green Deli Sponsors Mama D's World Record Cookathon Attempt
          </h3>

          <p className="font-sans text-xs md:text-sm text-deli-charcoal/70 leading-relaxed uppercase tracking-wider mb-6">
            Proudly powering Ugandan culinary excellence! Green Deli joined forces as an official sponsor, supplying artisanal spices and botanicals to fuel Mama D's historic marathon cooking attempt.
          </p>

          {/* Provision for 3 photos (placeholders until you upload images) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-deli-charcoal/5 border border-deli-charcoal/10 flex items-center justify-center">
              <img 
                src="/assets/gallery/mama-d1.webp" 
                alt="Mama D Cookathon Event" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <span className="absolute text-[10px] font-sans uppercase tracking-widest text-deli-charcoal/40 pointer-events-none">
                Photo Provision #1
              </span>
            </div>

            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-deli-charcoal/5 border border-deli-charcoal/10 flex items-center justify-center">
              <img 
                src="/assets/gallery/mama-d2.webp" 
                alt="Green Deli Spice Display" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <span className="absolute text-[10px] font-sans uppercase tracking-widest text-deli-charcoal/40 pointer-events-none">
                Photo Provision #2
              </span>
            </div>

            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-deli-charcoal/5 border border-deli-charcoal/10 flex items-center justify-center">
              <img 
                src="/assets/gallery/mama-d3.webp" 
                alt="Live Venue Setup" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <span className="absolute text-[10px] font-sans uppercase tracking-widest text-deli-charcoal/40 pointer-events-none">
                Photo Provision #3
              </span>
            </div>
          </div>

          <a 
            href="https://www.newvision.co.ug/category/entertainment/mama-d-set-for-world-record-cookathon-attempt-NV_236580_082026"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.15em] text-deli-red hover:underline"
          >
            Read Full Article on New Vision
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>

        {/* Article 2: Product Launch Feature */}
        <div className="bg-deli-cream/50 border border-deli-charcoal/10 rounded-2xl p-6 md:p-8 hover:border-deli-red/40 transition-all duration-300 shadow-sm group">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] bg-deli-red/10 text-deli-red px-2.5 py-1 rounded-full">
              Press Coverage
            </span>
            <span className="font-sans text-xs text-deli-charcoal/50 uppercase tracking-wider">
              New Vision • Agriculture
            </span>
          </div>

          <h3 className="font-display text-2xl md:text-3xl uppercase text-deli-charcoal leading-snug mb-3 group-hover:text-deli-red transition-colors">
            Green Deli Unveils Innovative Tomato Sauce
          </h3>

          <p className="font-sans text-xs md:text-sm text-deli-charcoal/70 leading-relaxed uppercase tracking-wider mb-6">
            Featured in New Vision Agriculture: A look into Green Deli's sustainable processing initiatives, organic farm sourcing, and expanding product range across Ugandan markets.
          </p>

          <a 
            href="https://www.newvision.co.ug/category/agriculture/green-deli-unveils-innovative-tomato-sauce-po-NV_205057_082026"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.15em] text-deli-red hover:underline"
          >
            Read Full Article on New Vision
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>

      </div>
    </div>
  );
}