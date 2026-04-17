"use client";

import Link from "next/link";
import {
  User,
  Mail,
  LockKeyhole,
  Phone,
  MapPin,
  Home,
  X,
  ArrowRight,
} from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-slate-100 flex items-center justify-center px-4 py-10">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 p-8 overflow-hidden">
        {/* Close Button */}
        <Link
          href="/"
          className="absolute top-4 right-4 bg-slate-100 hover:bg-red-50 hover:text-red-500 p-2 rounded-full transition z-20"
        >
          <X size={18} />
        </Link>

        {/* Background Glow */}
        <div className="absolute -top-16 -left-16 w-40 h-40 bg-green-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-emerald-100 rounded-full blur-3xl opacity-50"></div>

        {/* Heading */}
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center">
            Create Account ✨
          </h1>

          <p className="text-slate-500 text-center mt-2 text-sm sm:text-base">
            Register once and enjoy faster checkout with saved delivery details
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-5 relative z-10">
          {/* Full Name */}
          <div>
            <label className="text-sm font-medium text-slate-700">
              Full Name
            </label>

            <div className="mt-2 flex items-center gap-3 border border-slate-300 rounded-xl px-4 py-3 focus-within:border-green-600 transition">
              <User size={18} className="text-slate-400" />
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* Email + Mobile */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium text-slate-700">
                Email Address
              </label>

              <div className="mt-2 flex items-center gap-3 border border-slate-300 rounded-xl px-4 py-3 focus-within:border-green-600 transition">
                <Mail size={18} className="text-slate-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Mobile Number
              </label>

              <div className="mt-2 flex items-center gap-3 border border-slate-300 rounded-xl px-4 py-3 focus-within:border-green-600 transition">
                <Phone size={18} className="text-slate-400" />
                <input
                  type="text"
                  placeholder="Enter mobile number"
                  className="w-full outline-none"
                />
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="text-sm font-medium text-slate-700">
              Full Address
            </label>

            <div className="mt-2 flex items-start gap-3 border border-slate-300 rounded-xl px-4 py-3 focus-within:border-green-600 transition">
              <Home size={18} className="text-slate-400 mt-1" />

              <textarea
                rows="3"
                placeholder="House No, Street, Area"
                className="w-full outline-none resize-none"
              ></textarea>
            </div>
          </div>

          {/* City + State */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium text-slate-700">City</label>

              <div className="mt-2 flex items-center gap-3 border border-slate-300 rounded-xl px-4 py-3 focus-within:border-green-600 transition">
                <MapPin size={18} className="text-slate-400" />
                <input
                  type="text"
                  placeholder="Enter city"
                  className="w-full outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                State
              </label>

              <div className="mt-2 flex items-center gap-3 border border-slate-300 rounded-xl px-4 py-3 focus-within:border-green-600 transition">
                <MapPin size={18} className="text-slate-400" />
                <input
                  type="text"
                  placeholder="Enter state"
                  className="w-full outline-none"
                />
              </div>
            </div>
          </div>

          {/* PIN + Password */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium text-slate-700">
                PIN Code
              </label>

              <div className="mt-2 border border-slate-300 rounded-xl px-4 py-3 focus-within:border-green-600 transition">
                <input
                  type="text"
                  placeholder="Enter PIN Code"
                  className="w-full outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Password
              </label>

              <div className="mt-2 flex items-center gap-3 border border-slate-300 rounded-xl px-4 py-3 focus-within:border-green-600 transition">
                <LockKeyhole size={18} className="text-slate-400" />
                <input
                  type="password"
                  placeholder="Create password"
                  className="w-full outline-none"
                />
              </div>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-sm font-medium text-slate-700">
              Confirm Password
            </label>

            <div className="mt-2 flex items-center gap-3 border border-slate-300 rounded-xl px-4 py-3 focus-within:border-green-600 transition">
              <LockKeyhole size={18} className="text-slate-400" />
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-medium transition flex items-center justify-center gap-2"
          >
            Create Account
            <ArrowRight size={18} />
          </button>
        </form>

        {/* Login */}
        <p className="text-center text-sm text-slate-500 mt-7 relative z-10">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-green-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

        <p className="text-center text-xs text-slate-400 mt-3 relative z-10">
          Safe • Secure • Trusted Registration
        </p>
      </div>
    </div>
  );
}
