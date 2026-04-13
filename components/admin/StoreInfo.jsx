"use client";
import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";

const StoreInfo = ({ store }) => {
  return (
    <div className="flex-1 space-y-2 text-sm">
      <Image
        width={100}
        height={100}
        src={store?.logo || "https://source.unsplash.com/100x100/?spices"}
        alt={store?.name}
        className="max-w-20 max-h-20 object-cover shadow rounded-full max-sm:mx-auto"
      />

      <div className="flex flex-col sm:flex-row gap-3 items-center">
        <h3 className="text-xl font-semibold text-slate-800">
          {store?.name || "Dayal Food Stuffs"}
        </h3>

        <span className="text-sm text-slate-400">@dayal-food-stuffs</span>

        <span className="text-xs font-semibold px-4 py-1 rounded-full bg-green-100 text-green-800">
          Active
        </span>
      </div>

      <p className="text-slate-600 my-3 max-w-2xl">
        {store?.description || "Fresh spices and masale by Dayal Food Stuffs"}
      </p>

      <p className="flex items-center gap-2">
        <MapPin size={16} />
        {store?.address || "Varanasi, Uttar Pradesh"}
      </p>

      <p className="flex items-center gap-2">
        <Phone size={16} />
        {store?.contact || "9876543210"}
      </p>

      <p className="flex items-center gap-2">
        <Mail size={16} />
        {store?.email || "dayalfoods@gmail.com"}
      </p>

      <div className="flex items-center gap-2 text-sm mt-4">
        <Image
          width={36}
          height={36}
          src="https://source.unsplash.com/100x100/?person"
          alt="owner"
          className="w-9 h-9 rounded-full"
        />

        <div>
          <p className="text-slate-600 font-medium">Amrit Dayal</p>

          <p className="text-slate-400">Owner</p>
        </div>
      </div>
    </div>
  );
};

export default StoreInfo;
