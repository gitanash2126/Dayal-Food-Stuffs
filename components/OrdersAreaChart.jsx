"use client";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function OrdersAreaChart({ allOrders = [] }) {
  // Group orders by date
  const ordersPerDay = allOrders.reduce((acc, order) => {
    const date = new Date(order.createdAt).toISOString().split("T")[0];

    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  // Convert to array
  const chartData = Object.entries(ordersPerDay).map(([date, count]) => ({
    date,
    orders: count,
  }));

  return (
    <div className="w-full max-w-4xl h-[300px] text-xs">
      <h3 className="text-lg font-medium text-slate-800 mb-4 pt-2">
        Orders <span className="text-slate-500">per day</span>
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="date" />

          <YAxis allowDecimals={false} />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="orders"
            stroke="#16a34a"
            fill="#bbf7d0"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
