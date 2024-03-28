import React from 'react';

interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  value: string;
  error?: string;
  touched?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, name, onChange, onBlur, value, error, touched }) => {
  return (
    <div className="mb-4 w-full text-start font-poppins">
      <label htmlFor={name} className="text-black text-lg text-mut font-semi-bold mb-10">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={label}
        style={{ borderBottomWidth: '1.8px' }}
        className={`border-b border-muted-500 py-2 w-full text-base font-medium outline-none focus:border-primary-800 ${touched && error}`}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        required
      />
      {touched && error && <p className="text-danger text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;