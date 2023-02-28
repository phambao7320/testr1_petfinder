import { pageLogin, pageHome, pageDetail } from "../pages";
import PrivateRoute from "../components/Route/privateRoute";
import { BlankLayout, HomeLayout } from "../layouts";

export const routesName = {
  HOME: "/*",
  LOGIN: "/login",
  DETAIL: "/detail/:animalId",
};

export const ROUTES = [
  {
    path: routesName.LOGIN,
    element: pageLogin,
    layout: BlankLayout,
  },
  {
    path: routesName.HOME,
    element: pageHome,
    typeRoute: PrivateRoute,
    layout: HomeLayout,
  },
];
