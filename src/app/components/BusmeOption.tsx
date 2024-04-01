import React, { ReactNode } from 'react';
import {IconBaseProps} from "react-icons";

interface BusmeOptionProps {
    title: string;
    description: string;
    icon: React.ComponentType<IconBaseProps>;
    iconColor: string;
}

const BusmeOption: React.FC<BusmeOptionProps> = ({ title, description, icon:Icon, iconColor }) => {
    return (
        <div className="mt-5 py-3 px-4 border border-muted-500 rounded-lg">
            <div className="flex items-center">
                <Icon className={`size-6 ${iconColor}`}/>
                <div className="mx-4">
                    <p className="body-text">{title}</p>
                    <p className="modal-body-text">{description}</p>
                </div>
                <div className="flex flex-1 justify-end">
                    <input type="radio"/>
                </div>
            </div>
        </div>
    );
};

export default BusmeOption;
