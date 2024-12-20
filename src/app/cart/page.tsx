import React from "react";
import CartProduct from "./cartProduct";
import CartTotal from "./cartTotal";

const CartPage = () => {
  return (
    <>
      <div className="bg-[#F6F5FF]">
        <div className="container mx-auto px-4 md:px-6 lg:px-16 pt-6 pb-6 md:pt-[50px] md:pb-[50px]">
          <h2 className="text-blue font-josefin text-3xl md:text-4xl leading-[36px] md:leading-[42.19px]">
            Shopping Cart
          </h2>
          <div className="flex gap-2 font-lato text-sm md:text-base font-medium mt-2">
            <h4>Home</h4>
            <h4>. Pages</h4>
            <h4 className="text-pink">. Shopping Cart</h4>
          </div>
        </div>
      </div>
      <div className="md:container mx-auto md:px-20">
        <div className="md:flex justify-between gap-8 md:mt-28 mt-12 md:mb-28 mb-12">
          <div className="md:w-[990px]">
            <CartProduct />
          </div>
          <div className="md:w-[400px]">
            <CartTotal />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
