import ImageGRid from "../components/ImageGrid";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-50 via-white to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold">
            New Fashion Collection 2026
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold mt-6 leading-tight">
            Elevate Your
            <span className="text-pink-600"> Style </span>
            With Zyvora
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mt-6">
            Discover trendy outfits, premium fashion brands, and exclusive
            collections curated to match your unique style.
          </p>

          <Link to="/products">
            {" "}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition">
                Shop Now
              </button>
            </div>
          </Link>

          <div className="flex justify-center gap-10 mt-12 text-center">
            <div>
              <h3 className="text-2xl font-bold">10K+</h3>
              <p className="text-gray-500">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">500+</h3>
              <p className="text-gray-500">Brands</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">50K+</h3>
              <p className="text-gray-500">Products</p>
            </div>
          </div>
        </div>
      </section>
      <ImageGRid />
      {/* Featured Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Shop By Category
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-200 h-60 rounded-lg flex items-center justify-center text-2xl font-semibold">
              <img
                src="https://images.pexels.com/photos/31371016/pexels-photo-31371016.png"
                alt="Men"
              />
            </div>

            <div className="bg-gray-200 h-60 rounded-lg flex items-center justify-center text-2xl font-semibold">
              <img
                src="https://images.pexels.com/photos/31371017/pexels-photo-31371017.png"
                alt="Women"
                className="h-60"
              />
            </div>

            <div className="bg-gray-200 h-60 rounded-lg flex items-center justify-center text-2xl font-semibold">
              Accessories
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
