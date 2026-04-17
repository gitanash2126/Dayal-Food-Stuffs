"use client";

import { Eye, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || "₹";

  const rating = product?.rating?.length
    ? Math.round(
        product.rating.reduce((acc, curr) => acc + curr.rating, 0) /
          product.rating.length,
      )
    : 4;

  return (
    <Link
      href={`/product/${product.id}`}
      className="group block w-full max-w-[270px] mx-auto"
    >
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition duration-300">
        {/* Image */}
        <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-100">
          {/* Fixed 10% Badge */}
          <span className="absolute top-3 left-3 z-20 bg-green-600 text-white text-[11px] px-3 py-1 rounded-full font-medium shadow">
            10% OFF
          </span>

          {/* Product Image */}
          <Image
            src={product.images?.[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition duration-500"
          />

          {/* Hover Icon */}
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition z-20">
            <div className="bg-white shadow-md p-2 rounded-full">
              <Eye size={16} className="text-slate-700" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-[17px] font-semibold text-slate-800 line-clamp-1">
            {product.name}
          </h3>

          <p className="text-xs text-slate-500 mt-1">{product.category}</p>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-2">
            {Array(5)
              .fill("")
              .map((_, index) => (
                <StarIcon
                  key={index}
                  size={14}
                  className="text-transparent"
                  fill={rating >= index + 1 ? "#16a34a" : "#d1d5db"}
                />
              ))}

            <span className="text-xs text-slate-500 ml-1">({rating}.0)</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 mt-3">
            <p className="text-xl font-bold text-slate-800">
              {currency}
              {product.price}
            </p>

            <p className="text-sm text-slate-400 line-through">
              {currency}
              {Math.round(product.price + product.price * 0.1)}
            </p>
          </div>

          {/* Button */}
          <button className="w-full mt-4 py-2.5 rounded-xl bg-slate-800 text-white text-sm font-medium hover:bg-slate-900 transition">
            View Product
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
