function Orders() {
  const orders = [
    {
      id: 1,
      brand: "Roadster",
      name: "Men Comfort Sandals",
      status: "Delivered",
      date: "20 May 2026",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    },
    {
      id: 2,
      brand: "H&M",
      name: "Oversized Sweatshirt",
      status: "Delivered",
      date: "15 May 2026",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">My Orders</h1>

      <div className="space-y-5">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white border rounded-lg p-5 shadow-sm"
          >
            <div className="flex gap-5">
              <img
                src={order.image}
                alt={order.name}
                className="w-28 h-28 object-cover rounded"
              />

              <div>
                <h3 className="font-bold text-green-600">{order.status}</h3>

                <p className="text-gray-500 text-sm">On {order.date}</p>

                <h4 className="font-bold mt-3">{order.brand}</h4>

                <p className="text-gray-600">{order.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
