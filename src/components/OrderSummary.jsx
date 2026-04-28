import React from 'react';
import Button from './Button';
import PriceDisplay from './PriceDisplay';

export default function OrderSummary({ subtotal = 0, shipping = 0 }) {
  const total = subtotal + shipping;

  return (
    <div className="bg-deli-cream p-6 rounded-3xl border border-deli-charcoal/5">
      <h3 className="font-display text-xl uppercase mb-6">Order Summary</h3>
      
      <div className="flex flex-col gap-4 border-b border-deli-charcoal/10 pb-6 mb-6">
        <div className="flex justify-between items-center">
          <span className="font-sans text-[10px] uppercase tracking-widest opacity-50">Subtotal</span>
          <PriceDisplay price={subtotal} />
        </div>
        <div className="flex justify-between items-center">
          <span className="font-sans text-[10px] uppercase tracking-widest opacity-50">Shipping</span>
          <PriceDisplay price={shipping} />
        </div>
      </div>

      <div className="flex justify-between items-center mb-8">
        <span className="font-sans text-xs font-bold uppercase tracking-[0.2em]">Total</span>
        <PriceDisplay price={total} className="text-lg" />
      </div>

      <Button variant="primary">Place Order</Button>
      <p className="mt-4 text-center text-[9px] font-sans uppercase tracking-widest opacity-40">
        Secure Mobile Payments via Airtel & MTN
      </p>
    </div>
  );
}