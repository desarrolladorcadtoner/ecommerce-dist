import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { MapPin, Phone } from "lucide-react"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

// Cargar el componente Map dinámicamente para evitar problemas de SSR
const Map = dynamic(() => import("@/components/Map"), { ssr: false })

interface Sucursal {
  nombre: string
  calle: string
  numero: string
  colonia: string
  telefono1: string
  cp: string
  email: string
  entrecalles: string
  latitude: string
  longitude: string
}

export default function CedisPage() {
  const [sucursales, setSucursales] = useState<Sucursal[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch("http://172.100.203.36:8000/cedis/cedis")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`)
        }
        return response.json()
      })
      .then((data) => {
        const sortedSucursales = data.sucursales.sort((a: Sucursal, b: Sucursal) => a.nombre.localeCompare(b.nombre))
        setSucursales(sortedSucursales)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching sucursales:", error)
        setError(`Error fetching sucursales: ${error.message}`)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        <main className="container mx-auto px-4 py-8">
          {/* Map Container */}
          <div className="rounded-xl overflow-hidden border border-gray-200 mb-8">
            <div className="bg-[#004466] p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#004466]" />
                </div>
                <h1 className="text-white text-xl font-medium">Cad Toner CEDIS</h1>
              </div>
              <div className="flex gap-2">
                <button className="text-white hover:text-gray-200">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                </button>
                <button className="text-white hover:text-gray-200">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="relative w-full h-[400px]">
              <Map />
            </div>
          </div>

           {/* General Schedule */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Horario General</h2>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Lunes a Viernes:</span> 8:30 AM - 6:30 PM
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Sábados:</span> 9:00 AM - 1:30 PM
            </p>
          </div>

          {/* Distribution Centers Info */}
          <div className="space-y-4">
            {sucursales.map((sucursal) => (
              <div key={sucursal.nombre} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-[#E6007E] flex-shrink-0" />
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{sucursal.nombre.trim()}</h2>
                    <p className="text-gray-600 mb-1">
                      <span className="font-medium">Dirección:</span> {sucursal.calle.trim()} {sucursal.numero.trim()}, {sucursal.colonia?.trim()}, {sucursal.cp.trim()}
                    </p>
                    <p className="text-gray-600 mb-1">
                      <span className="font-medium">Teléfono:</span> {sucursal.telefono1.trim()}
                    </p>
                    <p className="text-gray-600 mb-1">
                      <span className="font-medium">Email:</span> {sucursal.email.trim()}
                    </p>
                    <p className="text-gray-600 mb-1">
                      <span className="font-medium">Entre calles:</span> {sucursal.entrecalles.trim()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      <a
        href="https://wa.link/fqctr7"
        target="_blank"
        className="fixed bottom-4 right-4 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#1DA851] transition duration-300"
      >
        <Phone className="w-6 h-6" />
      </a>
      <Footer />
    </>
  )
}

