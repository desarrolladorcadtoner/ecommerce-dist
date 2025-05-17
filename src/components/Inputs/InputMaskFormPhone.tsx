import React from "react";
import { InputMask } from "primereact/inputmask";

interface InputMaskFormProps {
    tittleInput: string;
    className?: string;
    name: string;
    value: string;
    onChange: (event: { value: string; target: { name: string } }) => void;
    disabled?: boolean;
  }

export const InputMaskForm: React.FC<InputMaskFormProps> = ({ tittleInput, className, name, value, onChange, disabled }) => {
    return (
        <div className="space-y-2">
            <label className="block text-sm font-medium">
                {tittleInput}
                {className?.includes("required") && <span className="text-red-500">*</span>}
            </label>
            <InputMask
                className={className}
                id={name}
                name={name}
                value={value}
                onChange={(e) => onChange({ value: e.value || "", target: { name } })}
                mask=" 99-9999-9999"
                placeholder=" 00-0000-0000"
                disabled={disabled}
            />
        </div>
    );
  };