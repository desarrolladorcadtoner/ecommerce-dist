import ProductCard from "@/components/ProductCard";
import { Product } from "@/types";
import { fetchProducts } from "@/services/productService";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Link from "next/link";
import AnimatedButton from '@/components/Buttons/AnimatedButton';
import { useCart } from "@/context/CartContext";
import { ProgressSpinner } from 'primereact/progressspinner';

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [layout, setLayout] = useState<"grid" | "list">("grid");
  const { addToCart } = useCart();

  const PRODUCTS_PER_PAGE = 9;

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        setError("Error al cargar productos. Por favor, intenta de nuevo más tarde.");
      } finally {
        setTimeout(() => setLoading(false), 500); // espera 500ms
      }
    };

    fetchProductData();
  }, []);

  if (loading) {
      return (
        <div className="card flex justify-content-center">
          <ProgressSpinner />
        </div>
      );
    }
  
    if (error && products.length === 0) {
      return (
        <div className="card flex flex-col items-center justify-center gap-4 p-6">
          <ProgressSpinner />
          <p className="text-red-600">{error}</p>
        </div>
      );
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
        <aside className="w-1/4 mr-4 p-2 mb-8 ml-0 rounded
        md:mb-0 max-1024:w-1/4 ">
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

        {/* Productos - Área Principal */}
        <main className="w-full md:w-3/4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Productos</h2>
            {/* Botones para cambiar de layout */}
            <div className="flex">
              <button
                onClick={() => setLayout("grid")}
                className={`p-2 border border-r-0 rounded-l ${layout === "grid"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700 hover:bg-blue-100"
                  }`}
              >
                <i className="pi pi-th-large"></i>
              </button>
              <button
                onClick={() => setLayout("list")}
                className={`p-2 border rounded-r ${layout === "list"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700 hover:bg-blue-100"
                  }`}
              >
                <i className="pi pi-bars"></i>
              </button>
            </div>
          </div>

          {layout === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-4 ">
              {currentProducts.map((product) => (
                <div key={product.id} className="flex p-4 border rounded items-center gap-4 shadow-md ">
                  {product.imagen && (
                    <div className="w-32 h-32 flex-shrink-0 overflow-hidden">
                      <img
                        src={product.imagen}
                        alt={product.nombre}
                        className="w-full h-full object-scale-down rounded"
                      />
                    </div>
                  )}
                  <div className="flex flex-col flex-1 ">
                    <h3 className="text-xl font-bold mb-2">{product.nombre}</h3>
                    <p className="text-gray-700 text-blue-500">{product.descripcion}</p>
                    <p className="text-lg text-blue-500 font-semibold mb-2">${product.precio}</p>
                    {product.referencia && (
                      <p className="text-xs text-gray-400">Referencia: {product.referencia}</p>
                    )}
                    {product.categoria && (
                      <p className="text-xs text-gray-400 mb-2">Categoría: {product.categoria}</p>
                    )}
                    <div className="flex gap-2 mt-2 ">
                      <Link
                        href={`/productDetail?id=${product.id}`}
                        className="text-blue-500 mr-4 hover:underline"
                      >
                        Ver detalles
                      </Link>
                      {/* Botón Agregar al carrito */}
                      <AnimatedButton onClick={() => addToCart(product)} />

                      {/*<button
                        className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-md transition"
                        onClick={() => addToCart(product)}
                      >
                        Añadir al Carrito
                      </button>*/}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Controles de paginación */}
          <div className="flex justify-between items-center mt-8">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className={`px-4 py-2 border rounded ${currentPage === 1
                ? "bg-gray-300"
                : "bg-blue-500 text-white hover:bg-blue-600"
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
              className={`px-4 py-2 border rounded ${currentPage === totalPages
                ? "bg-gray-300"
                : "bg-blue-500 text-white hover:bg-blue-600"
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
