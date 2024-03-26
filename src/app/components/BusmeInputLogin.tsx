import React from 'react';

interface InputFieldProps {
  label: string;
  type: string;
  name: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, name }) => {
  return (
    <div className="mb-4 w-full text-start font-poppins">
      <label htmlFor={type} className="text-black text-lg text-mut font-semi-bold mb-10">
        {label}
      </label>
      <input
        type={type}
        id={type}
        name={name}
        placeholder={label}
        style={{ borderBottomWidth: '1.8px' }}
        className="border-b border-muted-500 py-2 w-full text-base font-medium outline-none focus:border-primary-800"
        required 
      />
    </div>
  );
};

export default InputField;