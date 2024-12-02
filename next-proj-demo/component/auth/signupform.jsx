import { useState } from "react";
import { useAuth } from "./context/Authcontex";

const SignUpForm = ({ toggle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const { signup } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const userData = { email, password, username };
    signup(userData); // Call signup method from AuthContext
  };

  return (
    <div className="w-96 p-8 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-teal-600 text-center">
        Sign Up
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex items-center border rounded-lg px-3 py-2">
          <i className="bx bxs-user text-xl text-gray-500"></i>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="ml-2 w-full bg-transparent outline-none text-gray-700"
            required
          />
        </div>
        <div className="flex items-center border rounded-lg px-3 py-2">
          <i className="bx bx-mail-send text-xl text-gray-500"></i>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="ml-2 w-full bg-transparent outline-none text-gray-700"
            required
          />
        </div>
        <div className="flex items-center border rounded-lg px-3 py-2">
          <i className="bx bxs-lock-alt text-xl text-gray-500"></i>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="ml-2 w-full bg-transparent outline-none text-gray-700"
            required
          />
        </div>
        <div className="flex items-center border rounded-lg px-3 py-2">
          <i className="bx bxs-lock-alt text-xl text-gray-500"></i>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="ml-2 w-full bg-transparent outline-none text-gray-700"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-6 w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg transition-all"
          onClick={toggle}
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-600 text-center">
        Already have an account?
        <b className="text-teal-500 cursor-pointer " onClick={toggle}>
          Log In here
        </b>
      </p>
    </div>
  );
};

export default SignUpForm;
