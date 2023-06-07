import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Login/Register/Register";
import Login from "../pages/Login/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"register",
        element:<Register />
      },
      {
        path:"login",
        element:<Login />
      }
    ],
  },
]);
