import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


const MainLayout = () => {
    return (
        <div className="max-w-[1250px] w-11/12 mx-auto">
            {/* navbar */}
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-378px)]">
                {/* dynamic section */}
                <Outlet></Outlet>
            </div>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;