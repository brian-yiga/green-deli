import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function BestSellersSection() {
  // 1. Create an array of different products
  const featuredProducts = [
    {
      id: "gd-15",
      name: "Lemon Pepper",
      slug: "lemon-pepper",
      category: "Powders",
      price: 22000,
      origin: "Deli Atelier",
      image: "/assets/products/lemon.png",
      description:
        "Bright citrus notes paired with the sharp bite of premium cracked black pepper.",
      isOrganic: true,
    },
    {
      id: "gd-11",
      name: "Onion Powder",
      slug: "onion-powder",
      category: "Powders",
      price: 15000,
      origin: "Kabale",
      image: "/assets/products/onion.png",
      description:
        "Pure, dehydrated red onions for a sweet, savory base without the prep work.",
      isOrganic: true,
    },
    {
      id: "gd-12",
      name: "Tomato Powder",
      slug: "tomato-powder",
      category: "Powders",
      price: 18000,
      origin: "Mbarara",
      image: "/assets/products/tomato powder.png",
      description:
        "Concentrated tomato essence, perfect for thickening sauces and adding deep umami.",
      isOrganic: true,
    },
    {
      id: "gd-13",
      name: "Cinnamon Powder",
      slug: "cinnamon-powder",
      category: "Powders",
      price: 20000,
      origin: "Bundibugyo",
      image: "/assets/products/cinnamon-powder.jpg",
      description:
        "Sweet and warm aromatic bark, freshly ground for peak essential oil retention.",
      isOrganic: true,
    },
  ];

  return (
    <section className="px-6 max-w-7xl mx-auto w-full my-5">
      <div className="flex justify-between items-end mb-10">
        <h2 className="font-display text-3xl uppercase">Best Sellers</h2>

        {/* 2. Link "View All" to the shop */}
        <Link
          to="/shop"
          className="font-sans text-[10px] uppercase tracking-widest border-b border-deli-charcoal pb-1 hover:text-deli-red hover:border-deli-red transition-colors"
        >
          View All
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* 3. Map through the array to show different cards */}
        {featuredProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}
