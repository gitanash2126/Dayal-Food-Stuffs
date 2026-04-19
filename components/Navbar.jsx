"use client";

import { Menu, Search, ShoppingCart, X, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.jpeg";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const cartCount = useSelector((state) => state.cart.total);

  useEffect(() => {
    setMounted(true);

    const user = localStorage.getItem("currentUser");

    setIsLoggedIn(!!user);

    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
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

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Shop",
      href: "/shop",
    },
    {
      name: "Orders",
      href: "/orders",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200"
          : "bg-white border-b border-slate-100"
      }`}
    >
      <div className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={logo}
              alt="Dayal Food Stuffs"
              width={46}
              height={46}
              className="rounded-full border-2 border-green-600"
            />

            <div>
              <h1 className="text-lg sm:text-2xl font-bold">
                <span className="text-green-600">Dayal</span> Food Stuffs
              </h1>

              <p className="text-xs text-slate-500">Pure Spices & Taste</p>
            </div>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-7">
            <div className="flex items-center gap-6 font-medium text-slate-700">
              {navLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="hover:text-green-600"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Search */}
            <form
              onSubmit={handleSearch}
              className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full"
            >
              <Search size={18} />

              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none w-40"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>

            {/* Cart */}
            <Link href="/cart" className="relative">
              <ShoppingCart size={22} />

              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount || 0}
              </span>
            </Link>

            {/* Auth */}
            {isLoggedIn ? (
              <Link
                href="/account"
                className="bg-green-600 text-white px-5 py-2.5 rounded-full text-sm flex items-center gap-2"
              >
                <User size={16} />
                My Account
              </Link>
            ) : (
              <Link
                href="/login"
                className="bg-green-600 text-white px-5 py-2.5 rounded-full text-sm"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-4">
            <Link href="/shop">
              <Search size={21} />
            </Link>

            <Link href="/cart" className="relative">
              <ShoppingCart size={22} />

              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
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
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <form
              onSubmit={handleSearch}
              className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full"
            >
              <Search size={18} />

              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none w-full"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>

            {isLoggedIn ? (
              <Link
                href="/account"
                className="bg-green-600 text-white text-center py-3 rounded-full"
              >
                My Account
              </Link>
            ) : (
              <Link
                href="/login"
                className="bg-green-600 text-white text-center py-3 rounded-full"
              >
                Login
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
