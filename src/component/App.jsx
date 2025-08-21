import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";

export default function App() {
  return (
    <Router>
      <div className="flex items-center justify-center w-screen h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-96">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
