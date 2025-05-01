import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
// import { auth } from "@/FireBaseConfig";
// import { Navigate } from "react-router-dom";
// // import { auth } from "@/FireBaseConfig";

// const ProtectedRoute = ({ children }) => {
//   const user = auth.currentUser;
//   return user ? children : <Navigate to="/" />;
// };

// export default ProtectedRoute;
