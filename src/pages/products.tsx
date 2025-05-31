'use client'

import ProductCard from "@/components/ProductCard";
import ProductCardList from "@/components/ProductCardList";
import { Product } from "@/types";
import { fetchProducts } from "@/services/productService";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { Slider, SliderChangeEvent } from "primereact/slider";
//import { InputText } from "primereact/inputtext";

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [layout, setLayout] = useState<"grid" | "list">("grid");
  const { addToCart } = useCart();
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const { isAuthenticated } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState<string>("");


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

  {/*const filteredProducts = products.filter(product => {
    return product.precio >= priceRange[0] && product.precio <= priceRange[1];
  });*/}

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "" || product.categoria === selectedCategory;
    const matchesPrice = product.precio >= priceRange[0] && product.precio <= priceRange[1];
    return matchesCategory && matchesPrice;
  });

  // Calcular productos de la página actual
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  // Calcular total de páginas
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  return (
    <>
      <Header />

      <div className="bg-gray-200 flex flex-col md:flex-row p-8 sm:flex-col">
        {/* Filtros - Panel Lateral */}
        <aside className="bg-white w-1/4 mr-4 p-2 mb-8 ml-0 rounded
        md:mb-0 max-1024:w-1/4 
        sm:w-3/4 sm:mr-0 sm:mx-12">
          <h3 className="text-xl font-bold mb-4">Filtros</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Categoría</label>
              <hr className="h-4" />
              <select
                className="w-full p-2 border-2 border-slate-300 rounded"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">Todas</option>
                <option value="Xerox,">Xerox</option>
                <option value="HP,">HP</option>
                <option value="Brother,">Kyocera Mita</option>
                <option value="Konica Minolta">Konica Minolta</option>
                <option value="Canon,">Canon</option>
                <option value="Cartuchos de Tinta para:">Cartuchos de Tinta</option>
                <option value="Samsung,">Samsung</option>
              </select>
            </div>

            {isAuthenticated ? (
              <>
                <hr className="h-4" />
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Rango de Precio</label>
                  <div className="flex justify-between items-center mb-2">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                  {/*<InputText value={priceRange} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} className="w-full" />*/}
                  <Slider
                    value={priceRange}
                    onChange={(e: SliderChangeEvent) => setPriceRange(e.value as [number, number])}
                    range
                    min={0}
                    max={1000}
                    className="w-full"
                  />
                </div>
              </>
            ) : ("")}

            {/*<div>
              <label className="block text-gray-700 font-medium mb-2">Ordenar por</label>
              <select className="w-full p-2 border rounded">
                <option value="new">Nuevos</option>
                <option value="low-to-high">Precio: Bajo a Alto</option>
                <option value="high-to-low">Precio: Alto a Bajo</option>
              </select>
            </div>*/}
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
            <div className="grid grid-cols-1 sm:grid-cols-1 sm:mx-8 lg:grid-cols-3 gap-6">
              {currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            // Vista de lista          
            <div className="flex flex-col gap-4 ">
              {currentProducts.map((product) => (
                <ProductCardList key={product.id} product={product} />
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
