import Link from "next/link";
import React from "react";
import BrandsImg from "./components/brands";

const NotFound = () => {
  return (
    <>
      
        <div className="bg-[#F6F5FF]">
          <div className="container mx-auto px-4 md:px-6 lg:px-16 pt-6 pb-6 md:pt-[50px] md:pb-[50px]">
            <h2 className="text-blue font-josefin text-3xl md:text-4xl leading-[36px] md:leading-[42.19px]">
              404 Not Found
            </h2>
            <div className="flex gap-2 font-lato text-sm md:text-base font-medium mt-2">
              <h4>Home</h4>
              <h4>. Pages</h4>
              <h4 className="text-pink">. 404 Not Found</h4>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center min-h-screen mt-10">
  <div className="text-center">
    <img src="/images/404.png" alt="404 image" className="mx-auto" />
    <div className="my-16">
      <h3 className="text-[24px] text-blue mb-6">
        Oops! The page you requested was not found!
      </h3>
      <Link
        className="bg-pink text-white font-josefin py-4 px-8 rounded-md inline-block"
        href="/"
      >
        Back To Home
      </Link>
    </div>

    <BrandsImg />
  </div>
</div>

  
    </>
  );
};

export default NotFound;
