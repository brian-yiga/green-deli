import React, { use } from "react";
import FormInput from "../components/FormInput";
import FormSelect from "../components/FormSelect";
import OrderSummary from "../components/OrderSummary";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function CheckoutPage() {
  useDocumentTitle("Checkout");
  const districts = [
    { label: "Kampala", value: "kampala" },
    { label: "Entebbe", value: "entebbe" },
    { label: "Jinja", value: "jinja" },
    { label: "Wakiso", value: "wakiso" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 py-10">
      <header className="mb-12 border-b border-deli-charcoal/5 pb-8">
        <h1 className="font-display text-3xl md:text-5xl uppercase tracking-tighter">
          Secure Checkout
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Details & Shipping */}
        <div className="lg:col-span-7 flex flex-col gap-12">
          {/* Section 1: Contact */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-6 h-6 rounded-full bg-deli-charcoal text-white text-[10px] flex items-center justify-center font-bold">
                1
              </span>
              <h2 className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold">
                Contact Information
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInput
                label="Email Address"
                type="email"
                placeholder="you@example.com"
              />
              <FormInput
                label="Phone Number"
                type="tel"
                placeholder="+256..."
              />
            </div>
          </section>

          {/* Section 2: Shipping */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-6 h-6 rounded-full bg-deli-charcoal text-white text-[10px] flex items-center justify-center font-bold">
                2
              </span>
              <h2 className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold">
                Shipping Address
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <FormInput
                  label="Street Address"
                  placeholder="Apartment, suite, plot number"
                />
              </div>
              <FormSelect label="District / City" options={districts} />
              <FormInput
                label="Delivery Instructions (Optional)"
                placeholder="e.g. Near the big mango tree"
              />
            </div>
          </section>

          {/* Section 3: Payment Method */}
          <section className="bg-deli-cream/50 p-6 rounded-2xl border border-deli-charcoal/5">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-6 h-6 rounded-full bg-deli-charcoal text-white text-[10px] flex items-center justify-center font-bold">
                3
              </span>
              <h2 className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold">
                Payment
              </h2>
            </div>
            <div className="space-y-4">
              <label className="flex items-center justify-between p-4 bg-white rounded-xl border border-deli-red cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full border-4 border-deli-red" />
                  <span className="font-sans text-xs font-bold uppercase tracking-widest">
                    mtn momo pay
                  </span>
                </div>
                <div className="flex gap-2">
                  <img
                    src="/assets/mtn-momo-pay.png"
                    alt="MTN"
                    className="w-20 h-auto object-contain"
                  />
                </div>
              </label>
            </div>
          </section>
        </div>

        {/* Right Column: Order Summary */}
        <aside className="lg:col-span-5">
          <div className="lg:sticky lg:top-24">
            <OrderSummary subtotal={75000} shipping={5000} />

            {/* Cart Preview (Simple list) */}
            <div className="mt-8 px-2">
              <h4 className="font-sans text-[10px] uppercase tracking-widest font-bold opacity-30 mb-4">
                Your Selection
              </h4>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-deli-cream rounded-lg overflow-hidden">
                  <img
                    src="/assets/products/chillis.png"
                    className="w-full h-full object-cover mix-blend-multiply"
                    alt="item"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-display text-sm uppercase">
                    African Bird's Eye
                  </p>
                  <p className="font-sans text-[10px] opacity-50">
                    50g • Qty 3
                  </p>
                </div>
                <span className="font-sans text-xs font-bold">75,000 UGX</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
