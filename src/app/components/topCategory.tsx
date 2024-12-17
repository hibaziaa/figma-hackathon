const TopCategory = () => {
    const topCatagoriesData = [
      {
        pic: "/images/top1.png",
        title: "Mini LCW Chair",
        price: "$56.00",
      },
      {
        pic: "/images/top2.png",
        title: "Mini LCW Chair",
        price: "$56.00",
      },
      {
        pic: "/images/top3.png",
        title: "Mini LCW Chair",
        price: "$56.00",
      },
      {
        pic: "/images/top4.png",
        title: "Mini LCW Chair",
        price: "$56.00",
      },
    ];
  
    return (
      <div className=" px-[.8rem] lg:px-40 lg:mt-32 mt-12">
        <h1 className="text-3xl font-bold text-center text-blue mb-8 font-josefin">
          Top Categories
        </h1>
  
        <div className="w-full lg:flex gap-3 2xl:gap-9">
          {topCatagoriesData.map((item) => {
            return (
              <div className="w-full lg:w-1/4 p-2">
                <div className="flex justify-center">
                  <div>
                    <div className="relative flex justify-center bg-[#31208A0D] shadow-primary 2xl:h-[269px] h-[220px] w-[220px] 2xl:w-[269px] p-6 rounded-full overflow-hidden">
                      <img
                        src={item.pic}
                        alt=""
                        className="w-full h-full object-cover rounded-full"
                      />
                      <div className="absolute bottom-4 bg-green-500 text-white text-center py-1 px-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <button className="text-sm font-medium">View Shop</button>
                      </div>
                    </div>
  
                    <div className="text-center mt-6 text-blue md:mb-0 mb-16">
                      <h3 className="font-josefin font-medium">{item.title}</h3>
                      <h4>{item.price}</h4>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  
  export default TopCategory;
  