import ProductCard from "@/components/ProductCard";
import { Product } from "@/types";
import { fetchProducts } from "@/services/productService";
import { useState, useEffect } from 'react';

const ProductsSection = () => {
  
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        setError('Error al cargar productos. Por favor, intenta de nuevo más tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, []);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const newProducts = products.slice(0, 4); // Primeros 4 productos
  const featuredProducts = products.slice(4, 8);
  const offerProducts = products.slice(8, 12);

  return (
    <section className="p-8">
      {/* Ofertas */}
      <h2 className="text-2xl font-bold mb-4">Ofertas</h2>
      <div className="grid grid-cols-1 gap-4 justify-items-center mb-8
      md:grid-cols-2 lg:grid-cols-4
      max-1024:grid-cols-2 max-1024:gap-2">
        {offerProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {/* Nuevos productos */}
      <h2 className="text-2xl font-bold mb-4">Productos Nuevos</h2>
      <div className="grid grid-cols-1 gap-4 justify-items-center mb-8
      md:grid-cols-2 lg:grid-cols-4  
      max-1024:grid-cols-2 max-1024:gap-2">
        {newProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {/* Productos destacados */}
      <h2 className="text-2xl font-bold mb-4">Productos Destacados</h2>
      <div className="grid grid-cols-1 gap-4 justify-items-center
      md:grid-cols-3 lg:grid-cols-4 
      max-1024:grid-cols-2 max-1024:gap-2">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
