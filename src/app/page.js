import Image from "next/image";
import Hero from "@/components/Hero";
import LatestBlogs from "@/components/LatestBlogs";
import LatestStories from "@/components/LatestStories";

export default function Home() {
  return (
    <>
    <Hero />
    <LatestBlogs />
    <LatestStories />
    </>
  );
}
