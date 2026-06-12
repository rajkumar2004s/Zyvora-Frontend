import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];

    setCartItems(data);
  }, []);

  const removeItem = (id) => {
    const updated = cartItems.filter((item) => item._id !== id);

    setCartItems(updated);

    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const placeOrder = () => {
    alert("Order Placed Successfully 🎉");

    localStorage.removeItem("cart");

    setCartItems([]);
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">My Cart</h1>

      {cartItems.length === 0 ? (
        <h2>Your Cart is Empty</h2>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item._id} className="border p-4 rounded mb-4 flex gap-4">
              <img
                src={item.image_url}
                alt={item.name}
                className="w-28 h-32 object-cover"
              />

              <div className="flex-1">
                <h2 className="font-bold">{item.name}</h2>

                <p>{item.category}</p>

                <p className="font-bold">₹{item.price}</p>
              </div>

              <button
                onClick={() => removeItem(item._id)}
                className="text-red-500"
              >
                <FaTrash />
              </button>
            </div>
          ))}

          <div className="mt-8 border p-6 rounded">
            <h2 className="font-bold text-xl">Total: ₹{total}</h2>

            <button
              onClick={placeOrder}
              className="mt-4 bg-pink-500 text-white px-8 py-3 rounded"
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
