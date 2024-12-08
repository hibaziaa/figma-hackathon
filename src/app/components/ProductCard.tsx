// components/ProductCard.tsx
import React from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  code: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, code, price }) => {
  return (
    <div className="w-full max-w-xs bg-white rounded-lg shadow-lg p-5 flex flex-col items-center space-y-4">
      <img src={image} alt={title} className="w-40 h-40 object-contain" />
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">Code: {code}</p>
      <p className="text-lg font-semibold text-indigo-600">${price}</p>
      <button className="bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition duration-300">
        View Details
      </button>
    </div>
  );
};

export default ProductCard;
