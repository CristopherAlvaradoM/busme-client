"use client"
import React, { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import BusmeSelectHours from "@/app/components/BusmeSelectHours";
import BusmeCard from "@/app/components/BusmeCard";
import BusmePageHeader from "@/app/components/BusmePageHeader";
import BusmeInput from "@/app/components/BusmeInput";
import BusmeSecondaryButton from "@/app/components/BusmeSecondaryButton";
import BusmeModal from "@/app/components/BusmeModal";
import { Formik, Field} from 'formik';


export default function NewRoutePage() {

  const [departureTime, setDepartureTime] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");

  const handleDepartureTimeChange = (e: React.ChangeEvent<HTMLInputElement>, setFieldValue: Function) => {
    const { value } = e.target;
    setFieldValue('departureTime', value); // Actualiza el valor de departureTime en el estado del formulario
    setDepartureTime(value); // Actualiza el estado local departureTime
  };
  
  const handleArrivalTimeChange = (e: React.ChangeEvent<HTMLInputElement>, setFieldValue: Function) => {
    const { value } = e.target;
    setFieldValue('arrivalTime', value); // Actualiza el valor de arrivalTime en el estado del formulario
    setArrivalTime(value); // Actualiza el estado local arrivalTime
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función para abrir el modal
  const openModal = () => {
      setIsModalOpen(true);
  };
  // Función para cerrar el modal
  const closeModal = () => {
      setIsModalOpen(false);
  };

  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: 'weekly'
      });

      const google = await loader.load();
      if (!google) {
        console.error("No se pudo cargar la API de Google Maps");
        return;
      }

      const position = {
        lat: 20.48387113788655,
        lng: -103.53318376345612
      };

      const mapOptions = {
        center: position,
        zoom: 15,
        mapId: "MY_NEXTJS_MAPID",
      };

      const map = new google.maps.Map(mapRef.current as HTMLDivElement, mapOptions);

      new google.maps.Marker({
        map,
        position,
      });
    };

    initMap();
  }, []);
  
  return (
    <div>
      <BusmePageHeader 
        rol={"Administrador"} 
        title={"Nueva Ruta"} 
        username={"GalloDeOro"} 
        showBackIcon={true} 
      />
      <div>
        <BusmeCard>
        <Formik
          initialValues={{name: '', departureTime: '', arrivalTime: '', driverName: '', driverLastName: '', driverEmail: '', employeeNumber: ''}}
          validate={values => {
            const errors: any = {};
            if (!values.name) {
              errors.name = 'Campo requerido';
            }
            if (!values.driverName) {
              errors.driverName = 'Campo requerido';
            }
            if (!values.driverLastName) {
              errors.driverLastName = 'Campo requerido';
            }
            if (!values.driverEmail) {
              errors.driverEmail = 'Campo requerido';
            }
            if (!values.employeeNumber) {
              errors.employeeNumber = 'Campo requerido';
            }
            if (!values.departureTime) {
              errors.departureTime = 'Campo requerido';
            }
            if (!values.arrivalTime) {
              errors.arrivalTime = 'Campo requerido';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            // Realiza las acciones de envío del formulario aquí
            console.log(values);
            setSubmitting(false);
          }}
        >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue }) => (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-8">
            <div className="w-full flex flex-row gap-8">
              <div className="flex flex-col w-4/12">
                <p className="subtitle-text">Información de la ruta</p>
                <div className="">
                  <BusmeInput name={"name"} title={"Nombre"}
                    placeholder={"Ingresa el nombre del vehículo"}
                    type={"text"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    validation={errors.name}
                  />
                  <div className="grid grid-cols-2 gap-x-8">
                  <BusmeSelectHours
                    placeholder="Hora de salida"
                    value={departureTime}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleDepartureTimeChange(e, setFieldValue)}
                    validation={errors.departureTime} 
                  />
                  <BusmeSelectHours
                    placeholder="Hora de llegada"
                    value={arrivalTime}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleArrivalTimeChange(e, setFieldValue)}
                    validation={errors.arrivalTime}
                  />
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-8/12">
                <p className="subtitle-text">Chofer asignado</p>
                <div className="grid grid-cols-2 gap-x-8">
                  <BusmeInput name={"driverName"} title={"Nombre(s)"}
                    placeholder={"Ingresa el nombre del chofer"}
                    type={"text"}
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    value={values.driverName}
                    validation={errors.driverName} 
                  />
                  <BusmeInput name={"driverLastName"} title={"Apellido(s)"}
                    placeholder={"Ingresa el apellido del chofer"}
                    type={"text"}
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    value={values.driverLastName}
                    validation={errors.driverLastName} 
                  />
                  <BusmeInput name={"driverEmail"} title={"Correo"}
                    placeholder={"correo@ejemplo.com"}
                    type={"email"}
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    value={values.driverEmail}
                    validation={errors.driverEmail} 
                  />
                  <BusmeInput name={"employeeNumber"} title={"Número de empleado"}
                    placeholder={"Ingresa el número de empleado"}
                    type={"text"}
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    value={values.employeeNumber}
                    validation={errors.employeeNumber} 
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-row gap-x-8">
              <div className="flex flex-col w-4/12 h-full">
                <p className="subtitle-text">Mapa de la ruta</p>
                <div className="flex flex-col">
                  <p className="body-text mt-5">Añade los puntos de abordaje</p>
                  <div className="h-60 overflow-auto">
                    <BusmeInput name={"destination"} title={""}
                      placeholder={"Nombre del punto"}
                      type={"text"}
                      onChange={() => {}} 
                      onBlur={() => {}}
                      value={''}
                      validation={''} 
                    />
                    <BusmeInput name={"destination"} title={""}
                      placeholder={"Nombre del punto"}
                      type={"text"}
                      onChange={() => {}} 
                      onBlur={() => {}}
                      value={''}
                      validation={''} 
                    />
                    <BusmeInput name={"destination"} title={""}
                      placeholder={"Nombre del punto"}
                      type={"text"}
                      onChange={() => {}} 
                      onBlur={() => {}}
                      value={''}
                      validation={''} 
                    />
                 </div>
                 <BusmeSecondaryButton 
                    title={"Añadir nuevo punto"} 
                    disabled={false} 
                    onClick={openModal}
                  /> 
                  <BusmeModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    showIcon={true}
                    successButtonTitle="Aceptar"
                    buttonFunction={() => {
                        // Lógica que quieres ejecutar cuando se presiona el botón de éxito
                        console.log("Botón de éxito presionado");
                        closeModal(); // Cierra el modal después de ejecutar la lógica
                    }}
                    disabled={false} // Cambia esto según sea necesario
                  >
                    {/* Contenido del modal */}
                    <div className="w-full h-full">
                      <p className="modal-title-text">Nuevo punto de abordaje</p>
                      <p className="modal-body-text">Agrega la información para el nuevo punto de abordaje</p>
                      <BusmeInput name={"namepuntdeabordaje"} title={"Nombre"}
                        placeholder={"Ingresa el nombre del punto de abordaje"}
                        type={"text"}
                        onChange={() => {}} 
                        onBlur={() => {}}
                        value={''}
                        validation={''} 
                      />
                      <div className="grid grid-cols-2 gap-x-8 mb-4">
                        <BusmeInput 
                          name={"latitude"} 
                          title={"Latitud"} 
                          placeholder={"Ingresa la latitud"} 
                          type={"text"} 
                          onChange={() => {}} 
                          onBlur={() => {}} 
                          value={''} 
                          validation={''} 
                        />
                        <BusmeInput 
                          name={"longitude"} 
                          title={"Longitud"} 
                          placeholder={"Ingresa la longitud"} 
                          type={"text"} 
                          onChange={() => {}} 
                          onBlur={() => {}} 
                          value={''} 
                          validation={''} 
                        />
                      </div>
                    </div> 
                  </BusmeModal>
                </div>
              </div>
              <div className="w-8/12 h-full">
                <div ref={mapRef} style={{ width: "100%", height: "380px", borderRadius: "10px" }}></div>
              </div>
            </div>
          </div>
          <div className="mb-2 mt-4">
            <BusmeSecondaryButton 
              title={"Generar nueva ruta"} 
              disabled={isSubmitting}
            />
          </div>
        </form>
        )}
        </Formik>
        </BusmeCard>
      </div>
    </div>
  );
}