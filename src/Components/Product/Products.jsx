import {useLoaderData} from "react-router-dom";
import {useState, useEffect} from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const {data: products} = useLoaderData();
  const [loading, setLoading] = useState(true);

  console.log(products);

  useEffect(() => {
    if (products) {
      setLoading(false);
    }
  }, [products]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-3">
        Our Fresh Products
      </h1>
      <p className="text-center text-gray-500 mb-6">
        We pride ourselves on offering a wide variety of fresh and flavorful
        fruits, vegetables, and salad ingredients.
      </p>

      {loading ? (
        <div className="flex justify-center py-10">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
