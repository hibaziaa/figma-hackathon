import React from "react";
import BlogPost from "./blogPost";
import BlogHistory from "./blogHistory";
import BrandsImg from "../components/brands";

const BlogPage = () => {
  return (
    <div>
      <div className="bg-[#F6F5FF]">
        <div className="container mx-auto px-4 md:px-6 lg:px-16 pt-6 pb-6 md:pt-[50px] md:pb-[50px]">
          <h2 className="text-blue font-josefin text-3xl md:text-4xl leading-[36px] md:leading-[42.19px]">
            Blog Page
          </h2>
          <div className="flex gap-2 font-lato text-sm md:text-base font-medium mt-2">
            <h4>Home</h4>
            <h4>. Pages</h4>
            <h4 className="text-pink">. Blog Page</h4>
          </div>
        </div>
      </div>
      <div className="lg:container lg:px-40 px-8 lg:flex lg:mt-32 lg:mb-20 mt-12 mx-auto gap-8">
  <div className="w-full">
    <BlogPost />
  </div>

  <div className="lg:w-[450px]">
    <BlogHistory />
  </div>
</div>

      <BrandsImg />
    </div>
  );
};

export default BlogPage;
