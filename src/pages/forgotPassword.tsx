"use client"

import { useState } from "react"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [contactMethodEmail, setContactMethodEmail] = useState("email")
  const [contactMethodUsername, setContactMethodUsername] = useState("email")

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ email, contactMethod: contactMethodEmail })
  }

  const handleUsernameSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ username, contactMethod: contactMethodUsername })
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100">
        {/* Breadcrumb */}
        <div className="bg-gray-200 py-3 px-4">
          <div className="max-w-6xl mx-auto">
            <nav className="text-gray-600 text-sm">
              <Link href="/" className="hover:text-[#004466]">
                INICIO
              </Link>
              <span className="mx-2">{">"}</span>
              <span>¿OLVIDÓ SU USUARIO O CONTRASEÑA?</span>
            </nav>
          </div>
        </div>

        <main className="max-w-6xl mx-auto p-4 mt-8">
          <h1 className="text-4xl font-bold text-gray-700 text-center mb-12">¿Olvidó su identificación o contraseña?</h1>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Forgot Username Section */}
            <div className="border-r border-gray-300 pr-8">
              <h2 className="text-xl font-bold text-[#004466] mb-4">Olvidé mi usuario</h2>
              <p className="text-gray-600 mb-4">
                Ingrese su dirección de correo electrónico o número de WhatsApp a continuación y le enviaremos su usuario
              </p>
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <input
                  type={contactMethodEmail === "email" ? "email" : "tel"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={contactMethodEmail === "email" ? "Correo electrónico" : "Número de WhatsApp"}
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-[#004466]"
                  required
                />
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="contactMethodEmail"
                      value="email"
                      checked={contactMethodEmail === "email"}
                      onChange={(e) => setContactMethodEmail(e.target.value)}
                      className="mr-2"
                    />
                    Correo Electrónico
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="contactMethodEmail"
                      value="whatsapp"
                      checked={contactMethodEmail === "whatsapp"}
                      onChange={(e) => setContactMethodEmail(e.target.value)}
                      className="mr-2"
                    />
                    WhatsApp
                  </label>
                </div>
                <button
                  type="submit"
                  className="bg-[#FF0066] text-white px-6 py-2 rounded hover:bg-[#E5005C] transition-colors"
                >
                  Enviar
                </button>
              </form>
            </div>

            {/* Forgot Password Section */}
            <div className="pl-8">
              <h2 className="text-xl font-bold text-[#004466] mb-4">Olvidé mi contraseña</h2>
              <p className="text-gray-600 mb-4">
                Ingrese su correo o whatsapp y le enciaremos su contraseña
              </p>
              <form onSubmit={handleUsernameSubmit} className="space-y-4">
                <input
                  type={contactMethodUsername === "email" ? "text" : "tel"}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder={contactMethodUsername === "email" ? "Correo electrónico" : "Número de WhatsApp"}
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-[#004466]"
                  required
                />
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="contactMethodUsername"
                      value="email"
                      checked={contactMethodUsername === "email"}
                      onChange={(e) => setContactMethodUsername(e.target.value)}
                      className="mr-2"
                    />
                    Correo Electrónico
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="contactMethodUsername"
                      value="whatsapp"
                      checked={contactMethodUsername === "whatsapp"}
                      onChange={(e) => setContactMethodUsername(e.target.value)}
                      className="mr-2"
                    />
                    WhatsApp
                  </label>
                </div>
                <button
                  type="submit"
                  className="bg-[#004466] text-white px-6 py-2 rounded hover:bg-[#003355] transition-colors"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}

