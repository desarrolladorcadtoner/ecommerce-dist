"use client"

import { useState } from "react"
import { Steps } from "primereact/steps"
import { Card } from "primereact/card"
import { Button } from "primereact/button"
import StepOne from "./StepOne"
import StepTwo from "./StepTwo"
import StepThree from "./StepThree"
import StepFour from "./StepFour"
import "primereact/resources/themes/lara-light-blue/theme.css"
import "primereact/resources/primereact.min.css"

export default function RegistrationForm() {
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState({})

  const steps = [
    { label: "Información Fiscal" },
    { label: "Información de Contacto" },
    { label: "Información Comercial" },
    { label: "Documentación" },
  ]

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3))
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0))

  const updateFormData = (newData: any) => {
    setFormData((prevData) => ({ ...prevData, ...newData }))
  }

  const onSubmit = () => {
    console.log(formData)
    // Aquí iría la lógica para enviar los datos al servidor
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
    </div>
  )
}

