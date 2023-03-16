import React from "react";
import { Navigate } from "react-router-dom";
import { getLocalStorage } from "../utils";
const PrivateRoute = ({ children }) => {
  const auth = getLocalStorage("token");
  return auth && auth.length ? children : <Navigate to="/" />;
};

export default PrivateRoute;
