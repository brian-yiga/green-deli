import React, { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom"; // Added Link
import { useCart } from "../context/CartContext";
import { products, formatPrice } from "../data/products";

// UI Components
import HeatScale from "../components/HeatScale";
import FlavorComplexity from "../components/FlavorComplexity";
import QuantityToggle from "../components/QuantityToggle";
import Button from "../components/Button";
import Badge from "../components/Badge";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  const product = useMemo(() => {
    return products.find((p) => p.slug === id);
  }, [id]);

  useDocumentTitle(
    product ? `${product.name} | Green Deli` : "Product Details",
  );

  if (!product) {
    return (
      <div className="h-screen flex flex-col items-center justify-center gap-6">
        <div className="font-display uppercase tracking-widest text-xl opacity-40">
          Product Not Found
        </div>
        <Link
          to="/shop"
          className="text-deli-red font-sans text-[10px] uppercase tracking-[0.2em] font-bold border-b border-deli-red pb-1"
        >
          Return to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: qty });
  };

  return (
    <div className="flex flex-col md:pb-12 bg-deli-cream min-h-screen">
      {/* 1. Back to Shop Navigation - Floating Overlay */}
      <div className="absolute top-24 left-6 z-20 md:left-10">
        <Link
          to="/shop"
          className="group flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-sm hover:bg-white transition-all border border-deli-charcoal/5"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transform group-hover:-translate-x-1 transition-transform text-deli-charcoal"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          <span className="font-sans text-[9px] uppercase tracking-[0.2em] font-bold text-deli-charcoal">
            Back to Shop
          </span>
        </Link>
      </div>

      {/* Image Gallery */}
      <section className="relative w-full bg-deli-charcoal/5 py-16 md:py-20 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-40 sm:w-52 md:w-64 lg:w-72 h-auto object-contain"
        />

        <div className="absolute bottom-6 left-6 flex gap-2">
          {product.isHot && <Badge variant="hot">High Heat</Badge>}
          {product.isOrganic && <Badge variant="organic">Single Origin</Badge>}
        </div>
      </section>

      {/* Product Content Container */}
      <section className="max-w-7xl mx-auto p-3 -mt-10 md:mt-12 relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Info Column */}
        <div className="bg-white p-6 md:p-0 rounded-[2.5rem] md:rounded-none shadow-xl md:shadow-none md:p-10">
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-deli-red mb-3 block">
            {product.origin}
          </span>
          <h1 className="font-display text-4xl md:text-7xl uppercase leading-none mb-6">
            {product.name}
          </h1>

          <div className="flex gap-8 mb-8 border-y border-deli-charcoal/5 py-6">
            <HeatScale rating={product.heatRating || 1} label="Heat Level" />
            <FlavorComplexity
              rating={product.complexity || 3}
              label="Complexity"
            />
          </div>

          <p className="font-sans text-lg leading-relaxed text-deli-charcoal/70 mb-8">
            {product.description}
          </p>

          <div className="flex flex-col gap-2 mb-10">
            <h4 className="font-sans text-sm uppercase tracking-widest font-bold opacity-40">
              Specifications
            </h4>
            <ul className="text-sm font-sans flex flex-col gap-2">
              <li className="flex justify-between border-b border-deli-charcoal/5 pb-2 text-sm">
                <span>Category</span>{" "}
                <span className="font-bold uppercase tracking-widest text-sm">
                  {product.category}
                </span>
              </li>
              <li className="flex justify-between border-b border-deli-charcoal/5 pb-2 text-sm">
                <span>Ingredients</span>{" "}
                <span className="font-bold">100% Organic {product.name}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Purchase Column */}
        <div className="md:sticky md:top-32 h-fit">
          <div className="bg-white md:bg-transparent p-8 md:p-0 rounded-[2rem] border border-deli-charcoal/5 md:border-none shadow-lg md:shadow-none">
            <h2 className="font-display text-3xl mb-8">
              {formatPrice(product.price)}
            </h2>

            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <span className="font-sans text-sm uppercase tracking-widest font-bold">
                  Select Quantity
                </span>
                <QuantityToggle
                  quantity={qty}
                  onIncrease={() => setQty(qty + 1)}
                  onDecrease={() => setQty(Math.max(1, qty - 1))}
                />
              </div>

              <Button
                variant="primary"
                onClick={handleAddToCart}
                className="w-full bg-deli-red text-white py-4 rounded-full font-sans text-[10px] uppercase tracking-widest font-bold shadow-xl active:scale-95 transition-all"
              >
                Add to Cart • {formatPrice(product.price * qty)}
              </Button>

              <p className="text-[9px] uppercase tracking-widest text-center opacity-40 font-sans">
                Delivery within Kampala: 24 - 48 Hours
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
