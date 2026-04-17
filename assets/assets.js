import hero1 from "./hero1.jpg";
import hero2 from "./hero2.jpg";
import hero3 from "./hero3.jpg";

export const assets = {
  hero1,
  hero2,
  hero3,
};

export const heroData = {
  title: "Dayal Food Stuffs",
  subtitle: "Fresh Spices & Pure Masale - Owner Amrit Dayal",
  images: [hero1, hero2],
  model: hero3,
};

export const categories = [
  "Whole Spices",
  "Ground Spices",
  "Blended Masala",
  "Premium Spices",
  "Daily Essentials",
];

export const products = [
  {
    id: "1",
    name: "Turmeric Powder",
    price: 120,
    mrp: 150,
    images: [hero1],
    category: "Ground Spices",
    inStock: true,
    description: "Fresh turmeric powder from Dayal Food Stuffs",
  },
  {
    id: "2",
    name: "Red Chilli Powder",
    price: 140,
    mrp: 170,
    images: [hero2],
    category: "Ground Spices",
    inStock: true,
    description: "Spicy red chilli powder",
  },
  {
    id: "3",
    name: "Coriander Powder",
    price: 110,
    mrp: 140,
    images: [hero3],
    category: "Ground Spices",
    inStock: true,
    description: "Pure coriander powder",
  },
  {
    id: "4",
    name: "Garam Masala",
    price: 180,
    mrp: 220,
    images: [hero1],
    category: "Blended Masala",
    inStock: true,
    description: "Authentic garam masala mix",
  },
  {
    id: "5",
    name: "Cumin Seeds",
    price: 220,
    mrp: 260,
    images: [hero2],
    category: "Whole Spices",
    inStock: true,
    description: "Premium cumin seeds",
  },
  {
    id: "6",
    name: "Black Pepper",
    price: 450,
    mrp: 520,
    images: [hero3],
    category: "Whole Spices",
    inStock: true,
    description: "Strong black pepper",
  },
];

export const addressDummyData = [
  {
    id: "1",
    name: "Home",
    email: "customer@gmail.com",
    street: "17-D, Nathmalpur",
    city: "Gorakhpur",
    state: "Uttar Pradesh",
    zip: "273015",
    country: "India",
    phone: "9335082270",
  },
];

export const orderDummyData = [
  {
    id: "1",
    createdAt: new Date(),
    status: "DELIVERED",
    total: 260,
    address: {
      name: "Home",
      street: "17-D, Nathmalpur",
      city: "Gorakhpur",
      state: "Uttar Pradesh",
      zip: "273015",
      country: "India",
      phone: "9335082270",
    },
    orderItems: [
      {
        quantity: 1,
        price: 120,
        product: {
          id: "1",
          name: "Turmeric Powder",
          images: [hero1],
        },
      },
      {
        quantity: 1,
        price: 140,
        product: {
          id: "2",
          name: "Red Chilli Powder",
          images: [hero2],
        },
      },
    ],
  },
];

/* Admin Dashboard Dummy Data */
export const dummyAdminDashboardData = {
  products: 6,
  revenue: 12250,
  orders: 18,

  allOrders: [
    { month: "Jan", orders: 4 },
    { month: "Feb", orders: 6 },
    { month: "Mar", orders: 3 },
    { month: "Apr", orders: 5 },
    { month: "May", orders: 8 },
    { month: "Jun", orders: 7 },
  ],
};
