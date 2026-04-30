import React from 'react';

export default function CareersPage() {
  const openings = [
    { title: "Production Associate", type: "Full-time", location: "Entebbe Factory" },
    { title: "Brand Ambassador", type: "Contract", location: "Kampala Outlets" },
    { title: "Logistics Coordinator", type: "Full-time", location: "Kampala" }
  ];

  return (
    <div className="px-6 py-24 max-w-5xl mx-auto min-h-screen">
      <header className="mb-20 text-center">
        <h1 className="font-display text-5xl md:text-7xl uppercase mb-6">Join the Artisan <br/>Movement</h1>
        <p className="font-sans text-sm opacity-60 uppercase tracking-[0.2em] max-w-xl mx-auto leading-relaxed">
          We are always looking for passionate individuals to help us redefine Ugandan spices.
        </p>
      </header>

      <section className="grid gap-6">
        {openings.map((job, index) => (
          <div key={index} className="bg-white border border-deli-charcoal/5 p-8 rounded-[2rem] flex flex-col md:flex-row justify-between items-center group hover:border-deli-red/20 transition-colors">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <span className="font-sans text-[9px] uppercase tracking-widest text-deli-red font-bold">{job.type}</span>
              <h3 className="font-display text-2xl uppercase mt-1">{job.title}</h3>
              <p className="font-sans text-[10px] uppercase opacity-40 tracking-widest">{job.location}</p>
            </div>
            <button className="bg-deli-charcoal text-white px-8 py-4 rounded-full font-sans text-[10px] uppercase tracking-widest font-bold group-hover:bg-deli-red transition-colors">
              Apply Now
            </button>
          </div>
        ))}
      </section>

      <footer className="mt-20 p-12 bg-deli-red/5 rounded-[3rem] text-center">
        <h4 className="font-display text-xl uppercase mb-4">Don't see a fit?</h4>
        <p className="font-sans text-xs opacity-60 uppercase tracking-widest mb-6">Send your CV to careers@greendeli.com</p>
      </footer>
    </div>
  );
}