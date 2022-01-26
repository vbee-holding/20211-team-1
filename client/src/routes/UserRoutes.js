import Category from "../pages/User/Category";
import Home from "../pages/User/Home";
import Layout from "../shared/layout/Layout";
import { FE_CATEGORY_CONSTANT_ROUTES } from "./FEConstantRoutes";
export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/category",
        children: [
          { path: FE_CATEGORY_CONSTANT_ROUTES.hot.path, element: <Category id={FE_CATEGORY_CONSTANT_ROUTES.hot.id} /> },
          { path: FE_CATEGORY_CONSTANT_ROUTES.new.path, element: <Category id={FE_CATEGORY_CONSTANT_ROUTES.new.id} /> },
          { path: FE_CATEGORY_CONSTANT_ROUTES.covid_19.path, element: <Category id={FE_CATEGORY_CONSTANT_ROUTES.covid_19.id} /> },
          { path: FE_CATEGORY_CONSTANT_ROUTES.entertainment.path, element: <Category id={FE_CATEGORY_CONSTANT_ROUTES.entertainment.id} /> },
          { path: FE_CATEGORY_CONSTANT_ROUTES.sport.path, element: <Category id={FE_CATEGORY_CONSTANT_ROUTES.sport.id} /> },
          { path: FE_CATEGORY_CONSTANT_ROUTES.technology.path, element: <Category id={FE_CATEGORY_CONSTANT_ROUTES.technology.id} /> },
          { path: FE_CATEGORY_CONSTANT_ROUTES.vietnam_travel.path, element: <Category id={FE_CATEGORY_CONSTANT_ROUTES.vietnam_travel.id} /> },
          { path: FE_CATEGORY_CONSTANT_ROUTES.world_travel.path, element: <Category id={FE_CATEGORY_CONSTANT_ROUTES.world_travel.id} /> },
        ],
      },
      { path: "*", element: <Home /> },
    ],
  },
];
