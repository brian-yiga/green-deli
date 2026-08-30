import React, { useState } from 'react';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import Button from './Button';

export default function WholesaleForm() {
  const [partnerType, setPartnerType] = useState('buyer');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://formspree.io/f/mnpqjnea', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setErrorMessage('Failed to submit inquiry. Please check your inputs and try again.');
      }
    } catch (error) {
      setErrorMessage('Network error. Please check your internet connection.');
    } finally {
      setLoading(false);
    }
  };

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

      {submitted ? (
        <div className="py-12 text-center space-y-4">
          <h4 className="font-display text-2xl uppercase text-deli-red">
            Inquiry Received
          </h4>
          <p className="font-sans text-sm text-deli-charcoal/80 leading-relaxed max-w-md mx-auto">
            Thank you for reaching out! Your submission has been routed directly to our sales and partnership team at Green Deli. We will review your details and respond shortly.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-6 inline-block bg-deli-charcoal text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-deli-red transition-colors cursor-pointer"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          onSubmit={handleSubmit}
        >
          {/* Dynamic Subject for Formspree */}
          <input
            type="hidden"
            name="_subject"
            value={
              partnerType === 'buyer'
                ? 'New Wholesale Buyer Inquiry - Green Deli'
                : 'New Supplier Partnership Proposal - Green Deli'
            }
          />

          {/* Partnership Type */}
          <div className="md:col-span-2">
            <FormSelect
              name="partnershipType"
              label="Partnership Type"
              options={partnershipTypes}
              value={partnerType}
              onChange={(e) => setPartnerType(e.target.value)}
            />
          </div>

          {/* Shared Fields */}
          <FormInput 
            name="fullName" 
            label="Full Name" 
            placeholder="Jane Doe" 
            required 
          />
          <FormInput 
            name="email" 
            label="Email Address" 
            type="email" 
            placeholder="jane@business.com" 
            required 
          />
          <FormInput 
            name="companyName" 
            label="Company Name" 
            placeholder="Business / Farm / Organization" 
            required 
          />

          {/* Buyer Fields */}
          {partnerType === 'buyer' && (
            <>
              <FormSelect
                name="businessType"
                label="Business Type"
                options={businessTypes}
              />

              <div className="md:col-span-2">
                <FormInput
                  name="estimatedMonthlyVolume"
                  label="Estimated Monthly Volume"
                  placeholder="e.g. 50kg+ of Black Pepper / Lemongrass"
                />
              </div>
            </>
          )}

          {/* Supplier Fields */}
          {partnerType === 'supplier' && (
            <>
              <FormSelect
                name="supplyCategory"
                label="Supply Category"
                options={supplyTypes}
              />

              <FormInput
                name="supplyCapacity"
                label="Supply Capacity"
                placeholder="e.g. 200kg dried turmeric monthly"
              />

              <div className="md:col-span-2">
                <FormInput
                  name="sourceLocation"
                  label="Source Location"
                  placeholder="e.g. Mbale, Uganda"
                />
              </div>
            </>
          )}

          {errorMessage && (
            <div className="md:col-span-2 text-deli-red font-sans text-xs font-semibold">
              {errorMessage}
            </div>
          )}

          <div className="md:col-span-2 pt-4">
            <Button 
              type="submit" 
              variant="primary"
              disabled={loading}
              className="w-full md:w-auto shadow-lg disabled:opacity-50"
            >
              {loading
                ? 'Submitting...'
                : partnerType === 'buyer'
                ? 'Send Wholesale Inquiry'
                : 'Submit Supplier Proposal'}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}