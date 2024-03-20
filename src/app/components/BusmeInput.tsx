import React from "react";

interface BusmeInputProps {
    name: string;
    title: string;
    placeholder: string;
    type: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    value: string;
}

const BusmeInput: React.FC<BusmeInputProps> = ({name, title, placeholder, type, onChange, onBlur, value}) => {
    return (
        <div className="mt-5">
            <p className="caption-text">{title}</p>
            <input type={type} placeholder={placeholder} name={name}
                   onChange={onChange}
                   onBlur={onBlur}
                   value={value}
                   className="w-full rounded-lg bg-muted-200 p-3 font-poppins mt-2"/>
        </div>
    )
}

export default BusmeInput;