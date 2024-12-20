import React from "react";

const CartTotal = () => {
  return (
    <div>
      <h2
        className=" text-center text-blue font-josefin font-extrabold text-[28px] md:text-[34px]
"
      >
        Card Totals
      </h2>

      <div className="bg-[#F8F8FD] py-9 px-6 mt-6 ">
        <div className="">
          <div className="text-blue flex items-center justify-between">
            <h3 className="text-[16px] md:text-[18px] font-bold font-lato">
              Subtotals:
            </h3>
            <h4 className="text-[16px] font-josefin font-medium">£219.00</h4>
          </div>
          <div className="md:w-[350px] border-[1px] mt-2"></div>
        </div>

        <div className="mt-9">
          <div className="text-blue flex items-center justify-between">
            <h3 className="text-[16px] md:text-[18px] font-bold font-lato">
              Totals:
            </h3>
            <h4 className="text-[16px] font-josefin font-medium">£325.00</h4>
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

        <button className="w-full mt-11 font-lato font-medium  text-white text-[14px] md:text-[17px] md:px-11 px-8 md:py-3 py-2 rounded-sm font-josefin bg-[#19D16F] hover:bg-[#0eb35b]">
          Proceed To Checkout
        </button>
      </div>

      <h2 className=" text-center text-blue my-6">Calculate Shipping</h2>

      <div className="bg-[#F8F8FD] py-6 px-6  ">
        <div className="">
          <div className="text-blue">
            <h3 className="text-[#9295AA] font-medium text-[16px] md:text-[18px] font-lato">
              Bangladesh
            </h3>
          </div>
          <div className="md:w-[350px] border-[1px] mt-2"></div>
        </div>

        <div className="mt-9">
          <div className="text-blue flex items-center justify-between">
            <h3 className="text-[#9295AA] font-medium text-[16px] md:text-[18px] font-lato">
              Mirpur Dhaka - 1200
            </h3>
          </div>
          <div className="md:w-[350px] border-[1px] mt-2"></div>
        </div>

        <div className="mt-9">
          <div className=" flex items-center justify-between">
            <h3 className="text-[#9295AA] font-medium text-[16px] md:text-[18px] font-lato">
              Postal Code
            </h3>
          </div>
          <div className="md:w-[350px] border-[1px] mt-2"></div>
        </div>

        <button className=" mt-11 font-lato font-medium bg-pink text-white text-[14px] md:text-[17px] md:px-11 px-8 md:py-3 py-2 rounded-sm hover:bg-[#d1236e] ">
          Calculate Shiping
        </button>
      </div>
    </div>
  );
};

export default CartTotal;
