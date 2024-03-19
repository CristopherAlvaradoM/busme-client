import React from "react";

interface BusmeInputProps {
 title: string;
 placeholder: string;
 type: string;
}

const BusmeInput : React.FC<BusmeInputProps> = ({title, placeholder, type}) => {
    return (
        <div className="mt-5">
            <p className="caption-text">{title}</p>
            <input type={type} placeholder={placeholder}
                   className="w-full rounded-lg bg-muted-200 p-3 font-poppins mt-2"/>
        </div>
    )
}

export default BusmeInput;