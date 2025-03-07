"use client"

import { useState } from "react"
import { InputText } from "primereact/inputtext"
import { Dropdown } from "primereact/dropdown"
import { formData } from "@/types/register"

interface StepThreeProps {
  formData: formData
  updateFormData: (newData: Partial<formData>) => void
}

export default function StepThree({ formData, updateFormData }: StepThreeProps) {
  const [showOtherInput, setShowOtherInput] = useState(formData.giroNegocio === "otra")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    updateFormData({ [name]: value })
  }

  const handleDropdownChange = (e: { value: any; target: { name: string } }) => {
    updateFormData({ [e.target.name]: e.value })
    if (e.value === "otra") {
      setShowOtherInput(true)
    } else {
      setShowOtherInput(false)
      updateFormData({ nombreGiroNegocio: "" }) // Clear the other input field if not selected
    }
  }

  const giroNegocioOptions = [
    { label: "Retail", value: "retail" },
    { label: "Manufactura", value: "manufactura" },
    { label: "Servicios", value: "servicios" },
    { label: "Tecnología", value: "tecnologia" },
    { label: "Otra", value: "otra" },
  ]

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">INFORMACIÓN COMERCIAL</h2>

      <div>
        <h3 className="text-xl font-semibold mb-4">Información de contacto</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Giro del negocio<span className="text-red-500">*</span>
            </label>
            <Dropdown
              options={giroNegocioOptions}
              value={formData.giroNegocio}
              onChange={handleDropdownChange}
              placeholder="Seleccione giro"
              className="w-full general-dropdown"
              name="giroNegocio"
            />
          </div>
          {showOtherInput && (
            <div className="space-y-2">
              <label className="block text-sm font-medium">
                Nombre de Giro<span className="text-red-500">*</span>
              </label>
              <InputText
                className="w-full general-input"
                name="nombreGiroNegocio"
                value={formData.nombreGiroNegocio || ""}
                onChange={handleInputChange}
              />
            </div>
          )}
          <div className="space-y-2">
            <label className="block text-sm font-medium">Red social</label>
            <InputText
              className="w-full general-input"
              type="url"
              name="redSocial"
              value={formData.redSocial || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Nombre<span className="text-red-500">*</span>
            </label>
            <InputText
              className="w-full general-input"
              name="nombreRedSocial"
              value={formData.nombreRedSocial || ""}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Dirección de entrega</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Calle<span className="text-red-500">*</span>
            </label>
            <InputText
              className="w-full general-input"
              name="calleEntrega"
              value={formData.calleEntrega || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Número Exterior<span className="text-red-500">*</span>
            </label>
            <InputText
              className="w-full general-input"
              name="numExtEntrega"
              value={formData.numExtEntrega || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium">Número Interior</label>
            <InputText
              className="w-full general-input"
              name="numIntEntrega"
              value={formData.numIntEntrega || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Colonia<span className="text-red-500">*</span>
            </label>
            <InputText
              className="w-full general-input"
              name="coloniaEntrega"
              value={formData.coloniaEntrega || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Código Postal<span className="text-red-500">*</span>
            </label>
            <InputText
              className="w-full general-input"
              name="codigoPostalEntrega"
              value={formData.codigoPostalEntrega || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Estado<span className="text-red-500">*</span>
            </label>
            <Dropdown
              options={[]} // Agregar opciones de estados
              value={formData.estadoEntrega}
              onChange={handleDropdownChange}
              placeholder="Seleccione estado"
              className="w-full general-dropdown"
              name="estadoEntrega"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Ciudad<span className="text-red-500">*</span>
            </label>
            <Dropdown
              options={[]} // Agregar opciones de ciudades
              value={formData.ciudadEntrega}
              onChange={handleDropdownChange}
              placeholder="Seleccione ciudad"
              className="w-full general-dropdown"
              name="ciudadEntrega"
            />
          </div>
        </div>
      </div>
    </div>
  )
}


