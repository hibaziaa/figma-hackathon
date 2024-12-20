import React from "react";
import { BiSearch } from "react-icons/bi";
import {
  recentPostData,
  saleProductData,
  offerProductData,
} from "./blogHistoryData";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";

const BlogHistory = () => {
  return (
    <div>
      <h3 className="text-[22px] text-blue font-josefin lg:mt-0 mt-12  md:text-[18px] font-bold ">
        Search
      </h3>
      <div className="relative mt-4">
        <div>
          <input
            placeholder="Search For Posts"
            className="w-full border-[#BEBFC2] text-[#F0EFF2] border-2 p-2 rounded-md"
            type="search"
            name=""
            id=""
          />
          <div className="absolute top-2 right-5">
            <BiSearch className="text-gray-400 text-2xl" />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-[22px] text-blue mt-12 font-josefin md:text-[18px] font-bold">
          Categories
        </h3>

        <div className="grid grid-cols-2 items-center justify-between  mt-6">
          <div className="">
          <h6 className="text-[14px] text-blue font-semibold hover:bg-[#FB2E86] hover:text-white hover:rounded-sm hover:px-2 hover:py-1 transition-all duration-300">
              Hobbies (14)
            </h6>
            <h6 className="text-[14px] text-blue font-semibold my-4 hover:bg-[#FB2E86] hover:text-white hover:rounded-sm hover:px-2 hover:py-1 transition-all duration-300">
              Womer (21)
            </h6>
            <h6 className="text-[14px] text-blue font-semibold hover:bg-[#FB2E86] hover:text-white hover:rounded-sm hover:px-2 hover:py-1 transition-all duration-300 my-4">Womer (21)</h6>
          </div>

          <div className="">
            <h6 className="text-[14px] text-blue font-semibold hover:bg-[#FB2E86] hover:text-white hover:rounded-sm hover:px-2 hover:py-1 transition-all duration-300">Womer (21)</h6>
            <h6 className="text-[14px] text-blue font-semibold my-4 hover:bg-[#FB2E86] hover:text-white hover:rounded-sm hover:px-2 hover:py-1 transition-all duration-300">
              Womer (21)
            </h6>
            <h6 className="text-[14px] text-blue font-semibold my-4 hover:bg-[#FB2E86] hover:text-white hover:rounded-sm hover:px-2 hover:py-1 transition-all duration-300">Womer (21)</h6>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-[22px] text-blue mt-12 font-josefin md:text-[18px] font-bold ">
          Recent Post
        </h3>
        <div>
          {recentPostData.map((item) => {
            return (
              <div className="flex items-center gap-3 my-6">
                <div>
                  <img src={item.pic} alt="recent posts" />
                </div>
                <div>
                  <h5 className="text-blue font-semibold text-[10px] md:text-[14px] font-lato">
                    {item.title}
                  </h5>
                  <h5 className="text-[11px] text-[#9295AA] md:text-[14px] font-lato font-normal">
                    {item.des}
                  </h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="text-[22px] text-blue mt-12 font-josefin md:text-[18px] font-bold">
          Sale Product
        </h3>
        <div>
          {saleProductData.map((item) => {
            return (
              <div className="flex items-center gap-3 my-6">
                <div>
                  <img src={item.pic} alt="sale products" />
                </div>
                <div>
                  <h5 className="text-blue font-semibold text-[10px] md:text-[14px] font-lato">
                    {item.title}
                  </h5>
                  <h5 className="text-[11px] text-[#9295AA] md:text-[14px] font-lato font-normal">
                    {item.des}
                  </h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="text-[22px] text-blue mt-12 font-josefin">
          Offer Product
        </h3>

        <div className="grid grid-cols-2 ">
          {offerProductData.map((item) => {
            return (
              <div className="mb-6">
                <div className="flex justify-between  text-center">
                  <div>
                    <img src={item.pic} alt="offer products" />
                    <h5 className="font-semibold text-blue">{item.title}</h5>
                    <h6 className="text-xs text-[#9295AA]">{item.price}</h6>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="text-[22px] text-blue mt-12 font-josefin">Follow</h3>

        <div className="flex shadow-primary w-max py-2 px-4 mt-6">
          <div className="bg-[#7E33E0] text-white rounded-full p-2">
            <GrFacebookOption />
          </div>
          <div className="bg-pink text-white rounded-full p-2 mx-4">
            <AiOutlineInstagram />
          </div>
          <div className="bg-[#37DAF3] text-white rounded-full p-2">
            <AiOutlineTwitter />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-[22px] text-blue mt-12 font-josefin">Tags</h3>
        <div className="grid grid-cols-3 my-3 text-blue font-medium underline">
          <a className="mb-3 hover:text-[#FB2E86]" href="">
            General
          </a>
          <a
            href=""
            className="font-lato text-[14px] md:text-[1rem] hover:text-[#FB2E86]"
          >
            Atsanil
          </a>
          <a
            href=""
            className="font-lato text-[14px] md:text-[1rem] hover:text-[#FB2E86]"
          >
            Insas.
          </a>
          <a
            href=""
            className="font-lato text-[14px] md:text-[1rem] hover:text-[#FB2E86]"
          >
            Bibsaas
          </a>
          <a
            href=""
            className="font-lato text-[14px] md:text-[1rem] hover:text-[#FB2E86]"
          >
            Nulla.
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogHistory;
