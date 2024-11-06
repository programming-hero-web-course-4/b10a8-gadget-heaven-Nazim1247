import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Footer from "../Components/Footer";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import ErrorPage from "../Components/ErrorPage";
import ProductsCard from "../Components/ProductsCard";
import ProductDetail from "../Components/ProductDetail";
import Favorites from "../Pages/Favorites";
const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
            loader: ()=> fetch('../categories.json'),
            children: [
                {
                    path: "/",
                    element: <ProductsCard></ProductsCard>,
                    loader: ()=> fetch('../data.json')
                },
                {
                    path: "/category/:category",
                    element: <ProductsCard></ProductsCard>,
                    loader: ()=> fetch('../data.json')
                }
            ]
        },
        {
            path: "/productDetail/:id",
            element: <ProductDetail></ProductDetail>,
            loader: ()=> fetch('../data.json')
        },
        {
            path: "/statistics",
            element: <Statistics></Statistics>
        },
        {
            path: "/dashboard",
            element: <Dashboard></Dashboard>,
            loader: ()=> fetch('../data.json'),
        },
        {
            path: "/favorites",
            element: <Favorites></Favorites>,
            loader: ()=> fetch('../data.json'),
        }
      ]
    },
    {
        path:"/footer",
        element: <Footer></Footer>
    }
  ]);

  export default router;