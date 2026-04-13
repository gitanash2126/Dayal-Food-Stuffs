"use client";
export default function AdminApprove() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Dayal Food Stuffs</h1>

        <p className="text-slate-500 mt-2">This store is single vendor only.</p>

        <p className="text-slate-400 text-sm mt-1">
          No external sellers allowed
        </p>
      </div>
    </div>
  );
}
