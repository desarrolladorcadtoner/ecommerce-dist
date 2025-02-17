import Image from "next/image"
import { Users2, Award, Handshake, Target } from "lucide-react"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function AboutPage() {
  return (
    <>
    <Header />
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <Image
          src=""
          alt="Hero background"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-[#005580]/60">
          <div className="container mx-auto h-full flex items-center px-4">
            <h1 className="text-white text-5xl md:text-7xl font-bold">
              EL MÁS <span className="text-white">GRANDE</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <section className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-[#005580]">¿QUIÉNES SOMOS?</h2>
            <p className="text-gray-700 mb-6 text-center">
              Experiencia, posicionamiento y reconocimiento de marca como el pionero en la industria desde 1989.
              36 puntos de venta al usuario final en el estado de Nuevo León, México.
              9 Centros de Distribución (CEDIS) para la venta a distribuidores en los estados de Nuevo León, Sonora, 
            </p>
            <p className="text-gray-700 mb-6 text-center">
              36 puntos de venta al usuario final en el estado de Nuevo León, México. 9 Centros de Distribución (CEDIS)
              para venta a distribuidores
            </p>
            <p className="text-gray-700 mb-6 text-center">
              en los estados de Nuevo León, Sonora, Yucatán, León, Querétaro, Durango, CDMX (2) y Jalisco. Actualmente
              contamos con nuestra Matriz y 36 sucursales, estratégicamente ubicadas en el área metropolitana de N.L. y
              Coahuila;
            </p>
          </section>

          <section className="text-center max-w-4xl mx-auto mt-12">
            <h2 className="text-3xl font-bold mb-8 text-[#005580]">Misión</h2>
            <p className="text-gray-700 mb-6">
              Brindar ahorro a las empresas públicas y privadas, así como a los hogares mexicanos, ofreciendo opciones
              de impresión sin sacrificar la calidad para que estos logren mayor rentabilidad y beneficios generando al
              mismo tiempo fuentes de empleos locales y ayudar de esta manera a la economía del país.
            </p>
          </section>

          <section className="text-center max-w-4xl mx-auto mt-12">
            <h2 className="text-3xl font-bold mb-8 text-[#005580]">Visión</h2>
            <p className="text-gray-700 mb-6">
              Ser la empresa más sólida y confiable (El más Grande) de México que responda a las necesidades de
              impresión de nuestros clientes y distribuidores otorgando una gran variedad de opciones de calidad de
              impresión primero que nadie y que nos permita seguir tendiendo la mayor participación de mercado
              anticipándonos a los problemas y necesidades de nuestros clientes.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold mb-12 text-center text-[#005580]">Valores</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-[#005580] flex items-center justify-center mb-4">
                  <Users2 className="w-12 h-12 text-white" />
                </div>
                <span className="text-gray-700 font-medium">Honestidad</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-[#005580] flex items-center justify-center mb-4">
                  <Award className="w-12 h-12 text-white" />
                </div>
                <span className="text-gray-700 font-medium">Lealtad</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-[#005580] flex items-center justify-center mb-4">
                  <Handshake className="w-12 h-12 text-white" />
                </div>
                <span className="text-gray-700 font-medium">Respeto</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-[#005580] flex items-center justify-center mb-4">
                  <Target className="w-12 h-12 text-white" />
                </div>
                <span className="text-gray-700 font-medium">Orientado al trabajo</span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
    <Footer />
    </>
  )
}

