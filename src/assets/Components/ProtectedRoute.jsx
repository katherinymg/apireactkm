import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { userData } = useContext(UserContext);

  if (!userData) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;