import React from 'react';

/**
 * Reusable VideoFrame Component
 * 
 * Supports:
 * - Standard web video formats (.mp4, .webm, .ogg)
 * - External video links (YouTube, TikTok, embed iframes)
 * - Graceful fallback / placeholder if video is pending or loading fails
 */
export default function VideoFrame({
  src,
  poster,
  title,
  subtitle,
  aspectRatio = "aspect-[9/16]",
  maxHeightClass = "max-h-[520px]",
  objectFit = "object-contain",
  controls = true,
  autoPlay = false,
  loop = false,
  muted = false,
  playsInline = true,
  className = "",
}) {
  // Check if src is an embed or streaming URL
  const isYouTube = Boolean(
    src && (src.includes("youtube.com") || src.includes("youtu.be"))
  );
  const isEmbed = Boolean(
    src && (isYouTube || src.includes("/embed/") || src.includes("player."))
  );

  const getEmbedUrl = (url) => {
    if (!url) return "";
    if (url.includes("youtube.com/watch?v=")) {
      return url.replace("watch?v=", "embed/");
    }
    if (url.includes("youtu.be/")) {
      const id = url.split("youtu.be/")[1]?.split("?")[0];
      return `https://www.youtube.com/embed/${id}`;
    }
    return url;
  };

  return (
    <div className={`flex flex-col bg-deli-charcoal rounded-2xl overflow-hidden border border-deli-charcoal/20 shadow-xl ${className}`}>
      {/* Video Container */}
      <div className={`relative w-full bg-black ${aspectRatio} ${maxHeightClass} mx-auto flex items-center justify-center overflow-hidden`}>
        {isEmbed ? (
          <iframe
            src={getEmbedUrl(src)}
            title={title || "Video Player"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        ) : src ? (
          <video
            src={src}
            poster={poster || undefined}
            controls={controls}
            autoPlay={autoPlay}
            loop={loop}
            muted={muted}
            playsInline={playsInline}
            preload="metadata"
            className={`w-full h-full ${objectFit} bg-black`}
            onError={(e) => {
              // Graceful fallback if video file not yet present
              e.currentTarget.style.display = 'none';
              const fallbackEl = e.currentTarget.parentElement?.querySelector('.video-fallback-notice');
              if (fallbackEl) fallbackEl.classList.remove('hidden');
            }}
          >
            <source src={src} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        ) : null}

        {/* Fallback Notice if video is missing or errors out */}
        <div className={`video-fallback-notice ${src ? 'hidden' : 'flex'} absolute inset-0 flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-deli-charcoal via-[#23201d] to-deli-charcoal text-deli-cream`}>
          <div className="w-14 h-14 rounded-full bg-deli-red/20 border border-deli-red/40 flex items-center justify-center mb-3 text-deli-red">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <span className="text-xs font-sans font-bold uppercase tracking-wider text-deli-gold mb-1">
            Incoming Video Reel
          </span>
          <p className="text-[11px] font-sans text-deli-cream/70 max-w-[200px]">
            {title || "Trade show media footage"}
          </p>
        </div>
      </div>

      {/* Video Info Card (Title & Subtitle if provided) */}
      {(title || subtitle) && (
        <div className="p-4 bg-deli-charcoal/95 border-t border-white/10 flex flex-col justify-center text-center">
          {title && (
            <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-deli-cream">
              {title}
            </h4>
          )}
          {subtitle && (
            <p className="font-sans text-xs text-deli-gold tracking-wide mt-0.5">
              {subtitle}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

