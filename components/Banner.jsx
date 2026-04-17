"use client";

import React, { useEffect, useState } from "react";

export default function Banner() {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  if (!isOpen) return null;

  return (
    <div className="w-full px-6 py-2 text-white text-center bg-green-600">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <p className="text-sm font-medium">
          Dayal Food Stuffs — Fresh & Pure Spices | Owner: Amrit Dayal
        </p>

        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="text-white text-lg leading-none"
          aria-label="Close banner"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
