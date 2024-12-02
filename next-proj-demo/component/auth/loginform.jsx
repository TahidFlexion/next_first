import { useState } from "react";
import { useAuth } from "./context/Authcontex";

const LogInForm = ({ toggle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    login(userData);
  };

  return (
    <div className="w-96 p-8 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-2xl text-center font-bold mb-4 text-teal-600">
        Login
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex items-center border rounded-lg px-3 py-2">
          <i className="bx bxs-user text-xl text-gray-500"></i>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
            className="ml-2 w-full bg-transparent outline-none text-gray-700"
          />
        </div>
        <div className="flex items-center border rounded-lg px-3 py-2">
          <i className="bx bxs-lock-alt text-xl text-gray-500"></i>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
            className="ml-2 w-full bg-transparent outline-none text-gray-700"
          />
        </div>
        <button
          type="submit"
          className="mt-6 w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg transition-all"
        >
          Log In
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-600 text-center">
        Don't have an account?{" "}
        <b className="text-teal-500 cursor-pointer" onClick={toggle}>
          Sign up here
        </b>
      </p>
    </div>
  );
};

export default LogInForm;
