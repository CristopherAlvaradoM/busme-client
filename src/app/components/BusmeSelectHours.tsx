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
        className={`w-full rounded-lg bg-muted-200 px-3 py-2.5 font-poppins mt-2 border ${validation ? 'border-danger' : 'border-muted-200'}`}
      />
      {validation && <p className="error-text">{validation}</p>}
    </div>
  );
};

export default BusmeSelectHours;
