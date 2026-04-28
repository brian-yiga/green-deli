import React from 'react';
import FormInput from '../components/FormInput';
import FormSelect from '../components/FormSelect';
import Button from '../components/Button';

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <header className="text-center mb-16">
        <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-deli-charcoal/40 mb-4 block">Get in Touch</span>
        <h1 className="font-display text-4xl md:text-6xl uppercase leading-none">
          Connect with our <span className="text-deli-red italic">Atelier</span>
        </h1>
        <p className="font-sans text-sm text-deli-charcoal/60 mt-6 max-w-2xl mx-auto leading-relaxed">
          Whether you are an artisanal chef seeking a wholesale partnership or a home cook with a spice query, we are here to assist you.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-deli-charcoal/5">
          <h2 className="font-display text-2xl uppercase mb-10">Send a Message</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FormInput label="Full Name" placeholder="e.g. John Doe" />
            <FormInput label="Email Address" placeholder="e.g. john@example.com" />
            <div className="md:col-span-2">
              <FormSelect 
                label="Inquiry Type" 
                options={[{label: 'Wholesale Inquiry', value: 'wholesale'}, {label: 'General Query', value: 'general'}]} 
              />
            </div>
            <div className="md:col-span-2">
              <label className="font-sans text-[10px] uppercase tracking-widest text-deli-charcoal/50 font-bold mb-2 block">Your Message</label>
              <textarea 
                className="w-full bg-transparent border-b border-deli-charcoal/20 py-3 px-1 font-sans text-sm focus:outline-none focus:border-deli-red h-32 resize-none"
                placeholder="How can we help you create today?"
              />
            </div>
            <Button variant="primary" className="md:w-fit">Submit Inquiry</Button>
          </form>
        </div>

        {/* Info & Map Column */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#A0F69B] p-6 rounded-[2rem] flex flex-col items-center justify-center text-center cursor-pointer hover:opacity-90">
              <div className="bg-deli-charcoal text-white p-2 rounded-lg mb-4">💬</div>
              <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-deli-charcoal">Chat on WhatsApp</span>
            </div>
            <div className="bg-deli-cream p-6 rounded-[2rem] border border-deli-charcoal/10 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-white transition-colors">
              <div className="bg-deli-charcoal text-white p-2 rounded-lg mb-4">✉️</div>
              <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-deli-charcoal">Email Us</span>
            </div>
          </div>

          {/* Physical Location Card */}
          <div className="bg-deli-charcoal rounded-[2rem] overflow-hidden relative aspect-square lg:aspect-auto lg:flex-1">
            <div className="absolute inset-0 opacity-30 grayscale">
              <img src="/assets/map-placeholder.jpg" alt="Map" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10 mt-auto p-8 bg-deli-cream m-4 rounded-2xl">
              <h3 className="font-display text-xl uppercase text-deli-charcoal mb-2">The Production Hub</h3>
              <p className="font-sans text-[11px] text-deli-charcoal/60 leading-relaxed uppercase tracking-wider mb-4">
                Plot 42, Artisan Valley, Industrial Area<br/>Kampala, Uganda
              </p>
              <a href="#" className="font-sans text-[10px] font-bold text-deli-red uppercase tracking-widest flex items-center gap-2">
                <span className="rotate-45">🚀</span> Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}