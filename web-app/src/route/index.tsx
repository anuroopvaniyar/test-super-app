import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../screens/Login";
import Dashboard from "../screens/Dashboard";
import { ROUTE_DASHBOARD, ROUTE_SIGN_IN } from "../constants/routes";
import ProtectedRoute from "../utils/ProtectedRoute";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE_SIGN_IN} element={<Login />} />
        <Route
          path={ROUTE_DASHBOARD}
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
