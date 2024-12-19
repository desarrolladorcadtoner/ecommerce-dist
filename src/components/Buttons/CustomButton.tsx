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
      className="rounded-full bg-[#0b4468] text-white border-none hover:bg-[#08334e]"
    />
  </a>
);

export default CustomButton;
