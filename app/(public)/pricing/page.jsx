export default function PricingPage() {
  return (
    <div className="mx-auto max-w-[900px] my-20 px-6">
      <h1 className="text-3xl font-semibold text-slate-800">
        Dayal Food Stuffs Pricing
      </h1>

      <p className="text-slate-500 mt-2">
        Fresh spices & masale at affordable prices. Owner: Amrit Dayal
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {/* Basic */}
        <div className="border rounded-xl p-6">
          <h2 className="text-xl font-medium">Retail Pack</h2>
          <p className="text-slate-500 mt-2">Perfect for home use</p>

          <p className="text-3xl font-semibold mt-4">₹99+</p>

          <ul className="mt-4 space-y-2 text-slate-600">
            <li>✔ Fresh ground spices</li>
            <li>✔ Small quantity packs</li>
            <li>✔ Cash on delivery</li>
          </ul>

          <button className="mt-6 w-full bg-slate-800 text-white py-2 rounded-lg">
            Shop Now
          </button>
        </div>

        {/* Standard */}
        <div className="border rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-medium">Family Pack</h2>
          <p className="text-slate-500 mt-2">Best for monthly use</p>

          <p className="text-3xl font-semibold mt-4">₹299+</p>

          <ul className="mt-4 space-y-2 text-slate-600">
            <li>✔ Premium quality masale</li>
            <li>✔ Value packs</li>
            <li>✔ Free delivery</li>
          </ul>

          <button className="mt-6 w-full bg-slate-800 text-white py-2 rounded-lg">
            Buy Now
          </button>
        </div>

        {/* Wholesale */}
        <div className="border rounded-xl p-6">
          <h2 className="text-xl font-medium">Wholesale</h2>
          <p className="text-slate-500 mt-2">Bulk orders</p>

          <p className="text-3xl font-semibold mt-4">₹999+</p>

          <ul className="mt-4 space-y-2 text-slate-600">
            <li>✔ Bulk spices</li>
            <li>✔ Best price</li>
            <li>✔ Direct supplier</li>
          </ul>

          <button className="mt-6 w-full bg-slate-800 text-white py-2 rounded-lg">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
