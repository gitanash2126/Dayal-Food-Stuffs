"use client";

import Title from "./Title";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const BestSelling = () => {
  const displayQuantity = 8;
  const products = useSelector((state) => state.product.list);

  const visibleProducts = products.slice(0, displayQuantity);

  return (
    <section className="px-4 sm:px-6 py-16 sm:py-20 max-w-7xl mx-auto">
      {/* Heading */}
      <Title
        title="Best Selling Spices"
        description={`Showing ${visibleProducts.length} of ${products.length} premium spices`}
        href="/shop"
      />

      {/* Product Grid */}
      <div className="mt-10 sm:mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 place-items-center">
        {visibleProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="flex justify-center mt-10">
        <a
          href="/shop"
          className="px-7 py-3 rounded-full bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition"
        >
          View All Products
        </a>
      </div>
    </section>
  );
};

export default BestSelling;
