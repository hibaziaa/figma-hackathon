import React from "react";
import blogPostData from "./blogpostdata";

const BlogPost = () => {
  return (
    <div>
      <div>
        {blogPostData.map((item) => {
          return (
            <div>
              <div>
                <div>
                  <img src={item.pic} alt="" />
                </div>
                <div className="flex  gap-6 mt-7">
                  <div className="flex items-center  gap-2">
                    <img src="/images/pen.png" alt="sabir" />
                    <h6 className="bg-[#FFE7F9] px-6 rounded-sm text-blue font-medium">
                      Surf Auxion
                    </h6>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src="/images/calendar.png" alt="" />
                    <h6 className="bg-[#FFECE2] px-6 rounded-sm text-blue font-medium">
                      Aug 09 2020
                    </h6>
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    className="font-semibold text-blue font-josefin text-[30px] md:text-[1rem] hover:text-[#fb2e86]"
                    href={item.href}
                  >
                    {item.title}
                  </a>
                  <p className="text-[#9295AA] lg:w-[78%] mt-5 text-[14px] md:text-[16px]">
                    {item.des}
                  </p>
                  <h6 className="font-semibold text-blue mt-7 mb-6">
                    {item.footer}
                  </h6>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-center ">
        <h4 className="bg-pink px-3 rounded-sm text-white font-lato text-[16px]  font-medium">
          1
        </h4>
        <h4 className="border-2 px-3  rounded-sm text-[#9295AA] font-lato mx-10 text-[16px] font-medium">
          2
        </h4>
        <h4 className="border-2 px-3  text-[16px] font-medium rounded-sm text-[#9295AA] font-lato ">
          3
        </h4>
        <h4 className="border-2 px-3 text-[16px] font-medium rounded-sm text-[#9295AA] font-lato mx-10">
          4
        </h4>
      </div>
    </div>
  );
};

export default BlogPost;
