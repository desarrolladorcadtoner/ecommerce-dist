import { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

// Configurar el ícono del marcador
const markerIcon = new L.Icon({
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

interface Sucursal {
  nombre: string
  calle: string
  numero: string
  colonia: string
  telefono1: string
  cp: string
  latitude: string
  longitude: string
}

const Map = () => {
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
        setSucursales(data.sucursales)
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
    <MapContainer center={[19.432608, -99.133209]} zoom={5} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {sucursales.map((sucursal) => (
        <Marker key={sucursal.nombre} position={[parseFloat(sucursal.latitude), parseFloat(sucursal.longitude)]} icon={markerIcon}>
          <Popup>
            <div>
              <h2>{sucursal.nombre.trim()}</h2>
              <p>{sucursal.calle.trim()} {sucursal.numero.trim()}, {sucursal.colonia?.trim()}</p>
              <p>{sucursal.telefono1.trim()}</p>
              <p>{sucursal.cp.trim()}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default Map