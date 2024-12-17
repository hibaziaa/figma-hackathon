'use client';
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
    <div className=" px-20">
      <h1 className="text-3xl font-bold text-center text-blue mb-8 font-josefin">Discount Item</h1>

      <div className="md:flex items-center justify-between">
        {/* Left section (Text and Button) */}
        <div className="md:w-[50%] font-lato">
          <h2 className="text-blue md:text-[35px] text-[24px]">{discountItem.title}</h2>
          <h3 className="text-pink font-semibold mb-2 md:mb-6">{discountItem.des}</h3>
          <p className="text-[#B7BACB] md:w-[65%]">{discountItem.peragraph}</p>

          <div className="md:flex mt-6 font-lato">
            <div className="mt-4">
              <div className="flex items-center text-blue gap-1">
                <BsCheck2 />
                <h4 className="text-[#B7BACB] mr-16">{discountItem.list}</h4>
              </div>
              <div className="flex items-center text-blue gap-1 mt-3">
                <BsCheck2 />
                <h4 className="text-[#B7BACB]">{discountItem.list3}</h4>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center text-blue gap-1">
                <BsCheck2 />
                <h4 className="text-[#B7BACB]">{discountItem.list2}</h4>
              </div>
              <div className="flex items-center text-blue gap-1 mt-3">
                <BsCheck2 />
                <h4 className="text-[#B7BACB]">{discountItem.list4}</h4>
              </div>
            </div>
          </div>

          <button className="mt-8 bg-pink text-white py-2 px-4 rounded">{discountItem.btn}</button>
        </div>

        {/* Right section (Image) */}
        <div className="md:w-[45%]">
          <img src="/images/discount.png" alt="discountImage" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Discount;
