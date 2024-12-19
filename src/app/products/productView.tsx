import React from "react";
import { FaRegHeart, FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const ProductView = () => {
  const shareIcon = [
    {
      icon: <FaFacebookF />,
    },
    {
      icon: <AiFillInstagram />,
    },
    {
      icon: <FaTwitter />,
    },
  ];

  return (
    <div className="flex justify-center items-center px-4 sm:px-10 lg:px-40">
      <div className="w-full md:flex shadow-primary p-3 my-8 2xl:my-24 bg-white">
        <div className="grid grid-cols-1 justify-center">
          <div>
            <img src="/images/product1.png" alt="products" />
            <img
              className="py-[11px] md:mr-5"
              src="/images/product2.png"
              alt="products"
            />
            <img
              className="mb-3 md:mb-0"
              src="/images/product3.png"
              alt="products"
            />
          </div>
        </div>

        <div className="md:mr-10">
          <img
            className="h-full w-full"
            src="/images/product4.png"
            alt="products"
          />
        </div>

        <div className="flex items-center">
          <div>
            <h2 className="text-blue font-josefin font-extrabold text-[28px] md:text-[34px]">
              Playwood arm chair
            </h2>
            <div className="flex items-center gap-1 mt-3">
              <img src="/images/reviews4.png" alt="" />
              <h6 className="text-blue">(22)</h6>
            </div>
            <div className="flex items-center gap-5 my-3">
              <h4 className="text-blue text-[16px] font-josefin font-medium">
                $32.00
              </h4>
              <h4 className="line-through text-pink text-[16px] font-josefin font-medium">
                $32.00
              </h4>
            </div>
            <h4 className="text-[16px] font-josefin font-medium">Color</h4>
            <p className="text-[14px] md:text-[16px] md:w-[70%] font-josefin text-[#A9ACC6] mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              tellus porttitor purus, et volutpat sit.
            </p>
            <div className="text-blue flex items-center mt-5 gap-3 md:ml-16">
              <h4>Add To cart</h4>
              <FaRegHeart />
            </div>
            <h4 className="mt-3 text-blue font-bold text-[16px] font-josefin">
              Categories:
            </h4>
            <h4 className="mt-3 text-blue font-bold text-[16px] font-josefin">
              Tags
            </h4>
            <div className="mt-3 flex items-center gap-4">
              <h4 className="mt-3 text-blue font-bold text-[16px] font-josefin">
                Share
              </h4>
              <div className="flex gap-3">
                {shareIcon.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-[#151875] rounded-full p-2 text-white"
                    >
                      <a href="">{item.icon}</a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
