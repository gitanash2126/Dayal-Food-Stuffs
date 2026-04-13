"use client";
import { Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const cartCount = useSelector((state) => state.cart.total);

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/shop?search=${search}`);
  };

  return (
    <nav className="relative bg-white">
      <div className="mx-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-semibold text-slate-700">
            <span className="text-green-600">Dayal</span> Food Stuffs
          </Link>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center gap-6 text-slate-600">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/cart">Cart</Link>
            <Link href="/orders">Orders</Link>

            {/* Search */}
            <form
              onSubmit={handleSearch}
              className="hidden xl:flex items-center w-xs text-sm gap-2 bg-slate-100 px-4 py-2 rounded-full"
            >
              <Search size={18} />
              <input
                className="w-full bg-transparent outline-none"
                type="text"
                placeholder="Search spices..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>

            {/* Cart */}
            <Link href="/cart" className="relative flex items-center gap-2">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 text-[10px] text-white bg-green-600 w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            </Link>
          </div>

          {/* Mobile Cart */}
          <Link href="/cart" className="sm:hidden relative">
            <ShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 text-[10px] text-white bg-green-600 w-4 h-4 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          </Link>
        </div>
      </div>

      <hr className="border-gray-200" />
    </nav>
  );
};

export default Navbar;
