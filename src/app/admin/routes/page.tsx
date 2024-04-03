"use client"
import BusmeFilterCard from '@/app/components/BusmeFilterCard'; 
import BusmeSelectFilter from '@/app/components/BusmeSelectFilter'; 
import BusmeSearchInput from '@/app/components/BusmeSearchInput';
import BusmeCard from "@/app/components/BusmeCard";
import BusmeCardButtonHeader from "@/app/components/BusmeCardButtonHeader";
import BusmeTable from "@/app/components/BusmeTable";
import React, { useState } from 'react';
import { Route, MapPinned, UserRound, Clock10  } from 'lucide-react';
import { IoAdd } from "react-icons/io5";


  export default function RoutesPage() {

    const handleSearch = (searchTerm: string) => {
      // Aquí puedes manejar la lógica de búsqueda, como realizar una solicitud a un servidor o filtrar datos locales
      console.log('Término de búsqueda:', searchTerm);
    };
  
    const optionsHours = [
      { value: '', label: 'Horarios' },
      { value: '', label: '' }
    ]

    const optionsDrivers = [
      { value: '', label: 'Choferes' },
      { value: '', label: '' }
    ]
  
    const [selectedFilter, setSelectedFilter] = useState<string>("");
  
    const handleFilterChange = (selectedOption: any) => {
      setSelectedFilter(selectedOption ? selectedOption.value : "");
    };
    
    const routesHeaders = ['Nombre', 'Horario', 'Chofer', 'Origen - Destino'];
    const routesData = [
      ['UTZMG - Banús', '7:30 a.m. - 7:45 a.m.', 'Daniel Martinez', 'UTZMG - Banús'],
      ['UTZMG - Las cuatas', '7:45 a.m. - 8:15 a.m.', 'Arturo Perez', 'UTZMG - Las Cuatas'],
      ['UTZMG - Banús', '7:30 a.m. - 7:45 a.m.', 'Daniel Martinez', 'UTZMG - Banús'],
      ['UTZMG - Las cuatas', '7:45 a.m. - 8:15 a.m.', 'Arturo Perez', 'UTZMG - Las Cuatas'],
      ['UTZMG - Banús', '7:30 a.m. - 7:45 a.m.', 'Daniel Martinez', 'UTZMG - Banús'],
      ['UTZMG - Las cuatas', '7:45 a.m. - 8:15 a.m.', 'Arturo Perez', 'UTZMG - Las Cuatas'],
      ['UTZMG - Banús', '7:30 a.m. - 7:45 a.m.', 'Daniel Martinez', 'UTZMG - Banús'],
      ['UTZMG - Las cuatas', '7:45 a.m. - 8:15 a.m.', 'Arturo Perez', 'UTZMG - Las Cuatas']
    ];

    return (
      <div className="flex flex-col w-full">
        <div className="flex flex-row w-full font-poppins gap-x-7">
          <div className='w-full md:w-1/2 lg:w-1/4 h-full'>
            <BusmeFilterCard
              title="Total de rutas"
              amount={20}
              isActive={true}
              icon={<Route className='w-10 h-10'/>}
            />
          </div>
          <div className='w-full md:w-1/2 lg:w-1/4 h-full'>
            <BusmeFilterCard
              title="Total de puntos de Origen-Destino"
              amount={2000}
              isActive={true}
              icon={<MapPinned className='w-10 h-10' />}
            />
          </div>
          <div className='w-full md:w-1/2 lg:w-1/4 h-full'>
            <BusmeFilterCard
              title="Total de choferes"
              amount={2000}
              isActive={true}
              icon={<UserRound  className='w-10 h-10' />}
            />
          </div>
          <div className='w-full md:w-1/2 lg:w-1/4 h-full'>
            <BusmeFilterCard
              title="Total de horarios"
              amount={2000}
              isActive={true}
              icon={<Clock10  className='w-10 h-10' />}
            />
          </div>
        </div>
        <div className='w-full'>
          <div className="flex justify-between gap-x-6">
            <div className="w-6/12 flex-grow">
              <BusmeSearchInput  placeholder="Buscar por Nombre o Chofer" onSearch={handleSearch} />
            </div>
            <div className="w-3/12 flex-grow">
              <BusmeSelectFilter
                value={selectedFilter}
                label=""
                options={optionsHours}
                onChange={handleFilterChange}
              />
            </div>
            <div className="w-3/12 flex-grow">
              <BusmeSelectFilter
                value={selectedFilter}
                label=""
                options={optionsDrivers}
                onChange={handleFilterChange}
              />
            </div>
          </div>
        </div>
        <div className=''>
        <BusmeCard>
          <BusmeCardButtonHeader subtitle={"Rutas"} to={""} buttonText={"Agregar nueva ruta"} icon={IoAdd} />
          <BusmeTable 
            headers={routesHeaders} 
            data={routesData} 
            showDeleteColumn={true} 
            showEditColumn={true} />
        </BusmeCard>
        </div>
      </div>
    );
  }