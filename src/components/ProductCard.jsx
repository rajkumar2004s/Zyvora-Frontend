import { FiHeart } from "react-icons/fi";

function ProductCard({ product }) {
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const exists = cart.find((item) => item._id === product._id);

    if (exists) {
      alert("Already in Cart");
      return;
    }

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added to Cart");
  };

  const addToWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const exists = wishlist.find((item) => item._id === product._id);

    if (exists) {
      alert("Already in Wishlist");
      return;
    }

    wishlist.push(product);

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    alert("Added to Wishlist");
  };

  return (
    <div className="group bg-white">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-[320px] object-cover"
        />

        <button
          onClick={addToWishlist}
          className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow"
        >
          <FiHeart />
        </button>
      </div>

      <div className="pt-3">
        <h3 className="font-bold">{product.name}</h3>

        <p className="text-gray-500 text-sm">{product.category}</p>

        <p className="font-bold mt-2">₹{product.price}</p>

        <button
          onClick={addToCart}
          className="w-full mt-3 bg-pink-500 text-white py-2 rounded"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
