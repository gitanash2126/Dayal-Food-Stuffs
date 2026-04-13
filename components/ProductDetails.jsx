"use client";

import { addToCart } from "@/lib/features/cart/cartSlice";
import { TagIcon, TruckIcon, ShieldCheckIcon, LeafIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Counter from "./Counter";
import { useDispatch, useSelector } from "react-redux";

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

  return (
    <div className="flex max-lg:flex-col gap-12">
      {/* Images */}
      <div className="flex max-sm:flex-col-reverse gap-3">
        <div className="flex sm:flex-col gap-3">
          {product.images?.map((image, index) => (
            <div
              key={index}
              onClick={() => setMainImage(image)}
              className="bg-slate-100 flex items-center justify-center size-26 rounded-lg cursor-pointer"
            >
              <Image src={image} alt="" width={60} height={60} />
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center h-100 sm:size-113 bg-slate-100 rounded-lg">
          <Image
            src={mainImage || "https://source.unsplash.com/400x400/?spices"}
            alt=""
            width={250}
            height={250}
          />
        </div>
      </div>

      {/* Details */}
      <div className="flex-1">
        <h1 className="text-3xl font-semibold text-slate-800">
          {product.name}
        </h1>

        <div className="flex items-start my-6 gap-3 text-2xl font-semibold text-slate-800">
          <p>
            {currency}
            {product.price}
          </p>

          {product.mrp && (
            <p className="text-xl text-slate-500 line-through">
              {currency}
              {product.mrp}
            </p>
          )}
        </div>

        {product.mrp && (
          <div className="flex items-center gap-2 text-slate-500">
            <TagIcon size={14} />
            <p>
              Save{" "}
              {(((product.mrp - product.price) / product.mrp) * 100).toFixed(0)}
              %
            </p>
          </div>
        )}

        {/* Add to cart */}
        <div className="flex items-end gap-5 mt-10">
          {cart[productId] && (
            <div className="flex flex-col gap-3">
              <p className="text-lg font-semibold">Quantity</p>
              <Counter productId={productId} />
            </div>
          )}

          <button
            onClick={() =>
              !cart[productId] ? addToCartHandler() : router.push("/cart")
            }
            className="bg-green-600 text-white px-10 py-3 text-sm rounded hover:bg-green-700"
          >
            {!cart[productId] ? "Add to Cart" : "View Cart"}
          </button>
        </div>

        <hr className="border-gray-300 my-5" />

        {/* Features */}
        <div className="flex flex-col gap-4 text-slate-500">
          <p className="flex gap-3">
            <TruckIcon /> Fast Delivery
          </p>

          <p className="flex gap-3">
            <ShieldCheckIcon /> Quality Guaranteed
          </p>

          <p className="flex gap-3">
            <LeafIcon /> Fresh & Pure Spices
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
