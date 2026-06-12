import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useProducts } from "../context/productContext";
import Loader from "../components/Loader";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { products, loading } = useProducts();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <Loader />
      </div>
    );
  }

  const product = products.find((p) => p._id === id);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        Product Not Found
      </div>
    );
  }

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  const [isInCart, setIsInCart] = useState(
    cart.some((item) => item._id === product._id),
  );

  const [isInWishlist, setIsInWishlist] = useState(
    wishlist.some((item) => item._id === product._id),
  );

  const handleCartAction = () => {
    if (isInCart) {
      navigate("/cart");
      return;
    }

    const updatedCart = [...cart, product];

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    setIsInCart(true);
  };

  const handleWishlistAction = () => {
    if (isInWishlist) {
      navigate("/wishlist");
      return;
    }

    const updatedWishlist = [...wishlist, product];

    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

    setIsInWishlist(true);
  };

  return (
    <div className="mx-auto px-22 py-8">
      <div className="flex">
        {/* Left Side Image */}
        <div>
          <img
            src={product.image_url}
            alt={product.name}
            className="w-[120%] h-[480px]"
          />
        </div>

        {/* Right Side */}
        <div className="ml-16 flex-1">
          {/* Product Name */}
          <h1 className="text-4xl font-bold text-[#081a37]">{product.name}</h1>

          {/* Price */}
          <h2 className="text-5xl font-bold text-[#081a37] mt-8">
            ${product.price}
          </h2>

          {/* Description */}
          <div className="mt-10">
            <h3 className="text-3xl font-bold text-[#081a37] mb-4">
              Description
            </h3>

            <p className="text-gray-600 text-xl leading-10">
              {product.description}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-5 mt-12">
            <button
              onClick={handleCartAction}
              className="bg-[#081a37] text-white px-8 py-4 rounded-xl text-xl font-semibold hover:opacity-90 transition"
            >
              {isInCart ? "Go To Cart" : "Add To Cart"}
            </button>

            <button
              onClick={handleWishlistAction}
              className="border border-gray-400 px-8 py-4 rounded-xl text-xl font-semibold hover:bg-gray-100 transition"
            >
              {isInWishlist ? "Go To Wishlist" : "Add To Wishlist"}
            </button>
          </div>

          {/* Bottom Banner */}
          <div className="mt-12 bg-[#021225] text-white rounded-2xl px-8 py-4 shadow-lg">
            <p className="text-2xl font-semibold">
              Like it? Add it to your cart and make it yours!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
