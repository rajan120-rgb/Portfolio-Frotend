import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LoginContext } from "../../../Context/Context";

const ProtectedRoute = () => {
  const { token }= useContext(LoginContext)

  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
