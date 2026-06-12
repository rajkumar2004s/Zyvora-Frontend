import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useProducts } from "../context/productContext";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

function Products() {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");
  const search = searchParams.get("search");

  const { products = [], loading, fetchProducts } = useProducts();

  useEffect(() => {
    const filters = {};

    if (category) {
      filters.category = category;
    }

    if (search) {
      filters.search = search;
    }

    fetchProducts(filters);
  }, [category, search]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <Loader />
      </div>
    );
  }

  return (
    <div className="px-20">
      <div className="flex justify-between items-center pl-5 mt-4">
        <h1 className="text-3xl font-bold">
          {category || search || "All Products"}
        </h1>
      </div>

      {products.length === 0 ? (
        <div className="flex justify-center items-center h-[50vh]">
          <h2 className="text-2xl font-semibold text-gray-500">
            No Products Found
          </h2>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
