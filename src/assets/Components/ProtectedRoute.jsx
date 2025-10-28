import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, allowedRoles }) {
  const token = localStorage.getItem("token");
  const userType = localStorage.getItem("userType");

  if (!token) return <Navigate to="/login" />;

  if (!allowedRoles.includes(userType)) return <Navigate to="/login" />;

  return children;
}

export default ProtectedRoute;
