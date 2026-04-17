"use client";

import { ArrowRightIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CategoriesMarquee from "./CategoriesMarquee";
import { assets } from "@/assets/assets";

const Hero = () => {
  const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || "₹";

  return (
    <div className="mx-4 sm:mx-6">
      <div className="flex max-xl:flex-col gap-6 max-w-7xl mx-auto my-8 sm:my-10">
        {/* Main Hero */}
        <div className="relative flex-1 overflow-hidden rounded-3xl min-h-[560px] shadow-md group">
          {/* Background Image */}
          <Image
            src={assets.hero1}
            alt="Dayal Food Stuffs"
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/45"></div>

          {/* Badge */}
          <div className="relative z-10 px-5 sm:px-10 pt-6 sm:pt-8">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur text-white px-2 py-1 rounded-full text-xs sm:text-sm font-medium border border-white/20">
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-[10px] sm:text-xs">
                NEW
              </span>
              Fresh & Pure Indian Spices
              <ChevronRightIcon size={16} />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 px-5 sm:px-10 pt-6 sm:pt-8 pb-10">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-2xl text-white">
              Authentic Masale From{" "}
              <span className="text-green-400">Dayal Food Stuffs</span>
            </h1>

            <p className="mt-4 text-white/90 text-sm sm:text-base max-w-xl leading-7">
              Fresh turmeric, chilli, garam masala, premium whole spices and
              daily essentials delivered with purity and trust.
            </p>

            {/* Price */}
            <div className="mt-6 sm:mt-8">
              <p className="text-sm text-white/80">Starting From</p>
              <p className="text-3xl sm:text-4xl font-bold text-white">
                {currency}10
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-7">
              <Link
                href="/shop"
                className="bg-white text-slate-800 px-7 py-3 rounded-full text-sm font-medium hover:bg-slate-100 transition"
              >
                Shop Now
              </Link>

              <a
                href="https://wa.me/919335082270"
                target="_blank"
                className="bg-green-500 text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-green-600 transition"
              >
                Order on WhatsApp
              </a>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-4 mt-7 text-xs sm:text-sm text-white">
              <span className="bg-white/20 px-4 py-2 rounded-full backdrop-blur">
                100% Pure
              </span>

              <span className="bg-white/20 px-4 py-2 rounded-full backdrop-blur">
                Fast Delivery
              </span>

              <span className="bg-white/20 px-4 py-2 rounded-full backdrop-blur">
                Best Price
              </span>
            </div>
          </div>
        </div>

        {/* Side Cards */}
        <div className="flex flex-col md:flex-row xl:flex-col gap-5 w-full xl:max-w-sm text-sm text-slate-700">
          {/* Card 1 */}
          <Link
            href="/shop"
            className="relative overflow-hidden rounded-3xl flex-1 min-h-[250px] group"
          >
            <Image
              src={assets.hero2}
              alt="Best Quality Spices"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/35"></div>

            <div className="relative z-10 p-6 text-white h-full flex flex-col justify-between">
              <p className="text-2xl font-semibold leading-tight">
                Best Quality Spices
              </p>

              <p className="flex items-center gap-1">
                Shop Now <ArrowRightIcon size={18} />
              </p>
            </div>
          </Link>

          {/* Card 2 */}
          <Link
            href="/shop"
            className="relative overflow-hidden rounded-3xl flex-1 min-h-[250px] group"
          >
            <Image
              src={assets.hero3}
              alt="Fresh Daily Masale"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/35"></div>

            <div className="relative z-10 p-6 text-white h-full flex flex-col justify-between">
              <p className="text-2xl font-semibold leading-tight">
                Fresh Daily Masale
              </p>

              <p className="flex items-center gap-1">
                Explore <ArrowRightIcon size={18} />
              </p>
            </div>
          </Link>
        </div>
      </div>

      <CategoriesMarquee />
    </div>
  );
};

export default Hero;
