import React from "react";
import Button from "../components/Button";
import HeatScale from "../components/HeatScale";
import FlavorComplexity from "../components/FlavorComplexity";
import Badge from "../components/Badge";
import useDocumentTitle from "../hooks/useDocumentTitle";
import BackToTop from "../components/BackToTop";

export default function StoryPage() {
  useDocumentTitle("Our Story");

  // Core Pillars from Company Profile
  const values = [
    {
      title: "Quality & Convenience",
      desc: "Delivering nutritious, safe, and flavorful products that save time in the kitchen without sacrificing authentic taste.",
      icon: "✨",
    },
    {
      title: "Farmer Empowerment",
      desc: "Building direct, fair relationships with small- and medium-scale producers, prioritizing female agricultural workers.",
      icon: "🤝",
    },
    {
      title: "Value Addition",
      desc: "Transforming raw Ugandan crops into shelf-stable, high-value goods right at our home facility.",
      icon: "🌱",
    },
    {
      title: "Sustainability & Circularity",
      desc: "Reducing post-harvest losses and transforming food processing by-products into animal feed ingredients.",
      icon: "🔄",
    },
  ];

  // Sustainability Pillars
  const sustainabilityPillars = [
    {
      title: "Supporting Farmers",
      desc: "Creating reliable markets for small- and medium-scale agricultural producers across Uganda.",
      icon: "👨‍🌾",
    },
    {
      title: "Women in Agriculture",
      desc: "Promoting inclusive opportunities for women participating in agricultural production and value addition.",
      icon: "👩‍🌾",
    },
    {
      title: "Responsible Sourcing",
      desc: "Partnering with farmers who embrace ethical and environmentally friendly farming practices.",
      icon: "🍃",
    },
    {
      title: "Local Value Creation",
      desc: "Keeping economic value within Uganda by processing and packaging agricultural produce locally.",
      icon: "🇺🇬",
    },
    {
      title: "Waste Reduction",
      desc: "Transforming food processing by-products into animal feed ingredients and eco-pellets.",
      icon: "♻️",
    },
    {
      title: "Value Addition",
      desc: "Converting raw harvests into high-value, shelf-stable goods for local and export markets.",
      icon: "📦",
    },
  ];

  // Farm-to-Plate Narrative Steps
  const journeySteps = [
    {
      id: "01",
      title: "Sourcing from the Earth",
      desc: "We source raw fruits, vegetables, grains, and spices directly from smallholder partner farms across Uganda. By supporting local agriculture, we ensure fair returns for growers while preserving crop diversity.",
      color: "bg-deli-cream text-deli-charcoal",
      icon: "🌾",
    },
    {
      id: "02",
      title: "Agro-Processing in Kungu",
      desc: "At our central processing facility in Kungu, Kira Municipality, our team of food scientists and chefs turn raw harvests into premium sauces, seasonings, and snacks through strict safety and quality standards.",
      color: "bg-[#724E42] text-white",
      icon: "🏭",
    },
    {
      id: "03",
      title: "Circular Waste-to-Value Model",
      desc: "Processing creates remnants like tomato peels and fruit pomace. Instead of generating waste, we repurpose these nutrient-dense by-products into livestock feed ingredients and pellets.",
      color: "bg-deli-botanical text-white",
      icon: "♻️",
    },
    {
      id: "04",
      title: "Bringing Nature to Your Table",
      desc: "Our products bridge the gap between rural Ugandan farms and homes, restaurants, and export markets—bringing authentic 'Flavours of Nature' to everyday meals.",
      color: "bg-[#EFE9DF] text-deli-charcoal",
      icon: "🍽️",
    },
  ];

  // Provisions for Portrait / Instagram Mobile Photos
  const portraitGallery = [
    {
      img: "/assets/our-story/scene1.jpeg",
      caption: "Field visits with partner farmers in Wakiso",
      tag: "Farm Sourcing",
    },
    {
      img: "/assets/our-story/scene2.jpeg",
      caption: "Inside our Kungu Agro-Processing Plant",
      tag: "Agro-Processing",
    },
    {
      img: "/assets/our-story/scene3.jpeg",
      caption: "Freshly harvested peppers ready for processing",
      tag: "Fresh Harvest",
    },
    {
      img: "/assets/our-story/scene4.jpeg",
      caption: "Chef & Food Science product testing session",
      tag: "R&D Lab",
    },
  ];

  return (
    <div className="flex flex-col bg-deli-cream/30">
      {/* 1. Hero Section */}
      <section className="relative h-[60vh] flex items-end pb-16 px-6 overflow-hidden">
        <img
          src="/assets/storyHeroBg.webp"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Ugandan Agro Fields"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deli-cream via-deli-cream/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <span className="font-sans text-xs md:text-sm uppercase tracking-[0.4em] text-deli-red font-bold mb-4 block">
            Established 2023 • 100% Ugandan Owned
          </span>
          <h1 className="font-display text-5xl md:text-8xl uppercase leading-[0.85] text-deli-botanical">
            Rooted in <br /> Uganda.
          </h1>
        </div>
      </section>

      {/* 2. Brand Introduction & Tagline */}
      <section className="px-6 py-16 max-w-4xl mx-auto text-center">
        <span className="font-sans text-xs uppercase tracking-[0.3em] opacity-50 mb-4 block font-bold text-deli-red">
          — Chapter I —
        </span>
        <h2 className="font-display text-2xl md:text-3xl uppercase text-deli-botanical mb-8">
          about green deli
        </h2>

        <p className="font-sans text-base md:text-xl leading-relaxed text-deli-charcoal/80 mb-8">
          Welcome to <strong className="text-deli-botanical">Green Deli</strong>
          , a 100% Ugandan-owned agro-processing, value-addition, export and
          distribution company. Established in 2023, Green Deli operates within
          Uganda's food processing and agricultural value-addition industry,
          with a vision of building a strong farm-to-plate brand that connects
          farmers, processors, retailers and consumers through quality food
          products. Our agro-processing facility is located in Kungu, Nanteza
          Road, Kira Municipality, Uganda. We are committed to transforming
          Uganda's agricultural produce into high-quality, convenient and
          nutritious food products while creating sustainable opportunities for
          farmers, particularly small- and medium-scale farmers and women
          engaged in agriculture.
        </p>

        <blockquote className="my-10 border-l-4 border-deli-red pl-6 py-6 text-left italic font-sans text-lg md:text-xl text-deli-charcoal/90 bg-white/80 rounded-r-3xl shadow-sm">
          <span className="font-sans text-xs not-italic uppercase tracking-[0.2em] font-bold text-deli-red block mb-2">
            Our Tagline
          </span>
          "Flavours of Nature" — Our tagline reflects our commitment to quality
          agricultural products, natural and authentic flavours, traceability
          from farm to plate, responsible sourcing, ethical agricultural
          practices, sustainable processing, supporting local farmers and
          communities, and creating convenient, value-added food products.
        </blockquote>

        <span className="font-sans text-xs uppercase tracking-[0.3em] opacity-50 mb-4 block font-bold text-deli-red">
          — Chapter II —
        </span>
        <h2 className="font-display text-2xl md:text-3xl uppercase text-deli-botanical mb-8">
          our journey through flavourland
        </h2>

        <p className="font-sans text-base md:text-xl leading-relaxed text-deli-charcoal/80 mb-8">
          Green Deli invites consumers to take a journey through Uganda's rich
          agricultural landscape. From the fertile soils and gardens of our
          partner farmers comes a diverse range of fruits, vegetables, grains,
          spices, nuts and other agricultural products. Our team of
          professionals, including food scientists and experienced chefs, works
          to transform these ingredients into products that are convenient,
          delicious and suited to modern consumers. Every Green Deli product is
          intended to tell a story — a story of the farmer who cultivated the
          crop, the community that supported its production, the people who
          transformed it and the consumer who finally enjoys it. Every taste
          brings out the Flavours of Nature.
        </p>
      </section>

      {/* 3. MISSION & VISION SECTION (Added from Profile Document) */}
      <section className="px-6 py-4 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Box */}
          <div className="bg-deli-botanical text-white p-8 md:p-12 rounded-[2.5rem] shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 text-9xl opacity-10 font-display">
              🎯
            </div>
            <div>
              <span className="font-sans text-xs uppercase tracking-[0.3em] font-bold text-deli-cream/70 block mb-3">
                Our Core Purpose
              </span>
              <h3 className="font-display text-3xl md:text-4xl uppercase mb-6 text-deli-red">
                Our Mission
              </h3>
              <p className="font-sans text-base md:text-lg leading-relaxed text-white/90">
                To transform Uganda’s agricultural produce into high-quality,
                convenient, and nutritious food products, while creating
                sustainable income opportunities for smallholder farmers and
                women across the agricultural value chain.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/20">
              <span className="font-sans text-xs uppercase tracking-wider text-deli-cream font-bold">
                Value Addition & Farmer Direct
              </span>
            </div>
          </div>

          {/* Vision Box */}
          <div className="bg-[#724E42] text-white p-8 md:p-12 rounded-[2.5rem] shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 text-9xl opacity-10 font-display">
              👁️
            </div>
            <div>
              <span className="font-sans text-xs uppercase tracking-[0.3em] font-bold text-deli-cream/70 block mb-3">
                Long-Term Horizon
              </span>
              <h3 className="font-display text-3xl md:text-4xl uppercase mb-6 text-deli-cream">
                Our Vision
              </h3>
              <p className="font-sans text-base md:text-lg leading-relaxed text-white/90">
                To build a strong, trusted, farm-to-plate brand that seamlessly
                connects farmers, processors, retailers, and consumers through
                quality food products and sustainable processing excellence
                across East Africa and beyond.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/20">
              <span className="font-sans text-xs uppercase tracking-wider text-deli-cream font-bold">
                8–10 Year Strategic Expansion
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROVISIONED INSTAGRAM / PORTRAIT PHOTO GALLERY */}
      <section className="px-6 py-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-deli-red font-bold block mb-2">
              Field & Plant Snapshots
            </span>
            <h2 className="font-display text-3xl md:text-4xl uppercase text-deli-charcoal">
              Behind the Scenes
            </h2>
          </div>
          <p className="font-sans text-xs md:text-sm text-deli-charcoal/60 max-w-md mt-2 md:mt-0">
            Real portrait moments captured directly from our partner farms,
            Kungu processing plant, and testing kitchen.
          </p>
        </div>

        {/* 4-Column Portrait Aspect Ratio Grid (Ideal for Phone/Instagram Shots) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {portraitGallery.map((item, idx) => (
            <div
              key={idx}
              className="group relative aspect-[3/4] bg-deli-cream rounded-[2rem] overflow-hidden border border-deli-charcoal/10 shadow-sm"
            >
              <img
                src={item.img}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 300 400'><rect width='100%' height='100%' fill='%23E5E0D8'/><text x='50%' y='50%' fill='%23724E42' font-family='sans-serif' font-size='14' text-anchor='middle'>Image Not Found</text></svg>";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="inline-block bg-white/20 backdrop-blur-md text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full mb-2">
                  {item.tag}
                </span>
                <p className="font-sans text-xs md:text-sm font-medium leading-snug">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Approach to Sustainability Section */}
      <section className="px-6 py-16 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-deli-red font-bold block mb-2">
            Impact Framework
          </span>
          <h2 className="font-display text-3xl md:text-5xl uppercase text-deli-charcoal mb-4">
            Our Approach to Sustainability
          </h2>
          <p className="font-sans text-sm md:text-base text-deli-charcoal/70">
            We build resilience into every step of our value chain, keeping
            value within Uganda while minimizing environmental impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sustainabilityPillars.map((p, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-[2rem] border border-deli-charcoal/5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="font-display text-xl uppercase mb-2 text-deli-charcoal">
                {p.title}
              </h3>
              <p className="font-sans text-sm leading-relaxed text-deli-charcoal/70">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Strategic Direction / Growth Vision */}
      <section className="px-6 py-12 max-w-7xl mx-auto w-full">
        <div className="bg-[#EFE9DF] p-8 md:p-12 rounded-[3rem] border border-deli-charcoal/10">
          <span className="font-sans text-xs uppercase tracking-[0.3em] font-bold text-deli-red block mb-2">
            Long-Term Outlook
          </span>
          <h2 className="font-display text-3xl md:text-4xl uppercase text-deli-charcoal mb-6">
            Strategic Direction (8–10 Year Vision)
          </h2>
          <p className="font-sans text-sm md:text-base leading-relaxed text-deli-charcoal/80 mb-8 max-w-3xl">
            Green Deli is executing an 8–10 year growth strategy focused on
            expanding processing capacity, strengthening direct farmer linkages,
            securing national supermarket shelf presence, and opening export
            corridors into DRC, South Sudan, Rwanda, and Burundi.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-deli-charcoal/5">
              <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-deli-red block mb-1">
                Phase 1
              </span>
              <h4 className="font-display text-lg uppercase text-deli-charcoal mb-2">
                Current Product Range
              </h4>
              <p className="font-sans text-xs text-deli-charcoal/70">
                Establishing core natural table sauces, chili oils, and
                seasonings in local supermarkets and retail outlets.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-deli-charcoal/5">
              <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-deli-botanical block mb-1">
                Phase 2
              </span>
              <h4 className="font-display text-lg uppercase text-deli-charcoal mb-2">
                Core Development
              </h4>
              <p className="font-sans text-xs text-deli-charcoal/70">
                Scaling Kungu processing capacity and introducing value-added
                tomato products and packaged dried goods.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-deli-charcoal/5">
              <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#724E42] block mb-1">
                Phase 3
              </span>
              <h4 className="font-display text-lg uppercase text-deli-charcoal mb-2">
                Regional Export
              </h4>
              <p className="font-sans text-xs text-deli-charcoal/70">
                Opening regional supply lines into DRC, South Sudan, Rwanda,
                Burundi, and converting 100% of organic waste into livestock
                feeds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Guiding Values Grid */}
      <section className="px-6 py-12 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-deli-red font-bold block mb-2">
            Guiding Principles
          </span>
          <h2 className="font-display text-3xl md:text-5xl uppercase text-deli-charcoal">
            What Drives Green Deli
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-[2rem] border border-deli-charcoal/5 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-display text-xl uppercase mb-3 text-deli-charcoal">
                  {v.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-deli-charcoal/70">
                  {v.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. The Farm to Plate Philosophy Steps */}
      <section className="px-6 py-12 max-w-7xl mx-auto w-full">
        <div className="mb-10">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-deli-red font-bold block mb-2">
            Supply Chain & Impact
          </span>
          <h2 className="font-display text-3xl md:text-5xl uppercase text-deli-charcoal">
            The Farm-to-Plate Philosophy
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {journeySteps.map((step) => (
            <div
              key={step.id}
              className={`${step.color} p-8 rounded-[2rem] flex flex-col md:flex-row gap-6 items-start md:items-center shadow-sm transition-all duration-300 hover:shadow-md`}
            >
              <span className="font-sans text-lg font-bold opacity-40">
                {step.id}
              </span>
              <div className="text-5xl">{step.icon}</div>
              <div className="flex-1">
                <h3 className="font-display text-xl md:text-2xl uppercase mb-2">
                  {step.title}
                </h3>
                <p className="font-sans text-sm md:text-base leading-relaxed opacity-90 max-w-2xl">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Metrics & Highlights Banner */}
      <section className="px-6 my-8 max-w-7xl mx-auto w-full">
        <div className="bg-[#E5E0D8] p-8 md:p-12 rounded-[3rem] border border-deli-charcoal/5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <span className="font-sans text-xs uppercase tracking-[0.3em] font-bold text-deli-red block mb-1">
                Authenticity & Quality
              </span>
              <h3 className="font-display text-2xl md:text-3xl uppercase text-deli-charcoal">
                Botanical & Processing Standards
              </h3>
            </div>
            <Badge text="100% Ugandan Sourced" variant="primary" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="flex justify-between items-center border-b border-deli-charcoal/10 pb-4">
              <span className="font-display text-base md:text-lg uppercase">
                Flavor Profile & Potency
              </span>
              <HeatScale rating={4} label="" />
            </div>
            <div className="flex justify-between items-center border-b border-deli-charcoal/10 pb-4">
              <span className="font-display text-base md:text-lg uppercase">
                Product Formulation Complexity
              </span>
              <FlavorComplexity rating={4} label="" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-deli-charcoal/10 text-center md:text-left">
            <div>
              <span className="font-display text-3xl md:text-4xl text-deli-botanical block">
                2023
              </span>
              <span className="font-sans text-[10px] md:text-xs uppercase tracking-wider text-deli-charcoal/60 font-bold">
                Year Founded
              </span>
            </div>
            <div>
              <span className="font-display text-3xl md:text-4xl text-deli-botanical block">
                Kungu
              </span>
              <span className="font-sans text-[10px] md:text-xs uppercase tracking-wider text-deli-charcoal/60 font-bold">
                Agro-Processing Plant
              </span>
            </div>
            <div>
              <span className="font-display text-3xl md:text-4xl text-deli-botanical block">
                Zero
              </span>
              <span className="font-sans text-[10px] md:text-xs uppercase tracking-wider text-deli-charcoal/60 font-bold">
                Waste Target
              </span>
            </div>
            <div>
              <span className="font-display text-3xl md:text-4xl text-deli-botanical block">
                Uganda
              </span>
              <span className="font-sans text-[10px] md:text-xs uppercase tracking-wider text-deli-charcoal/60 font-bold">
                & Regional Markets
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Call to Action */}
      <section className="px-6 py-16 text-center bg-white m-6 rounded-[3rem] border border-deli-charcoal/5 shadow-sm">
        <div className="max-w-xl mx-auto">
          <div className="text-4xl mb-4">🌿</div>
          <h2 className="font-display text-3xl md:text-4xl uppercase mb-4 text-deli-charcoal">
            Taste the Flavours of Nature
          </h2>
          <p className="font-sans text-sm md:text-base text-deli-charcoal/70 mb-8 leading-relaxed">
            Discover our collection of natural seasonings, table sauces, snacks,
            and tomato products crafted directly from our Ugandan facility.
          </p>
          <Button variant="primary">Shop the Collection</Button>
        </div>
      </section>

      <BackToTop />
    </div>
  );
}
