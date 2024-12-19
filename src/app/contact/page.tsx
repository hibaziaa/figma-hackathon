import React from "react";

const Contact = () => {
  const contactData = [
    {
      title: "Tel: 877-67-88-99",
      des: "E-Mail: shop@store.com",
      pic: "/images/contact2.png",
    },
    {
      title: "Support Forum",
      des: "For over 24hr",
      pic: "/images/contact3.png",
    },
    {
      title: "20 Margaret st, London",
      des: "Great britain, 3NM98-LK",
      pic: "/images/contact4.png",
    },
    {
      title: "Free standard shipping",
      des: "on all orders.",
      pic: "/images/contact5.png",
    },
  ];

  return (
    <div>
      <div className="bg-[#F6F5FF]">
        <div className="container mx-auto px-4 md:px-6 lg:px-16 pt-6 pb-6 md:pt-[50px] md:pb-[50px]">
          <h2 className="text-blue font-josefin text-3xl md:text-4xl leading-[36px] md:leading-[42.19px]">
            Contact Us
          </h2>
          <div className="flex gap-2 font-lato text-sm md:text-base font-medium mt-2">
            <h4>Home</h4>
            <h4>. Pages</h4>
            <h4 className="text-pink">. Contact Us</h4>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-40">
  <div className="md:container md:px-[1.3rem] px-[.8rem] md:grid grid-cols-2 md:gap-28 md:mt-32 mt-12 md:mb-20">
    <div>
      <h2 className="text-blue md:mb-6 font-josefin font-bold text-[28px] md:text-[34px]">
        Information Contact Us
      </h2>
      <p className="text-[#9295AA] text-[14px] md:text-[16px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
      </p>
      <div className="flex h-3 w-[80px] gap-2 md:mt-8 mt-4">
        <div className="h-5 w-5 rounded-full bg-blue"></div>
        <div className="h-5 w-5 rounded-full bg-pink"></div>
        <div className="h-5 w-5 rounded-full bg-[#37DAF3]"></div>
      </div>
    </div>
    <div>
      <h2 className="text-blue md:mb-6 font-josefin mt-8 font-extrabold text-[28px] md:text-[34px]">
        Contact Way
      </h2>
      <div className="md:grid grid-cols-2 gap-12">
        {contactData.map((item) => (
          <div className="flex items-center gap-4 mb-8" key={item.title}>
            <div>
              <img src={item.pic} alt="bullet points" />
            </div>
            <div>
              <h4 className="font-lato text-[#9295AA] text-[16px] font-medium">
                {item.title}
              </h4>
              <h4 className="text-[16px] font-medium font-lato text-[#9295AA]">
                {item.des}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  <div className="md:container md:px-[1.3rem] px-[.8rem]">
    <div className="md:grid grid-cols-2 md:gap-6 md:mb-28">
      <div>
        <h2 className="text-blue font-josefin font-extrabold text-[28px] md:text-[34px]">
          Get In Touch
        </h2>
        <p className="text-[#8A8FB9] text-[14px] md:text-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.
        </p>
        <div className="mt-4">
          <div className="flex justify-between">
            <input
              className="border-gray-300 border-2 p-2 h-[50px] rounded-md w-[45%] my-6"
              placeholder="Your Name*"
              type="text"
              name="name"
              id="name"
            />
            <input
              className="border-gray-300 border-2 p-2 h-[50px] w-[45%] rounded-md my-6"
              placeholder="Your E-mail"
              type="text"
              name="email"
              id="email"
            />
          </div>
          <input
            className="border-gray-300 border-2 p-2 h-[50px] rounded-md w-full md:my-6 mb-6"
            placeholder="Subject*"
            type="text"
            name="subject"
            id="subject"
          />
          <textarea
            className="w-full border-gray-300 border-2 p-2 h-[197px] rounded-md md:my-6 mb-6"
            placeholder="Type Your Message*"
            name="comment"
            form="userform"
          ></textarea>
          <button className="md:my-6 bg-pink text-white text-[14px] md:text-[17px] md:px-11 px-8 md:py-3 py-2 rounded-[3px] font-josefin font-medium">
            Send Mail
          </button>
        </div>
      </div>
      <div className="md:mt-0 mt-12 mb-12 md:mb-0">
        <img src="/images/contact1.png" alt="contact" />
      </div>
    </div>
  </div>
</div>

    </div>

  );
};

export default Contact;
