import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { MessageCircle, Phone, Mail } from "lucide-react"

export default function ContactPage() {
  return (
    <>
    <Header/>
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">CONTÁCTANOS</h1>
          <h2 className="text-xl text-gray-600 mb-2">¿Tienes alguna duda o comentario?</h2>
          <p className="text-gray-600 mb-12">Compártenos tu datos y con mucho gusto te atenderemos.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[#E6007E] flex items-center justify-center mb-4">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-medium text-gray-800">Escríbenos</h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[#E6007E] flex items-center justify-center mb-4">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-medium text-gray-800"><a href="https://wa.link/fqctr7" target="_blank">Envíanos un WhatsApp</a></h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[#E6007E] flex items-center justify-center mb-4">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-medium text-gray-800"><a href="mailto:asistente_desarrollador@cadtoner.com.mx">Envíanos un Correo</a></h3>
            </div>
          </div>
        </div>
      </main>
    </div>
    <Footer />
    </>
  )
}

