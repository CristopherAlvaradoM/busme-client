import React from 'react';

interface BusmeFilterCardProps {
  title: string;
  amount: number;
  isActive?: boolean; // Prop para indicar si el componente está activo o no
  icon: React.ReactNode; // Prop para el icono
  onClick?: () => void; // Función para manejar clics en el componente (solo se requiere si se usa como filtro)
}

const BusmeFilterCard: React.FC<BusmeFilterCardProps> = ({ title, amount, isActive = false, icon, onClick }) => {
  return (
    <div className={`w-full h-full ${isActive ? 'bg-green-200' : ''}`} onClick={onClick}>
      <div className={`flex rounded-t-2xl border ${isActive ? 'border-primary-600 bg-primary-600' : 'border-muted-300 bg-muted-200'} h-10 px-2 justify-center items-center`}>
        <span className={`text-sm font-semi-bold text-center ${isActive ? 'text-white' : 'text-black'}`}>{title}</span>
      </div>
      <div className={`flex rounded-b-2xl border ${isActive ? 'border-primary-600' : 'border-muted-300'} bg-white h-24 px-8 items-center justify-between`}>
        <span className={`font-semi-bold text-4xl ${isActive ? 'text-green-600' : 'text-black'}`}>{amount}</span>
        {icon} {/* Renderiza el icono aquí */}
      </div>
    </div>
  );
};

export default BusmeFilterCard;
