import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "./home/HeroSection";
import Carousel from "./home/CarouselSection";
import ProductsSection from "./home/ProductsSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <Carousel />
      <HeroSection />
      <ProductsSection />
      <Footer />
    </>
  );
}



