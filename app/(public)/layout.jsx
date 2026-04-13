"use client";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PublicLayout({ children }) {
  return (
    <>
      {/* Top banner */}
      <Banner />

      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="min-h-[70vh]">{children}</main>

      {/* Footer */}
      <Footer />
    </>
  );
}
