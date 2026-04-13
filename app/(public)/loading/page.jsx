"use client";

import Loading from "@/components/Loading";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoadingPage() {
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const url = params.get("nextUrl");

    if (url) {
      setTimeout(() => {
        router.push(url);
      }, 4000); // reduced wait time
    }
  }, [router]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      <Loading />
      <h2 className="mt-4 text-lg font-medium text-slate-700">
        Dayal Food Stuffs
      </h2>
      <p className="text-sm text-slate-500">Preparing your fresh spices...</p>
    </div>
  );
}
