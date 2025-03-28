import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"

const Header: React.FC = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

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
      <div className="bg-gray-100 py-2 px-4 flex place-content-center items-center text-sm">
        <span>¿Quieres ser Distribuidor?</span>
        <button className="bg-[#0b4468] hover:bg-[#de1c85] text-white px-4 py-1 rounded hover:bg-[#de1c85]">
          <a href="register">REGÍSTRATE</a>
        </button>
      </div>

      {/* Barra principal */}
      <div className="bg-[#0072b1] place-content-center text-white px-4 py-3 flex items-center">
        {/* Logo */}
        <div className="flex items-center">
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
        <form onSubmit={handleSearch} className="flex items-center w-full max-w-xl mx-4">
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
        <div className="flex space-x-4">
          <a
            href="/billing"
            className="bg-transparent border border-white text-white px-4 py-2 rounded-full hover:bg-[#de1c85] hover:border-[#de1c85]"
          >
            <i className="pi pi-file mr-2"></i>Facturación
          </a>
          <a
            href="/login"
            className="bg-[#de1c85] text-white px-4 py-2 rounded-full hover:bg-pink-600"
          >
            <i className="pi pi-user mr-2"></i>Iniciar Sesión
          </a>
          <a
            href="/cart"
            className="bg-transparent border border-white text-white px-4 py-2 rounded-full hover:bg-[#de1c85] hover:border-[#de1c85]"
          >
            <i className="pi pi-shopping-cart mr-2"></i>Carrito
          </a>
        </div>
      </div>

      {/* Menú de navegación */}
      <nav className="bg-[#005a90] text-white py-3">
        <ul className="flex justify-center space-x-6">
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


