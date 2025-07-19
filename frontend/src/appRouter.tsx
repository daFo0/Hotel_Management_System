import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "./pages/Auth/LoginPage";
import { managetRoute } from "./routes/managerRoute";
import { receptionistRoute } from "./routes/receptionistRoute";
export const appRouter = createBrowserRouter([
  { path: "/", element: <Navigate to="/login" replace /> },
  { path: "/login", element: <LoginPage /> },
  ...managetRoute,
  ...receptionistRoute,
]);
