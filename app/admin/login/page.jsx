"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LockKeyhole, Mail, ShieldCheck, X, ArrowRight } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Demo Admin Credentials
    const adminEmail = "admin@dayalfoods.com";
    const adminPassword = "123456";

    if (email === adminEmail && password === adminPassword) {
      localStorage.setItem("adminLoggedIn", "true");
      router.push("/admin");
    } else {
      setError("Invalid admin email or password");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 flex items-center justify-center px-4 py-10">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 overflow-hidden">
        {/* Close */}
        <Link
          href="/"
          className="absolute top-4 right-4 bg-slate-100 hover:bg-red-50 hover:text-red-500 p-2 rounded-full transition"
        >
          <X size={18} />
        </Link>

        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center mx-auto shadow-lg">
          <ShieldCheck size={30} />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-slate-800 mt-5">
          Admin Login
        </h1>

        <p className="text-center text-slate-500 mt-2 text-sm">
          Secure access for owner dashboard
        </p>

        {/* Form */}
        <form onSubmit={handleLogin} className="mt-8 space-y-5">
          {/* Email */}
          <div>
            <label className="text-sm font-medium text-slate-700">
              Admin Email
            </label>

            <div className="mt-2 flex items-center gap-3 border rounded-xl px-4 py-3">
              <Mail size={18} className="text-slate-400" />

              <input
                type="email"
                placeholder="Enter admin email"
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

            <div className="mt-2 flex items-center gap-3 border rounded-xl px-4 py-3">
              <LockKeyhole size={18} className="text-slate-400" />

              <input
                type="password"
                placeholder="Enter password"
                className="w-full outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Error */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-medium transition flex items-center justify-center gap-2"
          >
            Login to Dashboard
            <ArrowRight size={18} />
          </button>
        </form>

        <p className="text-center text-xs text-slate-400 mt-6">
          Authorized Access Only
        </p>
      </div>
    </div>
  );
}
