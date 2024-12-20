import ProductCard from "@/components/ProductCard";
import { Product } from "@/types";

const ProductsSection = () => {
  const newProducts: Product[] = [
    { 
      id: 1, 
      name: "AudiLibres", 
      description: "Manos libres", 
      price: 35, 
      image: "/images/AudiLibres.PNG",
      code: "PROD-001"
    },
    { 
      id: 2, 
      name: "BocinaBart", 
      description: "Bocina Inalambrica", 
      price: 25, 
      image: "/images/BocinaBart.png",
      code: "PROD-002"
    },
    { 
      id: 3, 
      name: "CamaraSeg", 
      description: "Camara de seguridad", 
      price: 45, 
      image: "/images/CamaraSeg.png",
      code: "PROD-003"
    },
    { 
      id: 4, 
      name: "CargadorU", 
      description: "Cargador universal", 
      price: 55, 
      image: "/images/CargadorU.png",
      code: "PROD-004"
    },
  ];

  const featuredProducts: Product[] = [
    { 
      id: 5, 
      name: "CartRemano", 
      description: "Cartucho Remano", 
      price: 30, 
      image: "/images/CartRemano.png",
      code: "PROD-005"
    },
    { 
      id: 6, 
      name: "CronometroDep", 
      description: "Cronometro Deportivo", 
      price: 27, 
      image: "/images/CronometroDep.png",
      code: "PROD-006"
    },
    { 
      id: 7, 
      name: "MousePath", 
      description: "Mouse Path Simpson", 
      price: 40, 
      image: "/images/MousePath.png",
      code: "PROD-007"
    },
    { 
      id: 8, 
      name: "SterenCam", 
      description: "Camara Steren", 
      price: 50, 
      image: "/images/SterenCam.png",
      code: "PROD-008"
    },
    { 
      id: 9, 
      name: "TintaGen2", 
      description: "Toner Gen2", 
      price: 70, 
      image: "/images/TintaGen2.png",
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



