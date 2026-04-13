export const heroData = {
  title: "Dayal Food Stuffs",
  subtitle: "Fresh Spices & Pure Masale - Owner Amrit Dayal",
  images: [
    "https://source.unsplash.com/1200x500/?spices",
    "https://source.unsplash.com/1200x500/?indian-spices",
  ],
  model: "https://source.unsplash.com/400x500/?spices",
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
    images: ["https://source.unsplash.com/400x400/?turmeric"],
    category: "Ground Spices",
    inStock: true,
    description: "Fresh turmeric powder from Dayal Food Stuffs",
  },
  {
    id: "2",
    name: "Red Chilli Powder",
    price: 140,
    mrp: 170,
    images: ["https://source.unsplash.com/400x400/?red-chilli"],
    category: "Ground Spices",
    inStock: true,
    description: "Spicy red chilli powder",
  },
  {
    id: "3",
    name: "Coriander Powder",
    price: 110,
    mrp: 140,
    images: ["https://source.unsplash.com/400x400/?coriander"],
    category: "Ground Spices",
    inStock: true,
    description: "Pure coriander powder",
  },
  {
    id: "4",
    name: "Garam Masala",
    price: 180,
    mrp: 220,
    images: ["https://source.unsplash.com/400x400/?garam-masala"],
    category: "Blended Masala",
    inStock: true,
    description: "Authentic garam masala mix",
  },
  {
    id: "5",
    name: "Cumin Seeds",
    price: 220,
    mrp: 260,
    images: ["https://source.unsplash.com/400x400/?cumin"],
    category: "Whole Spices",
    inStock: true,
    description: "Premium cumin seeds",
  },
  {
    id: "6",
    name: "Black Pepper",
    price: 450,
    mrp: 520,
    images: ["https://source.unsplash.com/400x400/?black-pepper"],
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
    street: "Gorakhpur Road",
    city: "Gorakhpur",
    state: "Uttar Pradesh",
    zip: "221010",
    country: "India",
    phone: "9876543210",
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
      street: "Gorakhpur Road",
      city: "Gorakhpur",
      state: "Uttar Pradesh",
      zip: "221010",
      country: "India",
      phone: "9876543210",
    },
    orderItems: [
      {
        quantity: 1,
        price: 120,
        product: {
          id: "1",
          name: "Turmeric Powder",
          images: ["https://source.unsplash.com/200x200/?turmeric"],
        },
      },
      {
        quantity: 1,
        price: 140,
        product: {
          id: "2",
          name: "Red Chilli Powder",
          images: ["https://source.unsplash.com/200x200/?red-chilli"],
        },
      },
    ],
  },
];
