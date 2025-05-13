import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import { Badge } from 'primereact/badge';
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import ToggleMenu from '@/components/ToggleMenu';
import { LogOut } from "lucide-react";

const Header: React.FC = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Estado para controlar la visibilidad del input de búsqueda
  const [visibleRight, setVisibleRight] = useState<boolean>(false);
  const router = useRouter()
  const { cartItems } = useCart(); // Obtener los productos del carrito
  const { isAuthenticated, logout } = useAuth();

  // Calcular el total de cantidades en el carrito
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const productCategories = [
    "Cartuchos de Toner",
    "Cartuchos de Tinta",
    "Insumos de Toner",
    "Insumos de Tinta",
    "Tinta a Granel",
    "Refacciones",
    "Electronica",
    "Papeleria",
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?query=${searchQuery}`)
    }
  }

  return (
    <header>
      {/* Barra superior */}
      <div className="
      bg-gray-100 py-2 px-4 flex 
      xl:place-content-center  
      md:place-content-center 
      sm:place-content-evenly ">
        {isAuthenticated ? (
          <>

            <span className="xl:mr-8 md:mr-8">Bienvenido <strong>Usuiario</strong> Cuenta: <strong>000000</strong> </span>
          </>
        ) : (
          <>
            <span className="xl:mr-8 md:mr-8">¿Quieres ser Distribuidor?</span>
            <button className="bg-[#0b4468] hover:bg-[#de1c85] text-white px-4 py-1 rounded hover:bg-[#de1c85]">
              <a href="register">REGÍSTRATE</a>
            </button>
          </>
        )}

      </div>

      {/* Barra principal */}
      <div className="bg-[#0072b1] place-content-evenly text-white px-4 py-3 flex items-center
      sm:flex-col sm:items-center sm:space-x-0 sm:h-[150px]">
        {/* Logo */}
        <div className="flex items-center 
        max-1024:w-60 
        sm:w-60 sm:justify-center">
          <a href="/">
            <Image
              src="/images/logo-cadtoner.png"
              alt="CadToner Logo"
              height={50}
              width={150}
              className="cursor-pointer"
            />
          </a>
        </div>

        {/* Barra de búsqueda */}
        <form onSubmit={handleSearch} className="flex items-center w-full max-w-xl mx-4 sm:hidden">
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow px-4 py-2 rounded-l border-none outline-none text-[#5c5c66]"
          />
          <button type="submit" className="bg-[#0b4468] px-4 py-2 text-white font-semibold rounded-r hover:bg-[#de1c85]">
            BUSCAR
          </button>
        </form>

        {/* Botones a la derecha */}
        <div className="flex space-x-6 
        sm:space-x-14 relative">
          {isAuthenticated && (
            <a
              href="/billing"
              className="bg-transparent border border-white text-white px-4 py-4 rounded-full 
              hover:bg-[#de1c85] hover:border-[#de1c85]
              max-1024:p-0 max-1024:flex max-1024:flex-col max-1024:justify-center max-1024:items-center max-1024:w-16 max-1024:h-16 max-1024:rounded-full 
              sm:p-0 sm:flex sm:flex-col sm:justify-center sm:items-center sm:w-16 sm:h-16 sm:rounded-full sm:relative sm:hidden"
            >
              <i className="pi pi-file mr-2
             max-1024:mt-2 max-1024:ml-2
             sm:ml-2"></i>
              <span className="max-1024:text-transparent 
            sm:absolute sm:top-[60px]">Facturación</span>
            </a>)}

          {isAuthenticated ? (
            <button
              onClick={() => {
                setVisibleRight(true); //abrir panel del lado derecho
              }}
              className="bg-[#de1c85] text-white px-4 py-4 rounded-full hover:bg-pink-600
            max-1024:p-0 max-1024:flex max-1024:flex-col max-1024:justify-center max-1024:items-center max-1024:w-16 max-1024:h-16 max-1024:rounded-full max-1024:border max-1024:border-white
            sm:p-0 sm:flex sm:flex-col sm:justify-center sm:items-center sm:w-16 sm:h-16 sm:rounded-full sm:relative sm:hidden"
            >
              <i className="pi pi-user mr-2 
            max-1024:mt-10 max-1024:ml-2
            sm:ml-2"></i>
              <span className="max-1024:text-transparent
            sm:absolute sm:top-[60px] sm:left-[10px]">Perfil</span>
            </button>
          ) : (
            <a
              href="/login"
              className="bg-[#de1c85] text-white px-4 py-4 rounded-full hover:bg-pink-600
            max-1024:p-0 max-1024:flex max-1024:flex-col max-1024:justify-center max-1024:items-center max-1024:w-16 max-1024:h-16 max-1024:rounded-full max-1024:border max-1024:border-white
            sm:p-0 sm:flex sm:flex-col sm:justify-center sm:items-center sm:w-16 sm:h-16 sm:rounded-full sm:relative sm:hidden"
            >
              <i className="pi pi-user mr-2 
            max-1024:mt-10 max-1024:ml-2
            sm:ml-2"></i>
              <span className="max-1024:text-transparent
            sm:absolute sm:top-[60px] sm:left-[10px]">Iniciar Sesión</span>
            </a>
          )}

          <Sidebar 
          visible={visibleRight} 
          position="right" 
          onHide={() => setVisibleRight(false)}
          >
            <div className="sidebarLeft my-4 text-[#de1c85]">
              <h2 className="my-2 text-[#005a90]">Perfil Usuario</h2>
              <ol>
                <li className="mb-4 " ><a href="">Opcion 1</a></li>
                <li className="mb-4"><a href="">Opcion 2</a></li>
                <li className="mb-4"><a href="">Opcion 3</a></li>
                <li className="mb-4"><a href="">Opcion 4</a></li>
              </ol>
            </div>
            
            <Button onClick={logout} label="Cerrar Sesion" severity="secondary" className="text-[#005a90]"/>
          </Sidebar>

          {isAuthenticated && (<a
            href="/cart"
            className="relative bg-transparent border border-white text-white px-4 py-2 rounded-full hover:bg-[#de1c85] hover:border-[#de1c85] flex items-center
            max-1024:p-0 max-1024:flex max-1024:flex-col max-1024:justify-center max-1024:items-center max-1024:w-16 max-1024:h-16 max-1024:rounded-full max-1024:border max-1024:border-white
            sm:p-0 sm:flex sm:flex-col sm:justify-center sm:items-center sm:w-16 sm:h-16 sm:rounded-full sm:relative sm:hidden"
          >
            <i className="pi pi-shopping-cart p-overlay-badge text-2xl
            max-1024:mt-6 max-1024:mr-1 
            sm:ml-0 sm:mr-1">
              <Badge
                value={totalQuantity}
                severity="success"
                className=" bg-[#de1c85] text-white text-xs font-bold flex items-center justify-center"
              />
            </i>
            <span className="ml-2 max-1024:text-transparent
            sm:absolute sm:top-[60px]">Carrito</span>
          </a>)}
        </div>

      </div>

      {/* Menú de navegación */}
      <nav className="headerMenu bg-[#005a90] text-white h-auto sm:flex sm:justify-between ">
        {/* Mostrar ToggleMenu solo en resoluciones menores a 760px */}
        <div className="flex md:hidden sm:ml-[10px] sm:rounded hover:bg-[#de1c85]">
          <ToggleMenu />
        </div>
        <div className="flex items-center md:hidden relative">
          {/* Input de búsqueda con animación */}
          {isSearchOpen && (
            <form
              onSubmit={handleSearch}
              className="absolute top-2 left-[-200] bg-white text-black rounded-lg shadow-lg flex items-center px-4 py-2 w-64 transition-transform duration-300 transform translate-x-0 sm:w-48"
            >
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-grow w-[50] h-[15] px-2 py-1 border-none outline-none text-black"
              />
              {/*<button type="submit" className="text-[#005a90] hover:text-[#de1c85]">
                Buscar
              </button>*/}
            </form>
          )}

          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)} // Alternar visibilidad del input
            className="bg-transparent px-2 py-2 rounded-full sm:p-0 sm:flex sm:flex-col sm:justify-center sm:items-center sm:w-12 sm:h-12"
          >
            <i className="pi pi-search mr-2 max-1024:mt-5 max-1024:ml-2"></i>
          </button>
          {/*<a            
            className="bg-transparent px-4 py-2 rounded-full 
            sm:p-0 sm:flex sm:flex-col sm:justify-center sm:items-center sm:w-12 sm:h-12 m:relative "
          >
            <i className="pi pi-search mr-2
             max-1024:mt-5 max-1024:ml-2"></i>
          </a>*/}
          <a
            href="/login"
            className="bg-transparent px-4 py-2 rounded-full 
            sm:p-0 sm:flex sm:flex-col sm:justify-center sm:items-center sm:w-12 sm:h-12 m:relative "
          >
            <i className="pi pi-user mr-2
             max-1024:mt-5 max-1024:ml-2"></i>
          </a>
          <a
            href="/cart"
            className="bg-transparent px-4 py-2 rounded-full 
            sm:p-0 sm:flex sm:flex-col sm:justify-center sm:items-center sm:w-12 sm:h-12 m:relative "
          >
            <i className="pi pi-shopping-cart mr-2
             max-1024:mt-5 max-1024:ml-2"><Badge
                value={totalQuantity}
                severity="success"
                className=" bg-[#de1c85] text-white text-xs font-bold flex items-center justify-center sm:absolute sm:top-[0px] sm:left-[120px]"
              /></i>
          </a>
        </div>

        {/* Mostrar lista de navegación solo en resoluciones mayores o iguales a 760px */}
        <ul className="flex justify-center items-center h-12 space-x-6 xl:space-x-8 sm:space-x-4 
        sm:flex-col sm:space-y-2 sm:hidden">
          <li>
            <Link href="/" className="flex items-center space-x-2 hover:text-[#de1c85]">
              <i className="pi pi-home"></i>
              <span>INICIO</span>
            </Link>
          </li>
          <li>
            <div className="relative">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex items-center space-x-2 hover:text-[#de1c85]"
              >
                <i className="pi pi-box"></i>
                <span>PRODUCTOS</span>
              </button>
              {isProductsOpen && (
                <div className="z-[999] absolute left-0 z-10 w-48 bg-[#005a90] py-2 rounded shadow-lg">
                  <ul>
                    {productCategories.map((category) => (
                      <li key={category} className="hover:bg-[#0072b1]">
                        <Link href={`/products?category=${category}`} className="block px-4 py-2 hover:text-[#de1c85]">
                          {category}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </li>
          <li>
            <Link href="/acerca" className="flex items-center space-x-2 hover:text-[#de1c85]">
              <i className="pi pi-info-circle"></i>
              <span>ACERCA DE CADTONER</span>
            </Link>
          </li>
          <li>
            <Link href="/contacto" className="flex items-center space-x-2 hover:text-[#de1c85]">
              <i className="pi pi-envelope"></i>
              <span>CONTACTO</span>
            </Link>
          </li>
          <li>
            <Link href="/cedis" className="flex items-center space-x-2 hover:text-[#de1c85]">
              <i className="pi pi-map-marker"></i>
              <span>CEDIS</span>
            </Link>
          </li>
        </ul>


      </nav>
    </header>
  )
}

export default Header


