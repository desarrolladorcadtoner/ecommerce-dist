"use client"

import React, { useState } from "react";
import { formData } from "@/types/register"
import InputTextForm from "../Inputs/InputTextForm"
import { InputMaskForm } from "../Inputs/InputMaskFormPhone"
import { Checkbox } from "primereact/checkbox";

interface StepOneProps {
  formData: formData
  updateFormData: (newData: Partial<formData>) => void
}

export default function StepTwo({ formData, updateFormData }: StepOneProps) {
  const [checked, setChecked] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData({ [e.target.name]: e.target.value })
  }

  //Funcion para el input mask form
  const handleMaskedInputChange = (e: { value: string; target: { name: string } }) => {
    const fakeEvent = {
      target: {
        name: e.target.name,
        value: e.value,
      },
    } as React.ChangeEvent<HTMLInputElement>;

    handleInputChange(fakeEvent);
  };

  return (
    <div className="space-y-8">
      <h2 className="text-[1.5rem] font-bold text-center text-gray-800 mb-6">INFORMACIÓN DE CONTACTO</h2>

      <h3 className="text-[1.25rem] font-semibold mb-4">Contacto de Compras</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        <InputTextForm
          tittleInput="Nombre"
          className="w-full general-input uppercase required"
          name="nombreCompras"
          value={formData.nombreCompras}
          onChange={handleInputChange}
        />

        <InputTextForm
          tittleInput="Apellidos"
          className="w-full general-input uppercase required"
          name="apellidoCompras"
          value={formData.apellidoCompras}
          onChange={handleInputChange}
        />

        <InputTextForm
          tittleInput="Correo"
          className="w-full general-input uppercase required"
          name="correoCompras"
          value={formData.correoCompras}
          onChange={handleInputChange}
        />

        <InputMaskForm
          tittleInput="Teléono"
          className="w-full general-input uppercase required"
          name="telefonoCompras"
          value={formData.telefonoCompras || ""}
          onChange={handleMaskedInputChange}
        />

        <InputTextForm
          tittleInput="Extensión"
          className="w-full general-input uppercase"
          name="extensionCompras"
          value={formData.extensionCompras}
          onChange={handleInputChange}
        />

        <InputMaskForm
          tittleInput="WhatsApp"
          className="w-full general-input uppercase required"
          name="whatsappCompras"
          value={formData.whatsappCompras || ""}
          onChange={handleMaskedInputChange}
        />

        {/*<InputTextForm
          tittleInput="WhatsApp"
          className="w-full general-input uppercase"
          name="whatsappCompras"
          value={formData.whatsappCompras}
          onChange={handleInputChange}
        />*/}
      </div>

      <h3 className="text-[1.25rem] font-semibold">Contacto de Pagos</h3>
      <label className="mr-2">Marca la casilla si los datos son los mismos:</label>
      <Checkbox
        onChange={e => {
          const isChecked = e.checked ?? false;
          setChecked(isChecked);

          if (isChecked) {
            // Copiar valores de compras a pagos
            updateFormData({
              nombrePago: formData.nombreCompras,
              apellidoPago: formData.apellidoCompras,
              correoPago: formData.correoCompras,
              telefonoPago: formData.telefonoCompras,
              extensionPago: formData.extensionCompras,
              whatsappPago: formData.whatsappCompras,
            });
          } else {
            // Limpiar los campos para que el usuario escriba
            updateFormData({
              nombrePago: "",
              apellidoPago: "",
              correoPago: "",
              telefonoPago: "",
              extensionPago: "",
              whatsappPago: "",
            });
          }
        }}
        checked={checked}
        className="mb-2"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        <InputTextForm
          tittleInput="Nombre"
          className="w-full general-input uppercase required"
          name="nombrePago"
          value={formData.nombrePago}
          onChange={handleInputChange}
          disabled={checked}
        />

        <InputTextForm
          tittleInput="Apellidos"
          className="w-full general-input uppercase required"
          name="apellidoPago"
          value={formData.apellidoPago}
          onChange={handleInputChange}
          disabled={checked}
        />

        <InputTextForm
          tittleInput="Correo"
          className="w-full general-input uppercase required"
          name="correoPago"
          value={formData.correoPago}
          onChange={handleInputChange}
          disabled={checked}
        />

        <InputMaskForm
          tittleInput="Teléono"
          className="w-full general-input uppercase required"
          name="telefonoPago"
          value={formData.telefonoPago || ""}
          onChange={handleMaskedInputChange}
          disabled={checked}
        />


        <InputTextForm
          tittleInput="Extensión"
          className="w-full general-input uppercase"
          name="extensionPago"
          value={formData.extensionPago}
          onChange={handleInputChange}
          disabled={checked}
        />

        {/*<InputTextForm
          tittleInput="WhatsApp"
          className="w-full general-input uppercase"
          name="whatsappPago"
          value={formData.whatsappPago}
          onChange={handleInputChange}
        />*/
        }        

        <InputMaskForm
          tittleInput="WhatsApp"
          className="w-full general-input uppercase required"
          name="whatsappPago"
          value={formData.whatsappPago || ""}
          onChange={handleMaskedInputChange}
          disabled={checked}
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
