import { useState } from "react";
import { FaStar, FaHeart, FaShoppingBag } from "react-icons/fa";

function ProductDetails() {
  const images = [
    "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800",
    "https://images.unsplash.com/photo-1617897903246-719242758050?w=800",
    "https://images.unsplash.com/photo-1601612628452-9e99ced43524?w=800",
    "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?w=800",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Breadcrumb */}
      <p className="text-gray-500 mb-6">
        Home &gt; Skincare &gt; Moisturizers &gt; Face Moisturizer
      </p>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* LEFT */}
        <div className="flex gap-4">
          {/* Thumbnails */}
          <div className="flex flex-col gap-4">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 object-cover border cursor-pointer rounded ${
                  selectedImage === img ? "border-pink-500" : "border-gray-200"
                }`}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 bg-gray-50 rounded-lg overflow-hidden">
            <img
              src={selectedImage}
              alt="Product"
              className="w-full h-[650px] object-cover"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <h1 className="text-4xl font-bold">
            Minimalist B12 + Repair Complex Face Moisturizer
          </h1>

          <p className="text-lg text-gray-500 mt-2">(50g)</p>

          {/* Ratings */}
          <div className="flex items-center gap-2 mt-5">
            <FaStar className="text-green-500" />
            <span className="font-semibold">4.3</span>

            <span className="text-gray-400">|</span>

            <span>7690 Ratings</span>

            <span className="text-gray-400">|</span>

            <span>462 Reviews</span>
          </div>

          <hr className="my-6" />

          {/* Price */}
          <div className="flex items-center gap-3">
            <span className="text-4xl font-bold">₹379</span>

            <span className="line-through text-gray-400 text-xl">₹399</span>

            <span className="text-green-600 font-semibold text-xl">5% OFF</span>
          </div>

          <p className="text-gray-500 mt-2">Inclusive of all taxes</p>

          {/* Coupon Box */}
          <div className="border rounded-lg p-5 mt-8 bg-pink-50">
            <h3 className="font-bold text-2xl">Extra 15% Off upto ₹300</h3>

            <p className="text-gray-600 mt-2">
              Extra 15% Off upto ₹300 Max On your first order.
            </p>

            <div className="flex justify-between items-center mt-5 border border-dashed border-pink-300 p-3 rounded">
              <span className="font-bold">NEW15</span>

              <button className="text-pink-600 font-bold">Collect</button>
            </div>
          </div>

          {/* Sizes */}
          <div className="mt-8">
            <h3 className="font-bold text-lg mb-4">Select Size</h3>

            <div className="flex gap-4">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className="w-14 h-14 border rounded-full hover:border-pink-500 font-semibold"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-10">
            <button className="flex-1 bg-pink-500 hover:bg-pink-600 text-white py-4 rounded-lg font-bold flex justify-center items-center gap-2">
              <FaShoppingBag />
              ADD TO BAG
            </button>

            <button className="flex-1 border py-4 rounded-lg font-bold flex justify-center items-center gap-2">
              <FaHeart />
              WISHLIST
            </button>
          </div>

          {/* Delivery */}
          <div className="mt-10 border-t pt-6">
            <h3 className="font-bold text-lg mb-3">Delivery Options</h3>

            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Enter Pincode"
                className="border rounded px-4 py-3 flex-1"
              />

              <button className="text-pink-500 font-bold">Check</button>
            </div>

            <p className="text-green-600 mt-3">Delivery within 2-4 days</p>
          </div>

          {/* Product Details */}
          <div className="mt-10 border-t pt-6">
            <h3 className="font-bold text-xl mb-4">Product Details</h3>

            <p className="text-gray-600 leading-7">
              This moisturizer helps repair the skin barrier and deeply hydrates
              the skin using Vitamin B12 and Ceramides. Suitable for all skin
              types and daily use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
