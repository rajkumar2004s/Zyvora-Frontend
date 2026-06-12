import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-pink-500">Zyvora</h2>

            <p className="text-gray-400 mt-4 text-sm leading-6">
              Discover premium fashion, trending styles, and exclusive
              collections for men, women, and kids.
            </p>

            <div className="flex gap-4 mt-6">
              <FaFacebookF className="cursor-pointer hover:text-pink-500 text-lg" />
              <FaInstagram className="cursor-pointer hover:text-pink-500 text-lg" />
              <FaTwitter className="cursor-pointer hover:text-pink-500 text-lg" />
              <FaYoutube className="cursor-pointer hover:text-pink-500 text-lg" />
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Shop</h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white cursor-pointer">Men</li>
              <li className="hover:text-white cursor-pointer">Women</li>
              <li className="hover:text-white cursor-pointer">Kids</li>
              <li className="hover:text-white cursor-pointer">Beauty</li>
              <li className="hover:text-white cursor-pointer">Accessories</li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Customer Service</h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white cursor-pointer">Contact Us</li>
              <li className="hover:text-white cursor-pointer">Track Order</li>
              <li className="hover:text-white cursor-pointer">Returns</li>
              <li className="hover:text-white cursor-pointer">FAQs</li>
              <li className="hover:text-white cursor-pointer">Shipping Info</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Press</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>

            <p className="text-gray-400 text-sm mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>

            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-900 border border-gray-700 rounded-md p-3 outline-none"
              />

              <button className="bg-pink-600 hover:bg-pink-700 rounded-md p-3 font-semibold transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2026 Zyvora. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0 text-sm text-gray-500">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>

            <span className="hover:text-white cursor-pointer">
              Terms of Service
            </span>

            <span className="hover:text-white cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
