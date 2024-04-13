import React from "react";

interface BusmeSecondaryButtonProps {
    title: string;
    disabled: boolean;
    onClick?: () => void;
    type?: "button" | "submit" | "reset"; // Definir la propiedad type como opcional y restringir los valores a "button", "submit", o "reset"
}

const BusmeSecondaryButton: React.FC<BusmeSecondaryButtonProps> = ({title, disabled, onClick, type = "button"}) => {
    return (
        <button
            type={type} // Usar el tipo de botón especificado en las props o el valor por defecto "button"
            disabled={disabled}
            onClick={onClick}
            className="button-secondary button-secondary-hover w-full mt-6"
        >
            {title}
        </button>
    )
}

export default BusmeSecondaryButton;