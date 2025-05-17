import React from "react";
import { InputText } from "primereact/inputtext"

interface InputTextProps {
    tittleInput: string;
    className?: string;
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
}


const InputTextForm: React.FC<InputTextProps> = ({ tittleInput, className, name, value, onChange, disabled }) => {
    return (
        <>
            <div className="space-y-2">
                <label className="block text-sm font-medium">
                    {tittleInput}{className?.includes("required") && <span className="text-red-500">*</span>}
                </label>
                <InputText
                    className={className}
                    name={name}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                />
            </div>
        </>


    );
};

export default InputTextForm;

