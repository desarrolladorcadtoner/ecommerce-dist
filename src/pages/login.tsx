import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-6 flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="border rounded-md p-8 shadow-lg w-96"
        >
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <label className="block mb-2">
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border p-2 mt-1 rounded"
              required
            />
          </label>
          <label className="block mb-4">
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border p-2 mt-1 rounded"
              required
            />
          </label>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
