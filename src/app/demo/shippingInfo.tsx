import React from "react";

const ShippingInfo = () => {
  return (
    <div>
      <div className="md:mt-20 mt-8 ">
        <h3 className="text-blue text-[24px] mt-4 md:text-[18px] font-bold font-lato">Hekto Demo</h3>
        <p className="text-blue  mt-4 mb-5 text-[14px] md:text-[16px]">
          Cart/ Information/ Shipping/ Payment
        </p>
      </div>
      <div className="bg-[#F4F4FC] md:p-8 p-2 pb-16 ">
        <div className="md:flex justify-between">
          <h3 className="text-blue md:mt-9 text-[16px] md:text-[18px] font-bold font-lato">Contact Information</h3>
          <div className="flex">
            <h6 className="text-[14px] text-[#9295AA] mr-2">
              Already have an account?
            </h6>
            <h6 className="text-[14px] text-[#9295AA]">Log in</h6>
          </div>
        </div>

        <h6 className="text-[14px] text-[#9295AA] mb-2 mt-6 md:mt-9">
          Email or mobile phone number
        </h6>
        <div className="border-[1px] "></div>

        <div className="flex items-center gap-2 mt-4 md:mt-8">
          <input
            className="bg-[#19D16F] w-[8px] h-[8px] text-[#19D16F] border-none"
            type="checkbox"
            name=""
            id=""
          />
          <h6 className="text-[#8A91AB] text-[12px]">
            Keep me up to date on news and excluive offers
          </h6>
        </div>

        <div className="md:mt-28 mt-12">
          <h3 className="text-blue  md:mb-12 mb-6 text-[16px] md:text-[18px] font-bold font-lato">Shipping address</h3>

          <div>
            <div className="md:flex justify-between">
              <div>
                <h6 className="text-[#9295AA] mb-2">First name (optional)</h6>
                <div className="border-[1px] md:w-[336px] "></div>
              </div>
              <div className="mt-6 md:mt-0">
                <h6 className="w-[336px] text-[#9295AA] mb-2">Last name</h6>
                <div className="border-[1px] "></div>
              </div>
            </div>

            <div className="md:py-10 py-6">
              <h6 className="w-[336px] text-[#9295AA] mb-2">Address</h6>
              <div className="border-[1px] "></div>
            </div>
            <div>
              <h6 className="w-[336px] text-[#9295AA] mb-2">
                Appartment,suit,e.t.c (optional)
              </h6>
              <div className="border-[1px] "></div>
            </div>
            <div className="md:mt-10 mt-6">
              <h6 className="w-[336px] text-[#9295AA] mb-2">City</h6>
              <div className="border-[1px] "></div>
            </div>

            <div className="md:flex justify-between">
              <div className="md:mt-10 mt-6">
                <h6 className="w-[336px] text-[#9295AA] mb-2">Bangladesh</h6>
                <div className="border-[1px] "></div>
              </div>

              <div className="md:mt-10 mt-6">
                <h6 className="w-[336px] text-[#9295AA] mb-2">Postal Code</h6>
                <div className="border-[1px] "></div>
              </div>
            </div>

            <button className="md:mt-28 mt-12 bg-pink hover:bg-[#e02977] text-white text-[14px] md:text-[17px] md:px-11 px-8 md:py-3 py-2 rounded-sm font-josefin font-medium">Continue Shipping</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingInfo;
