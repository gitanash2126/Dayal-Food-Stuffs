"use client";

import { useEffect, useState } from "react";
import { products } from "@/assets/assets";
import Image from "next/image";
import { Plus, Pencil, Trash2, PackageCheck, X } from "lucide-react";

export default function AdminProductsPage() {
  const [productList, setProductList] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    image: "",
  });

  /* Load Permanent Products */
  useEffect(() => {
    const savedProducts = localStorage.getItem("adminProducts");

    if (savedProducts) {
      setProductList(JSON.parse(savedProducts));
    } else {
      setProductList(products);
      localStorage.setItem("adminProducts", JSON.stringify(products));
    }
  }, []);

  /* Add Product */
  const handleAddProduct = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now().toString(),
      name: form.name,
      category: form.category,
      price: Number(form.price),
      mrp: Number(form.price),
      images: [form.image || products[0].images[0]],
      inStock: true,
    };

    const updatedProducts = [newProduct, ...productList];

    setProductList(updatedProducts);

    localStorage.setItem("adminProducts", JSON.stringify(updatedProducts));

    resetForm();
    setShowModal(false);
  };

  /* Delete Product */
  const handleDelete = (id) => {
    const updated = productList.filter((item) => item.id !== id);

    setProductList(updated);

    localStorage.setItem("adminProducts", JSON.stringify(updated));
  };

  /* Open Edit */
  const openEditModal = (item) => {
    setEditId(item.id);

    setForm({
      name: item.name,
      category: item.category,
      price: item.price,
      image: item.images?.[0] || "",
    });

    setShowEditModal(true);
  };

  /* Update Product Permanent */
  const handleUpdateProduct = (e) => {
    e.preventDefault();

    const updatedProducts = productList.map((item) =>
      item.id === editId
        ? {
            ...item,
            name: form.name,
            category: form.category,
            price: Number(form.price),
            mrp: Number(form.price),
            images: [form.image || item.images[0]],
          }
        : item,
    );

    setProductList(updatedProducts);

    localStorage.setItem("adminProducts", JSON.stringify(updatedProducts));

    resetForm();
    setShowEditModal(false);
  };

  const resetForm = () => {
    setForm({
      name: "",
      category: "",
      price: "",
      image: "",
    });

    setEditId(null);
  };

  return (
    <div className="text-slate-700">
      {/* Heading */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Manage Products</h1>

          <p className="text-sm text-slate-500 mt-1">
            Add, edit and manage your store spices
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full font-medium transition"
        >
          <Plus size={18} />
          Add Product
        </button>
      </div>

      {/* Product Table */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="grid grid-cols-6 gap-4 px-5 py-4 bg-slate-50 border-b font-semibold text-sm">
          <p className="col-span-2">Product</p>
          <p>Category</p>
          <p>Price</p>
          <p>Status</p>
          <p className="text-center">Actions</p>
        </div>

        {productList.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-6 gap-4 px-5 py-4 border-b items-center"
          >
            {/* Product */}
            <div className="col-span-2 flex items-center gap-3">
              <div className="w-14 h-14 bg-slate-100 rounded-xl overflow-hidden flex items-center justify-center">
                <Image
                  src={item.images[0]}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="object-cover"
                />
              </div>

              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-xs text-slate-500">ID: {item.id}</p>
              </div>
            </div>

            <p>{item.category}</p>

            <p className="font-semibold text-green-600">₹{item.price}</p>

            <div>
              <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                <PackageCheck size={14} />
                In Stock
              </span>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => openEditModal(item)}
                className="p-2 rounded-lg bg-blue-50 text-blue-600"
              >
                <Pencil size={16} />
              </button>

              <button
                onClick={() => handleDelete(item.id)}
                className="p-2 rounded-lg bg-red-50 text-red-600"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Modal */}
      {showModal && (
        <ProductModal
          title="Add Product"
          buttonText="Add Product"
          form={form}
          setForm={setForm}
          onClose={() => {
            setShowModal(false);
            resetForm();
          }}
          onSubmit={handleAddProduct}
        />
      )}

      {/* Edit Modal */}
      {showEditModal && (
        <ProductModal
          title="Edit Product"
          buttonText="Update Product"
          form={form}
          setForm={setForm}
          onClose={() => {
            setShowEditModal(false);
            resetForm();
          }}
          onSubmit={handleUpdateProduct}
        />
      )}
    </div>
  );
}

/* Reusable Modal */
function ProductModal({ title, buttonText, form, setForm, onClose, onSubmit }) {
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-white rounded-3xl p-6 shadow-xl">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl font-bold text-slate-800">{title}</h2>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Product Name"
            className="w-full border rounded-xl px-4 py-3 outline-none"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          <input
            type="text"
            placeholder="Category"
            className="w-full border rounded-xl px-4 py-3 outline-none"
            value={form.category}
            onChange={(e) =>
              setForm({
                ...form,
                category: e.target.value,
              })
            }
            required
          />

          <input
            type="number"
            placeholder="Price"
            className="w-full border rounded-xl px-4 py-3 outline-none"
            value={form.price}
            onChange={(e) =>
              setForm({
                ...form,
                price: e.target.value,
              })
            }
            required
          />

          <input
            type="text"
            placeholder="Image URL (optional)"
            className="w-full border rounded-xl px-4 py-3 outline-none"
            value={form.image}
            onChange={(e) =>
              setForm({
                ...form,
                image: e.target.value,
              })
            }
          />

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-medium"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
