"use client";
import { ArrowRightIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import CategoriesMarquee from "./CategoriesMarquee";

const Hero = () => {
  const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || "₹";

  return (
    <div className="mx-6">
      <div className="flex max-xl:flex-col gap-8 max-w-7xl mx-auto my-10">
        {/* Main Hero */}
        <div className="relative flex-1 flex flex-col bg-green-100 rounded-3xl xl:min-h-100 group">
          <div className="p-5 sm:p-16">
            <div className="inline-flex items-center gap-3 bg-green-200 text-green-700 pr-4 p-1 rounded-full text-xs sm:text-sm">
              <span className="bg-green-600 px-3 py-1 rounded-full text-white text-xs">
                NEW
              </span>
              Fresh & Pure Spices
              <ChevronRightIcon size={16} />
            </div>

            <h2 className="text-3xl sm:text-5xl leading-[1.2] my-3 font-medium max-w-md">
              Authentic Masale From{" "}
              <span className="text-green-600">Dayal Food Stuffs</span>
            </h2>

            <div className="text-slate-800 text-sm font-medium mt-4 sm:mt-8">
              <p>Starting from</p>
              <p className="text-3xl">{currency}10</p>
            </div>

            <button className="bg-slate-800 text-white text-sm py-3 px-7 mt-6 rounded-md hover:bg-slate-900 transition">
              Shop Now
            </button>
          </div>

          <Image
            className="sm:absolute bottom-0 right-0 md:right-10 w-full sm:max-w-sm"
            src="https://source.unsplash.com/500x500/?spices"
            alt="spices"
            width={400}
            height={400}
          />
        </div>

        {/* Side Cards */}
        <div className="flex flex-col md:flex-row xl:flex-col gap-5 w-full xl:max-w-sm text-sm text-slate-600">
          <div className="flex-1 flex items-center justify-between w-full bg-orange-100 rounded-3xl p-6 px-8 group">
            <div>
              <p className="text-2xl font-medium">Best Quality Spices</p>

              <p className="flex items-center gap-1 mt-4">
                Shop Now
                <ArrowRightIcon size={18} />
              </p>
            </div>

            <Image
              className="w-28"
              src="https://source.unsplash.com/200x200/?indian-spices"
              alt=""
              width={200}
              height={200}
            />
          </div>

          <div className="flex-1 flex items-center justify-between w-full bg-blue-100 rounded-3xl p-6 px-8 group">
            <div>
              <p className="text-2xl font-medium">Fresh Daily Masale</p>

              <p className="flex items-center gap-1 mt-4">
                Explore
                <ArrowRightIcon size={18} />
              </p>
            </div>

            <Image
              className="w-28"
              src="https://source.unsplash.com/200x200/?masala"
              alt=""
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>

      <CategoriesMarquee />
    </div>
  );
};

export default Hero;
