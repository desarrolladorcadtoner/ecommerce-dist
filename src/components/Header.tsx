import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header>
      {/* Barra superior */}
      <div className="bg-gray-100 py-2 px-4 flex place-content-center items-center text-sm">
        <span>¿Quieres ser Distribuidor?</span>
        <button className="bg-[#0b4468] hover:bg-[#de1c85] text-white px-4 py-1 rounded hover:bg-[#de1c85]">
          <a href="register">
          REGÍSTRATE
          </a>
        </button>
      </div>

      {/* Barra principal */}
      <div className="bg-[#0072b1] place-content-center text-white px-4 py-3 flex items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logo-cadtoner.png"
            alt="CadToner Logo"
            height={50}
            width={150}
            className="cursor-pointer"
          />
        </div>

        {/* Barra de búsqueda */}
        <div className="flex items-center w-full max-w-xl mx-4">
          <input
            type="text"
            placeholder="Buscar productos..."
            className="flex-grow px-4 py-2 rounded-l border-none outline-none"
          />
          <button className="bg-[#0b4468] px-4 py-2 text-white font-semibold rounded-r hover:bg-[#de1c85]">
            BUSCAR
          </button>
        </div>

        {/* Botones a la derecha */}
        <div className="flex space-x-4">
          <a
                  href="/facturacion"
                  className="bg-transparent border border-white text-white px-4 py-2 rounded-full hover:bg-[#de1c85] hover:border-[#de1c85]"
                >Facturación</a>
                <a
                  href="/login"
                  className="bg-[#de1c85] text-white px-4 py-2 rounded-full hover:bg-pink-600"
                ><i className="pi pi-user mr-2"></i>Iniciar Sesión</a>
          
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
            <Link href="/products" className="flex items-center space-x-2 hover:text-[#de1c85]">
              <i className="pi pi-box"></i>
              <span>PRODUCTOS</span>
            </Link>
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
  );
};

export default Header;


