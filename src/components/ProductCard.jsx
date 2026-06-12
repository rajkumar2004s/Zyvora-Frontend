import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

function ProductCard({ product }) {
  const navigate = useNavigate();

  const [imgLoaded, setImgLoaded] = useState(false);

  const [isInCart, setIsInCart] = useState(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    return cart.some((item) => item._id === product._id);
  });

  const goToDetails = () => {
    navigate(`/product/${product._id}`);
  };

  const handleCartAction = () => {
    if (isInCart) {
      navigate("/cart");
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const updatedCart = [...cart, product];

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    setIsInCart(true);
  };

  return (
    <div
      onClick={goToDetails}
      className="h-[400px] w-[250px] bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
    >
      {/* Image Section */}
      <div className="relative h-[220px] bg-gray-100">
        {!imgLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader />
          </div>
        )}

        <img
          src={product.image_url}
          alt={product.name}
          onLoad={() => setImgLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            imgLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Content */}
      <div className="p-4 h-[180px] flex flex-col">
        <h3 className="text-[22px] font-bold text-[#081a37] line-clamp-1">
          {product.name}
        </h3>

        <p className="mt-2 text-gray-400 text-[14px] line-clamp-2">
          {product.description}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <p className="text-[20px] font-bold text-[#081a37]">
            ${product.price}
          </p>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCartAction();
            }}
            className="bg-[#07162A] text-white px-4 py-2 rounded-xl text-sm hover:opacity-90"
          >
            {isInCart ? "Go To Cart" : "Add To Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;