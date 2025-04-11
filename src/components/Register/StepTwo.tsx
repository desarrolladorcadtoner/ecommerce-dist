"use client"

import { InputText } from "primereact/inputtext"
import { formData } from "@/types/register"
import InputTextForm from "../Inputs/InputTextForm"

interface StepOneProps {
  formData: formData
  updateFormData: (newData: Partial<formData>) => void
}

export default function StepTwo({ formData, updateFormData }: StepOneProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData({ [e.target.name]: e.target.value })
  }


  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">INFORMACIÓN DE CONTACTO</h2>

      <h3 className="text-xl font-semibold mb-4">Contacto de Compras</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        <InputTextForm
          tittleInput="Nombre"
          className="w-full general-input required" 
          name="nombreCompras"
          value={formData.nombreCompras}
          onChange={handleInputChange}
        />

        {/*<div className="space-y-2">
          <label className="block text-sm font-medium">
            Nombre<span className="text-red-500">*</span>
          </label>
          <InputText
            className="w-full general-input"
            name="nombreCompras"
            value={formData.nombreCompras}
            onChange={handleInputChange}
          />
        </div>*/}
        <InputTextForm
          tittleInput="Apellidos"
          className="w-full general-input required"
          name="apellidoCompras"
          value={formData.apellidoCompras}
          onChange={handleInputChange}
        />

        {/*<div className="space-y-2">
          <label className="block text-sm font-medium">
            Apellidos<span className="text-red-500">*</span>
          </label>
          <InputText
            className="w-full general-input"
            name="apellidoCompras"
            value={formData.apellidoCompras}
            onChange={handleInputChange}
          />
        </div>*/}

        <InputTextForm
          tittleInput="Correo"
          className="w-full general-input required"
          name="correoCompras"
          value={formData.correoCompras}
          onChange={handleInputChange}
        />

        {/*<div className="space-y-2">
          <label className="block text-sm font-medium">
            Correo<span className="text-red-500">*</span>
          </label>
          <InputText
            className="w-full general-input"
            type="email"
            name="correoCompras"
            value={formData.correoCompras}
            onChange={handleInputChange}
          />
        </div>*/}

        <InputTextForm
          tittleInput="Teléfono"
          className="w-full general-input required"
          name="telefonoCompras"
          value={formData.telefonoCompras}
          onChange={handleInputChange}
        />

        {/*<div className="space-y-2">
          <label className="block text-sm font-medium">
            Teléfono<span className="text-red-500">*</span>
          </label>
          <InputText
            className="w-full general-input"
            type="tel"
            name="telefonoCompras"
            value={formData.telefonoCompras}
            onChange={handleInputChange}
          />
        </div>*/}

        <InputTextForm
          tittleInput="Extensión"
          className="w-full general-input"
          name="extensionCompras"
          value={formData.extensionCompras}
          onChange={handleInputChange}
        />

        {/*<div className="space-y-2">
          <label className="block text-sm font-medium">Extensión</label>
          <InputText
            className="w-full general-input"
            name="extensionCompras"
            value={formData.extensionCompras}
            onChange={handleInputChange}
          />
        </div>*/}

        <InputTextForm
          tittleInput="WhatsApp"
          className="w-full general-input"
          name="whatsappCompras"
          value={formData.whatsappCompras}
          onChange={handleInputChange}
        />

        {/*<div className="space-y-2">
          <label className="block text-sm font-medium">WhatsApp</label>
          <InputText
            className="w-full general-input"
            type="tel"
            name="whatsappCompras"
            value={formData.whatsappCompras}
            onChange={handleInputChange}
          />
        </div>*/}
      </div>

      <h3 className="text-xl font-semibold mb-4">Contacto de Pagos</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        <InputTextForm
          tittleInput="Nombre"
          className="w-full general-input"
          name="nombrePago"
          value={formData.nombrePago}
          onChange={handleInputChange}
        />

        {/*<div className="space-y-2">
          <label className="block text-sm font-medium">
            Nombre<span className="text-red-500">*</span>
          </label>
          <InputText
            className="w-full general-input"
            name="nombrePago"
            value={formData.nombrePago}
            onChange={handleInputChange}
          />
        </div>*/}

        <InputTextForm
          tittleInput="Apellidos"
          className="w-full general-input required"
          name="apellidoPago"
          value={formData.apellidoPago}
          onChange={handleInputChange}
        />

        {/*<div className="space-y-2">
          <label className="block text-sm font-medium">
            Apellidos<span className="text-red-500">*</span>
          </label>
          <InputText
            className="w-full general-input"
            name="apellidoPago"
            value={formData.apellidoPago}
            onChange={handleInputChange}
          />
        </div>*/}

        <InputTextForm
          tittleInput="Correo"
          className="w-full general-input"
          name="correoPago"
          value={formData.correoPago}
          onChange={handleInputChange}
        />

        {/*<div className="space-y-2">
          <label className="block text-sm font-medium">
            Correo<span className="text-red-500">*</span>
          </label>
          <InputText
            className="w-full general-input"
            type="email"
            name="correoPago"
            value={formData.correoPago}
            onChange={handleInputChange}
          />
        </div>*/}
        
        <InputTextForm
          tittleInput="Teléfono"
          className="w-full general-input required"
          name="telefonoPago"
          value={formData.telefonoPago}
          onChange={handleInputChange}
        />

        {/*<div className="space-y-2">
          <label className="block text-sm font-medium">
            Teléfono<span className="text-red-500">*</span>
          </label>
          <InputText
            className="w-full general-input"
            type="tel"
            name="telefonoPago"
            value={formData.telefonoPago}
            onChange={handleInputChange}
          />
        </div>*/}

        <InputTextForm
          tittleInput="Extensión"
          className="w-full general-input"
          name="extensionPago"
          value={formData.extensionPago}
          onChange={handleInputChange}
        />

        {/*<div className="space-y-2">
          <label className="block text-sm font-medium">Extensión</label>
          <InputText
            className="w-full general-input"
            name="extensionPago"
            value={formData.extensionPago}
            onChange={handleInputChange}
          />
        </div>*/
        }

        <InputTextForm
          tittleInput="WhatsApp"
          className="w-full general-input"
          name="whatsappPago"
          value={formData.whatsappPago}
          onChange={handleInputChange}
        />

        {/*<div className="space-y-2">
          <label className="block text-sm font-medium">WhatsApp</label>
          <InputText
            className="w-full general-input"
            type="tel"
            name="whatsappPago"
            value={formData.whatsappPago}
            onChange={handleInputChange}
          />
        </div>*/}
      </div>
    </div>
  )
}
