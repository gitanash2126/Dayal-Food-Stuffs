"use client";

import { usePathname } from "next/navigation";
import AdminLayout from "@/components/admin/AdminLayout";

export default function RootAdminLayout({ children }) {
  const pathname = usePathname();

  // Hide admin sidebar/navbar on login page
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return <AdminLayout>{children}</AdminLayout>;
}
