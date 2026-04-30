import React from 'react';

export default function SupplierPage() {
  return (
    <div className="px-6 py-24 max-w-4xl mx-auto min-h-screen">
      <header className="mb-16">
        <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-deli-red font-bold">Partnerships</span>
        <h1 className="font-display text-5xl md:text-7xl uppercase mt-4 mb-6 leading-tight">
          Grow With <br/>Green Deli
        </h1>
        <p className="font-sans text-sm opacity-60 uppercase tracking-widest max-w-2xl leading-relaxed">
          We are committed to sourcing the finest Ugandan spices directly from the source. 
          If you are a farmer or producer committed to organic excellence, we want to hear from you.
        </p>
      </header>

      {/* Web3Forms Integration */}
      <form action="https://api.web3forms.com/submit" method="POST" className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Access Key - Replace with your actual key */}
        <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_KEY_HERE" />
        <input type="hidden" name="subject" value="New Supplier Inquiry - Green Deli" />
        <input type="checkbox" name="botcheck" className="hidden" />

        {/* Business Info */}
        <div className="space-y-2">
          <label className="font-sans text-[10px] uppercase tracking-widest font-bold opacity-50">Full Name / Contact Person</label>
          <input 
            type="text" name="name" required
            className="w-full bg-deli-charcoal/5 border-b border-deli-charcoal/20 p-4 font-sans text-sm focus:outline-none focus:border-deli-red transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label className="font-sans text-[10px] uppercase tracking-widest font-bold opacity-50">Farm / Business Name</label>
          <input 
            type="text" name="business_name" required
            className="w-full bg-deli-charcoal/5 border-b border-deli-charcoal/20 p-4 font-sans text-sm focus:outline-none focus:border-deli-red transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label className="font-sans text-[10px] uppercase tracking-widest font-bold opacity-50">Email Address</label>
          <input 
            type="email" name="email" required
            className="w-full bg-deli-charcoal/5 border-b border-deli-charcoal/20 p-4 font-sans text-sm focus:outline-none focus:border-deli-red transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label className="font-sans text-[10px] uppercase tracking-widest font-bold opacity-50">Location (e.g., Kabale, Mbarara)</label>
          <input 
            type="text" name="location" required
            className="w-full bg-deli-charcoal/5 border-b border-deli-charcoal/20 p-4 font-sans text-sm focus:outline-none focus:border-deli-red transition-colors"
          />
        </div>

        <div className="md:col-span-2 space-y-2">
          <label className="font-sans text-[10px] uppercase tracking-widest font-bold opacity-50">What do you produce?</label>
          <select 
            name="product_type"
            className="w-full bg-deli-charcoal/5 border-b border-deli-charcoal/20 p-4 font-sans text-sm focus:outline-none focus:border-deli-red appearance-none"
          >
            <option>Chillies & Peppers</option>
            <option>Organic Powders (Turmeric, Ginger, etc.)</option>
            <option>Whole Spices / Seeds</option>
            <option>Essential Oils / Extracts</option>
            <option>Other</option>
          </select>
        </div>

        <div className="md:col-span-2 space-y-2">
          <label className="font-sans text-[10px] uppercase tracking-widest font-bold opacity-50">Tell us about your farming practices</label>
          <textarea 
            name="message" rows="5" required
            placeholder="Are you organic certified? What is your monthly capacity?"
            className="w-full bg-deli-charcoal/5 border-b border-deli-charcoal/20 p-4 font-sans text-sm focus:outline-none focus:border-deli-red transition-colors"
          />
        </div>

        <div className="md:col-span-2 mt-8">
          <button 
            type="submit"
            className="w-full md:w-auto bg-deli-charcoal text-white px-12 py-6 rounded-full font-sans text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-deli-red transition-all shadow-xl active:scale-95"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
}