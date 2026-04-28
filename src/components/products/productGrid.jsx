import React from 'react';
import ProductCard from './ProductCard';
import products from '../../data/products.json';

const ProductGrid = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto bg-deli-cream">
      {/* Grid Header */}
      <div className="mb-10 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-deli-brown font-bold mb-3 uppercase tracking-tight">
          Our Spice Larder
        </h2>
        <div className="h-1 w-20 bg-deli-red mx-auto mb-4"></div>
        <p className="text-deli-brown/60 max-w-md mx-auto italic">
          From the volcanic soils of Mt. Elgon to your kitchen—discover Uganda’s finest artisanal heat.
        </p>
      </div>

      {/* The Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

      {/* Empty State (Optional) */}
      {products.length === 0 && (
        <div className="text-center py-20">
          <p className="text-deli-brown italic">No spices found in the larder...</p>
        </div>
      )}
    </section>
  );
};

export default ProductGrid;