import React from "react";
import { Button } from "primereact/button";

interface CustomButtonProps {
  label: string;
  href: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, href }) => (
  <a href={href}>
    <Button
      label={label}
      className="rounded-full bg-[#0b4468] text-white border-none hover:bg-[#08334e]
      max-1024:w-40 max-1024:h-10 max-1024:text-sm"
    />
  </a>
);

export default CustomButton;
