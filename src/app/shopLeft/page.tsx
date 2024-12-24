import React from "react";
import shopLeftData from "./shopLeftData";
import Link from "next/link";

import { BsChevronDown } from "react-icons/bs";
import { FaListUl, FaRegHeart, FaSearchPlus } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import { CgShoppingCart } from "react-icons/cg";
import { HiCheck } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import BrandsImg from "../components/brands";

const ShopLeft = () => {
  const leftIcon = [
    {
      icon: <CgShoppingCart />,
    },
    {
      icon: <FaRegHeart />,
    },
    {
      icon: <FaSearchPlus />,
    },
  ];

  const filterData = [
    {
      icon: <HiCheck />,
      title: "Coaster Furniture",
    },
    {
      icon: <HiCheck />,
      title: "Fusion Dot High Fashion",
    },
    {
      icon: <HiCheck />,
      title: "Unique Furnitture Restor",
    },
    {
      icon: <HiCheck />,
      title: "Dream Furnitture Flipping",
    },
    {
      icon: <HiCheck />,
      title: "Young Repurposed",
    },
    {
      icon: <HiCheck />,
      title: "Green DIY furniture",
    },
  ];

  const discountData = [
    {
      icon: <HiCheck />,
      title: "20% Cashback",
    },
    {
      icon: <HiCheck />,
      title: "5% Cashback Offer",
    },
    {
      icon: <HiCheck />,
      title: "25% Discount Offer",
    },
  ];

  const reviewData = [
    {
      pic: "/images/reviews.png",
      count: "(2341)",
    },
    {
      pic: "/images/reviews1.png",
      count: "(1726)",
    },
    {
      pic: "/images/reviews2.png",
      count: "(258)",
    },
    {
      pic: "/images/reviews3.png",
      count: "(25)",
    },
  ];

  const categoriesData = [
    {
      title: "Prestashop",
    },
    {
      title: "Magento",
    },
    {
      title: "Bigcommerce",
    },
    {
      title: "osCommerce",
    },
    {
      title: "3dcart",
    },
    {
      title: "Bags",
    },
    {
      title: "Jewellery",
    },
    {
      title: "Watches",
    },
  ];

  const priceData = [
    {
      title: "$0.00 - $150.00",
    },
    {
      title: "$150.00 - $350.00",
    },
    {
      title: "$150.00 - $504.00",
    },
    {
      title: "$450.00 +",
    },
  ];

  const colorName = [
    {
      title: "Blue",
      color: "/images/color1.png",
    },
    {
      title: "Orange",
      color: "/images/color2.png",
    },
    {
      title: "Brown",
      color: "/images/color3.png",
    },
    {
      title: "Green",
      color: "/images/color4.png",
    },
    {
      title: "Purple",
      color: "/images/color5.png",
    },
    {
      title: "Sky",
      color: "/images/color6.png",
    },
  ];

  return (
    <>
      <div>
        <div className="bg-[#F6F5FF]">
          <div className="container mx-auto px-4 md:px-6 lg:px-16 pt-6 pb-6 md:pt-[50px] md:pb-[50px]">
            <h2 className="text-blue font-josefin text-3xl md:text-4xl leading-[36px] md:leading-[42.19px]">
              Shop Left Sidebar
            </h2>
            <div className="flex gap-2 font-lato text-sm md:text-base font-medium mt-2">
              <h4>Home</h4>
              <h4>. Pages</h4>
              <h4 className="text-pink">. Shop Left Sidebar</h4>
            </div>
          </div>
        </div>

        <div className="lg:px-20 px-[.8rem] md:pt-[98px] pt-12 flex items-center justify-between">
          <div className="">
            <h2 className="text-blue text-[28px] 2xl:text-[34px] font-josefin font-extrabold">
              Ecommerce Acceories & Fashion item
            </h2>
            <h4 className="text-[#8A8FB9] font-lato text-[16px] font-medium">
              About 9,620 results (0.62 seconds)
            </h4>
          </div>
          <div className="hidden lg:block">
            <div className="flex gap-9 ">
              <div className="flex gap-2">
                <h3 className="text-blue font-normal text-[16px] md:text-[18px] font-lato">
                  Per Page:{" "}
                </h3>
                <h3 className="border rounded-sm border-[#E7E6EF] py-4 px-8 text-[16px] md:text-[18px] font-bold font-lato"></h3>
              </div>
              <div className="flex gap-2">
                <h3 className="text-blue font-normal text-[16px] md:text-[18px] font-lato">
                  Sort By:{" "}
                </h3>
                <h4 className="text-[#8A8FB9] border rounded-sm border-[#E7E6EF] py-1 px-3 font-lato flex items-center gap-1 text-[16px] font-medium">
                  Best Match{" "}
                  <span>
                    <BsChevronDown />
                  </span>
                </h4>
              </div>
              <div className="flex gap-8">
                <div className="flex items-center gap-2">
                  <h3 className="text-blue font-normal text-[16px] md:text-[18px] font-lato">
                    View:
                  </h3>
                  <FaListUl className="text-blue" />
                  <BsFillGridFill className="text-blue" />
                </div>
                <div>
                  <h3 className="border rounded-sm border-[#E7E6EF] py-4 px-20 text-[16px] md:text-[18px] font-bold font-lato"></h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:px-20 px-[.8rem] md:flex md:mt-24 mt-6 mb-20">
          <div className="w-[350px]">
            <div>
              <h3 className="text-blue underline pb-4 text-[20px] md:text-[18px] font-bold font-lato">
                Product Brand
              </h3>

              <div>
                {filterData.map((item, index) => {
                  return (
                    <div key={index}>
                      <div className="flex items-center gap-3 py-1">
                        <input
                          className="bg-[#E5E0FC] text-[#603EFF] border-none"
                          type="checkbox"
                        />
                        <h4 className="text-[#9295AA] font-lato font-medium text-[16px]">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-blue underline pb-4 text-[20px] md:text-[18px] font-bold font-lato">
                Discount Offer
              </h3>

              <div>
                {discountData.map((item, index) => {
                  return (
                    <div key={index}>
                      <div className="flex items-center gap-3 py-1">
                        <input
                          className="bg-[#FFDBF1] text-pink border-none"
                          type="checkbox"
                        />
                        <h4 className="text-[#9295AA] font-lato font-medium text-[16px]">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-blue underline pb-4 text-[20px]  md:text-[18px] font-bold font-lato">
                Rating Item
              </h3>

              <div>
                {reviewData.map((item, index) => {
                  return (
                    <div key={index}>
                      <div className="flex items-center gap-3 py-1 ">
                        <input
                          className="bg-[#FFF6DA] text-[#FFCC2E] border-none"
                          type="checkbox"
                        />
                        <img src={item.pic} alt="" />
                        <h5 className="text-[10px] md:text-[14px] font-lato font-normal">
                          {item.count}
                        </h5>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-12">
                <h3 className="text-blue underline pb-4 text-[20px] md:text-[18px] font-bold font-lato">
                  Categories
                </h3>
                <div>
                  {categoriesData.map((item, index) => {
                    return (
                      <div key={index}>
                        <div className="flex items-center gap-3 py-1">
                          <input
                            className="bg-[#FFDBF1] text-pink border-none"
                            type="checkbox"
                          />
                          <h4 className="text-[#9295AA] font-lato font-medium text-[16px] ">
                            {item.title}
                          </h4>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-blue underline pb-4 text-[20px]  md:text-[18px] font-bold font-lato">
                  Price Filter
                </h3>
                <div>
                  {priceData.map((item, index) => {
                    return (
                      <div key={index}>
                        <div className="flex items-center gap-3 py-1">
                          <input
                            className="bg-[#FFDBF1] text-pink border-none"
                            type="checkbox"
                          />
                          <h4 className="text-[#9295AA] font-lato font-medium text-[16px] ">
                            {item.title}
                          </h4>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="relative flex items-center mt-6">
                  <div className="">
                    <input
                      className="border-2 border-gray-300  bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                      type="search"
                      name="search"
                      placeholder="$10.00 - 20000$"
                    />
                  </div>
                  <div className="absolute right-1/3">
                    <BiSearch className="text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="mt-12 mb-12">
                <h3 className="text-blue underline pb-4 text-[20px] md:text-[18px] font-bold font-lato">
                  Filter By Color
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {colorName.map((item, index) => {
                    return (
                      <div className="flex items-center gap-1" key={index}>
                        <div>
                          <h4 className="text-[16px] font-josefin font-medium">
                            <img src={item.color} alt="" />
                          </h4>
                        </div>

                        <div>
                          <h4 className="text-[16px] font-josefin font-medium">
                            {item.title}
                          </h4>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className=" md:w-max">
            {shopLeftData.map((item, index) => {
              return (
                <div className="mb-8" key={index}>
                  <div className=" md:flex gap-6 boxShadow p-6 items-center ">
                    <div>
                      <img src={item.pic} alt="" />
                    </div>

                    <div>
                      <div className="flex items-center gap-4">
                        <h3 className="text-blue text-[16px] md:text-[18px] font-bold font-lato">
                          {item.title}
                        </h3>
                        <div className="my-3 flex justify-center ">
                          <div className="flex h-3 w-[80px]  gap-2">
                            <div className="h-3 w-3 rounded-full bg-[#FFCC2E]"></div>
                            <div className="h-3 w-3 rounded-full bg-pink"></div>
                            <div className="h-3 w-3 rounded-full bg-blue"></div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <h4 className="text-blue text-[16px] font-josefin font-medium">
                          {item.offerPrice}
                        </h4>
                        <h4 className="text-pink line-through text-[16px] font-josefin font-medium">
                          {item.regularPrice}
                        </h4>
                        <img src={item.review} alt="" />
                      </div>
                      <p className="mt-3 md:w-[70%] text-[#9295AA] text-[14px] md:text-[16px]">
                        {item.des}
                      </p>
                      <div className="flex items-center gap-4 ">
                        {leftIcon.map((item, index) => {
                          return (
                            <div
                              className="flext justify-center mt-6 bg-white rounded-full p-4 shadow-2xl"
                              key={index}
                            >
                              <Link
                                href=""
                                className="text-blue text-xl  font-lato text-[14px] md:text-[1rem] hover:text-[#fb2e86]"
                              >
                                {item.icon}
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <BrandsImg />
      </div>
    </>
  );
};

export default ShopLeft;
