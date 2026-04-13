"use client";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import { orderDummyData } from "@/assets/assets";

export default function StoreOrders() {
  const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || "₹";

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchOrders = async () => {
    setOrders(orderDummyData);
    setLoading(false);
  };

  const updateOrderStatus = async (orderId, status) => {};

  const openModal = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedOrder(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <h1 className="text-2xl text-slate-500 mb-5">
        Dayal Food Stuffs{" "}
        <span className="text-slate-800 font-medium">Orders</span>
      </h1>

      {orders.length === 0 ? (
        <p>No spice orders found</p>
      ) : (
        <div className="overflow-x-auto max-w-4xl rounded-md shadow border border-gray-200">
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="bg-gray-50 text-gray-700 text-xs uppercase tracking-wider">
              <tr>
                {["No.", "Customer", "Total", "Payment", "Status", "Date"].map(
                  (heading, i) => (
                    <th key={i} className="px-4 py-3">
                      {heading}
                    </th>
                  ),
                )}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {orders.map((order, index) => (
                <tr
                  key={order.id}
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() => openModal(order)}
                >
                  <td className="pl-6 text-green-600">{index + 1}</td>
                  <td className="px-4 py-3">{order.user?.name}</td>
                  <td className="px-4 py-3 font-medium text-slate-800">
                    {currency} {order.total}
                  </td>
                  <td className="px-4 py-3">{order.paymentMethod}</td>

                  <td
                    className="px-4 py-3"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <select
                      value={order.status}
                      onChange={(e) =>
                        updateOrderStatus(order.id, e.target.value)
                      }
                      className="border-gray-300 rounded-md text-sm"
                    >
                      <option value="ORDER_PLACED">ORDER PLACED</option>
                      <option value="PROCESSING">PROCESSING</option>
                      <option value="SHIPPED">SHIPPED</option>
                      <option value="DELIVERED">DELIVERED</option>
                    </select>
                  </td>

                  <td className="px-4 py-3 text-gray-500">
                    {new Date(order.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && selectedOrder && (
        <div
          onClick={closeModal}
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6"
          >
            <h2 className="text-xl font-semibold mb-4">Spice Order Details</h2>

            <div className="mb-4">
              <p>Customer: {selectedOrder.user?.name}</p>
              <p>Email: {selectedOrder.user?.email}</p>
              <p>Phone: {selectedOrder.address?.phone}</p>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold mb-2">Ordered Items</h3>

              {selectedOrder.orderItems.map((item, i) => (
                <div key={i} className="flex gap-3 border p-2 rounded mb-2">
                  <img
                    src={
                      item.product.images?.[0] ||
                      "https://source.unsplash.com/100x100/?spices"
                    }
                    className="w-14 h-14 object-cover rounded"
                  />

                  <div>
                    <p>{item.product?.name}</p>
                    <p>Qty: {item.quantity}</p>
                    <p>
                      Price: {currency} {item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-slate-200 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
