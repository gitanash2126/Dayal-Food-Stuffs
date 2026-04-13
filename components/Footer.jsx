import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const linkSections = [
    {
      title: "CATEGORIES",
      links: [
        { text: "Whole Spices", path: "/" },
        { text: "Ground Spices", path: "/" },
        { text: "Blended Masala", path: "/" },
        { text: "Daily Essentials", path: "/" },
      ],
    },
    {
      title: "COMPANY",
      links: [
        { text: "Home", path: "/" },
        { text: "Shop", path: "/shop" },
        { text: "Cart", path: "/cart" },
        { text: "My Orders", path: "/orders" },
      ],
    },
  ];

  return (
    <footer className="mx-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-slate-200 text-slate-500">
          {/* Logo */}
          <div>
            <Link href="/" className="text-2xl font-semibold text-slate-700">
              <span className="text-green-600">Dayal</span> Food Stuffs
            </Link>

            <p className="max-w-[410px] mt-4 text-sm">
              Dayal Food Stuffs brings you fresh, pure and authentic spices.
              Premium quality masale directly to your kitchen.
            </p>

            {/* WhatsApp Icon */}
            <a
              href="https://wa.me/919335082270"
              target="_blank"
              className="inline-flex items-center gap-2 mt-4 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M20.52 3.48A11.82 11.82 0 0 0 12.05 0C5.5 0 .2 5.3.2 11.85c0 2.1.55 4.15 1.6 5.96L0 24l6.35-1.65a11.86 11.86 0 0 0 5.7 1.45h.01c6.55 0 11.85-5.3 11.85-11.85 0-3.17-1.24-6.15-3.39-8.32zM12.06 21.5h-.01a9.7 9.7 0 0 1-4.95-1.35l-.35-.2-3.77.98 1-3.67-.23-.38a9.66 9.66 0 0 1-1.5-5.18c0-5.36 4.36-9.72 9.73-9.72a9.65 9.65 0 0 1 6.87 2.84 9.64 9.64 0 0 1 2.85 6.87c0 5.36-4.36 9.71-9.73 9.71zm5.35-7.27c-.29-.15-1.72-.85-1.98-.95-.27-.1-.46-.15-.66.15-.2.29-.76.95-.94 1.14-.17.2-.35.22-.64.07-.29-.15-1.23-.45-2.34-1.45-.86-.77-1.45-1.73-1.62-2.02-.17-.29-.02-.45.13-.6.14-.14.29-.35.44-.52.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.66-1.59-.9-2.17-.24-.58-.48-.5-.66-.51h-.56c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.22 5.12 4.51.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.72-.7 1.96-1.38.24-.68.24-1.27.17-1.39-.07-.12-.27-.2-.56-.35z" />
              </svg>
              WhatsApp Chat
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5 text-sm">
            {linkSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-medium text-slate-700 mb-3">
                  {section.title}
                </h3>

                <ul className="space-y-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.path}
                        className="hover:text-green-600 transition"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact */}
            <div>
              <h3 className="font-medium text-slate-700 mb-3">CONTACT</h3>

              <div className="space-y-2 text-sm">
                <p>Amrit Dayal</p>

                <p className="flex gap-2 items-center">
                  <Phone size={14} />
                  +91 9335082270 / +91 8896541914
                </p>

                <p className="flex gap-2 items-center">
                  <Mail size={14} />
                  dayalfoods71@gmail.com
                </p>

                <p className="flex gap-2 items-start">
                  <MapPin size={14} />
                  17-D, Nathmalpur, Near Green City Colony, Gorakhnath,
                  Gorakhpur-273015
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="py-4 text-sm text-slate-500 text-center">
          © 2026 Dayal Food Stuffs — Owner: Amrit Dayal
        </p>
      </div>
    </footer>
  );
};

export default Footer;
