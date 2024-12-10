import LatestBlog from "./components/blogs";
import BrandsImg from "./components/brands";
import FeaturedProduct from "./components/featuredProducts";
import Hero from "./components/hero";
import Offers from "./components/offer";
import Products from "./components/products";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProduct />
      <Products />
      <Offers />
      <BrandsImg />
      <LatestBlog />
    </>
  );
}
