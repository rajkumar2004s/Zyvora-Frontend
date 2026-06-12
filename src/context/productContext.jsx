import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async (filters = {}) => {
    try {
      setLoading(true);

      const query = new URLSearchParams(filters).toString();

      const res = await axios.get(`/products?${query}`);
      console.log("Products API Response:", res.data);
      console.log(res.data);

      setProducts(res.data?.products || []);
    } catch (err) {
      console.log(err);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        fetchProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProducts = () => useContext(ProductContext);
