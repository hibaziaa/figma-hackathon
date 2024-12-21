import React from "react";
import BrandsImg from "../components/brands";

const OrderComplete = () => {
  return (
    <div>
      <div className="bg-[#F6F5FF]">
        <div className="container mx-auto px-4 md:px-6 lg:px-16 pt-6 pb-6 md:pt-[50px] md:pb-[50px]">
          <h2 className="text-blue font-josefin text-3xl md:text-4xl leading-[36px] md:leading-[42.19px]">
            Order Completed
          </h2>
          <div className="flex gap-2 font-lato text-sm md:text-base font-medium mt-2">
            <h4>Home</h4>
            <h4>. Pages</h4>
            <h4 className="text-pink">. Order Completed</h4>
          </div>
        </div>
      </div>

      <div className="lg:px-20 px-[.8rem] md:mt-32 mt-12 md:mb-32  mb-12   ">
        <div className=" w-full flex justify-center relative">
          <div className="absolute  lg:right-3/4 2xl:right-3/4 hidden lg:block">
            <img src="/images/order1.png" alt="clock" />
          </div>
          <div className="text-center border-dotted border-l-2 border-b-2 lg:w-[720px] 2xl:w-[840px] ">
            <div className="flex justify-center">
              <img
                className="w-[70px] md:w-max"
                src="/images/orderDone.png"
                alt="order done"
              />
            </div>
            <div className="absolute -bottom-8 left-3/4 hidden lg:block">
              <img src="/images/order2.png" alt="notepad" />
            </div>
            <h2 className="md:text-[36px] text-blue md:my-6 my-2  font-josefin font-extrabold text-[28px]">
              Your Order Is Completed!
            </h2>
            <div className=" w-full flex justify-center">
              <p className="md:w-[80%]  text-[#9295AA] text-[14px] md:text-[16px]">
                Thank you for your order! Your order is being processed and will
                be completed within 3-6 hours. You will receive an email
                confirmation when your order is completed.
              </p>
            </div>
            <button className="my-8  bg-pink text-white text-[14px] md:text-[17px] md:px-11 px-8 md:py-3 py-2 rounded-sm font-josefin font-medium hover:bg-[#d1236e]">
              Continue Shopping
            </button>
          </div>
        </div>
        <div className="md:mt-32 mt-12">
          <BrandsImg />
        </div>
      </div>
    </div>
  );
};

export default OrderComplete;
