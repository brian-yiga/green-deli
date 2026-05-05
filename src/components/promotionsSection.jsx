import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function PromotionsSection() {
  // 1. Updated data with oldPrice to trigger the promotion UI
  const promoProducts = [
    {
      id: "gd-15",
      name: "Lemon Pepper",
      slug: "lemon-pepper",
      category: "Powders",
      price: 18000, // New Price
      oldPrice: 22000, // Original Price
      origin: "Deli Atelier",
      image: "/assets/allProducts/lemon-pepper-200gms.png",
      description: "Bright citrus notes paired with the sharp bite of premium cracked black pepper.",
      isOrganic: true,
    },
    {
      id: "gd-11",
      name: "Onion Powder",
      slug: "onion-powder",
      category: "Powders",
      price: 12000,
      oldPrice: 15000,
      origin: "Kabale",
      image: "/assets/allProducts/onion-powder-100gms.png",
      description: "Pure, dehydrated red onions for a sweet, savory base without the prep work.",
      isOrganic: true,
    },
    {
      id: "gd-12",
      name: "Tomato Powder",
      slug: "tomato-powder",
      category: "Powders",
      price: 15000,
      oldPrice: 18000,
      origin: "Mbarara",
      image: "/assets/allProducts/tomato-powder-natural-170gms.png",
      description: "Concentrated tomato essence, perfect for thickening sauces and adding deep umami.",
      isOrganic: true,
    },
    {
      id: "gd-13",
      name: "Cinnamon Powder",
      slug: "cinnamon-powder",
      category: "Powders",
      price: 17000,
      oldPrice: 20000,
      origin: "Bundibugyo",
      image: "/assets/allProducts/cinnamon-100gms.png",
      description: "Sweet and warm aromatic bark, freshly ground for peak essential oil retention.",
      isOrganic: true,
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