import Discount from "@/app/components/sections/home/Discount";
import Feature from "@/app/components/sections/home/Feature";
import Hero from "@/app/components/sections/home/Hero";
import Leatest from "@/app/components/sections/home/Latest";
import LatestBlog from "@/app/components/sections/home/LatestBlog";
import Rofex from "@/app/components/sections/home/Rofex";
import TopCategories from "@/app/components/sections/home/TopCategories";
import TrendingProduct from "@/app/components/sections/home/TrendingProduct";
import Unique from "@/app/components/sections/home/Unique";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Feature />
      <Leatest />
      <Rofex />
      <Unique />
      <TrendingProduct />
      <Discount />
      <TopCategories />
      <LatestBlog />
    </main>
  );
}
