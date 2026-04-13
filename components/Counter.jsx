"use client";
import { addToCart, removeFromCart } from "@/lib/features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Counter = ({ productId }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const quantity = cartItems?.[productId] || 0;

  const addToCartHandler = () => {
    dispatch(addToCart({ productId }));
  };

  const removeFromCartHandler = () => {
    dispatch(removeFromCart({ productId }));
  };

  return (
    <div className="inline-flex items-center gap-1 sm:gap-3 px-3 py-1 rounded border border-slate-200 text-slate-600">
      <button onClick={removeFromCartHandler} className="px-2 text-lg">
        −
      </button>

      <p className="min-w-4 text-center">{quantity}</p>

      <button onClick={addToCartHandler} className="px-2 text-lg">
        +
      </button>
    </div>
  );
};

export default Counter;
