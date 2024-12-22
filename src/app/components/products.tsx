import { FiShoppingCart, FiHeart, FiSearch } from "react-icons/fi";

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
      className="container mx-auto px-4 py-8 mb-12"
      style={{ backgroundColor: "white" }}
    >
      <h1 className="text-[32px] md:text-[42px] font-bold leading-[1.2] font-josefin text-center text-blue mb-12">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mt-20">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full max-w-[360px] h-auto bg-white flex flex-col items-start relative group"
          >
            {/* Garland "On Sale" */}
            <div className="absolute top-4 left-4 bg-[#3F509E] text-white text-xs font-bold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             Sale
            </div>

            {/* Image Section */}
            <img
              src={`/images/${product.id}.png`}
              alt={product.name}
              className="w-full h-[260px] object-contain"
            />

            {/* Icons - Left Vertical */}
            <div className="absolute left-4 bottom-14 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-blue-100 p-2 rounded-full shadow-md text-[#2F1AC4]">
                <FiShoppingCart size={12} />
              </button>
              <button className="bg-blue-100 p-2 rounded-full shadow-md text-[#2F1AC4]">
                <FiHeart size={12} />
              </button>
              <button className="bg-blue-100 p-2 rounded-full shadow-md text-[#2F1AC4]">
                <FiSearch size={12} />
              </button>
            </div>

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
