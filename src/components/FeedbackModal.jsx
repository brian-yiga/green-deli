import React from 'react';

export default function FeedbackModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-deli-charcoal/60 backdrop-blur-sm" onClick={onClose} />
      
      {/* Modal Card */}
      <div className="bg-deli-cream w-full max-w-lg rounded-[3rem] p-8 md:p-12 relative z-10 shadow-2xl animate-in zoom-in-95 duration-300">
        <button onClick={onClose} className="absolute top-8 right-8 opacity-40 hover:opacity-100 uppercase text-[10px] font-bold tracking-widest">
          [ Close ]
        </button>

        <h2 className="font-display text-3xl uppercase mb-2">Share your thoughts</h2>
        <p className="font-sans text-[10px] uppercase tracking-widest opacity-40 mb-8">How can we improve your Green Deli experience?</p>

        <form className="space-y-6">
          <div>
            <label className="block font-sans text-[9px] uppercase tracking-widest font-bold mb-2 opacity-60">Your Rating</label>
            <div className="flex gap-4">
              {[1, 2, 3, 4, 5].map((num) => (
                <button key={num} type="button" className="w-10 h-10 rounded-full border border-deli-charcoal/10 flex items-center justify-center hover:bg-deli-red hover:text-white transition-colors font-bold text-sm">
                  {num}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-sans text-[9px] uppercase tracking-widest font-bold mb-2 opacity-60">Message</label>
            <textarea 
              rows="4" 
              placeholder="Tell us about our spices or service..."
              className="w-full bg-white border border-deli-charcoal/10 rounded-2xl p-4 font-sans text-sm focus:outline-none focus:border-deli-red transition-colors"
            />
          </div>

          <button className="w-full bg-deli-red text-white py-5 rounded-full font-sans text-[10px] uppercase tracking-[0.2em] font-bold shadow-lg">
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}