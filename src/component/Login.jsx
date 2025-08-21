import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login with: ${form.email}`);
    navigate("/dashboard");
  };

  return (
    <>
     <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>

      <p className="text-sm text-center mt-4">
        <Link to="/forgot-password" className="text-blue-500 hover:underline">
          Forgot Password?
        </Link>
      </p>
      <p className="text-sm text-center mt-2">
        <Link to="/register" className="text-blue-500 hover:underline">
          Create Account
        </Link>
      </p>
    </>
    
  );
}
