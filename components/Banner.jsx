"use client";
import React from "react";

export default function Banner() {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    isOpen && (
      <div className="w-full px-6 py-2 text-white text-center bg-green-600">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <p className="text-sm font-medium">
            Dayal Food Stuffs — Fresh & Pure Spices | Owner: Amrit Dayal
          </p>

          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-lg"
          >
            ✕
          </button>
        </div>
      </div>
    )
  );
}
