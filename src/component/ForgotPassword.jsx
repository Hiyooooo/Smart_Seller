import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to: ${email}`);
    navigate("/login");
  };

  return (
 <>
      <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-green-300"
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
        >
          Send Reset Link
        </button>
      </form>

      <p className="text-sm text-center mt-4">
        <Link to="/login" className="text-green-500 hover:underline">
          Back to Login
        </Link>
      </p>
    </>
  );
}
