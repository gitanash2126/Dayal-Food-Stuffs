import React from "react";
import Title from "./Title";
import { TruckIcon, ShieldCheckIcon, LeafIcon } from "lucide-react";

const ourSpecsData = [
  {
    title: "Fresh & Pure Spices",
    description:
      "We provide freshly packed spices with natural aroma and authentic taste.",
    icon: LeafIcon,
    accent: "#16a34a",
  },
  {
    title: "Fast Delivery",
    description:
      "Quick and safe delivery across your city with proper packaging.",
    icon: TruckIcon,
    accent: "#2563eb",
  },
  {
    title: "Quality Guaranteed",
    description:
      "Premium quality masale selected carefully for best cooking experience.",
    icon: ShieldCheckIcon,
    accent: "#f59e0b",
  },
];

const OurSpecs = () => {
  return (
    <div className="px-6 my-20 max-w-6xl mx-auto">
      <Title
        visibleButton={false}
        title="Why Choose Dayal Food Stuffs"
        description="We provide fresh spices, premium quality and fast delivery to make your cooking better."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-16">
        {ourSpecsData.map((spec, index) => (
          <div
            key={index}
            className="relative h-44 px-8 flex flex-col items-center justify-center text-center border rounded-lg"
          >
            <h3 className="text-slate-800 font-medium">{spec.title}</h3>

            <p className="text-sm text-slate-600 mt-3">{spec.description}</p>

            <div
              className="absolute -top-5 text-white size-10 flex items-center justify-center rounded-md"
              style={{ backgroundColor: spec.accent }}
            >
              <spec.icon size={20} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurSpecs;
