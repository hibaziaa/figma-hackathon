import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import gridData from "./shopgriddata";
import BrandsImg from "../components/brands";

const ShopGrid = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-[#F6F5FF]">
        <div className="container mx-auto px-4 md:px-6 lg:px-16 pt-6 pb-6 md:pt-[50px] md:pb-[50px]">
          <h2 className="text-blue font-josefin text-3xl md:text-4xl leading-[36px] md:leading-[42.19px]">
            Shop Grid Default
          </h2>
          <div className="flex gap-2 font-lato text-sm md:text-base font-medium mt-2">
            <h4>Home</h4>
            <h4>. Pages</h4>
            <h4 className="text-pink">. Shop Grid Default</h4>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="container mx-auto px-4 md:px-8 py-6 md:py-[50px] flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-blue text-[28px] lg:text-[30px] 2xl:text-[34px]">
            Ecommerce Accessories & Fashion Item
          </h2>
          <h4 className="text-[#8A8FB9] font-lato">
            About 9,620 results (0.62 seconds)
          </h4>
        </div>

        {/* View and Filter Options */}
        <div className="hidden lg:flex gap-8 items-center">
          <div className="flex gap-2">
            <h3 className="text-blue font-normal text-[16px] md:text-[18px] font-lato">
              Per Page:
            </h3>
            <div className="border rounded-sm border-[#E7E6EF] py-1 px-3"></div>
          </div>
          <div className="flex gap-2">
            <h3 className="text-blue font-normal text-[16px] md:text-[18px] font-lato">
              Sort By:
            </h3>
            <h4 className="text-[#8A8FB9] border rounded-sm border-[#E7E6EF] py-1 px-3 font-lato flex items-center gap-1">
              Best Match <span>
                <BsChevronDown />
              </span>
            </h4>
          </div>
          <div className="flex items-center gap-4">
            <h3 className="text-blue font-normal text-[16px] md:text-[18px] font-lato">
              View:
            </h3>
            <FaListUl className="text-blue cursor-pointer" />
            <BsFillGridFill className="text-blue cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {gridData.map((item, index) => (
            <div
              key={index}
              className="flex justify-center items-center my-6"
            >
              <div className="bg-white p-4 shadow-lg rounded-lg w-full max-w-[270px]">
                <div className="bg-[#F6F7FB] flex justify-center h-[200px] md:h-[280px] p-6">
                  <img src={item.pic} alt="products" className="object-contain" />
                </div>
                <h3 className="text-blue font-josefin text-center text-[16px] md:text-[18px] font-bold mt-4">
                  {item.title}
                </h3>

                <div className="my-3 flex justify-center items-center">
                  <div className="flex h-3 w-[80px] gap-2">
                    <div className="h-3 w-3 rounded-full bg-[#FFCC2E]"></div>
                    <div className="h-3 w-3 rounded-full bg-pink"></div>
                    <div className="h-3 w-3 rounded-full bg-[#2F1AC4]"></div>
                  </div>
                </div>

                <div className="flex justify-center gap-5">
                  <h4 className="text-blue font-bold">{item.offerPrice}</h4>
                  <h4 className="text-pink line-through">
                    {item.regularPrice}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Brands Section */}
      <BrandsImg />
    </>
  );
};

export default ShopGrid;
