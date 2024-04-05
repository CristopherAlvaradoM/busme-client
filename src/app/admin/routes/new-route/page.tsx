"use client"
import BusmePageHeader from "@/app/components/BusmePageHeader";
import React from "react";

export default function NewRoutePage() {
  
  return (
    <div>
      <BusmePageHeader 
        rol={"Administrador"} 
        title={"Nuevo Ruta"} 
        username={"GalloDeOro"} 
        showBackIcon={true} 
      />
    </div>
  );
}