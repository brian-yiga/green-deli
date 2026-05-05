import React, { useState } from 'react';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import Button from './Button';

export default function WholesaleForm() {
  const [partnerType, setPartnerType] = useState('buyer');

  const partnershipTypes = [
    { label: 'Wholesale Buyer', value: 'buyer' },
    { label: 'Supplier / Producer', value: 'supplier' }
  ];

  const businessTypes = [
    { label: 'Restaurant / Cafe', value: 'hospitality' },
    { label: 'Retailer / Deli', value: 'retail' },
    { label: 'Hotel', value: 'hotel' },
    { label: 'Other', value: 'other' }
  ];

  const supplyTypes = [
    { label: 'Raw Spices / Botanicals', value: 'raw-spices' },
    { label: 'Packaging Materials', value: 'packaging' },
    { label: 'Processing Equipment', value: 'equipment' },
    { label: 'Logistics / Distribution', value: 'logistics' },
    { label: 'Other', value: 'other' }
  ];

  return (
    <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-deli-charcoal/5">
      <div className="mb-10 text-center md:text-left">
        <h3 className="font-display text-3xl uppercase text-deli-charcoal mb-2">
          Partner with us
        </h3>
        <p className="font-sans text-xs uppercase tracking-widest text-deli-charcoal/50">
          Wholesale inquiries & supplier partnerships
        </p>
      </div>

      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Partnership Type */}
        <div className="md:col-span-2">
          <FormSelect
            label="Partnership Type"
            options={partnershipTypes}
            value={partnerType}
            onChange={(e) => setPartnerType(e.target.value)}
          />
        </div>

        {/* Shared Fields */}
        <FormInput label="Full Name" placeholder="Jane Doe" />
        <FormInput label="Email Address" type="email" placeholder="jane@business.com" />
        <FormInput label="Company Name" placeholder="Business / Farm / Organization" />

        {/* Buyer Fields */}
        {partnerType === 'buyer' && (
          <>
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
          </>
        )}

        {/* Supplier Fields */}
        {partnerType === 'supplier' && (
          <>
            <FormSelect
              label="Supply Category"
              options={supplyTypes}
            />

            <FormInput
              label="Supply Capacity"
              placeholder="e.g. 200kg dried turmeric monthly"
            />

            <div className="md:col-span-2">
              <FormInput
                label="Source Location"
                placeholder="e.g. Mbale, Uganda"
              />
            </div>
          </>
        )}

        <div className="md:col-span-2 pt-4">
          <Button variant="primary">
            {partnerType === 'buyer'
              ? 'Send Wholesale Inquiry'
              : 'Submit Supplier Proposal'}
          </Button>
        </div>
      </form>
    </div>
  );
}