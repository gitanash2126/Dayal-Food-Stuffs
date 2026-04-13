import { PlusIcon, SquarePenIcon } from "lucide-react";
import React, { useState } from "react";
import AddressModal from "./AddressModal";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const OrderSummary = ({ totalPrice }) => {
  const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || "₹";
  const router = useRouter();

  const addressList = useSelector((state) => state.address.list);

  const [selectedAddress, setSelectedAddress] = useState(null);
  const [showAddressModal, setShowAddressModal] = useState(false);

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    if (!selectedAddress) {
      toast.error("Please select delivery address");
      return;
    }

    toast.success("Order placed successfully");
    router.push("/orders");
  };

  return (
    <div className="w-full max-w-lg lg:max-w-[340px] bg-white border border-slate-200 text-slate-600 text-sm rounded-xl p-7">
      <h2 className="text-xl font-medium mb-4">Order Summary</h2>

      {/* Address */}
      <div className="my-4 py-4 border-y border-slate-200">
        <p className="text-slate-500 mb-2">Delivery Address</p>

        {selectedAddress ? (
          <div className="flex gap-2 items-center">
            <p>
              {selectedAddress.name}, {selectedAddress.city},{" "}
              {selectedAddress.state}
            </p>

            <SquarePenIcon
              onClick={() => setSelectedAddress(null)}
              className="cursor-pointer"
              size={18}
            />
          </div>
        ) : (
          <div>
            {addressList.length > 0 && (
              <select
                className="border border-slate-300 p-2 w-full my-3 rounded"
                onChange={(e) =>
                  setSelectedAddress(addressList[e.target.value])
                }
              >
                <option value="">Select Address</option>

                {addressList.map((address, index) => (
                  <option key={index} value={index}>
                    {address.name}, {address.city}
                  </option>
                ))}
              </select>
            )}

            <button
              className="flex items-center gap-1 text-green-600"
              onClick={() => setShowAddressModal(true)}
            >
              Add Address <PlusIcon size={18} />
            </button>
          </div>
        )}
      </div>

      {/* Price */}
      <div className="py-4 border-b border-slate-200">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency}
            {totalPrice}
          </p>
        </div>

        <div className="flex justify-between mt-1">
          <p>Shipping</p>
          <p>Free</p>
        </div>
      </div>

      <div className="flex justify-between py-4 font-medium">
        <p>Total</p>
        <p>
          {currency}
          {totalPrice}
        </p>
      </div>

      <button
        onClick={(e) =>
          toast.promise(handlePlaceOrder(e), {
            loading: "Placing order...",
          })
        }
        className="w-full bg-green-600 text-white py-2.5 rounded hover:bg-green-700"
      >
        Place Order
      </button>

      {showAddressModal && (
        <AddressModal setShowAddressModal={setShowAddressModal} />
      )}
    </div>
  );
};

export default OrderSummary;
