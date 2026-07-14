import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function PromotionsSection() {
  const promoProducts = [
    {
      id: 'gd-09',
      name: "Cinnamon Sticks 100g",
      slug: "cinnamon-sticks-100g",
      category: "Masalas",
      // price: 25000,
      origin: "Luwero",
      image: "/assets/newProducts/Cinnamon Sticks 100g.jpeg",
      description: "A fragrant, warm blend of cloves, cardamom, and cinnamon for the perfect rice.",
      isOrganic: true
    },
    {
      id: 'gd-23',
      name: "Curry Powder 130g",
      slug: "curry-powder-130g",
      category: "Powders",
      // price: 15000,
      origin: "Luwero",
      image: "/assets/newProducts/Curry Powder 130g.jpeg",
      description: "Our balanced house blend of turmeric, cumin, and coriander.",
      isOrganic: true
    },
    {
      id: 'gd-10',
      name: "Deli Onion Flakes 100g",
      slug: "dеli-onion-flakes-100g",
      category: "Masalas",
      // price: 22000,
      origin: "Luwero",
      image: "/assets/newProducts/Deli Onion Flakes 100g.jpeg",
      description: "A finishing spice blend to add warmth and depth to any North Indian-style dish.",
      isOrganic: true
    },
    {
      id: 'gd-40',
      name: "Lake Salt Chilli Spiced 250g",
      slug: "lake-salt-chilli-spiced-250g",
      category: "Pantry",
      // price: 22000,
      origin: "Luwero",
      image: "/assets/newProducts/Lake-Salt-Chilli-Spiced-250gms.jpeg",
      description: "Rich gravy base specifically formulated for red meat stews.",
      isOrganic: true
    },
  ];

  return (
    <section className="px-6 max-w-7xl mx-auto w-full my-20">
      <div className="flex justify-between items-end mb-10">
        <div>
           <h2 className="font-display text-3xl uppercase leading-none">Limited Promotions</h2>
           <p className="font-sans text-[9px] uppercase tracking-[0.2em] opacity-40 mt-2">
             Special seasonal selection
           </p>
        </div>

        <Link
          to="/shop"
          className="font-sans text-[10px] uppercase tracking-widest border-b border-deli-charcoal pb-1 hover:text-deli-red hover:border-deli-red transition-colors"
        >
          View All
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {promoProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}