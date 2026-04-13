"use client";
import BestSelling from "@/components/BestSelling";
import Hero from "@/components/Hero";
import OurSpecs from "@/components/OurSpec";
import LatestProducts from "@/components/LatestProducts";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Latest Spices */}
      <LatestProducts title="Fresh Spices" />

      {/* Best Selling */}
      <BestSelling title="Best Selling Masale" />

      {/* Store Features */}
      <OurSpecs />
    </div>
  );
}
