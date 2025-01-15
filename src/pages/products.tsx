import ProductCard from "@/components/ProductCard";
import { Product } from "@/types";
import { fetchProducts } from "@/services/productService";
import { useState, useEffect } from "react";
import Header from "@/components/Header";

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const PRODUCTS_PER_PAGE = 9;

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        setError("Error al cargar productos. Por favor, intenta de nuevo más tarde.");
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

  // Calcular productos de la página actual
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  // Calcular total de páginas
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  return (
    <>
      <Header />

      <div className="flex flex-col md:flex-row p-8">
        {/* Filtros - Panel Lateral */}
        <aside className="w-full md:w-1/4 pr-4 mb-8 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Filtros</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Categoría</label>
              <select className="w-full p-2 border rounded">
                <option value="">Todas</option>
                <option value="electronics">Electrónica</option>
                <option value="fashion">Moda</option>
                <option value="home">Hogar</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Rango de Precio</label>
              <input type="range" min="0" max="1000" className="w-full" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Ordenar por</label>
              <select className="w-full p-2 border rounded">
                <option value="new">Nuevos</option>
                <option value="low-to-high">Precio: Bajo a Alto</option>
                <option value="high-to-low">Precio: Alto a Bajo</option>
              </select>
            </div>
          </div>
        </aside>

        {/* Productos - Grid */}
        <main className="w-full md:w-3/4">
          <h2 className="text-2xl font-bold mb-4">Productos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Controles de paginación */}
          <div className="flex justify-between items-center mt-8">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className={`px-4 py-2 border rounded ${
                currentPage === 1 ? "bg-gray-300" : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              Anterior
            </button>
            <p>
              Página {currentPage} de {totalPages}
            </p>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              className={`px-4 py-2 border rounded ${
                currentPage === totalPages ? "bg-gray-300" : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              Siguiente
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default ProductsPage;
