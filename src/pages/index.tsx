import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "./home/HeroSection";
import Carousel from "./home/CarouselSection";
import ProductsSection from "./home/ProductsSection";
import AnimatedButton from "@/components/Buttons/AnimatedButton";

export default function HomePage() {
  return (
    <>
      <Header />
      <Carousel />
      <HeroSection />
      <ProductsSection />
      <div className="flex justify-center items-center m-14 ">
        <AnimatedButton />
      </div>
      <Footer />
    </>
  );
}



