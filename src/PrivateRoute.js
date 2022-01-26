import React from "react";
import { Navigate } from "react-router-dom";
import Layout from "./Screen/Layout";

const PrivateRoute = ({ component }) => {
  const token = localStorage.getItem("token");

  return token ? <Layout Children={component} /> : <Navigate to="/" />;
};

export default PrivateRoute;
