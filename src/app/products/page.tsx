import React from "react";

import ProductInfo from "./productInfo";
import ProductView from "./productView";
import RelatedProduct from "./relatedProduct";
import BrandsImg from "../components/brands";

const ProductDetails = () => {
  return (
    <div>
      <div className="bg-[#F6F5FF]">
        <div className="container mx-auto px-4 md:px-6 lg:px-16 pt-6 pb-6 md:pt-[50px] md:pb-[50px]">
          <h2 className="text-blue font-josefin text-3xl md:text-4xl leading-[36px] md:leading-[42.19px]">
            Product Details
          </h2>
          <div className="flex gap-2 font-lato text-sm md:text-base font-medium mt-2">
            <h4>Home</h4>
            <h4>. Pages</h4>
            <h4 className="text-pink ">. Product Details</h4>
          </div>
        </div>
      </div>
      <ProductView />
      <ProductInfo />
      <RelatedProduct />
      <BrandsImg />
    </div>
  );
};

export default ProductDetails;
