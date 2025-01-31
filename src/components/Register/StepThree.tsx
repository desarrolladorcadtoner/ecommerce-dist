"use client"

import { InputText } from "primereact/inputtext"
import { Dropdown } from "primereact/dropdown"

interface StepThreeProps {
  formData: any
  updateFormData: (newData: any) => void
}

export default function StepThree({ formData, updateFormData }: StepThreeProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData({ [e.target.name]: e.target.value })
  }

  const handleDropdownChange = (e: { value: any; target: { name: string } }) => {
    updateFormData({ [e.target.name]: e.value })
  }

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
              options={[]} // Agregar opciones de giro de negocio
              value={formData.giroNegocio}
              onChange={handleDropdownChange}
              placeholder="Seleccione giro"
              className="w-full"
              name="giroNegocio"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium">Página o sitio web</label>
            <InputText
              className="w-full"
              type="url"
              name="sitioWeb"
              value={formData.sitioWeb || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="block text-sm font-medium">
              Nombre<span className="text-red-500">*</span>
            </label>
            <InputText
              className="w-full"
              name="nombreComercial"
              value={formData.nombreComercial || ""}
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
              className="w-full"
              name="entregaCalle"
              value={formData.entregaCalle || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Número Exterior<span className="text-red-500">*</span>
            </label>
            <InputText
              className="w-full"
              name="entregaNumeroExterior"
              value={formData.entregaNumeroExterior || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium">Número Interior</label>
            <InputText
              className="w-full"
              name="entregaNumeroInterior"
              value={formData.entregaNumeroInterior || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Colonia<span className="text-red-500">*</span>
            </label>
            <InputText
              className="w-full"
              name="entregaColonia"
              value={formData.entregaColonia || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Código Postal<span className="text-red-500">*</span>
            </label>
            <InputText
              className="w-full"
              name="entregaCodigoPostal"
              value={formData.entregaCodigoPostal || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Estado<span className="text-red-500">*</span>
            </label>
            <Dropdown
              options={[]} // Agregar opciones de estados
              value={formData.entregaEstado}
              onChange={handleDropdownChange}
              placeholder="Seleccione estado"
              className="w-full"
              name="entregaEstado"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Ciudad<span className="text-red-500">*</span>
            </label>
            <Dropdown
              options={[]} // Agregar opciones de ciudades
              value={formData.entregaCiudad}
              onChange={handleDropdownChange}
              placeholder="Seleccione ciudad"
              className="w-full"
              name="entregaCiudad"
            />
          </div>
        </div>
      </div>
    </div>
  )
}


