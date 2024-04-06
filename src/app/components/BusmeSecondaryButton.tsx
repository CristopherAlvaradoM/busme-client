import React from "react";

interface BusmeSecondaryButtonProps {
    title: string;
    disabled: boolean;
    onClick?: () => void; // Hacer onClick opcional agregando "?" antes del ":"
}

const BusmeSecondaryButton: React.FC<BusmeSecondaryButtonProps> = ({title, disabled, onClick}) => {
    return (
        <button
            type="submit" // Cambiar el tipo a "button" para evitar enviar formularios
            disabled={disabled}
            onClick={onClick} // Usar la función onClick si está definida
            className="button-secondary button-secondary-hover w-full mt-6"
        >
            {title}
        </button>
    )
}

export default BusmeSecondaryButton;