import React from "react";
import { FiShoppingCart, FiHeart, FiSearch } from "react-icons/fi";

const FeaturedProducts = () => {
  const products = [
    { id: 1, name: "Cantilever chair", code: "Y523201", price: "$42.00", image: "/images/chair1.png" },
    { id: 2, name: "Cantilever chair", code: "Y523201", price: "$42.00", image: "/images/chair2.png" },
    { id: 3, name: "Cantilever chair", code: "Y523201", price: "$42.00", image: "/images/chair3.png" },
    { id: 4, name: "Cantilever chair", code: "Y523201", price: "$42.00", image: "/images/chair4.png" },
  ];

  return (
    <div className="py-12 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Featured Products</h2>
      <div className="flex justify-center gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative w-64 bg-white shadow-lg rounded-lg p-4 transition-all duration-300 hover:shadow-xl"
          >
            {/* Icons */}
            <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-blue-100 p-2 rounded-full shadow-md text-blue-500">
                <FiShoppingCart size={18} />
              </button>
              <button className="bg-blue-100 p-2 rounded-full shadow-md text-blue-500">
                <FiHeart size={18} />
              </button>
              <button className="bg-blue-100 p-2 rounded-full shadow-md text-blue-500">
                <FiSearch size={18} />
              </button>
            </div>

            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="h-40 mx-auto mb-4 object-contain"
            />

            {/* Hover State Button */}
            <div className="absolute inset-x-0 bottom-32 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
              <button className="bg-green-500 text-white px-6 py-2 rounded-md text-sm font-medium shadow-md transform group-hover:translate-y-[-10px] transition-transform">
                View Details
              </button>
            </div>

            {/* Description Section */}
            <div
              className="bg-white text-gray-800 p-4 rounded-lg mt-4 transition-colors duration-300 group-hover:bg-[#2F1AC4] group-hover:text-white"
            >
              <h3 className="text-lg font-semibold text-center">{product.name}</h3>
              {/* Three-Colored Line */}
              <div className="flex justify-center gap-1 mt-2">
                <span className="block w-4 h-1 bg-green-400 rounded-full"></span>
                <span className="block w-4 h-1 bg-pink-400 rounded-full"></span>
                <span className="block w-4 h-1 bg-blue-400 rounded-full"></span>
              </div>
              <p className="text-center text-sm mt-2">Code - {product.code}</p>
              <p className="text-center text-lg font-bold mt-2">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
