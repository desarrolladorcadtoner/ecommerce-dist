import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { MapPin } from "lucide-react"

export default function CedisPage() {
  return (
    <>
    <Header/>
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14932.737541997461!2d-99.1331785!3d19.4326077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92d2e0e4dbd%3A0x905574a740c4893d!2sMexico%20City%2C%20CDMX%2C%20Mexico!5e0!3m2!1sen!2sus!4v1629890876465!5m2!1sen!2sus"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        {/* Distribution Centers Info */}
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-[#E6007E] flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold mb-2">Centro de Distribución Hermosillo</h2>
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Dirección:</span> Blvd. Agustín de Vildósola 304-b, Pedregal de la
                  Villa, 83290 Sonora, Sonora
                </p>
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Teléfono:</span> 662 800 1600
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Lun a Vie:</span> 8:30 - 18 hrs.{" "}
                  <span className="font-medium">Sábado:</span> 9:00 - 13:30 hrs.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-[#E6007E] flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold mb-2">Centro de Distribución García</h2>
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Dirección:</span> Humberto Lobo 9338, Colonia Mitras, García, N.L.
                </p>
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Teléfono:</span> 81 81 305 305
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Lun a Vie:</span> 8:30 - 18 hrs.{" "}
                  <span className="font-medium">Sábado:</span> 9:00 - 13:30 hrs.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-[#E6007E] flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold mb-2">Centro de Distribución Durango</h2>
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Dirección:</span> Ignacio Lopez Rayón #1124 Col. Zona Centro, entre las
                  calles Justo Sierra y Felipe Angeles, Gómez Palacio, Dgo.
                </p>
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Teléfono:</span> 87 12 53 39 00
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Lun a Vie:</span> 8:30 - 18 hrs.{" "}
                  <span className="font-medium">Sábado:</span> 9:00 - 13:30 hrs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    <Footer />
    </>
  )
}

