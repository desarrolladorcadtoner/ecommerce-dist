import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { MessageCircle, Phone, Mail, MessageSquare } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log("Form data submitted:", formData)
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        <main className="container mx-auto px-4 py-12 ">
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">CONTÁCTANOS</h1>
            <h2 className="text-xl text-gray-600 mb-2">¿Tienes alguna duda o comentario?</h2>
            <p className="text-gray-600 mb-12">Compártenos tu datos y con mucho gusto te atenderemos.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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
                <h3 className="text-lg font-medium text-gray-800">
                  <a href="https://wa.link/fqctr7" target="_blank">Envíanos un WhatsApp</a>
                </h3>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-[#E6007E] flex items-center justify-center mb-4">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-medium text-gray-800">
                  <a href="mailto:asistente_desarrollador@cadtoner.com.mx">Envíanos un Correo</a>
                </h3>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-gray-100 p-8 rounded-lg shadow-md sm:p-2 sm">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E6007E]"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E6007E]"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E6007E]"
                  rows={4}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#E6007E] text-white py-2 px-4 rounded-lg hover:bg-[#c5006b] transition duration-300"
              >
                Enviar
              </button>
            </form>
          </div>
        </main>
      </div>
      <Footer />

      {/* Botón de WhatsApp fijo */}
      <a
        href="https://wa.link/fqctr7"
        target="_blank"
        className="fixed bottom-4 right-4 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#1DA851] transition duration-300"
      >
        <Phone className="w-10 h-10" />
      </a>

      {/* Chatbot */}
      <div className="fixed bottom-4 right-20 bg-white p-3 mr-4 rounded-full shadow-lg">
        <a href="https://www.b2chat.io/" target="_blank">
          <MessageSquare className="w-10 h-10 text-[#004466]" />
        </a>
      </div>
    </>
  )
}

