import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

function PrivateRoute() {
  const { isLogin } = useAuth();

  return isLogin ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
