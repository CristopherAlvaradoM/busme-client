"use client"

import BusmeFilterCard from '@/app/components/BusmeFilterCard'; 
import BusmeSelectFilter from '@/app/components/BusmeSelectFilter'; 
import BusmeSearchInput from '@/app/components/BusmeSearchInput';
import BusmeCard from "@/app/components/BusmeCard";
import BusmeCardButtonHeader from "@/app/components/BusmeCardButtonHeader";
import BusmeTable from "@/app/components/BusmeTable";
import React, { useState } from 'react';
import { Route, MapPinned, UserRound, Clock10 } from 'lucide-react';
import { IoAdd } from "react-icons/io5";


  export default function RoutesPage() {
    const [searchTerm, setSearchTerm] = useState(""); // Estado para almacenar el término de búsqueda
    const [selectedHourFilter, setSelectedHourFilter] = useState<string>("");
    const [selectedDriverFilter, setSelectedDriverFilter] = useState<string>("");
  
    const handleSearch = (searchTerm: string) => {
      setSearchTerm(searchTerm); // Actualiza el estado con el término de búsqueda
    };
    
    const handleHourFilterChange = (selectedOption: any) => {
      setSelectedHourFilter(selectedOption ? selectedOption.value : "");
    };
  
    const handleDriverFilterChange = (selectedOption: any) => {
      setSelectedDriverFilter(selectedOption ? selectedOption.value : "");
    };

    const handleEditUser = () => {
    }

    const handleDeleteUser = () => {
    }
  
    const routesHeaders = ['Nombre', 'Horario', 'Chofer', 'Origen - Destino'];
    const routesData = [
      ['1', 'UTZMG - Banús', '7:30 a.m. - 7:45 a.m.', 'Daniel Martinez', 'UTZMG - Banús'],
      ['2', 'UTZMG - Las cuatas', '7:45 a.m. - 8:15 a.m.', 'Arturo Perez', 'UTZMG - Las Cuatas'],
      ['3', 'UTZMG - Las cuatas', '7:45 a.m. - 8:20 a.m.', 'Raul Nuño', 'UTZMG - Las Cuatas'],
      ['4', 'UTZMG - Las cuatas', '7:45 a.m. - 8:15 a.m.', 'Jaimito elchofer', 'UTZMG - Las Cuatas'],
      ['5', 'UTZMG - Las cuatas', '6:45 a.m. - 8:15 a.m.', 'Itachi Uchiha', 'UTZMG - Las Cuatas'],
    ];
  
    // Filtrar los datos por nombre, horario y chofer
    const filteredRoutesData = routesData.filter(route => {
      const nameMatch = route[0] && route[0].toLowerCase().includes(searchTerm.toLowerCase());
      const driverMatch = route[2] && route[2].toLowerCase().includes(searchTerm.toLowerCase());
      const hourMatch = selectedHourFilter === '' || route[1].toLowerCase() === selectedHourFilter.toLowerCase();
      const driverFilterMatch = selectedDriverFilter === '' || route[2].toLowerCase() === selectedDriverFilter.toLowerCase();

      return (nameMatch || driverMatch) && hourMatch && driverFilterMatch;
    });
  
    const optionsHours = [
      { value: '', label: 'Todos los horarios' },
      { value: '7:30 a.m. - 7:45 a.m.', label: '7:30 a.m. - 7:45 a.m.' },
      { value: '7:45 a.m. - 8:15 a.m.', label: '7:45 a.m. - 8:15 a.m.' },
      { value: '8:45 a.m. - 8:15 a.m.', label: '7:45 a.m. - 8:15 a.m.' },
    ];
  
    const optionsDrivers = [
      { value: '', label: 'Todos los choferes' },
      { value: 'Daniel Martinez', label: 'Daniel Martinez' },
      { value: 'Arturo Perez', label: 'Arturo Perez' },
      { value: 'Raul Nuño', label: 'Raul Nuño' },
      { value: 'Jaimito elchofer', label: 'Jaimito elchofer' },
      { value: 'Itachi Uchiha', label: 'Itachi Uchiha' }
    ];
    
    return (
      <div className="flex flex-col w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full font-poppins gap-7">
          <div className='w-full h-full'>
            <BusmeFilterCard
              title="Total de rutas"
              amount={20}
              isActive={true}
              icon={<Route className='w-10 h-10'/>}
            />
          </div>
          <div className='w-full h-full'>
            <BusmeFilterCard
              title="Total de puntos de Origen-Destino"
              amount={2000}
              isActive={true}
              icon={<MapPinned className='w-10 h-10' />}
            />
          </div>
          <div className='w-full h-full'>
            <BusmeFilterCard
              title="Total de choferes"
              amount={2000}
              isActive={true}
              icon={<UserRound  className='w-10 h-10' />}
            />
          </div>
          <div className='w-full h-full'>
            <BusmeFilterCard
              title="Total de horarios"
              amount={2000}
              isActive={true}
              icon={<Clock10  className='w-10 h-10' />}
            />
          </div>
        </div>
        <div className='w-full'>
          <div className="grid grid-cols-1 lg:grid-cols-4 md:gap-x-6">
            <div className="w-full lg:col-span-2 flex-grow">
              <BusmeSearchInput  placeholder="Buscar por Nombre o Chofer" onSearch={handleSearch} />
            </div>
            <div className='md:gap-x-6 grid grid-cols-1 md:grid-cols-2 lg:col-span-2'>
              <div className="w-full  lg:col-span-1">
                <BusmeSelectFilter
                  value={selectedHourFilter}
                  placeholder='Filtrar por horario'
                  options={optionsHours}
                  onChange={handleHourFilterChange}
                />
              </div>
              <div className="w-full lg:col-span-1">
                <BusmeSelectFilter
                  value={selectedDriverFilter}
                  placeholder='Filtrar por chofer'
                  options={optionsDrivers}
                  onChange={handleDriverFilterChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className=''>
        <BusmeCard>
          <BusmeCardButtonHeader subtitle={"Rutas"} to={"/admin/routes/new-route"} buttonText={"Agregar nueva ruta"} icon={IoAdd} />
          <BusmeTable 
            headers={routesHeaders} 
            data={filteredRoutesData} 
            showDeleteColumn={true} 
            showEditColumn={true}
            eventHandlers={{
              onDelete: handleDeleteUser,
              onEdit: handleEditUser
          }} />
        </BusmeCard>
        </div>
      </div>
    );
  }