"use client"

import { FileUpload } from "primereact/fileupload"
import { Checkbox, CheckboxChangeEvent } from "primereact/checkbox"
import { Dialog } from "primereact/dialog"
import { useState } from "react"
import { formData } from "@/types/register"
import Terminos from "../terminos"
import Politicas from "../politicas"
import Aviso from "../aviso"

interface StepFourProps {
  formData: formData
  updateFormData: (newData: Partial<formData>) => void
}

export default function StepFour({ formData, updateFormData }: StepFourProps) {
  const [acceptedTerms, setAcceptedTerms] = useState(formData.acceptedTerms || false)
  const [acceptedWarranty, setAcceptedWarranty] = useState(formData.acceptedWarranty || false)
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(formData.acceptedPrivacy || false)
  const [showTermsDialog, setShowTermsDialog] = useState(false)
  const [showWarrantyDialog, setShowWarrantyDialog] = useState(false)
  const [showPrivacyDialog, setShowPrivacyDialog] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<{ [key: string]: string }>({})

  const handleFileUpload = (event: any, fieldName: string) => {
    const file = event.files[0];
    if (!file) return;

    // Validar tipo de archivo
    const allowedTypes = [
      "application/pdf",                                      // PDF
      "image/jpeg",                                            // JPEG
      "image/png",                                             // PNG
      "application/msword",                                    // .doc
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document" // .docx
    ];
    if (!allowedTypes.includes(file.type)) {
      alert("Solo se permiten archivos PDF, .DOC, .DCOX, JPG o PNG.");
      return;
    }

    // Validar tamaño del archivo (por ejemplo, 5 MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("El archivo es demasiado grande. El tamaño máximo permitido es de 5 MB.");
      return;
    }

    // Actualizar el estado con el archivo
    updateFormData({ [fieldName]: file });
    setUploadedFiles((prev) => ({ ...prev, [fieldName]: file.name }));
  }

  const handleCheckboxChange = (e: CheckboxChangeEvent, fieldName: string) => {
    const checked = e.checked || false
    if (!checked) {
      updateFormData({ [fieldName]: checked })
      switch (fieldName) {
        case 'acceptedTerms':
          setAcceptedTerms(checked)
          break
        case 'acceptedWarranty':
          setAcceptedWarranty(checked)
          break
        case 'acceptedPrivacy':
          setAcceptedPrivacy(checked)
          break
        default:
          break
      }
    } else {
      switch (fieldName) {
        case 'acceptedTerms':
          setShowTermsDialog(true)
          break
        case 'acceptedWarranty':
          setShowWarrantyDialog(true)
          break
        case 'acceptedPrivacy':
          setShowPrivacyDialog(true)
          break
        default:
          break
      }
    }
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
      {uploadedFiles[name] && (
        <p className="text-sm text-green-600">Archivo: {uploadedFiles[name]}</p>
      )}
      <span className="text-slate-400 text-xs">Archivos aceptados: .pdf,.doc,.docx,.jpg,.jpeg,.png</span>
    </div>
  )

  const handleDialogAccept = (fieldName: string) => {
    switch (fieldName) {
      case 'acceptedTerms':
        setAcceptedTerms(true)
        updateFormData({ acceptedTerms: true })
        setShowTermsDialog(false)
        break
      case 'acceptedWarranty':
        setAcceptedWarranty(true)
        updateFormData({ acceptedWarranty: true })
        setShowWarrantyDialog(false)
        break
      case 'acceptedPrivacy':
        setAcceptedPrivacy(true)
        updateFormData({ acceptedPrivacy: true })
        setShowPrivacyDialog(false)
        break
      default:
        break
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">DOCUMENTACIÓN</h2>
      <div className="space-y-4">
        <FileUploadField name="actaConstitutiva" label="Acta Constitutiva" />
        <FileUploadField name="constanciaFiscal" label="Constancia de Situación Fiscal" />
        <FileUploadField name="comprobanteDomicilio" label="Comprobante de Domicilio" />
        <FileUploadField name="edoCuenta" label="Carátula de Estado de Cuenta Bancario (últimos 3 meses)" />
        <FileUploadField name="ine" label="Credencial de Elector INE (representante de la empresa)" />
      </div>
      <div className="space-y-2">
        <Checkbox
          className="general-checkbox"
          inputId="acceptTerms"
          checked={acceptedTerms}
          onChange={(e) => handleCheckboxChange(e, 'acceptedTerms')}
        />
        <label htmlFor="acceptTerms" className="ml-2 text-gray-700">
          Acepto los <a href="/terminos-condiciones" target="_blank" className="text-blue-500 hover:underline">Términos y Condiciones</a>
        </label>
      </div>
      <div className="space-y-2">
        <Checkbox
          className="general-checkbox"
          inputId="acceptWarranty"
          checked={acceptedWarranty}
          onChange={(e) => handleCheckboxChange(e, 'acceptedWarranty')}
        />
        <label htmlFor="acceptWarranty" className="ml-2 text-gray-700">
          Acepto las <a href="/politicas-garantia" target="_blank" className="text-blue-500 hover:underline">Políticas de Garantía Cad Toner</a>
        </label>
      </div>
      <div className="space-y-2">
        <Checkbox
          className="general-checkbox"
          inputId="acceptPrivacy"
          checked={acceptedPrivacy}
          onChange={(e) => handleCheckboxChange(e, 'acceptedPrivacy')}
        />
        <label htmlFor="acceptPrivacy" className="ml-2 text-gray-700">
          Acepto el <a href="/aviso-privacidad" target="_blank" className="text-blue-500 hover:underline">Aviso de privacidad</a>
        </label>
      </div>

      {/* Dialogs */}
      <Dialog
        header="Términos y Condiciones"
        visible={showTermsDialog}
        onHide={() => setShowTermsDialog(false)} id="termsDialog"
        className="w-[80vw] sm:w-[90vw] max-w-[800px]" // Tailwind clases
        contentStyle={{ maxHeight: '80vh', overflowY: 'auto' }} // opcional para scroll interno
      >
        <Terminos />
        <div className="flex justify-end mt-4">
          <button onClick={() => handleDialogAccept('acceptedTerms')} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ml-2">
            Aceptar
          </button>
        </div>
      </Dialog>

      <Dialog
        header="Políticas de Garantía"
        visible={showWarrantyDialog}
        onHide={() => setShowWarrantyDialog(false)} id="warrantyDialog"
        className="w-[80vw] sm:w-[90vw] max-w-[800px]" // Tailwind clases
        contentStyle={{ maxHeight: '80vh', overflowY: 'auto' }} // opcional para scroll interno
      >
        <Politicas />
        <div className="flex justify-end mt-4">
          <button onClick={() => handleDialogAccept('acceptedWarranty')} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ml-2">
            Aceptar
          </button>
        </div>
      </Dialog>

      <Dialog
        header="Aviso de Privacidad"
        visible={showPrivacyDialog}
        onHide={() => setShowPrivacyDialog(false)} id="privacyDialog"
        className="w-[80vw] sm:w-[90vw] max-w-[800px]" // Tailwind clases
        contentStyle={{ maxHeight: '80vh', overflowY: 'auto' }} // opcional para scroll interno
      >
        <Aviso />
        <div className="flex justify-end mt-4">
          <button onClick={() => handleDialogAccept('acceptedPrivacy')} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ml-2">
            Aceptar
          </button>
        </div>
      </Dialog>
    </div>
  )
}

