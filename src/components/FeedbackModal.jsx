import React, { useState } from 'react';

export default function FeedbackModal({ isOpen, onClose }) {
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    const formData = new FormData(e.target);
    formData.append('rating', rating);

    try {
      const response = await fetch('https://formspree.io/f/xoeqjvok', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setErrorMessage('Failed to send feedback. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-deli-charcoal/60 backdrop-blur-sm" onClick={onClose} />
      
      {/* Modal Card */}
      <div className="bg-deli-cream w-full max-w-lg rounded-[3rem] p-8 md:p-12 relative z-10 shadow-2xl animate-in zoom-in-95 duration-300">
        <button 
          onClick={onClose} 
          className="absolute top-8 right-8 opacity-40 hover:opacity-100 uppercase text-[10px] font-bold tracking-widest cursor-pointer"
        >
          [ Close ]
        </button>

        <h2 className="font-display text-3xl uppercase mb-2 text-deli-charcoal">Share your thoughts</h2>
        <p className="font-sans text-[10px] uppercase tracking-widest opacity-40 mb-8 text-deli-charcoal">
          How can we improve your Green Deli experience?
        </p>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <h3 className="font-display text-2xl uppercase text-deli-red">Thank You!</h3>
            <p className="font-sans text-sm text-deli-charcoal/80 leading-relaxed max-w-sm mx-auto">
              Your feedback has been delivered directly to our team. We appreciate your support in making Green Deli better!
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 bg-deli-charcoal text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-deli-red transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="_subject" value="New Customer Feedback - Green Deli" />

            <div>
              <label className="block font-sans text-[9px] uppercase tracking-widest font-bold mb-2 opacity-60 text-deli-charcoal">
                Your Rating ({rating} / 5)
              </label>
              <div className="flex gap-4">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setRating(num)}
                    className={`w-10 h-10 rounded-full border transition-colors font-bold text-sm cursor-pointer ${
                      rating === num
                        ? 'bg-deli-red text-white border-deli-red'
                        : 'border-deli-charcoal/20 text-deli-charcoal hover:border-deli-red'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-sans text-[9px] uppercase tracking-widest font-bold mb-2 opacity-60 text-deli-charcoal">
                Message
              </label>
              <textarea 
                name="message"
                required
                rows="4" 
                placeholder="Tell us about our spices or service..."
                className="w-full bg-white border border-deli-charcoal/10 rounded-2xl p-4 font-sans text-sm focus:outline-none focus:border-deli-red transition-colors text-deli-charcoal"
              />
            </div>

            {errorMessage && (
              <p className="text-deli-red font-sans text-xs font-semibold">{errorMessage}</p>
            )}

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-deli-red text-white py-5 rounded-full font-sans text-[10px] uppercase tracking-[0.2em] font-bold shadow-lg disabled:opacity-50 hover:bg-deli-charcoal transition-colors cursor-pointer"
            >
              {loading ? 'Sending...' : 'Submit Feedback'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}