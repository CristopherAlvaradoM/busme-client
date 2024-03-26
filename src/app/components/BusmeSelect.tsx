import React from "react";
import Select from "react-select";
import { useField, FieldAttributes } from "formik";

interface CustomSelectProps extends FieldAttributes<any> {
    label: string;
    options: { value: any; label: string }[];
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

const BusmeSelect: React.FC<CustomSelectProps> = ({ label, options, ...props }) => {
    const [field, meta, helpers] = useField(props.name || "");

    const handleChange = (selectedOption: any) => {
        helpers.setValue(selectedOption ? selectedOption.value : "");
    };

    return (
        <div className="mt-5">
            <p className="caption-text">{label}</p>
            <Select
                {...field}
                {...props}
                styles={customStyles}
                options={options}
                onChange={handleChange}
                onBlur={() => helpers.setTouched(true)}
                value={options.find(option => option.value === field.value)}
            />
            {meta.touched && meta.error && <p className="error-text">{meta.error}</p>}
        </div>
    );
};

export default BusmeSelect;