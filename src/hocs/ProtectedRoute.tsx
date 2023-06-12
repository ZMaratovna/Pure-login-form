import React from "react";
import { Navigate } from "react-router-dom";

interface IProtectedRouteProps {
  redirectPath: string;
  children: JSX.Element;
  token?: string;
}

export const ProtectedRoute = ({
  token,
  redirectPath = "/login",
  children,
}: IProtectedRouteProps): JSX.Element => {
  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};
