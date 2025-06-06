import {useLoaderData} from "react-router-dom";
import {useState, useEffect} from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const {data: products} = useLoaderData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (products) {
      setLoading(false);
    }
  }, [products]);

  return (
    <div className="container mx-auto px-4 py-12 mt-16">
      <h1 className="text-4xl font-bold text-center mb-3">
        Our Fresh Products
      </h1>
      <p className="text-center text-gray-500 mb-6">
        We pride ourselves on offering a wide variety of fresh and flavorful
        fruits, vegetables, and salad ingredients.
      </p>
      <div className="flex justify-center gap-4 mb-6">
        <button className="btn btn-outline hover:bg-green-500 hover:text-white">
          All
        </button>
        <button className="btn btn-outline hover:bg-green-500 hover:text-white">
          Fruits
        </button>
        <button className="btn btn-outline hover:bg-green-500 hover:text-white">
          Vegetables
        </button>
        <button className="btn btn-outline hover:bg-green-500 hover:text-white">
          Salad
        </button>
      </div>
      {loading ? (
        <div className="flex justify-center py-10">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
