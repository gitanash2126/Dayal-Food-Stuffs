"use client";
import ProductDescription from "@/components/ProductDescription";
import ProductDetails from "@/components/ProductDetails";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Product() {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const products = useSelector((state) => state.product.list);

  const fetchProduct = async () => {
    const product = products.find((product) => product.id === productId);
    setProduct(product);
  };

  useEffect(() => {
    if (products.length > 0) {
      fetchProduct();
    }
    scrollTo(0, 0);
  }, [productId, products]);

  return (
    <div className="mx-6">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <div className="text-gray-600 text-sm mt-8 mb-5">
          Home / Dayal Food Stuffs / Spices / {product?.category}
        </div>

        {/* Product Details */}
        {product && <ProductDetails product={product} />}

        {/* Description */}
        {product && <ProductDescription product={product} />}

        {/* Extra Info */}
        {product && (
          <div className="mt-10 p-5 bg-slate-50 rounded-lg">
            <h3 className="font-semibold text-lg">About this spice</h3>

            <p className="text-slate-600 mt-2">
              Fresh and high quality spices from Dayal Food Stuffs. Carefully
              packed to preserve aroma and taste.
            </p>

            <ul className="mt-3 text-sm text-slate-500 space-y-1">
              <li>✔ 100% Pure</li>
              <li>✔ No artificial color</li>
              <li>✔ Fresh packaging</li>
              <li>✔ Cash on delivery available</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
