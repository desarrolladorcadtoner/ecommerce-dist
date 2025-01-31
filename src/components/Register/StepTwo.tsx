"use client"

import { InputText } from "primereact/inputtext"

interface StepTwoProps {
  formData: any
  updateFormData: (newData: any) => void
}

export default function StepTwo({ formData, updateFormData }: StepTwoProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData({ [e.target.name]: e.target.value })
  }

  const ContactForm = ({ prefix }: { prefix: string }) => (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="block text-sm font-medium">
          Nombre<span className="text-red-500">*</span>
        </label>
        <InputText
          className="w-full"
          name={`${prefix}Nombre`}
          value={formData[`${prefix}Nombre`] || ""}
          onChange={handleInputChange}
        />
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-medium">
          Apellidos<span className="text-red-500">*</span>
        </label>
        <InputText
          className="w-full"
          name={`${prefix}Apellidos`}
          value={formData[`${prefix}Apellidos`] || ""}
          onChange={handleInputChange}
        />
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-medium">
          Correo<span className="text-red-500">*</span>
        </label>
        <InputText
          className="w-full"
          type="email"
          name={`${prefix}Correo`}
          value={formData[`${prefix}Correo`] || ""}
          onChange={handleInputChange}
        />
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-medium">
          Teléfono<span className="text-red-500">*</span>
        </label>
        <InputText
          className="w-full"
          type="tel"
          name={`${prefix}Telefono`}
          value={formData[`${prefix}Telefono`] || ""}
          onChange={handleInputChange}
        />
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-medium">Extensión</label>
        <InputText
          className="w-full"
          name={`${prefix}Extension`}
          value={formData[`${prefix}Extension`] || ""}
          onChange={handleInputChange}
        />
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-medium">WhatsApp</label>
        <InputText
          className="w-full"
          type="tel"
          name={`${prefix}Whatsapp`}
          value={formData[`${prefix}Whatsapp`] || ""}
          onChange={handleInputChange}
        />
      </div>
    </div>
  )

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">INFORMACIÓN DE CONTACTO</h2>

      <div>
        <h3 className="text-xl font-semibold mb-4">Contacto de Compras</h3>
        <ContactForm prefix="compras" />
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Contacto de Pagos</h3>
        <ContactForm prefix="pagos" />
      </div>
    </div>
  )
}

