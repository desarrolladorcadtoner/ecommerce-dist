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

export default function RegistrationForm() {
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState<formData>({
    IdDistribuidor: 0,
    idMunicipio: '',
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
    actaConstitutiva: null,
    constanciaFiscal: null,
    comprobanteDomicilio: null,
    edoCuenta: null,
    ine: null,
    acceptedTerms: false,
    acceptedWarranty: false,
    acceptedPrivacy: false,
  });
  const [visible, setVisible] = useState(false);
  const [showDialog, setShowDialog] = useState(true);
  const [dialogMessage, setDialogMessage] = useState(''); // Estado para el mensaje del diálogo

  // Función para reiniciar el formulario
  const resetForm = () => {
    setFormData({
      IdDistribuidor: 0,
      idMunicipio: '',
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
      actaConstitutiva: null,
      constanciaFiscal: null,
      comprobanteDomicilio: null,
      edoCuenta: null,
      ine: null,
      acceptedTerms: false,
      acceptedWarranty: false,
      acceptedPrivacy: false,
    });
    setStep(0); // Regresar al primer paso
  };

  const steps = [
    { label: "Información Fiscal" },
    { label: "Información de Contacto" },
    { label: "Información Comercial" },
    { label: "Documentación" },
  ]

  const nextStep = () => {
    //setStep((prev) => Math.min(prev + 1, 3));
    if (validateStep()) {
     setStep((prev) => Math.min(prev + 1, 3));
     }
  }

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0))

  const updateFormData = (newData: Partial<formData>) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  const onSubmit = async () => {
    if (!validateStep()) return;

    try {
      const formDataToSend = new FormData();

      // Agregar datos generales al FormData
      formDataToSend.append("general", JSON.stringify({
        TipoPersona: formData.tipoPersona,
        RazonSocial: formData.razonSocial,
        NombreComercial: formData.nombreComercial,
        RFC: formData.rfc,
        RegimenFiscal: String(formData.regimenFiscal),
        UsoCFDI: formData.usoCFDI,
        CorreoFact: formData.correoFactura,
        Calle: formData.calleFiscal,
        N_Ext: formData.numExtFiscal,
        N_Int: formData.numIntFiscal,
        CodigoPostal: formData.codigoPostalFiscal,
        Colonia: formData.coloniaFiscal,
        Telefono: formData.telefonoFiscal,
        whatsApp: formData.whatsappFiscal,
        Estado: formData.estadoFiscal,
        Ciudad: formData.ciudadFiscal,
        ActividadPrincSHCP: formData.actSHCPFiscal,
        NomRepresentanteLegal: formData.nombreLegalFiscal,
      }));

      // Agregar datos de contacto al FormData
      formDataToSend.append("contacto", JSON.stringify({
        nombreCompras: formData.nombreCompras,
        apellidoCompras: formData.apellidoCompras,
        correoCompras: formData.correoCompras,
        telefonoCompras: formData.telefonoCompras,
        extensionCompras: formData.extensionCompras,
        whatsappCompras: formData.whatsappCompras,
        nombrePago: formData.nombrePago,
        apellidoPago: formData.apellidoPago,
        correoPago: formData.correoPago,
        telefonoPago: formData.telefonoPago,
        extensionPago: formData.extensionPago,
        whastappPago: formData.whatsappPago,
      }));

      // Agregar datos del negocio al FormData
      formDataToSend.append("negocio", JSON.stringify({
        giroNegocio: formData.giroNegocio,
        nombreGiroNegocio: formData.nombreGiroNegocio,
        redSocial: formData.redSocial,
        nombreRedSocial: formData.nombreRedSocial,
        calleEntrega: formData.calleEntrega,
        numExtEntrega: formData.numExtEntrega,
        numIntEntrega: formData.numIntEntrega,
        coloniaEntrega: formData.coloniaEntrega,
        codigoPostalEntrega: formData.codigoPostalEntrega,
        estadoEntrega: formData.estadoEntrega,
        ciudadEntrega: formData.ciudadEntrega,
      }));

      // Agregar archivos al FormData
      if (formData.actaConstitutiva) {
        formDataToSend.append("actaConstitutiva", formData.actaConstitutiva);
      }
      if (formData.constanciaFiscal) {
        formDataToSend.append("constanciaFiscal", formData.constanciaFiscal);
      }
      if (formData.comprobanteDomicilio) {
        formDataToSend.append("comprobanteDomicilio", formData.comprobanteDomicilio);
      }
      if (formData.edoCuenta) {
        formDataToSend.append("edoCuenta", formData.edoCuenta);
      }
      if (formData.ine) {
        formDataToSend.append("ine", formData.ine);
      }

      // **Agregar el console.log aquí**
      console.log("Datos enviados al backend:");
      for (const [key, value] of formDataToSend.entries()) {
        console.log(`${key}:`, value);
      }

      // Enviar los datos al backend
      const response = await fetch("https://172.100.203.36:8000/register/registro", {
        method: "POST",
        body: formDataToSend, // Enviar como FormData
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error al enviar los datos: ${response.status} ${response.statusText} - ${errorText}`);
      }

      // Si la solicitud es exitosa, actualiza el mensaje del diálogo
      setDialogMessage(
        `Datos enviados correctamente, en un lapso de 24 a 72 horas recibirás un correo aceptando o denegando tu solicitud como distribuidor a Cad Toner al correo registrado: ${formData.correoFactura}`
      );

      // Reiniciar el formulario
      resetForm();
    } catch (error) {
      console.error("Error al enviar los datos:", error);

      // Si ocurre un error, actualiza el mensaje del diálogo
      setDialogMessage("Error al enviar, inténtelo nuevamente.");
    } finally {
      // Mostrar el diálogo
      setVisible(true);
    }
  };

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

  const validateAllFields = () => {
    const requiredFields = [
      "tipoPersona",
      "razonSocial",
      "rfc",
      "regimenFiscal",
      "usoCFDI",
      "correoFactura",
      "calleFiscal",
      "numExtFiscal",
      "codigoPostalFiscal",
      "coloniaFiscal",
      "telefonoFiscal",
      "nombreCompras",
      "correoCompras",
      "telefonoCompras",
      "nombrePago",
      "correoPago",
      "telefonoPago",
      "calleEntrega",
      "numExtEntrega",
      "codigoPostalEntrega",
      "coloniaEntrega",
      "estadoEntrega",
      "ciudadEntrega",
    ];

    let isValid = true;

    requiredFields.forEach((field) => {
      if (!formData[field as keyof formData]) {
        console.error(`El campo ${field} es obligatorio.`);
        isValid = false;
      }
    });

    return isValid;
  };

  const requiredFieldsByStep: { [key: number]: (keyof formData)[] } = {
    0: ["tipoPersona", "razonSocial", "rfc", "regimenFiscal", 
      "usoCFDI", "correoFactura", "calleFiscal", "numExtFiscal",
       "coloniaFiscal", "codigoPostalFiscal", "telefonoFiscal", "whatsappFiscal", 
       "ciudadFiscal", "nombreLegalFiscal", "actSHCPFiscal"],
    1: ["nombreCompras", "apellidoCompras", "correoCompras", "telefonoCompras", 
      "whatsappCompras", "nombrePago", "apellidoPago", "correoPago", 
      "telefonoPago", "whatsappPago"],
    2: ["giroNegocio"],
    3: ["nombreCompras", "correoCompras"],
  };

  const validateStep = () => {
    switch (step) {
      case 0:
        if (!formData.tipoPersona || !formData.razonSocial || !formData.rfc) {
          alert("Por favor, complete todos los campos obligatorios en Información Fiscal.");
          return false;
        }
        break;
      case 1:
        if (!formData.nombreCompras || !formData.correoCompras || !formData.telefonoCompras) {
          alert("Por favor, complete todos los campos obligatorios en Contacto de Compras.");
          return false;
        }
        break;
      // Agrega validaciones para otros pasos
      default:
        break;
    }

    return true;
  };

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
          className="mb-6 sm:overflow-hidden sm:overflow-x-auto sm:whitespace-pre-wrap"
          pt={{
            root: { className: "border-none " },
            action: { className: "bg-[#006699] hover:bg-[#005588]" },
          }}
        />

        {renderStep()}

        <div className="flex justify-between pt-6">
          <Button label="Anterior" severity="secondary" onClick={prevStep} disabled={step === 0} />
          {step < 3 ? (
            <Button label="Siguiente" onClick={nextStep} severity="info" />
          ) : (
              <Button label="Enviar" severity="success" onClick={() => { setVisible(true); onSubmit(); }} />
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

      <Dialog 
      header="Respuesta de solicitud"  
      visible={visible} 
      style={{ width: '50vw' }} 
      onHide={() => { if (!visible) return; setVisible(false); }}
      >
        <p className="m-0">
          {dialogMessage}
        </p>
      </Dialog>
    </div>
  )
}

