"use client"
import BusmeCard from "@/app/components/BusmeCard";
import BusmePageHeader from "@/app/components/BusmePageHeader";
import React from "react";
import BusmeInput from "@/app/components/BusmeInput";


export default function NewRoutePage() {
  
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
                  <BusmeInput name={"name"} title={"Horarios"}
                    placeholder={"Ingresa el nombre de la ruta"}
                    type={"text"}
                    onChange={() => {}} 
                    onBlur={() => {}}
                    value={''}
                    validation={''} 
                  />
                </div>
              </div>
              <div className="flex flex-col w-8/12 gap-y-5">
                <p className="subtitle-text">Chofer asignado</p>
                <div className="grid grid-cols-2 gap-y-5">
                  <span>Inpust</span>
                  <span>Inpust</span>
                  <span>Inpust</span>
                  <span>Inpust</span>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-row gap-5">
              <div className="flex flex-col w-4/12 gap-y-5">
                <p className="subtitle-text">Mapa de la ruta</p>
                <div className="flex flex-col gap-y-5">
                  <span>Inpust</span>
                  <span>Inpust</span>
                </div>
              </div>
              <div className="w-8/12 h-full">
                <div> contededor del mapa</div>

              </div>
            </div>
          </div>
        </BusmeCard>
      </div>
    </div>
  );
}