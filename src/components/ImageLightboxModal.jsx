import React, { useEffect, useCallback } from 'react';

/**
 * ImageLightboxModal Component
 * 
 * Provides an interactive, full-screen lightbox modal for viewing photo galleries.
 * Features:
 * - Square/sharp corners (rounded-none) per client design requirements
 * - Previous / Next navigation arrows and keyboard shortcuts (ArrowLeft, ArrowRight, Escape)
 * - Click backdrop to dismiss
 * - Scroll lock on document.body while active
 */
export default function ImageLightboxModal({
  isOpen,
  onClose,
  images = [],
  currentIndex = 0,
  onNavigate,
  galleryTitle = '',
}) {
  const total = images.length;
  const currentImage = images[currentIndex] || images[0];

  const handlePrev = useCallback((e) => {
    e?.stopPropagation();
    if (total <= 1) return;
    const nextIndex = (currentIndex - 1 + total) % total;
    onNavigate?.(nextIndex);
  }, [currentIndex, total, onNavigate]);

  const handleNext = useCallback((e) => {
    e?.stopPropagation();
    if (total <= 1) return;
    const nextIndex = (currentIndex + 1) % total;
    onNavigate?.(nextIndex);
  }, [currentIndex, total, onNavigate]);

  // Keyboard navigation & body scroll locking
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose?.();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentImage) return null;

  return (
    <div 
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200 select-none"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Enlarged Photo View"
    >
      {/* Top Header Controls */}
      <div 
        className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between text-white z-20 pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          {galleryTitle && (
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-deli-gold font-bold hidden sm:inline-block">
              {galleryTitle}
            </span>
          )}
          {galleryTitle && total > 1 && (
            <span className="text-white/40 hidden sm:inline-block">•</span>
          )}
          {total > 1 && (
            <span className="font-sans text-xs uppercase tracking-wider text-white/80 font-semibold bg-white/10 px-3 py-1 border border-white/20">
              Photo {currentIndex + 1} of {total}
            </span>
          )}
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close photo view"
          className="flex items-center gap-2 bg-white/10 hover:bg-deli-red text-white px-4 py-2 text-xs font-sans font-bold uppercase tracking-widest border border-white/20 hover:border-deli-red transition-all cursor-pointer"
        >
          <span>Close</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Main Image Container (Stop propagation so clicking image doesn't close) */}
      <div 
        className="relative max-w-5xl max-h-[82vh] w-full flex flex-col items-center justify-center pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative border border-white/20 bg-black shadow-2xl overflow-hidden">
          <img
            src={currentImage.src}
            alt={currentImage.alt || 'Enlarged photo view'}
            className="w-auto h-auto max-w-full max-h-[75vh] sm:max-h-[78vh] object-contain transition-transform duration-300"
          />
        </div>

        {/* Caption below image */}
        {currentImage.alt && (
          <p className="font-sans text-xs text-white/90 uppercase tracking-widest font-medium mt-3 text-center px-4">
            {currentImage.alt}
          </p>
        )}
      </div>

      {/* Navigation Arrows (Only shown when there are multiple photos) */}
      {total > 1 && (
        <>
          {/* Previous Arrow */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous photo"
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 sm:p-4 bg-black/60 hover:bg-deli-red text-white border border-white/20 hover:border-deli-red transition-all cursor-pointer z-20 group"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next photo"
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 sm:p-4 bg-black/60 hover:bg-deli-red text-white border border-white/20 hover:border-deli-red transition-all cursor-pointer z-20 group"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}

