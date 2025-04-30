"use client"

import { useEffect, useState } from "react"
import { InputText } from "primereact/inputtext"
import { Dropdown } from "primereact/dropdown"
import { formData } from "@/types/register"
import InputTextForm from "../Inputs/InputTextForm"

interface StepThreeProps {
  formData: formData
  updateFormData: (newData: Partial<formData>) => void
}

export default function StepThree({ formData, updateFormData }: StepThreeProps) {
  const [showOtherInput, setShowOtherInput] = useState(formData.giroNegocio === "otra");
  const [estadoOptions, setEstadoOptions] = useState<{ label: string; value: string }[]>([]);
  const [ciudadOptions, setCiudadOptions] = useState<{ label: string; value: string }[]>([]);

  // Obtener los estados desde la API
  useEffect(() => {
    fetch("http://172.100.203.36:8001/register/estados")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const options = data.map((estado: any) => ({
            label: estado.nombre_estado, // Usar el nombre del estado
            value: estado.id_estado, // Usar el ID del estado como valor
          }));
          setEstadoOptions(options);
        } else {
          console.error("Error: La respuesta de la API no es un array");
        }
      })
      .catch((error) => console.error("Error fetching estados:", error));
  }, []);

  // Obtener los municipios según el estado seleccionado
  const fetchMunicipios = (id_estado: string) => {
    fetch(`http://172.100.203.36:8001/register/municipios/${id_estado}`)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const options = data.map((municipio: any) => ({
            label: municipio.nombre_municipio, // Usar el nombre del municipio
            value: municipio.id_municipio, // Usar el ID del municipio como valor
          }));
          setCiudadOptions(options);
        } else {
          console.error("Error: La respuesta de la API no es un array");
        }
      })
      .catch((error) => console.error("Error fetching municipios:", error));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    updateFormData({ [name]: value })
  }

  const handleDropdownChange = (e: { value: any; target: { name: string } }) => {
    updateFormData({ [e.target.name]: e.value })
    if (e.target.name === "giroNegocio" && e.value === "otra") {
      setShowOtherInput(true)
    } else if (e.target.name === "giroNegocio") {
      setShowOtherInput(false)
      updateFormData({ nombreGiroNegocio: "" }) // Clear the other input field if not selected
    }
  }

  // Manejar cambios en el dropdown de estados
  const handleEstadoChange = (e: { value: string }) => {
    const id_estado = e.value;
    updateFormData({ estadoFiscal: id_estado }); // Actualizar el estado seleccionado en formData
    fetchMunicipios(id_estado); // Obtener los municipios del estado seleccionado
    updateFormData({ ciudadFiscal: "" }); // Limpiar el municipio seleccionado
  };

  // Manejar cambios en el dropdown de municipios
  const handleMunicipioChange = (e: { value: string }) => {
    const idMunicipio = e.value;
    updateFormData({ ciudadFiscal: idMunicipio }); // Actualizar el municipio seleccionado en formData
  };

  const giroNegocioOptions = [
    { label: "Retail", value: "retail" },
    { label: "Manufactura", value: "manufactura" },
    { label: "Servicios", value: "servicios" },
    { label: "Tecnología", value: "tecnologia" },
    { label: "Otra", value: "otra" },
  ]

  const redSocialOptions = [
    { label: "Facebook", value: "facebook" },
    { label: "Instagram", value: "instagram" },
    { label: "X", value: "twitter" },
    { label: "LinkedIn", value: "linkedin" },
    { label: "Página Web", value: "pagina_web" },
  ]

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
              options={giroNegocioOptions}
              value={formData.giroNegocio}
              onChange={handleDropdownChange}
              placeholder="Seleccione giro"
              className="w-full general-dropdown"
              name="giroNegocio"
            />
          </div>
          {showOtherInput && (
            <div className="space-y-2">
              <label className="block text-sm font-medium">
                Nombre de Giro<span className="text-red-500">*</span>
              </label>
              <InputText
                className="w-full general-input"
                name="nombreGiroNegocio"
                value={formData.nombreGiroNegocio || ""}
                onChange={handleInputChange}
              />
            </div>
          )}

          <div className="space-y-2">
            <label className="block text-sm font-medium">Red social</label>
            <Dropdown
              options={redSocialOptions}
              value={formData.redSocial}
              onChange={handleDropdownChange}
              placeholder="Seleccione red social"
              className="w-full general-dropdown"
              name="redSocial"
            />
          </div>

          <InputTextForm
            tittleInput="Link red social"
            className="w-full general-input required"
            name="nombreRedSocial"
            value={formData.nombreRedSocial || ""}
            onChange={handleInputChange}
          />

          {/*<div className="space-y-2">
            <label className="block text-sm font-medium">
              Link red social<span className="text-red-500">*</span>
            </label>
            <InputText
              className="w-full general-input"
              name="nombreRedSocial"
              value={formData.nombreRedSocial || ""}
              onChange={handleInputChange}
            />
          </div>*/}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Dirección de entrega</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {/*<InputTextForm
            tittleInput="Link red social"
            className="w-full general-input required"
            name="nombreRedSocial"
            value={formData.nombreRedSocial || ""}
            onChange={handleInputChange}
          />*/}

          <InputTextForm
            tittleInput="Calle"
            className="w-full general-input required"
            name="calleEntrega"
            value={formData.calleEntrega || ""}
            onChange={handleInputChange}
          />

          <InputTextForm
            tittleInput="Número Exterior"
            className="w-full general-input required"
            name="numExtEntrega"
            value={formData.numExtEntrega || ""}
            onChange={handleInputChange}
          />

          <InputTextForm
            tittleInput="Número Interior"
            className="w-full general-input"
            name="numIntEntrega"
            value={formData.numIntEntrega || ""}
            onChange={handleInputChange}
          />

          <InputTextForm
            tittleInput="Colonia"
            className="w-full general-input required"
            name="coloniaFiscal"
            value={formData.coloniaFiscal || ""}
            onChange={handleInputChange}
          />

          <InputTextForm
            tittleInput="Código Postal"
            className="w-full general-input required"
            name="codigoPostalEntrega"
            value={formData.codigoPostalEntrega || ""}
            onChange={handleInputChange}
          />


          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Estado<span className="text-red-500">*</span>
            </label>
            <Dropdown
              options={estadoOptions}
              value={formData.estadoEntrega}
              onChange={handleEstadoChange}
              placeholder="Seleccione estado"
              className="w-full general-dropdown"
              name="estadoEntrega"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Municipio<span className="text-red-500">*</span>
            </label>
            <Dropdown
              options={ciudadOptions}
              value={formData.ciudadEntrega}
              onChange={handleMunicipioChange}
              placeholder="Seleccione ciudad"
              className="w-full general-dropdown"
              name="ciudadEntrega"
            />
          </div>
        </div>
      </div>
    </div>
  )
}


