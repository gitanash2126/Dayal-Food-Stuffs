"use client";

import React from "react";
import Title from "./Title";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const LatestProducts = () => {
  const displayQuantity = 4;
  const products = useSelector((state) => state.product.list);

  const visibleProducts = products.slice(0, displayQuantity);

  return (
    <section className="px-4 sm:px-6 py-16 sm:py-20 max-w-7xl mx-auto">
      {/* Heading */}
      <Title
        title="Latest Spices"
        description={`Showing ${visibleProducts.length} of ${products.length} fresh arrivals`}
        href="/shop"
      />

      {/* Grid */}
      <div className="mt-10 sm:mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 place-items-center">
        {visibleProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-10">
        <a
          href="/shop"
          className="px-7 py-3 rounded-full bg-slate-800 text-white text-sm font-medium hover:bg-slate-900 transition"
        >
          Explore More
        </a>
      </div>
    </section>
  );
};

export default LatestProducts;
