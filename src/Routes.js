import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import FoodDetail from "./pages/FoodDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detail/:foodId",
    element: <FoodDetail />,
  },
]);
