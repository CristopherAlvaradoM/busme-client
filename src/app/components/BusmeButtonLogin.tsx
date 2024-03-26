import React from 'react';

interface CustomButtonProps {
  text: string;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className={`bg-primary-800 hover:bg-primary-700 text-white text-lg font-semi-bold py-2 px-4 rounded-full w-full h-12`}
      onClick={onClick} // Pasamos la función onClick directamente aquí
    >
      {text}
    </button>
  );
};

export default CustomButton;