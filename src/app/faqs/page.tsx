import React from 'react';
import BrandsImg from '../components/brands';

const faqs = () => {

    const faqsData = [
        {
            title: "Eu dictumst cum at sed euismood condimentum?",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
        },
        {
            title: "Magna bibendum est fermentum eros.",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
        },
        {
            title: "Odio muskana hak eris conseekin sceleton?",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
        },
        {
            title: "Elit id blandit sabara boi velit gua mara?",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
        },
    ]

  return (
    <div>
      
      <div className="bg-[#F6F5FF]">
        <div className="container mx-auto px-4 md:px-6 lg:px-16 pt-6 pb-6 md:pt-[50px] md:pb-[50px]">
          <h2 className="text-blue font-josefin text-3xl md:text-4xl leading-[36px] md:leading-[42.19px]">
            Faq
          </h2>
          <div className="flex gap-2 font-lato text-sm md:text-base font-medium mt-2">
            <h4>Home</h4>
            <h4>. Pages</h4>
            <h4 className="text-pink">. Faq</h4>
          </div>
        </div>
      </div>

      <div className="md:container mx-auto md:px-20 px-8 md:grid grid-cols-2 gap-16 md:mt-32 mt-12 mb-10 md:mb-32">
  <div>
    <h2 className="text-blue font-bold font-josefin text-[28px] md:text-[34px]">
      General Information
    </h2>

    <div>
      {faqsData.map((item) => (
        <div key={item.title}>
          <div className="my-6 md:my-16">
            <h3 className="text-blue text-[16px] md:text-[18px] font-bold font-lato">
              {item.title}
            </h3>
            <h4 className="text-[#9295AA] md:mt-4 text-[16px] font-josefin font-medium">
              {item.des}
            </h4>
          </div>
        </div>
      ))}
    </div>
  </div>

  <div className="bg-[#F6F5FF] rounded-md">
    <h3 className="text-blue text-[24px] md:p-12 p-2 pt-5 mt-5 md:text-[18px] font-bold font-lato">
      Ask a Question
    </h3>
    <div className="mt-4 md:p-12 p-2 pb-7">
      <input
        className="border-gray-300 h-[50px] rounded-md w-full md:my-6 my-4 border-2 p-2"
        placeholder="Your Name"
        type="text"
      />
      <input
        className="border-gray-300 h-[50px] rounded-md w-full md:my-6 border-2 p-2"
        placeholder="Subject*"
        type="text"
      />
      <textarea
        className="w-full border-gray-300 h-[197px] rounded-md md:my-6 my-4 border-2 p-2"
        placeholder="Type Your Message*"
      ></textarea>

      <button className="md:my-6 bg-pink text-white text-[14px] md:text-[17px] md:px-11 px-8 md:py-3 py-2 rounded-sm font-josefin font-medium hover:bg-[#d1236e]">
        Send Mail
      </button>
    </div>
  </div>
</div>


       <BrandsImg/>


    </div>
  )
}

export default faqs;