import '../styles/tailwind.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to Our Ecommerce Store</h1>
        <p className="text-lg text-gray-700">
          Explore our wide range of products and enjoy your shopping experience.
        </p>
      </main>
      <Footer />
    </div>
  );
}
