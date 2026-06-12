import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Wishlist from "./components/WishList";
import MyOrders from "./pages/Orders";
import Product from "./pages/Products";
import ProductDetails from "./pages/productDetails";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  // Configure axios defaults for API URL and auth header
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
  axios.defaults.baseURL = API_URL;
  const token = localStorage.getItem("token");
  if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Website Pages */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        <Route
          path="/products"
          element={
            <MainLayout>
              <Product />
            </MainLayout>
          }
        />

        <Route
          path="/product/:id"
          element={
            <MainLayout>
              <ProductDetails />
            </MainLayout>
          }
        />

        <Route
          path="/cart"
          element={
            <MainLayout>
              <Cart />
            </MainLayout>
          }
        />

        <Route
          path="/wishlist"
          element={
            <MainLayout>
              <Wishlist />
            </MainLayout>
          }
        />

        <Route
          path="/profile"
          element={
            <MainLayout>
              <Profile />
            </MainLayout>
          }
        />

        <Route
          path="/myorders"
          element={
            <MainLayout>
              <MyOrders />
            </MainLayout>
          }
        />

        <Route
          path="/admin"
          element={
            <MainLayout>
              <AdminDashboard />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
