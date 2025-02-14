import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email });
    // Lógica para enviar el correo de recuperación
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center">Recuperar Contraseña</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Correo Electrónico
              </label>
              <InputText
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <Button
                type="submit"
                label="Enviar"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="text-center">
              <a href="/login" className="text-sm text-blue-500 hover:underline">
                Volver al inicio de sesión
              </a>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ForgotPassword;