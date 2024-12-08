import React from "react";
import Image from "next/image";

export default function HeaderBar(){
  return(
    <>
    {/* header bar  */}
    <div className={"w-full bg-[#7E33E0] flex flex-col sm:flex-row sm:justify-between items-center p-4 md:px-10 lg:px-20 xl:px-40 josefinSans"}>
  {/* Top Section */}
  <div className="flex sm:items-center gap-4 sm:gap-7">
    {/* Email */}
    <div className="flex items-center gap-2">
      <Image
        src="/images/envelopeVector.png"
        alt="email"
        width={16}
        height={16}
      />
      <p className="font-medium text-sm md:text-base leading-4 text-[#F1F1F1]">
        mhhasanul@gmail.com
      </p>
    </div>
    {/* Phone */}
    <div className="flex items-center gap-2">
      <Image
        src="/images/telephoneVector.png"
        alt="phone"
        width={16}
        height={16}
      />
      <p className="font-medium text-sm md:text-base leading-4 text-[#F1F1F1]">
        (12345)67890
      </p>
    </div>
  </div>

  {/* Bottom Section */}
  <div className="flex flex-wrap justify-center sm:justify-end gap-4 mt-4 sm:mt-0">
    {/* Language Selector */}
    <div className="flex items-center gap-1">
      <p className="font-medium text-sm md:text-base leading-4 text-[#F1F1F1]">
        English
      </p>
      <Image
        src="/images/arrowVector.png"
        alt="arrow"
        width={16}
        height={16}
      />
    </div>
    {/* Currency Selector */}
    <div className="flex items-center gap-1">
      <p className="font-medium text-sm md:text-base leading-4 text-[#F1F1F1]">
        USD
      </p>
      <Image
        src="/images/arrowVector.png"
        alt="arrow"
        width={16}
        height={16}
      />
    </div>
    {/* Login */}
    <div className="flex items-center gap-1">
      <p className="font-medium text-sm md:text-base leading-4 text-[#F1F1F1]">
        Login
      </p>
      <Image
        src="/images/loginVector.png"
        alt="login"
        width={16}
        height={16}
      />
    </div>
    {/* Wishlist */}
    <div className="flex items-center gap-1">
      <p className="font-medium text-sm md:text-base leading-4 text-[#F1F1F1]">
        Wishlist
      </p>
      <Image
        src="/images/heartVector.png"
        alt="heart"
        width={16}
        height={16}
      />
    </div>
    {/* Cart */}
    <div className="flex items-center">
      <Image
        src="/images/cartVector.png"
        alt="cart"
        width={24}
        height={24}
      />
    </div>
  </div>
</div>

    </>
    
  )
}