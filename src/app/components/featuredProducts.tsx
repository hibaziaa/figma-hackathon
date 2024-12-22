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
    <div className="py-16 bg-white">
      {/* Heading */}
      <h2 className="text-[32px] md:text-[42px] font-bold leading-[1.2] font-josefin text-center text-blue mb-12">
        Featured Products
      </h2>

      {/* Product Cards */}
      <div className="flex flex-wrap justify-center gap-6 px-4 md:px-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative w-full sm:w-[45%] md:w-[30%] lg:w-[22%] bg-white shadow-lg rounded-lg p-4 transition-all duration-300 hover:shadow-xl"
          >
            {/* Icons */}
            <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-blue-100 p-2 rounded-full shadow-md text-[#2F1AC4]">
                <FiShoppingCart size={12} />
              </button>
              <button className="bg-blue-100 p-2 rounded-full shadow-md text-[#1389FF]">
                <FiHeart size={12} />
              </button>
              <button className="bg-blue-100 p-2 rounded-full shadow-md text-[#1389FF]">
                <FiSearch size={12} />
              </button>
            </div>

            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="h-40 mx-auto mb-4 object-contain"
            />

            {/* Hover State Button */}
            <div className="absolute inset-x-0 bottom-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
              <button className="bg-[#08D15F] hover:bg-[#0aac50] text-white px-6 py-2 text-sm font-medium shadow-md transform group-hover:translate-y-[-10px] transition-transform">
                View Details
              </button>
            </div>

            {/* Description Section */}
            <div
              className="bg-white text-[#151875] p-4 rounded-lg mt-4 transition-colors duration-300 group-hover:bg-[#2F1AC4] group-hover:text-white"
            >
              <h3 className="text-lg font-semibold text-center text-[#F701A8] group-hover:text-white">
                {product.name}
              </h3>
              {/* Three-Colored Line */}
              <div className="flex justify-center gap-1 mt-2">
                <span className="block w-4 h-1 bg-[#08D15F] rounded-full"></span>
                <span className="block w-4 h-1 bg-[#F701A8] rounded-full"></span>
                <span className="block w-4 h-1 bg-[#2F1AC4] rounded-full group-hover:bg-white"></span>
              </div>
              <p className="text-center text-sm mt-2">Code - {product.code}</p>
              <p className="text-center text-lg font-bold mt-2">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dashed Line */}
            {/* Dashed Line */}
            <div className="mt-14 ml-72 flex justify-center items-center">
        <div className="h-[2px] w-full max-w-md flex justify-center items-center gap-1">
          <span className="block w-10 h-1 bg-[#F701A8] rounded-full"></span>
          <div className="flex-1 flex gap-1">
            <span className="w-10 h-1 rounded-full bg-[#F9B8D1]"></span>
            <span className="w-10 h-1 rounded-full bg-[#F9B8D1]"></span>
            <span className="w-10 h-1 rounded-full bg-[#F9B8D1]"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
