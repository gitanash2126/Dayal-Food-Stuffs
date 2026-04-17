"use client";

import Link from "next/link";
import { User, Mail, MapPin, LogOut, ShoppingBag, X } from "lucide-react";

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="max-w-4xl mx-auto">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-slate-800">My Account</h1>

          <Link
            href="/"
            className="bg-white border border-slate-200 p-3 rounded-full hover:bg-red-50 hover:text-red-500 transition"
          >
            <X size={20} />
          </Link>
        </div>

        {/* Main Card */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
            <div className="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
              <User size={34} />
            </div>

            <h2 className="text-xl font-bold text-center text-slate-800 mt-4">
              Muhammad Anash
            </h2>

            <p className="text-center text-slate-500 text-sm mt-1">
              Premium Customer
            </p>

            <button className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-full font-medium transition flex items-center justify-center gap-2">
              <LogOut size={18} />
              Logout
            </button>
          </div>

          {/* Right */}
          <div className="md:col-span-2 space-y-6">
            {/* Profile */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Profile Details
              </h3>

              <div className="space-y-4 text-slate-600">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-green-600" />
                  dayalfoods71@gmail.com
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-green-600 mt-1" />
                  17-D, Nathmalpur, Near Green City Colony, Gorakhnath,
                  Gorakhpur - 273015
                </div>
              </div>
            </div>

            {/* Orders */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                My Orders
              </h3>

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
