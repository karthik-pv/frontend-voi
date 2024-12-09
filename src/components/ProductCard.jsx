import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, name, color, price, image1_url } = product;
  const navigate = useNavigate();

  return (
    <div className="">
      {/* Product Image */}
      <img
        src={image1_url}
        alt={name}
        className="w-full h-64 object-cover mb-4"
      />

      {/* Product Info */}
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600">{color}</p>
      <p className="text-gray-800 font-bold">₹{price}</p>

      {/* Action */}
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        onClick={() => navigate("/product?search=" + encodeURIComponent(name))}
      >
        View Details
      </button>
    </div>
  );
};

export default ProductCard;
