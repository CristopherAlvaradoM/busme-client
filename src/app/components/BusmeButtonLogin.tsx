import React from 'react';

interface CustomButtonProps {
  text: string;
  type?: "submit" | "reset" | "button"; 
  onClick?: () => void;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, type, onClick, disabled }) => {
  return (
    <button
      type={type} 
      className={`bg-primary-800 hover:bg-primary-700 text-white text-lg font-semi-bold py-2 px-4 rounded-full w-full h-12`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default CustomButton;