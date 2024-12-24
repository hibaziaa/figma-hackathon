import React from "react";

const RelatedProduct = () => {
  const relatedProductData = [
    {
      pic: "/images/related1.png",
      title: "Mens Fashion Wear",
      review: "/images/reviews.png",
      price: "$43.00",
    },
    {
      pic: "/images/related2.png",
      title: "Women’s Fashion",
      review: "/images/reviews.png",
      price: "$67.00",
    },
    {
      pic: "/images/related3.png",
      title: "Wolx Dummy Fashion",
      review: "/images/reviews.png",
      price: "$67.00",
    },
    {
      pic: "/images/related4.png",
      title: "Top Wall Digital Clock",
      review: "/images/reviews.png",
      price: "$51.00",
    },
  ];

  return (
    <div className="mx-auto px-4 md:px-40 mb-12">
      <h2 className="text-blue font-josefin font-extrabold text-[28px] md:text-[34px] mb-8">Related Products</h2>
      <div className=" md:flex justify-between gap-8  ">
        {relatedProductData.map((item , index) => {
          return (
            <div className="mb-8" key={index}>
              <div className="bg-white md:w-[270px] h-[340px]">
                <img className="w-full" src={item.pic} alt="review product" />
              </div>
              <div className="flex items-center justify-between md:mt-5 mt-[88px]">
                <h4 className="text-blue font-semibold text-[16px] font-josefin ">{item.title}</h4>
                <img src={item.review} alt="" />
              </div>
              <h6 className="text-blue">{item.price}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProduct;
