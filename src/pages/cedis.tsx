import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

const Cedis = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow p-6">
        <div className="container mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-center">CEDIS</h1>
          <div className="flex flex-col md:flex-row items-center mb-6">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <Image
                src="/images/cedis.jpg"
                alt="CEDIS"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <p className="text-gray-700 mb-4">
                En nuestros Centros de Distribución (CEDIS), nos aseguramos de que nuestros productos lleguen a nuestros clientes de manera rápida y eficiente. Contamos con una infraestructura moderna y un equipo altamente capacitado para garantizar la mejor experiencia de servicio.
              </p>
              <p className="text-gray-700 mb-4">
                Nuestros CEDIS están estratégicamente ubicados para cubrir una amplia área geográfica, permitiendo una distribución efectiva y oportuna. Trabajamos con tecnología de punta para optimizar nuestros procesos logísticos y asegurar la calidad de nuestros productos.
              </p>
              <p className="text-gray-700 mb-4">
                Visítanos en cualquiera de nuestros CEDIS y descubre cómo podemos ayudarte a satisfacer tus necesidades de distribución.
              </p>
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ubicaciones de nuestros CEDIS</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li className="mb-2">CEDIS Norte: Av. Principal 123, Ciudad Norte</li>
              <li className="mb-2">CEDIS Sur: Calle Secundaria 456, Ciudad Sur</li>
              <li className="mb-2">CEDIS Este: Blvd. Tercero 789, Ciudad Este</li>
              <li className="mb-2">CEDIS Oeste: Carretera Cuarta 101, Ciudad Oeste</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cedis;