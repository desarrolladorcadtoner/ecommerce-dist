import React, { useState } from "react";
import { InputOtp } from "primereact/inputotp";
import { Button } from "primereact/button";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { LogOut } from "lucide-react";

const OTP_CODE = "1234";

interface Props {
    onVerified: () => void;
}

const OtpVerification: React.FC<Props> = ({ onVerified }) => {
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
    const { logout } = useAuth();

    const handleVerify = () => {
        if (otp === OTP_CODE) {
            setError("");
            onVerified();
        } else {
            setError("Código incorrecto");
            router.push("/");
            logout;
        }
    };

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-lg font-bold mb-4">Verificación OTP</h2>
            <p className="mb-4 text-gray-600">Ingresa el código enviado </p>
                <InputOtp
                    length={4}
                    value={otp}
                    onChange={(e) => setOtp(e.value?.toString() ?? "")}
                    mask
                    style={{ width: "2.5rem", height: "2.5rem", fontSize: "1.5rem", marginRight: "9rem" }}
                />
            <Button label="Verificar" onClick={handleVerify} className="mt-2 bg-[#004466] text-white w-24 h-8 mt-8" />
            {error && <div className="text-red-500 mt-2">{error}</div>}
        </div>
    );
};

export default OtpVerification;
