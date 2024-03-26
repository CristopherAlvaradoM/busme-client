import React from "react";
import Select from "react-select";

interface BusmeSelectProps {
    name: string;
    title: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    options: any;
    value: string;
    validation: any;
}

const defaultValue = (options: any[], value: string) => {
    return options ? options.find(option => option.value === value) : '';
}

const customStyles = {
    control: (provided: any, state: { isFocused: any; }) => ({
        ...provided,
        width: '100%', // Ancho completo
        borderRadius: '0.5rem', // Bordes redondeados
        backgroundColor: '#EDEDED', // Fondo
        padding: '0.4rem', // Relleno interno
        fontFamily: 'Poppins', // Fuente
        marginTop: '0.5rem', // Margen superior
        border: state.isFocused ? '1px solid #EDEDED' : '1px solid #cbd5e0', // Borde
    }),
};

const BusmeSelect: React.FC<BusmeSelectProps> = ({name, title, options, value, onChange, onBlur, validation}) => {
    return (
        <div className="mt-5 w-1/2">
            <p className="caption-text">{title}</p>
            <Select name={name}
                    styles={customStyles}
                    value={defaultValue(options, value)}
                    options={options}
                    onChange={value=>onChange(value)}
                    onBlur={onBlur}/>
            <p className="error-text">{validation}</p>
        </div>
    )
}

export default BusmeSelect;