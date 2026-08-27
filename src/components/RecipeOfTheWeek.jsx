import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Button from "./Button";

export default function RecipeOfTheWeek() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const togglePlayAndSound = () => {
    if (!videoRef.current) return;

    if (isMuted) {
      // First click: Unmute and play with sound
      videoRef.current.muted = false;
      setIsMuted(false);
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      // Subsequent clicks: Toggle pause/play
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleSoundOnly = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
    if (!nextMuted && videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const requiredSpices = [
    {
      name: "Pilau Masala Blend",
      note: "Signature hand-roasted Luwero blend of cumin, cardamom, and cloves",
      link: "/shop?category=masalas",
    },
    {
      name: "Black Pepper Powder",
      note: "Sun-dried and freshly milled for crisp, sharp heat",
      link: "/shop?category=powders",
    },
    {
      name: "Garlic & Ginger Powder",
      note: "Potent bioactive aromatics forming the savory flavor foundation",
      link: "/shop?category=powders",
    },
    {
      name: "Cinnamon Sticks",
      note: "Sweet whole bark for slow-release warmth and rich aroma",
      link: "/shop?category=masalas",
    },
  ];

  return (
    <section
      id="recipe-section"
      className="px-4 md:px-8 max-w-7xl mx-auto w-full py-8 scroll-mt-24"
    >
      <div className="bg-gradient-to-br from-[#1E261D] via-deli-charcoal to-[#182017] text-deli-cream rounded-[1rem] p-6 md:p-12 lg:p-16 border border-white/10 shadow-2xl relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-deli-botanical/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-deli-red/15 blur-[100px] rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          {/* Left Side: Interactive Video Player */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div
              onClick={togglePlayAndSound}
              className="relative group rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white/15 bg-black/40 cursor-pointer"
            >
              <video
                ref={videoRef}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                src="/recipe-video.mp4"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30 pointer-events-none" />

              {/* Floating Live / Status Badge */}
              <div className="absolute top-5 left-5 flex items-center gap-2 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                <span
                  className={`w-2 h-2 rounded-full ${
                    isPlaying ? "bg-deli-red animate-pulse" : "bg-white/40"
                  }`}
                />
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-white font-bold">
                  {isPlaying ? "Kitchen Video" : "Paused"}
                </span>
              </div>

              {/* Top-Right Sound Button */}
              <button
                onClick={toggleSoundOnly}
                aria-label={isMuted ? "Unmute video" : "Mute video"}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/25 flex items-center justify-center text-white hover:scale-110 hover:bg-deli-red transition-all duration-300 z-20 shadow-lg"
              >
                {isMuted ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <line x1="23" y1="9" x2="17" y2="15" />
                    <line x1="17" y1="9" x2="23" y2="15" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  </svg>
                )}
              </button>

              {/* Center Play / Unmute CTA Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none p-6 text-center">
                {isMuted ? (
                  <div className="bg-black/65 backdrop-blur-md border border-white/30 px-5 py-3 rounded-full flex items-center gap-3 shadow-2xl transform group-hover:scale-105 transition-all">
                    <div className="w-8 h-8 rounded-full bg-deli-red flex items-center justify-center text-white shadow-md">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                    <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-white font-bold">
                      Click to Play with Sound
                    </span>
                  </div>
                ) : !isPlaying ? (
                  <div className="w-16 h-16 rounded-full bg-deli-red/90 backdrop-blur-md flex items-center justify-center text-white shadow-2xl">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="translate-x-0.5">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                ) : (
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-14 h-14 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="6" y="4" width="4" height="16" />
                      <rect x="14" y="4" width="4" height="16" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Bottom Caption on Video */}
              <div className="absolute bottom-5 left-5 right-5 text-left pointer-events-none">
                <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-deli-gold font-bold block mb-1">
                  {isMuted ? "Sound: Off (Tap to Hear Recipe)" : "Sound: Playing"}
                </span>
                <p className="font-display text-lg text-white font-medium leading-snug">
                  Watch the craft behind Uganda's iconic culinary staple
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Recipe Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-7 flex flex-col text-left"
          >
            {/* Header Badge & Category */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-deli-red text-white text-[9px] font-sans font-bold px-3 py-1 rounded-full uppercase tracking-[0.2em] shadow-sm">
                Recipe of the Week
              </span>
              <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-white/60">
                East African Heritage Dish
              </span>
            </div>

            {/* Dish Title */}
            <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tight text-white leading-[1.05] mb-4">
              Ugandan Spiced <br />
              <span className="text-deli-gold">Chicken Pilau</span>
            </h2>

            {/* Recipe Meta Stats */}
            <div className="flex flex-wrap gap-4 md:gap-6 py-3 border-y border-white/10 mb-6 text-white/80 font-sans text-xs">
              <div className="flex items-center gap-2">
                <span className="text-deli-gold uppercase tracking-widest text-[10px] font-bold">Prep:</span>
                <span>15 Mins</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-deli-gold uppercase tracking-widest text-[10px] font-bold">Cook:</span>
                <span>35 Mins</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-deli-gold uppercase tracking-widest text-[10px] font-bold">Servings:</span>
                <span>4 - 6 Plates</span>
              </div>
            </div>

            {/* Dish Description */}
            <p className="font-sans text-sm md:text-base leading-relaxed text-white/75 mb-6 max-w-xl">
              A celebratory East African rice dish slow-simmered in golden broth and fragrant botanicals. Whole and freshly milled spices bloom together to infuse tender chicken and basmati rice with deep, aromatic warmth and signature caramelized flavor.
            </p>

            {/* Required Green Deli Spices List */}
            <div className="mb-8">
              <h3 className="font-sans text-[11px] uppercase tracking-[0.25em] font-bold text-deli-gold mb-3.5">
                Required Green Deli Spices:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {requiredSpices.map((spice, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full bg-deli-red/30 border border-deli-red flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-deli-gold text-[10px] font-bold">✓</span>
                    </div>
                    <div>
                      <div className="font-sans text-xs font-bold text-white tracking-wide">
                        {spice.name}
                      </div>
                      <div className="font-sans text-[10px] text-white/60 leading-tight mt-0.5">
                        {spice.note}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prominent CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                variant="primary"
                to="/shop"
                className="w-full sm:w-auto shadow-2xl py-4 px-10 text-center"
              >
                Buy Required Spices
              </Button>
              <span className="font-sans text-[10px] uppercase tracking-widest text-white/50 text-center sm:text-left">
                100% Organically Sourced from Luwero
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
