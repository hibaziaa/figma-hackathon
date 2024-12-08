// pages/index.tsx
import React from 'react';
import ProductCard from './ProductCard';

const featuredProducts: Array<{ image: string; title: string; code: string; price: string }> = [
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
    title: 'Cantilever Chair',
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
         image={product.image || '/images/default-image.png'}
         title={product.title || 'Unknown Product'}
         code={product.code || 'No Code'}
         price={product.price || '0.00'}
       />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProduct;
