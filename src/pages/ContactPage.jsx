import React from "react";
import FormInput from "../components/FormInput";
import FormSelect from "../components/FormSelect";
import Button from "../components/Button";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function ContactPage() {
  useDocumentTitle("Contact Us | Green Deli");

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <header className="text-center mb-16">
        <span className="font-sans text-sm uppercase tracking-[0.4em] text-deli-charcoal/40 mb-4 block">
          Get in Touch
        </span>
        <h1 className="font-display text-4xl md:text-6xl uppercase leading-none">
          Connect with our <span className="text-deli-red italic">Atelier</span>
        </h1>
        <p className="font-sans text-lg text-deli-charcoal/60 mt-6 max-w-2xl mx-auto leading-relaxed">
          Whether you are an artisanal chef seeking a wholesale partnership or a
          home cook with a spice query, we are here to assist you.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Contact Form & Retail Partners */}
        <div className="lg:col-span-7 space-y-12">
          
          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-deli-charcoal/5">
            <h2 className="font-display text-2xl uppercase mb-10">
              Send a Message
            </h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FormInput label="Full Name" placeholder="e.g. Brian" />
              <FormInput
                label="Email Address"
                placeholder="e.g. brian@example.com"
              />
              <div className="md:col-span-2">
                <FormSelect
                  label="Inquiry Type"
                  options={[
                    { label: "General Query", value: "general" },
                    { label: "Wholesale Inquiry", value: "wholesale" },
                    { label: "Retail Partnership", value: "partnership" },
                  ]}
                />
              </div>
              <div className="md:col-span-2">
                <label className="font-sans text-[10px] uppercase tracking-widest text-deli-charcoal/50 font-bold mb-2 block">
                  Your Message
                </label>
                <textarea
                  className="w-full bg-transparent border-b border-deli-charcoal/20 py-3 px-1 font-sans text-sm focus:outline-none focus:border-deli-red h-32 resize-none"
                  placeholder="How can we help you today?"
                />
              </div>
              <Button variant="primary" className="md:w-fit">
                Submit Inquiry
              </Button>
            </form>
          </div>

          {/* Retail Partners Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-deli-cream p-8 rounded-[2rem] border border-deli-charcoal/5">
              <h3 className="font-display text-lg uppercase mb-2">Shop Online</h3>
              <p className="font-sans text-xs opacity-60 uppercase tracking-widest mb-4">Official Jumia Store</p>
              <a href="https://www.jumia.ug/" target="_blank" rel="noreferrer" className="text-deli-red font-bold text-[10px] uppercase tracking-widest hover:underline">
                Visit Jumia Uganda →
              </a>
            </div>
            <div className="bg-deli-cream p-8 rounded-[2rem] border border-deli-charcoal/5">
              <h3 className="font-display text-lg uppercase mb-2">Physical Retail</h3>
              <p className="font-sans text-xs opacity-60 uppercase tracking-widest mb-4">Available at all Vision Shops</p>
              <span className="text-deli-charcoal font-bold text-[10px] uppercase tracking-widest">
                Nationwide Presence
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Map & Direct Contact */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Quick Contact Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <a
              href="https://wa.me/256772502605?text=Hello%20Green%20Deli%2C%20I%20have%20a%20question%20about%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#A0F69B] p-6 rounded-[2rem] flex flex-col items-center justify-center text-center hover:scale-[1.02] transition-transform shadow-sm"
            >
              <img src="/assets/whatsapp-logo.png" alt="WhatsApp" className="w-12 h-auto mb-2" />
              <span className="font-sans text-[9px] uppercase tracking-[0.2em] font-bold opacity-60">WhatsApp</span>
            </a>
            <a
              href="mailto:greendeli525@gmail.com"
              className="bg-white p-6 rounded-[2rem] border border-deli-charcoal/10 flex flex-col items-center justify-center text-center hover:scale-[1.02] transition-transform shadow-sm"
            >
              <img src="/assets/email-icon.png" alt="Email" className="w-10 h-auto mb-2" />
              <span className="font-sans text-[9px] uppercase tracking-[0.2em] font-bold opacity-60">Email Us</span>
            </a>
          </div>

          {/* Map Section */}
          <div className="bg-white border border-deli-charcoal/10 rounded-[2.5rem] overflow-hidden flex flex-col flex-1">
            <div className="w-full h-[300px] lg:h-auto lg:flex-1 contrast-125 transition-all duration-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255344.5616394642!2d32.43431578573655!3d0.3130280550106266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x68996ebc460cf99b%3A0x563c901bb8e423f2!2sGreen%20Deli%20SMC%20Ltd!5e0!3m2!1sen!2sug!4v1777985583621!5m2!1sen!2sug" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="p-8 bg-white">
              <h3 className="font-display text-xl uppercase text-deli-charcoal mb-2">
                Green Deli Head Office
              </h3>
              <p className="font-sans text-[11px] text-deli-charcoal/60 leading-relaxed uppercase tracking-wider mb-4">
                Kungu, Nanteza Road, <br />
                Kira, Uganda
              </p>
              <a
                href="https://maps.app.goo.gl/3Xz1U6tXpLdG9D2H9" 
                target="_blank"
                rel="noreferrer"
                className="font-sans text-[10px] font-bold text-deli-red uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all"
              >
                Get Directions <span>→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}