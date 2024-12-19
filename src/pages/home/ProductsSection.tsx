import ProductCard from "@/components/ProductCard";
import { Product } from "@/types";

const ProductsSection = () => {
  const newProducts: Product[] = [
    { 
      id: 1, 
      name: "Blue Long Sleeve Sweater", 
      description: "Stylish and warm", 
      price: 35, 
      image: "/images/sweater-blue.jpg",
      code: "PROD-001"
    },
    { 
      id: 2, 
      name: "Yellow Casual Sweater", 
      description: "Perfect for everyday wear", 
      price: 25, 
      image: "/images/sweater-yellow.jpg",
      code: "PROD-002"
    },
    { 
      id: 3, 
      name: "Classic Denim Pants", 
      description: "Comfortable fit", 
      price: 45, 
      image: "/images/denim-pants.jpg",
      code: "PROD-003"
    },
    { 
      id: 4, 
      name: "Black Checkered Jacket", 
      description: "Trendy design", 
      price: 55, 
      image: "/images/jacket-black.jpg",
      code: "PROD-004"
    },
  ];

  const featuredProducts: Product[] = [
    { 
      id: 5, 
      name: "Grey Casual Sweater", 
      description: "Comfortable for all seasons", 
      price: 30, 
      image: "/images/sweater-grey.jpg",
      code: "PROD-005"
    },
    { 
      id: 6, 
      name: "Yellow Sweater", 
      description: "Bright and cozy", 
      price: 27, 
      image: "/images/sweater-yellow-bright.jpg",
      code: "PROD-006"
    },
    { 
      id: 7, 
      name: "Denim Pants", 
      description: "Classic style", 
      price: 40, 
      image: "/images/denim-pants-classic.jpg",
      code: "PROD-007"
    },
    { 
      id: 8, 
      name: "Black Checkered Jacket", 
      description: "Elegant and modern", 
      price: 50, 
      image: "/images/jacket-checkered.jpg",
      code: "PROD-008"
    },
    { 
      id: 9, 
      name: "Twin Grey Coats", 
      description: "Perfect for cold weather", 
      price: 70, 
      image: "/images/grey-coats.jpg",
      code: "PROD-009"
    },
  ];

  return (
    <section className="p-8">
      {/* Nuevos productos */}
      <h2 className="text-2xl font-bold mb-4">Productos Nuevos</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {newProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Productos destacados */}
      <h2 className="text-2xl font-bold mb-4">Productos Destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;



