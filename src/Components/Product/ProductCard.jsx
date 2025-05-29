import {Link} from "react-router-dom";

const ProductCard = ({product}) => {
  return (
    <div className="card w-full bg-base-100 shadow-md rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300">
      <figure className="h-56 flex items-center justify-center bg-gray-100 rounded-md overflow-hidden">
        <img
          src={product.images?.[0] || "https://via.placeholder.com/150"}
          alt={product.productName}
          className="h-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </figure>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">{product.productName}</h2>
        <p className="text-sm text-gray-600">${product.price}/kg</p>
        <Link to={`/products/${product.id}`}>
          <button className="btn btn-outline btn-sm w-full mt-2 hover:bg-orange-500 hover:text-white transition-all duration-300">
            Add to cart
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
