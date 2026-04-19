"use client";

import { createSlice } from "@reduxjs/toolkit";
import { products } from "@/assets/assets";

/* Load Products from localStorage if available */
const loadProducts = () => {
  if (typeof window !== "undefined") {
    const savedProducts = localStorage.getItem("adminProducts");

    if (savedProducts) {
      return JSON.parse(savedProducts);
    }
  }

  return products;
};

const productSlice = createSlice({
  name: "product",

  initialState: {
    list: loadProducts(),
  },

  reducers: {
    setProduct: (state, action) => {
      state.list = action.payload;

      if (typeof window !== "undefined") {
        localStorage.setItem("adminProducts", JSON.stringify(action.payload));
      }
    },

    clearProduct: (state) => {
      state.list = [];

      if (typeof window !== "undefined") {
        localStorage.removeItem("adminProducts");
      }
    },
  },
});

export const { setProduct, clearProduct } = productSlice.actions;

export default productSlice.reducer;
