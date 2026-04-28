import React from 'react';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import Button from './Button';

export default function WholesaleForm() {
  const businessTypes = [
    { label: 'Restaurant / Cafe', value: 'hospitality' },
    { label: 'Retailer / Deli', value: 'retail' },
    { label: 'Hotel', value: 'hotel' },
    { label: 'Other', value: 'other' }
  ];

  return (
    <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-deli-charcoal/5">
      <div className="mb-10 text-center md:text-left">
        <h3 className="font-display text-3xl uppercase text-deli-charcoal mb-2">Partner with us</h3>
        <p className="font-sans text-xs uppercase tracking-widest text-deli-charcoal/50">
          Request our bulk catalog & wholesale pricing
        </p>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
        <FormInput label="Full Name" placeholder="Jane Doe" />
        <FormInput label="Email Address" type="email" placeholder="jane@business.com" />
        <FormInput label="Company Name" placeholder="The Spice House" />
        
        <FormSelect 
          label="Business Type" 
          options={businessTypes} 
        />

        <div className="md:col-span-2">
          <FormInput 
            label="Estimated Monthly Volume" 
            placeholder="e.g. 50kg+ of Bird's Eye Chili" 
          />
        </div>

        <div className="md:col-span-2 pt-4">
          <Button variant="primary">Send Inquiry</Button>
        </div>
      </form>
    </div>
  );
}