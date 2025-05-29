import {createBrowserRouter} from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://code-commando.com/api/v1/products"),
      },
      {
        path: "/shop",
        element: <h1>Shop</h1>,
      },
      {
        path: "/contact",
        element: <h1>Contact</h1>,
      },
    ],
  },
]);

export default router;
