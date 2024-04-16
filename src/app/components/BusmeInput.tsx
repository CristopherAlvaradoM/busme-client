import React from "react";

interface BusmeInputProps {
    name: string;
    title: string;
    placeholder: string;
    type: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void; 
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void; 
    value: string;
    validation: any;
    disabled? : boolean;
    multiline?: boolean; // Nueva prop para determinar si el input tiene altura completa
}

const BusmeInput: React.FC<BusmeInputProps> = ({name, title, placeholder, type, onChange, onBlur, value, validation, multiline = false, disabled = false}) => {
    const inputField = multiline ? (
        <textarea
            disabled={disabled}
            placeholder={placeholder}
            name={name}
            onChange={onChange} 
            onBlur={onBlur} 
            value={value}
            className={`w-full rounded-lg bg-muted-200 p-3 font-poppins mt-2 border ${
                validation ? 'border-danger' : 'border-muted-200'
            } h-32 resize-none text-left lg:text-base md:text-sm text-xs`}
        />
    ) : (
        <input
            disabled={disabled}
            type={type}
            placeholder={placeholder}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            className={`w-full rounded-lg bg-muted-200 p-3 font-poppins mt-2 border ${
                validation ? 'border-danger' : 'border-muted-200'
            } lg:text-base md:text-sm text-xs`}
        />
    );
    return (
        <div className="mt-5">
            <p className="caption-text">{title}</p>
            {inputField}
            <p className="error-text">{validation}</p>
        </div>
    )
}

export default BusmeInput;