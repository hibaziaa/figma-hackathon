'use client';
import React, { useState } from "react";
import productInfoData from "./productInfoData";

const ProductInfo = () => {
  const tags = [
    {
      btn: "Description",
    },
    {
      btn: "Additional Info",
    },
    {
      btn: "Reviews",
    },
    {
      btn: "Video",
    },
  ];

  const categories = productInfoData.map((item) => item.category);
  const [active, setActive] = useState(tags[0].btn);

  return (
    <div className="bg-[#F9F8FE]">
      <div className="md:container mx-auto md:px-[1.3rem] px-[.8rem] md:py-24 py-2 md:mb-24 mb-12">
        <div className="hidden lg:block">
          <div className="flex gap-12 text-blue mb-14 justify-start">
            {tags.map((item) => {
              const isActive = item.btn === active;
              return (
                <div key={item.btn}>
                  <div
                    className={`text-lg cursor-pointer font-semibold ${
                      isActive
                        ? "underline text-pink" 
                        : "hover:underline hover:text-[#fb2e86]" 
                    }`}
                    onClick={() => setActive(item.btn)}
                  >
                    {item.btn}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-start">
          {productInfoData
            .filter((e) => e.category == active)
            .map((item) => {
              return (
                <div key={item.title}>
                  <div className="mt-8">
                    <h4 className="text-blue font-bold text-[16px] font-josefin">
                      {item.title}
                    </h4>
                    <p className="my-3 text-[#9295AA] font-josefin text-[14px] md:text-[16px]">
                      {item.des}
                    </p>
                    <div className="text-[#9295AA]">
                      <p className="text-[14px] md:text-[16px]">{item.des1}</p>
                      <p className="my-3 text-[14px] md:text-[16px]">{item.des4}</p>
                      <p className="text-[14px] md:text-[16px]">{item.des3}</p>
                      <p className="my-3 text-[14px] md:text-[16px]">{item.des4}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
