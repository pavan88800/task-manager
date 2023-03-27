import React from "react";
import { Navigate } from "react-router-dom";
import { getLocalStorage } from "../utils";
const PrivateRoute = ({ children }) => {
  const auth = getLocalStorage("token");
  if (auth && auth.length) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default PrivateRoute;
