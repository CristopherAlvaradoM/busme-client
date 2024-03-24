import React from "react";

interface BusmeSecondaryButtonProps {
    title: string;
    disabled: boolean;
}

const BusmeSecondaryButton: React.FC<BusmeSecondaryButtonProps> = ({title, disabled}) => {
    return (
        <button type="submit" disabled={disabled}
                className="button-secondary button-secondary-hover w-full mt-6">
            {title}
        </button>
    )
}

export default BusmeSecondaryButton;