"use client"

import { InputText } from "primereact/inputtext"
import { Dropdown } from "primereact/dropdown"

interface StepOneProps {
  formData: any
  updateFormData: (newData: any) => void
}

export default function StepOne({ formData, updateFormData }: StepOneProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData({ [e.target.name]: e.target.value })
  }

  const handleDropdownChange = (e: { value: any; target: { name: string } }) => {
    updateFormData({ [e.target.name]: e.value })
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">INFORMACIÓN FISCAL</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium">
            Tipo de Persona<span className="text-red-500">*</span>
          </label>
          <Dropdown
            options={[
              { label: "Física", value: "fisica" },
              { label: "Moral", value: "moral" },
            ]}
            value={formData.tipoPersona}
            onChange={handleDropdownChange}
            placeholder="Seleccione tipo"
            className="w-full general-dropdown"
            name="tipoPersona"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">
            Razón Social ante SHCP<span className="text-red-500">*</span>
          </label>
          <InputText
            className="w-full general-input"
            name="razonSocial"
            value={formData.razonSocial || ""}
            onChange={handleInputChange}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Nombre Comercial</label>
          <InputText
            className="w-full general-input"
            name="nombreComercial"
            value={formData.nombreComercial || ""}
            onChange={handleInputChange}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">
            RFC<span className="text-red-500">*</span>
          </label>
          <InputText className="w-full general-input" name="rfc" value={formData.rfc || ""} onChange={handleInputChange} />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">
            Régimen Fiscal<span className="text-red-500">*</span>
          </label>
          <Dropdown
            options={[]} // Agregar opciones de régimen fiscal
            value={formData.regimenFiscal}
            onChange={handleDropdownChange}
            placeholder="Seleccione régimen"
            className="w-full general-dropdown"
            name="regimenFiscal"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">
            Uso de CFDI<span className="text-red-500">*</span>
          </label>
          <Dropdown
            options={[]} // Agregar opciones de CFDI
            value={formData.usoCFDI}
            onChange={handleDropdownChange}
            placeholder="Seleccione uso"
            className="w-full general-dropdown"
            name="usoCFDI"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">
            Correo Facturación<span className="text-red-500">*</span>
          </label>
          <InputText
            type="email"
            className="w-full general-input"
            name="correoFacturacion"
            value={formData.correoFacturacion || ""}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-center text-gray-800 mt-8 mb-6">Dirección Fiscal</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium">
            Calle<span className="text-red-500">*</span>
          </label>
          <InputText className="w-full general-input" name="calle" value={formData.calle || ""} onChange={handleInputChange} />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">
            Número Exterior<span className="text-red-500">*</span>
          </label>
          <InputText
            className="w-full general-input"
            name="numeroExterior"
            value={formData.numeroExterior || ""}
            onChange={handleInputChange}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Número Interior</label>
          <InputText
            className="w-full general-input"
            name="numeroInterior"
            value={formData.numeroInterior || ""}
            onChange={handleInputChange}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">
            Código Postal<span className="text-red-500">*</span>
          </label>
          <InputText
            className="w-full general-input"
            name="codigoPostal"
            value={formData.codigoPostal || ""}
            onChange={handleInputChange}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">
            Colonia<span className="text-red-500">*</span>
          </label>
          <InputText className="w-full general-input" name="colonia" value={formData.colonia || ""} onChange={handleInputChange} />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">
            Teléfono<span className="text-red-500">*</span>
          </label>
          <InputText
            className="w-full general-input"
            type="tel"
            name="telefono"
            value={formData.telefono || ""}
            onChange={handleInputChange}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">WhatsApp</label>
          <InputText
            className="w-full general-input"
            type="tel"
            name="whatsapp"
            value={formData.whatsapp || ""}
            onChange={handleInputChange}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">
            Estado<span className="text-red-500">*</span>
          </label>
          <Dropdown
            options={[]} // Agregar opciones de estados
            value={formData.estado}
            onChange={handleDropdownChange}
            placeholder="Seleccione estado"
            className="w-full general-dropdown"
            name="estado"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">
            Ciudad<span className="text-red-500">*</span>
          </label>
          <Dropdown
            options={[]} // Agregar opciones de ciudades
            value={formData.ciudad}
            onChange={handleDropdownChange}
            placeholder="Seleccione ciudad"
            className="w-full general-dropdown"
            name="ciudad"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">
            Actividad Principal en alta de SHCP<span className="text-red-500">*</span>
          </label>
          <Dropdown
            options={[]} // Agregar opciones de actividades
            value={formData.actividadPrincipal}
            onChange={handleDropdownChange}
            placeholder="Seleccione actividad"
            className="w-full general-dropdown"
            name="actividadPrincipal"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">
            Nombre del Representante Legal<span className="text-red-500">*</span>
          </label>
          <InputText
            className="w-full general-input"
            name="representanteLegal"
            value={formData.representanteLegal || ""}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  )
}

