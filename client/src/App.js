import React from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes/UserRoutes";

export default function App() {
  let element = useRoutes(routes);
  return <div>{element}</div>;
}
