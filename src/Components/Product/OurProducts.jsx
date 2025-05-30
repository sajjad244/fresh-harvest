import {useLoaderData} from "react-router-dom";
import {useState, useEffect} from "react";
import ProductCard from "./ProductCard";

const OurProducts = () => {
  const {data: products} = useLoaderData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (products) {
      setLoading(false);
    }
  }, [products]);

  return (
    <div className="container mx-auto mt-10 px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-3">Related Products</h1>

      {loading ? (
        <div className="flex justify-center py-10">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default OurProducts;
