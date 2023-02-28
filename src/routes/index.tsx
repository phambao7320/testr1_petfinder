import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../components/Route/privateRoute";
import { ROUTES } from "./constants";
import { BlankLayout } from "../layouts";

export default function AppRoutes() {
  return (
    <Routes>
      {ROUTES.map((routeConfig, index) => {
        const {
          path,
          element: Element,
          layout: LayOut = BlankLayout,
        } = routeConfig;
        if (routeConfig?.typeRoute) {
          return (
            <Route {...routeConfig} element={<PrivateRoute />} key={index}>
              <Route
                path={path}
                element={
                  <LayOut>
                    <Element />
                  </LayOut>
                }
              />
            </Route>
          );
        }
        return (
          <Route
            path={path}
            element={
              <LayOut>
                <Element />
              </LayOut>
            }
            key={index}
          />
        );
      })}
    </Routes>
  );
}
