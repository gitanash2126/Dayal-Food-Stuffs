import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
  title: "Dayal Food Stuffs - Admin",
  description: "Dayal Food Stuffs Admin Panel - Owner Amrit Dayal",
};

export default function RootAdminLayout({ children }) {
  return (
    <>
      <AdminLayout>{children}</AdminLayout>
    </>
  );
}
