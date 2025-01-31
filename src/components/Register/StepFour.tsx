"use client"

import { FileUpload } from "primereact/fileupload"

interface StepFourProps {
  formData: any
  updateFormData: (newData: any) => void
}

export default function StepFour({ formData, updateFormData }: StepFourProps) {
  const handleFileUpload = (event: any, fieldName: string) => {
    const file = event.files[0]
    updateFormData({ [fieldName]: file })
  }

  const FileUploadField = ({ name, label }: { name: string; label: string }) => (
    <div className="space-y-2">
      <label className="block text-sm font-medium">
        {label}
        <span className="text-red-500">*</span>
      </label>
      <FileUpload
        mode="basic"
        auto
        chooseLabel="Seleccionar archivo"
        className="w-full"
        onSelect={(e) => handleFileUpload(e, name)}
        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
      />
    </div>
  )

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">DOCUMENTACIÓN</h2>
      <div className="space-y-4">
        <FileUploadField name="actaConstitutiva" label="Acta Constitutiva" />
        <FileUploadField name="constanciaSituacionFiscal" label="Constancia de Situación Fiscal" />
        <FileUploadField name="comprobanteDomicilio" label="Comprobante de Domicilio" />
        <FileUploadField name="caratulaEstadoCuenta" label="Carátula de Estado de Cuenta Bancario (últimos 3 meses)" />
        <FileUploadField name="credencialElectorINE" label="Credencial de Elector INE (representante de la empresa)" />
      </div>
    </div>
  )
}

