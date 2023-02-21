import React from "react";
import { Navigate } from "react-router-dom";
import { getLocalStorage } from "../utils";
let auth = getLocalStorage("token");
const PrivateRoute = ({ children }) => {
  return auth ? children : <Navigate to="/" />;
};

export default PrivateRoute;
