import React from "react";

interface BusmeSelectHoursProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validation?: string; // Esta línea define la propiedad 'validation' como opcional en la interfaz
}

const BusmeSelectHours: React.FC<BusmeSelectHoursProps> = ({ placeholder, value, onChange, validation }) => {
  return (
    <div className="mt-5">
      <label className="caption-text">{placeholder}</label>
      <input 
        type="time"
        value={value}
        onChange={onChange}
        className={`w-full rounded-lg bg-muted-200 p-3 font-poppins mt-2 ${validation ? 'border-danger' : 'border-gray-300'}`}
      />
      {validation && <p className="mt-2 text-sm text-red-500">{validation}</p>}
    </div>
  );
};

export default BusmeSelectHours;
