import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function BestSellersSection() {
  // 1. Create an array of different products
  const featuredProducts = [
    {
      id: "1",
      name: "African Bird's Eye",
      origin: "Mount Elgon, Uganda",
      price: 25000,
      rating: 4,
      image: "/assets/products/blackPepper.png",
      isHot: true,
    },
    {
      id: "2",
      name: "Beef Masala",
      origin: "Mount Elgon, Uganda",
      price: 35000,
      rating: 0,
      image: "/assets/products/beefMasala.jpg",
      isOrganic: true,
    },
    {
      id: "3",
      name: "Honey",
      origin: "Mount Elgon, Uganda",
      price: 25000,
      rating: 0,
      image: "/assets/products/honey.png",
      isOrganic: true,
    },
    {
      id: "4",
      name: "Tomato Powder",
      origin: "Mount Elgon, Uganda",
      price: 15000,
      rating: 0,
      image: "/assets/products/tomato powder.png",
      isOrganic: true,
    },
  ];

  return (
    <section className="px-6 max-w-7xl mx-auto w-full my-20">
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
