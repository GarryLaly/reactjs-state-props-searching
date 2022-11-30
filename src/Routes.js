import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
// import FoodDetail from "./pages/FoodDetailByID";
import FoodDetail from "./pages/FoodDetailBySlug";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  // {
  //   path: "/detail/:foodId",
  //   element: <FoodDetail />,
  // },
  {
    path: "/detail/:foodSlug",
    element: <FoodDetail />,
  },
]);
