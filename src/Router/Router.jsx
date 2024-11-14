import {
    createBrowserRouter,
    Navigate,
    NavLink,
  } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import CategoryNews from "../Components/CategoryNews";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children:[
        {
             path:"/",
             element:<Navigate to="/category/01" ></Navigate>
        },
        {
          path:"/category/:id",
          element: <CategoryNews></CategoryNews>,
          loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)

        }
      ]
    },
    {
        path: "/news",
        element: <div>News Component</div>,
    },

    {
        path: "/login",
        element: <div>login Component</div>,
    },
    {
        path: "*",
        element: <div>Error</div>,
    },
   
  ]);

export default Router;