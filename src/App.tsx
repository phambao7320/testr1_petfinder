import { useEffect } from "react";
import "./App.css";
import AppRoutes from "./routes";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

function App() {
  const navigate = useNavigate();
  const { isLogin } = useAuth();

  useEffect(() => {
    if (isLogin) {
      console.log("Accept ", isLogin);
      navigate("/", { replace: true });
    } else {
      console.log("Not Accept", isLogin);
      navigate("/login", { replace: true });
    }
  }, [isLogin]);

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
