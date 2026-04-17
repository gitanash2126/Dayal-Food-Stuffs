"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";
import OrdersAreaChart from "@/components/OrdersAreaChart";
import {
  CircleDollarSignIcon,
  ShoppingBasketIcon,
  TagsIcon,
} from "lucide-react";

export default function AdminDashboard() {
  const router = useRouter();
  const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || "₹";

  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState({
    products: 0,
    revenue: 0,
    orders: 0,
    allOrders: [],
  });

  useEffect(() => {
    const isAdminLoggedIn = localStorage.getItem("adminLoggedIn");

    if (!isAdminLoggedIn) {
      router.push("/admin/login");
      return;
    }

    // Valid date based dummy orders
    const today = new Date();

    const sampleOrders = [
      { createdAt: new Date(today.getFullYear(), 0, 5) },
      { createdAt: new Date(today.getFullYear(), 0, 12) },
      { createdAt: new Date(today.getFullYear(), 1, 8) },
      { createdAt: new Date(today.getFullYear(), 1, 18) },
      { createdAt: new Date(today.getFullYear(), 2, 9) },
      { createdAt: new Date(today.getFullYear(), 2, 22) },
      { createdAt: new Date(today.getFullYear(), 3, 11) },
      { createdAt: new Date(today.getFullYear(), 4, 14) },
      { createdAt: new Date(today.getFullYear(), 5, 17) },
    ];

    setDashboardData({
      products: 6,
      revenue: 12250,
      orders: 18,
      allOrders: sampleOrders,
    });

    setLoading(false);
  }, [router]);

  const cards = [
    {
      title: "Total Products",
      value: dashboardData.products,
      icon: ShoppingBasketIcon,
    },
    {
      title: "Total Revenue",
      value: currency + dashboardData.revenue,
      icon: CircleDollarSignIcon,
    },
    {
      title: "Total Orders",
      value: dashboardData.orders,
      icon: TagsIcon,
    },
  ];

  if (loading) return <Loading />;

  return (
    <div className="text-slate-600">
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Admin Dashboard</h1>

        <p className="text-sm text-slate-500 mt-1">
          Welcome to Dayal Food Stuffs management panel
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">{card.title}</p>

                <h2 className="text-3xl font-bold text-slate-800 mt-2">
                  {card.value}
                </h2>
              </div>

              <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                <card.icon size={26} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="mt-10 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-800 mb-5">
          Orders Overview
        </h2>

        <OrdersAreaChart allOrders={dashboardData.allOrders} />
      </div>
    </div>
  );
}
