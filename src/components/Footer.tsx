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
            <p className="mt-4 text-gray-400 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida.
            </p>
          </div>
  
          {/* About Us Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <ul>
              <li><a href="#" className="text-gray-400 text-sm hover:text-pink-500">Our Story</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-pink-500">Careers</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-pink-500">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-pink-500">Terms & Conditions</a></li>
            </ul>
          </div>
  
          {/* Customer Care Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Customer Care</h3>
            <ul>
              <li><a href="#" className="text-gray-400 text-sm hover:text-pink-500">Help Center</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-pink-500">Returns</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-pink-500">Shipping Info</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-pink-500">FAQ</a></li>
            </ul>
          </div>
  
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 text-sm py-1">70 Washington Square South, New York, NY 10012, United States</p>
            <p className="text-gray-400 text-sm py-1">Email: uilib.help@gmail.com</p>
            <p className="text-gray-400 text-sm py-1 mb-4">Phone: +1 1123 456 780</p>
            
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

  
  