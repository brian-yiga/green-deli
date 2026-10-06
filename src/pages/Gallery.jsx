import React from 'react';

// Lugogo Independence Trade Show Media Assets
const tradeShowPhotos = [
  '/assets/uma-trade-show/uma1.jpeg',
  '/assets/uma-trade-show/uma2.jpeg',
  '/assets/uma-trade-show/uma3.jpeg',
  '/assets/uma-trade-show/uma4.jpeg',
  '/assets/uma-trade-show/uma5.jpeg',
  '/assets/uma-trade-show/uma6.jpeg',
  '/assets/uma-trade-show/uma7.jpeg',
  '/assets/uma-trade-show/uma8.jpeg',
];

const tradeShowVideos = [
  {
    src: '/assets/uma-trade-show/uma-video.mp4',
    poster: '/video-thumbs/uma-video-thumb.png',
    title: 'Exhibition Booth Showcase',
  },
  {
    src: '/assets/uma-trade-show/uma-video2.mp4',
    poster: '/video-thumbs/uma-video-thumb2.png',
    title: 'Live Product Demos & Customer Interactions',
  },
];

export default function Gallery() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
      
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-deli-red mb-2 block">
          Press & Live Updates
        </span>
        <h1 className="font-display text-4xl md:text-6xl uppercase text-deli-botanical mb-4">
          Green Deli In The News
        </h1>
        <p className="font-sans text-sm uppercase tracking-wider text-deli-botanical font-medium">
          Discover our latest milestones, community events, and feature stories across Uganda.
        </p>
      </div>

      {/* Social Media Bridge Banner */}
      <div className="bg-[#2A1E1A] text-deli-cream p-8 md:p-10 rounded-3xl mb-12 flex flex-col md:flex-row justify-between items-center gap-6 shadow-lg">
        <div>
          <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-deli-orange mb-2 block">
            Media & Live Gallery
          </span>
          <h2 className="font-display text-2xl md:text-3xl uppercase text-deli-gold mb-2">
            Looking for Photos & Behind-the-Scenes Clips?
          </h2>
          <p className="font-sans text-xs uppercase tracking-widest text-deli-cream/90 max-w-xl leading-relaxed">
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
      <div className="space-y-12">
        
        {/* NEW SECTION: Independence Trade Show at Lugogo Grounds */}
        <div className="bg-gradient-to-br from-amber-500/10 via-deli-cream/60 to-red-500/10 border-2 border-deli-red/30 rounded-3xl p-6 md:p-10 shadow-md">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] bg-deli-red text-white px-3 py-1 rounded-full">
                Featured Event
              </span>
              <span className="font-sans text-xs text-deli-charcoal/70 uppercase tracking-wider font-semibold">
                Lugogo Show Grounds • Kampala
              </span>
            </div>
            <span className="font-sans text-xs text-deli-red font-bold uppercase tracking-wider">
              Independence Trade Show Week
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-5xl uppercase text-deli-charcoal leading-snug mb-3">
            Experience Green Deli Live at Lugogo!
          </h2>

          <p className="font-sans text-xs md:text-sm text-deli-charcoal/80 leading-relaxed uppercase tracking-wider mb-8 max-w-3xl">
            Highlights and live footage from our booth at the Lugogo Trade Show Grounds. Check out our photo gallery and video reels showcasing customer tasting sessions, live product demos, and our full organic spice lineup.
          </p>

          {/* Videos Grid */}
          <div className="mb-8">
            <h3 className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-deli-botanical mb-4">
              Event Video Reels
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tradeShowVideos.map((video, idx) => (
                <div key={idx} className="bg-black rounded-2xl overflow-hidden border border-deli-charcoal/10 shadow-md">
                  <div className="aspect-[9/16] max-h-[460px] mx-auto relative">
                    <video 
                      controls 
                      playsInline
                      preload="metadata"
                      poster={video.poster || undefined}
                      className="w-full h-full object-cover"
                    >
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support video playback.
                    </video>
                  </div>
                  <div className="p-3 bg-deli-charcoal/90 text-center">
                    <p className="font-sans text-xs text-deli-cream uppercase tracking-wider font-medium">
                      {video.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo Gallery Grid */}
          <div>
            <h3 className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-deli-botanical mb-4">
              Trade Show Highlights Photo Gallery
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {tradeShowPhotos.map((photo, idx) => (
                <div 
                  key={idx} 
                  className="relative aspect-square rounded-2xl overflow-hidden bg-deli-charcoal/5 border border-deli-charcoal/10 shadow-sm group"
                >
                  <img 
                    src={photo} 
                    alt={`Independence Trade Show Photo ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <span className="text-[10px] text-white font-sans uppercase tracking-widest font-bold">
                      Photo #{idx + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links Callout */}
          <div className="mt-8 pt-6 border-t border-deli-charcoal/10 flex flex-wrap items-center justify-between gap-4">
            <p className="font-sans text-xs uppercase tracking-wider text-deli-charcoal/70">
              Want more behind-the-scenes trade show footage?
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.tiktok.com/@Greendeli256"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.15em] text-deli-red hover:underline"
              >
                Watch on TikTok
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/greendelispices?igsi=MXhjZTlkNmZ3N3Y4ag=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.15em] text-deli-red hover:underline"
              >
                View on Instagram
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Article 1: Grill Wars Edition IX Co-Sponsorship */}
        <div className="bg-deli-cream/50 border border-deli-charcoal/10 rounded-2xl p-6 md:p-8 hover:border-deli-red/40 transition-all duration-300 shadow-sm group">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] bg-deli-red/10 text-deli-red px-2.5 py-1 rounded-full">
              Event Co-Sponsorship
            </span>
            <span className="font-sans text-xs text-deli-charcoal/50 uppercase tracking-wider">
              Shisha Nyama • Bugolobi
            </span>
          </div>

          <h3 className="font-display text-2xl md:text-3xl uppercase text-deli-charcoal leading-snug mb-3 group-hover:text-deli-red transition-colors">
            Green Deli Co-Sponsors Grill Wars Edition IX
          </h3>

          <p className="font-sans text-xs md:text-sm text-deli-charcoal/70 leading-relaxed uppercase tracking-wider mb-6">
            Seasoning the flames! Green Deli Spices took center stage as a main co-sponsor for the August Edition IX of the Grill Wars hosted at Shisha Nyama Bar and Restaurant in Bugolobi. Watch the video highlights from the action packed grill competition below.
          </p>

          {/* TikTok Video Player Section */}
          <div className="max-w-md mx-auto mb-6 rounded-2xl overflow-hidden border border-deli-charcoal/10 shadow-md bg-black">
            <video 
              controls 
              className="w-full h-auto rounded-2xl" 
              poster="/assets/gallery/grill-wars-thumb.webp"
              preload="metadata"
            >
              <source src="/assets/gallery/grill-wars-edition-9.MP4" type="video/mp4" />
              Your browser does not support video playback.
            </video>
          </div>

          <a 
            href="https://www.tiktok.com/@Greendeli256"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.15em] text-deli-red hover:underline"
          >
            Watch & Follow on TikTok
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>

        {/* Article 2: Cookathon Sponsorship */}
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

          {/* Provision for 3 photos */}
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

        {/* Article 3: Product Launch Feature */}
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