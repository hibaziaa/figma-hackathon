import React from "react";
import Offers from "../components/offer";
import Image from "next/image";

const About = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="bg-[#F6F5FF]">
        <div className="container mx-auto px-4 md:px-6 lg:px-16 pt-6 pb-6 md:pt-[50px] md:pb-[50px]">
          <h2 className="text-blue font-josefin text-3xl md:text-4xl leading-[36px] md:leading-[42.19px]">
            About Us
          </h2>
          <div className="flex gap-2 font-lato text-sm md:text-base font-medium mt-2">
            <h4>Home</h4>
            <h4>. Pages</h4>
            <h4 className="text-pink">. About Us</h4>
          </div>
        </div>
      </div>

     {/* About Image and Content Section */}
<div className="container mx-auto px-4 md:px-6 lg:px-16 flex flex-col lg:grid lg:grid-cols-2 items-center gap-8 md:gap-12 py-8 md:py-12 lg:py-20">
  {/* Image Section */}
  <div className="relative flex justify-center lg:justify-start w-full">
    <div className="bg-[#2B3CAB] rounded-lg w-full sm:w-[80%] md:w-[70%] lg:w-[552px] h-[180px] sm:h-[200px] md:h-[240px] relative">
      <Image
        src="/images/aboutOne.png"
        alt="about image"
        height={390}
        width={555}
        objectFit="cover"
        className="absolute left-[5%] rounded-lg shadow-lg sm:h-[190px] md:h-[230px]"
      />
    </div>
  </div>

  {/* Text Content */}
  <div className="text-center lg:text-left px-4">
    <h2 className="text-blue font-josefin text-3xl md:text-4xl leading-[36px] md:leading-[48px] font-bold mb-4">
      Know About Our Ecommerce Business, History
    </h2>
    <p className="text-[#8A8FB9] font-lato text-sm md:text-base leading-relaxed mb-6 md:mb-8">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
      ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique
      amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis
      quis bibendum quam.
    </p>
    <button className="bg-pink text-white font-lato rounded-[3px] px-4 py-2 md:px-6 md:py-3">
      Contact Us
    </button>
  </div>
</div>


      {/* Offers Section */}
      <Offers />

      {/* Client Testimonials */}
      <div className="bg-[#FBFBFF] py-8 md:py-12 lg:py-28">
        <div className="container mx-auto px-4 md:px-6 lg:px-16">
          <h2 className="text-2xl md:text-[42px] font-bold text-center mb-6 md:mb-10 font-josefin">
            Our Client Say!
          </h2>

          {/* Client Images */}
          <div className="flex justify-center gap-6 md:gap-20 mb-6 md:mb-8 relative">
            <Image
              src="/images/client1.png"
              alt="client 1"
              width={45}
              height={45}
              className="w-[45px] md:w-[55px]"
            />
            <Image
              src="/images/client2.png"
              alt="client 2"
              width={45}
              height={45}
              className="absolute bottom-0 w-[45px] md:w-[55px]"
            />
            <Image
              src="/images/client3.png"
              alt="client 3"
              width={45}
              height={45}
              className="w-[45px] md:w-[55px]"
            />
          </div>

          {/* Testimonial Text */}
          <div className="text-center font-lato max-w-md md:max-w-2xl mx-auto">
            <h3 className="text-lg md:text-[22px] font-bold mb-1">Selina Gomez</h3>
            <h6 className="text-[#8A8FB9] text-[10px] md:text-[12px] mb-4">
              CEO At Webecy Digital
            </h6>
            <p className="text-[#8A8FB9] text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis
              ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim
              nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam
              lacus volutpat praesent.
            </p>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 md:mt-8 gap-1">
            <div className="h-[2px] w-[12px] md:h-[3px] md:w-[18px] bg-[#FF75B0]"></div>
            <div className="h-[2px] w-[18px] md:h-[3px] md:w-[27px] bg-pink"></div>
            <div className="h-[2px] w-[12px] md:h-[3px] md:w-[18px] bg-[#FF75B0]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
