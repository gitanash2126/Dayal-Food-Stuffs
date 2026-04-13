"use client";
import Image from "next/image";
import { DotIcon } from "lucide-react";

const OrderItem = ({ order }) => {
  const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || "₹";

  return (
    <>
      <tr className="text-sm">
        <td className="text-left">
          <div className="flex flex-col gap-6">
            {order.orderItems.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-20 aspect-square bg-slate-100 flex items-center justify-center rounded-md">
                  <Image
                    className="h-14 w-auto"
                    src={
                      item.product?.images?.[0] ||
                      "https://source.unsplash.com/100x100/?spices"
                    }
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>

                <div className="flex flex-col text-sm">
                  <p className="font-medium text-slate-700">
                    {item.product.name}
                  </p>

                  <p>
                    {currency}
                    {item.price} • Qty: {item.quantity}
                  </p>

                  <p className="text-slate-400">
                    {new Date(order.createdAt).toDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </td>

        <td className="text-center max-md:hidden">
          {currency}
          {order.total}
        </td>

        <td className="text-left max-md:hidden">
          <p>
            {order.address.name}, {order.address.street}
          </p>
          <p>
            {order.address.city}, {order.address.state}
          </p>
          <p>{order.address.phone}</p>
        </td>

        <td className="text-left max-md:hidden">
          <div
            className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs w-fit ${
              order.status === "DELIVERED"
                ? "bg-green-100 text-green-600"
                : order.status === "PROCESSING"
                  ? "bg-yellow-100 text-yellow-600"
                  : "bg-slate-100 text-slate-600"
            }`}
          >
            <DotIcon size={12} />
            {order.status}
          </div>
        </td>
      </tr>

      <tr>
        <td colSpan={4}>
          <div className="border-b border-slate-200 my-4" />
        </td>
      </tr>
    </>
  );
};

export default OrderItem;
