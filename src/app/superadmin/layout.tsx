"use client"
import React, { useState, useEffect } from 'react';
import { AlignJustify } from 'lucide-react';
import BusmeSidebar from "../components/BusmeSidebar";

export default function SuperAdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
  
  const userRole = 'superadmin';
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Estado para controlar si el sidebar está abierto o cerrado
  const [isClient, setIsClient] = useState(false); // Estado para verificar si estamos en el cliente
  
  useEffect(() => {
    // Verificar si estamos en el cliente
    setIsClient(true);
  }, []);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  return (
    <div className="font-poppins bg-complementary-100 w-full min-h-screen overflow-auto">
      {/* Botón para abrir el sidebar en pantallas pequeñas */}
      <div className="flex w-full justify-end px-5 py-5 bg-complementary-100 sm:hidden">
        <button onClick={toggleSidebar}>
          <AlignJustify className="text-3xl text-black" />
        </button>
      </div>
      {/* Sidebar */}
      {isClient && ( // Renderizar el sidebar solo en el cliente
        <div className={`fixed top-0 left-0 z-50 w-64 h-max transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`}>
          <BusmeSidebar userRole={userRole} />
        </div>
      )}
      {/* Capa de color gris cuando el sidebar está abierto */}
      {isSidebarOpen && (
        <div
          className="fixed top-0 left-0 z-40 w-full h-full bg-muted-950 bg-opacity-60 sm:bg-transparent"
          onClick={toggleSidebar} // Cerrar el sidebar al hacer clic en la capa de color gris
        />
      )}
      {/* Contenido */}
      <div className={`ml-0 sm:ml-64 px-5 sm:py-5 max-w-full h-full ${isSidebarOpen && 'overflow-hidden'}`}>
        {children}
      </div>
    </div>
  );
}
