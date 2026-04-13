import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
  title: "Dayal Food Stuffs - Store Dashboard",
  description: "Dayal Food Stuffs Admin Panel - Owner Amrit Dayal",
};

export default function RootAdminLayout({ children }) {
  return (
    <>
      <StoreLayout>{children}</StoreLayout>
    </>
  );
}
