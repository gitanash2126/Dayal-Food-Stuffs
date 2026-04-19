"use client";

import Link from "next/link";
import {
  User,
  Mail,
  LockKeyhole,
  Phone,
  MapPin,
  X,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pin: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find((user) => user.email === form.email);

    if (exists) {
      toast.error("Email already registered");
      return;
    }

    const newUser = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      address: `${form.address}, ${form.city}, ${form.state} - ${form.pin}`,
      password: form.password,
    };

    const updatedUsers = [...users, newUser];

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    localStorage.setItem("currentUser", JSON.stringify(newUser));

    toast.success("Account created successfully");

    router.push("/account");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-slate-100 flex items-center justify-center px-4 py-10">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 p-8 overflow-hidden">
        {/* Close */}
        <Link
          href="/"
          className="absolute top-4 right-4 bg-slate-100 hover:bg-red-50 hover:text-red-500 p-2 rounded-full z-20"
        >
          <X size={18} />
        </Link>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center">
          Create Account ✨
        </h1>

        <p className="text-slate-500 text-center mt-2 text-sm">
          Register once and enjoy faster checkout
        </p>

        {/* Form */}
        <form onSubmit={handleRegister} className="mt-8 space-y-5">
          {/* Name */}
          <InputField
            icon={<User size={18} />}
            placeholder="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />

          {/* Email + Phone */}
          <div className="grid sm:grid-cols-2 gap-5">
            <InputField
              icon={<Mail size={18} />}
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />

            <InputField
              icon={<Phone size={18} />}
              placeholder="Phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          {/* Address */}
          <textarea
            rows="3"
            placeholder="Full Address"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
            className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none"
          ></textarea>

          {/* City + State */}
          <div className="grid sm:grid-cols-2 gap-5">
            <InputField
              icon={<MapPin size={18} />}
              placeholder="City"
              name="city"
              value={form.city}
              onChange={handleChange}
            />

            <InputField
              icon={<MapPin size={18} />}
              placeholder="State"
              name="state"
              value={form.state}
              onChange={handleChange}
            />
          </div>

          {/* Pin + Password */}
          <div className="grid sm:grid-cols-2 gap-5">
            <InputField
              placeholder="PIN Code"
              name="pin"
              value={form.pin}
              onChange={handleChange}
            />

            <InputField
              icon={<LockKeyhole size={18} />}
              placeholder="Password"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          {/* Confirm Password */}
          <InputField
            icon={<LockKeyhole size={18} />}
            placeholder="Confirm Password"
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-medium flex items-center justify-center gap-2"
          >
            Create Account
            <ArrowRight size={18} />
          </button>
        </form>

        {/* Login */}
        <p className="text-center text-sm text-slate-500 mt-7">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-green-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

function InputField({
  icon,
  placeholder,
  type = "text",
  name,
  value,
  onChange,
}) {
  return (
    <div className="flex items-center gap-3 border border-slate-300 rounded-xl px-4 py-3 focus-within:border-green-600 transition">
      {icon && <span className="text-slate-400">{icon}</span>}

      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full outline-none"
      />
    </div>
  );
}
