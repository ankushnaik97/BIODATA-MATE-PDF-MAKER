"use client";

import React from "react";

interface FormFieldProps {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function FormField({ label, required, children, className = "" }: FormFieldProps) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
    </div>
  );
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
  return (
    <input
      {...props}
      className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition text-sm ${props.className || ""}`}
    />
  );
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
  placeholder?: string;
}

export function Select({ options, placeholder, ...props }: SelectProps) {
  return (
    <select
      {...props}
      className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition text-sm bg-white ${props.className || ""}`}
    >
      {placeholder && (
        <option value="">{placeholder}</option>
      )}
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function TextArea(props: TextAreaProps) {
  return (
    <textarea
      {...props}
      className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition text-sm resize-none ${props.className || ""}`}
    />
  );
}

interface MultiSelectProps {
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
  maxSelect?: number;
}

export function MultiSelect({ options, selected, onChange, maxSelect }: MultiSelectProps) {
  const toggle = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter((s) => s !== option));
    } else if (!maxSelect || selected.length < maxSelect) {
      onChange([...selected, option]);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => toggle(opt)}
          className={`px-3 py-1 rounded-full text-xs font-medium transition border ${
            selected.includes(opt)
              ? "bg-red-500 text-white border-red-500"
              : "bg-white text-gray-600 border-gray-300 hover:border-red-300"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

interface RadioGroupProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  name: string;
}

export function RadioGroup({ options, value, onChange, name }: RadioGroupProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((opt) => (
        <label
          key={opt}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg border cursor-pointer transition text-sm ${
            value === opt
              ? "border-red-500 bg-red-50 text-red-700"
              : "border-gray-300 hover:border-red-300"
          }`}
        >
          <input
            type="radio"
            name={name}
            value={opt}
            checked={value === opt}
            onChange={() => onChange(opt)}
            className="sr-only"
          />
          {opt}
        </label>
      ))}
    </div>
  );
}
