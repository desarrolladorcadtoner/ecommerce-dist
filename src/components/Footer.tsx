import '../styles/tailwind.css';
import 'primeicons/primeicons.css';


const Footer = () => {
  return (
    <footer className="bg-[#0b4468] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Logo and Description */}
          <div className="flex flex-col justify-between">
            <img alt="logo" className="w-48" src="/images/logo-cadtoner.png" />
            <ul>
              <li>5 de Mayo #1338 Pte., Centro</li>
              <li>Monterrey, NUEVO LEÓN</li>
              <li>64000, MÉXICO</li>
              <li>webmaster@cadtoner.com.mx</li>
            </ul>
          </div>
  
          {/* About Us Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Productos</h3>
            <ul>
              <li><a href="#" className="text-gray-400 text-sm hover:text-pink-500">Más Vendidos</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-pink-500">Más Recientes</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-pink-500">Nuevos</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-pink-500">Ofertas</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-pink-500">Catálogo Electrónico</a></li>
            </ul>
          </div>
  
          {/* Customer Care Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Información</h3>
            <ul>
              <li><a href="#" className="text-gray-400 text-sm hover:text-pink-500">Bolsa de Trabajo</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-pink-500">Paqueterías</a></li>
              <li><a href="politicas-garantia" className="text-gray-400 text-sm hover:text-pink-500">Garantías</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-pink-500">Métodos de Pago</a></li>
              <li><a href="aviso-privacidad" className="text-gray-400 text-sm hover:text-pink-500">Aviso de Privacidad</a></li>
              <li><a href="terminos-condiciones" className="text-gray-400 text-sm hover:text-pink-500">Términos y Condiciones</a></li>
            </ul>
          </div>
  
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Conócenos</h3>
            <p className="text-gray-400 text-sm py-1"><a href="acerca" className="text-gray-400 text-sm hover:text-pink-500">Acerca de Nosotros</a></p>
            <p className="text-gray-400 text-sm py-1"><a href="contacto" className="text-gray-400 text-sm hover:text-pink-500">Contacto</a></p>
            <p className="text-gray-400 text-sm py-1 mb-4"><a href="cedis" className="text-gray-400 text-sm hover:text-pink-500">Mapa del Sitio</a></p>
            
            <div className="flex space-x-4">
              <i className="pi pi-facebook text-xl hover:text-pink-500"></i>
              <i className="pi pi-twitter text-xl hover:text-pink-500"></i>
              <i className="pi pi-instagram text-xl hover:text-pink-500"></i>
            </div>
          </div>
  
        </div>
      </div>
      <div className="text-center text-gray-400 text-sm mt-8">
        <p>&copy; 2024 Computación Administrativa y Diseño S.A. de C.V.</p>
        <p>5 de Mayo 1234 Pte, Centro, Monterrey, Nuevo León, 64000, México</p>
        <p>Tel: (81) 1234 5678</p>
      </div>
    </footer>
  );  
};

export default Footer;

  
  