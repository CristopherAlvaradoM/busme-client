'use client'

import { useState } from "react";
import BusmeCard from "@/app/components/BusmeCard";
import BusmeCardButtonHeader from "@/app/components/BusmeCardButtonHeader";
import BusmeSearchInput from "@/app/components/BusmeSearchInput";
import BusmeTable from "@/app/components/BusmeTable";
import BusmeSelectFilter from "@/app/components/BusmeSelectFilter";
import { IoAdd } from "react-icons/io5";

const vehiclesHeaders = ['Nombre', 'No. de placas', 'Estado', 'Nombre de ruta'];
const vehiclesData = [
  ['BUS-A', 'BUS-9876', 'En servicio', 'UTZMG - Las cuatas'],
  ['BAN-A', 'BAN-4568', 'Dañado', 'UTZMG - Las cuatas'],
  ['BUS-B', 'BUS-1473', 'En reparación', 'UTZMG - Banús'],
  ['BAN-B', 'BAN-3612', 'Inactivo', 'UTZMG - Banús']
];

export default function BusmeVehicles() {

  const handleSearch = (searchTerm: string) => {
    // Aquí puedes manejar la lógica de búsqueda, como realizar una solicitud a un servidor o filtrar datos locales
    console.log('Término de búsqueda:', searchTerm);
  };

  const options = [
    { value: 'estado', label: 'Estado' },
    { value: 'nombreRuta', label: 'Nombre de Ruta' }
  ]

  const [selectedFilter, setSelectedFilter] = useState<string>("");

  const handleFilterChange = (selectedOption: any) => {
    setSelectedFilter(selectedOption ? selectedOption.value : "");
  };

  return (
    <div>
      <div className="flex justify-between gap-x-10">
        <div className="w-9/12 flex-grow">
          <BusmeSearchInput placeholder="Buscar por Nombre o No. de Placas" onSearch={handleSearch} />
        </div>
        <div className="w-3/12 flex-grow">
          <BusmeSelectFilter
            value={selectedFilter}
            label=""
            options={options}
            onChange={handleFilterChange}
          />
        </div>
      </div>
      <BusmeCard>
        <BusmeCardButtonHeader subtitle={"Vehículos"} to={"/admin/vehicles/new-vehicle"} buttonText={"Agregar transporte"} icon={IoAdd} />
        <BusmeTable headers={vehiclesHeaders} data={vehiclesData} showDeleteColumn={true} showEditColumn={true} />
      </BusmeCard>
    </div>
  );
}