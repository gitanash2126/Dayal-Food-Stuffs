"use client";

import React, { useEffect, useState } from "react";
import Title from "./Title";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const LatestProducts = () => {
  const products = useSelector((state) => state.product.list);

  const [mounted, setMounted] = useState(false);

  const displayQuantity = 4;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="px-6 my-30 max-w-6xl mx-auto">
      <Title
        title="Latest Spices"
        description={`Showing ${
          products.length < displayQuantity ? products.length : displayQuantity
        } of ${products.length} fresh arrivals`}
        href="/shop"
      />

      <div className="mt-12 grid grid-cols-2 sm:flex flex-wrap gap-6 justify-between">
        {products.slice(0, displayQuantity).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
