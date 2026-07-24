import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../../Context/Context";


const PublicRoute = ({ children }) => {
  const { token } = useContext(LoginContext);
  return token ? <Navigate to="/dashboard" replace /> : children;
};

export default PublicRoute;