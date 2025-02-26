"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ email })
  }

  const handleUsernameSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ username })
  }

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gray-100">
      {/* Breadcrumb */}
      <div className="bg-gray-200 py-3 px-4">
        <div className="max-w-6xl mx-auto">
          <nav className="text-gray-600 text-sm">
            <Link href="/" className="hover:text-[#004466]">
              INICIO
            </Link>
            <span className="mx-2">{">"}</span>
            <span>¿OLVIDÓ SU USURARIO O CONTRASEÑA?</span>
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
              Ingrese su dirección de correo electrónico a continuación y le enviaremos su usuario
            </p>
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Correo electrónico"
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-[#004466]"
                required
              />
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
              Ingrese su usuario y su contraseña se enviará a su dirección de correo electrónico registrada
            </p>
            <form onSubmit={handleUsernameSubmit} className="space-y-4">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Correo electrónico"
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-[#004466]"
                required
              />
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
    <Footer/>
    </>
  )
}

