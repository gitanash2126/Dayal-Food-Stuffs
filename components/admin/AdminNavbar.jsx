"use client";
import Link from "next/link";

const AdminNavbar = () => {
  return (
    <div className="flex items-center justify-between px-12 py-3 border-b border-slate-200">
      <Link href="/" className="relative text-2xl font-semibold text-slate-700">
        <span className="text-green-600">Dayal</span> Food Stuffs
        <p className="absolute text-xs font-semibold -top-2 -right-14 px-3 py-0.5 rounded-full text-white bg-green-600">
          Admin
        </p>
      </Link>

      <div className="flex items-center gap-3">
        <p className="text-slate-600">Hi, Amrit Dayal</p>
      </div>
    </div>
  );
};

export default AdminNavbar;
