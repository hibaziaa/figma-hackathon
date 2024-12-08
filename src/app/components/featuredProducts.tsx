// pages/index.tsx
import React from 'react';
import ProductCard from './ProductCard';

const featuredProducts = [
  {
    image: '/images/chair1.png',
    title: 'Cantilever Chair',
    code: 'V3320B',
    price: '6200',
  },
  {
    image: '/images/chair2.png',
    title: 'Cantilever Chair',
    code: 'V3321B',
    price: '6200',
  },
  {
    image: '/images/chair3.png',
    title: 'Cantilever Chair',
    code: 'V3322B',
    price: '6200',
  },
  {
    image: '/images/chair4.png',
    code: 'V3323B',
    price: '6200',
  },
];

const FeaturedProduct = () => {
  return (
    <section className="py-10 px-5 md:px-20 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center text-indigo-900 mb-8">Featured Products</h2>
      <div className="flex flex-wrap justify-center gap-2">
        {featuredProducts.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            code={product.code}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProduct;
