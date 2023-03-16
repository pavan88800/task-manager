import React from "react";
import { Navigate } from "react-router-dom";
import { getLocalStorage } from "../utils";
let auth = getLocalStorage("token");

const PublicRoute = ({ children }) => {
  return auth && auth.length ? <Navigate to="/home" /> : children;
};

export default PublicRoute;
