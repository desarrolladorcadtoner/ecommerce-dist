import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import { Badge } from 'primereact/badge';
import { useCart } from "@/context/CartContext";

const Header: React.FC = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()
  const { cartItems } = useCart(); // Obtener los productos del carrito

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
        <span className="xl:mr-8 md:mr-8">¿Quieres ser Distribuidor?</span>
        <button className="bg-[#0b4468] hover:bg-[#de1c85] text-white px-4 py-1 rounded hover:bg-[#de1c85]">
          <a href="register">REGÍSTRATE</a>
        </button>
      </div>

      {/* Barra principal */}
      <div className="bg-[#0072b1] place-content-evenly text-white px-4 py-3 flex items-center
      sm:flex-col sm:items-center sm:space-x-0 sm:space-y-2">
        {/* Logo */}
        <div className="flex items-center max-1024:w-60 sm:w-40 sm:justify-center sm:mb-2">
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
        <form onSubmit={handleSearch} className="flex items-center w-full max-w-xl mx-4 ">
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
        <div className="flex space-x-6">
          <a
            href="/billing"
            className="bg-transparent border border-white text-white px-4 py-2 rounded-full 
              hover:bg-[#de1c85] hover:border-[#de1c85]
              max-1024:p-0 max-1024:flex max-1024:flex-col max-1024:justify-center max-1024:items-center max-1024:w-16 max-1024:h-16 max-1024:rounded-full 
              sm:p-0 sm:flex sm:flex-col sm:justify-center sm:items-center sm:w-16 sm:h-16 sm:rounded-full"
          >
            <i className="pi pi-file mr-2 max-1024:mt-5 max-1024:ml-2"></i>
            <span className="max-1024:text-transparent">Facturación</span>
          </a>
          <a
            href="/login"
            className="bg-[#de1c85] text-white px-4 py-2 rounded-full hover:bg-pink-600
            max-1024:p-0 max-1024:flex max-1024:flex-col max-1024:justify-center max-1024:items-center max-1024:w-16 max-1024:h-16 max-1024:rounded-full max-1024:border max-1024:border-white"
          >
            <i className="pi pi-user mr-2 max-1024:mt-10 max-1024:ml-2"></i>
            <span className="max-1024:text-transparent">Iniciar Sesión</span>
          </a>
          <a
            href="/cart"
            className="relative bg-transparent border border-white text-white px-4 py-2 rounded-full hover:bg-[#de1c85] hovzer:border-[#de1c85] flex items-center
            max-1024:p-0 max-1024:flex max-1024:flex-col max-1024:justify-center max-1024:items-center max-1024:w-16 max-1024:h-16 max-1024:rounded-full max-1024:border max-1024:border-white"
          >
            <i className="pi pi-shopping-cart p-overlay-badge text-2xl
            max-1024:mt-6 max-1024:mr-1">
              <Badge
                value={totalQuantity}
                severity="success"
                className=" bg-[#de1c85] text-white text-xs font-bold flex items-center justify-center"
              />
            </i>
            <span className="ml-2 max-1024:text-transparent">Carrito</span>
          </a>
        </div>

      </div>

      {/* Menú de navegación */}
      <nav className="headerMenu bg-[#005a90] text-white py-3 sm:flex sm:justify-center">
        <ul className="flex justify-center space-x-6 xl:space-x-8 sm:space-x-4 sm:flex-col sm:space-y-2">
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


