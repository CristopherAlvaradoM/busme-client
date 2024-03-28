import React, { ReactNode } from 'react';

interface BusmeCheckboxProps {
    name: string;
    label: string;
    value: string;
}

const BusmeCheckbox: React.FC<BusmeCheckboxProps> = ({ name, value, label }) => {
    return (
        <div className="flex flex-grow items-center mt-5">
            <input className="form-checkbox size-5" type="checkbox" name={name} value={value}/>
            <p className="bold-body-text ml-2">{label}</p>
        </div>
    );
};

export default BusmeCheckbox;
