import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {FaHeart, FaShoppingCart} from "react-icons/fa";
import OurProducts from "../../Components/Product/OurProducts";

const ProductDetails = () => {
  const {id} = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://code-commando.com/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setProduct(data.data);
        } else {
          setProduct(null);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!product) {
    return <p className="text-center py-20 text-red-500">Product not found!</p>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-10 text-center">
        {product.productName}
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 flex justify-center items-center bg-gray-100 rounded-lg p-4">
          <img
            src={product.images?.[0] || "https://via.placeholder.com/300"}
            alt={product.productName}
            className="max-h-96 object-contain"
          />
        </div>

        <div className="md:w-1/2">
          <p className="text-2xl font-semibold mb-4 text-orange-600">
            ${product.price}/kg
          </p>
          <p className="mb-6 text-gray-600">{product.description}</p>
          <p className="mb-2">
            <strong>Stock:</strong> {product.stock}
          </p>
          <p className="mb-2">
            <strong>Category ID:</strong> {product.categoryId}
          </p>
          <p className="mb-2">
            <strong>Created At:</strong>
            {new Date(product.createdAt).toLocaleDateString()}
          </p>
          <p className="mb-6">
            <strong>Updated At:</strong>
            {new Date(product.updatedAt).toLocaleDateString()}
          </p>

          <div className="flex gap-4">
            <button className="btn flex items-center gap-2 hover:bg-orange-500 hover:text-white transition-all duration-300">
              <FaHeart /> Save as Favorite
            </button>

            <button className="btn flex items-center gap-2 hover:bg-orange-500 hover:text-white transition-all duration-300">
              <FaShoppingCart /> Add to Cart
            </button>
          </div>
        </div>
      </div>
      {/* Our products */}
      <OurProducts></OurProducts>
    </div>
  );
};

export default ProductDetails;
