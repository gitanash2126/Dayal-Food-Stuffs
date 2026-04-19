"use client";

import { ArrowRight, ShieldCheck, Leaf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "@/assets/logo.jpeg";

const ProductDescription = ({ product }) => {
  const [selectedTab, setSelectedTab] = useState("Description");

  const tabs = ["Description", "Details", "Benefits"];

  return (
    <div className="my-20 text-sm text-slate-600">
      {/* Tabs */}
      <div className="flex flex-wrap gap-3 border-b border-slate-200 pb-4 mb-8">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(tab)}
            className={`px-5 py-2 rounded-full font-medium transition ${
              selectedTab === tab
                ? "bg-green-600 text-white shadow-md"
                : "bg-slate-100 text-slate-500 hover:bg-slate-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Description */}
      {selectedTab === "Description" && (
        <div className="max-w-3xl space-y-4 leading-8 text-[15px]">
          <p>
            {product.description ||
              "Fresh and pure spice from Dayal Food Stuffs. Perfect for daily cooking with authentic taste, rich aroma and premium quality."}
          </p>

          <p>
            Carefully packed hygienically to preserve freshness and flavour for
            everyday use in your kitchen.
          </p>
        </div>
      )}

      {/* Details */}
      {selectedTab === "Details" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl">
          <div className="border border-slate-200 rounded-2xl p-5">
            <p className="text-slate-400 text-xs mb-2">Category</p>

            <p className="font-semibold text-slate-800">{product.category}</p>
          </div>

          <div className="border border-slate-200 rounded-2xl p-5">
            <p className="text-slate-400 text-xs mb-2">Availability</p>

            <p className="font-semibold text-green-600">In Stock</p>
          </div>

          <div className="border border-slate-200 rounded-2xl p-5">
            <p className="text-slate-400 text-xs mb-2">Brand</p>

            <p className="font-semibold text-slate-800">Dayal Food Stuffs</p>
          </div>

          <div className="border border-slate-200 rounded-2xl p-5">
            <p className="text-slate-400 text-xs mb-2">Quality</p>

            <p className="font-semibold text-slate-800">Premium Grade</p>
          </div>
        </div>
      )}

      {/* Benefits */}
      {selectedTab === "Benefits" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl">
          <div className="border border-slate-200 rounded-2xl p-5">
            <Leaf className="text-green-600 mb-3" size={18} />

            <p className="font-semibold text-slate-800">Fresh Aroma</p>

            <p className="text-sm mt-2">
              Natural fragrance and authentic flavour in every pack.
            </p>
          </div>

          <div className="border border-slate-200 rounded-2xl p-5">
            <ShieldCheck className="text-green-600 mb-3" size={18} />

            <p className="font-semibold text-slate-800">Hygienically Packed</p>

            <p className="text-sm mt-2">
              Packed safely to maintain purity and freshness.
            </p>
          </div>
        </div>
      )}

      {/* Sold By Section */}
      <div className="mt-14 border-t border-slate-200 pt-8">
        <div className="flex items-center gap-4">
          <Image
            src={logo}
            alt="Dayal Food Stuffs"
            width={58}
            height={58}
            className="rounded-full border-2 border-green-600 object-cover"
          />

          <div>
            <p className="text-slate-400 text-xs uppercase tracking-wide">
              Sold By
            </p>

            <h3 className="font-bold text-slate-800 text-lg">
              Dayal Food Stuffs
            </h3>

            <Link
              href="/"
              className="mt-1 inline-flex items-center gap-1 text-green-600 hover:underline font-medium"
            >
              View Store <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
