"use client";

import { Menu, Search, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const cartCount = useSelector((state) => state.cart.total);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleSearch = (e) => {
    e.preventDefault();

    const query = search.trim();

    if (query) {
      router.push(`/shop?search=${encodeURIComponent(query)}`);
    } else {
      router.push("/shop");
    }

    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="mx-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="text-lg sm:text-2xl font-semibold">
            <span className="text-green-600">Dayal</span> Food Stuffs
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6 text-slate-700 font-medium">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/orders">Orders</Link>
            <Link href="/contact">Contact</Link>

            <form
              onSubmit={handleSearch}
              className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full"
            >
              <Search size={18} />
              <input
                type="text"
                placeholder="Search spices..."
                className="bg-transparent outline-none w-44"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>

            <Link href="/cart" className="relative">
              <ShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount || 0}
              </span>
            </Link>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-4">
            <Link href="/shop">
              <Search size={21} />
            </Link>

            <Link href="/cart" className="relative">
              <ShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount || 0}
              </span>
            </Link>

            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-4">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/orders">Orders</Link>
            <Link href="/contact">Contact</Link>

            <form
              onSubmit={handleSearch}
              className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full"
            >
              <Search size={18} />
              <input
                type="text"
                placeholder="Search spices..."
                className="bg-transparent outline-none w-full"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
