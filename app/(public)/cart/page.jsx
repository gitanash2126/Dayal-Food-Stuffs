"use client";

import Counter from "@/components/Counter";
import OrderSummary from "@/components/OrderSummary";
import PageTitle from "@/components/PageTitle";
import { deleteItemFromCart } from "@/lib/features/cart/cartSlice";
import { ShoppingCart, Trash2Icon, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
  const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || "₹";

  const { cartItems } = useSelector((state) => state.cart);
  const products = useSelector((state) => state.product.list);

  const dispatch = useDispatch();

  const [cartArray, setCartArray] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const createCartArray = () => {
    let total = 0;
    const arr = [];

    for (const [key, value] of Object.entries(cartItems)) {
      const product = products.find((item) => item.id === key);

      if (product) {
        arr.push({
          ...product,
          quantity: value,
        });

        total += product.price * value;
      }
    }

    setCartArray(arr);
    setTotalPrice(total);
  };

  const handleDeleteItemFromCart = (productId) => {
    dispatch(deleteItemFromCart({ productId }));
  };

  useEffect(() => {
    if (products.length > 0) {
      createCartArray();
    }
  }, [cartItems, products]);

  /* EMPTY CART */
  if (cartArray.length === 0) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
        <div className="bg-green-100 p-5 rounded-full mb-6">
          <ShoppingCart className="text-green-600" size={34} />
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">
          Your Cart is Empty
        </h1>

        <p className="mt-3 text-slate-500 max-w-md">
          Add fresh spices and premium masale from Dayal Food Stuffs.
        </p>

        <Link
          href="/shop"
          className="mt-7 bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-full font-medium transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 sm:px-6 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <PageTitle
          heading="Your Shopping Cart"
          text="Fresh spices selected for your kitchen"
          linkText="Add More"
          path="/shop"
        />

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Left Side */}
          <div className="lg:col-span-2 space-y-5">
            {cartArray.map((item, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row gap-5 hover:shadow-md transition"
              >
                {/* Image */}
                <div className="relative w-full sm:w-32 h-32 rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src={
                      item?.images?.[0] ||
                      "https://source.unsplash.com/300x300/?spices"
                    }
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="text-lg font-semibold text-slate-800">
                        {item.name}
                      </h2>

                      <p className="text-sm text-slate-500 mt-1">
                        {item.category}
                      </p>
                    </div>

                    <button
                      onClick={() => handleDeleteItemFromCart(item.id)}
                      className="text-red-500 hover:bg-red-50 p-2 rounded-full transition"
                    >
                      <Trash2Icon size={18} />
                    </button>
                  </div>

                  {/* Price */}
                  <div className="mt-3 text-lg font-bold text-slate-800">
                    {currency}
                    {item.price}
                  </div>

                  {/* Bottom */}
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                    <Counter productId={item.id} />

                    <p className="font-semibold text-green-700">
                      Total: {currency}
                      {(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side Summary */}
          <div className="lg:sticky lg:top-6 h-fit">
            <OrderSummary totalPrice={totalPrice} items={cartArray} />

            {/* WhatsApp Order */}
            <a
              href={`https://wa.me/919335082270?text=Hello, I want to place order worth ${currency}${totalPrice}`}
              target="_blank"
              className="mt-4 w-full inline-flex items-center justify-center gap-2 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-5 py-3 rounded-full font-medium transition"
            >
              Quick WhatsApp Order
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
