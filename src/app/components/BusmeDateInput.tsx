import React from "react";
import { IoCalendarClearOutline } from 'react-icons/io5';

interface DateInputProps {
    name: string;
    title: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void; 
    value: string;
    validation: any;
}

const BusmeDateInput: React.FC<DateInputProps> = ({name, title, onChange, onBlur, value, validation}) => {
    const inputField = (
        <div className="relative">
            <IoCalendarClearOutline className="absolute left-3 top-1 text-muted-200" />
            <input
                type="date"
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                className={`w-full rounded-lg bg-muted-200 px-3 py-2.5 font-poppins mt-2 border ${
                    validation ? 'border-danger' : 'border-muted-200'
                }`}
            />
        </div>
    );

    return (
        <div className="mt-5">
            <p className="caption-text">{title}</p>
            {inputField}
            <p className="error-text">{validation}</p>
        </div>
    );
}

export default BusmeDateInput;