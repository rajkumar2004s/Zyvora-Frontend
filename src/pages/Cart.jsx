import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];

    const itemsWithQty = data.map((item) => ({
      ...item,
      qty: item.qty || 1,
    }));

    setCartItems(itemsWithQty);
  }, []);

  const removeItem = (id) => {
    const updated = cartItems.filter((item) => item._id !== id);

    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const updateQty = (id, qty) => {
    const updated = cartItems.map((item) =>
      item._id === id ? { ...item, qty: Math.max(1, Number(qty) || 1) } : item,
    );

    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const placeOrder = () => {
    localStorage.removeItem("cart");

    setCartItems([]);
    setShowSuccess(true);

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center w-[90%] max-w-md">
            <div className="text-6xl mb-4">🎉</div>

            <h2 className="text-3xl font-bold text-green-600 mb-2">
              Order Placed!
            </h2>

            <p className="text-gray-600 text-lg">
              Congratulations! Your order has been placed successfully.
            </p>

            <p className="text-sm text-gray-400 mt-4">
              Redirecting to home page...
            </p>
          </div>
        </div>
      )}

      <div className="min-h-screen px-2 md:px-12 py-6">
        <h1 className="text-lg sm:text-2xl md:text-3xl pl-12 font-bold pb-4">
          Shopping Cart 🛒 ({cartItems.length})
        </h1>

        {cartItems.length === 0 && !showSuccess ? (
          <div className="text-gray-500 text-base sm:text-lg">
            <div className="flex justify-center items-center py-10">
              <div className="text-center">
                <img
                  src="https://res.cloudinary.com/dwdekki8t/image/upload/v1764051066/no-item-in-the-shopping-cart-click-to-go-shopping-now-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector_x6id58.jpg"
                  alt="Empty Cart"
                  className="object-cover w-48 sm:w-64 md:w-80 mx-auto mb-4 rounded-lg p-2"
                />

                <h1 className="pb-4 text-base sm:text-lg md:text-xl">
                  Your cart is empty. Start shopping now!
                </h1>

                <button
                  onClick={() => navigate("/products")}
                  className="border bg-[#0F172A] p-2 sm:p-3 rounded text-white px-4 sm:px-6 hover:bg-white hover:text-[#0F172A] hover:border-[#0F172A] transition"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="md:w-full px-12 pt-4">
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="w-full flex flex-col mb-3 sm:flex-row items-start sm:items-center justify-between bg-white border border-gray-300 rounded-xl shadow p-3 sm:p-4 md:p-6 gap-3 sm:gap-4"
                >
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1 w-full">
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 object-cover rounded-lg flex-shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <h2 className="text-xs sm:text-lg md:text-2xl font-semibold break-words">
                        {item.name}
                      </h2>

                      <p className="text-[10px] sm:text-base md:text-lg font-semibold text-gray-700 pt-1">
                        ₹{item.price}
                      </p>

                      <p className="text-gray-500 text-xs sm:text-sm mt-1">
                        {item.category}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap">
                    <button
                      onClick={() => removeItem(item._id)}
                      className="text-red-500 hover:text-red-600 transition"
                    >
                      <FaTrash size={20} />
                    </button>

                    <div className="flex items-center gap-2">
                      <span className="text-xs md:text-base font-medium">
                        Qty:
                      </span>

                      <input
                        type="number"
                        min="1"
                        value={item.qty}
                        onChange={(e) => updateQty(item._id, e.target.value)}
                        className="w-12 md:w-14 border rounded-md px-2 py-1 text-center"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 md:w-[93%] ml-12 px-12 bg-white border border-gray-300 rounded-xl shadow pl-12 p-4 md:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                  Total:
                </h2>

                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0B1623]">
                  ₹{total.toFixed(2)}
                </p>
              </div>

              <button
                disabled={total === 0}
                onClick={placeOrder}
                className="disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto bg-[#0F172A] text-white px-6 md:px-12 py-2 md:py-3 rounded-xl text-sm md:text-lg font-semibold transition"
              >
                Buy Now
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Cart;
