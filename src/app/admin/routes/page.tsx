"use client"
import BusmeFilterCard from '@/app/components/BusmeFilterCard'; 
import BusmeSelectFilter from '@/app/components/BusmeSelectFilter'; 
import BusmeSearchInput from '@/app/components/BusmeSearchInput';
import React, { useState } from 'react';
import { Route, MapPinned, UserRound, Clock10  } from 'lucide-react';


  export default function RoutesPage() {

    const handleSearch = (searchTerm: string) => {
      // Aquí puedes manejar la lógica de búsqueda, como realizar una solicitud a un servidor o filtrar datos locales
      console.log('Término de búsqueda:', searchTerm);
    };
  
    const options = [
      { value: '', label: '' },
      { value: '', label: '' }
    ]
  
    const [selectedFilter, setSelectedFilter] = useState<string>("");
  
    const handleFilterChange = (selectedOption: any) => {
      setSelectedFilter(selectedOption ? selectedOption.value : "");
    };

    return (
      <div className="flex flex-col h-full w-full gap-y-5">
        <div className="flex flex-row w-full font-poppins gap-x-6">
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
            <div className="w-9/12 flex-grow ">
              <BusmeSearchInput  placeholder="Buscar por Nombre o Chofer" onSearch={handleSearch} />
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
        </div>
        <div className=''>
          TABLE
        </div>
      </div>
    );
  }