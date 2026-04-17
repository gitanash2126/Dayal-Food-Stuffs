import React from "react";
import Title from "./Title";
import { TruckIcon, ShieldCheckIcon, LeafIcon } from "lucide-react";

const ourSpecsData = [
  {
    title: "Fresh & Pure Spices",
    description:
      "Freshly packed masale with natural aroma, rich color and authentic taste for every kitchen.",
    icon: LeafIcon,
    accent: "bg-green-600",
    light: "bg-green-50",
  },
  {
    title: "Fast Delivery",
    description:
      "Quick doorstep delivery with safe packaging so your products arrive fresh and secure.",
    icon: TruckIcon,
    accent: "bg-blue-600",
    light: "bg-blue-50",
  },
  {
    title: "Quality Guaranteed",
    description:
      "Premium quality spices selected carefully to give you the best cooking experience.",
    icon: ShieldCheckIcon,
    accent: "bg-yellow-500",
    light: "bg-yellow-50",
  },
];

const OurSpecs = () => {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-20 max-w-7xl mx-auto">
      {/* Heading */}
      <Title
        visibleButton={false}
        title="Why Choose Dayal Food Stuffs"
        description="Fresh spices, premium quality and trusted service for every home kitchen."
      />

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 sm:mt-16">
        {ourSpecsData.map((spec, index) => (
          <div
            key={index}
            className={`relative rounded-2xl border border-slate-200 p-7 pt-10 hover:shadow-xl transition duration-300 ${spec.light}`}
          >
            {/* Icon */}
            <div
              className={`absolute -top-5 left-6 size-12 rounded-xl flex items-center justify-center text-white shadow-md ${spec.accent}`}
            >
              <spec.icon size={22} />
            </div>

            {/* Content */}
            <h3 className="text-lg font-semibold text-slate-800">
              {spec.title}
            </h3>

            <p className="text-sm text-slate-600 mt-3 leading-6">
              {spec.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurSpecs;
