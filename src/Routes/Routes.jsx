import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Footer from "../Components/Footer";
const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
    },
    {
        path:"/footer",
        element: <Footer></Footer>
    }
  ]);

  export default router;