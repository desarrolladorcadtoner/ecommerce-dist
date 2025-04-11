import { on } from 'events';
import { InputText } from 'primereact/inputtext';
import React from 'react';

interface InputTextCheckProps {
    nameInput: string;
    className?: string;
    id: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputTextCheck: React.FC<InputTextCheckProps> = ({
    nameInput,
    className,
    id,
    value,
    onChange
}) => {
    return (
        <>
            <div className="space-y-2">
                <label className="block text-sm font-bold">
                    {nameInput}
                </label>
                <InputText
                    className={className}
                    id={id}
                    value={value}
                    onChange={onChange}
                />
            </div>

            {/*<div className="flex-auto">
                <label htmlFor="calle" className="font-bold block mb-2">
                    {nameInput}
                </label>
                <InputText
                    className={className}
                    id={id}
                    value={value}
                    onChange={onChange}
                />
            </div>*/}
        </>
    );
};

export default InputTextCheck;