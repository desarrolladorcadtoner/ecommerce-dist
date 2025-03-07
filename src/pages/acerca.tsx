import Image from "next/image"
import { Users2, Award, Handshake, Target, ShieldCheck, Heart, ThumbsUp, Briefcase } from "lucide-react"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <div className="relative h-[550px] overflow-hidden">
          <Image
            src="/images/BANNER-FACHADA.jpg"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-[#005580]/90 to-[#005580]/70" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-6xl font-bold z-10 whitespace-nowrap">
              <span className="mr-2 font-light">EL MÁS</span>
              <span className="text-5xl md:text-7xl">GRANDE</span>
            </h1>
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
            <h2 className="text-3xl font-bold mb-8 text-[#005580] text-center">Valores</h2>
            <section className="relative w-full">
              <div className="absolute inset-0">
                <Image
                  src="/images/BANNER-VALORES.jpg"
                  alt="Background"
                  fill
                  className="object-cover w-full"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-[#005580]/90" />

              <div className="relative py-16 px-4 container mx-auto">
                <div className="grid grid-cols-2 gap-12 md:gap-16 max-w-4xl mx-auto">
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 mb-4">
                      <ShieldCheck className="w-full h-full text-white" />
                    </div>
                    <span className="text-white font-medium text-3xl">Honestidad</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 mb-4">
                      <ThumbsUp className="w-full h-full text-white" />
                    </div>
                    <span className="text-white font-medium text-3xl">Respeto</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 mb-4">
                      <Heart className="w-full h-full text-white" />
                    </div>
                    <span className="text-white font-medium text-3xl">Lealtad</span>
                  </div>

                  

                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 mb-4">
                      <Briefcase className="w-full h-full text-white" />
                    </div>
                    <span className="text-white font-medium text-3xl">Orientado al trabajo</span>
                  </div>
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

