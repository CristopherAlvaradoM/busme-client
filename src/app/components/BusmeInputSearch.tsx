'use client'

import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';

interface SearchInputProps {
  placeholder?: string;
  onSearch: (searchTerm: string) => void;
}

const BusmeSearchInput: React.FC<SearchInputProps> = ({ placeholder = 'Buscar...', onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value); // Llamamos a la función de búsqueda cada vez que cambia el término de búsqueda
  };

  return (
    <div className="flex items-center text-primary-500 mt-5">
      <IoSearch className="w-[20px] h-[20px] absolute ml-4 mt-2"/>
      <input
        type="text"
        name="search"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleChange}
        className="pl-10 w-full rounded-lg bg-muted-200 p-3 font-poppins mt-2 border border-muted-200"
      />
    </div>
  );
};

export default BusmeSearchInput;
