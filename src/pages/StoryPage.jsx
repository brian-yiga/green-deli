import React from "react";
import Button from "../components/Button";
import HeatScale from "../components/HeatScale";
import FlavorComplexity from "../components/FlavorComplexity";
import Badge from "../components/Badge";
import useDocumentTitle from "../hooks/useDocumentTitle";
import BackToTop from "../components/BackToTop";

export default function StoryPage() {
  useDocumentTitle("Our Story");
  const chapters = [
    {
      id: "01",
      title: "Ethical Sowing",
      desc: "We partner with over 400 local smallholder farmers, providing heirloom seeds and organic training to preserve biodiversity.",
      color: "bg-deli-cream",
      icon: "🌱",
    },
    {
      id: "02",
      title: "Pure Harvest",
      desc: "Every botanical is hand-picked at peak potency. No chemicals, no fillers—just the raw, unadulterated power of nature.",
      color: "bg-[#724E42] text-white",
      icon: "💧",
    },
    {
      id: "03",
      title: "Artisanal Milling",
      desc: "We cold-mill our spices in small batches to preserve volatile oils and deep aromatic profiles that disappear in industrial processing.",
      color: "bg-deli-red text-white",
      icon: "🚛",
    },
  ];

  const custodians = [
    {
      name: "Elias Okollo",
      role: "Lead Cumin Harvester",
      region: "Kasese District",
      img: "/assets/custodian-1.jpg",
    },
    {
      name: "Maria Mukasa",
      role: "Organic Ginger Lead",
      region: "Mukono District",
      img: "/assets/custodian-2.jpg",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Editorial Hero */}
      <section className="relative h-[50vh] flex items-end pb-16 px-6 overflow-hidden">
        <img
          src="/assets/storyHeroBg.webp"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Mount Elgon"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deli-cream via-deli-cream/20 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <span className="font-sans text-sm uppercase tracking-[0.4em] text-deli-cream font-bold mb-4 block">
            Established 1974
          </span>
          <h1 className="font-display text-5xl md:text-8xl uppercase leading-[0.85] text-deli-red">
            Rooted in <br /> Uganda.
          </h1>
        </div>
      </section>

      {/* Chapter Intro */}
      <section className="px-6 max-w-2xl mx-auto text-center">
        <span className="font-sans text-sm uppercase tracking-[0.3em] opacity-40 mb-6 block">
          — Chapter I —
        </span>
        <p className="font-display text-xl md:text-2xl leading-relaxed text-deli-charcoal">
          The story of <span className="text-deli-red">Green Deli</span> begins
          in the fertile red soils of Mount Elgon. Here, the heat of the equator
          meets the cool mountain breeze, creating the perfect climate for our
          signature botanicals.
        </p>
        <blockquote className="mt-12 border-l-2 border-deli-red pl-6 py-2 text-left italic font-sans text-lg text-deli-charcoal/60">
          "We don’t just sell spices; we curate the very essence of our land,
          ensuring every leaf and seed tells the story of the hands that tended
          it."
        </blockquote>
      </section>

      {/* The Farm to Fork Philosophy */}
      <section className="px-6 py-10 max-w-7xl mx-auto w-full">
        <h2 className="font-display text-3xl uppercase">
          The Farm to Fork Philosophy
        </h2>
        <div className="flex flex-col gap-4">
          {chapters.map((chapter) => (
            <div
              key={chapter.id}
              className={`${chapter.color} p-8 rounded-[2rem] flex flex-col md:flex-row gap-6 items-start md:items-center`}
            >
              <span className="font-sans text-lg font-bold opacity-30">
                {chapter.id}
              </span>
              <div className="text-6xl">{chapter.icon}</div>
              <div className="flex-1">
                <h3 className="font-display text-xl uppercase mb-2">
                  {chapter.title}
                </h3>
                <p className="font-sans text-lg uppercase tracking-wide opacity-70 leading-relaxed max-w-xl">
                  {chapter.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Botanical Integrity Metrics */}
      <section className="px-6 max-w-7xl mx-auto w-full">
        <div className="bg-[#E5E0D8] p-10 rounded-[3rem] border border-deli-charcoal/5">
          <h4 className="font-sans text-lg uppercase tracking-[0.3em] font-bold mb-8">
            Botanical Integrity
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex justify-between items-center border-b border-deli-charcoal/10 pb-4">
              <span className="font-display text-lg uppercase">
                Potency Level
              </span>
              <HeatScale rating={4} label="" />
            </div>
            <div className="flex justify-between items-center border-b border-deli-charcoal/10 pb-4">
              <span className="font-display text-lg uppercase">Complexity</span>
              <FlavorComplexity rating={3} label="" />
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Custodians */}
      <section className="px-6 py-10 max-w-7xl mx-auto w-full">
        <h2 className="font-display text-3xl uppercase mb-12">
          Meet the Custodians
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {custodians.map((person) => (
            <div key={person.name} className="flex flex-col gap-4">
              <div className="aspect-[4/5] bg-deli-cream rounded-[2rem] overflow-hidden">
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div>
                <h4 className="font-display text-lg uppercase leading-tight">
                  {person.name}
                </h4>
                <p className="font-sans text-[10px] uppercase tracking-widest text-deli-red font-bold">
                  {person.role}
                </p>
                <p className="font-sans text-[9px] uppercase tracking-widest opacity-40">
                  {person.region}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 text-center bg-white m-6 rounded-[3rem]">
        <div className="max-w-xl mx-auto">
          <div className="text-4xl mb-6">📖</div>
          <h2 className="font-display text-4xl uppercase mb-6">
            Experience the Harvest
          </h2>
          <p className="font-sans text-lg text-deli-charcoal/60 mb-10 leading-relaxed">
            Discover products crafted with the same care and dedication as the
            stories you've just read.
          </p>
          <Button variant="primary">Shop the Collection</Button>
        </div>
      </section>
      <BackToTop />
    </div>
  );
}
