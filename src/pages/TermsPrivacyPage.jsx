import React from 'react';
import Badge from '../components/Badge';

export default function TermsPrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <header className="mb-16">
        <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-deli-red mb-4 block">Last Updated: October 2024</span>
        <h1 className="font-display text-4xl md:text-6xl uppercase leading-tight">Terms of Service & <br/>Privacy Policy</h1>
      </header>

      <div className="flex gap-2 mb-12 overflow-x-auto no-scrollbar pb-2">
        {['Terms of Service', 'Privacy Policy', 'MTN MoMo Security', 'Wholesale Data'].map(tab => (
          <Badge key={tab} className="whitespace-nowrap px-6 py-3 cursor-pointer hover:bg-deli-charcoal hover:text-white transition-colors">{tab}</Badge>
        ))}
      </div>

      <article className="prose prose-sm max-w-none font-sans text-deli-charcoal/80 leading-relaxed">
        <section className="mb-12">
          <h2 className="font-display text-2xl uppercase text-deli-charcoal mb-4">1. Terms of Service</h2>
          <p>By accessing Green Deli, you agree to be bound by these Terms of Service. Our platform provides artisanal food products sourced directly from Ugandan smallholders and artisanal producers.</p>
          
          <div className="my-10 bg-deli-cream border-l-4 border-deli-red p-8 rounded-r-3xl">
            <h3 className="font-display text-lg uppercase text-deli-charcoal mb-2">Order Fulfillment</h3>
            <p className="italic opacity-70">"We strive for perfection in every jar. Delivery timelines are estimates, particularly for our seasonal micro-batches."</p>
          </div>
        </section>

        <section className="mb-12 bg-deli-charcoal text-deli-cream p-10 rounded-[3rem] flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h2 className="font-display text-2xl uppercase mb-4">Encryption First</h2>
            <p className="text-xs opacity-70 leading-loose uppercase tracking-wider">
              All transaction requests are encrypted. Green Deli does not store your MoMo PIN. 
              Payments are processed through authorized merchant gateways with 2FA enabled as standard.
            </p>
          </div>
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-3xl">🔒</div>
        </section>
      </article>
    </div>
  );
}