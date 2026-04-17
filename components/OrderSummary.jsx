"use client";

import {
  PlusIcon,
  SquarePenIcon,
  ShieldCheck,
  Truck,
  BadgeCheck,
} from "lucide-react";
import React, { useState } from "react";
import AddressModal from "./AddressModal";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const OrderSummary = ({ totalPrice }) => {
  const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || "₹";
  const router = useRouter();

  const addressList = useSelector((state) => state.address.list);

  const [selectedAddress, setSelectedAddress] = useState(null);
  const [showAddressModal, setShowAddressModal] = useState(false);

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    if (!selectedAddress) {
      toast.error("Please select delivery address");
      return;
    }

    toast.success("Order placed successfully");
    router.push("/orders");
  };

  return (
    <>
      <div className="w-full bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-sm">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-slate-800">Order Summary</h2>

        <p className="text-sm text-slate-500 mt-1">
          Secure checkout with trusted delivery
        </p>

        {/* Address */}
        <div className="mt-6 border-y border-slate-200 py-5">
          <div className="flex items-center justify-between">
            <p className="font-medium text-slate-800">Delivery Address</p>

            <button
              onClick={() => setShowAddressModal(true)}
              className="text-green-600 text-sm flex items-center gap-1"
            >
              Add <PlusIcon size={16} />
            </button>
          </div>

          {selectedAddress ? (
            <div className="mt-4 bg-slate-50 border border-slate-200 rounded-2xl p-4">
              <div className="flex justify-between gap-3">
                <div>
                  <p className="font-semibold text-slate-800">
                    {selectedAddress.name}
                  </p>

                  <p className="text-sm text-slate-600 mt-1 leading-6">
                    {selectedAddress.street}, {selectedAddress.city},{" "}
                    {selectedAddress.state}, {selectedAddress.zip}
                  </p>

                  <p className="text-sm text-slate-500 mt-1">
                    {selectedAddress.phone}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedAddress(null)}
                  className="text-slate-500 hover:text-green-600"
                >
                  <SquarePenIcon size={18} />
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-4">
              {addressList.length > 0 ? (
                <select
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-green-600"
                  onChange={(e) =>
                    setSelectedAddress(addressList[e.target.value])
                  }
                >
                  <option value="">Select Address</option>

                  {addressList.map((address, index) => (
                    <option key={index} value={index}>
                      {address.name}, {address.city}
                    </option>
                  ))}
                </select>
              ) : (
                <p className="text-sm text-slate-500 mt-3">
                  No saved address yet.
                </p>
              )}
            </div>
          )}
        </div>

        {/* Pricing */}
        <div className="py-5 space-y-3 border-b border-slate-200">
          <div className="flex justify-between text-sm">
            <span className="text-slate-600">Subtotal</span>
            <span className="font-medium text-slate-800">
              {currency}
              {totalPrice}
            </span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-slate-600">Shipping</span>
            <span className="text-green-600 font-medium">Free</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-slate-600">Discount</span>
            <span className="text-green-600 font-medium">10% OFF Applied</span>
          </div>
        </div>

        {/* Total */}
        <div className="flex justify-between py-5">
          <span className="text-lg font-semibold text-slate-800">Total</span>

          <span className="text-2xl font-bold text-green-600">
            {currency}
            {totalPrice}
          </span>
        </div>

        {/* CTA */}
        <button
          onClick={(e) =>
            toast.promise(handlePlaceOrder(e), {
              loading: "Placing order...",
            })
          }
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3.5 rounded-full font-medium transition"
        >
          Place Order
        </button>

        {/* WhatsApp Order */}
        <a
          href={`https://wa.me/919335082270?text=Hello, I want to place order worth ${currency}${totalPrice}`}
          target="_blank"
          className="mt-3 block text-center border border-green-600 text-green-600 hover:bg-green-600 hover:text-white py-3 rounded-full font-medium transition"
        >
          Order on WhatsApp
        </a>

        {/* Trust Badges */}
        <div className="grid grid-cols-3 gap-3 mt-6 text-center">
          <div className="bg-slate-50 rounded-2xl p-3">
            <ShieldCheck className="mx-auto text-green-600" size={18} />
            <p className="text-[11px] mt-2 text-slate-600">Secure</p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-3">
            <Truck className="mx-auto text-green-600" size={18} />
            <p className="text-[11px] mt-2 text-slate-600">Fast Delivery</p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-3">
            <BadgeCheck className="mx-auto text-green-600" size={18} />
            <p className="text-[11px] mt-2 text-slate-600">Trusted</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showAddressModal && (
        <AddressModal setShowAddressModal={setShowAddressModal} />
      )}
    </>
  );
};

export default OrderSummary;
