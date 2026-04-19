"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  PackageCheck,
  Truck,
  Clock3,
  CheckCircle2,
  MapPin,
  CreditCard,
  CalendarDays,
} from "lucide-react";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders =
      JSON.parse(localStorage.getItem("customerOrders")) || [];

    setOrders(savedOrders);
  }, []);

  const statusIcon = (status) => {
    if (status === "Pending") return <Clock3 size={16} />;
    if (status === "Packed") return <PackageCheck size={16} />;
    if (status === "Shipped") return <Truck size={16} />;
    return <CheckCircle2 size={16} />;
  };

  const statusColor = (status) => {
    if (status === "Pending") return "text-yellow-600 bg-yellow-50";
    if (status === "Packed") return "text-blue-600 bg-blue-50";
    if (status === "Shipped") return "text-purple-600 bg-purple-50";
    return "text-green-600 bg-green-50";
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 sm:px-6 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">
            My Orders
          </h1>

          <p className="text-slate-500 mt-2">
            Track all your placed orders easily
          </p>
        </div>

        {/* Orders */}
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm"
            >
              {/* Top */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 border-b pb-5">
                <div>
                  <p className="text-sm text-slate-400">Order ID</p>

                  <h2 className="font-bold text-lg text-slate-800">
                    {order.id}
                  </h2>

                  <div className="flex items-center gap-2 mt-2 text-sm text-slate-500">
                    <CalendarDays size={15} />
                    {new Date(order.createdAt).toLocaleDateString()}
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-3xl font-bold text-green-600">
                    ₹{order.total}
                  </p>

                  <div className="flex items-center justify-end gap-2 text-sm text-slate-500 mt-1">
                    <CreditCard size={15} />
                    {order.payment}
                  </div>
                </div>
              </div>

              {/* Items */}
              <div className="mt-5 space-y-4">
                {order.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={50}
                        height={50}
                      />
                    </div>

                    <div className="flex-1">
                      <p className="font-semibold text-slate-800">
                        {item.name}
                      </p>

                      <p className="text-sm text-slate-500 mt-1">
                        Quantity: {item.qty}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Address + Status */}
              <div className="mt-6 pt-5 border-t flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                <div>
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                    <MapPin size={15} />
                    Delivery Address
                  </div>

                  <p className="text-sm text-slate-700 max-w-xl leading-6">
                    {order.address}
                  </p>
                </div>

                <div
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${statusColor(
                    order.status,
                  )}`}
                >
                  {statusIcon(order.status)}
                  {order.status}
                </div>
              </div>
            </div>
          ))}

          {/* Empty */}
          {orders.length === 0 && (
            <div className="bg-white border border-slate-200 rounded-3xl p-14 text-center">
              <h3 className="text-2xl font-bold text-slate-800">
                No Orders Yet
              </h3>

              <p className="text-slate-500 mt-2">
                Start shopping fresh spices from Dayal Food Stuffs.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
