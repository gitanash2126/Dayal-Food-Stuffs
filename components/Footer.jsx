import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.jpeg";
import { Phone, Mail, MapPin, Clock3, ChevronRight } from "lucide-react";

const Footer = () => {
  const sections = [
    {
      title: "Quick Links",
      links: [
        { text: "Home", path: "/" },
        { text: "Shop", path: "/shop" },
        { text: "Cart", path: "/cart" },
        { text: "My Orders", path: "/orders" },
      ],
    },
    {
      title: "Categories",
      links: [
        { text: "Whole Spices", path: "/shop" },
        { text: "Ground Spices", path: "/shop" },
        { text: "Blended Masala", path: "/shop" },
        { text: "Premium Masala", path: "/shop" },
      ],
    },
  ];

  return (
    <footer className="mt-24 relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-green-50 border-t border-slate-200">
      {/* Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-green-100 blur-3xl opacity-40 rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-100 blur-3xl opacity-40 rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src={logo}
                alt="Dayal Food Stuffs"
                width={54}
                height={54}
                className="rounded-full border-2 border-green-600 object-cover"
              />

              <div>
                <h2 className="text-2xl font-bold text-slate-800">
                  <span className="text-green-600">Dayal</span> Food Stuffs
                </h2>

                <p className="text-xs text-slate-500">
                  Pure Spices & Trusted Taste
                </p>
              </div>
            </Link>

            <p className="mt-5 text-[15px] leading-8 text-slate-600 max-w-sm">
              Bringing pure spices, authentic masale and trusted quality
              directly to your kitchen with affordable pricing, rich aroma and
              freshness.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://wa.me/919335082270"
                target="_blank"
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full text-sm font-medium transition shadow-md"
              >
                WhatsApp Order
              </a>

              <a
                href="tel:+919335082270"
                className="border border-slate-300 hover:border-green-600 hover:text-green-600 px-5 py-3 rounded-full text-sm font-medium transition"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Links */}
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-slate-800 font-semibold text-lg mb-5">
                {section.title}
              </h3>

              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.path}
                      className="group flex items-center gap-2 text-slate-600 hover:text-green-600 transition"
                    >
                      <ChevronRight
                        size={15}
                        className="group-hover:translate-x-1 transition"
                      />
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="text-slate-800 font-semibold text-lg mb-5">
              Contact Us
            </h3>

            <div className="space-y-5 text-sm text-slate-600">
              <div>
                <Link
                  href="/admin/login"
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-medium transition"
                >
                  Admin Login
                </Link>
              </div>

              <a
                href="tel:+919335082270"
                className="flex gap-3 hover:text-green-600 transition"
              >
                <Phone size={16} className="mt-0.5 shrink-0" />

                <span>
                  +91 9335082270 <br />
                  +91 8896541914
                </span>
              </a>

              <a
                href="mailto:support@dayalfoodstuffs.in"
                className="flex gap-3 hover:text-green-600 transition break-all"
              >
                <Mail size={16} className="mt-0.5 shrink-0" />

                <span>support@dayalfoodstuffs.in</span>
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=17-D+Nathmalpur+Near+Green+City+Colony+Gorakhnath+Gorakhpur+273015"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 hover:text-green-600 transition"
              >
                <MapPin size={16} className="mt-1 shrink-0" />

                <span>
                  17-D, Nathmalpur, Near Green City Colony, Gorakhnath,
                  Gorakhpur - 273015
                </span>
              </a>

              <div className="flex gap-3">
                <Clock3 size={16} className="mt-0.5 shrink-0" />

                <span>Mon - Sun : 8:00 AM to 9:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-200 py-5 text-center text-sm text-slate-500 font-medium">
          © 2026 Dayal Food Stuffs • All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
