import React from 'react'

interface InputFieldProps {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    placeholder?: string;
    helperText?: string;
    errorMessage?: string;
    disabled?: boolean;
    invalid?: boolean;
    variant?: 'filled' | 'outlined' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}


const InputBox = ({
    value,
    onChange,
    label,
    placeholder,
    helperText,
    errorMessage,
    disabled = false,
    invalid = false,
    variant = 'outlined',
    size = 'md'
}: InputFieldProps) => {
    return (
        <div
            className={`flex flex-col gap-1 rounded 
                ${size === 'sm' ? 'p-2' : size === 'lg' ? 'p-4' : 'p-3'} 
                ${disabled ? 'opacity-50 cursor-not-allowed' : ''} 
                ${invalid ? 'border-red-500' : ''}`}>
            {label && (
                <label className="text-sm font-medium text-gray-700 mb-1">
                    {label}
                </label>
            )}
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                className={`w-full rounded border placeholder:text-xs ${variant === 'filled'
                    ? 'bg-gray-100 border-gray-300'
                    : variant === 'outlined'
                        ? 'border-gray-300'
                        : 'bg-transparent border-none'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 ${size === 'sm'
                        ? 'py-1 px-2 text-sm'
                        : size === 'lg'
                            ? 'py-3 px-4 text-lg'
                            : 'py-2 px-3 text-base'
                    } ${invalid ? 'border-red-500 ring-red-500' : ''}`}
                aria-invalid={invalid} />
            {helperText && !invalid && (
                <small className="text-xs text-gray-500">{helperText}</small>
            )}
            {invalid && errorMessage && (
                <small className="text-xs text-red-600">{errorMessage}</small>
            )}
        </div>
    )
}

export default InputBox