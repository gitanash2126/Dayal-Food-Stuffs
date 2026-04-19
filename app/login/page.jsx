"use client";

import Link from "next/link";
import { LockKeyhole, Mail, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find(
      (user) => user.email === email && user.password === password,
    );

    if (!matchedUser) {
      toast.error("Invalid email or password");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(matchedUser));

    toast.success("Login successful");

    router.push("/account");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-slate-100 flex items-center justify-center px-4 py-10">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 p-8 overflow-hidden">
        {/* Close */}
        <Link
          href="/"
          className="absolute top-4 right-4 bg-slate-100 hover:bg-red-50 hover:text-red-500 p-2 rounded-full transition"
        >
          <X size={18} />
        </Link>

        {/* Glow */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-green-100 rounded-full blur-3xl opacity-60"></div>

        {/* Heading */}
        <div className="relative z-10">
          <h1 className="text-3xl font-bold text-slate-800 text-center">
            Welcome Back 👋
          </h1>

          <p className="text-slate-500 text-center mt-2 text-sm">
            Login to continue shopping
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="mt-8 space-y-5 relative z-10">
          {/* Email */}
          <div>
            <label className="text-sm font-medium text-slate-700">
              Email Address
            </label>

            <div className="mt-2 flex items-center gap-3 border border-slate-300 rounded-xl px-4 py-3">
              <Mail size={18} className="text-slate-400" />

              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-slate-700">
              Password
            </label>

            <div className="mt-2 flex items-center gap-3 border border-slate-300 rounded-xl px-4 py-3">
              <LockKeyhole size={18} className="text-slate-400" />

              <input
                type="password"
                required
                placeholder="Enter password"
                className="w-full outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-medium transition flex items-center justify-center gap-2"
          >
            Login
            <ArrowRight size={18} />
          </button>
        </form>

        {/* Register */}
        <p className="text-center text-sm text-slate-500 mt-7">
          New User?{" "}
          <Link
            href="/register"
            className="text-green-600 font-semibold hover:underline"
          >
            Create Account
          </Link>
        </p>

        <p className="text-center text-xs text-slate-400 mt-4">
          Safe • Secure • Trusted Shopping
        </p>
      </div>
    </div>
  );
}
