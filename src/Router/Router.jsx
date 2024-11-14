import {
    createBrowserRouter,
    Navigate,
    NavLink,
  } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import CategoryNews from "../Components/CategoryNews";
import SpecificNews from "../Components/SpecificNews";

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
        loader: async ({ params }) => {
          // Fetch specific news data based on `news_id`
          const response = await fetch(`https://openapi.programming-hero.com/api/news/${params.news_id}`);
          const data = await response.json();
          return data; // Returns data to `useLoaderData`
        },
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