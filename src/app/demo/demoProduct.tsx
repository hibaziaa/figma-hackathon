import React from "react";
import demoProductData from "./demoProductData";

const DemoProduct = () => {
  return (
    <div className="md:mt-44 mt-12">
      <div>
        {demoProductData.map((item , index) => {
          return (
            <div key={index}>
              <div className="flex gap-4 mb-4 items-center">
                <div>
                  <img src={item.pic} alt="demo Image" />
                </div>
                <div className="flex items-center justify-between ">
                  <div>
                    <h4 className="text-[14px] font-semibold font-josefin">{item.title}</h4>
                    <h5 className="text-[#9295AA]">color:{item.color}</h5>
                    <h5 className="text-[#9295AA]">Size:{item.size}</h5>
                  </div>
                  <div className="w-[160px] text-right">
                    <h4 className="text-[16px] font-josefin font-medium">{item.price}</h4>
                  </div>
                </div>
              </div>

              <div className=" border-[1px] mb-4"></div>
            </div>
          );
        })}
      </div>

      <div className="bg-[#F4F4FC] py-9 px-6 mt-6 mb-12">
        <div className="">
          <div className="text-blue flex items-center justify-between">
            <h3 className="text-[16px] md:text-[18px] font-bold font-lato">Subtotals:</h3>
            <h4 className="text-[16px] font-josefin font-medium">£219.00</h4>
          </div>
          <div className="md:w-[350px] border-[1px] mt-2"></div>
        </div>

        <div className="mt-9">
          <div className="text-blue flex items-center justify-between">
            <h3 className="text-[16px] md:text-[18px] font-bold font-lato">Totals:</h3>
            <h4>£325.00</h4>
          </div>
          <div className="md:w-[350px] border-[1px] mt-2"></div>
        </div>

        <div className="flex items-center mt-7 gap-1 text-[#9295AA]">
          <input
            className="bg-[#19D16F] text-[#19D16F] w-[8px] h-[8px]"
            type="checkbox"
            name=""
            id=""
          />
          <h6 className="text-[12px]">
            Shipping & taxes calculated at checkout
          </h6>
        </div>

        <button className="w-full mt-11 font-lato font-medium text-white text-[14px] md:text-[17px] md:px-11 px-8 md:py-3 py-2 rounded-sm bg-[#19D16F] hover:bg-[#0eb35b]">
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default DemoProduct;
