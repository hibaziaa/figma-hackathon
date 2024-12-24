import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { FaListUl, FaRegHeart, FaSearchPlus } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import shopListData from "./shoplistdata";
import { CgShoppingCart } from "react-icons/cg";
import Link from "next/link";
import BrandsImg from "../components/brands";

const ShopList = () => {
  const listIcon = [
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

  return (
    <>
      <div>
        <div className="bg-[#F6F5FF]">
          <div className="container mx-auto px-4 md:px-6 lg:px-16 pt-6 pb-6 md:pt-[50px] md:pb-[50px]">
            <h2 className="text-blue font-josefin text-3xl md:text-4xl leading-[36px] md:leading-[42.19px]">
              Shop List
            </h2>
            <div className="flex gap-2 font-lato text-sm md:text-base font-medium mt-2">
              <h4>Home</h4>
              <h4>. Pages</h4>
              <h4 className="text-pink">. Shop List</h4>
            </div>
          </div>
        </div>
        <div className="lg:px-20 px-[.8rem] pt-12 md:pt-[98px] flex items-center justify-between">
          <div className="">
            <h2 className="text-blue text-[28px]  2xl:text-[34px] font-josefin font-extrabold">
              Ecommerce Acceories & Fashion item
            </h2>
            <h4 className="text-[#8A8FB9] font-lato text-[16px] font-medium">
              About 9,620 results (0.62 seconds)
            </h4>
          </div>
          <div className="hidden lg:block">
            <div className="flex gap-9 ">
              <div className="flex gap-2">
                <h3 className="text-blue font-normal text-[16px] md:text-[18px]  font-lato">
                  Per Page:{" "}
                </h3>
                <h3 className="border rounded-sm border-[#E7E6EF] py-4 px-8 text-[16px] md:text-[18px] font-bold font-lato"></h3>
              </div>
              <div className="flex gap-2">
                <h3 className="text-blue font-normal text-[16px] md:text-[18px] font-lato">
                  Sort By:{" "}
                </h3>
                <h4 className="text-[#8A8FB9] border rounded-sm border-[#E7E6EF] py-1 px-3 font-lato flex items-center gap-1 text-[16px] font-medium">
                  Best Match
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
                  <h3 className="border rounded-sm border-[#FFCC2E] py-4 px-20 text-[16px] md:text-[18px] font-bold font-lato"></h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:px-20 px-[.8rem] md:mt-24 mt-6">
          {shopListData.map((item, index) => {
            return (
              <div className="mb-8" key={index}>
                <div className=" md:flex gap-6 boxShadow p-2 md:p-6 items-center ">
                  <div>
                    <img src={item.pic} alt="" />
                  </div>

                  <div>
                    <div className="flex items-center gap-4">
                      <h3 className="text-blue text-[16px] md:text-[18px] font-bold font-lato">
                        {item.title}
                      </h3>
                      <div className="my-3 flex justify-center ">
                        <div className="flex h-3 md:w-[80px]  gap-2">
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
                      {listIcon.map((item , index) => {
                        return (
                          <div className="flext justify-center mt-6 bg-white rounded-full p-4 shadow-2xl " key={index}>
                            <Link
                              className="text-xl text-blue font-lato text-[14px] md:text-[1rem] hover:text-[#fb2e86]"
                              href=""
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

        <div className="mt-24">
          <BrandsImg />
        </div>
      </div>
    </>
  );
};

export default ShopList;
