import { Link, useNavigate } from "react-router-dom";
import { FiSearch, FiUser, FiHeart, FiShoppingBag } from "react-icons/fi";
import { useState } from "react";

function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;

  const userName = localStorage.getItem("userName");

  const handleSearch = (e) => {
    if (e.key === "Enter" && search.trim()) {
      navigate(`/products?search=${search}`);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");

    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/">
            <h1 className="text-3xl font-bold text-pink-600">Zyvora</h1>
          </Link>

          {/* Categories */}
          <div className="hidden lg:flex items-center gap-10 font-semibold text-sm">
            <Link to="/products?category=MEN">MEN</Link>
            <Link to="/products?category=WOMEN">WOMEN</Link>
            <Link to="/products?category=BEAUTY">BEAUTY</Link>
            <Link to="/products?category=SKIN">SKIN</Link>
            <Link to="/products?category=ACCESSORIES">ACCESSORIES</Link>
            <Link to="/products?category=FOOTWEAR">FOOTWEAR</Link>
            <Link to="/products?category=GENZ">GENZ</Link>
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-md px-3 py-3 w-[450px]">
            <FiSearch className="text-gray-500 text-lg" />

            <input
              type="text"
              placeholder="Search for products, brands and more"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleSearch}
              className="bg-transparent outline-none px-3 w-full text-sm"
            />
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-8">
            {/* Profile */}
            <div className="relative group">
              <div className="flex flex-col items-center cursor-pointer">
                <FiUser className="text-xl" />
                <span className="text-xs font-semibold">Profile</span>
              </div>

              {/* Dropdown */}
              <div className="absolute right-0 top-12 w-72 bg-white shadow-xl border rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-5">
                  {isLoggedIn ? (
                    <>
                      <h3 className="font-bold text-lg">Hello {userName}</h3>

                      <hr className="my-4" />

                      <div className="flex flex-col gap-3 text-sm">
                        <Link to="/myorders" className="hover:font-semibold">
                          Orders
                        </Link>

                        <Link to="/wishlist" className="hover:font-semibold">
                          Wishlist
                        </Link>

                        <Link to="/profile" className="hover:font-semibold">
                          Profile
                        </Link>

                        <button
                          onClick={logout}
                          className="text-left text-red-500 hover:font-semibold"
                        >
                          Logout
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <h3 className="font-bold text-lg">Welcome</h3>

                      <p className="text-gray-500 text-sm mt-2">
                        Login to access your account
                      </p>

                      <Link
                        to="/login"
                        className="block mt-4 bg-pink-500 text-white text-center py-2 rounded-md"
                      >
                        Login
                      </Link>

                      <Link
                        to="/register"
                        className="block mt-3 border text-center py-2 rounded-md"
                      >
                        Register
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Wishlist */}
            <Link to="/wishlist">
              <div className="flex flex-col items-center cursor-pointer">
                <FiHeart className="text-xl" />
                <span className="text-xs font-semibold">Wishlist</span>
              </div>
            </Link>

            {/* Cart */}
            <Link to="/cart">
              <div className="relative flex flex-col items-center cursor-pointer">
                <FiShoppingBag className="text-xl" />

                <span className="absolute -top-2 -right-3 bg-pink-500 text-white text-[10px] px-1.5 rounded-full">
                  {JSON.parse(localStorage.getItem("cart") || "[]").length}
                </span>

                <span className="text-xs font-semibold">Bag</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
