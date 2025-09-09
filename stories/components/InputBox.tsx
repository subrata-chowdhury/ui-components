'use client'
import React, { useState } from 'react'
import { X, Eye, EyeOff, Loader2, InfoIcon, LucideMailWarning, MessageCircleWarning } from "lucide-react";

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

    type?: string;
    clearable?: boolean;
    passwordToggle?: boolean;
    loading?: boolean;
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
    size = 'md',

    type = 'text',
    clearable,
    passwordToggle,
    loading = false,
}: InputFieldProps) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div
            className={`flex flex-col gap-1 rounded 
                ${disabled ? 'opacity-50 cursor-not-allowed' : ''} 
                ${invalid ? 'border-red-500' : ''}`}>
            {label && (
                <label
                    htmlFor={"inputbox-input" + label.replace(/\s+/g, '-').toLowerCase()}
                    className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                    {label}
                </label>
            )}
            <div className='flex'>
                <input
                    id={"inputbox-input" + label?.replace(/\s+/g, '-').toLowerCase()}
                    type={type === "password" ? (showPassword ? "text" : "password") : type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    disabled={disabled || loading}

                    className={`w-full rounded border placeholder:text-xs 
                    focus:outline-none focus:ring-1 focus:ring-blue-500 
                    ${((passwordToggle && type === "password") || (clearable && value && !disabled)) ? 'rounded-r-none' : ''}
                    ${variant === 'filled' ? 'bg-gray-100 dark:bg-gray-800 border-gray-300'
                            : (variant === 'outlined' ? 'border-gray-300' : 'bg-transparent border-none')} 
                    ${size === 'sm' ? 'py-1 px-2 text-sm' : (size === 'md' ? 'py-2 px-3 text-base' : 'py-3 px-4 text-lg')} 
                    ${invalid ? 'border-red-500 ring-red-500' : ''}
                    ${disabled ? 'bg-gray-200 cursor-not-allowed' : ''}`}

                    aria-invalid={invalid}
                    aria-label={label}
                    aria-labelledby={label ? 'inputbox-label' : undefined}
                    title={label || placeholder || 'Input field'}
                    role="textbox"
                />
                {clearable && value && !disabled && (
                    <button
                        name='clear-button'
                        type="button"
                        className={`text-gray-400 hover:text-gray-600 px-2 border border-l-0 cursor-pointer rounded rounded-l-none
                            ${(passwordToggle && type === "password") ? 'rounded-r-none' : ''}
                            ${invalid ? 'border-red-500 ring-red-500' : ''}
                            ${variant === 'filled' ? 'bg-gray-100 dark:bg-gray-800 border-gray-300'
                                : (variant === 'outlined' ? 'border-gray-300' : 'bg-transparent border-none')}`}
                        onClick={() => onChange?.({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>)}
                        aria-label={'Clear input'}
                        title={'Clear input'}
                    >
                        <X className="h-4 w-4" />
                    </button>
                )}
                {passwordToggle && type === "password" && (
                    <button
                        name='password-toggle'
                        type="button"
                        className={`text-gray-400 hover:text-gray-600 px-2 rounded border border-l-0 rounded-l-none cursor-pointer 
                            ${invalid ? 'border-red-500 ring-red-500' : ''}
                            ${variant === 'filled' ? 'bg-gray-100 dark:bg-gray-800 border-gray-300'
                                : (variant === 'outlined' ? 'border-gray-300' : 'bg-transparent border-none')}`}
                        onClick={() => setShowPassword((prev) => !prev)}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        title={showPassword ? "Hide password" : "Show password"}
                    >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                )}
            </div>
            {loading && (
                <div className='flex items-center gap-1 text-blue-500'>
                    <span className="inline-block w-3 h-3 border-2 border-t-transparent border-blue-700 rounded-full animate-spin"></span>
                    <div className='text-xs font-bold text-blue-700'>Loading...</div>
                </div>
            )}
            {helperText && !invalid && (
                <small className="text-xs text-gray-500 flex gap-1 items-center"><InfoIcon size={12} />{helperText}</small>
            )}
            {invalid && errorMessage && (
                <small className="text-xs text-red-600 flex gap-1 items-center"><MessageCircleWarning size={12} />{errorMessage}</small>
            )}


        </div>
    )
}

export default InputBox