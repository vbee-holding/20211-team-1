import Category from "../pages/User/Category";
import Home from "../pages/User/Home";
import Layout from "../shares/layout/Layout";
import { FE_CATEGORY_CONSTANT_ROUTES } from "./FEConstantRoutes";
export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/category",
        element: <Category />,
        children: [
          { index: true, element: <Category /> },
          { path: FE_CATEGORY_CONSTANT_ROUTES.top.path, element: <Category /> },
          { path: FE_CATEGORY_CONSTANT_ROUTES.hot.path, element: <Category /> },
          { path: FE_CATEGORY_CONSTANT_ROUTES.new.path, element: <Category /> },
          { path: FE_CATEGORY_CONSTANT_ROUTES.covid_19.path, element: <Category /> },
          { path: FE_CATEGORY_CONSTANT_ROUTES.entertainment.path, element: <Category /> },
          { path: FE_CATEGORY_CONSTANT_ROUTES.sport.path, element: <Category /> },
          { path: FE_CATEGORY_CONSTANT_ROUTES.technology.path, element: <Category /> },
          { path: FE_CATEGORY_CONSTANT_ROUTES.video.path, element: <Category /> },
          { path: FE_CATEGORY_CONSTANT_ROUTES.vietnam_travel.path, element: <Category /> },
          { path: FE_CATEGORY_CONSTANT_ROUTES.world_travel.path, element: <Category /> },
        ],
      },
      { path: "*", element: <Category /> },
    ],
  },
];
