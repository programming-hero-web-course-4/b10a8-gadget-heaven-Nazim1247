import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Toaster } from 'react-hot-toast';



const MainLayout = () => {
    return (
        <div className="max-w-[1250px] w-11/12 mx-auto">
            <Toaster />
            {/* navbar */}
            <Navbar></Navbar>
                {/* dynamic section */}
            <div className="min-h-[calc(100vh-378px)]">
                <Outlet></Outlet>
            </div>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;