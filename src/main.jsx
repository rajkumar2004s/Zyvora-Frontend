import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import "./index.css";
import App from "./App.jsx";
import { ProductProvider } from "./context/productContext";

// Configure axios defaults
const API_URL =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.PROD
    ? "https://zyvora-backend.onrender.com"
    : "http://localhost:3000");
axios.defaults.baseURL = API_URL;
const token = localStorage.getItem("token");
if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </StrictMode>,
);
