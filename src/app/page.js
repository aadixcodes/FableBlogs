import Image from "next/image";
import Hero from "@/components/Hero";
import LatestBlogs from "@/components/LatestBlogs";
import LatestStories from "@/components/LatestStories";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";
import Interesting from "@/components/Interesting";

export default function Home() {
  return (
    <>
    <Hero />
    <LatestBlogs />
    <LatestStories />
    <Subscribe />
    <Interesting />
    <Footer />
    </>
  );
}
