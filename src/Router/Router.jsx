import {
    createBrowserRouter,
    Navigate,
    NavLink,
  } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import CategoryNews from "../Components/CategoryNews";
import SpecificNews from "../Components/SpecificNews";
import Auth from "../layout/Auth";
import Login from "../Components/Login";
import Register from "../Components/Register";

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
        path: "/news/:news_id",
        element: <SpecificNews></SpecificNews>,
        loader: async ({ params }) => 
          // Fetch specific news data based on `news_id`
           fetch(`https://openapi.programming-hero.com/api/news/${params.news_id}`)
         
    },

    {
        path: "/auth",
        element: <Auth></Auth>,
        children:[
          {
            path:"/auth/login",
            element:<Login></Login>
          },
          {
            path:"/auth/register",
            element:<Register></Register>
          }
        ]
    },
    {
        path: "*",
        element: <div>Error</div>,
    },
   
  ]);

export default Router;