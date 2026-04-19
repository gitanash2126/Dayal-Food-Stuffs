"use client";

import Link from "next/link";
import {
  User,
  Mail,
  MapPin,
  LogOut,
  ShoppingBag,
  X,
  Phone,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AccountPage() {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [ordersCount, setOrdersCount] = useState(0);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("currentUser"));

    const savedOrders =
      JSON.parse(localStorage.getItem("customerOrders")) || [];

    if (savedUser) {
      setUser(savedUser);
    }

    setOrdersCount(savedOrders.length);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");

    router.push("/login");
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 text-center max-w-md w-full">
          <h2 className="text-2xl font-bold text-slate-800">Please Login</h2>

          <p className="text-slate-500 mt-2">Login to access your account</p>

          <Link
            href="/login"
            className="mt-6 inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium"
          >
            Login Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="max-w-5xl mx-auto">
        {/* Top */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-slate-800">My Account</h1>

          <Link
            href="/"
            className="bg-white border border-slate-200 p-3 rounded-full hover:bg-red-50 hover:text-red-500 transition"
          >
            <X size={20} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
            <div className="w-24 h-24 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
              <User size={40} />
            </div>

            <h2 className="text-2xl font-bold text-center text-slate-800 mt-4">
              {user.name}
            </h2>

            <p className="text-center text-slate-500 text-sm mt-1">
              Trusted Customer
            </p>

            <button
              onClick={handleLogout}
              className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-full font-medium transition flex items-center justify-center gap-2"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>

          {/* Right */}
          <div className="md:col-span-2 space-y-6">
            {/* Profile */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-800 mb-5">
                Profile Details
              </h3>

              <div className="space-y-4 text-slate-600">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-green-600" />
                  {user.email}
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-green-600" />
                  {user.phone}
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-green-600 mt-1" />
                  {user.address}
                </div>
              </div>
            </div>

            {/* Orders */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                My Orders
              </h3>

              <p className="text-slate-500 mb-5">Total Orders: {ordersCount}</p>

              <Link
                href="/orders"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition"
              >
                <ShoppingBag size={18} />
                View Orders
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
