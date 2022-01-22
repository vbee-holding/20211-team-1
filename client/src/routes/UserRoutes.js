import Category from "../pages/User/Category";
import Home from "../pages/User/Home";
import Layout from "../shares/layout/Layout";
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
          { path: "/category/top", element: <Category /> },
          { path: "/category/hot", element: <Category /> },
          { path: "/category/new", element: <Category /> },
          { path: "/category/covid-19", element: <Category /> },
          { path: "/category/entertainment", element: <Category /> },
          { path: "/category/sport", element: <Category /> },
          { path: "/category/technology", element: <Category /> },
          { path: "/category/video", element: <Category /> },
          { path: "/category/vietnam-travel", element: <Category /> },
          { path: "/category/world-travel", element: <Category /> },
        ],
      },
      { path: "*", element: <Category /> },
    ],
  },
];
