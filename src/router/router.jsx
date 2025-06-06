import {createBrowserRouter} from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";

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
        element: <h1>Need more Time to do this. </h1>,
      },
      {
        path: "/about",
        element: <h1>Need more Time to do this. </h1>,
      },
      {
        path: "/blog",
        element: <h1>Need more Time to do this. </h1>,
      },

      {
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("https://code-commando.com/api/v1/products"),
      },
    ],
  },
]);

export default router;
