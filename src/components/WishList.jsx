import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || [],
  );
  const navigate = useNavigate();
  
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(data);
  }, []);
  
  const removeItem = (id) => {
    const updated = wishlist.filter((item) => item._id !== id);
    
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const alreadyExists = existingCart.find((item) => item._id === product._id);

    if (alreadyExists) {
      navigate("/cart");
      return;
    }

    const updatedCart = [...existingCart, product];

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    setCartItems(updatedCart);
  };
  return (
    <div className="min-h-screen px-2 md:px-24 py-6">
      <h1 className="text-lg sm:text-2xl md:text-3xl font-bold pb-4 md:pb-6">
        Your Wishlist 🔖
      </h1>

      {wishlist.length === 0 ? (
        <div className="text-gray-500 text-base sm:text-lg">
          <div className="flex flex-col justify-center items-center py-10">
            <img
              src="https://res.cloudinary.com/dwdekki8t/image/upload/v1764052316/istockphoto-172125307-612x612_p9szhl.jpg"
              alt="Empty Wishlist"
              className="pt-5 sm:pt-10 object-cover w-48 sm:w-64 md:w-80 rounded-lg"
            />

            <div className="pt-6 sm:pt-10 text-center">
              <h1 className="pb-4 text-base sm:text-lg md:text-xl">
                Your wishlist is empty. Start adding items now!
              </h1>

              <div className="flex justify-center items-center">
                <button
                  onClick={() => navigate("/products")}
                  className="border bg-[#0F172A] p-2 sm:p-2.5 rounded text-white px-4 sm:px-6 hover:bg-white hover:text-[#0F172A] hover:border-[#0F172A] transition"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-3 sm:space-y-4">
          {wishlist.map((item) => (
            <div
              key={item._id}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 md:gap-6 w-full p-3 sm:p-4 md:p-5 bg-white border border-gray-300 rounded-lg md:rounded-xl "
            >
              <div className="flex">
                <img
                  src={item.image_url}
                  alt={item.name}
                  className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 object-cover flex-shrink-0 rounded"
                />

                <div className="flex-1 min-w-0 p-2 px-2 pl-4">
                  <h2 className="text-sm sm:text-base md:text-2xl font-bold font-Inter break-words">
                    {item.name}
                  </h2>

                  <p className="text-gray-600 pt-1 md:pt-2 text-xs sm:text-base md:text-lg font-semibold">
                    ₹{item.price}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <button
                  onClick={() => {
                    const exists = cartItems.some(
                      (cartItem) => cartItem._id === item._id,
                    );

                    if (exists) {
                      navigate("/cart");
                    } else {
                      addToCart(item);
                    }
                  }}
                  className="px-3 md:px-4 py-1.5 md:py-2 text-xs sm:text-sm md:text-lg bg-[#0F172A] text-white rounded-lg transition flex-1 sm:flex-none"
                >
                  {cartItems.some((cartItem) => cartItem._id === item._id)
                    ? "Go To Cart"
                    : "Add To Cart"}
                </button>

                <button
                  onClick={() => removeItem(item._id)}
                  className="px-3 md:px-4 py-1.5 md:py-2 text-xs sm:text-sm md:text-lg bg-red-500 text-white rounded-lg hover:bg-red-600 transition flex-1 sm:flex-none"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
