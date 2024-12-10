export default function Products() {
  const products = [
    { id: 7, name: "Comfort Handy Craft", price: "$42.00", oldPrice: "$65.00" },
    { id: 8, name: "Comfort Handy Craft", price: "$42.00", oldPrice: "$65.00" },
    { id: 9, name: "Comfort Handy Craft", price: "$42.00", oldPrice: "$65.00" },
    {
      id: 10,
      name: "Comfort Handy Craft",
      price: "$42.00",
      oldPrice: "$65.00",
    },
    {
      id: 11,
      name: "Comfort Handy Craft",
      price: "$42.00",
      oldPrice: "$65.00",
    },
    {
      id: 12,
      name: "Comfort Handy Craft",
      price: "$42.00",
      oldPrice: "$65.00",
    },
  ];

  interface ProductCardProps {
    image: string;
    name: string;
    price: string;
    oldPrice: string;
  }

  return (
    <div
      className="container mx-auto px-4 py-8"
      style={{ backgroundColor: "white" }}
    >
      <h1 className="text-[32px] md:text-[42px] font-bold leading-[1.2px] font-josefin text-center text-[#1A0B5B] mb-8">
        Latest Products
      </h1>
      <div className="flex justify-center space-x-8 gap-4 text-[#151875] mt-12">
        <a href="#" className="text-[#FB4997] font-semibold">
          New Arrival
        </a>
        <a href="#" className="hover:text-[#FB4997]">
          Best Seller
        </a>
        <a href="#" className="hover:text-[#FB4997]">
          Featured
        </a>
        <a href="#" className="hover:text-[#FB4997]">
          Special Offer
        </a>
      </div>

      {/* Container for the product cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16 mt-20">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full max-w-[360px] h-auto bg-white flex flex-col items-start"
          >
            {/* Image Section */}
            <img
              src={`/images/${product.id}.png`}
              alt={product.name}
              className="w-full h-[260px] object-contain"
            />
            {/* Text Section */}
            <div className="p-2 w-full flex justify-between items-center font-josefin">
              {/* Product Name */}
              <h3 className="text-[16px] font-medium text-[#151875] border-b-2 border-[#EEEFFB] pb-1">
                {product.name}
              </h3>
              {/* Price Section */}
              <div className="flex items-center gap-2">
                <span className="text-[14px] font-semibold text-[#151875]">
                  {product.price}
                </span>
                {product.oldPrice && (
                  <span className="text-[12px] font-medium text-[#FB2448] line-through">
                    {product.oldPrice}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
