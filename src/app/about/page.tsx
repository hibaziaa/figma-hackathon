import React from "react";
import Offers from "../components/offer";
import Image from "next/image";

const About = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="bg-[#F6F5FF]">
        <div className="lg:container mx-auto px-6 lg:px-16 pt-[50px] pb-[50px]">
          <h2 className="text-blue font-josefin text-4xl leading-[42.19px]">
            About Us
          </h2>
          <div className="flex gap-2 font-lato text-base font-medium mt-2">
            <h4>Home</h4>
            <h4>. Pages</h4>
            <h4 className="text-pink">. About Us</h4>
          </div>
        </div>
      </div>

      {/* About Image and Content Section */}
      <div className="lg:container mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 py-12 lg:py-20">
        {/* Image Section */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="bg-[#2B3CAB] rounded-lg w-[90%] lg:w-[552px] h-[240px] lg:h-[409px] relative">
            <Image
              src="/images/aboutOne.png"
              alt="about image"
              height={390}
              width={555}
              objectFit="cover"
              className="absolute left-[5%] rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center lg:text-left">
          <h2 className="text-blue font-josefin text-4xl leading-[48px] font-bold mb-4">
            Know About Our Ecommerce Business, History
          </h2>
          <p className="text-[#8A8FB9] font-lato text-base leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
            ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique
            amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis
            quis bibendum quam.
          </p>
          <button className="bg-pink text-white font-lato rounded-[3px] px-6 py-3">
            Contact Us
          </button>
        </div>
      </div>

      {/* Offers Section */}
      <Offers />

      {/* Client Testimonials */}
      <div className="bg-[#FBFBFF] py-12 lg:py-28">
        <div className="lg:container mx-auto px-6 lg:px-16">
          <h2 className="text-[42px] font-bold text-center mb-10 font-josefin">
            Our Client Say!
          </h2>

          {/* Client Images */}
          <div className="flex justify-center gap-20 mb-8 relative">
            <Image
              src="/images/client1.png"
              alt="client 1"
              width={55}
              height={55}
              
            />
            <Image
              src="/images/client2.png"
              alt="client 2"
              width={55}
              height={55}
              className="absolute bottom-2"
            />
            <Image
              src="/images/client3.png"
              alt="client 3"
              width={55}
              height={55}
              
            />
          </div>

          {/* Testimonial Text */}
          <div className="text-center font-lato max-w-2xl mx-auto">
            <h3 className="text-[22px] font-bold mb-1">Selina Gomez</h3>
            <h6 className="text-[#8A8FB9] text-[12px] mb-4">
              CEO At Webecy Digital
            </h6>
            <p className="text-[#8A8FB9] text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis
              ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim
              nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam
              lacus volutpat praesent.
            </p>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-1">
            <div className="h-[3px] w-[18px] bg-[#FF75B0]"></div>
            <div className="h-[3px] w-[27px] bg-pink"></div>
            <div className="h-[3px] w-[18px] bg-[#FF75B0]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
