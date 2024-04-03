import React from "react";
import Select from "react-select";

interface SelectFilterProps {
    placeholder: string;
    options: { value: any; label: string }[];
    value: any;
    onChange: (selectedValue: any) => void;
}

const customStyles = {
    control: (provided: any, state: { isFocused: any; }) => ({
        ...provided,
        width: '100%', // Ancho completo
        borderRadius: '0.5rem', // Bordes redondeados
        backgroundColor: '#FFFFFF', // Fondo
        padding: '0.4rem', // Relleno interno
        fontFamily: 'Poppins', // Fuente
        marginTop: '0.5rem', // Margen superior
        border: state.isFocused ? '1px solid #F5F5F5' : '1px solid #EDEDED', // Borde
    }),
};

const BusmeSelectFilter: React.FC<SelectFilterProps> = ({ placeholder, options, value, onChange }) => {

    const handleChange = (selectedOption: any) => {
        onChange(selectedOption);
    };

    return (
        <div className="mt-7">
            <Select
                value={options.find(option => option.value === value)}
                placeholder = {placeholder}
                styles={customStyles}
                options={options}
                onChange={handleChange}
            />
        </div>
    );
};

export default BusmeSelectFilter;