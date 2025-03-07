"use client"

import { useState } from "react"
import { Steps } from "primereact/steps"
import { Card } from "primereact/card"
import { Button } from "primereact/button"
import { Dialog } from "primereact/dialog"
import StepOne from "./StepOne"
import StepTwo from "./StepTwo"
import StepThree from "./StepThree"
import StepFour from "./StepFour"
import type { formData } from "@/types/register"
import "primereact/resources/themes/lara-light-blue/theme.css"
import "primereact/resources/primereact.min.css"

export default function RegistrationForm() {
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState<formData>({
    id: 0,
    tipoPersona: '',
    razonSocial: '',
    nombreComercial: '',
    rfc: '',
    regimenFiscal: '',
    usoCFDI: '',
    correoFactura: '',
    calleFiscal: '',
    numExtFiscal: '',
    numIntFiscal: '',
    codigoPostalFiscal: '',
    coloniaFiscal: '',
    telefonoFiscal: '',
    whatsappFiscal: '',
    estadoFiscal: '',
    ciudadFiscal: '',
    actSHCPFiscal: '',
    nombreLegalFiscal: '',
    nombreCompras: '',
    apellidoCompras: '',
    correoCompras: '',
    telefonoCompras: '',
    extensionCompras: '',
    whatsappCompras: '',
    nombrePago: '',
    apellidoPago: '',
    correoPago: '',
    telefonoPago: '',
    extensionPago: '',
    whatsappPago: '',
    giroNegocio: '',
    nombreGiroNegocio: '',
    redSocial: '',
    nombreRedSocial: '',
    calleEntrega: '',
    numExtEntrega: '',
    numIntEntrega: '',
    coloniaEntrega: '',
    codigoPostalEntrega: '',
    estadoEntrega: '',
    ciudadEntrega: '',
    actaConstitutiva: '',
    constanciaFiscal: '',
    comprobanteDomicilio: '',
    edoCuenta: '',
    ine: '',
    acceptedTerms: false,
    acceptedWarranty: false,
    acceptedPrivacy: false,
  })
  const [showDialog, setShowDialog] = useState(true)

  const steps = [
    { label: "Información Fiscal" },
    { label: "Información de Contacto" },
    { label: "Información Comercial" },
    { label: "Documentación" },
  ]

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3))
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0))

  const updateFormData = (newData: any) => {
    setFormData((prevData: any) => ({ ...prevData, ...newData }))
  }

  const onSubmit = async () => {
    console.log(formData)
    // Aquí iría la lógica para enviar los datos al servidor
    try {
      const response = await fetch("https://api.example.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Error al enviar los datos")
      }

      const result = await response.json()
      console.log("Datos enviados correctamente:", result)

      // Enviar correo con la información del formulario
      await sendEmail(formData)
    } catch (error) {
      console.error("Error al enviar los datos:", error)
    }
  }

  const sendEmail = async (data: any) => {
    try {
      const response = await fetch("https://api.example.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "asistente_desarrollador@cadtoner.com.mx",
          subject: "Nueva Solicitud de Registro",
          text: `Se ha recibido una nueva solicitud de registro con la siguiente información: ${JSON.stringify(data, null, 2)}`,
        }),
      })

      if (!response.ok) {
        throw new Error("Error al enviar el correo")
      }

      const result = await response.json()
      console.log("Correo enviado correctamente:", result)
    } catch (error) {
      console.error("Error al enviar el correo:", error)
    }
  }

  const renderStep = () => {
    switch (step) {
      case 0:
        return <StepOne formData={formData} updateFormData={updateFormData} />
      case 1:
        return <StepTwo formData={formData} updateFormData={updateFormData} />
      case 2:
        return <StepThree formData={formData} updateFormData={updateFormData} />
      case 3:
        return <StepFour formData={formData} updateFormData={updateFormData} />
      default:
        return null
    }
  }

  return (
    <div className="max-w-[1200px] mx-auto p-4">
      <Card>
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Formulario de solicitud del cliente</h1>
          <p className="text-xl text-pink-500 font-medium">BIENVENIDO</p>
          <p className="text-gray-600">Gracias por su tiempo en llenar su solicitud</p>
        </div>

        <Steps
          model={steps}
          activeIndex={step}
          className="mb-6"
          pt={{
            root: { className: "border-none" },
            action: { className: "bg-[#006699] hover:bg-[#005588]" },
          }}
        />

        {renderStep()}

        <div className="flex justify-between pt-6">
          <Button label="Anterior" severity="secondary" onClick={prevStep} disabled={step === 0} />
          {step < 3 ? (
            <Button label="Siguiente" onClick={nextStep} severity="info" />
          ) : (
            <Button label="Enviar" severity="success" onClick={onSubmit} />
          )}
        </div>
      </Card>

      <Dialog
        header="Aviso Importante"
        visible={showDialog}
        style={{ width: '50vw' }}
        onHide={() => setShowDialog(false)}
        footer={
          <div>
            <Button label="Aceptar" onClick={() => setShowDialog(false)} />
          </div>
        }
      >
        <p>Por favor, lea los siguientes documentos antes de continuar con el registro:</p>
        <ul className="list-disc list-inside">
          <li><a href="/aviso-privacidad" target="_blank" className="text-blue-500 underline">Aviso de Privacidad</a></li>
          <li><a href="/terminos-condiciones" target="_blank" className="text-blue-500 underline">Términos y Condiciones</a></li>
          <li><a href="/politicas-garantia" target="_blank" className="text-blue-500 underline">Políticas de Garantía</a></li>
        </ul>
      </Dialog>
    </div>
  )
}

