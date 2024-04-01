import React from 'react';
import { IconBaseProps } from "react-icons";
import { IoCheckmarkCircle } from "react-icons/io5";

interface BusmeOptionProps {
    title: string;
    description: string;
    icon: React.ComponentType<IconBaseProps>;
    iconColor: string;
    value: string;
    selected: boolean;
    onSelect: () => void;
}

const BusmeOption: React.FC<BusmeOptionProps> = ({ title, description, icon: Icon, iconColor, value, selected, onSelect }) => {
    const handleCardClick = () => {
        onSelect();
    };

    return (
        <div
            className={`mt-5 py-3 px-4 border border-muted-500 rounded-lg cursor-pointer ${selected ? 'bg-select-50 border-select-700' : 'bg-white'}`}
            onClick={handleCardClick}
        >
            <div className="flex items-center">
                <Icon className={`size-6 ${selected ? iconColor : ''}`} />
                <div className="mx-4">
                    <p className="body-text">{title}</p>
                    <p className="modal-body-text">{description}</p>
                </div>
                {selected && (
                    <IoCheckmarkCircle className="size-7 text-primary-600" />
                )}
            </div>
        </div>
    );
};

export default BusmeOption;