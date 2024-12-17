import LatestBlog from "./components/latestBlog";
import BrandsImg from "./components/brands";
import FeaturedProduct from "./components/featuredProducts";
import Hero from "./components/hero";
import Offers from "./components/offer";
import Products from "./components/products";
import Discount from "./components/discount";
import Subscribe from "./components/subscribe";
import Trending from "./components/trending";
import UniqueProducts from "./components/UniqueProducts";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProduct />
      <Products />
      <Offers />
      <UniqueProducts/>
      <Trending />
      <Discount />
      <Subscribe />
      <BrandsImg />
      <LatestBlog />
    </>
  );
}
