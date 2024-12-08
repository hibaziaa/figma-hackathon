import LatestBlog from "./components/blogs";
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
    <LatestBlog />
    </>
  );
}
