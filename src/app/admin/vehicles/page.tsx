'use client'

import { useState, useEffect } from "react";
import BusmeCard from "@/app/components/BusmeCard";
import BusmeCardButtonHeader from "@/app/components/BusmeCardButtonHeader";
import BusmeSearchInput from "@/app/components/BusmeSearchInput";
import BusmeTable from "@/app/components/BusmeTable";
import BusmeSelectFilter from "@/app/components/BusmeSelectFilter";
import BusmeFilterCard from "@/app/components/BusmeFilterCard";
import { IoAdd, IoBus, IoBuild, IoGolf, IoGitCompareSharp } from "react-icons/io5";

const vehiclesHeaders = ['Nombre', 'No. de placas', 'Estado', 'Nombre de ruta'];
const vehiclesData = [
  ['BUS-A', 'BUS-9876', 'En servicio', 'UTZMG - Las cuatas'],
  ['BAN-A', 'BAN-4568', 'Dañado', 'UTZMG - Las cuatas'],
  ['BUS-B', 'BUS-1473', 'En reparación', 'UTZMG - Banús'],
  ['BAN-B', 'BAN-3612', 'Inactivo', 'UTZMG - Banús']
];

export default function BusmeVehicles() {
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const [selectedRoute, setSelectedRoute] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const statusOptions = [
    { value: '', label: 'Todos los estado'},
    { value: 'En servicio', label: 'En servicio' },
    { value: 'Dañado', label: 'Dañado' },
    { value: 'En reparación', label: 'En reparación' },
    { value: 'Inactivo', label: 'Inactivo' }
  ];

  const routesOptions = [
    { value: '', label: 'Todas las rutas'},
    { value: 'UTZMG - Las cuatas', label: 'UTZMG - Las cuatas' },
    { value: 'UTZMG - Banús', label: 'UTZMG - Banús' }
  ]

  const filteredVehiclesData = vehiclesData.filter(vehicle => {
    return (!selectedStatus || vehicle[2] === selectedStatus) && (!selectedRoute || vehicle[3] === selectedRoute) &&
      (vehicle[0].toLowerCase().includes(searchTerm.toLowerCase()) || vehicle[1].toLowerCase().includes(searchTerm.toLowerCase()));
  });

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  const handleStatusChange = (selectedOption: any) => {
    setSelectedStatus(selectedOption ? selectedOption.value : "");
  };

  const handleRouteChange = (selectedOption: any) => {
    setSelectedRoute(selectedOption ? selectedOption.value : "");
  };

  return (
    <div className="flex flex-col w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full font-poppins gap-7">
        <div className='w-full h-full'>
          <BusmeFilterCard
            title="Vehículos disponibles"
            amount={3}
            isActive={true}
            icon={<IoBus className="size-10" />}
          />
        </div>
        <div className='w-full h-full'>
          <BusmeFilterCard
            title="Vehículos en Reparación"
            amount={1}
            isActive={true}
            icon={<IoBuild className="size-10" />}
          />
        </div>
        <div className='w-full h-full'>
          <BusmeFilterCard
            title="Total de viajes realizados"
            amount={15}
            isActive={true}
            icon={<IoGolf className="size-10" />}
          />
        </div>
        <div className='w-full h-full'>
          <BusmeFilterCard
            title="Total de rutas"
            amount={2}
            isActive={true}
            icon={<IoGitCompareSharp className="size-10" />}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:gap-x-6">
        <div className="w-full lg:col-span-2">
          <BusmeSearchInput placeholder="Buscar por Nombre o No. de Placas" onSearch={handleSearch} />
        </div>
        <div className='md:gap-x-6 grid grid-cols-1 md:grid-cols-2 lg:col-span-2'>
          <div className="w-full lg:col-span-1">
            <BusmeSelectFilter
              value={selectedRoute}
              placeholder="Filtrar por ruta"
              options={routesOptions}
              onChange={handleRouteChange}
            />
          </div>
          <div className="w-full lg:col-span-1">
            <BusmeSelectFilter
              value={selectedStatus}
              placeholder="Filtrar por estado"
              options={statusOptions}
              onChange={handleStatusChange}
            />
          </div>
        </div>
      </div>
      <BusmeCard>
        <BusmeCardButtonHeader subtitle={"Vehículos"} to={"/admin/vehicles/new-vehicle"} buttonText={"Agregar transporte"} icon={IoAdd} />
        <BusmeTable headers={vehiclesHeaders} data={filteredVehiclesData} showDeleteColumn={true} showEditColumn={true} />
      </BusmeCard>
    </div>
  );
}