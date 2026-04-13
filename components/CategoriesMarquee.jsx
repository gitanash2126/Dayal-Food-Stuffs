import { categories } from "@/assets/assets";

const CategoriesMarquee = () => {
  return (
    <div className="overflow-hidden w-full relative max-w-7xl mx-auto select-none my-14 group">
      <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />

      <div className="flex min-w-[200%] animate-[marqueeScroll_20s_linear_infinite] group-hover:[animation-play-state:paused] gap-4">
        {[...categories, ...categories, ...categories].map(
          (category, index) => (
            <button
              key={index}
              className="px-5 py-2 bg-green-50 rounded-lg text-slate-700 text-sm hover:bg-green-600 hover:text-white active:scale-95 transition-all whitespace-nowrap"
            >
              {category}
            </button>
          ),
        )}
      </div>

      <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
    </div>
  );
};

export default CategoriesMarquee;
