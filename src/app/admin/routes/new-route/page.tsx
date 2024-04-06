"use client"
import React, { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import BusmeSelectHours from "@/app/components/BusmeSelectHours";
import BusmeCard from "@/app/components/BusmeCard";
import BusmePageHeader from "@/app/components/BusmePageHeader";
import BusmeInput from "@/app/components/BusmeInput";
import BusmeSecondaryButton from "@/app/components/BusmeSecondaryButton";


export default function NewRoutePage() {

  const [departureTime, setDepartureTime] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");

  const handleDepartureTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDepartureTime(e.target.value);
  };

  const handleArrivalTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArrivalTime(e.target.value);
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
          <div className="flex flex-col gap-8">
            <div className="w-full flex flex-row gap-8">
              <div className="flex flex-col w-4/12">
                <p className="subtitle-text">Información de la ruta</p>
                <div className="">
                  <BusmeInput name={"name"} title={"Nombre"}
                    placeholder={"Ingresa el nombre del vehículo"}
                    type={"text"}
                    onChange={() => {}} 
                    onBlur={() => {}}
                    value={''}
                    validation={''} 
                  />
                  <div className="grid grid-cols-2 gap-x-8">
                    <BusmeSelectHours
                      placeholder="Hora de salida"
                      value={departureTime}
                      onChange={handleDepartureTimeChange}
                    />
                    <BusmeSelectHours
                      placeholder="Hora de llegada"
                      value={arrivalTime}
                      onChange={handleArrivalTimeChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-8/12">
                <p className="subtitle-text">Chofer asignado</p>
                <div className="grid grid-cols-2 gap-x-8">
                  <BusmeInput name={"names"} title={"Nombre(s)"}
                    placeholder={"Ingresa el nombre del chofer"}
                    type={"text"}
                    onChange={() => {}} 
                    onBlur={() => {}}
                    value={''}
                    validation={''} 
                  />
                  <BusmeInput name={"lastName"} title={"Apellido(s)"}
                    placeholder={"Ingresa el apellido del chofer"}
                    type={"text"}
                    onChange={() => {}} 
                    onBlur={() => {}}
                    value={''}
                    validation={''} 
                  />
                  <BusmeInput name={"email"} title={"Correo"}
                    placeholder={"correo@ejemplo.com"}
                    type={"email"}
                    onChange={() => {}} 
                    onBlur={() => {}}
                    value={''}
                    validation={''} 
                  />
                  <BusmeInput name={"employeeNumber"} title={"Número de empleado"}
                    placeholder={"Ingresa el número de empleado"}
                    type={"text"}
                    onChange={() => {}} 
                    onBlur={() => {}}
                    value={''}
                    validation={''} 
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-row gap-x-8">
              <div className="flex flex-col w-4/12 h-full">
                <p className="subtitle-text">Mapa de la ruta</p>
                <div className="flex flex-col">
                  <p className="body-text mt-5">Añade los puntos de abordaje</p>
                  <BusmeInput name={"destination"} title={"Origen"}
                    placeholder={"Ingresa el Origen"}
                    type={"text"}
                    onChange={() => {}} 
                    onBlur={() => {}}
                    value={''}
                    validation={''} 
                  />
                  <BusmeSecondaryButton 
                    title={"Añadir nuevo punto"} 
                    disabled={true} 
                  />
                </div>
              </div>
              <div className="w-8/12 h-full">
                <div ref={mapRef} style={{ width: "100%", height: "350px", borderRadius: "10px" }}></div>
              </div>
            </div>
          </div>
          <div className="mb-2 mt-4">
            <BusmeSecondaryButton 
              title={"Generar nueva ruta"} 
              disabled={true} 
            />
          </div>
        </BusmeCard>
      </div>
    </div>
  );
}