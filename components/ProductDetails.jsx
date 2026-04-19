"use client";

import { addToCart } from "@/lib/features/cart/cartSlice";
import {
  TagIcon,
  TruckIcon,
  ShieldCheckIcon,
  LeafIcon,
  ShoppingCart,
  Store,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Counter from "./Counter";
import { useDispatch, useSelector } from "react-redux";
import logo from "@/assets/logo.jpeg";

const ProductDetails = ({ product }) => {
  const productId = product.id;
  const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || "₹";

  const cart = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();
  const router = useRouter();

  const [mainImage, setMainImage] = useState(product.images?.[0]);

  const addToCartHandler = () => {
    dispatch(addToCart({ productId }));
  };

  const discount =
    product.mrp && product.price
      ? Math.round(((product.mrp - product.price) / product.mrp) * 100)
      : 10;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
      {/* LEFT IMAGE SECTION */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Thumbnails */}
        <div className="flex sm:flex-col gap-3 order-2 sm:order-1">
          {product.images?.map((image, index) => (
            <button
              key={index}
              onClick={() => setMainImage(image)}
              className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 transition ${
                mainImage === image
                  ? "border-green-600"
                  : "border-slate-200 hover:border-slate-400"
              }`}
            >
              <Image
                src={image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>

        {/* Main Image */}
        <div className="relative flex-1 min-h-[440px] rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 order-1 sm:order-2">
          {/* Discount */}
          <span className="absolute top-4 left-4 z-10 bg-green-600 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg">
            {discount}% OFF
          </span>

          <Image
            src={mainImage}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition duration-500"
          />
        </div>
      </div>

      {/* RIGHT DETAILS */}
      <div className="flex flex-col">
        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-bold text-slate-800 leading-tight">
          {product.name}
        </h1>

        {/* Category */}
        <p className="mt-3 text-green-600 font-semibold uppercase tracking-[2px] text-sm">
          {product.category}
        </p>

        {/* Description */}
        <p className="mt-6 text-slate-600 leading-8 text-[15px]">
          {product.description ||
            "Premium quality spices with authentic aroma, rich taste and freshness. Carefully packed hygienically for your kitchen needs."}
        </p>

        {/* Price */}
        <div className="flex items-end gap-4 mt-7">
          <p className="text-5xl font-bold text-slate-800">
            {currency}
            {product.price}
          </p>

          {product.mrp && (
            <p className="text-2xl text-slate-400 line-through pb-1">
              {currency}
              {product.mrp}
            </p>
          )}
        </div>

        {/* Save */}
        <div className="flex items-center gap-2 mt-4 text-green-700 font-medium">
          <TagIcon size={16} />
          Save {discount}% on this product
        </div>

        {/* Quantity + Buttons */}
        <div className="flex flex-wrap items-end gap-4 mt-8">
          {cart[productId] && (
            <div>
              <p className="text-sm font-medium mb-2">Quantity</p>

              <Counter productId={productId} />
            </div>
          )}

          <button
            onClick={() =>
              !cart[productId] ? addToCartHandler() : router.push("/cart")
            }
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium transition shadow-md"
          >
            <ShoppingCart size={18} />
            {!cart[productId] ? "Add to Cart" : "View Cart"}
          </button>

          <a
            href={`https://wa.me/919335082270?text=Hello, I want to order ${product.name}`}
            target="_blank"
            className="border border-slate-300 hover:border-green-600 hover:text-green-600 px-8 py-3 rounded-full font-medium transition"
          >
            WhatsApp Order
          </a>
        </div>

        {/* Trust Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
          <div className="border border-slate-200 rounded-2xl p-4 hover:shadow-md transition">
            <TruckIcon className="text-green-600 mb-3" size={20} />
            <p className="text-sm font-semibold text-slate-800">
              Fast Delivery
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Quick doorstep delivery
            </p>
          </div>

          <div className="border border-slate-200 rounded-2xl p-4 hover:shadow-md transition">
            <ShieldCheckIcon className="text-green-600 mb-3" size={20} />
            <p className="text-sm font-semibold text-slate-800">
              Quality Assured
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Trusted premium products
            </p>
          </div>

          <div className="border border-slate-200 rounded-2xl p-4 hover:shadow-md transition">
            <LeafIcon className="text-green-600 mb-3" size={20} />
            <p className="text-sm font-semibold text-slate-800">Fresh & Pure</p>
            <p className="text-xs text-slate-500 mt-1">
              Rich aroma & freshness
            </p>
          </div>
        </div>

        {/* Seller Section */}
        <div className="mt-10 border-t border-slate-200 pt-6">
          <div className="flex items-center gap-4">
            <Image
              src={logo}
              alt="Dayal Food Stuffs"
              width={58}
              height={58}
              className="rounded-full object-cover border-2 border-green-600"
            />

            <div>
              <p className="text-sm text-slate-500">Sold by</p>

              <h3 className="font-bold text-slate-800">Dayal Food Stuffs</h3>

              <button className="mt-1 text-green-600 text-sm hover:underline flex items-center gap-1">
                <Store size={14} />
                View Store
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
