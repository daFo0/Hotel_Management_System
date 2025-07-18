import React from "react";

type TextBoxProps = {
  className?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  name?: string;
};

export default function TextBox({
  className,
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  required = false,
  name,
}: TextBoxProps) {
  return (
    <div className="mb-4">
      {label && (
        <label className="block mb-1 font-medium text-gray-700" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      />
    </div>
  );
}
