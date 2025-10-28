import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import AdminHome from "./pages/AdminHome";
import MISDashboard from "./Pages/MisDashboard";
import MISPage1 from "./pages/MISPage1";
import ReportDashboard from "./pages/ReportDashboard";
import Report1 from "./pages/Report1";
import UserDashboard from "./pages/UserDashboard";
import ProtectedRoute from "./assets/Components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/admin/home"
          element={<ProtectedRoute allowedRoles={["admin"]}><AdminHome /></ProtectedRoute>}
        />
        <Route
          path="/admin/mis/dashboard"
          element={<ProtectedRoute allowedRoles={["admin", "user1"]}><MISDashboard /></ProtectedRoute>}
        />
        <Route
          path="/admin/mis/page1"
          element={<ProtectedRoute allowedRoles={["admin", "user1", "user2"]}><MISPage1 /></ProtectedRoute>}
        />
        <Route
          path="/admin/report/dashboard"
          element={<ProtectedRoute allowedRoles={["admin", "user2"]}><ReportDashboard /></ProtectedRoute>}
        />
        <Route
          path="/admin/report/report1"
          element={<ProtectedRoute allowedRoles={["admin", "user1", "user2"]}><Report1 /></ProtectedRoute>}
        />

        <Route
          path="/user/dashboard"
          element={<ProtectedRoute allowedRoles={["user1", "user2"]}><UserDashboard /></ProtectedRoute>}
        />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
