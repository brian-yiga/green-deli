import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function PromotionsSection() {
  const promoProducts = [
    {
    id: 'gd-08',
    name: "Pilau Masala (100gms)",
    slug: "pilau-masala-100gms",
    category: "Masalas",
    price: 25000,
    origin: "Deli Atelier",
    image: "/assets/allProducts/pilau-masala-100gms.png",
    description: "A fragrant, warm blend of cloves, cardamom, and cinnamon for the perfect rice.",
    isOrganic: true
  },
  {
    id: 'gd-09',
    name: "Curry Powder (130gms)",
    slug: "curry-powder-130gms",
    category: "Masalas",
    price: 15000,
    origin: "Deli Atelier",
    image: "/assets/allProducts/curry-powder-130gms.png",
    description: "Our balanced house blend of turmeric, cumin, and coriander.",
    isOrganic: true
  },
  {
    id: 'gd-10',
    name: "Garam Masala (100gms)",
    slug: "garam-masala-100gms",
    category: "Masalas",
    price: 22000,
    origin: "Deli Atelier",
    image: "/assets/allProducts/garam-masala-100gms.png",
    description: "A finishing spice blend to add warmth and depth to any North Indian-style dish.",
    isOrganic: true
  },
  {
    id: 'gd-11',
    name: "Deli Mchuzi Mix Beef (100gms)",
    slug: "deli-mchuzi-mix-beef-100gms",
    category: "Masalas",
    price: 22000,
    origin: "Deli Atelier",
    image: "/assets/allProducts/deli-mchuzi-mix-beef-100gms.png",
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
             Special pricing on seasonal powders
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