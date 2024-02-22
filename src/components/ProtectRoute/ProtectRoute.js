import React from "react";
import { Navigate } from "react-router-dom";

const ProtectRouteElement = ({ element: Component, ...props }) => {
  return props.loggedIn ? <Component {...props} /> : <Navigate to="/sign-in" replace />;
};

export default ProtectRouteElement;
