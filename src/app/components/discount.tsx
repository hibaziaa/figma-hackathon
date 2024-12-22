"use client";
import React from "react";
import { BsCheck2 } from "react-icons/bs";

const Discount = () => {
  // Static discount item to display
  const discountItem = {
    category: "Wood Chair",
    title: "20% Discount Of All Products",
    des: "Eams Sofa Compact",
    peragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.",
    list: "Material expose like metals",
    list2: "Clear lines and geometric figures",
    list3: "Simple neutral colours.",
    list4: "Material expose like metals",
    btn: "Shop Now",
  };

  return (
    <div className="mt-32 px-6 lg:px-20">
      <h1 className="text-[32px] md:text-[42px] font-bold leading-[1.2] font-josefin text-center text-blue mb-12">
        Discount Item
      </h1>

      <div className="md:flex items-center justify-between px-20">
        {/* Left section (Text and Button) */}
        <div className="md:w-[50%] font-lato">
          <h2 className="font-bold text-blue mb-8 font-josefin text-[28px] md:text-[34px]">
            {discountItem.title}
          </h2>
          <h3 className="text-pink font-semibold mb-2 md:mb-6 text-[16px] md:text-[18px] font-lato">
            {discountItem.des}
          </h3>
          <p className="text-[#B7BACB] md:w-[65%] text-[14px] md:text-[16px]">{discountItem.peragraph}</p>

          <div className="md:flex mt-6 font-lato">
            <div className="mt-4">
              <div className="flex items-center text-blue gap-1">
                <BsCheck2 />
                <h4 className="text-[#B7BACB] mr-16 text-[16px] font-josefin font-medium">{discountItem.list}</h4>
              </div>
              <div className="flex items-center text-blue gap-1 mt-3">
                <BsCheck2 />
                <h4 className="text-[#B7BACB] text-[16px] font-josefin font-medium">{discountItem.list3}</h4>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center text-blue gap-1">
                <BsCheck2 />
                <h4 className="text-[#B7BACB] text-[16px] font-josefin font-medium">{discountItem.list2}</h4>
              </div>
              <div className="flex items-center text-blue gap-1 mt-3">
                <BsCheck2 />
                <h4 className="text-[#B7BACB] text-[16px] font-josefin font-medium">{discountItem.list4}</h4>
              </div>
            </div>
          </div>

          <button className="mt-8  bg-pink text-white text-[14px] md:text-[17px] md:px-11 px-8 md:py-3 py-2 rounded-sm font-josefin font-medium hover:bg-[#e02977]">
            {discountItem.btn}
          </button>
        </div>

        {/* Right section (Image) */}
        <div className="md:w-[45%]">
          <img
            src="/images/discount.png"
            alt="discountImage"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Discount;
