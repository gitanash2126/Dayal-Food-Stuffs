"use client";

import { XIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addAddress } from "@/lib/features/address/addressSlice";

const AddressModal = ({ setShowAddressModal }) => {
  const dispatch = useDispatch();

  const [address, setAddress] = useState({
    name: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "India",
    phone: "",
  });

  const handleAddressChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addAddress({
        id: Date.now().toString(),
        ...address,
      }),
    );

    toast.success("Address Added Successfully");
    setShowAddressModal(false);
  };

  return (
    <div className="fixed inset-0 z-[99999] bg-black/50 backdrop-blur-sm overflow-y-auto">
      {/* Center Wrapper */}
      <div className="min-h-screen flex items-center justify-center px-4 py-10">
        {/* Modal */}
        <form
          onSubmit={handleSubmit}
          className="relative bg-white w-full max-w-xl rounded-3xl shadow-2xl p-6 sm:p-8"
        >
          {/* Close */}
          <button
            type="button"
            onClick={() => setShowAddressModal(false)}
            className="absolute top-4 right-4 bg-slate-100 hover:bg-red-100 text-slate-600 hover:text-red-500 p-2 rounded-full transition"
          >
            <XIcon size={18} />
          </button>

          {/* Heading */}
          <h2 className="text-3xl font-bold text-slate-800">Add New Address</h2>

          <p className="text-slate-500 mt-2 mb-6">
            Enter delivery details carefully
          </p>

          {/* Inputs */}
          <div className="space-y-4">
            <input
              name="name"
              value={address.name}
              onChange={handleAddressChange}
              placeholder="Full Name"
              required
              className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-green-600"
            />

            <input
              name="email"
              type="email"
              value={address.email}
              onChange={handleAddressChange}
              placeholder="Email Address"
              required
              className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-green-600"
            />

            <input
              name="phone"
              value={address.phone}
              onChange={handleAddressChange}
              placeholder="Phone Number"
              required
              className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-green-600"
            />

            <input
              name="street"
              value={address.street}
              onChange={handleAddressChange}
              placeholder="House No / Street / Area"
              required
              className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-green-600"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                name="city"
                value={address.city}
                onChange={handleAddressChange}
                placeholder="City"
                required
                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-green-600"
              />

              <input
                name="state"
                value={address.state}
                onChange={handleAddressChange}
                placeholder="State"
                required
                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-green-600"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                name="zip"
                value={address.zip}
                onChange={handleAddressChange}
                placeholder="PIN Code"
                required
                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-green-600"
              />

              <input
                name="country"
                value={address.country}
                onChange={handleAddressChange}
                placeholder="Country"
                required
                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-green-600"
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-medium transition"
          >
            Save Address
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddressModal;
