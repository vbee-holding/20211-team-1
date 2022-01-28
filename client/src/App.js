import React from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes/UserRoutes";
import { AuthProvider } from './services/Admin/AuthContext'
export default function App() {
  let element = useRoutes(routes);
  return (
    <AuthProvider>
      <div>{element}</div>
    </AuthProvider>
  );
}
