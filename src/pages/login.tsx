"use client"

import type React from "react"
import { useState } from "react"
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import OtpVerification from "@/components/Auth/OtpVerification";


export default function LoginPage() {
  const { login, fetchProtectedData } = useAuth();
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    try {
      // Llamar a la función login del contexto
      await login(usuario, password);

      await setShowOtp(true); // 👉 Muestra OTP, no redirige aún

      await fetchProtectedData();
      //console.log("Datos protegidos:", protectedData);
      // Redirigir al usuario a la página principal o a otra página después de iniciar sesión
      //alert("Inicio de sesión exitoso");
      router.push("/"); // Redirigir a la página principal
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Usuario o contraseña incorrectos");
    }
  }

  {/*const handleOtpVerified = () => {
    alert("OTP verificado correctamente");
    router.push("/"); // O a donde quieras
  };*/}

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
              <span>ACCESO</span>
            </nav>
          </div>
        </div>

        <main className="max-w-6xl mx-auto p-4 mt-8">
          <div className="flex flex-col justify-evenly md:flex-row gap-12">
            {/* Login Form */}
            <div>
              <h1 className="text-[2.25rem] font-bold text-gray-700 mb-8">¡BIENVENIDO!</h1>
                <form onSubmit={handleSubmit} className="max-w-md">
                  <div className="mb-6 w-[450px] sm:w-[398px]">
                    <input
                      type="text"
                      value={usuario}
                      onChange={(e) => setUsuario(e.target.value)}
                      placeholder="No. Cliente"
                      className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-[#004466]"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Contraseña"
                      className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-[#004466]"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#004466] text-white py-3 px-4 rounded font-medium hover:bg-[#003355] transition-colors"
                  >
                    Iniciar Sesión
                  </button>

                  <div className="mt-4">
                    <Link href="/forgotPassword" className="text-[#004466] hover:underline">
                      ¿Olvidó su ID de usuario/contraseña?
                    </Link>
                  </div>
                </form>
            </div>

            <hr className="w-[20px]"/>

            {/* Registration Section */}
            <div className="md:w-72">
              <div className="text-center">
                <p className="text-gray-600 mb-2">¿Aún no eres distribuidor?</p>
                <p className="text-gray-600 mb-4">Registrate aquí mismo</p>
                <Link
                  href="/register"
                  className="inline-block bg-[#004466] text-white py-2 px-6 rounded font-medium hover:bg-[#003355] transition-colors"
                >
                  Registrate
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}

