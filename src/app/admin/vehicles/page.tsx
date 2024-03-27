'use client'

import BusmeCard from "@/app/components/BusmeCard";
import BusmeCardButtonHeader from "@/app/components/BusmeCardButtonHeader";
import BusmeSearchInput from "@/app/components/BusmeInputSearch";
import BusmeTable from "@/app/components/BusmeTable";
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

  return (
    <div>
      <BusmeSearchInput placeholder="Buscar por Nombre o No. de Placas" onSearch={handleSearch} />
      <BusmeCard>
        <BusmeCardButtonHeader subtitle={"Vehículos"} to={"/admin/vehicle/new-vehicle"} buttonText={"Agregar transporte"} icon={IoAdd} />
        <BusmeTable headers={vehiclesHeaders} data={vehiclesData} showDeleteColumn={true} showEditColumn={true}/>
      </BusmeCard>
    </div>
  );
}