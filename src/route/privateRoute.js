import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { ADMIN_ROLES } from "../config/adminRoles";

const PrivateRoute = () => {
  const { user } = useSelector((state) => state.auth);

  const isAuthenticated = user;

  return isAuthenticated ? (
    // && ADMIN_ROLES.includes(user.role)
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoute;
