import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { getUserData } from "entities/User";

import { APP_ROUTES } from "shared/config/routes";

export const RequireRole = ({ allowedRoles }: { allowedRoles: string[] }) => {
  const location = useLocation();
  const user = useSelector(getUserData);

  return user && user.roles.some((role) => allowedRoles.includes(role)) ? (
    <Outlet />
  ) : (
    <Navigate to={APP_ROUTES.HOME} state={{ from: location }} replace />
  );
};
