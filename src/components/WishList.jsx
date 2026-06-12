import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("wishlist")) || [];

    setWishlist(data);
  }, []);

  const removeItem = (id) => {
    const updated = wishlist.filter((item) => item._id !== id);

    setWishlist(updated);

    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Wishlist</h1>

      {wishlist.length === 0 ? (
        <h2>No Wishlist Products</h2>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <div key={item._id} className="border rounded p-3">
              <img
                src={item.image_url}
                alt={item.name}
                className="w-full h-60 object-cover rounded"
              />

              <h2 className="font-bold mt-3">{item.name}</h2>

              <p>₹{item.price}</p>

              <button
                onClick={() => removeItem(item._id)}
                className="w-full mt-3 bg-red-500 text-white py-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
