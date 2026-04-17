"use client";

import { usePathname, useRouter } from "next/navigation";
import { HomeIcon, ShoppingBasketIcon, TagsIcon, LogOut } from "lucide-react";
import Link from "next/link";

const AdminSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const sidebarLinks = [
    { name: "Dashboard", href: "/admin", icon: HomeIcon },
    { name: "Products", href: "/admin/products", icon: ShoppingBasketIcon },
    { name: "Orders", href: "/admin/orders", icon: TagsIcon },
  ];

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    router.push("/admin/login");
  };

  return (
    <div className="h-screen sticky top-0 bg-white border-r border-slate-200 sm:min-w-64 flex flex-col justify-between">
      {/* Top */}
      <div>
        <div className="flex flex-col items-center pt-8 pb-6 border-b border-slate-100">
          <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-xl font-bold shadow-md">
            DF
          </div>

          <p className="mt-3 font-semibold text-slate-800">Amrit Dayal</p>

          <p className="text-xs text-slate-400">Store Owner</p>
        </div>

        {/* Menu */}
        <div className="mt-5 px-3 space-y-2">
          {sidebarLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                pathname === link.href
                  ? "bg-green-600 text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <link.icon size={18} />
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Logout */}
      <div className="p-3 border-t border-slate-100">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
