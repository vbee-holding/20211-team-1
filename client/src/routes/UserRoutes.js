import Category from "../pages/User/Category";
import Home from "../pages/User/Home";
import Layout from "../shared/layout/User/Layout";
import LogIn from "../pages/Admin/Login"
import Articles from "../pages/Admin/Articles"
import Categories from "../pages/Admin/Categories";
import Sources from "../pages/Admin/Sources";
import ResetPassword from "../pages/Admin/ResetPassword"
import { FE_CATEGORY_CONSTANT_ROUTES, FE_ADMIN_CONSTANT_ROUTES } from "./FEConstantRoutes";

export const routes = [
  {
    path: "/admin",
    children:[
      { path: FE_ADMIN_CONSTANT_ROUTES.login.path, element: <LogIn title="Báo mới nà"/>},
      { path: FE_ADMIN_CONSTANT_ROUTES.reset_password.path, element:  <ResetPassword/>},
      { path: FE_ADMIN_CONSTANT_ROUTES.articles.path, element: <Articles/>},
      { path: FE_ADMIN_CONSTANT_ROUTES.categories.path, element:  <Categories/>},
      { path: FE_ADMIN_CONSTANT_ROUTES.sources.path, element: <Sources/>},
    ]
  },
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
          { path: FE_CATEGORY_CONSTANT_ROUTES.health.path, element: <Category id={FE_CATEGORY_CONSTANT_ROUTES.health.id} /> },
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