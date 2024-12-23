import React from "react";

const Trending = () => {
  const trending = [
    {
      pic: "/images/trending1.png",
      title: "Cantilever chair",
      offerPrice: "$26.00",
      regularPrice: "$42.00",
    },
    {
      pic: "/images/trending2.png",
      title: "Cantilever chair",
      offerPrice: "$26.00",
      regularPrice: "$42.00",
    },
    {
      pic: "/images/trending3.png",
      title: "Cantilever chair",
      offerPrice: "$26.00",
      regularPrice: "$42.00",
    },
    {
      pic: "/images/trending4.png",
      title: "Cantilever chair",
      offerPrice: "$26.00",
      regularPrice: "$42.00",
    },
  ];

  const executiveData = [
    {
      pic: "/images/execute1.png",
      title: "Executive Seat chair",
      price: "$32.00",
    },
    {
      pic: "/images/execute2.png",
      title: "Executive Seat chair",
      price: "$32.00",
    },
    {
      pic: "/images/execute3.png",
      title: "Executive Seat chair",
      price: "$32.00",
    },
  ];

  return (
    <div className="md:mt-32 md:mb-32 px-6 max-w-screen-lg mx-auto">
      <h1 className="text-[32px] md:text-[42px] font-bold leading-[1.2] font-josefin text-center text-blue mb-12">
        Trending Products
      </h1>
      <div className="md:flex gap-6">
        {trending.map((item , index) => {
          return (
            <div className="shadow-primary h-[350px] md:w-[270px] p-3 mb-8 md:mb-0" key={index}>
              <div>
                <div className="bg-[#F5F6F8] grid justify-center items-center h-[227px]">
                  <img src={item.pic} alt="trending product" />
                </div>
                <div className="text-center text-blue mt-5">
                  <div>
                    <h4 className="font-bold text-[16px] font-josefin">
                      {item.title}
                    </h4>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <h5 className="font-semibold text-[10px] md:text-[14px] font-lato">
                      {item.offerPrice}
                    </h5>
                    <h6 className="text-xs font-semibold text-[#1518754D] line-through">
                      {item.regularPrice}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="md:flex gap-6 mt-7">
        <div className="bg-[#FFF6FB] md:w-[420px] h-[270px] p-6 mb-8">
          <h3 className="text-blue font-josefin text-[16px] md:text-[18px] font-bold">
            23% off in all products
          </h3>
          <h4 className="text-pink font-lato font-semibold text-[16px]">
            Shop Now
          </h4>
          <div className="grid justify-end">
            <img src="/images/sale23-1.png" alt="sale item" />
          </div>
        </div>

        <div className="bg-[#EEEFFB] md:w-[420px] h-[270px] p-6 mb-8">
          <h3 className="text-blue font-josefin text-[16px] md:text-[18px] font-bold">
            23% off in all products
          </h3>
          <h4 className="text-pink font-lato font-semibold text-[16px]">
            View Collection
          </h4>
          <div className="grid justify-end">
            <img src="/images/sale23-2.png" alt="sale item" />
          </div>
        </div>

        <div className="">
          {executiveData.map((item , index) => {
            return (
              <div key={index}>
                <div className="flex items-center pb-6">
                  <div className="bg-[#F5F6F8] h-[74px] w-[107px] mr-[9px] grid justify-center gap-y-4 items-center">
                    <img src={item.pic} alt="chair" />
                  </div>
                  <div className="flex items-center h-full">
                    <div>
                      <h5 className="text-blue font-josefin font-semibold text-[10px] md:text-[14px]">
                        {item.title}
                      </h5>
                      <h6 className="text-blue font-josefin font-medium text-sm">
                        {item.price}
                      </h6>
                    </div>
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

export default Trending;
