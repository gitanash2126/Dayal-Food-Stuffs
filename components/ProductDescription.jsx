"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProductDescription = ({ product }) => {
  const [selectedTab, setSelectedTab] = useState("Description");

  return (
    <div className="my-18 text-sm text-slate-600">
      {/* Tabs */}
      <div className="flex border-b border-slate-200 mb-6 max-w-2xl">
        {["Description", "Details"].map((tab, index) => (
          <button
            key={index}
            className={`px-3 py-2 font-medium ${
              tab === selectedTab
                ? "border-b-[1.5px] font-semibold"
                : "text-slate-400"
            }`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Description */}
      {selectedTab === "Description" && (
        <p className="max-w-xl">
          {product.description ||
            "Fresh and pure spice from Dayal Food Stuffs. Perfect for daily cooking with authentic taste and aroma."}
        </p>
      )}

      {/* Details */}
      {selectedTab === "Details" && (
        <div className="space-y-2">
          <p>
            <span className="font-medium">Category:</span> {product.category}
          </p>

          <p>
            <span className="font-medium">Availability:</span> In Stock
          </p>

          <p>
            <span className="font-medium">Brand:</span> Dayal Food Stuffs
          </p>
        </div>
      )}

      {/* Store */}
      <div className="flex gap-3 mt-14">
        <Image
          src="https://source.unsplash.com/100x100/?spices"
          alt=""
          className="size-11 rounded-full"
          width={100}
          height={100}
        />

        <div>
          <p className="font-medium text-slate-700">
            Sold by Dayal Food Stuffs
          </p>

          <Link href="/" className="flex items-center gap-1 text-green-600">
            view store <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
