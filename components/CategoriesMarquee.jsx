"use client";

import { categories } from "@/assets/assets";

const CategoriesMarquee = () => {
  const safeCategories = Array.isArray(categories) ? categories : [];

  return (
    <div className="overflow-hidden w-full relative max-w-7xl mx-auto select-none my-14 group">
      {/* Left Fade */}
      <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />

      {/* Marquee */}
      <div className="flex min-w-[200%] gap-4 animate-[marqueeScroll_20s_linear_infinite] group-hover:[animation-play-state:paused]">
        {[...safeCategories, ...safeCategories, ...safeCategories].map(
          (category, index) => (
            <button
              key={`${category}-${index}`}
              type="button"
              className="px-5 py-2 bg-green-50 rounded-lg text-slate-700 text-sm whitespace-nowrap transition-all hover:bg-green-600 hover:text-white active:scale-95"
            >
              {category}
            </button>
          ),
        )}
      </div>

      {/* Right Fade */}
      <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
    </div>
  );
};

export default CategoriesMarquee;
