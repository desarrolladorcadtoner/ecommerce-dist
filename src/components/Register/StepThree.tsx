"use client"

import { useEffect, useState } from "react"
import { InputText } from "primereact/inputtext"
import { Dropdown } from "primereact/dropdown"
import { Button } from "primereact/button"
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
  const [useDireccionFiscal, setUseDireccionFiscal] = useState<boolean | null>(null);
  const [selectedOption, setOption] = useState<"UseDirectionFiscal" | "AddDirection" | null>(null);
  const [visible, setVisible] = useState<boolean>(false);

  // Obtener los estados desde la API
  useEffect(() => {
    fetch("http://172.100.203.36:8000/register/estados")
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
    fetch(`http://172.100.203.36:8000/register/municipios/${id_estado}`)
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
    const selectedOption = estadoOptions.find((option) => option.value === e.value);
    if (selectedOption) {
      updateFormData({
        estadoEntrega: selectedOption.label,
        idMunicipio: selectedOption.value
      }); // Enviar el nombre del estado
      fetchMunicipios(e.value); // Obtener los municipios del estado seleccionado
      updateFormData({ ciudadEntrega: "" }); // Limpiar el municipio seleccionado
    }

  };

  // Manejar cambios en el dropdown de municipios
  const handleMunicipioChange = (e: { value: string }) => {
    const selectedOption = ciudadOptions.find((option) => option.value === e.value);
    if (selectedOption) {
      updateFormData({ ciudadEntrega: selectedOption.label }); // Enviar el nombre del municipio
    }
  };

  const giroNegocioOptions = [
    { label: "ventas al por menor", value: "retail" },
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

  useEffect(() => {
    if (useDireccionFiscal === true) {
      updateFormData({
        calleEntrega: formData.calleFiscal,
        numExtEntrega: formData.numExtFiscal,
        numIntEntrega: formData.numIntFiscal,
        coloniaEntrega: formData.coloniaFiscal,
        codigoPostalEntrega: formData.codigoPostalFiscal,
        estadoEntrega: formData.estadoFiscal,
        ciudadEntrega: formData.ciudadFiscal,
      });
    }
  }, [useDireccionFiscal]);

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
            className="w-full general-input uppercase"
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
        <h3 className="text-xl font-semibold">Dirección de entrega</h3>

        {visible ? ("")
          : (
            <div className="flex gap-4 mb-4">
              <Button
                label="Usar Dirección Fiscal"
                severity={useDireccionFiscal === true ? "success" : "secondary"}
                className={`w-auto p-2 h-10 ${selectedOption === "UseDirectionFiscal" ? "bg-blue-700" : "bg-blue-500"} mr-4 mt-8 shadow-md`}
                style={{ color: "white" }}
                onClick={() => {
                  setOption("UseDirectionFiscal");
                  setVisible(true);
                  setUseDireccionFiscal(true);

                  // Llama municipios para el estado fiscal
                  if (formData.idMunicipio) {
                    fetchMunicipios(formData.idMunicipio); // <-- Carga las ciudades
                  }
                }}
              />
              <Button
                label="Agregar Otra Dirección"
                severity={useDireccionFiscal === false ? "success" : "secondary"}
                className={`w-auto p-2 h-10 ${selectedOption === "AddDirection" ? "bg-blue-700" : "bg-blue-500"} mr-4 mt-8 shadow-md`}
                style={{ color: "white" }}
                onClick={() => {
                  setOption("AddDirection");
                  setVisible(true);
                  setUseDireccionFiscal(false);
                }}
              />
            </div>
          )}


        {visible ? (
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
              className="w-full general-input uppercase required"
              name="calleEntrega"
              value={useDireccionFiscal === true ? formData.calleFiscal : formData.calleEntrega || ""}
              onChange={handleInputChange}
              key="calleEntrega"
            />

            <InputTextForm
              tittleInput="Número Exterior"
              className="w-full general-input uppercase required"
              name="numExtEntrega"
              value={useDireccionFiscal === true ? formData.numExtFiscal : formData.numExtEntrega || ""}
              onChange={handleInputChange}
              key="numExtEntrega"
            />

            <InputTextForm
              tittleInput="Número Interior"
              className="w-full general-input uppercase"
              name="numIntEntrega"
              value={useDireccionFiscal === true ? formData.numIntFiscal : formData.numIntEntrega || ""}
              onChange={handleInputChange}
              key="numIntEntrega"
            />

            <InputTextForm
              tittleInput="Colonia"
              className="w-full general-input uppercase required"
              name="coloniaEntrega"
              value={useDireccionFiscal === true ? formData.coloniaFiscal : formData.coloniaEntrega || ""}
              onChange={handleInputChange}
              key="coloniaEntrega"
            />

            <InputTextForm
              tittleInput="Código Postal"
              className="w-full general-input uppercase required"
              name="codigoPostalEntrega"
              value={useDireccionFiscal === true ? formData.codigoPostalFiscal : formData.codigoPostalEntrega || ""}
              onChange={handleInputChange}
              key="codigoPostalEntrega"
            />

            {selectedOption === "UseDirectionFiscal" ? (
              <>
                <div className="space-y-2">
                  <label className="block text-sm font-medium">
                    Estado<span className="text-red-500">*</span>
                  </label>
                  <Dropdown
                    options={estadoOptions}
                    value={estadoOptions.find((option) => option.label === formData.estadoFiscal)?.value || ""}
                    onChange={handleEstadoChange}
                    placeholder="Seleccione estado"
                    className="w-full general-dropdown"
                    name="estadoFiscal"
                    disabled
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium">
                    Municipio<span className="text-red-500">*</span>
                  </label>
                  <Dropdown
                    options={ciudadOptions}
                    value={ciudadOptions.find((option) => option.label === formData.ciudadFiscal)?.value || ""}
                    onChange={handleMunicipioChange}
                    placeholder="Seleccione municipio"
                    className="w-full general-dropdown"
                    name="ciudadFiscal"
                    disabled
                  />
                </div>
              </>
            ) : (
              <>
                <div className="space-y-2">
                  <label className="block text-sm font-medium">
                    Estado<span className="text-red-500">*</span>
                  </label>
                  <Dropdown
                    options={estadoOptions}
                    value={estadoOptions.find((option) => option.label === formData.estadoEntrega)?.value || ""}
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
                    value={ciudadOptions.find((option) => option.label === formData.ciudadEntrega)?.value || ""}
                    onChange={handleMunicipioChange}
                    placeholder="Seleccione municipio"
                    className="w-full general-dropdown"
                    name="ciudadEntrega"
                  />
                </div>
              </>
            )}

          </div>
        ) : ("")}


      </div>
    </div>
  )
}


